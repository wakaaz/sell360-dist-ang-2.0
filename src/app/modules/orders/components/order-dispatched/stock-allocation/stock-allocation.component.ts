import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/modules/shared/services';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-stock-allocation',
  templateUrl: './stock-allocation.component.html',
  styleUrls: ['./stock-allocation.component.css'],
})
export class StockAllocationComponent implements OnInit {
  @Input() stockAllocation: any;
  @Output() closeSideBar = new EventEmitter<boolean>();
  orders: any = [];
  assignmentId: string;
  dtOptions: DataTables.Settings;
  loading: false;
  showSideBar = false;
  retailer_credit_Invoices = [];
  constructor(
    private dataService: DataService,
    private orderService: OrdersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('stockAllocation => ', this.stockAllocation);
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };
    this.assignmentId = this.route.snapshot.paramMap.get('assignId');

    console.log('this.assignmentId ', this.assignmentId);
  }

  //#region  show product list
  onShowViewOrders(event: Event, pref_id: number): void {
    event.stopPropagation();
    // this.allProducts = this.allProducts.map((product) => {
    //   return product;
    // });
    // this.dispProducts = [...this.allProducts];

    this.orderService
      .getLoadOrdersPrefs(this.assignmentId, pref_id)
      .subscribe((x) => {
        console.log('getLoadOrdersPrefs => ', x);
        this.orders = x.data;
        this.showSideBar = true;
        document.body.classList.add('no-scroll');
        document
          .getElementById('stock-allocation')
          .classList.add('blureEffct-3');
        document
          .getElementsByClassName('overlay-blure')[0]
          .classList.add('d-block');
        // document.getElementById('blureEffct-1').classList.add('blur-div');
      });
  }
  //#endregion

  closeProductsList(): void {
    this.showSideBar = false;
    document.body.classList.remove('no-scroll');
    document
      .getElementsByClassName('overlay-blure')[0]
      .classList.remove('d-block');
    document
      .getElementById('stock-allocation')
      .classList.remove('blureEffct-3');
  }
  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    return this.dataService.isNumber(event, type);
  }

  setQuantity(item: any): void {
    if (+item.current_load_allocated_qty > item.availble_stock_qty) {
      item.current_load_allocated_qty = item.availble_stock_qty;
    }
  }
  onExtraLoadItemAllocation(item: any) {
    // console.log('item => ', item.current_load_allocated_qty);
    this.orderService
      .extraLoadItemAllocation(
        this.assignmentId,
        item.pref_id,
        item.current_load_allocated_qty
      )
      .subscribe((x) => {
        console.log('success');
      });
  }

  onUpdateLoadOrderItemAllocation(order: any) {
    this.orderService
      .updateLoadOrderItemAllocation(
        this.assignmentId,
        order.order_id,
        order.pref_id,
        order.booked_qty
      )
      .subscribe((x) => {
        console.log('success');
        this.closeSideBar.emit(true);
      });
  }
}
