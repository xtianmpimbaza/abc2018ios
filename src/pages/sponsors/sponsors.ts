import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {EmailComposer} from "@ionic-native/email-composer";
import {AttendeesService} from "../../services/attendees-service";
import {AttendeeDetailsPage} from "../attendee-details/attendee-details";


@IonicPage()
@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
})
export class SponsorsPage {
  attendees: Array<any>;
  searchKey: string = "";
  search: boolean = false;

  constructor(public navCtrl: NavController, public service: AttendeesService, private emailComposer: EmailComposer) {
    service.getAll().then(data => this.attendees = data);
  }

  openSpeakerDetail(broker) {
    this.navCtrl.push(AttendeeDetailsPage, broker);
  }

  setSearch(){
    this.search = true;
  }
  onInput(event) {
    this.service.findByName(this.searchKey)
      .then(data => {
        this.attendees = data;
      })
      .catch(error => alert(JSON.stringify(error)));
  }

  onCancel(event) {
    // this.findAll();
    this.service.getAll().then(data => this.attendees = data);
    this.search = false;
  }

  send() {
    let email = {
      to: 'xtianm4@gmail.com',
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };

    this.emailComposer.open(email);

    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        //Now we know we can send
      }
    });

  }
}
