(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-orders-orders-module~modules-reports-reports-module"],{

/***/ "/iSe":
/*!******************************************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js ***!
  \******************************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */



var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el, vcr, renderer) {
        this.el = el;
        this.vcr = vcr;
        this.renderer = renderer;
        /**
         * The DataTable option you pass to configure your table.
         */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        var self = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    // Assign DT properties here
                    var options = {
                        rowCallback: function (row, data, index) {
                            if (dtOptions.columns) {
                                var columns_1 = dtOptions.columns;
                                // Filter columns with pipe declared
                                var colsWithPipe = columns_1.filter(function (x) { return x.ngPipeInstance && !x.ngTemplateRef; });
                                // Iterate
                                colsWithPipe.forEach(function (el) {
                                    var pipe = el.ngPipeInstance;
                                    // find index of column using `data` attr
                                    var i = columns_1.findIndex(function (e) { return e.data == el.data; });
                                    // get <td> element which holds data using index
                                    var rowFromCol = row.childNodes.item(i);
                                    // Transform data with Pipe
                                    var rowVal = $(rowFromCol).text();
                                    var rowValAfter = pipe.transform(rowVal);
                                    // Apply transformed string to <td>
                                    $(rowFromCol).text(rowValAfter);
                                });
                                // Filter columns using `ngTemplateRef`
                                var colsWithTemplate = columns_1.filter(function (x) { return x.ngTemplateRef && !x.ngPipeInstance; });
                                colsWithTemplate.forEach(function (el) {
                                    var _a = el.ngTemplateRef, ref = _a.ref, context = _a.context;
                                    // get <td> element which holds data using index
                                    var index = columns_1.findIndex(function (e) { return e.data == el.data; });
                                    var cellFromIndex = row.childNodes.item(index);
                                    // render onto DOM
                                    // finalize context to be sent to user
                                    var _context = Object.assign({}, context, context === null || context === void 0 ? void 0 : context.userData, {
                                        adtData: data
                                    });
                                    var instance = self.vcr.createEmbeddedView(ref, _context);
                                    self.renderer.appendChild(cellFromIndex, instance.rootNodes[0]);
                                });
                            }
                            // run user specified row callback if provided.
                            if (_this.dtOptions.rowCallback) {
                                _this.dtOptions.rowCallback(row, data, index);
                            }
                        }
                    };
                    // merge user's config with ours
                    options = Object.assign({}, dtOptions, options);
                    _this.dt = $(_this.el.nativeElement).DataTable(options);
                    resolve(_this.dt);
                });
            });
        });
    };
    DataTableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    DataTableDirective.propDecorators = {
        dtOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dtTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
DataTableDirective.ɵfac = function DataTableDirective_Factory(t) { return new (t || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
DataTableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableDirective, selectors: [["", "datatable", ""]], inputs: { dtOptions: "dtOptions", dtTrigger: "dtTrigger" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[datatable]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { dtOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dtTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return DataTableDirective;
}());


//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "5TcN":
/*!***********************************************************!*\
  !*** ./src/app/modules/orders/services/orders.service.ts ***!
  \***********************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/api-urls.constants */ "oo4J");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/http.service */ "bUwk");




class OrdersService {
    constructor(baseService) {
        this.baseService = baseService;
    }
    getCounterSaleData() {
        return this.baseService.get(src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].COUNTER_SALE_DATA);
    }
    getCompletedOrdersLoadsheets(date) {
        return this.baseService.get(src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].COMPLETED_ORDERS_LOAD_SHEETS + "?date=" + date);
    }
    getSchemes() {
        return this.baseService.get(src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].GET_SCHEMES);
    }
    counterSaleOrder(order) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].ADD_COUNTER_SALE}`;
        return this.baseService.post(url, order);
    }
    getDiscountSlabs() {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].GET_DISCOUNT_SLABS}`;
        return this.baseService.get(url);
    }
    getDiscountSlabsByChannel(segementId, channelId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].GET_SLABS_BY_CHANNEL}/${segementId}/${channelId}`;
        return this.baseService.get(url);
    }
    saveDispatchOrder(order) {
        const url = src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].CREATE_DISPATCH;
        return this.baseService.post(url, order);
    }
    completeOrderDispatch(loadId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].COMPLETE_DISPATCH}/${loadId}`;
        return this.baseService.get(url);
    }
    revertOrderDispatch(loadId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].REVERT_DISPATCH}/${loadId}`;
        return this.baseService.get(url);
    }
    revertOrder(type, typeId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].REVERT_ORDER}/${type}/${typeId}`;
        return this.baseService.get(url);
    }
    updateDispatchInvoiceDate(loadId, date) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].UPDATE_INVOICE_DETAIL}/${loadId}`;
        return this.baseService.post(url, { date });
    }
    getNewOrders() {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].GET_NEW_ORDERS}`;
        return this.baseService.get(url);
    }
    getSaleHistory(params = "") {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].GET_SALE_HISTORY}?${params}`;
        return this.baseService.get(url);
    }
    getSaleHistorySearchCriterias() {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].GET_SALE_HISTORY_SEARCH_CRITERIA}`;
        return this.baseService.get(url);
    }
    assignSalesMan(saleman) {
        const url = src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].ASSIGN_SALESMAN;
        return this.baseService.post(url, saleman);
    }
    getDispatchOrdersListing() {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].DISPATCH_ORDER_LISTING}`;
        return this.baseService.get(url);
    }
    getViewOrdersByEmployee(id, date) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].VIEW_ORDERS}${id}/${date}`;
        return this.baseService.get(url);
    }
    getDispatchDetailBySalemanAndDate(id, assignId, date) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].DISPATCH_DETAIL}/${date}/${id}/${assignId}`;
        return this.baseService.get(url);
    }
    getViewOrderDetailById(orderid) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].VIEW_ORDER_DETAIL}/${orderid}`;
        return this.baseService.get(url);
    }
    getOrderDetails(orderId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].ORDER_DETAIL}/${orderId}`;
        return this.baseService.get(url);
    }
    getDispatchOrdersDetail(salemanId, date, assignId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].DISPATCH_ORDERS_DETAIL}/${salemanId}/${date}/${assignId}`;
        return this.baseService.get(url);
    }
    saveDispatchQuantityOrder(order) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].SAVE_DISPATCH}`;
        return this.baseService.post(url, order);
    }
    saveExecutionQuantityOrder(order) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].SAVE_EXECUTION}`;
        return this.baseService.post(url, order);
    }
    saveSpotSaleOrder(order) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].SAVE_SPOT}`;
        return this.baseService.post(url, order);
    }
    cancelOrder(orderId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].CANCEL_ORDER}/${orderId}`;
        return this.baseService.get(url);
    }
    canceleExecutionOrder(orderId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].CANCEL_EXECUTION_ORDER}/${orderId}`;
        return this.baseService.get(url);
    }
    cancelSpotSaleOrder(orderId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].CANCEL_SPOT_SALE}/${orderId}`;
        return this.baseService.get(url);
    }
    getExecutionList() {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].GET_EXECUTION_LIST}`;
        return this.baseService.get(url);
    }
    saveExecutionExpense(loadId, saleManId, date, expenses) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].SAVE_EXPENSE}/${loadId}/${saleManId}/${date}`;
        return this.baseService.post(url, { expenses });
    }
    checkBalance(retailerId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].CHECK_RETAILER_BALANCE}/${retailerId}`;
        return this.baseService.get(url);
    }
    getExectedOrdersListing(salemanId, date, loadId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].GET_EXECUTION_DETAILS}/${salemanId}/${date}/${loadId}`;
        return this.baseService.get(url);
    }
    getExecutionFinalLoad(loadId, outOfRouteRecovery) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].EXECUTION_FINAL_SAVE}/${loadId}`;
        return this.baseService.post(url, { out_of_route_recovery: outOfRouteRecovery });
    }
    removeOutOfRuoteRecovery(paymentId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].REMOVE_OUT_OF_ROUE_RECOVERY}/${paymentId}`;
        return this.baseService.get(url);
    }
    markCompeleteExecution(loadId, payload) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].EXECUTION_COMPLETE}/${loadId}`;
        return this.baseService.post(url, payload);
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpBaseService"])); };
OrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpBaseService"] }]; }, null); })();


/***/ }),

/***/ "HO/X":
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js ***!
  \***************************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "/iSe");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */




var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
DataTablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataTablesModule });
DataTablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataTablesModule_Factory(t) { return new (t || DataTablesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTablesModule, { declarations: function () { return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
                exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
            }]
    }], function () { return []; }, null); })();
    return DataTablesModule;
}());


//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "njyG":
/*!***************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/index.js ***!
  \***************************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "/iSe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "HO/X");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public library APIs.
 */



//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=default~modules-orders-orders-module~modules-reports-reports-module.js.map