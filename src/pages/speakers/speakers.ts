import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {BrokerDetailPage} from "../broker-detail/broker-detail";
import {BrokerService} from "../../providers/broker-service-mock";


@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {

  speakers: Array<any>;
  postList:any;

  constructor(public navCtrl: NavController, public service: BrokerService) {
    service.findAll().then(data => this.speakers = data);
    // service.getSpeakers();
    this.getPosts();
  }

  openSpeakerDetail(broker) {
    this.navCtrl.push(BrokerDetailPage, broker);
  }

  getPosts(){
    this.service.getPosts().subscribe((data)=>{
      this.postList = data;
      console.log(this.postList);
    });
    // this.service.getSpeakers().then(data => this.speakers = data);
  }

}
