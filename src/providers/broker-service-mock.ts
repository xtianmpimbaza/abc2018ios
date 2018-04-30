import {Injectable} from '@angular/core';
import brokers from './mock-brokers';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {SpeakersProvider} from "./speakers/speakers";
import {GlobalVars} from "./global-vars";

@Injectable()
export class BrokerService {
  url: string;

  constructor(private http: Http, global: GlobalVars) {
    this.url = global.api_url;
  }

  findAll() {
    return Promise.resolve(brokers);
  }

  findById(id) {
    return Promise.resolve(brokers[id - 1]);
  }

  getSpeakers() {
    return this.http.get(this.url).map(res => res.json());
  }

}
