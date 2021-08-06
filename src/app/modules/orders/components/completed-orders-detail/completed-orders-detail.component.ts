import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-orders-detail',
  templateUrl: './completed-orders-detail.component.html',
  styleUrls: ['./completed-orders-detail.component.css']
})
export class CompletedOrdersDetailComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() {
    this.dtOptions = {
      pagingType: 'simple_numbers'
    };
  }

  ngOnInit(): void {
  }

}
