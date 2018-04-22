import {Component, ViewChild} from '@angular/core';
import {AlertController, Nav, NavController} from "ionic-angular";
import {HomePage} from "../home/home";

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {}

  goToMyPage(page:string) {
    // go to the MyPage component
    this.navCtrl.push(page);
  }

  setLogin(){

  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'Ticket',
          placeholder: 'Ticket Number',
          type: 'Number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            if (this.isLoggedIn()) {
              // logged in!
              return this.goToMyPage('HomePage');
              // return this.nav.setRoot(HomePage);
            } else {
              // invalid login
              // return this.goToMyPage('HomePage');
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

  isLoggedIn(){
    return true;
  }
}
