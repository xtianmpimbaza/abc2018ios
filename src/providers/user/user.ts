import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
import {HomePage} from "../../pages/home/home";
import {WelcomePage} from "../../pages/welcome/welcome";
//import {isEmpty} from "rxjs/operator/isEmpty";

const STORAGE_KEY = 'userlog';

@Injectable()
export class UserProvider {

  ticket = 'log_status';

  constructor(public http: Http, public storage: Storage) {
    // this.local = new Storage(LocalStorage);
  }

  isLoggedIn() {
    this.storage.get('login_key').then(value => {
      console.log('Loged in with ticket : ' + value);

      return ''+value;
      // console.log('inside : '+this.ticket);
     // return this.ticket;
    });
    // console.log(this.ticket);
    // if (this.ticket != 'log_status') {
    //   return true;
    // } else {
    //   return false;
    // }
    // return this.status;

  }

  setRootPage() {
    console.log(this.isLoggedIn());

    if (this.isLoggedIn() != undefined) {
      return HomePage;
    } else {
      return WelcomePage;
    }
  }

  saveUserLog(ticket: string) {
    // return this.getLoginTicket().then(result => {
    return this.storage.set('login_key', ticket);
    // });
  }

  getLoginTicket() {
    return this.storage.get(STORAGE_KEY);
  }

  resetLocalStorage() {
    this.storage.clear();
  }


}
