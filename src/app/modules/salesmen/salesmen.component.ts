import { Component, OnInit } from '@angular/core';

import { SalesmenService } from './services/salesmen.service';

@Component({

    selector: 'app-salesmen-component',
    templateUrl: 'salesmen.component.html',
    styleUrls: ['./salesmen.component.css'],
  standalone: false


})

export class SalesmenComponent implements OnInit {

    constructor(
    ) {
    }

    ngOnInit(): void {
    }

}
