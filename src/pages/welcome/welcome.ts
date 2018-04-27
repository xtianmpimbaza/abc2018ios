import {Component, ViewChild} from '@angular/core';
import {AlertController, Nav, NavController} from "ionic-angular";
// import {HomePage} from "../home/home";
import {GlobalVars} from "../../providers/global-vars";
import {UserProvider} from "../../providers/user/user";
// import {MyApp} from "../../app/app.component";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public global: GlobalVars, private user: UserProvider) {
    // this.checkIsLogged();
    // this.isLoged();
  }

  isLoged(){
    // if (this.user.isLoggedIn()){
    //   console.log('logged in')
      this.nav.setRoot(HomePage);
    // }else {
    //   console.log('logged out')
    // }
  }


  goToMyPage(page: string) {
    // go to the MyPage component
    this.navCtrl.push(page);
  }


  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'ticket',
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

            if (data.ticket.length <= 2) {
              return false;
            } else {
              this.user.saveUserLog(data.ticket);
              return this.goToMyPage('HomePage');
            }

          }
        }
      ]
    });
    alert.present();
  }

}
