import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { OrdersService } from '../../services/orders.service';
import {
  Toaster,
  ToasterService,
} from '../../../../core/services/toaster.service';
import { DataService } from '../../../shared/services/data.service';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import { GeneralDataService } from '../../../shared/services';
import { localStorageKeys } from 'src/app/core/constants/localstorage.constants';
import { IEmployee } from '../../primary-orders/_models/IEmployee';
import { PrimaryOrder } from '../../primary-orders/_models/order';
import { environment } from '../../../../../environments/environment';
import { IRoute } from '../../primary-orders/_models/IRoute';
import { IRetailer } from '../../primary-orders/_models/IRetailer';
import { Inventory } from '../../primary-orders/_models/inventory';

@Component({
  selector: 'app-counter-sale',
  templateUrl: './new-counter-sale.component.html',
  styleUrls: ['./new-counter-sale.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NewCounterSaleComponent implements OnInit {
  permissions: any;
  loadingProducts: boolean = false;
  showProducts: boolean = false;
  distributorId: number;
  orderBookers: IEmployee[];
  selectedEmployee: IEmployee;
  order: PrimaryOrder;
  selectedRoute: IRoute;
  routes: IRoute[];
  retailers: IRetailer[];
  selectedRetailer: IRetailer;
  allProducts: Inventory[];
  specialDiscounts: any;
  dispProducts: Inventory[];
  discountSlabs: any;
  schemes: any;

  constructor(
    private router: Router,
    private generalDataService: GeneralDataService,
    private storageService: LocalStorageService,
    private ordersService: OrdersService,
    private toastService: ToasterService,
    private dataService: DataService
  ) {
    this.permissions = this.storageService.getItem(
      localStorageKeys.permissions
    );
    this.order = new PrimaryOrder();
    this.order.orderType = environment.ORDER_TYPE.COUNTER_SALE;
    this.distributorId = this.storageService.getItem('distributor').id;
  }

  ngOnInit(): void {
    this.getOrderBookers();
    this.getCounterSaleData();
    this.getSchemesData();
  }

  getOrderBookers(): void {
    this.generalDataService.getOrderBookers(this.distributorId).subscribe(
      (res) => {
        if (res.status === 200) {
          this.orderBookers = res.data;
        } else {
          const toast: Toaster = {
            type: 'error',
            message: res.message,
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      },
      (error) => {
        if (error.status !== 1 && error.status !== 401) {
          const toast: Toaster = {
            type: 'error',
            message: 'Cannot fetch order bookers. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      }
    );
  }

  getRoutes(): void {
    this.order.employee_id = this.selectedEmployee.employee_id;
    this.order.employee_name = this.selectedEmployee.employee_full_name;
    this.generalDataService
      .getOrderBookerRoutes(this.selectedEmployee.employee_id)
      .subscribe(
        (res) => {
          if (res.status === 200) {
            this.routes = res.data;
          } else {
            const toast: Toaster = {
              type: 'error',
              message: res.message,
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        },
        (error) => {
          if (error.status !== 1 && error.status !== 401) {
            const toast: Toaster = {
              type: 'error',
              message: 'Cannot fetch order booker routes. Please try again',
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        }
      );
  }

  getRetailerByRoute(): void {
    this.order.route_id = this.selectedRoute.route_id;
    this.generalDataService
      .getRetailersByRoute(this.selectedRoute.route_id)
      .subscribe(
        (res) => {
          if (res.status === 200) {
            this.retailers = res.data;
          } else {
            const toast: Toaster = {
              type: 'error',
              message: res.message,
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        },
        (error) => {
          if (error.status !== 1 && error.status !== 401) {
            const toast: Toaster = {
              type: 'error',
              message: 'Cannot fetch retailers. Please try again',
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        }
      );
  }
  getSchemesData(): void {
    this.ordersService.getSchemes().subscribe(
      (res) => {
        if (res.status === 200) {
          this.schemes = res.data;
        } else {
          const toast: Toaster = {
            type: 'error',
            message: res.message,
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      },
      (error) => {
        if (error.status !== 1 && error.status !== 401) {
          const toast: Toaster = {
            type: 'error',
            message: 'Cannot fetch Trade Offers. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      }
    );
  }
  showProductsList(event: Event): void {
    event.stopPropagation();
    // if (
    //   this.paymentTypeCheque === 'full' ||
    //   this.paymentTypeCredit === 'full'
    // ) {
    //   const toast: Toaster = {
    //     type: 'error',
    //     message: `You selected Full payment for ${this.addedPayment} please remove it if you want to add more products!`,
    //     title: `Full Payment selected for ${this.addedPayment}`,
    //   };
    //   this.toastService.showToaster(toast);
    // } else {
    if (this.selectedRetailer) {
      this.allProducts = this.allProducts.map((product) => {
        product.schemes = this.dataService.getSchemes(
          product.item_id,
          product.unit_id,
          product.pref_id,
          this.schemes,
          this.selectedRetailer.type_id,
          this.selectedRetailer.id
        );
        return product;
      });
      this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
      this.showProducts = true;
      document.body.classList.add('no-scroll');
      document
        .getElementsByClassName('overlay-blure')[0]
        .classList.add('d-block');
      document.getElementById('counter-sale').classList.add('blur-div');
    } else {
      this.toastService.showToaster({
        type: 'error',
        message: 'Please select Retailer first!',
        title: 'Fill required fields:',
      });
    }
  }

  clickedOutSide(event: Event): void {
    // if (
    //   this.showProducts &&
    //   !this.showQuantityModal &&
    //   !(event.target as HTMLElement).classList.contains('dont-close-products')
    // ) {
    this.closeProductsList();
    // }
  }
  closeProductsList(): void {
    this.showProducts = false;
    document.body.classList.remove('no-scroll');
    document
      .getElementsByClassName('overlay-blure')[0]
      .classList.remove('d-block');
    document.getElementById('counter-sale').classList.remove('blur-div');
  }

  getCounterSaleData(): void {
    this.loadingProducts = true;
    this.ordersService.getCounterSaleData().subscribe(
      (res: any) => {
        this.loadingProducts = false;
        if (res.status === 200) {
          this.allProducts = res.data.inventory.map((pr) => {
            pr.net_amount = 0.0;
            pr.isAdded = false;
            return pr;
          });
          console.log('this.allProducts.length', this.allProducts.length);
          this.specialDiscounts = res.data.special_discount;
          // this.prefrences = res.data.prefs;
          this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
          // this.subInventory = res.data.sub_inventory;
        } else {
          const toast: Toaster = {
            type: 'error',
            message: res.message,
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      },
      (error) => {
        this.loadingProducts = false;
        if (error.status !== 1 && error.status !== 401) {
          const toast: Toaster = {
            type: 'error',
            message: 'Cannot fetch counter sale data. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      }
    );
  }

  getDiscountSlabs(): void {
    // this.selectedSegment = this.selectedRetailer.segment_id;
    // // this.resetValues();
    // this.ordersService.getDiscountSlabs().subscribe(
    //   (res) => {
    //     if (res.status === 200) {
    //       this.discountSlabs = res.data;
    //       this.merchantDiscount = this.discountSlabs.find(
    //         (x) =>
    //           x.region_id === this.selectedRegion &&
    //           this.selectedSegment === x.segment_id &&
    //           x.channel_id === this.selectedRetailer.type_id
    //       );
    //     }
    //   },
    //   (error) => {
    //     if (error.status !== 1 && error.status !== 401) {
    //       const toast: Toaster = {
    //         type: 'error',
    //         message: 'Cannot fetch Trade Discount. Please try again',
    //         title: 'Error:',
    //       };
    //       this.toastService.showToaster(toast);
    //     }
    //   }
    // );
  }
}
