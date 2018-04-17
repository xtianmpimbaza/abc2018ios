import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BreakoutService} from "../../services/breakout-service";

@IonicPage()
@Component({
  selector: 'page-breakout',
  templateUrl: 'breakout.html',
})
export class BreakoutPage {

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  viewMode: string = "first";
  firstSchedule: Array<any>;
  secondSchedule: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, service: BreakoutService) {
    service.getBreakOne().then(data => this.firstSchedule = data);
    service.getBreakTwo().then(data => this.secondSchedule = data);
  }
}
