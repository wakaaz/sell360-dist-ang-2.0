import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  deleteRetailerCreditInvoice,
  getRetailersCreditInvoice,
  RecoveryRetailer,
  set_retailer_credit_Invoices_data,
} from '../../models/recovery-retailler.model';
import { OrdersService } from '../../services/orders.service';
import { DataService } from '../../../shared/services/data.service';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-retailer-recovery',
  templateUrl: './retailer-recovery.component.html',
  styleUrls: ['./retailer-recovery.component.css'],
})
export class RetailerRecoveryComponent implements OnInit {
  @Input() executionData: any = null;
  @Input() retailerId: number = 0;
  @Input() assignment_idOutRoute: string = '';
  ordersRetailers: any[];
  dtOptions: DataTables.Settings;
  loading: boolean;
  assignmentId: string;
  retailer_credit_Invoices: RecoveryRetailer[] = [];
  constructor(
    private orderService: OrdersService,
    private route: ActivatedRoute,
    private readonly dataService: DataService,
    private toastService: ToasterService
  ) {}

  ngOnInit(): void {
    // if (this.retailerId) {
    console.log('this.retailerId', this.retailerId);
    // }
    // if (!this.subOutOfRange) {
    //   console.log(this.orderService.loadOutOfRouteRecovery.value);
    //   this.subOutOfRange = this.orderService.loadOutOfRouteRecovery.subscribe(
    //     (x: number) => {
    //       console.log('out of recovery data Subscribe id => ', x);
    //       if (x) {
    //         this.retailerId = x;
    //       }
    //     }
    //   );
    // }

    this.assignmentId = null;
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };

    if (!this.executionData && this.retailerId === 0) {
      this.assignmentId = this.route.snapshot.paramMap.get('assignId') || null;
      this.orderService.orderRetailers.subscribe((x: any[]) => {
        if (x && x.length) {
          this.ordersRetailers = [...x];
        }
      });
    }
    if (this.executionData) {
      this.assignmentId = this.executionData.assignment_id;
      // this.getCreditTabData();
    }

    this.orderService.loadRetaillersRecovery.subscribe((isLoad: Boolean) => {
      if (isLoad && this.retailerId === 0) {
        this.getCreditTabData();
      }
    });
    if (this.retailerId) {
      this.assignmentId = this.assignment_idOutRoute.toString();
      this.loading = true;
      this.orderService
        .getOutOfRouteRecovery(this.retailerId)
        .subscribe((data) => {
          console.log('getOutOfRouteRecovery => ', data.data.recoveries);
          // this.retailer_credit_Invoices = [];
          // this.retailer_credit_Invoices = [
          // ...
          set_retailer_credit_Invoices_data(
            data.data.recoveries || [],
            this.retailer_credit_Invoices
          ),
            // ];
            (this.loading = false);
        });
    }
  }

  getCreditTabData() {
    this.loading = true;
    this.orderService.getCreditdatailsData(this.assignmentId).subscribe((x) => {
      this.retailer_credit_Invoices = [];
      this.retailer_credit_Invoices = set_retailer_credit_Invoices_data(
        x.data,
        this.retailer_credit_Invoices
      );
      this.loading = false;
    });
  }

  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    return this.dataService.isNumber(event, type);
  }

  addOrderBill(index: number, isAdded: boolean): void {
    const retailer_credit_Invoices = this.retailer_credit_Invoices[index];
    if (!isAdded) {
      let parentOrderId = retailer_credit_Invoices.parent_order_id;
      if (this.executionData === null && this.retailerId === 0) {
        parentOrderId = this.ordersRetailers.find(
          (x) => x.retailer_id === retailer_credit_Invoices.retailer_id
        ).id;
      } else {
        console.log('retailer_credit_Invoices', retailer_credit_Invoices);
      }
      const postModel = getRetailersCreditInvoice(
        retailer_credit_Invoices,
        parentOrderId,
        this.assignmentId
      );
      if (this.retailerId > 0) {
        postModel.parent_order_id = null;
      }
      this.orderService
        .postRetailersCreditInvoices(postModel)
        .subscribe((x) => {
          console.log('postRetailersCreditInvoices => ', x.result);
          this.retailer_credit_Invoices[index].id = x.result.id;
          this.retailer_credit_Invoices[index].is_added = 1;
          const toast: Toaster = {
            type: 'success',
            message: 'Added Successfully',
            title: 'Success:',
          };
          this.toastService.showToaster(toast);
        });
    } else {
      const postModel = deleteRetailerCreditInvoice(
        retailer_credit_Invoices.id
      );
      this.orderService
        .postRetailersCreditInvoices(postModel)
        .subscribe((x) => {
          this.getCreditTabData();
          const toast: Toaster = {
            type: 'success',
            message: 'Remove Successfully',
            title: 'Success:',
          };
          this.toastService.showToaster(toast);
        });
    }
  }
}
