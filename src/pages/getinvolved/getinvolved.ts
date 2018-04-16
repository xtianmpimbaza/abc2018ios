import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: 'page-getinvolved',
  templateUrl: 'getinvolved.html',
})
export class GetinvolvedPage {
  viewMode: string = "list";
  my_url: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitize: DomSanitizer) {
  }

  urlExhibitors(){
    this.my_url = "https://africanblockchain.org/exhibit/get-involved/";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.my_url);
  }
  urlSponsors(){
      this.my_url = "https://africanblockchain.org/abc-sponsors/get-involved/";
      return this.sanitize.bypassSecurityTrustResourceUrl(this.my_url);
    }

}
