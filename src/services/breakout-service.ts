import {Injectable} from '@angular/core';
// import scheduleone from './scheduleone';
import breakoutone from "../providers/breakoutone";
import breakoutwo from "../providers/breakoutwo";

@Injectable()
export class BreakoutService {

  // findAll() {
  //   return Promise.resolve(scheduleone);
  // }

  getBreakOne() {
    return Promise.resolve(breakoutone);
  }

  getBreakTwo() {
    return Promise.resolve(breakoutwo);
  }

  // findById(id) {
  //   return Promise.resolve(scheduleone[id - 1]);
  // }

}
