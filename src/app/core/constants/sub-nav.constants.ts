import { PRIMARY_ORDER } from './primary-orders-parms.constants';

export const ordersSubMenu = {
  title: 'Orders',
  subMenu: [
    {
      title: 'New Orders',
      link: '/orders',
      icon: '/assets/images/new-orders.svg',
    },
    {
      title: 'Create Dispatch',
      link: '/orders/dispatch-orders',
      icon: '/assets/images/dispatched-order.svg',
    },
    {
      title: 'Execution',
      link: '/orders/execution-list',
      icon: '/assets/images/opening-balance.svg',
    },
    // Hidden for first version
    {
      title: 'Completed Orders',
      link: '/orders/completed-orders',
      icon: '/assets/images/complete-orders.svg',
    },
    {
      title: 'Counter Sale',
      link: '/orders/counter-sale',
      icon: '/assets/images/counter-sale.svg',
    },

    {
      title: 'New Counter Sale',
      link: '/orders/new-counter-sale',
      icon: '/assets/images/counter-sale.svg',
    },
    // Hidden for first version
    // {
    //     title: 'Booking VS Execution',
    //     link: '/orders/booking-vs-execution',
    //     icon: '/assets/images/complete-orders.svg'
    // },
  ],
};

export const primaryOrderSubMenu = {
  title: 'Sale Orders',
  subMenu: [
    {
      title: 'New Order',
      link: `/primaryOrders/order/${PRIMARY_ORDER.NEW}`,
      icon: '/assets/images/new-orders.svg',
      queryParams: { order: 'new' },
    },
    {
      title: 'Booked',
      link: `/primaryOrders/${PRIMARY_ORDER.BOOKED}`,
      icon: '/assets/images/order-icon-b.svg',
      queryParams: { order: 'booked' },
    },
    {
      title: 'Processed',
      link: `/primaryOrders/${PRIMARY_ORDER.PROCESSED}`,
      icon: '/assets/images/dispatched-order.svg',
    },
    {
      title: 'Executed',
      link: `/primaryOrders/${PRIMARY_ORDER.EXECUTE}`,
      icon: '/assets/images/opening-balance.svg',
    },
    {
      title: 'Return Order',
      link: `/primaryOrders/order/${PRIMARY_ORDER.RETURN_ORDER}`,
      icon: '/assets/images/order-return.svg',
    },
  ],
};
export const salesmanSubMenu = {
  title: 'Salesmen',
  subMenu: [
    {
      title: 'Salesmen',
      link: '/salesmen',
      icon: '/assets/images/salesman-icon.svg',
    },
    {
      title: 'Salesman Ledger',
      link: '/salesmen/salesmen-ledger',
      icon: '/assets/images/Salesman-ledger.svg',
    },
  ],
};
export const inventorySubMenu = {
  title: 'Inventory',
  subMenu: [
    {
      title: 'Products',
      link: '/inventory/gallery',
      icon: '/assets/images/product-icon.svg',
    },
    {
      title: 'Add Opening Stock',
      link: '/inventory/add-stock',
      icon: '/assets/images/product-items-icon.svg',
    },
    {
      title: 'Distributor Purchase',
      link: '/inventory/distributor-purchase',
      icon: '/assets/images/brand-products-icon.svg',
    },
    {
      title: 'Stock',
      link: '/inventory/stock',
      icon: '/assets/images/stock.svg',
    },
  ],
};
export const retailerSubMenu = {
  title: 'Retailer',
  subMenu: [
    {
      title: 'Retailer',
      link: '/retailer/list',
      icon: '/assets/images/retailar-list-icon.svg',
    },
    {
      title: 'Opening Balance',
      link: '/retailer/opening-balance',
      icon: '/assets/images/opening-balance.svg',
    },
    {
      title: 'Credit Invoices',
      link: '/retailer/retailers-invoices-list',
      icon: '/assets/images/invoice-management-icon.svg',
    },

    // {
    //   title: 'Credit Invoices',
    //   link: '/retailer/credit-invoices',
    //   icon: '/assets/images/invoice-management-icon.svg',
    // },
  ],
};
export const reportsSubMenu = {
  title: 'Reports',
  subMenu: [
    {
      title: 'All Reports',
      link: '/reports/all-reports',
      icon: '/assets/images/reports-icon.svg',
    },
    {
      title: 'DSR',
      link: '/reports/dsr',
      icon: '/assets/images/reports-icon.svg',
    },
    {
      title: 'Cash Summary',
      link: '/reports/cash-summary',
      icon: '/assets/images/reports-icon.svg',
    },
    {
      title: 'Export Rate List',
      link: '/reports/export-rate-list',
      icon: '/assets/images/reports-icon.svg',
    },
    // {
    //   title: 'Spot Sale',
    //   link: '/reports/spot-sale',
    //   icon: '/assets/images/reports-icon.svg'
    // },
    {
      title: 'Purchase History',
      link: '/reports/purchase-history',
      icon: '/assets/images/reports-icon.svg',
    },
    {
      title: 'Stock Out Report',
      link: '/reports/stock-report',
      icon: '/assets/images/reports-icon.svg',
    },
    {
      title: 'Sale Order History',
      link: '/reports/sale-order-history',
      icon: '/assets/images/complete-orders.svg',
    },
    {
      title: 'Retailer Ledger',
      link: '/retailer/ledger',
      icon: '/assets/images/complete-orders.svg',
    },
    {
      title: 'Historical Ledger',
      link: '/retailer/historical-ledger',
      icon: '/assets/images/complete-orders.svg',
    },
  ],
};
export const paymentsSubMenu = {
  title: 'Payments',
  subMenu: [
    {
      title: 'Manage Cheque Payments',
      link: '/payments',
      icon: '/assets/images/payment-icon.svg',
    },
  ],
};
