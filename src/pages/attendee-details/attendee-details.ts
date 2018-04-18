import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AttendeesService} from "../../services/attendees-service";
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-attendee-details',
  templateUrl: 'attendee-details.html',
})
export class AttendeeDetailsPage {

  // broker: any;
  attendee: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: AttendeesService, private emailComposer: EmailComposer) {
    console.log(this.navParams.data);
    this.attendee = this.navParams.data;
    service.findById(this.attendee.id).then(
      attendee => this.attendee = attendee
    );
  }

  send(mail){

    let email = {
      to: mail.Email,
      cc: '',
      bcc: [],
      attachments: [],
      subject: 'African blockchain conference',
      body: '',
      isHtml: true
    };
    console.log(email.to);

    this.emailComposer.open(email);
  }

}
