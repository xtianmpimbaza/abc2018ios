import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
import {isEmpty} from "rxjs/operator/isEmpty";

const STORAGE_KEY = 'userlog';

@Injectable()
export class UserProvider {

  constructor(public http: Http, public storage: Storage) {
  }

  isLoggedIn() {
    return this.getLoginTicket().then(result => {
      return result && result.length != 0;
    });
  }

  setRootPage() {
    if (this.isLoggedIn()){
      return 'HomePage'
    } else {
      return 'WelcomePage'
    }
  }

  saveUserLog(ticket) {
    return this.getLoginTicket().then(result => {
      // if (result) {
      //   // result.push(ticket);
      //   return this.storage.set(STORAGE_KEY, ticket);
      // } else {
      return this.storage.set(STORAGE_KEY, [ticket]);
      // }
    });
  }

  getLoginTicket() {
    return this.storage.get(STORAGE_KEY);
  }


}
