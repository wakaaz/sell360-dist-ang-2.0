import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OrderLoadService {

    orderLoad: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor() { }

    setLoadContent(newOrder: any, curretnLoadContent: Array<any>): any {
    }
}
