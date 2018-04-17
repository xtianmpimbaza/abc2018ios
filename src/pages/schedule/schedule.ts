import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScheduleOneService} from "../../providers/schedule-service";
import {ScheduleTwoService} from "../../providers/scheduletwo-service";

/**
 * Generated class for the SchedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  viewMode: string = "first";
  firstSchedule: Array<any>;
  secondSchedule: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, schOneService: ScheduleOneService, schTwoService: ScheduleTwoService) {
    schOneService.findAll().then(data => this.firstSchedule = data);
    schTwoService.findAll().then(data => this.secondSchedule = data);
  }




}
