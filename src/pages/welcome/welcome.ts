import {Component} from '@angular/core';
import {AlertController, Events, NavController} from "ionic-angular";
import {GlobalVars} from "../../providers/global-vars";
import {UserProvider} from "../../providers/user/user";
import {HomePage} from "../home/home";
import {Storage} from "@ionic/storage";


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public global: GlobalVars,
    private user: UserProvider,
    private storage: Storage,
    public events: Events) {

    storage.get('login_key').then((logged) => {
      if (logged) {
        this.navCtrl.setRoot(HomePage);
      }
    });

  }

  goToMyPage(page: string) {
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
              this.navCtrl.setRoot(HomePage);
            }

          }
        }
      ]
    });
    alert.present();
  }


}
