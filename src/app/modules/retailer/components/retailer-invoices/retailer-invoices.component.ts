import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../orders/services/orders.service';
import { Subscription } from 'rxjs';
import { RetailerService } from '../../services/retailer.service';
import { ActivatedRoute } from '@angular/router';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';

@Component({
  selector: 'app-retailer-invoices',
  templateUrl: './retailer-invoices.component.html',
  styleUrls: ['./retailer-invoices.component.css'],
})
export class RetailerInvoicesComponent implements OnInit {
  dtOptions: DataTables.Settings;
  recoverModel: any;
  totalValues: any = {
    ttl_credit_retialer: 0,
    ttl_inv_amount: 0,
    ttl_invoices: 0,
    ttl_ob_credit: 0,
    shop_code: 0,
    retailer_name: '',
  };
  subscriptions: Subscription[] = [];
  creditInvoicesData: any;
  loading = false;
  recoveryBtnLoading = false;
  retailerId: number = 0;
  constructor(
    private retailerService: RetailerService,
    private actr: ActivatedRoute,
    private toastService: ToasterService
  ) {}

  ngOnInit(): void {
    this.retailerId = this.actr.snapshot.params.retailerId;
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };
    this.getRetailerInvoices();
  }

  getRetailerInvoices() {
    this.loading = true;
    this.retailerService
      .getRetailersCreditInvoices(this.retailerId)
      .subscribe((res: any) => {
        this.creditInvoicesData = res.data.invoices;
        this.totalValues = res.data.retailer ? res.data.retailer[0] : undefined;
        console.log('creditInvoicesData detail -> ', this.creditInvoicesData);
        this.loading = false;
      });
  }

  onAddRecovery() {
    this.recoveryBtnLoading = true;
    const model = {
      id: 0,
      retailer_id: 0,
      recoverd_amount: 100,
      // 'Invoice Discount is optional' ,
      // invoice_discount: 0,
    };
    this.retailerService.addRetailersCreditRecovery(model).subscribe(
      (x) => {
        console.log('recoveryAdded', x);
        this.recoveryBtnLoading = false;
        const toast: Toaster = {
          type: 'success',
          message: 'Recovery Added successfully!',
          title: 'Success:',
        };
        this.getRetailerInvoices();
      },
      (err) => {
        console.log(err);
        this.recoveryBtnLoading = false;
        const toast: Toaster = {
          type: 'error',
          message: 'Something went wrong',
          title: 'Error:',
        };
        this.toastService.showToaster(toast);
      }
    );
  }

  onOpenRecoveryModel(item: any) {
    this.recoverModel = { ...item };
  }
}
