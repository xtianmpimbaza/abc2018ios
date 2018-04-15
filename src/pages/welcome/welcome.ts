import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {}

  goToMyPage(page:string) {
    // go to the MyPage component
    this.navCtrl.push(page);
  }
}
