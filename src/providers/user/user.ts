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

  constructor(public http: Http, public storage: Storage) {
    // this.local = new Storage(LocalStorage);
  }

  isLoggedIn() {
    return this.getLoginTicket().then(result => {
          // console.log(this.storage.get(STORAGE_KEY).toString());
      console.log(result);
      return result && result[1] >= 1;
      // return false;
    });
    // return false;

  }

  setRootPage() {
    if (this.isLoggedIn()){
      return HomePage;
    } else {
      return WelcomePage;
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

  resetLocalStorage(){
    this.storage.clear();
  }


}
