import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {BrokerDetailPage} from "../broker-detail/broker-detail";
import {BrokerService} from "../../providers/broker-service-mock";
import {SpeakersProvider} from "../../providers/speakers/speakers";


@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage implements OnInit {

  speakers: any = [];
  loaded: boolean;
  checkStatus: boolean = true;

  constructor(public navCtrl: NavController, public service: BrokerService, public speakersProvider: SpeakersProvider) {
    this.loaded = false;
    this.getSpeakers();
    this.getPosts();
  }

  ngOnInit(): void {
    // this.getSpeakers();
    // this.getPosts();
  }

  getSpeakers(){
    this.speakersProvider.getAllSpeakers().then(data => {
      this.speakers = data
      this.checkStatus = false;
    }).catch(error => alert(JSON.stringify(error)));
  }

  openSpeakerDetail(broker) {
    this.navCtrl.push(BrokerDetailPage, broker);
  }

  getPosts() {
    this.service.getSpeakers().subscribe(data => {
        this.speakersProvider.saveSpeakers(data);
        this.speakers = data;
      // this.getSpeakers();

      },
      err => {
        console.log(err);
      });
  }

}
