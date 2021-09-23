export const API_URLS = {
    // Login
    LOGIN: '/login',

    // Dashboard
    DASHBOARD: '/dashboard',
    HOME_DAILY: '/reports/home/daily',
    HOME_MONTHLY: '/reports/home/monthly',

    // Orders
    COUNTER_SALE_DATA: '/counterSaleData',
    ADD_COUNTER_SALE: '/saveOrder/counter',
    SAVE_DISPATCH: '/saveOrder/dispatch',
    SAVE_EXECUTION: '/saveOrder/execution',
    SAVE_SPOT: '/saveOrder/spot',
    CANCEL_ORDER: '/orderCancel',
    CANCEL_SPOT_SALE: '/cancelSpotSale',
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
    COMPLETE_DISPATCH: '/completeDispatch',
    REVERT_DISPATCH: '/revertDispatch',
    DISPATCH_ORDERS_DETAIL: '/dispatchOrdersDetail',
    UPDATE_INVOICE_DETAIL: '/updateDispatchInvoiceDate',
    GET_EXECUTION_LIST: '/executionOrderListing',
    GET_EXECUTION_DETAILS: '/executionDetail',
    CHECK_RETAILER_BALANCE: '/executionCheckRetailerBalance',
    SAVE_EXPENSE: '/executionSaveExpense',
    EXECUTION_FINAL_SAVE: '/executionFinalSave',
    REMOVE_OUT_OF_ROUE_RECOVERY: '/executionRemoveOutOfRouteRecovery',
    EXECUTION_COMPLETE: '/executionComplete',
    LS_PDF: '/LoadSheetDataPdf',
    DSR_PDF: '/pdfDSRNew',

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
    BILLS: '/GetAllBillsDetail',

    // Retailers
    ADD_OPENING_BALANCE: '/addOpeningBalance',
    RETAILER_LISTING: '/retailers/listing',
    RETAILER_CORE: '/retailers/core',
    RETAILER_ORDERS: '/retailers/orders',
    RETAILER_VISITS: '/retailers/visits',
    GET_DAILY_SALE_REPORTS: '/GetDailySaleReportList',
    GET_DSR_DETAIL: '/GetDSRDetailByID',

    // Reports
    DISTRIBUTOR_PURCHASE_HISTORY: '/distributorPurchaseHistory',
    PURCHASE_DETAIL: '/distributorPurchaseDetail'

    // Payments
};
