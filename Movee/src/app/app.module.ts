import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { GetFirstGenrePipe } from './get-first-genre.pipe';
import { MovieGetterService } from './movie-getter.service';
import { MovieServiceService } from './movie-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NetworkService } from './network.service';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NgxQRCodeModule } from 'ngx-qrcode2';

// export class MyHammerConfig extends HammerGestureConfig  {
//   overrides = <any>{
//       // override hammerjs default configuration
//       'pan': {threshold: 5},
//       'swipe': {
//            velocity: 0.4,
//            threshold: 20,
//            direction: 31 // /!\ ugly hack to allow swipe in all direction
//       }
//   }
// }

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgxQRCodeModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MovieGetterService,
    MovieServiceService,
    NetworkService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
