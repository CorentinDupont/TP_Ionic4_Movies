import { Component, OnInit } from '@angular/core';
import { NavController, Events, AlertController } from '@ionic/angular';
import { MovieGetterService } from '../movie-getter.service';
import { MovieComponent } from '../movie/movie.component'
import { ShowMoviePage } from '../show-movie/show-movie.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { MovieServiceService } from '../movie-service.service';
// import { NetworkProvider } from '../../providers/network/network';
import { NetworkService } from '../network.service';

/**
 * Generated class for the MovieListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'app-movie-list',
  templateUrl: 'movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})

export class MovieListPage {
  private value = "";
  movieTitle = "";
  private page = 1;

  // Constructor
  constructor(
    public navCtrl: NavController, 
    // public navParams: NavParams, 
    public movieGetter : MovieGetterService, 
    private barcodeScanner: BarcodeScanner, 
    private moviesServiceService: MovieServiceService, 
    public networkService:NetworkService, 
    private alertController: AlertController) {
    
  }

  // Ionic Life Cycle Event - When page is show
  ionViewDidEnter(){
    if(!this.hasInternetConnection()){
      this.showNetworkAlert()
    }
  }

  // Search Bar Event - When new key is pressed
  onChange(event: any) {
    console.log("search for movies ...", JSON.stringify(event.target.value))
    if(this.hasInternetConnection()){
      // Modifiy search paramaters and call movie Service to get new
      this.page = 1;
      this.value = event.target.value;
      this.movieGetter.getMovies(this.value, this.page);
    }else{
      this.showNetworkAlert();
      console.log('PAs d\'internet')
    }
    
  }

  // Open Show Movie Page, with clicked movie
  showMovie(movie: MovieComponent){
      // this.navCtrl.push(ShowMoviePage, {movie, isAFavMovie:false});
  }

  // Infinite Scroll Management
  doInfinite(infiniteScroll){
    if(this.hasInternetConnection()){
      // Change page parameter to load more movies in the grid.
      this.page +=1;
      setTimeout(()=>{
        this.movieGetter.addMovies(this.value, this.page, infiniteScroll);
      }, 1000);
    }else{
      this.showNetworkAlert();
      infiniteScroll.complete();
    }

  }

  // QR Code Scanner Management
  scanCode() {
    // Open the camera screen and wait for QR Code
    this.barcodeScanner.scan().then(barcodeData => {
      if(this.hasInternetConnection()){
        // Prevent scanner to open show movie page when user press android back button
        if(barcodeData.text){
          console.log("QR CODE SCANNER : get some data");

          // get imdbId from scanned text (this can be something else)
          const scannedImdbId = barcodeData.text;
          console.log("QR CODE SCANNER : scannedImdbId", scannedImdbId);
    
          // try to find one movie by imdbId from the API
          this.movieGetter.getOneMovie(scannedImdbId).then((movie:MovieComponent)=>{
            console.log("SCANNED MOVIE :", JSON.stringify(movie));
            this.showMovie(movie);
          }).catch(error => {
            // If an error occur during http process, then show a scan failed alert
            console.error(JSON.stringify(error))
            this.showScanFailAlert();
          });

        }else{
          // There was nothing in the scanned data
          this.showScanFailAlert();
        }
        
      }else{
        this.showNetworkAlert();
      }
     

    }, (err) => {
        console.log('Error: ', err);
    });
  }

  // use network Service to test internet access
  hasInternetConnection(){
    return this.networkService.hasInternetConnection();
  }

  // is called to show an alert when device has no internet access
  showNetworkAlert(){
    this.networkService.doNetworkAlert();
  }

  // Scan failed alert
  async showScanFailAlert(){
    const alert = await this.alertController.create({
      header: 'Echec du scan',
      subHeader: "Aucun film n'a été trouvé suite au scan. Vérifier que vous scannez bien un QR Code venant de l'application.",
      buttons: [{
        text: 'Ok',
        role: 'Cancel',
        handler: () => {

        }
      }]
    });
    await alert.present();
  }
  

  
  

}
