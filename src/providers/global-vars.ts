import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ToastController} from "ionic-angular";
// import { SocialSharing } from '@ionic-native/social-sharing';
// import {Screenshot} from "@ionic-native/screenshot";
// import {GoogleAnalytics} from "@ionic-native/google-analytics";
import { Storage } from '@ionic/storage';

@Injectable()
export class GlobalVars {
  public api_url: string;
  public username: string;
  public password: string;
  public remote: string;
  public imageUrl;

  constructor(private toastCtrl: ToastController, private storage: Storage) {

    this.api_url = 'https://abc2018mailer.herokuapp.com/sendmail/';
    // this.api_url = 'http://localhost:4000/sendmail/';

    this.username = '';
    this.password = '';

    // Url to reference images
    this.imageUrl = '';
  }

  // Show a toast
  toast(message: string, style: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      cssClass: style
    });

    toast.present();
  }

  isLoged() {
    this.storage.get('user').then((val) => {
      if (val) {
        return true;
      }else {
        return false
      }
    });
  }


}
