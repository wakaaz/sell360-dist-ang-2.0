import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-create-dispatched',
    templateUrl: 'create-dispatched.component.html',
    styleUrls: ['./create-dispatched.component.css']
})

export class CreateDispatchedComponent implements OnInit {
    dtOptions: DataTables.Settings = {};

    constructor() {
    }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }
}
