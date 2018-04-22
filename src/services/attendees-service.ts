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

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(attendees.filter((attendee: any) =>
      (attendee.Name +  ' ' + attendee.Company + ' ' + attendee.Position).toUpperCase().indexOf(key) > -1));
  }

}
