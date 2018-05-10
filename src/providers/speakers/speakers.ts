import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';

const STORAGE_KEY = 'speakers';
const SPONSORS_KEY = 'sponsors';


@Injectable()
export class SpeakersProvider {

  constructor(public http: Http, public storage: Storage) {

  }

  isFavorite(filmId) {
    return this.getAllSpeakers().then(result => {
      return result && result.indexOf(filmId) !== -1;
    });
  }

  favoriteFilm(filmId) {
    return this.getAllSpeakers().then(result => {
      if (result) {
        result.push(filmId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [filmId]);
      }
    });
  }

  saveSpeakers(speakers) {
    return this.storage.set(STORAGE_KEY, speakers).then(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  saveSponsors(sponsor) {
    return this.storage.set(SPONSORS_KEY, sponsor).then(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  unfavoriteFilm(filmId) {
    return this.getAllSpeakers().then(result => {
      if (result) {
        var index = result.indexOf(filmId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  getAllSpeakers() {
    return this.storage.get(STORAGE_KEY);
  }

  getAllSponsors() {
    return this.storage.get(SPONSORS_KEY);
  }

}
