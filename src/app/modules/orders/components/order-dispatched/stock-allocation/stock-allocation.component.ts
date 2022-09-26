import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/modules/shared/services';

@Component({
  selector: 'app-stock-allocation',
  templateUrl: './stock-allocation.component.html',
  styleUrls: ['./stock-allocation.component.css'],
})
export class StockAllocationComponent implements OnInit {
  @Input() stockAllocation: any;
  dtOptions: DataTables.Settings;
  loading: false;
  showSideBar = false;
  retailer_credit_Invoices = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('stockAllocation => ', this.stockAllocation);
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };
  }

  //#region  show product list
  showProductsList(event: Event): void {
    event.stopPropagation();
    // this.allProducts = this.allProducts.map((product) => {
    //   return product;
    // });
    // this.dispProducts = [...this.allProducts];
    this.showSideBar = true;
    document.body.classList.add('no-scroll');
    document
      .getElementsByClassName('overlay-blure')[0]
      .classList.add('d-block');
    document.getElementById('blureEffct-1').classList.add('blur-div');
  }
  //#endregion
  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    return this.dataService.isNumber(event, type);
  }

  onExtraLoadItemAllocation(item: any) {
    console.log('item => ', item.current_load_allocated_qty);
  }
}
