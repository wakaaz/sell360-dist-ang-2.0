import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forEach } from 'jszip';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';
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
  tabLoading = false;
  showalloctionErrors = false;
  alloctionErrors : string;
  assignmentId: string;
  dtOptions: any;
  loading: false;
  showSideBar = false;
  retailer_credit_Invoices = [];
  constructor(
    private dataService: DataService,
    private orderService: OrdersService,
    private route: ActivatedRoute,
    private toastService: ToasterService
  ) {}

  ngOnInit(): void {
    this.orderService.setCheckAllocationSuccess(false);
    console.log('stockAllocation => ', this.stockAllocation);
    this.alloctionErrors = '';
    this.showalloctionErrors = false;
    this.dtOptions = {
      pagingType: 'simple_numbers',
      order: [[7, 'desc']],
      processing: true,
      // dom: 'Bfrtip',
      // buttons: [
      //   {
      //     extend: 'excel',
      //     exportOptions: {
      //       columns: [0, 1, 2, 3, 4, 5, 6],
      //     },
      //   },
      //   {
      //     extend: 'print',
      //     exportOptions: {
      //       columns: [0, 1, 2, 3, 4, 5, 6],
      //     },
      //   },
      // ],
    };
    this.assignmentId = this.route.snapshot.paramMap.get('assignId');

    console.log('this.assignmentId ', this.assignmentId);
  }

  onCheckAllocation() {
    this.alloctionErrors  = '';
    this.showalloctionErrors = false;
    this.tabLoading       = true;
    this.orderService.saveLoadItemAllocation(this.assignmentId).subscribe(
      (x) => {
        this.tabLoading = false;
        this.orderService.setCheckAllocationSuccess(true);
        const toast: Toaster = {
          type: 'success',
          message: 'Allocation Quanity Verified',
          title: 'Success:',
        };
        this.toastService.showToaster(toast);
      },
      (err) => {
        this.tabLoading = false; 
        this.orderService.setCheckAllocationSuccess(false);
        
        this.showalloctionErrors = true;
        let itemrror_list:string = '';
        if(err.error.error){
          err.error.error.forEach(x=>{
            itemrror_list += `<li>Product SKU: ${x.item_sku}, Product Name: ${x.item_name} </li>`
         });
        }
        this.alloctionErrors  = `${itemrror_list}`;
        // const toast: Toaster = {
        //   type: 'error',
        //   message:'Requested allocation quantity is greater than available stock.', 
        //   title: 'Error:',
        // };
        // this.toastService.showToaster(toast);
      }
    );
  }
  
  closeAlert() {
    this.showalloctionErrors = false;
    this.alloctionErrors  = '';
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
        this.orders = x.data.map((x) => ({ ...x, updateLoading: false }));
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
    this.closeSideBar.emit(true);
  }
  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    return this.dataService.isNumber(event, type);
  }

  setQuantity(item: any): void {
    console.log(`${item.current_load_allocated_qty} > ${item.availble_stock_qty} - ${item.allocated_stock_qty}`)
    if ( 
      +item.current_load_allocated_qty > +item.availble_stock_qty - +item.allocated_stock_qty
    ) {
      item.current_load_allocated_qty = +item.availble_stock_qty - +item.allocated_stock_qty;
    }
    // if (+item.current_load_allocated_qty < item.current_load_booked_qty) {
    //   item.current_load_allocated_qty = item.current_load_booked_qty;
    // }
  }
  onExtraLoadItemAllocation(item: any) {
    // console.log('item => ', item.updateLoading);

    item.updateLoading = true;
    if (+item.current_load_allocated_qty < item.current_load_booked_qty) {
      // item.current_load_allocated_qty = item.current_load_booked_qty;
      item.updateLoading = false;
      const toast: Toaster = {
        type: 'error',
        message:
          'Requested allocation quantity is less than Booked Qty. Minimum Booked Qty is ' +
          item.current_load_booked_qty,
        title: 'Error:',
      };
      this.toastService.showToaster(toast);
    } else {
      this.orderService
        .extraLoadItemAllocation(
          this.assignmentId,
          item.pref_id,
          item.current_load_allocated_qty
        )
        .subscribe(
          (x) => {
            item.updateLoading = false;
            const toast: Toaster = {
              type: 'success',
              message: 'Allocated Quanity Updated',
              title: 'Success:',
            };
            this.toastService.showToaster(toast);
          },
          (err) => {
            item.updateLoading = false;
            const toast: Toaster = {
              type: 'error',
              message:
                'Requested allocation quantity is greater than available stock.',
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        );
    }
  }

  onUpdateLoadOrderItemAllocation(order: any) {
    order.updateLoading = true;
    this.orderService
      .updateLoadOrderItemAllocation(
        this.assignmentId,
        order.order_id,
        order.pref_id,
        +order.booked_qty + +order.free_qty
      )
      .subscribe(
        (x) => {
          order.updateLoading = false;
          const toast: Toaster = {
            type: 'success',
            message: 'Allocated Quanity Updated',
            title: 'Success:',
          };
          this.toastService.showToaster(toast);
        },
        (err) => {
          order.updateLoading  = false;
          const toast: Toaster = {
            type: 'error',
            message:
              'Requested allocation quantity is greater than available stock.',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      );
  }

  clearLoadItemAllocation(item: any) {
    item.cancelLoading = true;
    this.orderService
      .clearLoadItemAllocation(this.assignmentId, item.pref_id)
      .subscribe((x) => {
        item.cancelLoading = false;
        this.closeSideBar.emit(true);

        const toast: Toaster = {
          type: 'success',
          message: 'Allocated Quanity Updated',
          title: 'Success:',
        };
        this.toastService.showToaster(toast);
      });
  }
}
