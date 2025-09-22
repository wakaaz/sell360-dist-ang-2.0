import { Component, OnInit } from '@angular/core';

@Component({

    selector: 'app-ledger-details',
    templateUrl: 'salesmen-ledger-details.component.html',
    styleUrls: ['./salesmen-ledger-details.component.css'],
  standalone: false


})

export class LedgerDetailsComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    isDetailOpen: boolean;
    constructor() {
    }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.isDetailOpen = false;
    }

    openDetails(event: Event, id: any): void {
        event.stopPropagation();
        this.isDetailOpen = true;
        document.body.classList.add('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.add('d-block');
        document.getElementById('ledger-list').classList.add('blur-div');
    }

    clickOutSide(event: Event): void {
        if (!(event.target as HTMLElement).className.includes('paginate_button')
            && !(event.target as HTMLElement).className.includes('ng-value-icon left')) {
            this.closeDetails();
        }
    }

    closeDetails(): void {
        this.isDetailOpen = false;
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('ledger-list').classList.remove('blur-div');
    }
}
