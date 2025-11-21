import { DistributorService } from '../services/distributor.service';
import { Observable } from 'rxjs';

export interface IDistributorInvoice {
  order_id: number;
  invoice_number: string;
  invoice_date: string;
  invoice_amount: number;
  paid_amount: number;
  amount_due: number;
  aging: number;
}

export interface IDistributor {
  id: number;
  can_receive_orders: string;
  distributor_name: string;
  distributor_type_id: number;
  discount_type: number;
  discount: number;
  distributor_sales_type: number;
  distributor_code: string | null;
  distributor_address: string;
  distributor_phone: string;
  distributor_email: string | null;
  distributor_lats: number;
  distributor_longs: number;
  distributor_type_flag: number;
  distributor_image: string | null;
  region_id: number;
  distributor_area_id: number;
  distributor_warehouse_images: string | null;
  filer_status: number;
  territory_id: number;
  ntn: string | null;
  strn: string | null;
  distributor_city: number;
  tsm: string;
  tsm_id: number;
  region_name: string;
  area_name: string;
  territory_name: string;
  city_name: string;
  distributor_profile_picture: string | null;
  opening_balance: number;
  parent_id: number;
  current_balance: number;
  total_debit: number;
  total_credit: number;
}

export interface IDistributorDetailsData {
  distributor: IDistributor;
  invoices: IDistributorInvoice[];
}

export interface IDistributorDetailsResponse {
  status: number;
  type: string;
  message: string;
  data: IDistributorDetailsData;
}

export interface IPaymentDetail extends IDistributorInvoice {
  recovery_amount: number;
  discount_amount: number;
}

export interface IAddInvoicePayload {
  distributor_id: number;
  order_id: number;
  recovery_amount: number;
  discount_amount: number;
}

export class DistributorDetailsUtils {
  /**
   * Get distributor details by ID
   * @param distributorService - The distributor service instance
   * @param distributorId - The distributor ID
   * @returns Observable with distributor details response
   */
  static getDistributorDetails(
    distributorService: DistributorService,
    distributorId: string
  ): Observable<IDistributorDetailsResponse> {
    return distributorService.getDistributorDetails(distributorId);
  }

  static addInvoiceRecovery(
    distributorService: DistributorService,
    payload: IAddInvoicePayload
  ): Observable<any> {
    return distributorService.addInvoiceRecovery(payload);
  }
}
