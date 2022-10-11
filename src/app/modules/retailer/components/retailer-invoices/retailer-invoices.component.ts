import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../orders/services/orders.service';
import { Subscription } from 'rxjs';
import { RetailerService } from '../../services/retailer.service';
import { ActivatedRoute } from '@angular/router';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/modules/shared/services';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import { localStorageKeys } from 'src/app/core/constants/localstorage.constants';

@Component({
  selector: 'app-retailer-invoices',
  templateUrl: './retailer-invoices.component.html',
  styleUrls: ['./retailer-invoices.component.css'],
})
export class RetailerInvoicesComponent implements OnInit {
  dtOptions: DataTables.Settings;
  permissions: any;
  showDetails: boolean;

  orderDetail: any = null;
  recoveryForm = {
    id: 0,
    retailer_id: 0,
    recoverd_amount: 0,
    // 'Invoice Discount is optional' ,
    invoice_discount: 0,
  };

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
    private toastService: ToasterService,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private storageService: LocalStorageService
  ) {
    this.permissions = this.storageService.getItem(
      localStorageKeys.permissions
    );
  }
  closeDetailsModal(): void {
    document.body.classList.remove('no-scroll');
  }
  ngOnInit(): void {
    this.showDetails = false;
    this.retailerId = this.actr.snapshot.params.retailerId;
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };
    this.getRetailerInvoices();
    // this.initializeForm();
  }

  // initialize rgister form builder
  initializeForm(): void {
    // this.recoveryForm = this.formBuilder.group({
    //   recoverd_amount: ['', [Validators.required]],
    //   invoice_discount: ['', [Validators.required]],
    // });
  }
  // convenience getter for easy access to form fields
  // get f(): any {
  //   return this.recoveryForm.controls;
  // }

  setQuantity(recoveryForm: any): void {
    if (recoveryForm.recoverd_amount > this.recoverModel?.amount_due) {
      this.recoveryForm.recoverd_amount = this.recoverModel?.amount_due;
      this.recoveryForm.invoice_discount = 0;
    } else if (this.recoveryForm.invoice_discount > 0) {
      // this.recoveryForm.invoice_discount =
      //   this.recoverModel?.amount_due - recoveryForm.recoverd_amount;
      this.setDiscpunt(recoveryForm);
    }
  }

  setDiscpunt(recoveryForm: any): void {
    if (
      recoveryForm.invoice_discount >
      this.recoverModel?.amount_due - recoveryForm.recoverd_amount
    ) {
      this.recoveryForm.invoice_discount =
        this.recoverModel?.amount_due - recoveryForm.recoverd_amount;
    }
  }

  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    return this.dataService.isNumber(event, type);
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
    this.recoveryForm.recoverd_amount = +this.recoveryForm.recoverd_amount;
    this.recoveryForm.invoice_discount = +this.recoveryForm.invoice_discount;
    this.retailerService
      .addRetailersCreditRecovery(this.recoveryForm)
      .subscribe(
        (x) => {
          console.log('recoveryAdded', x);
          this.recoveryBtnLoading = false;
          const toast: Toaster = {
            type: 'success',
            message: 'Recovery Added successfully!',
            title: 'Success:',
          };
          this.getRetailerInvoices();
          document.getElementById('closemodelrecovery').click();
        },
        (err) => {
          console.log(err);
          this.recoveryBtnLoading = false;
          const toast: Toaster = {
            type: 'error',
            message: err.error.message,
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      );
  }

  onOpenRecoveryModel(item: any) {
    this.recoverModel = { ...item };
    // console.log(this.recoverModel);
    this.recoveryForm.id = item.id;
    this.recoveryForm.retailer_id = item.retailer_id;
    this.recoveryForm.recoverd_amount = 0;
    this.recoveryForm.invoice_discount = 0;
  }

  openDetailsModal(orderId: number): void {
    this.orderDetail = null;
    // document.body.classList.add('no-scroll');
    this.getViewOrderDetailById(orderId);
  }

  getViewOrderDetailById(id: number): void {
    this.loading = true;
    this.dataService.getViewOrderDetailById(id).subscribe(
      (res) => {
        this.loading = false;
        if (res.status === 200) {
          this.orderDetail = res.data;
          this.orderDetail.subTotal = this.orderDetail.order_detail
            .map((x) => x.final_price)
            .reduce((a, b) => a + b, 0);
          this.orderDetail.totalDiscount = this.orderDetail.order_detail
            .map(
              (x) =>
                x.original_price * x.quantity -
                x.unit_price_after_individual_discount * x.quantity
            )
            .reduce((a, b) => a + b, 0);
          this.showDetails = true;
        }
      },
      (error) => {
        this.loading = false;
        if (error.status !== 401 && error.status !== 1) {
          this.toastService.showToaster({
            title: 'Error:',
            message: 'New Orders not fetched, try again later.',
            type: 'error',
          });
        }
        scrollTo(0, 0);
      }
    );
  }
}
