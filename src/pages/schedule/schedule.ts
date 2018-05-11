import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ScheduleOneService} from "../../providers/schedule-service";
import {ScheduleTwoService} from "../../providers/scheduletwo-service";
import {Http} from "@angular/http";
// import { HttpClient, HttpHeaders } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  viewMode: string = "first";
  firstSchedule = [];
  secondSchedule: Array<any>;
  api_url: string = 'https://www.adin.ug/abc2018/api/christian.php'
  // developers = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: Http,
              schOneService: ScheduleOneService,
              schTwoService: ScheduleTwoService) {
    schOneService.findAll().then(data => this.firstSchedule = data).catch(error => alert(JSON.stringify(error)));;
    // this.databaseprovider.getDatabaseState().subscribe(rdy => {
    //   if (rdy) {
    //     this.loadDeveloperData();
    //   }
    // })
    this.getSchedule();
    schTwoService.findAll().then(data => this.secondSchedule = data).catch(error => alert(JSON.stringify(error)));;
  }

  getSchedule(){
    new Promise(resolve => {
      this.http.post(this.api_url, {'auth':'246fb595064db95e76bbdd828cf7207662a6baaf', 'table':'delegates'})
        .map(res => res.json())
        .subscribe((result) => {
            console.log(result);
          },
          (err) => {
            console.log(err);
          });
    });
  }

  // loadDeveloperData() {
  //   this.databaseprovider.getAllDevelopers().then(data => {
  //     this.firstSchedule = data;
  //   })
  // }




}
