import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-retailers-list',
    templateUrl: 'retailers-list.component.html',
    styleUrls: ['./retailers-list.component.css']
})

export class RetalersListComponent implements OnInit {

    dtOptions: DataTables.Settings = {};

    constructor() {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }

    ngOnInit(): void {
    }

}
