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

@Component({
  selector: 'app-retailer-recovery',
  templateUrl: './retailer-recovery.component.html',
  styleUrls: ['./retailer-recovery.component.css'],
})
export class RetailerRecoveryComponent implements OnInit {
  @Input() executionData: any = null;
  ordersRetailers: any[];
  dtOptions: DataTables.Settings;
  loading: boolean;
  assignmentId: string;
  retailer_credit_Invoices: RecoveryRetailer[];
  constructor(
    private orderService: OrdersService,
    private route: ActivatedRoute,
    private readonly dataService: DataService,
    private toastService: ToasterService
  ) {}

  ngOnInit(): void {
    this.assignmentId = null;
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };

    if (!this.executionData) {
      this.assignmentId = this.route.snapshot.paramMap.get('assignId') || null;
      this.orderService.orderRetailers.subscribe((x: any[]) => {
        this.ordersRetailers = [...x];
      });
      this.getCreditTabData();
    }
    if (this.executionData) {
      this.assignmentId = this.executionData.assignment_id;
      this.getCreditTabData();
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
      if (this.executionData === null) {
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
