(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-reports-reports-module"],{

/***/ "3On1":
/*!***********************************************************!*\
  !*** ./src/app/modules/reports/reports-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.component */ "AzsU");
/* harmony import */ var _components_purchase_history_purchase_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/purchase-history/purchase-history.component */ "SoN7");
/* harmony import */ var _components_dsr_dsr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dsr/dsr.component */ "vZpF");
/* harmony import */ var _components_purchase_detail_purchase_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/purchase-detail/purchase-detail.component */ "inpb");
/* harmony import */ var _components_cash_summary_cash_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cash-summary/cash-summary.component */ "Mraa");
/* harmony import */ var _components_export_rate_list_export_rate_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/export-rate-list/export-rate-list.component */ "UHv3");
/* harmony import */ var _components_spot_sale_spot_sale_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/spot-sale/spot-sale.component */ "mCdF");
/* harmony import */ var _components_stock_out_report_stock_out_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/stock-out-report/stock-out-report.component */ "WNGy");
/* harmony import */ var _components_order_booker_list_order_booker_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/order-booker-list/order-booker-list.component */ "tTLG");













const routes = [
    {
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dsr',
            },
            {
                path: 'purchase-history',
                pathMatch: 'full',
                component: _components_purchase_history_purchase_history_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseHisotryComponent"]
            },
            {
                path: 'purchase/:id',
                pathMatch: 'full',
                component: _components_purchase_detail_purchase_detail_component__WEBPACK_IMPORTED_MODULE_5__["PurchasedDetailComponent"]
            },
            {
                path: 'cash-summary',
                component: _components_cash_summary_cash_summary_component__WEBPACK_IMPORTED_MODULE_6__["CashSummaryComponent"],
            },
            {
                path: 'export-rate-list',
                component: _components_export_rate_list_export_rate_list_component__WEBPACK_IMPORTED_MODULE_7__["RateListComponent"],
            },
            {
                path: 'spot-sale',
                component: _components_spot_sale_spot_sale_component__WEBPACK_IMPORTED_MODULE_8__["SpotSaleComponent"],
            },
            {
                path: 'stock-report',
                component: _components_stock_out_report_stock_out_report_component__WEBPACK_IMPORTED_MODULE_9__["StockOutReportComponent"],
            },
            {
                path: 'sale-order-history',
                pathMatch: 'full',
                component: _components_order_booker_list_order_booker_list_component__WEBPACK_IMPORTED_MODULE_10__["OrderBookerListComponent"]
            },
            {
                path: 'dsr',
                pathMatch: 'full',
                component: _components_dsr_dsr_component__WEBPACK_IMPORTED_MODULE_4__["DSReportComponent"]
            }
        ]
    }
];
class ReportsRoutingModule {
}
ReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportsRoutingModule });
ReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportsRoutingModule_Factory(t) { return new (t || ReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "AzsU":
/*!******************************************************!*\
  !*** ./src/app/modules/reports/reports.component.ts ***!
  \******************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ReportsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ReportsComponent.ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(); };
ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["app-reports-component"]], decls: 1, vars: 0, template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reports-component',
                templateUrl: './reports.component.html',
                styleUrls: ['./reports.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Mraa":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/reports/components/cash-summary/cash-summary.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CashSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashSummaryComponent", function() { return CashSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/api-urls.constants */ "oo4J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reports.service */ "Vpr3");
/* harmony import */ var src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/storage.service */ "UYTb");
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toaster.service */ "ZgVV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class CashSummaryComponent {
    constructor(reportService, storageService, toastService) {
        this.reportService = reportService;
        this.storageService = storageService;
        this.toastService = toastService;
    }
    ngOnInit() {
        this.distributorId = this.storageService.getItem('distributor').id;
        this.summaryUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiDomain}${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].CASH_SUMMARY}`;
    }
    generateDateWiseSummary() {
        if (this.selectedDate) {
            window.open(`${this.summaryUrl}/${this.distributorId}/date/${this.selectedDate}`);
        }
        else {
            this.toastService.showToaster({
                title: 'CSR Error:',
                message: 'Please select date to generate CSR!',
                type: 'error'
            });
        }
    }
    generateMonthWiseSummary() {
        if (this.selectedMonth) {
            window.open(`${this.summaryUrl}/${this.distributorId}/month/${this.selectedMonth}`);
        }
        else {
            this.toastService.showToaster({
                title: 'CSR Error:',
                message: 'Please select month to generate CSR!',
                type: 'error'
            });
        }
    }
}
CashSummaryComponent.ɵfac = function CashSummaryComponent_Factory(t) { return new (t || CashSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"])); };
CashSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CashSummaryComponent, selectors: [["app-cash-summary"]], decls: 57, vars: 2, consts: [[1, "container"], [1, "row", "mt-2", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "header", "addPR-head"], [1, "float-left"], [1, "_PR_filter", "pr-15", 2, "width", "170px!important"], [1, "form-group", "mb-0", 2, "height", "auto"], ["type", "date", "id", "datepicker", "name", "gen-date", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "gen-act"], [1, "btn", "btn-primary", 3, "click"], [1, "row", "mt-30", "mb-2"], ["type", "month", "id", "datepicker", "name", "gen-month", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"]], template: function CashSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Daily ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Cash Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "DCS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Select Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CashSummaryComponent_Template_input_ngModelChange_25_listener($event) { return ctx.selectedDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashSummaryComponent_Template_a_click_27_listener() { return ctx.generateDateWiseSummary(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Generate DCS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Monthly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Cash Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "MCS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Select Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CashSummaryComponent_Template_input_ngModelChange_53_listener($event) { return ctx.selectedMonth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashSummaryComponent_Template_a_click_55_listener() { return ctx.generateMonthWiseSummary(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Generate MCS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedMonth);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["._PR_filter[_ngcontent-%COMP%]{margin-top: -2px; width: 300px!important; float: left}\r\n._PR_filter[_ngcontent-%COMP%]   .form-s2[_ngcontent-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%] {line-height: 30px!important; font-family: 'proximanova-light', sans-serif!important; font-size: 13px!important;}\r\n._PR_filter[_ngcontent-%COMP%]   .form-s2[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], ._PR_filter[_ngcontent-%COMP%]   .form-s2[_ngcontent-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]{height: 31px!important;}\r\n._PR_filter[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%] {background-color: #fff;border-color: #eae9e9;font-size: 14px;border-radius: 0;}\r\n.addPR-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size: 14px; padding-right: 10px; line-height: 2; margin: 0}\r\n._PR_filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {box-shadow: none;font-size: 13px;height: 31px;width: 165px;border-color: #eae9e9;}\r\n.report_value[_ngcontent-%COMP%] {background-color: #fff;font-size: 14px;position: relative;padding: 10px 0px;letter-spacing: 0.5px;margin-bottom: 0px;margin-top: 0px;line-height: 1; border-bottom: solid 1px #eae9e9}\r\n.report_value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {font-family: 'Rationale', sans-serif;line-height: 1;font-size: 18px;float: right;margin-top: -2px;}\r\n.addPR-head[_ngcontent-%COMP%] {font-size: 16px;padding: 15px 15px 15px 20px !important;}\r\n.gen-act[_ngcontent-%COMP%]{float: right}\r\n.gen-act[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{color:#fff !important; background: #003db6; margin-top:-2px; padding-top:7px; padding-bottom:7px; line-height:1}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL2NvbXBvbmVudHMvY2FzaC1zdW1tYXJ5L2Nhc2gtc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksZ0JBQWdCLEVBQUUsc0JBQXNCLEVBQUUsV0FBVztBQUNqRSwwR0FBMEcsMkJBQTJCLEVBQUUsc0RBQXNELEVBQUUseUJBQXlCLENBQUM7QUFDek4sMEtBQTBLLHNCQUFzQixDQUFDO0FBQ2pNLDJEQUEyRCxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7QUFDekksZUFBZSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLFNBQVM7QUFDOUUsbUJBQW1CLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDO0FBQ3BHLGVBQWUsc0JBQXNCLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsZ0NBQWdDO0FBQ3BNLG9CQUFvQixvQ0FBb0MsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztBQUN0SCxhQUFhLGVBQWUsQ0FBQyx1Q0FBdUMsQ0FBQztBQUNyRSxTQUFTLFlBQVk7QUFDckIsc0JBQXNCLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21wb25lbnRzL2Nhc2gtc3VtbWFyeS9jYXNoLXN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5fUFJfZmlsdGVye21hcmdpbi10b3A6IC0ycHg7IHdpZHRoOiAzMDBweCFpbXBvcnRhbnQ7IGZsb2F0OiBsZWZ0fVxyXG4uX1BSX2ZpbHRlciAuZm9ybS1zMiAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCB7bGluZS1oZWlnaHQ6IDMwcHghaW1wb3J0YW50OyBmb250LWZhbWlseTogJ3Byb3hpbWFub3ZhLWxpZ2h0Jywgc2Fucy1zZXJpZiFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMTNweCFpbXBvcnRhbnQ7fVxyXG4uX1BSX2ZpbHRlciAuZm9ybS1zMiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUsIC5fUFJfZmlsdGVyIC5mb3JtLXMyIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93e2hlaWdodDogMzFweCFpbXBvcnRhbnQ7fVxyXG4uX1BSX2ZpbHRlciAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge2JhY2tncm91bmQtY29sb3I6ICNmZmY7Ym9yZGVyLWNvbG9yOiAjZWFlOWU5O2ZvbnQtc2l6ZTogMTRweDtib3JkZXItcmFkaXVzOiAwO31cclxuLmFkZFBSLWhlYWQgaDN7Zm9udC1zaXplOiAxNHB4OyBwYWRkaW5nLXJpZ2h0OiAxMHB4OyBsaW5lLWhlaWdodDogMjsgbWFyZ2luOiAwfVxyXG4uX1BSX2ZpbHRlciBpbnB1dCB7Ym94LXNoYWRvdzogbm9uZTtmb250LXNpemU6IDEzcHg7aGVpZ2h0OiAzMXB4O3dpZHRoOiAxNjVweDtib3JkZXItY29sb3I6ICNlYWU5ZTk7fVxyXG4ucmVwb3J0X3ZhbHVlIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO2ZvbnQtc2l6ZTogMTRweDtwb3NpdGlvbjogcmVsYXRpdmU7cGFkZGluZzogMTBweCAwcHg7bGV0dGVyLXNwYWNpbmc6IDAuNXB4O21hcmdpbi1ib3R0b206IDBweDttYXJnaW4tdG9wOiAwcHg7bGluZS1oZWlnaHQ6IDE7IGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWFlOWU5fVxyXG4ucmVwb3J0X3ZhbHVlIHNwYW4ge2ZvbnQtZmFtaWx5OiAnUmF0aW9uYWxlJywgc2Fucy1zZXJpZjtsaW5lLWhlaWdodDogMTtmb250LXNpemU6IDE4cHg7ZmxvYXQ6IHJpZ2h0O21hcmdpbi10b3A6IC0ycHg7fVxyXG4uYWRkUFItaGVhZCB7Zm9udC1zaXplOiAxNnB4O3BhZGRpbmc6IDE1cHggMTVweCAxNXB4IDIwcHggIWltcG9ydGFudDt9XHJcbi5nZW4tYWN0e2Zsb2F0OiByaWdodH1cclxuLmdlbi1hY3QgLmJ0bi1wcmltYXJ5e2NvbG9yOiNmZmYgIWltcG9ydGFudDsgYmFja2dyb3VuZDogIzAwM2RiNjsgbWFyZ2luLXRvcDotMnB4OyBwYWRkaW5nLXRvcDo3cHg7IHBhZGRpbmctYm90dG9tOjdweDsgbGluZS1oZWlnaHQ6MX1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CashSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cash-summary',
                templateUrl: 'cash-summary.component.html',
                styleUrls: ['./cash-summary.component.css']
            }]
    }], function () { return [{ type: _services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"] }, { type: src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }, { type: src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "SoN7":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/reports/components/purchase-history/purchase-history.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PurchaseHisotryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseHisotryComponent", function() { return PurchaseHisotryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reports.service */ "Vpr3");
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toaster.service */ "ZgVV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/loader-white/loader-white.component */ "uoBr");









const _c0 = function (a1) { return ["/reports/purchase", a1]; };
function PurchaseHisotryComponent_table_20_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const history_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](history_r3.payload.poDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](history_r3.payload.receivedNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](history_r3.payload.invoiceNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](history_r3.payload.poNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, history_r3.id));
} }
function PurchaseHisotryComponent_table_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Purchase Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Received No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inv. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "P.O No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PurchaseHisotryComponent_table_20_tr_14_Template, 12, 7, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtTrigger", ctx_r0.dtTrigger)("dtOptions", ctx_r0.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.purchasesHistory);
} }
function PurchaseHisotryComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PurchaseHisotryComponent {
    constructor(reportService, toastService) {
        this.reportService = reportService;
        this.toastService = toastService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.purchasesHistory = [];
        this.getPurchasesHistory();
    }
    getPurchasesHistory() {
        this.loading = true;
        this.reportService.getDistributorPurchaseHistory().subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                const historyData = res.data;
                this.purchasesHistory = historyData.map(history => {
                    return Object.assign(Object.assign({}, history), { payload: JSON.parse(history.payload) });
                });
                console.log('this.purchasesHistory :>> ', this.purchasesHistory);
                setTimeout(() => {
                    this.dtTrigger.next();
                }, 1);
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    title: 'Error:',
                    type: 'error',
                    message: 'Something went wrong please try again'
                });
            }
        });
    }
}
PurchaseHisotryComponent.ɵfac = function PurchaseHisotryComponent_Factory(t) { return new (t || PurchaseHisotryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])); };
PurchaseHisotryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseHisotryComponent, selectors: [["app-purchase-history"]], decls: 22, vars: 2, consts: [[1, "container"], [1, "row", "mt-2", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "body"], ["datatable", "", "class", "table table-hover dt-responsive nowrap", "id", "example", "style", "width:100%", 3, "dtTrigger", "dtOptions", 4, "ngIf"], [4, "ngIf"], ["datatable", "", "id", "example", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtTrigger", "dtOptions"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-default", "m-0", 3, "routerLink"]], template: function PurchaseHisotryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Distributor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Purchase History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PurchaseHisotryComponent_table_20_Template, 15, 3, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PurchaseHisotryComponent_div_21_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.purchasesHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_7__["WhiteLoaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21wb25lbnRzL3B1cmNoYXNlLWhpc3RvcnkvcHVyY2hhc2UtaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseHisotryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-history',
                templateUrl: './purchase-history.component.html',
                styleUrls: ['./purchase-history.component.css']
            }]
    }], function () { return [{ type: _services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"] }, { type: src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "UHv3":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/reports/components/export-rate-list/export-rate-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateListComponent", function() { return RateListComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/reports.service */ "Vpr3");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/services/toaster.service */ "ZgVV");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function RateListComponent_ng_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", s_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r2.name);
} }
function RateListComponent_ng_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", d_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r3.division);
} }
class RateListComponent {
    constructor(reportsService, toastService) {
        this.reportsService = reportsService;
        this.toastService = toastService;
        this.selectedDivision = "All";
        this.selectedProductStatus = "All";
        this.loading = false;
        this.core = {
            segment: [],
            divisions: [],
            distributor_region: 0
        };
    }
    ngOnInit() {
        this.loading = true;
        this.reportsService.getRateListCore().subscribe(res => {
            this.core = res;
            this.loading = false;
        });
    }
    downloadPDF() {
        if (!this.selectedSegment || !this.selectedDivision)
            return this.toastService.showToaster({
                title: 'Error:',
                message: 'Please select a segment',
                type: 'error'
            });
        window.open(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiDomain}/fpdf/special-discount.php?region=${this.core.distributor_region}&division=${this.selectedDivision}&active=${this.selectedProductStatus}&segment=${this.selectedSegment}`, "_blank");
    }
    downloadExecel() {
    }
}
RateListComponent.ɵfac = function RateListComponent_Factory(t) { return new (t || RateListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])); };
RateListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RateListComponent, selectors: [["app-rate-list"]], decls: 55, vars: 6, consts: [[1, "container", 2, "height", "100vh"], [1, "row", "mt-2", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "header"], [1, "body", "PT-10"], [1, "col-md-3"], [1, "font11", "mb-4"], [1, "form-s2"], ["placeholder", "Select Segment Type", "name", "segment-type", 1, "forselect", 3, "multiple", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-3", "pl-0"], ["name", "division", "placeholder", "Select Divisions", 1, "formselect", 3, "ngModel", "ngModelChange"], ["value", "All"], ["name", "product-status", "placeholder", "Select Product Status", 1, "formselect", 3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "0"], [1, "col-3", "pl-0", "rate-act"], ["type", "button", 1, "btn", "btn-primary", "btn-line", 2, "line-height", "1", "height", "34px", "box-shadow", "none", 3, "click"], [3, "value"]], template: function RateListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Rate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Rate List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Generate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Rate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Segment Type*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RateListComponent_Template_ng_select_ngModelChange_30_listener($event) { return ctx.selectedSegment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RateListComponent_ng_option_31_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Divisions*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ng-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RateListComponent_Template_ng_select_ngModelChange_36_listener($event) { return ctx.selectedDivision = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ng-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, RateListComponent_ng_option_39_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Product Status*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ng-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RateListComponent_Template_ng_select_ngModelChange_44_listener($event) { return ctx.selectedProductStatus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ng-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ng-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RateListComponent_Template_button_click_52_listener() { return ctx.downloadPDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Download PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false)("ngModel", ctx.selectedSegment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.core.segment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedDivision);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.core.divisions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedProductStatus);
    } }, directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["ɵr"]], styles: [".rate-act{margin-top: 26px}\r\n.rate-act .btn-primary{padding-left: 10px; padding-right: 10px; font-size: 14px}\r\n.btn-primary {background: #fff; color: #003db6}\r\n.ng-select .ng-select-container {border-radius: 0 !important;border: 1px solid #f6f6f6 !important;background-color: #f6f6f6 !important;outline: none;}\r\n.input-error { font-size: 11px; color: orangered;margin-top: 5px;}\r\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value {background-color: #0038ba;border: 1px solid #0038ba;margin-right: 7px;color: #fff;}\r\n.ng-select .ng-clear {display: none !important;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL2NvbXBvbmVudHMvZXhwb3J0LXJhdGUtbGlzdC9leHBvcnQtcmF0ZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVSxnQkFBZ0I7QUFDMUIsdUJBQXVCLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGVBQWU7QUFDL0UsY0FBYyxnQkFBZ0IsRUFBRSxjQUFjO0FBQzlDLGlDQUFpQywyQkFBMkIsQ0FBQyxvQ0FBb0MsQ0FBQyxvQ0FBb0MsQ0FBQyxhQUFhLENBQUM7QUFDckosZUFBZSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0FBQ2pFLGtGQUFrRix5QkFBeUIsQ0FBQyx5QkFBeUIsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7QUFDcEssc0JBQXNCLHdCQUF3QixDQUFDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL2NvbXBvbmVudHMvZXhwb3J0LXJhdGUtbGlzdC9leHBvcnQtcmF0ZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0ZS1hY3R7bWFyZ2luLXRvcDogMjZweH1cclxuLnJhdGUtYWN0IC5idG4tcHJpbWFyeXtwYWRkaW5nLWxlZnQ6IDEwcHg7IHBhZGRpbmctcmlnaHQ6IDEwcHg7IGZvbnQtc2l6ZTogMTRweH1cclxuLmJ0bi1wcmltYXJ5IHtiYWNrZ3JvdW5kOiAjZmZmOyBjb2xvcjogIzAwM2RiNn1cclxuLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciB7Ym9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O2JvcmRlcjogMXB4IHNvbGlkICNmNmY2ZjYgIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2ICFpbXBvcnRhbnQ7b3V0bGluZTogbm9uZTt9XHJcbi5pbnB1dC1lcnJvciB7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6IG9yYW5nZXJlZDttYXJnaW4tdG9wOiA1cHg7fVxyXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSB7YmFja2dyb3VuZC1jb2xvcjogIzAwMzhiYTtib3JkZXI6IDFweCBzb2xpZCAjMDAzOGJhO21hcmdpbi1yaWdodDogN3B4O2NvbG9yOiAjZmZmO31cclxuLm5nLXNlbGVjdCAubmctY2xlYXIge2Rpc3BsYXk6IG5vbmUgIWltcG9ydGFudDt9XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RateListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-rate-list',
                templateUrl: 'export-rate-list.component.html',
                styleUrls: ['./export-rate-list.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"] }, { type: _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "Vpr3":
/*!*************************************************************!*\
  !*** ./src/app/modules/reports/services/reports.service.ts ***!
  \*************************************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/api-urls.constants */ "oo4J");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/http.service */ "bUwk");




