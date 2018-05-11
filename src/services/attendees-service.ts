import {Injectable} from '@angular/core';
import attendees from "../providers/attendees";
import {Http} from "@angular/http";
import {GlobalVars} from "../providers/global-vars";
import {Storage} from "@ionic/storage";
const STORAGE_KEY = 'delegates';
@Injectable()
export class AttendeesService {

  url: string = 'https://www.adin.ug/abc2018/api/christian.php?auth=246fb595064db95e76bbdd828cf7207662a6baaf&table=delegates';

  constructor(private http: Http, global: GlobalVars, public storage: Storage) {
    this.url = this.url;
  }
  getDelegates() {
    return this.storage.get(STORAGE_KEY);
  }

  getDels() {
    return this.http.get(this.url).map(res => res.json());
  }

  saveDelegates(delg) {
    return this.storage.set(STORAGE_KEY, delg).then(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  getAll() {
    return Promise.resolve(attendees);
  }

  findById(id) {
    return Promise.resolve(attendees[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(attendees.filter((attendee: any) =>
      (attendee.Name +  ' ' + attendee.Company + ' ' + attendee.Position).toUpperCase().indexOf(key) > -1));
  }

  login(){
    return true;
  }

}
