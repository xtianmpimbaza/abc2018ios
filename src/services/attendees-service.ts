import {Injectable} from '@angular/core';
import attendees from "../providers/attendees";

@Injectable()
export class AttendeesService {


  getAll() {
    return Promise.resolve(attendees);
  }

  findById(id) {
    return Promise.resolve(attendees[id - 1]);
  }

}
