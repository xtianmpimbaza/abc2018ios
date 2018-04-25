import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ScheduleOneService} from "../../providers/schedule-service";
import {ScheduleTwoService} from "../../providers/scheduletwo-service";
import {DatabaseProvider} from "../../providers/database/database";


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
              schTwoService: ScheduleTwoService,
              private databaseprovider: DatabaseProvider,
              private platform: Platform) {
    schOneService.findAll().then(data => this.firstSchedule = data);
    // this.databaseprovider.getDatabaseState().subscribe(rdy => {
    //   if (rdy) {
    //     this.loadDeveloperData();
    //   }
    // })
    schTwoService.findAll().then(data => this.secondSchedule = data);
  }

  loadDeveloperData() {
    this.databaseprovider.getAllDevelopers().then(data => {
      this.firstSchedule = data;
    })
  }




}
