import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {SponsorService} from "../../providers/sponsor-service-mock";
// import {BrokerService} from "../../providers/broker-service-mock";


@IonicPage()
@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
})
export class SponsorsPage {
  sponsors: Array<any>;
  // constructor(public navCtrl: NavController, public service: SponsorService) {
  //   service.findAll().then(data => this.sponsors = data);
  // }
  constructor(public navCtrl: NavController, public service: SponsorService) {
    service.findAll().then(data => this.sponsors = data);
  }
}
