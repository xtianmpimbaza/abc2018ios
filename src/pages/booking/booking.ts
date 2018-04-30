import { Component } from '@angular/core';
import {NavController, NavParams, IonicPage} from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  my_url: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitize: DomSanitizer, platform: Platform) {
    // platform.registerBackButtonAction(() => {
    //   console.log("backPressed 1");
    //   this.navCtrl.setRoot('WelcomePage');
    // },1);
  }

  urlpaste(){
    this.my_url = "https://africanblockchain.org/book-a-seat/";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.my_url);
  }

}
