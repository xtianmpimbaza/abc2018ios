import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
// import {ExhibitorsDetailsPage} from "../exhibitors-details/exhibitors-details";
import {AttendeesService} from "../../services/attendees-service";
import {PartnersDetailsPage} from "../partners-details/partners-details";

@IonicPage()
@Component({
  selector: 'page-partners',
  templateUrl: 'partners.html',
})
export class PartnersPage {

  attendees: Array<any>;
  searchKey: string = "";
  search: boolean = false;

  constructor(public navCtrl: NavController, public service: AttendeesService) {
    service.getAll().then(data => this.attendees = data);
  }

  openSpeakerDetail(exb) {
    this.navCtrl.push(PartnersDetailsPage, exb);
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


}
