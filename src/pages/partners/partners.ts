import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
// import {ExhibitorsDetailsPage} from "../exhibitors-details/exhibitors-details";
// import {AttendeesService} from "../../services/attendees-service";
// import {PartnersDetailsPage} from "../partners-details/partners-details";
// import {BrokerDetailPage} from "../broker-detail/broker-detail";
import {SpeakersProvider} from "../../providers/speakers/speakers";
import {BrokerService} from "../../providers/broker-service-mock";

@IonicPage()
@Component({
  selector: 'page-partners',
  templateUrl: 'partners.html',
})
export class PartnersPage {

  speakers: any = [];
  speakers_backup: any = [];
  loaded: boolean;
  checkStatus: boolean = true;
  searchKey: string = "";

  constructor(public navCtrl: NavController, public service: BrokerService, public speakersProvider: SpeakersProvider) {
    this.loaded = false;
    this.getSpeakers();
    this.getPosts();
  }

  ngOnInit(): void {
    // this.getSpeakers();
    // this.getPosts();
  }

  getSpeakers() {
    this.speakersProvider.getAllSponsors().then(data => {
      this.speakers = data;
      this.speakers_backup = data;
      this.checkStatus = false;
    }).catch(error => alert(JSON.stringify(error)));
  }

  openSpeakerDetail(broker) {
    // this.navCtrl.push(BrokerDetailPage, broker);
    console.log(broker);
  }

  getItems(ev) {
    // Reset items back to all of the items
    // this.initializeItems();
    this.speakers = this.speakers_backup;

    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.speakers = this.speakers.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  onCancel(event) {
    // this.findAll();
    console.log("cleaning search");
    // this.service.getAll().then(data => this.attendees = data);
    // this.search = false;
    this.speakersProvider.getAllSponsors().then(data => {
      this.speakers = data
      this.checkStatus = false;
    }).catch(error => alert(JSON.stringify(error)));
  }

  getPosts() {
    this.service.getSponsors().subscribe(data => {
        this.speakersProvider.saveSponsors(data);
        this.speakers = data;
      },
      err => {
        console.log(err);
      });
  }

}
