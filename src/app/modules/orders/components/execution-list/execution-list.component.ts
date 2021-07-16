import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-orderexecution-list',
    templateUrl: 'execution-list.component.html',
    styleUrls: ['./execution-list.component.css']
})

export class OrderExecutionListComponent implements OnInit {

    dtOptions: DataTables.Settings = {};
    showExecuteOrder: boolean;
    constructor() {
    }

    ngOnInit(): void {
        this.showExecuteOrder = false;
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }

    executeOrder(): void {
        console.log('Execute Order!!!');
        this.showExecuteOrder = true;
        document.body.classList.add('no-scroll');
    }

    closeExecuteOrder(): void {
        this.showExecuteOrder = false;
        document.body.classList.add('no-scroll');
    }
}
