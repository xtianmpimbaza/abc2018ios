import {Injectable} from '@angular/core';
import scheduletwo from './scheduletwo';

@Injectable()
export class ScheduleTwoService {

    findAll() {
        return Promise.resolve(scheduletwo);
    }

    findById(id) {
        return Promise.resolve(scheduletwo[id - 1]);
    }

}
