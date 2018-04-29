import {Injectable} from '@angular/core';
import brokers from './mock-brokers';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BrokerService {
  url = 'http://localhost:4000/getspeakers/';

  constructor(private http: Http){

  }

  getPosts() {
    return  this.http.get(this.url)
      // .do((res : Response ) => console.log(res.json())
        .map((res : Response ) => res.json())
        // .catch(error => console.log(error)));
  }


    findAll() {
        return Promise.resolve(brokers);
    }

    findById(id) {
        return Promise.resolve(brokers[id - 1]);
    }

    getSpeakers(){
      return this.http.get(this.url).map(res => res.json());
    }
 // getSpeakers(){
 //      // this.http.get(this.url).map(res => res.json()).subscribe(data => {
 //      //   // console.log(data);
 //      //   return Promise.resolve(data);
 //      //   // console.log(data);
 //      // });
 //      new Promise(resolve => {
 //        this.http.get( this.url)
 //          .map(res => res.json())
 //          .subscribe((result) => {
 //              console.log(result.country);
 //              return result;
 //            },
 //            (err) => {
 //            console.log('error occured : '+err)
 //            });
 //      });
 //    }

}
