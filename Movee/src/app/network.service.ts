import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';



/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkService {

  public networkAlertIsOpened:boolean = false;

  constructor(public httpClient : HttpClient, public network: Network, public alertCtrl : AlertController) {
    console.log('Hello NetworkProvider Provider');
  }

  // get connection type of the device, like wifi, 4G ...
  getConnectionState(){
    return this.network.type;
  }

  // method used to know when device have an access to internet
  hasInternetConnection(){
    return this.network.type !== this.network.Connection.NONE;
  }

  // Display an alert when device has no internet access on an action requiring it
  async doNetworkAlert() {
    if(!this.networkAlertIsOpened){
      this.networkAlertIsOpened=true;
      const alert = await this.alertCtrl.create({
        header: 'Erreur de connexion',
        subHeader: "Aucun accès internet. Veuillez connecter votre appareil à internet.",
        buttons: [{
          text: 'Ok',
          role: 'Cancel',
          handler: () => {
            this.networkAlertIsOpened=false;
          }
        }]
      });
      await alert.present();
    }
  }

}
