import { Component, Input, OnInit } from '@angular/core';
import { PrimaryOrder } from 'src/app/modules/orders/primary-orders/_models/order';
import { environment } from 'src/environments/environment';
import { GeneralDataService } from '../../services/general-data.service';
import { SecondaryOrder } from '../../../orders/primary-orders/_models/secondaryOrder.model';

@Component({

  selector: 'app-order-content',
  templateUrl: './order-content.component.html',
  styleUrls: ['./order-content.component.css'],
  standalone: false


})
export class OrderContentComponent implements OnInit {
  // @Input() order: SecondaryOrder;
  order: SecondaryOrder;
  ORDER_TYPE = environment.ORDER_TYPE;
  constructor(private generalDataService: GeneralDataService) {
    this.order = SecondaryOrder.getInstance;
  }

  ngOnInit(): void {}

  //#region deleteOrderItem
  deleteOrderItem(itemId: number) {
    this.order.items = this.order.items.filter(
      (item) => item.itemId !== itemId
    );

    this.generalDataService.displayProductsIsAddedStatus(false, itemId);
  }
}
