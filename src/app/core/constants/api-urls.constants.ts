export const API_URLS = {
    // Login
    LOGIN: '/login',

    // Dashboard
    DASHBOARD: '/dashboard',

    // Orders
    COUNTER_SALE_DATA: '/counterSaleData',
    ADD_COUNTER_SALE: '/saveOrder/counter',
    SAVE_DISPATCH: '/saveOrder/dispatch',
    CANCEL_ORDER: '/orderCancel',
    GET_SCHEMES: '/getSchemesDiscount',
    GET_EMPLOYEES: '/getEmployees',
    GET_EMPLOYEE_ROUTES: '/getEmployeeRoutes',
    GET_DISCOUNT_SLABS: '/getSlabDiscount',
    GET_SLABS_BY_CHANNEL: '/getSlabDiscountByChannel',
    GET_RETAILERS_BY_ROUTE: '/getRetailersByRoute',
    GET_NEW_ORDERS: '/getNewOrders',
    ASSIGN_SALESMAN: '/assignSalesman',
    DISPATCH_ORDER_LISTING: '/dispatchOrderListing',
    DISPATCH_DETAIL: '/dispatchDetail',
    VIEW_ORDERS: '/viewOrder/new/',
    ORDER_DETAIL: '/orderDetail',
    VIEW_ORDER_DETAIL: '/viewOrderDetail',
    CREATE_DISPATCH: '/createDispatch',
    DISPATCH_ORDERS_DETAIL: '/dispatchOrdersDetail',

    // Salesmen
    GET_ALL_SALESMEN: '/getAllSalesman',
    GET_SEGMENTS: '/segments',
    ADD_SALEMAN: '/storeSalesman',
    UPDATE_SALEMAN: '/updateSalesman',

    // Inventory
    CATEGORIES: '/categories',
    BRANDS: '/brands',
    PRODUCTS: '/products',
    PRODUCT: '/product',
    DISTRIBUTOR_PURCHASE_DATA: '/distributorPurchaseData',
    ADD_DISTRIBUTOR_PURCHASE: '/addDistributorPurchase',
    PRODUCTS_WITH_STOCK: '/productsWithStock',
    PRODUCT_STOCK_DETAIL: '/stockDetailProductWise',
    ADD_OPENING_STOCK: '/addDistributorOpeningStock',

    // General
    PRODUCTS_LIST_BY_PREF_TYPE: '/productListByType',
    BOOKING_SHEET_PDF: '/BookingSheetPdf',

    // Retailers
    ADD_OPENING_BALANCE: '/addOpeningBalance',

    // Reports
    DISTRIBUTOR_PURCHASE_HISTORY: '/distributorPurchaseHistory',
    PURCHASE_DETAIL: '/distributorPurchaseDetail'

    // Payments
};
