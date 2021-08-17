import { OrderItem } from './order-item.model';

export interface CounterSale {
    employee_id: number; // Selected Employee
    retailer_id: number; // Selected Retailer
    within_radius: number;
    status: string;
    status_code: number;
    order_total: number;
    ttl_qty_sold: number;
    ttl_products_sold: number;
    remarks: string;
    booking_region: number;
    booking_area: number;
    booking_territory: number;
    invoice_number: string;
    freight_charges: number;
    booking_zone: number;
    booking_locality_id: number;
    booking_neighbourhood_id: number;
    sales_man_id: number;
    spot_sale: number;
    counter_sale: number;
    invoice_date: string;
    distributor_id: number;
    region_id: number; // Selected Employee
    area_id: number;  // Selected Employee
    assigned_route_id: number; // Selected Route
    territory_id: number; // Selected Employee
    booked_order_value: number;
    booked_total_qty: number;
    booked_total_skus: number;
    gross_sale_amount: number;
    total_retail_price: number;
    total_tax_amount: number;
    total_amount_after_tax: number;
    total_discount: number;
    items: Array<OrderItem>;
}
