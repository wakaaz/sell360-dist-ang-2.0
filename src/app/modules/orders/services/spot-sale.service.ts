import { Injectable } from '@angular/core';

@Injectable()
export class SpotSaleService {

    constructor() { }

    setSpotSaleOrderContent(selectedRetailer: any, selectedEmployee: any, distributorId: number): any {
        const order = {
            employee_id: selectedEmployee.employee_id, // Selected Employee
            retailer_id: selectedRetailer.retailer_id, // Selected Retailer
            within_radius: 0,
            apply_retail_tax: selectedRetailer.apply_retail_tax,
            status: '',
            status_code: 0,
            order_total: 0,
            ttl_qty_sold: 0,
            ttl_products_sold: 0,
            remarks: '',
            booking_region: selectedEmployee.region_id,
            booking_area: selectedEmployee.area_id,
            booking_territory: selectedEmployee.territory_id,
            invoice_number: '',
            freight_charges: 0,
            booking_zone: 0,
            booking_locality_id: selectedRetailer.locality_id,
            booking_neighbourhood_id: selectedRetailer.neighbourhood_id,
            sales_man_id: 0,
            spot_sale: 1,
            counter_sale: 0,
            invoice_date: '',
            order_type: 'spot',
            distributor_id: distributorId,
            region_id: selectedEmployee.region_id, // Selected Employee
            recovery: 0,
            recovered: 0,
            area_id: selectedEmployee.area_id,  // Selected Employee
            assigned_route_id: selectedRetailer.route_id, // Selected Route
            territory_id: selectedEmployee.territory_id, // Selected Employee
            booked_order_value: 0,
            booked_total_qty: 0,
            booked_total_skus: 0,
            gross_sale_amount: 0,
            total_retail_price: 0,
            total_tax_amount: 0,
            total_amount_after_tax: 0,
            total_discount: 0,
            payment: {},
            items: [],
            returned_items: []
        };
        return order;
    }
}