class ReportsService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getRateListCore() {
        const url = src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].RATE_LIST_CORE;
        return this.httpService.get(url);
    }
    getDistributorPurchaseHistory() {
        const url = src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].DISTRIBUTOR_PURCHASE_HISTORY;
        return this.httpService.get(url);
    }
    getPurchasedOrderDetais(orderId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].PURCHASE_DETAIL}/${orderId}`;
        return this.httpService.get(url);
    }
    getDailySaleReportBySalemanAndDate(salemanId, date) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].GET_DAILY_SALE_REPORTS}/${date}/${salemanId}`;
        return this.httpService.get(url);
    }
    getDSRDetail(dsrId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].GET_DSR_DETAIL}/${dsrId}`;
        return this.httpService.get(url);
    }
}
ReportsService.ɵfac = function ReportsService_Factory(t) { return new (t || ReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpBaseService"])); };
ReportsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReportsService, factory: ReportsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpBaseService"] }]; }, null); })();


/***/ }),

/***/ "WNGy":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/reports/components/stock-out-report/stock-out-report.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StockOutReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockOutReportComponent", function() { return StockOutReportComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../core/services/storage.service */ "UYTb");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/services/toaster.service */ "ZgVV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class StockOutReportComponent {
    constructor(storageService, toastService) {
        this.storageService = storageService;
        this.toastService = toastService;
        this.date = {
            start: null,
            end: null,
        };
    }
    ngOnInit() {
    }
    generateStockReport() {
        if (!this.date.start || !this.date.end)
            return this.toastService.showToaster({
                title: 'Error:',
                message: 'Please provide start/end dates',
                type: 'error'
            });
        const dist = this.storageService.getItem('distributor');
        this.date.start = `
      ${new Date(this.date.start).toUTCString().split(",")[1].trim().split(" ")[0]}-${new Date(this.date.start).toUTCString().split(",")[1].trim().split(" ")[1]}-${new Date(this.date.start).toUTCString().split(",")[1].trim().split(" ")[2]}
    `;
        this.date.end = `
      ${new Date(this.date.end).toUTCString().split(",")[1].trim().split(" ")[0]}-${new Date(this.date.end).toUTCString().split(",")[1].trim().split(" ")[1]}-${new Date(this.date.end).toUTCString().split(",")[1].trim().split(" ")[2]}
    `;
        window.open(`
    ${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiDomain}/distributor-stock-pdf-report?type=dateRange&dateFrom=${this.date.start.trim()}&dateTo=${this.date.end.trim()}&region=${dist.region_id}&distributor=${dist.id}`, "_blank");
    }
}
StockOutReportComponent.ɵfac = function StockOutReportComponent_Factory(t) { return new (t || StockOutReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])); };
StockOutReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StockOutReportComponent, selectors: [["app-stock-out-report"]], decls: 44, vars: 2, consts: [["id", "blureEffct", 1, "container"], [1, "row", "mt-2", "mb-3"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], ["href", "#"], [1, "row"], [1, "col-md-12", "mb-30"], [1, "card", "PB-20"], [1, "header"], [1, "row", "m-0"], [1, "form-wrap", "PB-10", "PT-10"], [1, "col-3", "pr-0"], [1, "form-group", 2, "height", "auto"], [1, "control-label", "mb-5"], ["type", "date", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-3", 2, "padding-top", "29px"], ["type", "submit", 1, "btn", "btn-primary", "btn-line", 2, "line-height", "1", "height", "34px", "box-shadow", "none", 3, "click"], [1, "sticky-footer"], [1, "container", "my-auto"], [1, "copyright", "text-center", "my-auto"]], template: function StockOutReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Stock ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StockOutReportComponent_Template_input_ngModelChange_31_listener($event) { return ctx.date.start = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StockOutReportComponent_Template_input_ngModelChange_36_listener($event) { return ctx.date.end = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StockOutReportComponent_Template_button_click_38_listener() { return ctx.generateStockReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Generate Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "footer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " 2019 Sell3sixty All rights reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date.start);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date.end);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".rate-act[_ngcontent-%COMP%]{margin-top: 26px}\r\n.rate-act[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{padding-left: 25px; padding-right: 25px; font-size: 14px}\r\n.dataTable[_ngcontent-%COMP%]   .btn-line[_ngcontent-%COMP%], .btn-line[_ngcontent-%COMP%] {background: linear-gradient(90deg, #fff 0%, #fff 100%);color: #0038ba !important;border: solid 1px #0038ba;}\r\n.btn-primary[_ngcontent-%COMP%]:HOVER, .btn-primary[_ngcontent-%COMP%]:focus, .btn-outline[_ngcontent-%COMP%]:HOVER {color: #fff !important;border: solid 1px #003db6;background: linear-gradient(90deg, #1e54d3 0%, #0038ba 100%);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL2NvbXBvbmVudHMvc3RvY2stb3V0LXJlcG9ydC9zdG9jay1vdXQtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVSxnQkFBZ0I7QUFDMUIsdUJBQXVCLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGVBQWU7QUFDL0UsaUNBQWlDLHNEQUFzRCxDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDO0FBQzVJLDREQUE0RCxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQyw0REFBNEQsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21wb25lbnRzL3N0b2NrLW91dC1yZXBvcnQvc3RvY2stb3V0LXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhdGUtYWN0e21hcmdpbi10b3A6IDI2cHh9XHJcbi5yYXRlLWFjdCAuYnRuLXByaW1hcnl7cGFkZGluZy1sZWZ0OiAyNXB4OyBwYWRkaW5nLXJpZ2h0OiAyNXB4OyBmb250LXNpemU6IDE0cHh9XHJcbi5kYXRhVGFibGUgLmJ0bi1saW5lLCAuYnRuLWxpbmUge2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmZiAwJSwgI2ZmZiAxMDAlKTtjb2xvcjogIzAwMzhiYSAhaW1wb3J0YW50O2JvcmRlcjogc29saWQgMXB4ICMwMDM4YmE7fVxyXG4uYnRuLXByaW1hcnk6SE9WRVIsIC5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1vdXRsaW5lOkhPVkVSIHtjb2xvcjogI2ZmZiAhaW1wb3J0YW50O2JvcmRlcjogc29saWQgMXB4ICMwMDNkYjY7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMWU1NGQzIDAlLCAjMDAzOGJhIDEwMCUpO30iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StockOutReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-stock-out-report',
                templateUrl: './stock-out-report.component.html',
                styleUrls: ['./stock-out-report.component.css']
            }]
    }], function () { return [{ type: _core_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }, { type: _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "fm87":
/*!***************************************************!*\
  !*** ./src/app/modules/reports/reports.module.ts ***!
  \***************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _retailer_services_retailer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../retailer/services/retailer.service */ "hc6j");
/* harmony import */ var _orders_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../orders/services/orders.service */ "5TcN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports-routing.module */ "3On1");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reports.component */ "AzsU");
/* harmony import */ var _components_purchase_history_purchase_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/purchase-history/purchase-history.component */ "SoN7");
/* harmony import */ var _components_dsr_dsr_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dsr/dsr.component */ "vZpF");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/reports.service */ "Vpr3");
/* harmony import */ var _components_purchase_detail_purchase_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/purchase-detail/purchase-detail.component */ "inpb");
/* harmony import */ var _components_cash_summary_cash_summary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cash-summary/cash-summary.component */ "Mraa");
/* harmony import */ var _components_export_rate_list_export_rate_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/export-rate-list/export-rate-list.component */ "UHv3");
/* harmony import */ var _components_spot_sale_spot_sale_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/spot-sale/spot-sale.component */ "mCdF");
/* harmony import */ var _components_stock_out_report_stock_out_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/stock-out-report/stock-out-report.component */ "WNGy");
/* harmony import */ var _components_order_booker_list_order_booker_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/order-booker-list/order-booker-list.component */ "tTLG");




















class ReportsModule {
}
ReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ReportsModule });
ReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ReportsModule_Factory(t) { return new (t || ReportsModule)(); }, providers: [
        _services_reports_service__WEBPACK_IMPORTED_MODULE_12__["ReportsService"], _orders_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"], _retailer_services_retailer_service__WEBPACK_IMPORTED_MODULE_0__["RetailerService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_7__["ReportsRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ReportsModule, { declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_9__["ReportsComponent"],
        _components_purchase_history_purchase_history_component__WEBPACK_IMPORTED_MODULE_10__["PurchaseHisotryComponent"],
        _components_purchase_detail_purchase_detail_component__WEBPACK_IMPORTED_MODULE_13__["PurchasedDetailComponent"],
        _components_dsr_dsr_component__WEBPACK_IMPORTED_MODULE_11__["DSReportComponent"],
        _components_cash_summary_cash_summary_component__WEBPACK_IMPORTED_MODULE_14__["CashSummaryComponent"],
        _components_export_rate_list_export_rate_list_component__WEBPACK_IMPORTED_MODULE_15__["RateListComponent"],
        _components_spot_sale_spot_sale_component__WEBPACK_IMPORTED_MODULE_16__["SpotSaleComponent"],
        _components_stock_out_report_stock_out_report_component__WEBPACK_IMPORTED_MODULE_17__["StockOutReportComponent"],
        _components_order_booker_list_order_booker_list_component__WEBPACK_IMPORTED_MODULE_18__["OrderBookerListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _reports_routing_module__WEBPACK_IMPORTED_MODULE_7__["ReportsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _reports_routing_module__WEBPACK_IMPORTED_MODULE_7__["ReportsRoutingModule"],
                ],
                declarations: [
                    _reports_component__WEBPACK_IMPORTED_MODULE_9__["ReportsComponent"],
                    _components_purchase_history_purchase_history_component__WEBPACK_IMPORTED_MODULE_10__["PurchaseHisotryComponent"],
                    _components_purchase_detail_purchase_detail_component__WEBPACK_IMPORTED_MODULE_13__["PurchasedDetailComponent"],
                    _components_dsr_dsr_component__WEBPACK_IMPORTED_MODULE_11__["DSReportComponent"],
                    _components_cash_summary_cash_summary_component__WEBPACK_IMPORTED_MODULE_14__["CashSummaryComponent"],
                    _components_export_rate_list_export_rate_list_component__WEBPACK_IMPORTED_MODULE_15__["RateListComponent"],
                    _components_spot_sale_spot_sale_component__WEBPACK_IMPORTED_MODULE_16__["SpotSaleComponent"],
                    _components_stock_out_report_stock_out_report_component__WEBPACK_IMPORTED_MODULE_17__["StockOutReportComponent"],
                    _components_order_booker_list_order_booker_list_component__WEBPACK_IMPORTED_MODULE_18__["OrderBookerListComponent"]
                ],
                providers: [
                    _services_reports_service__WEBPACK_IMPORTED_MODULE_12__["ReportsService"], _orders_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"], _retailer_services_retailer_service__WEBPACK_IMPORTED_MODULE_0__["RetailerService"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "inpb":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/reports/components/purchase-detail/purchase-detail.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PurchasedDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedDetailComponent", function() { return PurchasedDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toaster.service */ "ZgVV");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reports.service */ "Vpr3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loader-white/loader-white.component */ "uoBr");







function PurchasedDetailComponent_div_18_tr_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dt_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dt_r3.item_sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dt_r3.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dt_r3.type === "regular" ? dt_r3.unit_name : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dt_r3.type === "regular" ? dt_r3.quantity : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dt_r3.type === "free" ? dt_r3.unit_name : dt_r3.type === "regular" && dt_r3.free ? dt_r3.free.unit_name : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dt_r3.type === "free" ? dt_r3.free_quantity : dt_r3.type === "regular" && dt_r3.free ? dt_r3.free.quantity : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 14, dt_r3.discount_type_value, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 17, dt_r3.discount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 20, dt_r3.original_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 23, dt_r3.net_amount, "1.2-2"));
} }
function PurchasedDetailComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Order Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Received No: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Receive Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Inv. No: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Inv. Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "PO No: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "PO Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "DC No: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "DC Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Purchased Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Purchased QTY.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Free Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Free QTY.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Discount %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Discount PKR.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Original Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Net Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, PurchasedDetailComponent_div_18_tr_93_Template, 27, 26, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Subtotal PKR.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](109, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Distribution Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](125, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Freight Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Total PKR.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](171, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.order.payload.poDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.order.payload.receivedNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.order.payload.receivedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.order.payload.invoiceNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.order.payload.invoiceDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.order.payload.poNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.order.payload.poDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.order.payload.dcNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.order.payload.dcDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.order.detail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](109, 15, ctx_r0.order.original_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](125, 18, ctx_r0.order.discount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.order.payload.gst);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.order.payload.fare);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](171, 21, ctx_r0.order.net_amount, "1.2-2"));
} }
function PurchasedDetailComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PurchasedDetailComponent {
    constructor(route, router, toastService, reportService) {
        this.route = route;
        this.router = router;
        this.toastService = toastService;
        this.reportService = reportService;
    }
    ngOnInit() {
        this.orderId = this.route.snapshot.paramMap.get('id');
        this.getOrderDetails();
    }
    getOrderDetails() {
        this.loading = true;
        this.reportService.getPurchasedOrderDetais(this.orderId).subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                const data = res.data;
                this.order = Object.assign(Object.assign({}, data), { payload: JSON.parse(data.payload) });
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                const toast = { title: 'Error:', message: 'Something went wrong please try again', type: 'error' };
                this.toastService.showToaster(toast);
            }
            this.router.navigateByUrl('/reports/purchase-history');
        });
    }
}
PurchasedDetailComponent.ɵfac = function PurchasedDetailComponent_Factory(t) { return new (t || PurchasedDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"])); };
PurchasedDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchasedDetailComponent, selectors: [["app-purchase-detail"]], decls: 20, vars: 2, consts: [[1, "container"], [1, "row", "mt-2", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], [1, "row"], [1, "col-12"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "p-10", 2, "border-bottom", "solid 2px #000"], [1, "row", "m-0"], [1, "col-8", "OrderLogo"], [1, "col-4", "ord-no"], [1, "body", 2, "padding", "15px 20px"], [1, "form-body"], [1, "row", "OrderInfo"], [1, "col-md-3"], [1, "seprator-block"], [1, "Order-Detail-table", "mt-30"], [1, "table"], [1, "order_items_body"], [4, "ngFor", "ngForOf"], [1, "border-0"], [2, "border", "solid 1px #333333!important", "background-color", "#ededed!important", "color", "#000"], [1, "clearfix"]], template: function PurchasedDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Distributor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Purchase Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Purchase History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PurchasedDetailComponent_div_18_Template, 173, 24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PurchasedDetailComponent_div_19_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_5__["WhiteLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".OrderLogo[_ngcontent-%COMP%] {text-align: left;padding-left: 0}\r\n.OrderLogo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: auto;height: 46px}\r\n._cust_filter[_ngcontent-%COMP%] {padding-left: 0 !important;padding-top: 0 !important;}\r\n._cust_filter[_ngcontent-%COMP%]   .form-s2[_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%] {padding: 0 !important;height: 30px !important;}\r\n._cust_filter[_ngcontent-%COMP%]   .form-s2[_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {width: 100%; font-size: 14px;border: none;border-radius: 0;min-height: 30px !important;height: 30px !important;}\r\n.nav-item[_ngcontent-%COMP%] {cursor: pointer;text-transform: capitalize !important;}\r\n.CL-Product[_ngcontent-%COMP%] {padding-top: 0 !important;margin-left: 0 !important;}\r\n.OrderInfo[_ngcontent-%COMP%] {font-size: 14px}\r\n.OrderInfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {width: 105px;float: left}\r\n.Order-Detail-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {border: solid 1px #333333;padding: 5px!important;font-size: 12px}\r\n.Order-Detail-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {border: solid 1px #333333!important;background-color: #ededed!important;color: #000;padding: 5px!important;font-size: 12px}\r\n.button-list[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {font-size: 14px!important;letter-spacing: 1px}\r\n.button-list[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {padding-right: 3px}\r\n.ord-no[_ngcontent-%COMP%] {padding-top: 17px;font-size: 14px;text-align: right}\r\n.table[_ngcontent-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%] {border-radius: 0;border-color: #dddddd;}\r\n.table[_ngcontent-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%], .select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%] {height: 26px;}\r\n.table[_ngcontent-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%] {height: 24px;}\r\n.cus-che-table[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before, .cus-che-table[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after {top: -7px;left: 0}\r\n.cus-che-table[_ngcontent-%COMP%] {padding: 0;margin: 0;width: 22px}\r\n.btn-primary[_ngcontent-%COMP%] {padding-top: 4px;padding-bottom: 4px;letter-spacing: 1px}\r\n.bottom-gray[_ngcontent-%COMP%] {background-color: #f6f6f6; padding: 10px; margin-top: 20px;}\r\n.active[_ngcontent-%COMP%] { display: block;}\r\n#example2[_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {width: 100%;font-size: 14px;border-radius: 0;min-height: 25px !important;height: 25px !important;}\r\n#example2[_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   div.ng-input[_ngcontent-%COMP%] { top: 0 !important; }\r\n.Product-Filter[_ngcontent-%COMP%] {\r\n    background-color: #f3f2f2;\r\n    padding: 15px 15px 0px 15px;\r\n    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\r\n    margin-bottom: 15px;\r\n    border-bottom: solid 2px #0038ba\r\n}\r\n.Product-Filter[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    padding: 6px 8px 0px 8px;\r\n    cursor: pointer;\r\n}\r\n.Product-Filter[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\r\n    width: 74px;\r\n    float: right\r\n}\r\n.Product-Filter[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    color: #a6a5a5;\r\n    font-size: 20px\r\n}\r\n.Product-Filter[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    color: #0038ba\r\n}\r\n.CL-Product[_ngcontent-%COMP%] {\r\n    width: 230px;\r\n    position: relative;\r\n    float: left;\r\n    padding-right: 15px\r\n}\r\n.CL-Product[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    height: 32px;\r\n    border: solid 1px #dedede;\r\n    box-shadow: none;\r\n    padding-left: 30px;\r\n    font-size: 13px;\r\n    letter-spacing: 1px\r\n}\r\n._cust_filter[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    border-color: #e4e4e4;\r\n    font-size: 14px;\r\n    border-radius: 0px;\r\n    height: 32px;\r\n}\r\n._cust_filter[_ngcontent-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%] {\r\n    line-height: 32px;\r\n}\r\n.Product-Filter[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\r\n    color: #fff !important;\r\n    cursor: pointer;\r\n    float: left;\r\n    margin-left: 15px;\r\n    padding-top: 4px;\r\n    padding-bottom: 4px\r\n}\r\n.CL-Product[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 8px;\r\n    left: 8px;\r\n    color: #b5b5b5\r\n}\r\n._cust_filter[_ngcontent-%COMP%] {\r\n    width: 170px;\r\n    float: left;\r\n    margin-bottom: 15px\r\n}\r\n._cust_filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n    height: 32px;\r\n    border: solid 1px #dedede\r\n}\r\n@media (max-width: 1300px) {\r\n    .header-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .header-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .header-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        padding: 12px 12px;\r\n        letter-spacing: 0.5px;\r\n    }\r\n}\r\n._cust_filter[_ngcontent-%COMP%] {\r\n    width: 230px;\r\n    padding-right: 10px;\r\n}\r\n._cust_filter[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%] {\r\n    height: 32px!important;\r\n}\r\n._cust_filter[_ngcontent-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%] {\r\n    line-height: 30px;\r\n}\r\n._cust_filter[_ngcontent-%COMP%]   .form-s2[_ngcontent-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%] {\r\n    height: 32px;\r\n}\r\n.CL-Product[_ngcontent-%COMP%] {\r\n    padding-right: 10px\r\n}\r\n.Product-Filter[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    letter-spacing: 1px;\r\n    float: left;\r\n    box-shadow: none\r\n}\r\n@media (max-width: 1170px) {\r\n    .header-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .header-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .header-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n        padding: 12px 10px;\r\n        letter-spacing: normal;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL2NvbXBvbmVudHMvcHVyY2hhc2UtZGV0YWlsL3B1cmNoYXNlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksZ0JBQWdCLENBQUMsZUFBZTtBQUM1QyxnQkFBZ0IsV0FBVyxDQUFDLFlBQVk7QUFDeEMsZUFBZSwwQkFBMEIsQ0FBQyx5QkFBeUIsQ0FBQztBQUNwRSxtQ0FBbUMscUJBQXFCLENBQUMsdUJBQXVCLENBQUM7QUFDakYsd0RBQXdELFdBQVcsRUFBRSxlQUFlLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDLHVCQUF1QixDQUFDO0FBQ3ZLLFdBQVcsZUFBZSxDQUFDLHFDQUFxQyxDQUFDO0FBQ2pFLGFBQWEseUJBQXlCLENBQUMseUJBQXlCLENBQUM7QUFDakUsWUFBWSxlQUFlO0FBQzNCLGlCQUFpQixZQUFZLENBQUMsV0FBVztBQUN6Qyw4QkFBOEIseUJBQXlCLENBQUMsc0JBQXNCLENBQUMsZUFBZTtBQUM5Riw4QkFBOEIsbUNBQW1DLENBQUMsbUNBQW1DLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLGVBQWU7QUFDeEosMkJBQTJCLHlCQUF5QixDQUFDLG1CQUFtQjtBQUN4RSwrQkFBK0Isa0JBQWtCO0FBQ2pELFNBQVMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGlCQUFpQjtBQUM1RCwrREFBK0QsZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7QUFDdEcsMklBQTJJLFlBQVksQ0FBQztBQUN4Six5RkFBeUYsWUFBWSxDQUFDO0FBQ3RHLDJGQUEyRixTQUFTLENBQUMsT0FBTztBQUM1RyxnQkFBZ0IsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXO0FBQ2hELGNBQWMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CO0FBQ3RFLGNBQWMseUJBQXlCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixDQUFDO0FBQ3pFLFVBQVUsY0FBYyxDQUFDO0FBQ3pCLDJDQUEyQyxXQUFXLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDLHVCQUF1QixDQUFDO0FBQzVJLHlEQUF5RCxpQkFBaUIsRUFBRTtBQUU1RTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsK0NBQStDO0lBQy9DLG1CQUFtQjtJQUNuQjtBQUNKO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZDtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWDtBQUNKO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBR3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmO0FBQ0o7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEI7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Q7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWDtBQUNKO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixxQkFBcUI7SUFDekI7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLHNCQUFzQjtJQUMxQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL2NvbXBvbmVudHMvcHVyY2hhc2UtZGV0YWlsL3B1cmNoYXNlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk9yZGVyTG9nbyB7dGV4dC1hbGlnbjogbGVmdDtwYWRkaW5nLWxlZnQ6IDB9XHJcbi5PcmRlckxvZ28gaW1nIHt3aWR0aDogYXV0bztoZWlnaHQ6IDQ2cHh9XHJcbi5fY3VzdF9maWx0ZXIge3BhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O3BhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7fVxyXG4uX2N1c3RfZmlsdGVyIC5mb3JtLXMyIC5uZy1zZWxlY3Qge3BhZGRpbmc6IDAgIWltcG9ydGFudDtoZWlnaHQ6IDMwcHggIWltcG9ydGFudDt9XHJcbi5fY3VzdF9maWx0ZXIgLmZvcm0tczIgLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciB7d2lkdGg6IDEwMCU7IGZvbnQtc2l6ZTogMTRweDtib3JkZXI6IG5vbmU7Ym9yZGVyLXJhZGl1czogMDttaW4taGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7aGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7fVxyXG4ubmF2LWl0ZW0ge2N1cnNvcjogcG9pbnRlcjt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O31cclxuLkNMLVByb2R1Y3Qge3BhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDt9XHJcbi5PcmRlckluZm8ge2ZvbnQtc2l6ZTogMTRweH1cclxuLk9yZGVySW5mbyBzcGFuIHt3aWR0aDogMTA1cHg7ZmxvYXQ6IGxlZnR9XHJcbi5PcmRlci1EZXRhaWwtdGFibGUgdGFibGUgdGQge2JvcmRlcjogc29saWQgMXB4ICMzMzMzMzM7cGFkZGluZzogNXB4IWltcG9ydGFudDtmb250LXNpemU6IDEycHh9XHJcbi5PcmRlci1EZXRhaWwtdGFibGUgdGFibGUgdGgge2JvcmRlcjogc29saWQgMXB4ICMzMzMzMzMhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6ICNlZGVkZWQhaW1wb3J0YW50O2NvbG9yOiAjMDAwO3BhZGRpbmc6IDVweCFpbXBvcnRhbnQ7Zm9udC1zaXplOiAxMnB4fVxyXG4uYnV0dG9uLWxpc3QgLmJ0bi1wcmltYXJ5IHtmb250LXNpemU6IDE0cHghaW1wb3J0YW50O2xldHRlci1zcGFjaW5nOiAxcHh9XHJcbi5idXR0b24tbGlzdCAuYnRuLXByaW1hcnkgLmZhIHtwYWRkaW5nLXJpZ2h0OiAzcHh9XHJcbi5vcmQtbm8ge3BhZGRpbmctdG9wOiAxN3B4O2ZvbnQtc2l6ZTogMTRweDt0ZXh0LWFsaWduOiByaWdodH1cclxuLnRhYmxlIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7Ym9yZGVyLXJhZGl1czogMDtib3JkZXItY29sb3I6ICNkZGRkZGQ7fVxyXG4udGFibGUgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQsIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7aGVpZ2h0OiAyNnB4O31cclxuLnRhYmxlIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93IHtoZWlnaHQ6IDI0cHg7fVxyXG4uY3VzLWNoZS10YWJsZSAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1cy1jaGUtdGFibGUgLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7dG9wOiAtN3B4O2xlZnQ6IDB9XHJcbi5jdXMtY2hlLXRhYmxlIHtwYWRkaW5nOiAwO21hcmdpbjogMDt3aWR0aDogMjJweH1cclxuLmJ0bi1wcmltYXJ5IHtwYWRkaW5nLXRvcDogNHB4O3BhZGRpbmctYm90dG9tOiA0cHg7bGV0dGVyLXNwYWNpbmc6IDFweH1cclxuLmJvdHRvbS1ncmF5IHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2OyBwYWRkaW5nOiAxMHB4OyBtYXJnaW4tdG9wOiAyMHB4O31cclxuLmFjdGl2ZSB7IGRpc3BsYXk6IGJsb2NrO31cclxuI2V4YW1wbGUyIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge3dpZHRoOiAxMDAlO2ZvbnQtc2l6ZTogMTRweDtib3JkZXItcmFkaXVzOiAwO21pbi1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtoZWlnaHQ6IDI1cHggIWltcG9ydGFudDt9XHJcbiNleGFtcGxlMiAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIGRpdi5uZy1pbnB1dCB7IHRvcDogMCAhaW1wb3J0YW50OyB9XHJcblxyXG4uUHJvZHVjdC1GaWx0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMjtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjMDAzOGJhXHJcbn1cclxuLlByb2R1Y3QtRmlsdGVyIC5uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4IDBweCA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLlByb2R1Y3QtRmlsdGVyIC5uYXYge1xyXG4gICAgd2lkdGg6IDc0cHg7XHJcbiAgICBmbG9hdDogcmlnaHRcclxufVxyXG4uUHJvZHVjdC1GaWx0ZXIgLm5hdiAuZmEge1xyXG4gICAgY29sb3I6ICNhNmE1YTU7XHJcbiAgICBmb250LXNpemU6IDIwcHhcclxufVxyXG4uUHJvZHVjdC1GaWx0ZXIgLmFjdGl2ZSAuZmEge1xyXG4gICAgY29sb3I6ICMwMDM4YmFcclxufVxyXG4uQ0wtUHJvZHVjdCB7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHhcclxufVxyXG4uQ0wtUHJvZHVjdCBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZGVkZWRlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHhcclxufVxyXG4uX2N1c3RfZmlsdGVyIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTRlNGU0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbi5fY3VzdF9maWx0ZXIgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbn1cclxuLlByb2R1Y3QtRmlsdGVyIC5idG4tcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4XHJcbn1cclxuLkNMLVByb2R1Y3QgLmZhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgY29sb3I6ICNiNWI1YjVcclxufVxyXG4uX2N1c3RfZmlsdGVyIHtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweFxyXG59XHJcbi5fY3VzdF9maWx0ZXIgc2VsZWN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZGVkZWRlXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIC5oZWFkZXItdGFicyAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAuaGVhZGVyLXRhYnMgLm5hdi10YWJzIC5uYXYtbGluaywgLmhlYWRlci10YWJzIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxMnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIH1cclxufVxyXG4uX2N1c3RfZmlsdGVyIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLl9jdXN0X2ZpbHRlciAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xyXG4gICAgaGVpZ2h0OiAzMnB4IWltcG9ydGFudDtcclxufVxyXG4uX2N1c3RfZmlsdGVyIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5fY3VzdF9maWx0ZXIgLmZvcm0tczIgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3cge1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbi5DTC1Qcm9kdWN0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHhcclxufVxyXG4uUHJvZHVjdC1GaWx0ZXIgLmJ0bi1wcmltYXJ5IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTcwcHgpIHtcclxuICAgIC5oZWFkZXItdGFicyAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAuaGVhZGVyLXRhYnMgLm5hdi10YWJzIC5uYXYtbGluaywgLmhlYWRlci10YWJzIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDEwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchasedDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-detail',
                templateUrl: './purchase-detail.component.html',
                styleUrls: ['./purchase-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }, { type: _services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"] }]; }, null); })();


/***/ }),

/***/ "mCdF":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/reports/components/spot-sale/spot-sale.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SpotSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotSaleComponent", function() { return SpotSaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loader-white/loader-white.component */ "uoBr");







function SpotSaleComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SpotSaleComponent {
    constructor() {
        this.dtOptions = {};
        this.loading = false;
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }
    ngOnInit() {
    }
}
SpotSaleComponent.ɵfac = function SpotSaleComponent_Factory(t) { return new (t || SpotSaleComponent)(); };
SpotSaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpotSaleComponent, selectors: [["app-spot-sale"]], decls: 113, vars: 5, consts: [[1, "container"], [1, "row", "mt-2", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "header", "addPR-head"], [1, "float-left"], [1, "_PR_filter", "pr-15", 2, "width", "170px!important"], [1, "form-group", "mb-0", 2, "height", "auto"], ["type", "date", "id", "datepicker", "name", "filt-date", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "_PR_filter", "pr-15"], [1, "form-s2"], ["name", "salesmen", "placeholder", "Select Salesman", 1, "formselect", 2, "width", "100%!important", 3, "ngModel", "multiple", "ngModelChange"], ["value", "0", "selected", ""], ["value", "1"], [1, "body", "pb-0"], ["datatable", "", "id", "example", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions"], [1, "col-md-12", "text-right", 2, "background-color", "#f3f3f3", "padding", "10px 15px", "margin-top", "5px", "margin-bottom", "5px"], ["id", "generateSpotSale", 1, "btn", "btn-primary"], ["class", "col-md-12", 4, "ngIf"]], template: function SpotSaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Spot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sales Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Spot Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Select Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SpotSaleComponent_Template_input_ngModelChange_25_listener($event) { return ctx.selectedDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select Salesman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ng-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SpotSaleComponent_Template_ng_select_ngModelChange_31_listener($event) { return ctx.selectedSaleMan = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Select Salesman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ng-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Salesman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "ORDER ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "RETAILER NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "SEGMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "ROUTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "ORDER BOOKER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "SALES MAN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "ORDER VALUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "VIEW DATA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "2323");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "768 shop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Asif");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Yasir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Rs:0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "2323");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "768 shop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Asif");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Yasir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Rs:0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "2323");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "768 shop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Asif");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Yasir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Rs:0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Generate Sales Spot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, SpotSaleComponent_div_112_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedSaleMan)("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["ɵr"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_5__["WhiteLoaderComponent"]], styles: ["._PR_filter{margin-top: -2px; width: 300px!important; float: left}\r\n.addPR-head h3{font-size: 14px; padding-right: 10px; line-height: 2; margin: 0}\r\n._PR_filter input {box-shadow: none;font-size: 13px;height: 31px;border-color: #eae9e9;}\r\n.addPR-head {font-size: 16px;padding: 15px 15px 15px 20px !important;}\r\n.input-error { font-size: 11px; color: orangered;margin-top: 5px;}\r\n._PR_filter .form-s2 .ng-select {padding: 0 !important;height: 30px !important;}\r\n._PR_filter .form-s2 .ng-select .ng-select-container div.ng-input { top: 0 !important; }\r\n._PR_filter .form-s2 .ng-select .ng-select-container {line-height: 28px!important; font-family: 'proximanova-light', sans-serif!important; font-size: 13px!important;}\r\n._PR_filter .form-s2 .ng-select .ng-select-container, ._PR_filter .form-s2 .ng-select .ng-arrow-wrapper{height: 31px!important; min-height: 31px!important;}\r\n._PR_filter .form-s2 .ng-select .ng-select-container {border-radius: 0 !important;}\r\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input input {height: 28px;}\r\n._PR_filter .form-s2 .ng-select .ng-clear-wrapper {display: none !important;}\r\n#generateSpotSale {color: #fff !important; background: linear-gradient(90deg, #1e54d3 0%, #0038ba 100%);}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL2NvbXBvbmVudHMvc3BvdC1zYWxlL3Nwb3Qtc2FsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksZ0JBQWdCLEVBQUUsc0JBQXNCLEVBQUUsV0FBVztBQUNqRSxlQUFlLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsU0FBUztBQUM5RSxtQkFBbUIsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQztBQUN2RixhQUFhLGVBQWUsQ0FBQyx1Q0FBdUMsQ0FBQztBQUNyRSxlQUFlLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7QUFDakUsaUNBQWlDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDO0FBQy9FLG9FQUFvRSxpQkFBaUIsRUFBRTtBQUN2RixzREFBc0QsMkJBQTJCLEVBQUUsc0RBQXNELEVBQUUseUJBQXlCLENBQUM7QUFDckssd0dBQXdHLHNCQUFzQixFQUFFLDBCQUEwQixDQUFDO0FBQzNKLHNEQUFzRCwyQkFBMkIsQ0FBQztBQUNsRixzRkFBc0YsWUFBWSxDQUFDO0FBQ25HLG1EQUFtRCx3QkFBd0IsQ0FBQztBQUM1RSxtQkFBbUIsc0JBQXNCLEVBQUUsNERBQTRELENBQUMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvY29tcG9uZW50cy9zcG90LXNhbGUvc3BvdC1zYWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuX1BSX2ZpbHRlcnttYXJnaW4tdG9wOiAtMnB4OyB3aWR0aDogMzAwcHghaW1wb3J0YW50OyBmbG9hdDogbGVmdH1cclxuLmFkZFBSLWhlYWQgaDN7Zm9udC1zaXplOiAxNHB4OyBwYWRkaW5nLXJpZ2h0OiAxMHB4OyBsaW5lLWhlaWdodDogMjsgbWFyZ2luOiAwfVxyXG4uX1BSX2ZpbHRlciBpbnB1dCB7Ym94LXNoYWRvdzogbm9uZTtmb250LXNpemU6IDEzcHg7aGVpZ2h0OiAzMXB4O2JvcmRlci1jb2xvcjogI2VhZTllOTt9XHJcbi5hZGRQUi1oZWFkIHtmb250LXNpemU6IDE2cHg7cGFkZGluZzogMTVweCAxNXB4IDE1cHggMjBweCAhaW1wb3J0YW50O31cclxuLmlucHV0LWVycm9yIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogb3JhbmdlcmVkO21hcmdpbi10b3A6IDVweDt9XHJcbi5fUFJfZmlsdGVyIC5mb3JtLXMyIC5uZy1zZWxlY3Qge3BhZGRpbmc6IDAgIWltcG9ydGFudDtoZWlnaHQ6IDMwcHggIWltcG9ydGFudDt9XHJcbi5fUFJfZmlsdGVyIC5mb3JtLXMyIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgZGl2Lm5nLWlucHV0IHsgdG9wOiAwICFpbXBvcnRhbnQ7IH1cclxuLl9QUl9maWx0ZXIgLmZvcm0tczIgLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciB7bGluZS1oZWlnaHQ6IDI4cHghaW1wb3J0YW50OyBmb250LWZhbWlseTogJ3Byb3hpbWFub3ZhLWxpZ2h0Jywgc2Fucy1zZXJpZiFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMTNweCFpbXBvcnRhbnQ7fVxyXG4uX1BSX2ZpbHRlciAuZm9ybS1zMiAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyLCAuX1BSX2ZpbHRlciAuZm9ybS1zMiAubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVye2hlaWdodDogMzFweCFpbXBvcnRhbnQ7IG1pbi1oZWlnaHQ6IDMxcHghaW1wb3J0YW50O31cclxuLl9QUl9maWx0ZXIgLmZvcm0tczIgLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciB7Ym9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O31cclxuLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0IGlucHV0IHtoZWlnaHQ6IDI4cHg7fVxyXG4uX1BSX2ZpbHRlciAuZm9ybS1zMiAubmctc2VsZWN0IC5uZy1jbGVhci13cmFwcGVyIHtkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7fVxyXG4jZ2VuZXJhdGVTcG90U2FsZSB7Y29sb3I6ICNmZmYgIWltcG9ydGFudDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMWU1NGQzIDAlLCAjMDAzOGJhIDEwMCUpO31cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpotSaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spot-sale',
                templateUrl: './spot-sale.component.html',
                styleUrls: ['./spot-sale.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tTLG":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/reports/components/order-booker-list/order-booker-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OrderBookerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBookerListComponent", function() { return OrderBookerListComponent; });
/* harmony import */ var _core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../core/constants/api-urls.constants */ "oo4J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _retailer_services_retailer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../retailer/services/retailer.service */ "hc6j");
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../core/services/storage.service */ "UYTb");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../core/services/toaster.service */ "ZgVV");
/* harmony import */ var _orders_services_orders_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../orders/services/orders.service */ "5TcN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/loader-white/loader-white.component */ "uoBr");















function OrderBookerListComponent_tr_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.item_sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.booked_qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.delivered_qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.executed_qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 14, item_r5.item_trade_price, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 17, item_r5.gr_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 20, item_r5.trade_offer, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](22, 23, item_r5.trade_discount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](25, 26, item_r5.special_discount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](28, 29, item_r5.extra_discount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.tax_in_percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](33, 32, item_r5.tax_in_value, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](36, 35, item_r5.final_price, "1.2-2"));
} }
function OrderBookerListComponent_ng_option_403_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sman_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", sman_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", sman_r6.name, " ");
} }
function OrderBookerListComponent_ng_option_407_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ob_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ob_r7.employee_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ob_r7.employee_name, " ");
} }
function OrderBookerListComponent_ng_option_413_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", s_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", s_r8.name, " ");
} }
function OrderBookerListComponent_tr_444_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderBookerListComponent_tr_444_Template_button_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const order_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.openDetailsModal($event, order_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Bill");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderBookerListComponent_tr_444_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const order_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.openBillsModal(order_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Bill");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r9.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r9.invoice_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r9.shop_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r9.shop_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r9.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r9.order_booker);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r9.salesman);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r9.order_total);
} }
class OrderBookerListComponent {
    constructor(retailerService, storageService, toastService, orderService) {
        this.retailerService = retailerService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.orderService = orderService;
        this.dtOptions = {};
        this.loading = false;
        this.orders = [];
        this.criterias = {
            order_booker: [],
            routes: [],
            segments: [],
            salesmen: [],
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showDetailsModal = false;
        //Meaning yesterday date
        this.date = new Date(Date.now() - 864e5);
        this.distributorId = null;
        this.orderDetail = [];
        this.invoiceDate = null;
        this.activeOrder = null;
        this.paymentInfo = {
            cash: {
                amount: 0,
                payment_mode: 'cash'
            },
            cheque: {
                amount: 0,
                payment_mode: 'cheque'
            },
            credit: {
                amount: 0,
                payment_mode: 'credit'
            }
        };
        this.distributorId = this.storageService.getItem('distributor').id;
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.startDate = `${this.date.getFullYear()}-${("0" + (this.date.getMonth() + 1)).slice(-2)}-${("0" + this.date.getDate()).slice(-2)}`;
        this.endDate = `${new Date().getFullYear()}-${("0" + (new Date().getMonth() + 1)).slice(-2)}-${("0" + new Date().getDate()).slice(-2)}`;
        this.OrderType = "0";
        this.segment = "0";
    }
    ngOnInit() {
        this.getCoreInformation();
    }
    getCoreInformation() {
        this.loading = true;
        this.orderService.getSaleHistorySearchCriterias().subscribe(res => {
            this.criterias = res;
            this.OrderBooker = this.criterias.order_booker[0].employee_id.toString();
            this.getOrderBookersList();
        }, error => {
            this.loading = false;
            if (error.status !== 401 && error.status !== 1) {
                this.toastService.showToaster({
                    title: 'Error:',
                    message: 'Unable to get search criterias',
                    type: 'error'
                });
            }
            scrollTo(0, 0);
        });
    }
    getOrderBookersList() {
        if (this.startDate > this.endDate)
            return this.toastService.showToaster({
                title: 'Error:',
                message: 'Please keep start date lower than end date',
                type: 'error'
            });
        const endDateTemp = new Date(this.endDate);
        const startDateTemp = new Date(this.startDate);
        const diffInMs = endDateTemp - startDateTemp;
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
        if (diffInDays > 5)
            return this.toastService.showToaster({
                title: 'Error:',
                message: 'You can not select more than 5 days of orders',
                type: 'error'
            });
        if (this.isDtInitialized) {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.isDtInitialized = false;
        }
        this.loading = true;
        let filters = `order_booker=${this.OrderBooker}&start_date=${this.startDate}&end_date=${this.endDate}`;
        if (this.OrderType && this.OrderType != "0")
            filters += `&order_type=${this.OrderType}`;
        if (this.salesmanId && this.salesmanId != "0")
            filters += `&salesman=${this.salesmanId}`;
        if (this.segment && this.segment != "0")
            filters += `&segment=${this.segment}`;
        this.orderService.getSaleHistory(filters).subscribe(res => {
            this.orders = res;
            if (!this.isDtInitialized) {
                this.isDtInitialized = true;
                this.dtTrigger.next();
            }
            setTimeout(() => {
                this.loading = false;
            }, 300);
        }, error => {
            this.loading = false;
            if (error.status !== 401 && error.status !== 1) {
                this.toastService.showToaster({
                    title: 'Error:',
                    message: 'New Orders not fetched, try again later.',
                    type: 'error'
                });
            }
            scrollTo(0, 0);
        });
    }
    closeSalemanLedger() {
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('retailer-list').classList.remove('blur-div');
    }
    goToProfile() {
        console.log('Coming soon!');
    }
    openDetailsModal(e, orderId) {
        this.orderDetail = [];
        e.target.setAttribute("disabled", "disabled");
        this.getViewOrderDetailById(e, orderId);
    }
    getBills(size = 'A4') {
        const billsUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiDomain}${_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_0__["API_URLS"].BILLS}?type=bill&emp=${this.activeOrder.sales_man_id}&date=${this.activeOrder.date}&dist_id=${this.distributorId}&size=${size}&status=processed&orderID=${this.activeOrder.id}`;
        window.open(billsUrl, "_blank");
        // if (this.invoiceDate) {
        //   this.orderService.updateDispatchInvoiceDate(this.activeOrder.load_id, this.invoiceDate).subscribe(res => {
        //     if (res.status === 200) {
        //       document.getElementById('close-bills').click();
        //       const billsUrl = `${environment.apiDomain}${API_URLS.BILLS}?type=bill&emp=${this.activeOrder.sales_man_id}&date=${this.activeOrder.date}&dist_id=${this.distributorId}&size=${size}&status=processed&loadId=${this.activeOrder.load_id}`;
        //       window.open(billsUrl, "_blank");
        //       this.invoiceDate = null;
        //     } else {
        //       this.toastService.showToaster({
        //         type: 'error',
        //         message: 'Bill cannot be generated at the moment, please try again later!',
        //         title: 'Bill cannot be generated:'
        //       });
        //     }
        //   });
        // } else {
        //   this.toastService.showToaster({
        //     type: 'error',
        //     message: 'Please select invoice date to generate bill(s)!',
        //     title: 'Please select invoice date:'
        //   });
        // }
    }
    openBillsModal(order) {
        this.activeOrder = order;
        document.getElementById("billsPrintPaperModalTrigger").click();
    }
    getViewOrderDetailById(e, order) {
        this.retailerService.getOrderDetail(order.id).subscribe(res => {
            this.activeOrder = order;
            this.orderDetail = res.details;
            this.paymentInfo = {
                cash: res.payments.find(x => x.payment_mode.toLowerCase() == 'cash'),
                cheque: res.payments.find(x => x.payment_mode.toLowerCase() == 'cheque'),
                credit: res.payments.find(x => x.payment_mode.toLowerCase() == 'credit'),
            };
            e.target.removeAttribute("disabled");
            document.getElementById("orderDetailsModalTrigger").click();
            this.orderDetail.gross_amount = this.orderDetail.map(x => x.gr_amount).reduce((a, b) => a + b, 0);
            this.orderDetail.to_discount = this.orderDetail.map(x => x.trade_offer).reduce((a, b) => a + b, 0);
            this.orderDetail.trade_discount = this.orderDetail.map(x => x.trade_discount).reduce((a, b) => a + b, 0);
            this.orderDetail.special_discount = this.orderDetail.map(x => x.special_discount).reduce((a, b) => a + b, 0);
            this.orderDetail.booker_discount = this.orderDetail.map(x => x.extra_discount).reduce((a, b) => a + b, 0);
            this.orderDetail.tax_amount = this.orderDetail.map(x => x.tax_in_value).reduce((a, b) => a + b, 0);
            this.orderDetail.total_amount = this.orderDetail.map(x => x.final_price).reduce((a, b) => a + b, 0);
            this.orderDetail.recovery_amount = 0;
            this.orderDetail.discount_pkr = this.orderDetail.to_discount + this.orderDetail.trade_discount + this.orderDetail.special_discount + this.orderDetail.booker_discount;
            this.showDetailsModal = true;
        });
    }
    closeDetailsModal() {
        document.body.classList.remove('no-scroll');
    }
}
OrderBookerListComponent.ɵfac = function OrderBookerListComponent_Factory(t) { return new (t || OrderBookerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_retailer_services_retailer_service__WEBPACK_IMPORTED_MODULE_5__["RetailerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_orders_services_orders_service__WEBPACK_IMPORTED_MODULE_8__["OrdersService"])); };
OrderBookerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OrderBookerListComponent, selectors: [["app-order-booker-list"]], viewQuery: function OrderBookerListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 447, vars: 80, consts: [["id", "billsModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "billsModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "top_border"], [1, "modal-header"], ["id", "billsModalLabel", 1, "modal-title"], ["type", "button", "id", "close-bills", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-12"], [1, "heading3"], [1, "row", "print-icon-div", "pb-0"], [1, "col-6", "pl-0"], [3, "click"], ["src", "assets/images/a4.svg", "alt", "", 1, "print-icon"], [1, "col-6", "pr-0"], ["src", "assets/images/a5.svg", "alt", "", 1, "print-icon"], ["id", "OrderDetailModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "OrderDetailModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "overflow-y", "auto"], ["role", "document", 1, "modal-dialog", "modal-full", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "border-0"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 2, "font-size", "30px", 3, "click"], [1, "modal-body", "p-0"], [1, "container"], [1, "card", "mb-20"], [1, "p-10", 2, "border-bottom", "solid 2px #000"], [1, "row", "m-0"], [1, "col-8", "OrderLogo"], ["src", "/assets/images/sell-360.svg", "alt", ""], [1, "col-4", "ord-no"], [1, "body", 2, "padding", "15px 20px"], [1, "form-body"], [1, "row", "OrderInfo"], [1, "col-md-9"], [1, "col-md-3", "p-0"], [1, "seprator-block"], [1, "Order-Detail-table", "mt-20"], [1, "table"], [1, "order_items_body"], [4, "ngFor", "ngForOf"], [1, "border-0"], [2, "background-color", "#dfdfdf", "color", "#000"], [2, "background-color", "#d3d3d3", "color", "#000"], [1, "clearfix"], [1, "row", "justify-content-end"], [1, "col-4", "Order-Detail-table"], [1, "font16"], [1, "table", "mb-0"], ["id", "retailer-list", 1, "container"], [1, "row", "mt-2", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], ["href", "#"], [1, "col-lg-12"], [1, "header-tabs"], [1, "Product-Filter"], [1, "col-12", "mb-10"], [1, "CL-Product", 2, "width", "100%", "padding-right", "0"], [1, "fa", "fa-search"], ["type", "text", "id", "", "placeholder", "Search by Invoice No or Shop ID", 1, "form-control"], [1, "CL-Product", 2, "width", "116px!important"], ["placeholder", "Start Date", "type", "text", "onfocus", "(this.type = 'date')", "id", "date", 1, "form-control", "pad-date", 3, "ngModel", "ngModelChange"], ["placeholder", "End Date", "type", "text", "onfocus", "(this.type = 'date')", "id", "date", 1, "form-control", "pad-date", 3, "ngModel", "ngModelChange"], [1, "_cust_filter"], [1, "form-s2"], ["id", "OrderType", "placeholder", "All Order Types", "name", "order-type", "required", "", 1, "formselect", 3, "multiple", "ngModel", "ngModelChange"], ["value", "0", "selected", ""], ["value", "executed"], ["value", "counter_sale"], ["value", "spot_sale"], ["id", "AllSalesmen", "placeholder", "All Salesmen", "name", "all-salesmen", "required", "", 1, "formselect", 3, "multiple", "ngModel", "ngModelChange"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "OrderBooker", "placeholder", "All Order Bookers", "name", "OrderBooker", "required", "", 1, "formselect", 3, "multiple", "ngModel", "ngModelChange"], ["id", "segment", "placeholder", "All Segments", "name", "segment", "required", "", 1, "formselect", 3, "multiple", "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"], [1, "col-md-12"], [1, "card"], [1, "body"], ["datatable", "", "id", "example", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtTrigger", "dtOptions"], [3, "value"], ["data-toggle", "modal", "data-target", "#OrderDetailModal", "id", "orderDetailsModalTrigger", "hidden", "", 1, "btn", "btn-default", "btn-line", "mb-0"], [1, "btn", "btn-default", "btn-line", "mb-0", 3, "click"], ["data-toggle", "modal", "data-target", "#billsModal", "id", "billsPrintPaperModalTrigger", "hidden", "", 1, "btn", "btn-default", "mb-0"], [1, "btn", "btn-default", "mb-0", 3, "click"]], template: function OrderBookerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Print bill for this order");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Select paper size for print");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderBookerListComponent_Template_a_click_17_listener() { return ctx.getBills("A4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "A4 Portrait Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderBookerListComponent_Template_a_click_22_listener() { return ctx.getBills("A5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "A5 Landscape Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderBookerListComponent_Template_button_click_30_listener() { ctx.showDetailsModal = false; return ctx.closeDetailsModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Invoice# ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Retailer Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Segment: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Phone No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Order Booker: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Salesman: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "B.QTY.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "D.QTY.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "E.QTY.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "T.P");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "GR.AMNT.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "T.O");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "T.Disc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "SPC.Disc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "Extra.Disc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "TAX %");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "TAX AMNT.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Net.AMNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "tbody", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](138, OrderBookerListComponent_tr_138_Template, 37, 38, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](144, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](147, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](150, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](151, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, "G.AMNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](158, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](161, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](163, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](164, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](165, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](166, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](167, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](168, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](169, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](170, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](171, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "T.O.Disc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](178, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](180, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](181, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](182, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](183, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](184, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](185, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](186, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](187, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](188, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](189, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](190, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](191, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "Trade Disc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](198, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](200, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](201, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](202, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](203, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](204, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](206, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](207, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](208, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](209, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](210, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](211, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, "Spc. Disc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](218, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](220, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](221, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](222, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](223, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](224, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](225, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](226, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](227, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](228, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](229, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](230, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](231, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](234, "Extra. Disc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](237);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](238, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](240, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](241, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](242, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](243, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](244, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](245, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](246, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](248, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](249, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](250, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](251, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](254, "Discount PKR.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](257);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](258, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](260, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](261, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](262, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](263, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](264, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](265, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](266, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](267, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](268, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](269, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](270, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](271, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](274, "Total TAX");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](277);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](278, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](280, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](281, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](282, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](283, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](284, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](285, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](286, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](287, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](288, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](289, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](290, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](291, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](292, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](294, "Total AMNT.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](296, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](297);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](298, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](299, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](300, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](301, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](302, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](303, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](304, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](305, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](306, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](307, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](308, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](309, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](310, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](311, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](312, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "Recovery AMNT.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](316, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](318, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](319, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](320, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](321, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](322, "h3", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](323, "Payment Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](324, "table", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](325, "tbody", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](326, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](328, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](329, "Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](330, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](331, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](332);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](333, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](336, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](337, "Cheque");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](338, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](340);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](341, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](342, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](343, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](344, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](345, "Total Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](346, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](347, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](348, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](349, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](350, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](351, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](352, "Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](353, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](354, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](355);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](356, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](357, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](358, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](359, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "h2", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](361, "Sale Order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](362, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](363, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](364, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](365, "ol", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](367, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](368, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](369, "Order Booker");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](370, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](371, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](372, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](373, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](374, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](375, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](376, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](377, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](378, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](379, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](380, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](381, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](382, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](383, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](384, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function OrderBookerListComponent_Template_input_ngModelChange_384_listener($event) { return ctx.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](386, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function OrderBookerListComponent_Template_input_ngModelChange_386_listener($event) { return ctx.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](387, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](388, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "ng-select", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function OrderBookerListComponent_Template_ng_select_ngModelChange_389_listener($event) { return ctx.OrderType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](390, "ng-option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](391, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](392, "ng-option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](393, " Executed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](394, "ng-option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](395, " Counter Sale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](396, "ng-option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](397, " Spot Sale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](398, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](399, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](400, "ng-select", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function OrderBookerListComponent_Template_ng_select_ngModelChange_400_listener($event) { return ctx.salesmanId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](401, "ng-option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](402, " All Salesmen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](403, OrderBookerListComponent_ng_option_403_Template, 2, 2, "ng-option", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](404, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](405, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](406, "ng-select", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function OrderBookerListComponent_Template_ng_select_ngModelChange_406_listener($event) { return ctx.OrderBooker = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](407, OrderBookerListComponent_ng_option_407_Template, 2, 2, "ng-option", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](408, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](409, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](410, "ng-select", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function OrderBookerListComponent_Template_ng_select_ngModelChange_410_listener($event) { return ctx.segment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](411, "ng-option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](412, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](413, OrderBookerListComponent_ng_option_413_Template, 2, 2, "ng-option", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](414, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderBookerListComponent_Template_button_click_414_listener() { return ctx.getOrderBookersList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](415, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](416, " Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](417, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](418, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](419, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](420, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](421, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](422, "table", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](423, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](424, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](425, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](426, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](427, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](428, "Invoice#");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](429, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](430, "Shop ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](431, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](432, "Shop Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](433, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](434, "Segment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](435, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](436, "Order Booker");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](437, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](438, "Salesman");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](439, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](440, "Invoice Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](441, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](442, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](443, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](444, OrderBookerListComponent_tr_444_Template, 26, 8, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](445, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](446, "app-loader-white");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.activeOrder == null ? null : ctx.activeOrder.invoice_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.activeOrder == null ? null : ctx.activeOrder.shop_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.activeOrder == null ? null : ctx.activeOrder.segment);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.activeOrder == null ? null : ctx.activeOrder.retailer_phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.activeOrder == null ? null : ctx.activeOrder.retailer_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.activeOrder == null ? null : ctx.activeOrder.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.activeOrder == null ? null : ctx.activeOrder.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.activeOrder == null ? null : ctx.activeOrder.order_booker);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.activeOrder == null ? null : ctx.activeOrder.salesman);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.orderDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](158, 44, ctx.orderDetail == null ? null : ctx.orderDetail.gross_amount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](178, 47, ctx.orderDetail == null ? null : ctx.orderDetail.to_discount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](198, 50, ctx.orderDetail == null ? null : ctx.orderDetail.trade_discount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](218, 53, ctx.orderDetail == null ? null : ctx.orderDetail.special_discount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](238, 56, ctx.orderDetail == null ? null : ctx.orderDetail.booker_discount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](258, 59, ctx.orderDetail == null ? null : ctx.orderDetail.discount_pkr, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](278, 62, ctx.orderDetail == null ? null : ctx.orderDetail.tax_amount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](298, 65, ctx.orderDetail == null ? null : ctx.orderDetail.total_amount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](318, 68, ctx.orderDetail == null ? null : ctx.orderDetail.recovery_amount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](333, 71, ctx.paymentInfo.cash ? ctx.paymentInfo.cash.amount : 0, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](341, 74, ctx.paymentInfo.cheque ? ctx.paymentInfo.cheque.amount : 0, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](356, 77, ctx.paymentInfo.credit ? ctx.paymentInfo.credit.amount : 0, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.loading ? "none" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false)("ngModel", ctx.OrderType);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false)("ngModel", ctx.salesmanId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.criterias.salesmen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false)("ngModel", ctx.OrderBooker);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.criterias.order_booker);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false)("ngModel", ctx.segment);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.criterias.segments);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.loading ? "none" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtTrigger", ctx.dtTrigger)("dtOptions", ctx.dtOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", !ctx.loading ? "none" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["ɵr"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_12__["WhiteLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: [".Product-Filter {\r\n    background-color: #f3f2f2;\r\n    padding: 15px 15px 0px 15px;\r\n    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\r\n    margin-bottom: 15px;\r\n    border-bottom: solid 2px #0038ba\r\n}\r\n.Product-Filter .nav-link { padding: 6px 8px 0px 8px; cursor: pointer;}\r\n.Product-Filter .nav {width: 74px;float: right}\r\n.Product-Filter .nav .fa {color: #a6a5a5; font-size: 20px}\r\n.Product-Filter .active .fa {color: #0038ba}\r\n.Product-Filter .btn-primary {\r\n    color: #fff !important;\r\n    cursor: pointer;\r\n    float: left;\r\n    margin-left: 0px;\r\n    padding-top: 4px;\r\n    padding-bottom: 4px\r\n}\r\n#productlist01 { color: #fff !important }\r\n.CL-Product {\r\n    width: 238px;\r\n    position: relative;\r\n    float: left;\r\n    padding-right: 10px\r\n}\r\n.CL-Product input {\r\n    height: 32px;\r\n    border: solid 1px #dedede;\r\n    box-shadow: none;\r\n    padding-left: 30px;\r\n    font-size: 13px;\r\n    letter-spacing: 1px;\r\n}\r\n.CL-Product .fa { position: absolute;top: 8px;left: 8px;color: #b5b5b5;}\r\n._cust_filter {float: left; margin-bottom: 15px; width: 22%; padding-right: 10px;}\r\n._cust_filter ng-select {border-radius: 0;height: 32px;}\r\n.ng-select .ng-select-container {background: #fff !important;border-radius: 0;height: 32px !important; min-height: 32px !important;line-height: 19px!important; font-family: 'proximanova-light', sans-serif!important; font-size: 13px!important;}\r\n.dataTable .btn-default, .smBTN {color: #fff;}\r\n.OrderLogo {\r\n\ttext-align: left;\r\n\tpadding-left: 0\r\n}\r\n.OrderLogo img {\r\n\twidth: auto;\r\n\theight: 46px\r\n}\r\n.OrderInfo {\r\n\tfont-size: 14px\r\n}\r\n.OrderInfo span {\r\n\twidth: 105px;\r\n\tfloat: left\r\n}\r\n.Order-Detail-table table td {\r\n\tborder: solid 1px #333333;\r\n\tpadding: 5px!important;\r\n\tfont-size: 12px\r\n}\r\n.Order-Detail-table table th {\r\n\tborder: solid 1px #333333!important;\r\n\tbackground-color: #ededed!important;\r\n\tcolor: #000;\r\n\tpadding: 5px!important;\r\n\tfont-size: 12px\r\n}\r\n.button-list .btn-primary {\r\n\tfont-size: 14px!important;\r\n\tletter-spacing: 1px\r\n}\r\n.button-list .btn-primary .fa {\r\n\tpadding-right: 3px\r\n}\r\n.ord-no {\r\n\tpadding-top: 16px;\r\n\tfont-size: 14px;\r\n\ttext-align: right\r\n}\r\n._cust_filter {\r\n\twidth: 190px\r\n}\r\n.pad-date{ padding-left: 5px !important; padding-right:0 !important; font-size: 12px !important; letter-spacing: normal!important;}\r\n/* date icons css */\r\n.pad-date[type=\"date\"]::-webkit-calendar-picker-indicator {\r\n    position: absolute;\r\n    left: auto;\r\n    right: 17px;\r\n    width: 14px; padding-left: 0; padding-right: 0;\r\n}\r\n@media (max-width: 1280px) {\r\n._cust_filter {\twidth: 170px}\r\n.Product-Filter .btn-primary{padding-left: 15px; padding-right: 15px;}\r\n}\r\n.print-icon-div{text-align: center; padding: 15px;}\r\n.print-icon-div a{display: inline-block; border: solid 1px #e9ecef; padding: 15px; width: 100%; text-align: center; text-decoration: none; color: #282828; font-size: 13px;}\r\n.print-icon-div a:HOVER{border: solid 1px #0038ba; color: #0038ba; box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);}\r\n.print-icon{filter: grayscale(1); width: 45px; opacity: 0.7; display: block; margin: auto; margin-top: 10px; margin-bottom: 15px;}\r\n.print-icon-div a:HOVER .print-icon{filter:none; opacity: 1;}\r\n.heading3{margin: 0; font-size: 16px;}\r\n.select-date, .select-date:focus{box-shadow: none; border: none; background-color:#f6f6f6; font-size: 14px; height: 30px; width: 200px}\r\n.no-content {width:100%;height:65vh;display:flex;}\r\n.no-content .no-content-container {margin: auto;display:table;text-align: center; color:#B7B7B7}\r\n.no-content .no-content-container img {width: 70px; height: 70px; margin: auto auto 10px auto; display: block}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL2NvbXBvbmVudHMvb3JkZXItYm9va2VyLWxpc3Qvb3JkZXItYm9va2VyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsK0NBQStDO0lBQy9DLG1CQUFtQjtJQUNuQjtBQUNKO0FBQ0EsNEJBQTRCLHdCQUF3QixFQUFFLGVBQWUsQ0FBQztBQUN0RSxzQkFBc0IsV0FBVyxDQUFDLFlBQVk7QUFDOUMsMEJBQTBCLGNBQWMsRUFBRSxlQUFlO0FBQ3pELDZCQUE2QixjQUFjO0FBQzNDO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQjtBQUNKO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFHekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0Esa0JBQWtCLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO0FBQ3ZFLGVBQWUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQztBQUNqRix5QkFBeUIsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0FBQ3ZELGlDQUFpQywyQkFBMkIsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsRUFBRSwyQkFBMkIsQ0FBQywyQkFBMkIsRUFBRSxzREFBc0QsRUFBRSx5QkFBeUIsQ0FBQztBQUNsUCxpQ0FBaUMsV0FBVyxDQUFDO0FBRzdDO0NBQ0MsZ0JBQWdCO0NBQ2hCO0FBQ0Q7QUFDQTtDQUNDLFdBQVc7Q0FDWDtBQUNEO0FBQ0E7Q0FDQztBQUNEO0FBQ0E7Q0FDQyxZQUFZO0NBQ1o7QUFDRDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QjtBQUNEO0FBQ0E7Q0FDQyxtQ0FBbUM7Q0FDbkMsbUNBQW1DO0NBQ25DLFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEI7QUFDRDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCO0FBQ0Q7QUFDQTtDQUNDO0FBQ0Q7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2Y7QUFDRDtBQUNBO0NBQ0M7QUFDRDtBQUNBLFdBQVcsNEJBQTRCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLENBQUM7QUFFbEksbUJBQW1CO0FBQ25CO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0I7QUFDbEQ7QUFDQTtBQUNBLGdCQUFnQixZQUFZO0FBQzVCLDZCQUE2QixrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQztBQUNyRTtBQUVBLGdCQUFnQixrQkFBa0IsRUFBRSxhQUFhLENBQUM7QUFDbEQsa0JBQWtCLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQztBQUMzSyx3QkFBd0IseUJBQXlCLEVBQUUsY0FBYyxFQUFFLCtDQUErQyxDQUFDO0FBQ25ILFlBQVksb0JBQW9CLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO0FBQ2pJLG9DQUFvQyxXQUFXLEVBQUUsVUFBVSxDQUFDO0FBRzVELFVBQVUsU0FBUyxFQUFFLGVBQWUsQ0FBQztBQUNyQyxpQ0FBaUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsWUFBWTtBQUN0SSxhQUFhLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO0FBQ2pELG1DQUFtQyxZQUFZLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLGFBQWE7QUFDL0YsdUNBQXVDLFdBQVcsRUFBRSxZQUFZLEVBQUUsMkJBQTJCLEVBQUUsY0FBYyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21wb25lbnRzL29yZGVyLWJvb2tlci1saXN0L29yZGVyLWJvb2tlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUHJvZHVjdC1GaWx0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMjtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjMDAzOGJhXHJcbn1cclxuLlByb2R1Y3QtRmlsdGVyIC5uYXYtbGluayB7IHBhZGRpbmc6IDZweCA4cHggMHB4IDhweDsgY3Vyc29yOiBwb2ludGVyO31cclxuLlByb2R1Y3QtRmlsdGVyIC5uYXYge3dpZHRoOiA3NHB4O2Zsb2F0OiByaWdodH1cclxuLlByb2R1Y3QtRmlsdGVyIC5uYXYgLmZhIHtjb2xvcjogI2E2YTVhNTsgZm9udC1zaXplOiAyMHB4fVxyXG4uUHJvZHVjdC1GaWx0ZXIgLmFjdGl2ZSAuZmEge2NvbG9yOiAjMDAzOGJhfVxyXG4uUHJvZHVjdC1GaWx0ZXIgLmJ0bi1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweFxyXG59XHJcbiNwcm9kdWN0bGlzdDAxIHsgY29sb3I6ICNmZmYgIWltcG9ydGFudCB9XHJcbi5DTC1Qcm9kdWN0IHtcclxuICAgIHdpZHRoOiAyMzhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweFxyXG59XHJcbi5DTC1Qcm9kdWN0IGlucHV0IHtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkZWRlZGU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4uQ0wtUHJvZHVjdCAuZmEgeyBwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiA4cHg7bGVmdDogOHB4O2NvbG9yOiAjYjViNWI1O31cclxuLl9jdXN0X2ZpbHRlciB7ZmxvYXQ6IGxlZnQ7IG1hcmdpbi1ib3R0b206IDE1cHg7IHdpZHRoOiAyMiU7IHBhZGRpbmctcmlnaHQ6IDEwcHg7fVxyXG4uX2N1c3RfZmlsdGVyIG5nLXNlbGVjdCB7Ym9yZGVyLXJhZGl1czogMDtoZWlnaHQ6IDMycHg7fVxyXG4ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIHtiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czogMDtoZWlnaHQ6IDMycHggIWltcG9ydGFudDsgbWluLWhlaWdodDogMzJweCAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OiAxOXB4IWltcG9ydGFudDsgZm9udC1mYW1pbHk6ICdwcm94aW1hbm92YS1saWdodCcsIHNhbnMtc2VyaWYhaW1wb3J0YW50OyBmb250LXNpemU6IDEzcHghaW1wb3J0YW50O31cclxuLmRhdGFUYWJsZSAuYnRuLWRlZmF1bHQsIC5zbUJUTiB7Y29sb3I6ICNmZmY7fVxyXG5cclxuXHJcbi5PcmRlckxvZ28ge1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0cGFkZGluZy1sZWZ0OiAwXHJcbn1cclxuLk9yZGVyTG9nbyBpbWcge1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdGhlaWdodDogNDZweFxyXG59XHJcbi5PcmRlckluZm8ge1xyXG5cdGZvbnQtc2l6ZTogMTRweFxyXG59XHJcbi5PcmRlckluZm8gc3BhbiB7XHJcblx0d2lkdGg6IDEwNXB4O1xyXG5cdGZsb2F0OiBsZWZ0XHJcbn1cclxuLk9yZGVyLURldGFpbC10YWJsZSB0YWJsZSB0ZCB7XHJcblx0Ym9yZGVyOiBzb2xpZCAxcHggIzMzMzMzMztcclxuXHRwYWRkaW5nOiA1cHghaW1wb3J0YW50O1xyXG5cdGZvbnQtc2l6ZTogMTJweFxyXG59XHJcbi5PcmRlci1EZXRhaWwtdGFibGUgdGFibGUgdGgge1xyXG5cdGJvcmRlcjogc29saWQgMXB4ICMzMzMzMzMhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdHBhZGRpbmc6IDVweCFpbXBvcnRhbnQ7XHJcblx0Zm9udC1zaXplOiAxMnB4XHJcbn1cclxuLmJ1dHRvbi1saXN0IC5idG4tcHJpbWFyeSB7XHJcblx0Zm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxuXHRsZXR0ZXItc3BhY2luZzogMXB4XHJcbn1cclxuLmJ1dHRvbi1saXN0IC5idG4tcHJpbWFyeSAuZmEge1xyXG5cdHBhZGRpbmctcmlnaHQ6IDNweFxyXG59XHJcbi5vcmQtbm8ge1xyXG5cdHBhZGRpbmctdG9wOiAxNnB4O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHR0ZXh0LWFsaWduOiByaWdodFxyXG59XHJcbi5fY3VzdF9maWx0ZXIge1xyXG5cdHdpZHRoOiAxOTBweFxyXG59XHJcbi5wYWQtZGF0ZXsgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDsgcGFkZGluZy1yaWdodDowICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50OyBsZXR0ZXItc3BhY2luZzogbm9ybWFsIWltcG9ydGFudDt9XHJcblxyXG4vKiBkYXRlIGljb25zIGNzcyAqL1xyXG4ucGFkLWRhdGVbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDE3cHg7XHJcbiAgICB3aWR0aDogMTRweDsgcGFkZGluZy1sZWZ0OiAwOyBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuLl9jdXN0X2ZpbHRlciB7XHR3aWR0aDogMTcwcHh9XHJcbi5Qcm9kdWN0LUZpbHRlciAuYnRuLXByaW1hcnl7cGFkZGluZy1sZWZ0OiAxNXB4OyBwYWRkaW5nLXJpZ2h0OiAxNXB4O31cclxufVxyXG5cclxuLnByaW50LWljb24tZGl2e3RleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMTVweDt9XHJcbi5wcmludC1pY29uLWRpdiBhe2Rpc3BsYXk6IGlubGluZS1ibG9jazsgYm9yZGVyOiBzb2xpZCAxcHggI2U5ZWNlZjsgcGFkZGluZzogMTVweDsgd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlcjsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogIzI4MjgyODsgZm9udC1zaXplOiAxM3B4O31cclxuLnByaW50LWljb24tZGl2IGE6SE9WRVJ7Ym9yZGVyOiBzb2xpZCAxcHggIzAwMzhiYTsgY29sb3I6ICMwMDM4YmE7IGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO31cclxuLnByaW50LWljb257ZmlsdGVyOiBncmF5c2NhbGUoMSk7IHdpZHRoOiA0NXB4OyBvcGFjaXR5OiAwLjc7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IGF1dG87IG1hcmdpbi10b3A6IDEwcHg7IG1hcmdpbi1ib3R0b206IDE1cHg7fVxyXG4ucHJpbnQtaWNvbi1kaXYgYTpIT1ZFUiAucHJpbnQtaWNvbntmaWx0ZXI6bm9uZTsgb3BhY2l0eTogMTt9XHJcblxyXG5cclxuLmhlYWRpbmcze21hcmdpbjogMDsgZm9udC1zaXplOiAxNnB4O31cclxuLnNlbGVjdC1kYXRlLCAuc2VsZWN0LWRhdGU6Zm9jdXN7Ym94LXNoYWRvdzogbm9uZTsgYm9yZGVyOiBub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjY7IGZvbnQtc2l6ZTogMTRweDsgaGVpZ2h0OiAzMHB4OyB3aWR0aDogMjAwcHh9XHJcbi5uby1jb250ZW50IHt3aWR0aDoxMDAlO2hlaWdodDo2NXZoO2Rpc3BsYXk6ZmxleDt9XHJcbi5uby1jb250ZW50IC5uby1jb250ZW50LWNvbnRhaW5lciB7bWFyZ2luOiBhdXRvO2Rpc3BsYXk6dGFibGU7dGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjojQjdCN0I3fVxyXG4ubm8tY29udGVudCAubm8tY29udGVudC1jb250YWluZXIgaW1nIHt3aWR0aDogNzBweDsgaGVpZ2h0OiA3MHB4OyBtYXJnaW46IGF1dG8gYXV0byAxMHB4IGF1dG87IGRpc3BsYXk6IGJsb2NrfVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](OrderBookerListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-order-booker-list',
                templateUrl: './order-booker-list.component.html',
                styleUrls: ['./order-booker-list.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _retailer_services_retailer_service__WEBPACK_IMPORTED_MODULE_5__["RetailerService"] }, { type: _core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }, { type: _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }, { type: _orders_services_orders_service__WEBPACK_IMPORTED_MODULE_8__["OrdersService"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "vZpF":
/*!*****************************************************************!*\
  !*** ./src/app/modules/reports/components/dsr/dsr.component.ts ***!
  \*****************************************************************/
/*! exports provided: DSReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DSReportComponent", function() { return DSReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/api-urls.constants */ "oo4J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_modules_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services */ "NJqk");
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toaster.service */ "ZgVV");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/reports.service */ "Vpr3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/loader-white/loader-white.component */ "uoBr");












function DSReportComponent_ng_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const saleman_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", saleman_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](saleman_r7.name);
} }
function DSReportComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select DSR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DSReportComponent_div_34_ng_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dsr_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dsr_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dsr_r10.unique_id);
} }
function DSReportComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ng-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DSReportComponent_div_34_Template_ng_select_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.getDSRDetail($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DSReportComponent_div_34_ng_option_3_Template, 2, 2, "ng-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.salemanDSR);
} }
function DSReportComponent_table_36_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.item_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.total_dispatch_qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, item_r15.total_return_qty));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs: ", item_r15.item_trade_price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 10, item_r15.gross_sale_amount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 13, item_r15.total_trade_offer, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 16, item_r15.total_net_amount, "1.2-2"), "");
} }
function DSReportComponent_table_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "S.NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ITEMS/PRODUCT NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ISSUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "RETURNS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "T.P");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "GROSS AMT.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SCH DIS.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "NET AMT.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DSReportComponent_table_36_tr_20_Template, 21, 19, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r3.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.dsrData == null ? null : ctx_r3.dsrData.dsr == null ? null : ctx_r3.dsrData.dsr.content);
} }
function DSReportComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Gross Sales Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Scheme Discount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Trade Discount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Special Discount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ind. Discount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Less Market Return:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Net Sales Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, ctx_r4.dsrData == null ? null : ctx_r4.dsrData.dsr == null ? null : ctx_r4.dsrData.dsr.total_gross_amount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 10, ctx_r4.dsrData == null ? null : ctx_r4.dsrData.dsr == null ? null : ctx_r4.dsrData.dsr.total_trade_offer, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 13, ctx_r4.dsrData == null ? null : ctx_r4.dsrData.dsr == null ? null : ctx_r4.dsrData.dsr.total_trade_discount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 16, ctx_r4.dsrData == null ? null : ctx_r4.dsrData.dsr == null ? null : ctx_r4.dsrData.dsr.total_special_discount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 19, ctx_r4.dsrData == null ? null : ctx_r4.dsrData.dsr == null ? null : ctx_r4.dsrData.dsr.total_booker_discount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 22, ctx_r4.dsrData == null ? null : ctx_r4.dsrData.dsr == null ? null : ctx_r4.dsrData.dsr.total_return_amount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 25, ctx_r4.dsrData == null ? null : ctx_r4.dsrData.dsr == null ? null : ctx_r4.dsrData.dsr.total_net_after_expense, "1.2-2"), "");
} }
function DSReportComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DSReportComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DSReportComponent_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.generateDSR(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Generate DSR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DSReportComponent {
    constructor(generalDataService, toastService, reportService) {
        this.generalDataService = generalDataService;
        this.toastService = toastService;
        this.reportService = reportService;
        this.salesmen = [];
        this.salemanDSR = [];
        this.dtOptions = {};
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }
    ngOnInit() {
        this.getAllSalesman();
    }
    getAllSalesman() {
        this.generalDataService.getAllSalesMen().subscribe(res => {
            if (res.status === 200) {
                this.salesmen = res.data;
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    title: 'Error:',
                    message: 'Salesmen not fetched, please try again later!',
                    type: 'error'
                });
            }
        });
    }
    getSaleReportsBySalemanAndDate() {
        if (this.orderDate && this.selecetdSalemanId) {
            this.reportService.getDailySaleReportBySalemanAndDate(this.selecetdSalemanId, this.orderDate).subscribe(res => {
                if (res.status === 200) {
                    this.salemanDSR = res.data;
                }
            }, error => {
                if (error.status !== 1 && error.status !== 401) {
                    this.toastService.showToaster({
                        title: 'Error:',
                        type: 'error',
                        message: 'The DSR of selected saleman cannot be fetched, please try again later.'
                    });
                }
            });
        }
    }
    getDSRDetail(dsrId) {
        this.selectedDSR = dsrId;
        this.loading = true;
        this.reportService.getDSRDetail(dsrId).subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.dsrData = res.data;
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    title: 'Error:',
                    type: 'error',
                    message: 'The DSR detail cannot be fetched, please try again later.'
                });
            }
        });
    }
    generateDSR() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiDomain}${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].DSR_PDF}/${this.selectedDSR}`;
        window.open(url);
    }
}
DSReportComponent.ɵfac = function DSReportComponent_Factory(t) { return new (t || DSReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_shared_services__WEBPACK_IMPORTED_MODULE_3__["GeneralDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"])); };
DSReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DSReportComponent, selectors: [["app-ds-report"]], decls: 42, vars: 9, consts: [[1, "container"], [1, "row", "mt-2", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "header", "addPR-head"], [1, "float-left"], [1, "_PR_filter", "pr-15", 2, "width", "170px!important"], [1, "form-group", "mb-0", 2, "height", "auto"], ["type", "date", "id", "datepicker", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], [1, "_PR_filter", "pr-15"], [1, "form-s2"], ["placeholder", "Select Salesman", 1, "form-control", "formselect", 2, "width", "100%!important", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "float-left", 4, "ngIf"], ["class", "_PR_filter pr-15", 4, "ngIf"], [1, "body", "pb-0"], ["datatable", "", "class", "table table-hover dt-responsive nowrap", "id", "example", "style", "width:100%", 3, "dtOptions", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "col-md-12", "text-right", 2, "background-color", "#f3f3f3", "padding", "10px 15px", "margin-top", "5px", "margin-bottom", "5px"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [3, "value"], ["placeholder", "Select DSR", 1, "form-control", "formselect", 2, "width", "100%!important", 3, "change"], ["datatable", "", "id", "example", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions"], [4, "ngFor", "ngForOf"], [1, "col-8"], [1, "col-4", "PT-20"], [1, "report_value", "totalcash"], [1, "report_value", "totalcash", "border-0"], [1, "col-12"], [1, "btn", "btn-primary", 3, "click"]], template: function DSReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Daily ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sales Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "DSR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Select Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DSReportComponent_Template_input_ngModelChange_25_listener($event) { return ctx.orderDate = $event; })("change", function DSReportComponent_Template_input_change_25_listener() { return ctx.getSaleReportsBySalemanAndDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select Salesman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ng-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DSReportComponent_Template_ng_select_ngModelChange_31_listener($event) { return ctx.selecetdSalemanId = $event; })("change", function DSReportComponent_Template_ng_select_change_31_listener() { return ctx.getSaleReportsBySalemanAndDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DSReportComponent_ng_option_32_Template, 2, 2, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DSReportComponent_div_33_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DSReportComponent_div_34_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DSReportComponent_table_36_Template, 21, 2, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DSReportComponent_div_37_Template, 45, 28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DSReportComponent_div_38_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DSReportComponent_button_41_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.orderDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selecetdSalemanId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.salesmen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selecetdSalemanId && ctx.salemanDSR.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selecetdSalemanId && ctx.salemanDSR.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.dsrData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedDSR);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["ɵr"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_10__["WhiteLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]], styles: ["._PR_filter{margin-top: -2px; width: 270px!important; float: left}\r\n.ng-select .ng-select-container, .ng-option, .ng-select span { text-transform: capitalize; }\r\n.ng-select .ng-clear-wrapper {display: none;}\r\n._PR_filter .form-s2 .ng-select {padding: 0 !important;height: 30px !important;}\r\n._PR_filter .form-s2 .ng-select .ng-select-container {width: 100%;font-size: 14px;border: none;border-radius: 0;min-height: 30px !important;height: 30px !important;}\r\n._PR_filter .form-s2 .ng-select .ng-select-container div.ng-input { top: 0 !important; }\r\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input input {height: 28px;}\r\n.addPR-head h3{font-size: 14px; padding-right: 10px; line-height: 2; margin: 0}\r\n._PR_filter input {\r\n\tbox-shadow: none;\r\n    font-size: 13px;\r\n    height: 31px;\r\n    border-color: #eae9e9;\r\n}\r\n.report_value {\r\n    background-color: #fff;\r\n    font-size: 14px;\r\n    position: relative;\r\n    padding: 10px 0px;\r\n    letter-spacing: 0.5px;\r\n    margin-bottom: 0px;\r\n    margin-top: 0px; \r\n    line-height: 1; border-bottom: solid 1px #eae9e9\r\n}\r\n.report_value span {\r\n    font-family: 'Rationale', sans-serif;\r\n    line-height: 1;\r\n    font-size: 18px;\r\n    float: right;\r\n    margin-top: -2px;\r\n}\r\n.addPR-head {\r\n    font-size: 16px;\r\n    padding: 15px 15px 15px 20px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL2NvbXBvbmVudHMvZHNyL2Rzci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksZ0JBQWdCLEVBQUUsc0JBQXNCLEVBQUUsV0FBVztBQUNqRSwrREFBK0QsMEJBQTBCLEVBQUU7QUFDM0YsOEJBQThCLGFBQWEsQ0FBQztBQUM1QyxpQ0FBaUMscUJBQXFCLENBQUMsdUJBQXVCLENBQUM7QUFDL0Usc0RBQXNELFdBQVcsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDLHVCQUF1QixDQUFDO0FBQ3BLLG9FQUFvRSxpQkFBaUIsRUFBRTtBQUN2RixzRkFBc0YsWUFBWSxDQUFDO0FBRW5HLGVBQWUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxTQUFTO0FBQzlFO0NBQ0MsZ0JBQWdCO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjLEVBQUU7QUFDcEI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZix1Q0FBdUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvY29tcG9uZW50cy9kc3IvZHNyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuX1BSX2ZpbHRlcnttYXJnaW4tdG9wOiAtMnB4OyB3aWR0aDogMjcwcHghaW1wb3J0YW50OyBmbG9hdDogbGVmdH1cclxuLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciwgLm5nLW9wdGlvbiwgLm5nLXNlbGVjdCBzcGFuIHsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cclxuLm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlciB7ZGlzcGxheTogbm9uZTt9XHJcbi5fUFJfZmlsdGVyIC5mb3JtLXMyIC5uZy1zZWxlY3Qge3BhZGRpbmc6IDAgIWltcG9ydGFudDtoZWlnaHQ6IDMwcHggIWltcG9ydGFudDt9XHJcbi5fUFJfZmlsdGVyIC5mb3JtLXMyIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge3dpZHRoOiAxMDAlO2ZvbnQtc2l6ZTogMTRweDtib3JkZXI6IG5vbmU7Ym9yZGVyLXJhZGl1czogMDttaW4taGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7aGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7fVxyXG4uX1BSX2ZpbHRlciAuZm9ybS1zMiAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIGRpdi5uZy1pbnB1dCB7IHRvcDogMCAhaW1wb3J0YW50OyB9XHJcbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dCBpbnB1dCB7aGVpZ2h0OiAyOHB4O31cclxuXHJcbi5hZGRQUi1oZWFkIGgze2ZvbnQtc2l6ZTogMTRweDsgcGFkZGluZy1yaWdodDogMTBweDsgbGluZS1oZWlnaHQ6IDI7IG1hcmdpbjogMH1cclxuLl9QUl9maWx0ZXIgaW5wdXQge1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDMxcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNlYWU5ZTk7XHJcbn1cclxuLnJlcG9ydF92YWx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7IFxyXG4gICAgbGluZS1oZWlnaHQ6IDE7IGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWFlOWU5XHJcbn1cclxuLnJlcG9ydF92YWx1ZSBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmF0aW9uYWxlJywgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogLTJweDtcclxufVxyXG4uYWRkUFItaGVhZCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DSReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ds-report',
                templateUrl: './dsr.component.html',
                styleUrls: ['./dsr.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: src_app_modules_shared_services__WEBPACK_IMPORTED_MODULE_3__["GeneralDataService"] }, { type: src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }, { type: _services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-reports-reports-module.js.map