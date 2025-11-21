export const API_URLS = {
  // Login
  LOGIN: '/login',

  // Dashboard
  DASHBOARD: '/dashboard',
  HOME_DAILY: '/reports/home/daily',
  HOME_MONTHLY: '/reports/home/monthly',

  // Orders
  COMPLETED_ORDERS_LOAD_SHEETS: '/getCompletedOrdersLoadSheetWise',
  PENDING_ORDERS: '/orders-list/',
  GET_PRODUCTS_META_DATA: '/fetch-order-meta-data',
  FETCH_ORDER_BY_ID: '/fetch-order-data/',
  UPDATE_PRIMARY_ORDER: '/update-order/',
  PURCHASE_ORDERS: '/purchase-history',
  COUNTER_SALE_DATA: '/counterSaleData',
  ADD_COUNTER_SALE: '/saveOrder/counter',
  SAVE_DISPATCH: '/saveOrder/dispatch',
  SAVE_EXECUTION: '/saveOrder/execution',
  SAVE_SPOT: '/saveOrder/spot',
  CANCEL_ORDER: '/orderCancel',
  HOLD_ORDER: '/holdOrder',
  CANCEL_EXECUTION_ORDER: '/cancelExecutionOrder',
  CANCEL_SPOT_SALE: '/cancelSpotSale',
  GET_SCHEMES: '/getSchemesDiscount',
  GET_LOYALTY_OFFERS: '/getLoyaltyDiscount',
  GET_EMPLOYEES: '/getEmployees',
  GET_EMPLOYEE_ROUTES: '/getEmployeeRoutes',
  GET_DISCOUNT_SLABS: '/getSlabDiscount',
  GET_TAX_CLASSES: '/getTaxClasses',
  GET_SLABS_BY_CHANNEL: '/getSlabDiscountByChannel',
  GET_RETAILERS_BY_ROUTE: '/getRetailersByRoute',
  GET_NEW_ORDERS: '/getNewOrders',
  GET_SALE_HISTORY: '/orderBooker',
  GET_ALL_CREDITED_BOOKERS: '/getAllCreditedBookers',
  GET_SALE_HISTORY_SEARCH_CRITERIA: '/retailers/core',
  ASSIGN_SALESMAN: '/assignSalesman',
  DISPATCH_ORDER_LISTING: '/dispatchOrderListing',
  DISPATCH_DETAIL: '/dispatchDetail',
  VIEW_ORDERS: '/viewOrder/new/',
  ORDER_DETAIL: '/orderDetail',
  VIEW_ORDER_DETAIL: '/viewOrderDetail',
  CREATE_DISPATCH: '/createDispatch',
  COMPLETE_DISPATCH: '/completeDispatch',
  REVERT_DISPATCH: '/revertDispatch',
  REVERT_ORDER: '/RevertExecutionDispacth',
  DISPATCH_ORDERS_DETAIL: '/dispatchOrdersDetail',
  RETAILER_CREDIT_INVOICES: '/retailersCreditInvoices',
  ADD_RETAILE_RCREDIT_INVOICES: '/addRetailersCreditInvoices',

  UPDATE_INVOICE_DETAIL: '/updateDispatchInvoiceDate',
  GET_EXECUTION_LIST: '/executionOrderListing',
  GET_EXECUTION_DETAILS: '/executionDetail',
  EXECUTION_VERIFY_LOYALITY_OFFER: '/executionVerifyLoyalityOffer',
  CHECK_RETAILER_BALANCE: '/executionCheckRetailerBalance',
  SAVE_EXPENSE: '/executionSaveExpense',
  EXECUTION_FINAL_SAVE: '/executionFinalSave',
  REMOVE_OUT_OF_ROUE_RECOVERY: '/executionRemoveOutOfRouteRecovery',
  EXECUTION_CHECK_RETAILER_BALANCE: '/executionCheckRetailerBalance',
  EXECUTION_COMPLETE: '/executionComplete',
  EXTRA_LOAD_ITEM_COMPLETE: '/extraLoadItemAllocation',
  UPDATE_LOAD_ORDER_ITEM_ALLOCATION: '/updateLoadOrderItemAllocation',
  CLEAR_LOAD_ITEM_ALLOCATION: '/clearLoadItemAllocation',
  SAVE_LOAD_ITEM_ALLOCATION: '/saveLoadItemAllocation',
  GET_ALL_RETAILERS_CREDITS: '/getAllRetailersCredits',
  GET_RETAILER_CREDIT_INVOICES: '/getRetailersCreditInvoices',
  GET_LOAD_ORDERS_PREFS: '/getLoadOrdersPrefs',
  LS_PDF: '/LoadSheetDataPdf',
  DSR_PDF: '/pdfDSRNew',
  DSRS_PDF_REPORT: '/dsrs-pdf-report',
  BOOKER_WISE_CREDIT_AGEING_REPORT: '/booker-wise-credit-ageing-report',
  CREDIT_INVOICE_DETAILS: '/credit-invoice-details',

  // Salesmen
  GET_ALL_SALESMEN: '/getAllSalesman',
  GET_SALESMAN_LEDGER: '/salesmanLedger',
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
  RETAILER_ORDER_DETAIL: '/orderBooker/orderDetail',
  GET_DAILY_SALE_REPORTS: '/GetDailySaleReportList',
  GET_DSR_DETAIL: '/GetDSRDetailByID',
  ADD_RETAILER_CREDIT_RECOVERY: '/addRetailersCreditRecovery',

  // Reports
  DISTRIBUTOR_PURCHASE_HISTORY: '/distributorPurchaseHistory',
  RATE_LIST_CORE: '/rateListCore',
  CASH_SUMMARY: '/CashSummaryReport',
  PURCHASE_DETAIL: '/distributorPurchaseDetail',

  SAVE_PRIMARY_ORDER: '/save-order',

  RETURN_PRIMARY_ORDER: '/return-order',

  UPDATE_ORDER_STATUS: '/update-order-status/',
  RECEIVABLE_ORDERS_LIST: '/receivable-orders-list',

  // SUB DISTRIBUTORS
  SUB_DISTRIBUTORS: '/sub-distributors',

  // Employee
  DISTRIBUTORS_EMPLOYEES: '/distributors-employees/',

  // Settings
  CHANGE_PASSWORD: '/change-password',

  DISTRIBUTOR_DETAILS: '/sub-distributor-detail/',

  DISTRIBUTOR_INVOICE_PDF: '/primary-order-bill-detail',

  ADD_OPENING_BALANCE_DISTRIBUTOR: '/add-distributor-opening-balances',
  ADD_INVOICE_RECOVERY: '/add-invoice-recovery',






};
