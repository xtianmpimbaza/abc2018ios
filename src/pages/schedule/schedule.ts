import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ScheduleOneService} from "../../providers/schedule-service";
import {ScheduleTwoService} from "../../providers/scheduletwo-service";


@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  viewMode: string = "first";
  firstSchedule = [];
  secondSchedule: Array<any>;
  // developers = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              schOneService: ScheduleOneService,
              schTwoService: ScheduleTwoService) {
    schOneService.findAll().then(data => this.firstSchedule = data).catch(error => alert(JSON.stringify(error)));;
    // this.databaseprovider.getDatabaseState().subscribe(rdy => {
    //   if (rdy) {
    //     this.loadDeveloperData();
    //   }
    // })
    schTwoService.findAll().then(data => this.secondSchedule = data).catch(error => alert(JSON.stringify(error)));;
  }

  // loadDeveloperData() {
  //   this.databaseprovider.getAllDevelopers().then(data => {
  //     this.firstSchedule = data;
  //   })
  // }




}
