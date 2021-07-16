import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Toaster { title: string; message: string; type: 'error' | 'success'; }

@Injectable({ providedIn: 'root' })
export class ToasterService {

    toaster: Subject<Toaster> = new Subject<Toaster>();

    constructor() {
    }

    showToaster(toaster: Toaster): void {
        this.toaster.next(toaster);
    }

    get getToast(): Observable<Toaster> {
        return this.toaster.asObservable();
    }

}
