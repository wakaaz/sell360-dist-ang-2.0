import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToasterService } from 'src/app/core/services/toaster.service';

import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order-detail-list',
  templateUrl: './orders-list-details.component.html',
  styleUrls: ['./orders-list-details.component.css'],
  standalone: false,
})
export class OrdersListDetailsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  showDetails: boolean;
  loading: boolean;
  orders: Array<any> = [];
  orderDetail: any = null;
  date = 0;
  employeeId = 0;

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private toastService: ToasterService
  ) {}

  ngOnInit(): void {
    this.showDetails = false;
    this.date = this.route.snapshot.params['date'];
    this.employeeId = this.route.snapshot.params['employeeId'];
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };
    this.getViewOrdersByEmployee();
  }

  getViewOrdersByEmployee(): void {
    this.loading = true;
    this.ordersService
      .getViewOrdersByEmployee(this.employeeId, this.date.toString())
      .subscribe(
        (res) => {
          this.loading = false;
          if (res.status === 200) {
            this.orders = res.data;
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

  getViewOrderDetailById(id: number): void {
    this.loading = true;
    this.ordersService.getViewOrderDetailById(id).subscribe(
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

  openDetailsModal(orderId: number): void {
    this.orderDetail = null;
    // document.body.classList.add('no-scroll');
    this.getViewOrderDetailById(orderId);
  }

  closeDetailsModal(): void {
    document.body.classList.remove('no-scroll');
  }
}
