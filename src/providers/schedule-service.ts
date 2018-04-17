import {Injectable} from '@angular/core';
import scheduleone from './scheduleone';

@Injectable()
export class ScheduleOneService {

    findAll() {
        return Promise.resolve(scheduleone);
    }

    findById(id) {
        return Promise.resolve(scheduleone[id - 1]);
    }

}
