import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ToastController} from "ionic-angular";
import { Storage } from '@ionic/storage';

@Injectable()
export class GlobalVars {
  public api_url: string = 'https://abc2018mailer.herokuapp.com/getspeakers/';
  // public api_url: string = 'http://localhost:4000/getspeakers/';
  public username: string;
  public password: string;
  public remote: string;

  constructor(private toastCtrl: ToastController, private storage: Storage) {
    this.username = '';
    this.password = '';
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
