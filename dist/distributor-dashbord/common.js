(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "hc6j":
/*!***************************************************************!*\
  !*** ./src/app/modules/retailer/services/retailer.service.ts ***!
  \***************************************************************/
/*! exports provided: RetailerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerService", function() { return RetailerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/api-urls.constants */ "oo4J");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/http.service */ "bUwk");




class RetailerService {
    constructor(httpBaseService) {
        this.httpBaseService = httpBaseService;
    }
    addOpeningBalance(retailers) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].ADD_OPENING_BALANCE}`;
        return this.httpBaseService.post(url, { opening_balance: retailers });
    }
    getRetailerListing(queryParams = null) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].RETAILER_LISTING}?${queryParams}`;
        return this.httpBaseService.get(url);
    }
    getRetailerCore() {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].RETAILER_CORE}`;
        return this.httpBaseService.get(url);
    }
    getRetailerOrdersById(id) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].RETAILER_ORDERS}/${id}`;
        return this.httpBaseService.get(url);
    }
    getRetailerVisitsById(id) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].RETAILER_VISITS}/${id}`;
        return this.httpBaseService.get(url);
    }
    getOrderDetail(id) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].RETAILER_ORDER_DETAIL}/${id}`;
        return this.httpBaseService.get(url);
    }
}
RetailerService.ɵfac = function RetailerService_Factory(t) { return new (t || RetailerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpBaseService"])); };
RetailerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RetailerService, factory: RetailerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RetailerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpBaseService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map