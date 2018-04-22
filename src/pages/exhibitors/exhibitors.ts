import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {AttendeeDetailsPage} from "../attendee-details/attendee-details";
import {EmailComposer} from "@ionic-native/email-composer";
import {AttendeesService} from "../../services/attendees-service";
import {ExhibitorsDetailsPage} from "../exhibitors-details/exhibitors-details";

@IonicPage()
@Component({
  selector: 'page-exhibitors',
  templateUrl: 'exhibitors.html',
})
export class ExhibitorsPage {

  attendees: Array<any>;
  searchKey: string = "";
  search: boolean = false;

  constructor(public navCtrl: NavController, public service: AttendeesService) {
    service.getAll().then(data => this.attendees = data);
  }

  openSpeakerDetail(exb) {
    this.navCtrl.push(ExhibitorsDetailsPage, exb);
  }

  setSearch(){
    this.search = true;
  }
  onInput(event) {
    this.service.findByName(this.searchKey)
      .then(data => {
        this.attendees = data;
        // if (this.viewMode === "map") {
        //   this.showMarkers();
        // }
      })
      .catch(error => alert(JSON.stringify(error)));
  }

  onCancel(event) {
    // this.findAll();
    this.service.getAll().then(data => this.attendees = data);
    this.search = false;
  }

  // send() {
  //   let email = {
  //     to: 'xtianm4@gmail.com',
  //     subject: 'Cordova Icons',
  //     body: 'How are you? Nice greetings from Leipzig',
  //     isHtml: true
  //   };
  //
  //   this.emailComposer.open(email);
  //
  //   this.emailComposer.isAvailable().then((available: boolean) => {
  //     if (available) {
  //       //Now we know we can send
  //     }
  //   });
  //
  // }

}
