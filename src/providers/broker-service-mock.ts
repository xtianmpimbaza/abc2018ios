import {Injectable} from '@angular/core';
import brokers from './mock-brokers';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BrokerService {
  url = 'https://africanblockchain.org//wp-json/wp/v2/speaker/?_embed&&status=publish';
  // url = 'https://africanblockchain.org//wp-json/wp/v2/speaker/?_embed&&status=publish';
  // url = 'https://africanblockchain.org/wp-json/wp/v2/speaker/?status=publish';
  // getApiUrl : string = "https://jsonplaceholder.typicode.com/posts";
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
      this.http.get(this.url).map(res => res.json()).subscribe(data => {
        // console.log(data);
        return Promise.resolve(data);
        // console.log(data);
      });
      // new Promise(resolve => {
      //   this.http.get( this.url)
      //     .map(res => res.json())
      //     .subscribe((result) => {
      //         console.log(result.country);
      //
      //         // if (result.feedback =='success') {
      //         //
      //         // } else {
      //         //
      //         // }
      //       },
      //       (err) => {
      //       console.log('error occured : '+err)
      //       });
      // });
    }

}
