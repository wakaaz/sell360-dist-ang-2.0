(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\Distribution-Ang\src\main.ts */"zUnb");


/***/ }),

/***/ "3IAN":
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/localstorage.constants */ "Rb2t");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ "UYTb");







class AuthGuard {
    constructor(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    /**
     * Can this route be activated?
     * @param ActivatedRouteSnapshot route - The route.
     * @returns true if user is authenticated otherwise false
     */
    canActivate(route) {
        const token = this.storageService.getItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_2__["localStorageKeys"].session);
        const distributor = this.storageService.getItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_2__["localStorageKeys"].distributor);
        return token !== null && distributor !== null;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]]
            }] }]; }, null); })();


/***/ }),

/***/ "5l1v":
/*!***************************************************************!*\
  !*** ./src/app/modules/salesmen/reducers/salesmen.reducer.ts ***!
  \***************************************************************/
/*! exports provided: ADD_SALEMENS, addSalemens, ADD_SALEMAN, addSaleman, ADD_SALEMAN_STORAGE, addSalemanStorage, UPDATE_SALEMAN, updateSaleman, adapter, initialState, stateReducer, persistStateReducer, updateStateReducer, reducer, selectIds, selectEntities, selectAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SALEMENS", function() { return ADD_SALEMENS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSalemens", function() { return addSalemens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SALEMAN", function() { return ADD_SALEMAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSaleman", function() { return addSaleman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SALEMAN_STORAGE", function() { return ADD_SALEMAN_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSalemanStorage", function() { return addSalemanStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SALEMAN", function() { return UPDATE_SALEMAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSaleman", function() { return updateSaleman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateReducer", function() { return stateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistStateReducer", function() { return persistStateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStateReducer", function() { return updateStateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "R0sL");
/* harmony import */ var src_app_core_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/localstorage.constants */ "Rb2t");


const ADD_SALEMENS = '[ADD SALEMENS] Add Salemen Array';
const addSalemens = (salemens) => {
    return {
        type: ADD_SALEMENS,
        payload: salemens,
    };
};
const ADD_SALEMAN = '[ADD SALEMAN] Add New Saleman';
const addSaleman = ({ id = null, name = '', cnic = '', phone = '', salary = null, segments_id = null, distributor_id = null }) => {
    return {
        type: ADD_SALEMAN,
        payload: { id, name, cnic, phone, salary, segments_id, distributor_id },
    };
};
const ADD_SALEMAN_STORAGE = '[ADD SALEMAN STORAGE] Add Saleman to list';
const addSalemanStorage = ({ id = null, name = '', cnic = '', phone = '', salary = null, segments_id = null, distributor_id = null }) => {
    return {
        type: ADD_SALEMAN_STORAGE,
        payload: { id, name, cnic, phone, salary, segments_id, distributor_id },
    };
};
const UPDATE_SALEMAN = '[UPDATE SALEMAN] Update Saleman';
const updateSaleman = ({ id = null, name = '', cnic = '', phone = '', salary = null, segments_id = null, distributor_id = null }) => {
    return {
        type: UPDATE_SALEMAN,
        payload: { id, name, cnic, phone, salary, segments_id, distributor_id },
    };
};
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    sortComparer: (a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
        else {
            return -1;
        }
    }
});
const initialState = adapter.getInitialState();
function stateReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SALEMAN:
        case ADD_SALEMAN:
            return adapter.addOne(action.payload, state);
        case ADD_SALEMENS:
            return adapter.setAll(action.payload, state);
        case UPDATE_SALEMAN:
            return adapter.updateOne({ id: action.payload.id, changes: action.payload }, state);
        default:
            return state;
    }
}
function persistStateReducer(slemanReducer) {
    const localStorageKey = src_app_core_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_1__["localStorageKeys"].saleman;
    return (state, action) => {
        if (state === undefined) {
            const persisted = localStorage.getItem(localStorageKey);
            return persisted ? JSON.parse(persisted) : slemanReducer(state, action);
        }
        const nextState = slemanReducer(state, action);
        localStorage.setItem(localStorageKey, JSON.stringify(nextState));
        return nextState;
    };
}
function updateStateReducer(salemanReducer) {
    return (state, action) => {
        if (action.type === 'UPDATE_SALEMAN') {
            return action.payload.newState;
        }
        return salemanReducer(state, action);
    };
}
function reducer(state, action) {
    return updateStateReducer(persistStateReducer(stateReducer))(state, action);
}
const { selectIds, selectEntities, selectAll } = adapter.getSelectors();


/***/ }),

/***/ "68oC":
/*!***********************************************************!*\
  !*** ./src/app/core/interceptor/http-auth.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/localstorage.constants */ "Rb2t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/storage.service */ "UYTb");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toaster.service */ "ZgVV");









class AuthInterceptor {
    constructor(router, storageService, toastService) {
        this.router = router;
        this.storageService = storageService;
        this.toastService = toastService;
    }
    intercept(req, next) {
        req = this.setBearerToken(req);
        if (!window.navigator.onLine) {
            // if there is no internet, throw a HttpErrorResponse error
            // since an error is thrown, the function will terminate here
            this.toastService.showToaster({ title: 'Internet Disconnected', message: 'Please check your connection and try again!', type: 'error' });
            // this.snackBarService.openBottomSheet('Internet Disconnected!', 'offline');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]({ status: 1, error: 'Internet is required.' }));
        }
        else {
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                if (error.status === 401) {
                    this.toastService.showToaster({
                        title: 'Session Expired', message: 'Please login to continue!', type: 'error'
                    });
                    document.getElementById('Close-All').click();
                    this.storageService.removeItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_4__["localStorageKeys"].session);
                    this.storageService.removeItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_4__["localStorageKeys"].distributor);
                    this.router.navigateByUrl('/login');
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }));
        }
    }
    setBearerToken(req) {
        const token = this.storageService.getItem('dist_session');
        if (token) {
            req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
        }
        return req;
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }, { type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "6wAO":
/*!*********************************************************!*\
  !*** ./src/app/core/constants/no-left-bar.constants.ts ***!
  \*********************************************************/
/*! exports provided: leftBarHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftBarHidden", function() { return leftBarHidden; });
const leftBarHidden = [
    '/inventory/add-stock',
    '/retailer/opening-balance',
    '/orders/counter-sale',
    '/orders/execute-order',
    '/orders/dispatch/'
];


/***/ }),

/***/ "8/39":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/services/data.service.ts ***!
  \*********************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toaster.service */ "ZgVV");



class DataService {
    constructor(toastService) {
        this.toastService = toastService;
    }
    calculateUnitPrice(unitPurchased, perUnitPrice) {
        return unitPurchased * perUnitPrice;
    }
    calculateItemsBill(prices) {
        let bill = 0;
        prices.forEach(price => {
            bill += price;
        });
        return bill;
    }
    calculateDiscount(discount, type, total) {
        if (type === 'percentage') {
            return (discount / 100) * total;
        }
        else if (type === 'price') {
            return total - discount;
        }
    }
    /** Schemes Calculation and implementation */
    getSchemes(itemId, unitId, prefId, schemes, retailerType, retailerId) {
        const productSchemes = schemes.filter(scheme => {
            let isRetailerEligible = false;
            scheme.assignment.filter(assigned => {
                if (assigned.retailer_type_id === retailerType && !assigned.except_retailers.includes(retailerId)) {
                    isRetailerEligible = true;
                    return assigned;
                }
            });
            let productFound = [];
            if (isRetailerEligible) {
                productFound = scheme.items.filter(item => {
                    if (item.item_id === itemId && item.unit_id === unitId && item.pref_id === +prefId) {
                        return item;
                    }
                });
            }
            if (productFound.length) {
                return scheme;
            }
        });
        return productSchemes;
    }
    applyFreeProductScheme(product) {
        let productWithScheme = {};
        switch (product.selectedScheme.scheme_rule) {
            case 1:
                productWithScheme = this.applyFPDOTP(product);
                break;
            case 2:
                productWithScheme = this.applyFPHalfQtyDiscount(product);
                break;
            case 3:
                productWithScheme = this.applyFPMinQtyRestriction(product);
                break;
            default:
                productWithScheme = product;
                break;
        }
        return productWithScheme;
    }
    applyFPDOTP(product) {
        const discounted = this.getSDForFPTradePriceScheme(product.item_trade_price, product.stockQty, product.selectedScheme.min_qty, product.selectedScheme.quantity_free);
        product.scheme_discount = discounted.schemeDiscount;
        product.price = discounted.singleItemPrice;
        product.unit_price_after_scheme_discount = discounted.singleItemPrice;
        product.selectedScheme.applied = true;
        return product;
    }
    applyFPHalfQtyDiscount(product) {
        if (this.isHalfQuantityEligible(product.stockQty, product.selectedScheme.min_qty)) {
            const discounted = this.getSDForFPHalfQtyDiscount(product.item_trade_price, product.stockQty, product.selectedScheme.min_qty, product.selectedScheme.quantity_free);
            product.scheme_discount = discounted.schemeDiscount;
            product.price = discounted.singleItemPrice;
            product.unit_price_after_scheme_discount = discounted.singleItemPrice;
            product.selectedScheme.applied = true;
        }
        else {
            product.selectedScheme.applied = false;
            product.scheme_discount = 0;
            product.price = product.item_trade_price;
            product.unit_price_after_scheme_discount = product.item_trade_price;
            this.schemeCannotApplied();
        }
        return product;
    }
    applyFPMinQtyRestriction(product) {
        if (this.isEligibleForMinimumQuantity(product.stockQty, product.selectedScheme.min_qty)) {
            const discounted = this.getSDForFPQtyRestrictionDiscount(product.item_trade_price, product.stockQty, product.selectedScheme.min_qty, product.selectedScheme.quantity_free);
            product.scheme_discount = discounted.schemeDiscount;
            product.price = discounted.singleItemPrice;
            product.unit_price_after_scheme_discount = discounted.singleItemPrice;
            product.selectedScheme.applied = true;
        }
        else {
            product.selectedScheme.applied = false;
            product.scheme_discount = 0;
            product.price = product.item_trade_price;
            product.unit_price_after_scheme_discount = product.item_trade_price;
            this.schemeCannotApplied();
        }
        return product;
    }
    getSchemeAmount(itemTP, minQty, freeQty) {
        const totalTpMinQty = itemTP * minQty;
        const totalItemBeingGiven = freeQty + minQty;
        const discountOnEachItem = totalTpMinQty / totalItemBeingGiven;
        const schemeAmount = itemTP - discountOnEachItem;
        return schemeAmount;
    }
    /**
     * Get the total scheme discount to be applied on the item selected
     * @param itemTradePrice trade price of the item
     * @param userQty quantity added by the distributor
     * @param minimumQty Minimum quantity of the scheme to be applied, added by Admin
     * @param freeQty Free quantity of the scheme to be applied, added by Admin
     * @returns Total calculated discount of the scheme
     */
    getSDForFPTradePriceScheme(itemTradePrice, userQty, minimumQty, freeQty) {
        const schemeAmount = this.getSchemeAmount(itemTradePrice, minimumQty, freeQty);
        const tradePriceForSingleItem = itemTradePrice - schemeAmount;
        return { singleItemPrice: tradePriceForSingleItem, schemeDiscount: schemeAmount };
    }
    /**
     * Check if the Half Quantity Discount is applicable on the given quantity
     * @param userQty Quantity added by the Distributor
     * @param minimumQty of the scheme to be applied, added by Admin
     * @returns true/false i.e. whether Half Quantity Discount is applicable or not
     */
    isHalfQuantityEligible(userQty, minimumQty) {
        const eligibleQty = Math.floor(minimumQty / 2);
        return userQty > eligibleQty;
    }
    /**
     * Get the total scheme discount to be applied on the item selected
     * @param itemTradePrice trade price of the item
     * @param userQty quantity added by the distributor
     * @param minimumQty Minimum quantity of the scheme to be applied, added by Admin
     * @param freeQty Free quantity of the scheme to be applied, added by Admin
     * @returns Total calculated discount of the scheme
     */
    getSDForFPHalfQtyDiscount(itemTradePrice, userQty, minimumQty, freeQty) {
        const freeQtyInterval = Math.floor(userQty / minimumQty);
        const orderFreeQty = freeQtyInterval * freeQty;
        const schemeAmount = this.getSchemeAmount(itemTradePrice, minimumQty, orderFreeQty);
        const singItemPrice = itemTradePrice - schemeAmount;
        return { singleItemPrice: singItemPrice, schemeDiscount: schemeAmount };
    }
    /**
     * Check if the Minimum Quantity Restriction Discount is applicable on the given quantity
     * @param userQty Quantity added by the Distributor
     * @param minimumQty of the scheme to be applied, added by Admin
     * @returns true/false i.e. whether Minimum Quantity Restriction Discount is applicable or not
     */
    isEligibleForMinimumQuantity(userQty, minimumQty) {
        return +userQty >= minimumQty;
    }
    getSDForFPQtyRestrictionDiscount(itemTradePrice, userQty, minimumQty, freeQty) {
        // const freeQtyInterval = Math.floor(userQty / minimumQty);
        // const orderFreeQty = freeQtyInterval * freeQty;
        const schemeAmount = this.getSchemeAmount(itemTradePrice, minimumQty, freeQty);
        const singleItemPrice = itemTradePrice - schemeAmount;
        return { singleItemPrice, schemeDiscount: schemeAmount };
    }
    getSDForDOTP(product) {
        if (this.isEligibleForMinimumQuantity(product.stockQty, product.selectedScheme.min_qty)) {
            // const percentageDiscount = (product.selectedScheme.discount_on_tp / product.parent_trade_price) * 100;
            // const singleUnitDiscount = this.calculateDiscount(percentageDiscount, 'percentage', product.item_trade_price);
            product.price = product.item_trade_price - product.selectedScheme.discount_on_tp;
            product.unit_price_after_scheme_discount = product.item_trade_price - product.selectedScheme.discount_on_tp;
            product.scheme_discount = product.selectedScheme.discount_on_tp;
            product.selectedScheme.applied = true;
        }
        else {
            product.selectedScheme.applied = false;
            product.price = product.item_trade_price;
            product.unit_price_after_scheme_discount = product.item_trade_price;
            product.scheme_discount = 0;
            this.schemeCannotApplied();
        }
        return product;
    }
    getSDForGift(product) {
        if (this.isEligibleForMinimumQuantity(product.stockQty, product.selectedScheme.min_qty)) {
            product.scheme_discount = product.item_trade_price - (product.selectedScheme.gift_value / product.stockQty);
            product.gift_value = product.selectedScheme.gift_value;
            product.selectedScheme.applied = true;
        }
        else {
            product.selectedScheme.applied = false;
            product.price = product.item_trade_price;
            product.unit_price_after_scheme_discount = product.item_trade_price;
            product.scheme_discount = 0;
            this.schemeCannotApplied();
        }
        return product;
    }
    schemeAppliedSuccessfully() {
        const toast = {
            title: 'Scheme Applied',
            message: 'Selected Scheme Applied Successfully to the product!',
            type: 'success'
        };
        this.toastService.showToaster(toast);
    }
    schemeCannotApplied() {
        const toast = {
            title: 'Scheme Not Applied',
            message: 'Selected Scheme cannot applied to the product because of minimum quantity contraints!',
            type: 'error'
        };
        this.toastService.showToaster(toast);
    }
    /** Schemes End */
    /** Merchant Discount Start */
    applyMerchantDiscountForSingleProduct(merchantDiscount, product, orderTotal) {
        let discountValuePKR = 0;
        if (+product.stockQty === 0) {
            product.trade_discount = discountValuePKR;
        }
        else {
            if (merchantDiscount.discount_filter === 'flat') {
                if (merchantDiscount.flat.discount_type === 'percentage') {
                    discountValuePKR = (merchantDiscount.flat.value / 100) * product.unit_price_after_scheme_discount;
                    product.trade_discount = merchantDiscount.flat.value;
                }
                else {
                    discountValuePKR = merchantDiscount.flat.value;
                    product.trade_discount = merchantDiscount.flat.value;
                }
            }
            else if (merchantDiscount.discount_filter === 'slab') {
                const currentItemsPrice = product.unit_price_after_scheme_discount * product.stockQty;
                const totalItemsPrice = currentItemsPrice + orderTotal;
                const selectedSlab = merchantDiscount.slab.find(slb => slb.range_from && slb.range_to &&
                    slb.range_from <= totalItemsPrice && slb.range_to >= totalItemsPrice);
                if (selectedSlab) {
                    discountValuePKR = (selectedSlab.value / 100) * product.unit_price_after_scheme_discount;
                    product.trade_discount = selectedSlab.value;
                }
                else {
                    product.trade_discount = 0;
                }
            }
        }
        product.trade_discount_pkr = discountValuePKR;
        product.price = product.unit_price_after_scheme_discount - discountValuePKR;
        product.unit_price_after_merchant_discount = JSON.parse(JSON.stringify(product.price));
        return product;
    }
    applySlabForTotal(product, merchantDiscount, orderTotal) {
        const selectedSlab = merchantDiscount.slab.find(slb => slb.range_from && slb.range_to &&
            slb.range_from <= orderTotal && slb.range_to >= orderTotal);
        if (selectedSlab && +product.stockQty > 0) {
            const discountValuePKR = (selectedSlab.value / 100) * product.unit_price_after_scheme_discount;
            product.trade_discount = selectedSlab.value;
            product.trade_discount_pkr = discountValuePKR;
            product.price = product.unit_price_after_scheme_discount - discountValuePKR;
            product.unit_price_after_merchant_discount = JSON.parse(JSON.stringify(product.price));
        }
        else {
            product.trade_discount = 0;
            product.trade_discount_pkr = 0;
            product.price = product.unit_price_after_scheme_discount;
            product.unit_price_after_merchant_discount = JSON.parse(JSON.stringify(product.price));
        }
        return product;
    }
    /** Merchant Discount END */
    /** Special Discount */
    getSpecialDiscounts(segmentId, regionId, product, specialDiscounts) {
        const selectedSpecialDiscount = specialDiscounts.find(x => segmentId === x.segment_id && regionId === x.region_id && +product.pref_id === x.pref_id);
        if (selectedSpecialDiscount && +product.stockQty > 0) {
            product.price = product.unit_price_after_merchant_discount - selectedSpecialDiscount.discount;
            product.unit_price_after_special_discount = product.unit_price_after_merchant_discount - selectedSpecialDiscount.discount;
            product.special_discount = selectedSpecialDiscount.discount;
            product.special_discount_pkr = selectedSpecialDiscount.discount;
        }
        else {
            product.special_discount = 0;
            product.special_discount_pkr = 0.00;
            product.special_discount = 0.00;
            product.unit_price_after_special_discount = JSON.parse(JSON.stringify(product.unit_price_after_merchant_discount));
        }
        return product;
    }
    /** Special Discount End */
    getParentQty(qty, childQtyInParent) {
        return qty / childQtyInParent;
    }
    convertStockToUnits(totalQty, childQtyInParent) {
        const parentQty = this.getParentQty(totalQty, childQtyInParent);
        const childQty = totalQty % childQtyInParent;
        return { parentQty, childQty };
    }
    getChildQty(qty, childQtyInParent) {
        return qty * childQtyInParent;
    }
    isNumber(event, type = 'charges') {
        if (event.key && event.key.includes('ArrowLeft') || event.key.includes('ArrowRight')
            || event.key.includes('Backspace') || event.key.includes('Delete') ||
            (type === 'charges' && event.key.includes('.'))) {
            return true;
        }
        else if (event.key && event.key.trim() === '') {
            return false;
        }
        return !isNaN(Number(event.key.trim()));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    // apiDomain: 'https://shahi.sell360.app',
    // apiUrl: 'https://shahi.sell360.app/distributor-api',
    apiDomain: 'https://rocket.sell360.app',
    apiUrl: 'https://rocket.sell360.app/distributor-api',
};


/***/ }),

/***/ "DgO8":
/*!*****************************************************!*\
  !*** ./src/app/modules/shared/pipes/pipe.module.ts ***!
  \*****************************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Decimal_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Decimal.pipe */ "yuE0");




class PipeModule {
    // tslint:disable-next-line:typedef
    static forRoot() {
        return {
            ngModule: PipeModule,
            providers: [],
        };
    }
}
PipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PipeModule });
PipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PipeModule_Factory(t) { return new (t || PipeModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]
    ], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PipeModule, { declarations: [_Decimal_pipe__WEBPACK_IMPORTED_MODULE_2__["Decimal"]], exports: [_Decimal_pipe__WEBPACK_IMPORTED_MODULE_2__["Decimal"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [],
                declarations: [_Decimal_pipe__WEBPACK_IMPORTED_MODULE_2__["Decimal"]],
                exports: [_Decimal_pipe__WEBPACK_IMPORTED_MODULE_2__["Decimal"]],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "FpXt":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-click-outside */ "qew9");
/* harmony import */ var _components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loader-white/loader-white.component */ "uoBr");
/* harmony import */ var _components_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/order-items/order-items.component */ "VzUJ");
/* harmony import */ var _components_product_right_panel_product_right_panel_compoent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product-right-panel/product-right-panel.compoent */ "LCr2");
/* harmony import */ var _components_retailer_sub_listing_retailer_sub_listing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/retailer-sub-listing/retailer-sub-listing.component */ "tPJg");
/* harmony import */ var _components_returned_products_returned_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/returned-products/returned-products.component */ "Unci");
/* harmony import */ var _pipes_Decimal_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/Decimal.pipe */ "yuE0");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/pipe.module */ "DgO8");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services */ "NJqk");














const components = [
    _components_retailer_sub_listing_retailer_sub_listing_component__WEBPACK_IMPORTED_MODULE_8__["RetailerSubListComponent"],
    _components_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_6__["OrderItemsListComponent"],
    _components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_5__["WhiteLoaderComponent"],
    _components_product_right_panel_product_right_panel_compoent__WEBPACK_IMPORTED_MODULE_7__["ProductsRightPanelComponent"],
    _components_returned_products_returned_products_component__WEBPACK_IMPORTED_MODULE_9__["ReturnedProductsComponent"],
];
class SharedModule {
    static forRoot() {
        return {
            ngModule: _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_11__["PipeModule"],
            providers: [],
        };
    }
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        _services__WEBPACK_IMPORTED_MODULE_12__["GeneralDataService"],
        _services__WEBPACK_IMPORTED_MODULE_12__["DataService"],
        _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_11__["PipeModule"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
            _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_11__["PipeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_retailer_sub_listing_retailer_sub_listing_component__WEBPACK_IMPORTED_MODULE_8__["RetailerSubListComponent"],
        _components_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_6__["OrderItemsListComponent"],
        _components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_5__["WhiteLoaderComponent"],
        _components_product_right_panel_product_right_panel_compoent__WEBPACK_IMPORTED_MODULE_7__["ProductsRightPanelComponent"],
        _components_returned_products_returned_products_component__WEBPACK_IMPORTED_MODULE_9__["ReturnedProductsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
        _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_11__["PipeModule"]], exports: [_components_retailer_sub_listing_retailer_sub_listing_component__WEBPACK_IMPORTED_MODULE_8__["RetailerSubListComponent"],
        _components_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_6__["OrderItemsListComponent"],
        _components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_5__["WhiteLoaderComponent"],
        _components_product_right_panel_product_right_panel_compoent__WEBPACK_IMPORTED_MODULE_7__["ProductsRightPanelComponent"],
        _components_returned_products_returned_products_component__WEBPACK_IMPORTED_MODULE_9__["ReturnedProductsComponent"], _pipes_Decimal_pipe__WEBPACK_IMPORTED_MODULE_10__["Decimal"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
                    _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_11__["PipeModule"],
                ],
                exports: [
                    ...components,
                    _pipes_Decimal_pipe__WEBPACK_IMPORTED_MODULE_10__["Decimal"]
                ],
                declarations: [...components],
                providers: [
                    _services__WEBPACK_IMPORTED_MODULE_12__["GeneralDataService"],
                    _services__WEBPACK_IMPORTED_MODULE_12__["DataService"],
                    _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_11__["PipeModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Gh+6":
/*!*****************************************************!*\
  !*** ./src/app/core/constants/sub-nav.constants.ts ***!
  \*****************************************************/
/*! exports provided: ordersSubMenu, salesmanSubMenu, inventorySubMenu, retailerSubMenu, reportsSubMenu, paymentsSubMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordersSubMenu", function() { return ordersSubMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salesmanSubMenu", function() { return salesmanSubMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inventorySubMenu", function() { return inventorySubMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retailerSubMenu", function() { return retailerSubMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportsSubMenu", function() { return reportsSubMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentsSubMenu", function() { return paymentsSubMenu; });
const ordersSubMenu = {
    title: 'Orders',
    subMenu: [
        {
            title: 'New Orders',
            link: '/orders',
            icon: '/assets/images/new-orders.svg'
        },
        {
            title: 'Create Dispatch',
            link: '/orders/dispatch-orders',
            icon: '/assets/images/dispatched-order.svg'
        },
        {
            title: 'Execution',
            link: '/orders/execution-list',
            icon: '/assets/images/dispatched-order.svg'
        },
        // Hidden for first version
        {
            title: 'Completed Orders',
            link: '/orders/completed-orders',
            icon: '/assets/images/complete-orders.svg'
        },
        {
            title: 'Counter Sale',
            link: '/orders/counter-sale',
            icon: '/assets/images/complete-orders.svg'
        },
    ]
};
const salesmanSubMenu = {
    title: 'Salesmen',
    subMenu: [
        {
            title: 'Salesmen',
            link: '/salesmen',
            icon: '/assets/images/salesman-icon.svg'
        },
        {
            title: 'Salesman Ledger',
            link: '/salesmen/salesmen-ledger',
            icon: '/assets/images/Salesman-ledger.svg'
        }
    ]
};
const inventorySubMenu = {
    title: 'Inventory',
    subMenu: [
        {
            title: 'Gallery',
            link: '/inventory/gallery',
            icon: '/assets/images/gallary-icon.svg'
        },
        {
            title: 'Add Stock',
            link: '/inventory/add-stock',
            icon: '/assets/images/add-stock.svg'
        },
        {
            title: 'Distributor Purchase',
            link: '/inventory/distributor-purchase',
            icon: '/assets/images/add-stock.svg'
        },
        {
            title: 'Stock',
            link: '/inventory/stock',
            icon: '/assets/images/add-stock.svg'
        }
    ]
};
const retailerSubMenu = {
    title: 'Retailer',
    subMenu: [
        {
            title: 'Retailer',
            link: '/retailer/list',
            icon: '/assets/images/retailar-list-icon.svg'
        },
        {
            title: 'Opening Balance',
            link: '/retailer/opening-balance',
            icon: '/assets/images/opening-balance.svg'
        }
    ]
};
const reportsSubMenu = {
    title: 'Reports',
    subMenu: [
        {
            title: 'DSR',
            link: '/reports/dsr',
            icon: '/assets/images/reports-icon.svg'
        },
        {
            title: 'Cash Summary',
            link: '/reports/cash-summary',
            icon: '/assets/images/reports-icon.svg'
        },
        {
            title: 'Export Rate List',
            link: '/reports/export-rate-list',
            icon: '/assets/images/reports-icon.svg'
        },
        // {
        //   title: 'Spot Sale',
        //   link: '/reports/spot-sale',
        //   icon: '/assets/images/reports-icon.svg'
        // },
        {
            title: 'Purchase History',
            link: '/reports/purchase-history',
            icon: '/assets/images/reports-icon.svg'
        },
        {
            title: 'Stock Out Report',
            link: '/reports/stock-report',
            icon: '/assets/images/reports-icon.svg'
        },
        {
            title: 'Sale Order History',
            link: '/reports/sale-order-history',
            icon: '/assets/images/complete-orders.svg'
        },
        {
            title: 'Retailer Ledger',
            link: '/retailer/ledger',
            icon: '/assets/images/complete-orders.svg'
        },
    ]
};
const paymentsSubMenu = {
    title: 'Payments',
    subMenu: [
        {
            title: 'Manage Cheque Payments',
            link: '/payments',
            icon: '/assets/images/payment-icon.svg'
        }
    ]
};


/***/ }),

/***/ "LB4v":
/*!**********************************!*\
  !*** ./src/app/reducer/index.ts ***!
  \**********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngrx-store-freeze */ "PXG5");


const reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
};
const metaReducers = [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_1__["storeFreeze"]];


/***/ }),

/***/ "LCr2":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/product-right-panel/product-right-panel.compoent.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProductsRightPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRightPanelComponent", function() { return ProductsRightPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_constants_schemes_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/constants/schemes.constant */ "XSw2");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "NJqk");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/toaster.service */ "ZgVV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-click-outside */ "qew9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function ProductsRightPanelComponent_div_11_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please add Quantity! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductsRightPanelComponent_div_11_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantity should be greater than 0! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductsRightPanelComponent_div_11_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Trade Offer: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductsRightPanelComponent_div_11_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductsRightPanelComponent_div_11_div_15_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.selectedProduct.selectedScheme = $event; })("click", function ProductsRightPanelComponent_div_11_div_15_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const scheme_r8 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.selectedProduct.pref_id && ctx_r12.selectedProduct.quantity && ctx_r12.calculateProductDiscounts(ctx_r12.selectedProduct, scheme_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const scheme_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "byTerritory-", i_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.selectedProduct.selectedScheme)("value", scheme_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "byTerritory-", i_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](scheme_r8.title);
} }
function ProductsRightPanelComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Quantity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProductsRightPanelComponent_div_11_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r13.setQuantity(ctx_r13.selectedProduct); return ctx_r13.checkAvailableQty(ctx_r13.selectedProduct); })("keydown", function ProductsRightPanelComponent_div_11_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.isNumber($event, "quantity"); })("ngModelChange", function ProductsRightPanelComponent_div_11_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.selectedProduct.stockQty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductsRightPanelComponent_div_11_span_7_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductsRightPanelComponent_div_11_span_8_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Unit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductsRightPanelComponent_div_11_div_13_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductsRightPanelComponent_div_11_div_15_Template, 5, 5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectedProduct.stockQty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.errors == null ? null : _r3.errors.required) && ctx_r0.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +ctx_r0.selectedProduct.stockQty === 0 && ctx_r0.isAdded && !(_r3.errors == null ? null : _r3.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedProduct.unit_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedProduct.schemes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedProduct.schemes);
} }
function ProductsRightPanelComponent_table_37_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductsRightPanelComponent_table_37_ng_container_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("available: ", product_r18.available_qty, "");
} }
function ProductsRightPanelComponent_table_37_ng_container_2_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsRightPanelComponent_table_37_ng_container_2_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const product_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.openQuantityModal(product_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductsRightPanelComponent_table_37_ng_container_2_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductsRightPanelComponent_table_37_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsRightPanelComponent_table_37_ng_container_2_div_4_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductsRightPanelComponent_table_37_ng_container_2_span_8_Template, 2, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductsRightPanelComponent_table_37_ng_container_2_button_10_Template, 2, 0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductsRightPanelComponent_table_37_ng_container_2_span_11_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r18.schemes == null ? null : product_r18.schemes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r18.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r18.item_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.orderType === "execution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !product_r18.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r18.isAdded);
} }
function ProductsRightPanelComponent_table_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsRightPanelComponent_table_37_ng_container_2_Template, 12, 6, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.dispProducts);
} }
function ProductsRightPanelComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading Products...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
class ProductsRightPanelComponent {
    constructor(dataService, toastService) {
        this.dataService = dataService;
        this.toastService = toastService;
        this.selectedProduct = {};
        this.dispProducts = [];
        this.drawerClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.productSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngOnChanges(change) {
        var _a, _b;
        if ((_a = change.orderedProducts) === null || _a === void 0 ? void 0 : _a.currentValue) {
            debugger;
            this.allProducts = this.allProducts.map(x => {
                const orderedProduct = this.orderedProducts.find(pr => pr.item_id === x.item_id);
                // if (orderedProduct?.item_status == 0)
                //   x.isDeleted = true;
                // else if (orderedProduct)
                x.isAdded = orderedProduct ? true : false;
                return x;
            });
            this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
        }
        if ((_b = change.allProducts) === null || _b === void 0 ? void 0 : _b.currentValue) {
            this.allProducts = this.allProducts.map(product => {
                product.schemes = this.dataService.getSchemes(product.item_id, product.unit_id, product.pref_id, this.productSchemes, this.selectedRetailer.type_id || this.selectedRetailer.retailer_type_id, this.selectedRetailer.retailer_id);
                return product;
            });
            this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
        }
    }
    isNumber(event, type = 'charges') {
        return this.dataService.isNumber(event, type);
    }
    checkAvailableQty(product) {
        if (this.orderType === 'execution') {
            const toast = {
                type: 'error',
                message: `Quantity (${product.stockQty}) should not be greater than available quantity (${product.available_qty})!`,
                title: 'Quantity Error:'
            };
            if (+product.stockQty > product.available_qty) {
                this.toastService.showToaster(toast);
            }
        }
    }
    addProductToOrder() {
        if (this.selectedProduct.selectedScheme && !this.selectedProduct.selectedScheme.applied) {
            this.dataService.schemeCannotApplied();
            return;
        }
        if (+this.selectedProduct.stockQty > 0 &&
            (this.orderType !== 'execution' ||
                this.orderType === 'execution' && +this.selectedProduct.stockQty <= this.selectedProduct.available_qty)) {
            this.selectedProduct.item_quantity_booker = 0;
            let prod = this.allProducts.find(x => x.item_id === this.selectedProduct.item_id);
            prod.isAdded = true;
            prod = this.dispProducts.find(x => x.item_id === this.selectedProduct.item_id);
            prod.isAdded = true;
            this.productSelected.emit(JSON.parse(JSON.stringify(this.selectedProduct)));
            document.getElementById('pl-qty-close').click();
        }
    }
    closeQuantityModal(event) {
        if (this.showQuantityModal && !event.target.classList.contains('dont-close-quantity')) {
            this.showQuantityModal = false;
            this.selectedProduct = JSON.parse(JSON.stringify({}));
        }
    }
    searchProduct() {
        if (this.productSearchText) {
            this.dispProducts = this.allProducts.filter(prod => prod.item_name.toLowerCase().includes(this.productSearchText.toLowerCase()));
        }
        else {
            this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
        }
    }
    openQuantityModal(product) {
        var _a;
        this.showQuantityModal = true;
        if ((_a = product.schemes) === null || _a === void 0 ? void 0 : _a.length) {
            product.schemes = product.schemes.map(scheme => {
                switch (scheme.scheme_type) {
                    case 'free_product':
                        scheme.name = _core_constants_schemes_constant__WEBPACK_IMPORTED_MODULE_1__["schemes"].free_products;
                        scheme.rule_name = _core_constants_schemes_constant__WEBPACK_IMPORTED_MODULE_1__["freeProductsRules"][scheme.scheme_rule];
                        break;
                    case 'dotp':
                        scheme.name = _core_constants_schemes_constant__WEBPACK_IMPORTED_MODULE_1__["schemes"].dotp;
                        break;
                    default:
                        scheme.name = _core_constants_schemes_constant__WEBPACK_IMPORTED_MODULE_1__["schemes"].gift;
                        break;
                }
                return scheme;
            });
        }
        this.selectedProduct = JSON.parse(JSON.stringify(product));
    }
    clickedOutSide(event) {
        if (!this.showQuantityModal && !event.target.classList.contains('dont-close-products')) {
            this.closeProductsList();
        }
    }
    closeProductsList() {
        this.drawerClosed.emit(true);
    }
    setQuantity(product) {
        if (+product.stockQty > 1000) {
            product.stockQty = 0;
        }
        if (product.item_trade_price) {
            this.calculateProductDiscounts(product);
            this.calculateProductPrice(product);
        }
    }
    calculateProductPrice(product) {
        product.original_amount = this.dataService.calculateUnitPrice(+product.stockQty, product.item_trade_price);
        product.gross_amount = product.unit_price_after_scheme_discount * +product.stockQty;
    }
    calculateProductDiscounts(product, scheme) {
        // Trade Offer
        if (scheme) {
            product.selectedScheme = scheme;
        }
        if (product.selectedScheme) {
            product = this.applyScheme(product);
        }
        else {
            product.scheme_discount = 0;
            product.price = JSON.parse(JSON.stringify(product.item_trade_price));
            product.unit_price_after_scheme_discount = JSON.parse(JSON.stringify(product.item_trade_price));
        }
        // Trade Discount
        if (this.productMerchantDiscount) {
            product = this.dataService.applyMerchantDiscountForSingleProduct(this.productMerchantDiscount, product, 1);
        }
        else {
            product.trade_discount = 0;
            product.trade_discount_pkr = 0;
            product.unit_price_after_merchant_discount = JSON.parse(JSON.stringify(product.price));
        }
        // Special Discount
        product = this.calculateProductSpecialDiscount(product);
        // Extra Discount => Booker Discount
        product.extra_discount = 0;
        product.extra_discount_pkr = 0;
        product.unit_price_after_individual_discount = JSON.parse(JSON.stringify(product.unit_price_after_special_discount));
        this.calculateNetAmountOfProduct(product);
    }
    calculateProductSpecialDiscount(product) {
        return this.dataService.getSpecialDiscounts(this.selectedRetailer.segment_id, this.selectedRetailer.region_id, product, this.specialDiscounts);
    }
    calculateNetAmountOfProduct(product) {
        product.net_amount = this.dataService.calculateUnitPrice(product.price, +product.stockQty);
        this.calculateProductTax(product);
    }
    calculateProductTax(product) {
        if (product.tax_class_amount) {
            product.tax_amount_value = (product.tax_class_amount / 100) * product.item_retail_price;
            product.tax_amount_pkr = product.tax_amount_value * product.stockQty;
            product.net_amount = product.net_amount + product.tax_amount_pkr;
        }
        else {
            product.tax_amount_value = 0;
            product.tax_amount_pkr = 0;
        }
    }
    applyScheme(product) {
        switch (product.selectedScheme.scheme_type) {
            case 'free_product':
                product = this.applyFreeProductScheme(product);
                break;
            case 'dotp':
                product = this.applyDOTPScheme(product);
                break;
            default:
                product = this.applyGiftScheme(product);
                break;
        }
        return product;
    }
    applyFreeProductScheme(product) {
        product = this.dataService.applyFreeProductScheme(product);
        return product;
    }
    applyDOTPScheme(product) {
        return this.dataService.getSDForDOTP(product);
    }
    applyGiftScheme(product) {
        return this.dataService.getSDForGift(product);
    }
}
ProductsRightPanelComponent.ɵfac = function ProductsRightPanelComponent_Factory(t) { return new (t || ProductsRightPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])); };
ProductsRightPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsRightPanelComponent, selectors: [["app-products-drawer"]], inputs: { loadingProducts: "loadingProducts", allProducts: "allProducts", orderedProducts: "orderedProducts", productSchemes: "productSchemes", specialDiscounts: "specialDiscounts", selectedRetailer: "selectedRetailer", productMerchantDiscount: "productMerchantDiscount", orderType: "orderType" }, outputs: { drawerClosed: "drawerClosed", productSelected: "productSelected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 42, vars: 7, consts: [["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 3, "ngClass"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "top_border"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "dont-close-products", 3, "click"], ["aria-hidden", "true", 1, "dont-close-products"], ["class", "modal-body AddDetailPR", 4, "ngIf"], [1, "modal-footer", "border-0", 2, "background-color", "#f6f6f6"], ["type", "submit", 1, "btn", "btn-primary", "dont-close-products", 3, "click"], ["type", "button", "id", "pl-qty-close", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-cancel", "dont-close-products", 3, "click"], ["id", "product-cl-sec", 1, "active", 3, "clickOutside"], ["id", "pl-close", 1, "close-btn-pl", 3, "click"], [1, "pro-header-text"], [1, "se_cus-type", "form-wrap", "p-15"], [1, "row"], [1, "col-12"], [1, "productSearch"], [1, "fa", "fa-search"], ["type", "text", "id", "", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "pc-cartlist"], [1, "overflow-plist"], [1, "plist-content"], [1, "_left-filter", "pt-0"], [1, "container"], [1, "card", "top_border", "p-15"], ["class", "AddProductTable", "width", "100%", 4, "ngIf"], ["class", "col-md-12 loader", 4, "ngIf"], [1, "_cl-bottom"], ["id", "pl-prod-close", "type", "butotn", 1, "btn", "btn-cancel", "mr-2", 3, "click"], [1, "modal-body", "AddDetailPR"], [1, "col-md-4", "pt-7", "mb-15"], [1, "col-md-8", "mb-15"], ["type", "text", "placeholder", "", "required", "", 1, "form-control", 2, "font-size", "13px", 3, "ngModel", "keyup", "keydown", "ngModelChange"], ["selectedQty", "ngModel"], ["class", "input-error", 4, "ngIf"], ["class", "col-md-4", "style", "padding-top: 2px", 4, "ngIf"], [1, "col-md-8"], [4, "ngFor", "ngForOf"], [1, "input-error"], [1, "col-md-4", 2, "padding-top", "2px"], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "AssignCatalogue", 1, "custom-control-input", 3, "ngModel", "id", "value", "ngModelChange", "click"], [1, "custom-control-label", "font13", 2, "line-height", "25px", 3, "for"], ["width", "100%", 1, "AddProductTable"], [1, "ProListDiv"], ["class", "lab-promotion", 4, "ngIf"], ["alt", "", 1, "PrList_img", 3, "src"], [1, "PR_Name"], ["style", "display: block;", 4, "ngIf"], ["class", "btn btn-default mb-0 dont-close-quantity", "data-toggle", "modal", "data-target", "#exampleModal", 3, "click", 4, "ngIf"], ["class", "btn btn-added mb-0 dont-close-quantity", 4, "ngIf"], [1, "lab-promotion"], [2, "display", "block"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-default", "mb-0", "dont-close-quantity", 3, "click"], [1, "btn", "btn-added", "mb-0", "dont-close-quantity"], [1, "col-md-12", "loader"], [1, "loading"]], template: function ProductsRightPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsRightPanelComponent_Template_button_click_8_listener($event) { return ctx.closeQuantityModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductsRightPanelComponent_div_11_Template, 16, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsRightPanelComponent_Template_button_click_13_listener() { return ctx.addProductToOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsRightPanelComponent_Template_button_click_15_listener($event) { return ctx.closeQuantityModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function ProductsRightPanelComponent_Template_div_clickOutside_17_listener($event) { return ctx.clickedOutSide($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsRightPanelComponent_Template_a_click_18_listener() { return ctx.closeProductsList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductsRightPanelComponent_Template_input_ngModelChange_28_listener($event) { return ctx.productSearchText = $event; })("keyup", function ProductsRightPanelComponent_Template_input_keyup_28_listener() { return ctx.searchProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ProductsRightPanelComponent_table_37_Template, 3, 1, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProductsRightPanelComponent_div_38_Template, 3, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsRightPanelComponent_Template_button_click_40_listener() { return ctx.closeProductsList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.showQuantityModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedProduct.hasOwnProperty("quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productSearchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingProducts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"]], styles: ["#product-cl-sec[_ngcontent-%COMP%]{right: -860px; opacity: 1; box-shadow: 0 1px 5px 0 rgba(45,62,80,.12); width: 600px}\r\n#product-cl-sec.active[_ngcontent-%COMP%]{right: 0px; opacity: 1; box-shadow: 0px 0px 100px 0px rgba(0, 0, 0, 0.5)}\r\n.productSearch[_ngcontent-%COMP%] {position: relative;}\r\n.productSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {height: 32px;\r\n\tborder: solid 1px #eae9e9;\r\n\tbox-shadow: none;\r\n\tpadding-left: 30px;\r\n\tfont-size: 13px;\r\n\tletter-spacing: 1px;\r\n}\r\n.productSearch[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {position: absolute;top: 8px;left: 8px;color: #b5b5b5;}\r\n._left-filter[_ngcontent-%COMP%]{padding-top:0}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button { -webkit-appearance: none;  margin: 0;}\r\n\r\ninput[type=number][_ngcontent-%COMP%] {-moz-appearance: textfield;}\r\n.AddProductTable[_ngcontent-%COMP%] {padding: 0;margin: 0}\r\n.AddProductTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {border-bottom: solid 1px #eeeeee}\r\n.AddProductTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {padding-bottom: 7px;padding-top: 7px}\r\n.ProListDiv[_ngcontent-%COMP%] {padding: 0;display: table; position: relative;}\r\n.ProListDiv[_ngcontent-%COMP%]   .PR_Name[_ngcontent-%COMP%] {display: table-cell;vertical-align: middle;font-size: 14px;letter-spacing: 1px;line-height: 16px}\r\n.ProListDiv[_ngcontent-%COMP%]   .PrList_img[_ngcontent-%COMP%] {width: 35px;height: 35px;margin-right: 8px;border: solid 1px #e0e0e0}\r\n.AddProductTable[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\r\n\tpadding: 5px 8px;\r\n\tfont-size: 13px;\r\n\tborder-radius: 0;\r\n\t-khtml-border-radius: 0;\r\n\tbackground: linear-gradient(90deg, #1e54d3 0%, #0038ba 100%);\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n\tmargin: 0;\r\n\tline-height: 1;\r\n\tmin-width: 74px;\r\n\tletter-spacing: 1px;\r\n\tfloat: right;\r\n\tborder: none!important\r\n}\r\n.lab-promotion[_ngcontent-%COMP%]{position: absolute;top:-8px;left: -.438rem;padding:2px 6px;font-size: 10.5px;z-index: 3;background-color: #fed02a;color: #282828;line-height: 1;}\r\n.lab-promotion[_ngcontent-%COMP%]:before {border-top: 4px solid #000;border-left: 7px solid transparent;content: \"\";left: 0;position: absolute;top: 14px;z-index: -1;}\r\n.lab-promotion-l[_ngcontent-%COMP%] {position: absolute;top:-15px;left: -13px;padding: 1px 6px;font-size: 10.5px;z-index: 3;background-color: #fed02a;color: #282828;line-height: 1; letter-spacing: 1px;}\r\n.lab-promotion-l[_ngcontent-%COMP%]:before {border-top: 4px solid #000;border-left: 7px solid transparent;content: \"\";left: 0;position: absolute; top: 12px;z-index: -1;}\r\n.btn-added[_ngcontent-%COMP%] {\r\n\tpadding: 5px 8px;\r\n\tfont-size: 13px;\r\n\tborder-radius: 0;\r\n\t-khtml-border-radius: 0;\r\n\ttext-align: center;\r\n\tmargin: 0;\r\n\tline-height: 1;\r\n\tmin-width: 74px;\r\n\tletter-spacing: 1px;\r\n\tfloat: right;\r\n\tborder: none!important\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9wcm9kdWN0LXJpZ2h0LXBhbmVsL3Byb2R1Y3QtcmlnaHQtcGFuZWwuY29tcG9lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixhQUFhLEVBQUUsVUFBVSxFQUFFLDBDQUEwQyxFQUFFLFlBQVk7QUFDbkcsdUJBQXVCLFVBQVUsRUFBRSxVQUFVLEVBQUUsZ0RBQWdEO0FBQy9GLGdCQUFnQixrQkFBa0IsQ0FBQztBQUNuQyxzQkFBc0IsWUFBWTtDQUNqQyx5QkFBeUI7Q0FHekIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCO0FBQ0Esb0JBQW9CLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO0FBQ3pFLGNBQWMsYUFBYTtBQUMzQixnQ0FBZ0M7QUFDaEMscUVBQXFFLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztBQUMxRyxZQUFZO0FBQUMsb0JBQW9CLDBCQUEwQixDQUFDO0FBQzVELGtCQUFrQixVQUFVLENBQUMsU0FBUztBQUN0QyxxQkFBcUIsZ0NBQWdDO0FBQ3JELHFCQUFxQixtQkFBbUIsQ0FBQyxnQkFBZ0I7QUFDekQsYUFBYSxVQUFVLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO0FBQzNELHNCQUFzQixtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCO0FBQ3RILHlCQUF5QixXQUFXLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QjtBQUM3RjtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBR2YsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2Qiw0REFBNEQ7Q0FDNUQsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaO0FBQ0Q7QUFDQSxlQUFlLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO0FBQy9KLHVCQUF1QiwwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7QUFDbEosa0JBQWtCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsbUJBQW1CLENBQUM7QUFDdEwseUJBQXlCLDBCQUEwQixDQUFDLGtDQUFrQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQztBQUVySjtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBR2YsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9wcm9kdWN0LXJpZ2h0LXBhbmVsL3Byb2R1Y3QtcmlnaHQtcGFuZWwuY29tcG9lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2R1Y3QtY2wtc2Vje3JpZ2h0OiAtODYwcHg7IG9wYWNpdHk6IDE7IGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoNDUsNjIsODAsLjEyKTsgd2lkdGg6IDYwMHB4fVxyXG4jcHJvZHVjdC1jbC1zZWMuYWN0aXZle3JpZ2h0OiAwcHg7IG9wYWNpdHk6IDE7IGJveC1zaGFkb3c6IDBweCAwcHggMTAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KX0gXHJcbi5wcm9kdWN0U2VhcmNoIHtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4ucHJvZHVjdFNlYXJjaCBpbnB1dCB7aGVpZ2h0OiAzMnB4O1xyXG5cdGJvcmRlcjogc29saWQgMXB4ICNlYWU5ZTk7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG5cdC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdHBhZGRpbmctbGVmdDogMzBweDtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4ucHJvZHVjdFNlYXJjaCAuZmEge3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDhweDtsZWZ0OiA4cHg7Y29sb3I6ICNiNWI1YjU7fVxyXG4uX2xlZnQtZmlsdGVye3BhZGRpbmctdG9wOjB9XHJcbi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiwgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24geyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7ICBtYXJnaW46IDA7fVxyXG4vKiBGaXJlZm94ICovaW5wdXRbdHlwZT1udW1iZXJdIHstbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDt9XHJcbi5BZGRQcm9kdWN0VGFibGUge3BhZGRpbmc6IDA7bWFyZ2luOiAwfVxyXG4uQWRkUHJvZHVjdFRhYmxlIHRyIHtib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VlZWVlZX1cclxuLkFkZFByb2R1Y3RUYWJsZSB0ZCB7cGFkZGluZy1ib3R0b206IDdweDtwYWRkaW5nLXRvcDogN3B4fVxyXG4uUHJvTGlzdERpdiB7cGFkZGluZzogMDtkaXNwbGF5OiB0YWJsZTsgcG9zaXRpb246IHJlbGF0aXZlO31cclxuLlByb0xpc3REaXYgLlBSX05hbWUge2Rpc3BsYXk6IHRhYmxlLWNlbGw7dmVydGljYWwtYWxpZ246IG1pZGRsZTtmb250LXNpemU6IDE0cHg7bGV0dGVyLXNwYWNpbmc6IDFweDtsaW5lLWhlaWdodDogMTZweH1cclxuLlByb0xpc3REaXYgLlByTGlzdF9pbWcge3dpZHRoOiAzNXB4O2hlaWdodDogMzVweDttYXJnaW4tcmlnaHQ6IDhweDtib3JkZXI6IHNvbGlkIDFweCAjZTBlMGUwfVxyXG4uQWRkUHJvZHVjdFRhYmxlIC5idG4tZGVmYXVsdCB7XHJcblx0cGFkZGluZzogNXB4IDhweDtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogMDtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdC1raHRtbC1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFlNTRkMyAwJSwgIzAwMzhiYSAxMDAlKTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdG1pbi13aWR0aDogNzRweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRib3JkZXI6IG5vbmUhaW1wb3J0YW50XHJcbn1cclxuLmxhYi1wcm9tb3Rpb257cG9zaXRpb246IGFic29sdXRlO3RvcDotOHB4O2xlZnQ6IC0uNDM4cmVtO3BhZGRpbmc6MnB4IDZweDtmb250LXNpemU6IDEwLjVweDt6LWluZGV4OiAzO2JhY2tncm91bmQtY29sb3I6ICNmZWQwMmE7Y29sb3I6ICMyODI4Mjg7bGluZS1oZWlnaHQ6IDE7fVxyXG4ubGFiLXByb21vdGlvbjpiZWZvcmUge2JvcmRlci10b3A6IDRweCBzb2xpZCAjMDAwO2JvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7Y29udGVudDogXCJcIjtsZWZ0OiAwO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDE0cHg7ei1pbmRleDogLTE7fVxyXG4ubGFiLXByb21vdGlvbi1sIHtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOi0xNXB4O2xlZnQ6IC0xM3B4O3BhZGRpbmc6IDFweCA2cHg7Zm9udC1zaXplOiAxMC41cHg7ei1pbmRleDogMztiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkMDJhO2NvbG9yOiAjMjgyODI4O2xpbmUtaGVpZ2h0OiAxOyBsZXR0ZXItc3BhY2luZzogMXB4O31cclxuLmxhYi1wcm9tb3Rpb24tbDpiZWZvcmUge2JvcmRlci10b3A6IDRweCBzb2xpZCAjMDAwO2JvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7Y29udGVudDogXCJcIjtsZWZ0OiAwO3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAxMnB4O3otaW5kZXg6IC0xO31cclxuXHJcbi5idG4tYWRkZWQge1xyXG5cdHBhZGRpbmc6IDVweCA4cHg7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDA7XHJcblx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHQta2h0bWwtYm9yZGVyLXJhZGl1czogMDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdG1pbi13aWR0aDogNzRweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRib3JkZXI6IG5vbmUhaW1wb3J0YW50XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRightPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products-drawer',
                templateUrl: 'product-right-panel.compoent.html',
                styleUrls: ['./product-right-panel.compoent.css']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }]; }, { loadingProducts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allProducts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orderedProducts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], productSchemes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], specialDiscounts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedRetailer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], productMerchantDiscount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orderType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], drawerClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], productSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "NJqk":
/*!**************************************************!*\
  !*** ./src/app/modules/shared/services/index.ts ***!
  \**************************************************/
/*! exports provided: DataService, GeneralDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ "8/39");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]; });

/* harmony import */ var _general_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-data.service */ "lqmV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralDataService", function() { return _general_data_service__WEBPACK_IMPORTED_MODULE_1__["GeneralDataService"]; });





/***/ }),

/***/ "Rb2t":
/*!**********************************************************!*\
  !*** ./src/app/core/constants/localstorage.constants.ts ***!
  \**********************************************************/
/*! exports provided: localStorageKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageKeys", function() { return localStorageKeys; });
const localStorageKeys = {
    actions: '__actions',
    saleman: '__saleman',
    distributor: 'distributor',
    session: 'dist_session',
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_constants_sub_nav_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/constants/sub-nav.constants */ "Gh+6");
/* harmony import */ var _core_constants_no_left_bar_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/constants/no-left-bar.constants */ "6wAO");
/* harmony import */ var _core_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/constants/localstorage.constants */ "Rb2t");
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/storage.service */ "UYTb");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/services/toaster.service */ "ZgVV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-click-outside */ "qew9");











const _c0 = ["subNav"];
function AppComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.showToast = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("toast  ", ctx_r4.toastType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.showToast ? "show " : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.toastTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.toastMessage, " ");
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_0_div_1_Template, 11, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Copyright \u00A9 2021 Sell3sixty All rights reserved.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Design & Developed by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Allomate Solutions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showToast);
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_a_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openSubmenu($event, "orders"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_a_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.openSubmenu($event, "salesmen"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Salesmen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_a_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openSubmenu($event, "inventory"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_a_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.openSubmenu($event, "retailer"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Retailer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_a_click_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openSubmenu($event, "reports"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_a_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return [a0]; };
function AppComponent_div_2_div_2_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_div_2_li_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.closeSubMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, menu_r17.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", menu_r17.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r17.title);
} }
function AppComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.closeSubMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_2_div_2_li_6_Template, 4, 5, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.selectedSubMenu.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.selectedSubMenu.subMenu);
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function AppComponent_div_2_Template_div_clickOutside_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.closeSubMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_div_2_Template, 7, 2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedSubMenu);
} }
function AppComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_3_div_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.showToast = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("toast ", ctx_r24.toastType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r24.showToast ? "show " : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.toastTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r24.toastMessage, " ");
} }
function AppComponent_div_3_footer_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "2021 \u00A9 Sell3sixty All rights reserved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_3_div_2_Template, 11, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.closeEverything(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Close every thing! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_3_footer_8_Template, 4, 0, "footer", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.isSideNavHidden ? "pl-0" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.showToast);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
} }
class AppComponent {
    constructor(router, storageService, toasterService) {
        this.router = router;
        this.storageService = storageService;
        this.toasterService = toasterService;
        this.isLoggedIn = this.storageService.getItem('dist_session') ? true : false;
        if (!this.isLoggedIn) {
            this.router.navigateByUrl('/login');
        }
        else if (location.pathname === '/') {
            this.router.navigateByUrl('/home');
        }
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.isLoggedIn = this.storageService.getItem('dist_session') ? true : false;
                const url = event.urlAfterRedirects;
                if (_core_constants_no_left_bar_constants__WEBPACK_IMPORTED_MODULE_3__["leftBarHidden"].includes(url) || url.includes('/orders/dispatch/') || url.includes('/orders/execute-order/')) {
                    this.isSideNavHidden = true;
                }
                else {
                    this.isSideNavHidden = false;
                }
            }
        });
        this.toasterHandler();
    }
    toasterHandler() {
        this.toasterService.getToast.subscribe((toast) => {
            if (toast) {
                this.toastTitle = toast.title;
                this.toastMessage = toast.message;
                this.toastType = toast.type;
                this.showToast = true;
                setTimeout(() => {
                    this.showToast = false;
                }, 5000);
            }
        });
    }
    openSubmenu(event, selected) {
        event.stopPropagation();
        switch (selected) {
            case 'orders':
                this.selectedSubMenu = _core_constants_sub_nav_constants__WEBPACK_IMPORTED_MODULE_2__["ordersSubMenu"];
                break;
            case 'salesmen':
                this.selectedSubMenu = _core_constants_sub_nav_constants__WEBPACK_IMPORTED_MODULE_2__["salesmanSubMenu"];
                break;
            case 'inventory':
                this.selectedSubMenu = _core_constants_sub_nav_constants__WEBPACK_IMPORTED_MODULE_2__["inventorySubMenu"];
                break;
            case 'retailer':
                this.selectedSubMenu = _core_constants_sub_nav_constants__WEBPACK_IMPORTED_MODULE_2__["retailerSubMenu"];
                break;
            case 'reports':
                this.selectedSubMenu = _core_constants_sub_nav_constants__WEBPACK_IMPORTED_MODULE_2__["reportsSubMenu"];
                break;
            case 'payments':
                this.selectedSubMenu = _core_constants_sub_nav_constants__WEBPACK_IMPORTED_MODULE_2__["paymentsSubMenu"];
                break;
            default:
                break;
        }
        this.subNav.nativeElement.className = 'active';
        document.body.classList.add('no-scroll');
        document.getElementById('blureEffct').classList.add('blur-div');
        document.getElementsByClassName('overlay-blure')[0].classList.add('d-block');
    }
    closeSubMenu() {
        if (this.subNav.nativeElement.className.includes('active')) {
            this.subNav.nativeElement.className = '';
            document.body.classList.remove('no-scroll');
            document.getElementById('blureEffct').classList.remove('blur-div');
            document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        }
    }
    logout() {
        this.storageService.removeItem(_core_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_4__["localStorageKeys"].session);
        this.storageService.removeItem(_core_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_4__["localStorageKeys"].distributor);
        this.storageService.removeItem(_core_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_4__["localStorageKeys"].saleman);
        this.storageService.removeItem(_core_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_4__["localStorageKeys"].actions);
        this.router.navigateByUrl('/login');
    }
    closeEverything() {
        const modal = document.querySelector('div.modal');
        if (modal) {
            const closeButton = modal.querySelector('button.close');
            closeButton.click();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.subNav = _t.first);
    } }, decls: 4, vars: 4, consts: [["class", "bg_main", 4, "ngIf"], ["class", "sidebarblue", 4, "ngIf"], ["id", "_subNav-id", 3, "clickOutside", 4, "ngIf"], ["id", "wrapper", 4, "ngIf"], [1, "bg_main"], ["aria-live", "polite", "aria-atomic", "true", "style", "position: absolute; z-index: 1052; left: 30px;", 4, "ngIf"], ["id", "wrapper", 1, "EbobBGImg"], [1, "container", "mt-0", "mb-0"], [1, "Log_footer"], ["href", "https://allomate.com", "target", "_blank"], ["aria-live", "polite", "aria-atomic", "true", 2, "position", "absolute", "z-index", "1052", "left", "30px"], [2, "position", "fixed", "bottom", "80px"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "ngClass"], [1, "toast-header"], [1, "mr-auto"], ["type", "button", "data-dismiss", "toast", "aria-label", "Close", 1, "ml-2", "mb-1", "close", 3, "click"], ["aria-hidden", "true"], [1, "toast-body"], [1, "sidebarblue"], [1, "aside-primary"], [1, "sell360"], ["routerLink", "/home"], ["alt", "Sell360", "src", "/assets/images/logo-w.svg"], [1, "main-links"], [3, "click"], ["src", "/assets/images/order-icon.svg", "alt", ""], ["src", "/assets/images/customer-icon.svg", "alt", ""], ["src", "/assets/images/inventory-icon.svg", "alt", ""], ["src", "/assets/images/retailar-icon.svg", "alt", ""], ["src", "/assets/images/reports-icon.svg", "alt", ""], [1, "_user-nav"], ["href", "#"], ["src", "/assets/images/bell-icon-2.svg", "alt", "Notification", "title", "Notification"], [1, "badge"], ["href", "#", 1, "userIMG"], ["src", "/assets/images/avatar.svg", "alt", ""], ["href", "#", 1, "setting-icon"], ["src", "/assets/images/setting-icon.svg", "alt", "Setting", "title", "Setting"], [1, "sidebar-BL"], ["src", "/assets/images/logout-icon.svg", "alt", "Employee"], ["id", "_subNav-id", 3, "clickOutside"], ["subNav", ""], ["class", "_subNav", 4, "ngIf"], [1, "_subNav"], ["id", "SN-close", 1, "SN-close-btn", 3, "click"], [1, "fa", "fa-arrow-left"], [4, "ngFor", "ngForOf"], [3, "routerLink", "click"], ["alt", "", 3, "src"], ["id", "wrapper"], ["id", "content-wrapper", 3, "ngClass"], ["id", "blureEffct"], [1, "overlay-blure"], ["id", "Close-All", "hidden", "", "data-dismiss", "modal", "aria-label", "Close", 3, "click"], ["class", "sticky-footer", 4, "ngIf"], [1, "sticky-footer"], [1, "container", "my-auto"], [1, "copyright", "text-center", "my-auto"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 11, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 42, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 9, 3, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && !ctx.isSideNavHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".toast.show[_ngcontent-%COMP%] {\r\n    display: block;\r\n    opacity: 1;\r\n}\r\n.toast[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-bottom: .75rem;\r\n}\r\n.toast[_ngcontent-%COMP%] {\r\n    max-width: 350px;\r\n    overflow: hidden;\r\n    font-size: .875rem;\r\n    background-color: rgba(255,255,255,.85);\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0,0,0,.1);\r\n    box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%);\r\n    -webkit-backdrop-filter: blur(10px);\r\n    backdrop-filter: blur(10px);\r\n    opacity: 0;\r\n    border-radius: .25rem;\r\n}\r\n.toast.error[_ngcontent-%COMP%] {\r\n    color: rgb(114, 1, 1);\r\n    background-color: rgb(240, 84, 27);\r\n}\r\n.toast.success[_ngcontent-%COMP%] {\r\n    color: rgb(2, 109, 17);\r\n    background-color: rgb(5, 199, 31);\r\n}\r\n.toast-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: .25rem .75rem;\r\n    color: #6c757d;\r\n    background-color: rgba(255,255,255,.85);\r\n    background-clip: padding-box;\r\n    border-bottom: 1px solid rgba(0,0,0,.05);\r\n}\r\n.toast-body[_ngcontent-%COMP%] {\r\n    padding: .75rem;\r\n    color: white !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2Qyw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLDhDQUE4QztJQUM5QyxtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7QUFDQTtJQUVJLGFBQWE7SUFFYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCx1Q0FBdUM7SUFDdkMsNEJBQTRCO0lBQzVCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvYXN0LnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbi50b2FzdDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcclxufVxyXG4udG9hc3Qge1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC43NXJlbSByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG59XHJcbi50b2FzdC5lcnJvciB7XHJcbiAgICBjb2xvcjogcmdiKDExNCwgMSwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCA4NCwgMjcpO1xyXG59XHJcbi50b2FzdC5zdWNjZXNzIHtcclxuICAgIGNvbG9yOiByZ2IoMiwgMTA5LCAxNyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMTk5LCAzMSk7XHJcbn1cclxuLnRvYXN0LWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IC4yNXJlbSAuNzVyZW07XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjg1KTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMDUpO1xyXG59XHJcbi50b2FzdC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IC43NXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }, { type: _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] }]; }, { subNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['subNav']
        }] }); })();


/***/ }),

/***/ "UYTb":
/*!**************************************************!*\
  !*** ./src/app/core/services/storage.service.ts ***!
  \**************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocalStorageService {
    constructor() {
    }
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    getItem(key) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    clearStorage() {
        localStorage.clear();
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Unci":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/returned-products/returned-products.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ReturnedProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnedProductsComponent", function() { return ReturnedProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "NJqk");
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toaster.service */ "ZgVV");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = ["productRet"];
function ReturnedProductsComponent_ng_container_41_ng_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", product_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r2.item_name, " ");
} }
function ReturnedProductsComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReturnedProductsComponent_ng_container_41_ng_option_1_Template, 2, 2, "ng-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isAlreadyInOrder(product_r2));
} }
class ReturnedProductsComponent {
    constructor(dataService, toastService) {
        this.dataService = dataService;
        this.toastService = toastService;
        this.selectedProduct = {};
        this.productReturned = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeReturned = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        document.getElementById('open-returned').click();
    }
    isNumber(event, type = 'charges') {
        return this.dataService.isNumber(event, type);
    }
    isAlreadyInOrder(product) {
        return this.orderReturnedItems.find(x => x.item_id === product.item_id) ? true : false;
    }
    close() {
        this.closeReturned.emit(true);
    }
    productSelected(product) {
        if (product) {
            this.selectedProduct = JSON.parse(JSON.stringify(product));
        }
    }
    setReturnedQty() {
        if (+this.selectedProduct.stockQty > 1000) {
            this.selectedProduct.stockQty = 0;
        }
        this.selectedProduct.item_quantity_booker = 0;
        this.selectedProduct.dispatch_qty = 0;
        this.selectedProduct.scheme_discount = 0;
        this.selectedProduct.unit_price_after_scheme_discount = this.selectedProduct.item_trade_price;
        this.selectedProduct.special_discount = 0;
        this.selectedProduct.unit_price_after_special_discount = this.selectedProduct.item_trade_price;
        this.selectedProduct.special_discount_pkr = 0;
        this.selectedProduct.trade_discount = 0;
        this.selectedProduct.unit_price_after_merchant_discount = this.selectedProduct.item_trade_price;
        this.selectedProduct.booker_discount = 0;
        this.selectedProduct.unit_price_after_individual_discount = this.selectedProduct.item_trade_price;
        this.selectedProduct.trade_discount_pkr = 0;
        this.selectedProduct.tax_amount_pkr = 0;
        this.selectedProduct.tax_class_amount = 0;
        this.selectedProduct.gross_amount = -(this.selectedProduct.item_trade_price * this.selectedProduct.stockQty);
        this.selectedProduct.original_amount = -(this.selectedProduct.item_trade_price * this.selectedProduct.stockQty);
        this.selectedProduct.total_retail_price = -(this.selectedProduct.item_retail_price * this.selectedProduct.stockQty);
        if (this.selectedProduct.extra_discount) {
            this.selectedProduct.booker_discount = +this.selectedProduct.extra_discount;
            this.selectedProduct.unit_price_after_individual_discount = this.selectedProduct.item_trade_price
                - this.selectedProduct.booker_discount;
        }
        this.selectedProduct.net_amount = -(this.selectedProduct.unit_price_after_individual_discount
            * this.selectedProduct.stockQty);
    }
    setExtraDiscount() {
        if (this.selectedProduct.stockQty) {
            if (this.checkDiscount()) {
                this.selectedProduct.booker_discount = +this.selectedProduct.extra_discount;
                this.selectedProduct.unit_price_after_individual_discount = this.selectedProduct.item_trade_price
                    - this.selectedProduct.booker_discount;
                this.selectedProduct.net_amount = -(this.selectedProduct.unit_price_after_individual_discount
                    * this.selectedProduct.stockQty);
            }
        }
    }
    checkDiscount() {
        if (this.selectedProduct.extra_discount && +this.selectedProduct.extra_discount > this.selectedProduct.item_trade_price) {
            this.resetDiscount();
            return false;
        }
        return true;
    }
    resetDiscount() {
        const toast = { type: 'error', title: 'Incorrect discount:',
            message: `Discount should not be greater than item price!` };
        this.toastService.showToaster(toast);
        this.selectedProduct.extra_discount = 0;
        this.setExtraDiscount();
    }
    addReturned() {
        const toast = { type: 'error', title: 'Fill the fields:', message: 'Please fill all the required fields before adding!' };
        if (!this.selectedProduct.hasOwnProperty('item_name') || !this.selectedProduct.net_amount
            || !this.selectedProduct.returnType || !this.selectedProduct.stockQty) {
            this.toastService.showToaster(toast);
        }
        else if (this.selectedProduct.extra_discount && +this.selectedProduct.extra_discount > this.selectedProduct.item_trade_price) {
            this.resetDiscount();
        }
        else {
            this.selectedProduct.productType = 'returned';
            this.selectedProduct.item_quantity_booker = 0;
            this.productReturned.emit(this.selectedProduct);
            this.selectedProduct = {};
            this.productRet.handleClearClick();
        }
    }
}
ReturnedProductsComponent.ɵfac = function ReturnedProductsComponent_Factory(t) { return new (t || ReturnedProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"])); };
ReturnedProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReturnedProductsComponent, selectors: [["app-returned-products"]], viewQuery: function ReturnedProductsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.productRet = _t.first);
    } }, inputs: { productsList: "productsList", orderReturnedItems: "orderReturnedItems" }, outputs: { productReturned: "productReturned", closeReturned: "closeReturned" }, decls: 64, vars: 8, consts: [["id", "returnsmodal", "role", "dialog", "data-backdrop", "static", "data-keyboard", "false", "aria-labelledby", "returnsModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "900px"], [1, "modal-content", "top_border"], [1, "modal-header"], ["id", "returnsModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "col-12", "PT-10"], ["id", "floating-label", 1, "form-wrap", "p-0"], [1, "row"], [1, "table", "dt-responsive", "nowrap", "table-padd", 2, "width", "100%"], [2, "width", "70px"], [1, "form-s2"], ["placeholder", "Select Product", "id", "ret-product", "name", "ret-product", 1, "formselect", 2, "width", "230px", 3, "change"], ["productRet", ""], [4, "ngFor", "ngForOf"], ["type", "number", "id", "ret-qty", "name", "ret-qty", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup", "keydown"], ["type", "number", "id", "ret-dis", "name", "ret-dis", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange", "keydown"], ["type", "text", "id", "ret-val", "name", "ret-val", "readonly", "", 1, "form-control", 3, "value"], ["name", "return-type", "placeholder", "Select Sellable", 1, "form-control", "formselect", 2, "width", "230px", 3, "ngModel", "ngModelChange"], ["value", "Sellable"], ["value", "Damage"], [1, "btn", "btn-primary", "add_return_item", 3, "click"], [1, "modal-footer", "border-0"], ["type", "submit", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-cancel", 3, "click"], ["id", "open-returned", "data-toggle", "modal", "data-target", "#returnsmodal", 1, "dont-close-returned", 2, "display", "none"], [3, "value", 4, "ngIf"], [3, "value"]], template: function ReturnedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Returns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnedProductsComponent_Template_button_click_8_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Select Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "QTY.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "DISC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ng-select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReturnedProductsComponent_Template_ng_select_change_39_listener($event) { return ctx.productSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ReturnedProductsComponent_ng_container_41_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnedProductsComponent_Template_input_ngModelChange_43_listener($event) { return ctx.selectedProduct.stockQty = $event; })("keyup", function ReturnedProductsComponent_Template_input_keyup_43_listener() { return ctx.setReturnedQty(); })("keydown", function ReturnedProductsComponent_Template_input_keydown_43_listener($event) { return ctx.isNumber($event, "quantity"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ReturnedProductsComponent_Template_input_keyup_45_listener() { return ctx.setExtraDiscount(); })("ngModelChange", function ReturnedProductsComponent_Template_input_ngModelChange_45_listener($event) { return ctx.selectedProduct.extra_discount = $event; })("keydown", function ReturnedProductsComponent_Template_input_keydown_45_listener($event) { return ctx.isNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnedProductsComponent_Template_select_ngModelChange_51_listener($event) { return ctx.selectedProduct.returnType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Sellable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Damage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnedProductsComponent_Template_button_click_57_listener() { return ctx.addReturned(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnedProductsComponent_Template_button_click_60_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Open Modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedProduct.stockQty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedProduct.extra_discount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 5, ctx.selectedProduct.net_amount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedProduct.returnType);
    } }, directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".table-padd th {\r\n    padding: 5px;\r\n}\r\n.table-padd td  {\r\n    padding: 10px 5px;\r\n}\r\n/* Chrome, Safari, Edge, Opera */\r\ninput::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none;  margin: 0;}\r\n/* Firefox */\r\ninput[type=number] {-moz-appearance: textfield;}\r\n.ng-select .ng-clear-wrapper {display: none;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9yZXR1cm5lZC1wcm9kdWN0cy9yZXR1cm5lZC1wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0EsZ0NBQWdDO0FBQ2hDLHFFQUFxRSx3QkFBd0IsR0FBRyxTQUFTLENBQUM7QUFDMUcsWUFBWTtBQUFDLG9CQUFvQiwwQkFBMEIsQ0FBQztBQUM1RCw4QkFBOEIsYUFBYSxDQUFDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9yZXR1cm5lZC1wcm9kdWN0cy9yZXR1cm5lZC1wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXBhZGQgdGgge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi50YWJsZS1wYWRkIHRkICB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxufVxyXG4vKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAgbWFyZ2luOiAwO31cclxuLyogRmlyZWZveCAqL2lucHV0W3R5cGU9bnVtYmVyXSB7LW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7fVxyXG4ubmctc2VsZWN0IC5uZy1jbGVhci13cmFwcGVyIHtkaXNwbGF5OiBub25lO30iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReturnedProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-returned-products',
                templateUrl: './returned-products.component.html',
                styleUrls: ['./returned-products.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }]; }, { productsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orderReturnedItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], productRet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['productRet']
        }], productReturned: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], closeReturned: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "VzUJ":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/order-items/order-items.component.ts ***!
  \********************************************************************************/
/*! exports provided: OrderItemsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemsListComponent", function() { return OrderItemsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toaster.service */ "ZgVV");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "NJqk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function OrderItemsListComponent_h2_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderItemsListComponent_h2_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderItemsListComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderItemsListComponent_a_22_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openReturnedProduct($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderItemsListComponent_tr_54_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderItemsListComponent_tr_54_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.selectedItem = item_r12; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.isChequeAdded || ctx_r14.isCreditAdded);
} }
function OrderItemsListComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function OrderItemsListComponent_tr_54_Template_input_paste_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); return $event.preventDefault(); })("keyup", function OrderItemsListComponent_tr_54_Template_input_keyup_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r12 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.setQuantity(item_r12); })("keydown", function OrderItemsListComponent_tr_54_Template_input_keydown_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.isNumber($event, "quantity"); })("ngModelChange", function OrderItemsListComponent_tr_54_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r12 = ctx.$implicit; return item_r12.stockQty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function OrderItemsListComponent_tr_54_Template_input_paste_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); return $event.preventDefault(); })("ngModelChange", function OrderItemsListComponent_tr_54_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r12 = ctx.$implicit; return item_r12.extra_discount = $event; })("keyup", function OrderItemsListComponent_tr_54_Template_input_keyup_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r12 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.calculateExtraDiscount(item_r12); })("keydown", function OrderItemsListComponent_tr_54_Template_input_keydown_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.isNumber($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, OrderItemsListComponent_tr_54_button_27_Template, 2, 1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx_r3.orderType !== "execution" && !item_r12.item_quantity_booker || ctx_r3.orderType === "execution" && !item_r12.dispatch_qty) && item_r12.isDeleted ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.orderType !== "execution" ? item_r12.item_quantity_booker : item_r12.dispatch_qty || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r12.item_name)("disabled", ctx_r3.isChequeAdded || ctx_r3.isCreditAdded)("name", item_r12.item_name)("ngModel", item_r12.stockQty)("max", 999);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 19, item_r12.item_trade_price, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 22, item_r12.original_amount || 0, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 25, item_r12.scheme_discount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r12.trade_discount, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 28, item_r12.special_discount * item_r12.stockQty, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r12.item_id)("disabled", ctx_r3.isChequeAdded || ctx_r3.isCreditAdded || +item_r12.stockQty < 1)("name", item_r12.item_id)("ngModel", item_r12.extra_discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 31, item_r12.net_amount || 0, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r12.isDeleted);
} }
function OrderItemsListComponent_tr_55_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderItemsListComponent_tr_55_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.selectedItem = item_r27; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderItemsListComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function OrderItemsListComponent_tr_55_Template_input_paste_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); return $event.preventDefault(); })("keyup", function OrderItemsListComponent_tr_55_Template_input_keyup_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const item_r27 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.setReturnedQty(item_r27); })("keydown", function OrderItemsListComponent_tr_55_Template_input_keydown_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.isNumber($event, "quantity"); })("ngModelChange", function OrderItemsListComponent_tr_55_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const item_r27 = ctx.$implicit; return item_r27.stockQty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function OrderItemsListComponent_tr_55_Template_input_paste_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); return $event.preventDefault(); })("ngModelChange", function OrderItemsListComponent_tr_55_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const item_r27 = ctx.$implicit; return item_r27.extra_discount = $event; })("keyup", function OrderItemsListComponent_tr_55_Template_input_keyup_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const item_r27 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.setExtraDiscount(item_r27); })("keydown", function OrderItemsListComponent_tr_55_Template_input_keydown_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.isNumber($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, OrderItemsListComponent_tr_55_button_27_Template, 2, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !item_r27.item_quantity_booker && item_r27.isDeleted ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r27.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r27.dispatch_qty || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r27.item_name)("disabled", ctx_r4.isChequeAdded || ctx_r4.isCreditAdded)("name", item_r27.item_name)("ngModel", item_r27.stockQty)("max", 999);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 19, item_r27.item_trade_price, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 22, item_r27.gross_amount || 0, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 25, item_r27.scheme_discount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r27.trade_discount, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 28, item_r27.special_discount * item_r27.stockQty, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.isChequeAdded || ctx_r4.isCreditAdded || +item_r27.stockQty < 1)("id", item_r27.item_id)("name", item_r27.item_id)("ngModel", item_r27.extra_discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 31, item_r27.net_amount || 0, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r27.isDeleted);
} }
function OrderItemsListComponent_h4_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No items to display yet please select order!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderItemsListComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Less Return:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx_r6.returnAmount, "1.2-2"));
} }
function OrderItemsListComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Amount Due: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx_r7.netAmount, "1.2-2"));
} }
function OrderItemsListComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Bill: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx_r8.grossAmount - ctx_r8.totalSchemeDiscount - ctx_r8.totalMerchantDiscount - ctx_r8.totalSpecialDiscount - ctx_r8.totalBookerDiscount + ctx_r8.returnAmount + ctx_r8.totalTax, "1.2-2"));
} }
function OrderItemsListComponent_div_106_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recovery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderItemsListComponent_div_106_div_9_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.orderDetail.recovered = $event; })("keydown", function OrderItemsListComponent_div_106_div_9_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.isNumber($event); })("keyup", function OrderItemsListComponent_div_106_div_9_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.checkRecovery(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r42.isChequeAdded || ctx_r42.isCreditAdded)("ngModel", ctx_r42.orderDetail.recovered);
} }
function OrderItemsListComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Amount Due:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OrderItemsListComponent_div_106_div_9_Template, 6, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Net Receivable:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cheque:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cash Payment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Total Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Credit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, ctx_r9.dueAmount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.currentTab === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 10, ctx_r9.receivableAmount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 13, (ctx_r9.cheque == null ? null : ctx_r9.cheque.amount_received) || 0, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 16, (ctx_r9.cash == null ? null : ctx_r9.cash.amount_received) || 0, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 19, ctx_r9.totalPayment, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 22, (ctx_r9.credit == null ? null : ctx_r9.credit.amount_received) || 0, "1.2-2"));
} }
class OrderItemsListComponent {
    constructor(toastService, dataService) {
        this.toastService = toastService;
        this.dataService = dataService;
        this.openDrawer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openReturnedModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveCurrentOrder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelCurrentOrder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteReturned = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.productUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resetValues();
    }
    ngOnInit() {
        this.showProducts = false;
    }
    ngOnChanges(changes) {
        var _a, _b, _c;
        if (changes.orderDetail && ((_a = changes.orderDetail.currentValue) === null || _a === void 0 ? void 0 : _a.items)) {
            this.calculateTotalBill();
        }
        if ((_b = changes.newProduct) === null || _b === void 0 ? void 0 : _b.currentValue) {
            this.orderDetail.items.push(this.newProduct);
            this.setQuantity(this.newProduct);
        }
        if ((_c = changes.savingOrder) === null || _c === void 0 ? void 0 : _c.currentValue) {
            this.resetValues();
        }
    }
    resetValues() {
        this.totalTax = 0;
        this.netAmount = 0;
        this.grossAmount = 0;
        this.totalBookerDiscount = 0;
        this.totalSchemeDiscount = 0;
        this.totalSpecialDiscount = 0;
        this.totalMerchantDiscount = 0;
        this.selectedProductQuantities = 0;
    }
    openProductsList(event) {
        var _a;
        event.stopPropagation();
        if ((_a = this.selectedRetailer) === null || _a === void 0 ? void 0 : _a.retailer_id) {
            this.openDrawer.emit();
        }
        else {
            this.toastService.showToaster({
                type: 'error',
                title: 'Error:',
                message: 'Please select order to add products!'
            });
        }
    }
    openReturnedProduct(event) {
        var _a;
        event.stopPropagation();
        if ((_a = this.selectedRetailer) === null || _a === void 0 ? void 0 : _a.retailer_id) {
            this.openReturnedModal.emit();
        }
        else {
            this.toastService.showToaster({
                type: 'error',
                title: 'Error:',
                message: 'Please select order to add returned products!'
            });
        }
    }
    isNumber(event, type = 'charges') {
        return this.dataService.isNumber(event, type);
    }
    deleteProduct() {
        if (this.selectedItem.productType === 'returned') {
            this.deleteReturned.emit(this.selectedItem);
        }
        else {
            if (this.selectedItem.id) {
                this.selectedItem.stockQty = 0;
                this.setQuantity(this.selectedItem);
                this.selectedItem.isDeleted = true;
                // this.selectedItem.item_status = 0;
            }
            else {
                this.orderDetail.items = this.orderDetail.items.filter(x => x.item_id !== this.selectedItem.item_id);
                this.grossAmount = this.grossAmount - this.selectedItem.original_amount;
                this.applySlabOnAllProducts();
            }
            this.productUpdated.emit();
            document.getElementById('close-prod-del').click();
        }
    }
    setQuantity(product) {
        if (+product.stockQty > 1000) {
            product.stockQty = 0;
        }
        if (this.orderType === 'execution') {
            const prod = this.allProducts.find(x => x.item_id === product.item_id);
            if ((product.id && +product.stockQty > (prod.available_qty + product.executed_qty)) ||
                (!product.id && +product.stockQty > prod.available_qty)) {
                const toast = {
                    message: 'Executed quantity cannot be greater than available quantity!', type: 'error',
                    title: 'Quantity Error:'
                };
                this.toastService.showToaster(toast);
                product.stockQty = 0;
            }
        }
        if (product.item_trade_price) {
            if (this.orderType !== 'execution' && product.item_quantity_booker > 0 && +product.stockQty === 0) {
                product.isDeleted = true;
            }
            else if (this.orderType === 'execution' && product.dispatch_qty > 0 && +product.stockQty === 0) {
                product.isDeleted = true;
            }
            else {
                product.isDeleted = false;
            }
            if (this.orderDetail.items.find(x => x.item_id === product.item_id)) {
                this.grossAmount = this.grossAmount - product.original_amount;
            }
            product.parent_qty_sold = this.dataService.getParentQty(+product.stockQty, product.parent_quantity || product.quantity);
            this.calculateProductDiscounts(product);
            this.calculateProductPrice(product);
            this.calculateTotalBill();
            this.applySlabOnAllProducts();
            this.productUpdated.emit();
        }
    }
    setReturnedQty(product) {
        var _a;
        const productAvalableQty = (_a = this.allProducts.find(x => x.item_id === product.item_id)) === null || _a === void 0 ? void 0 : _a.available_qty;
        if (productAvalableQty < product.quantity_returned && +product.stockQty < product.quantity_returned &&
            product.return_type !== 'damage') {
            this.toastService.showToaster({
                title: 'Returned Product:',
                message: 'The selected product is part of other order please remove from other orders to update the quantity!',
                type: 'error'
            });
            product.stockQty = product.quantity_returned;
            return;
        }
        if (+product.stockQty > 1000) {
            product.stockQty = product.quantity_returned;
        }
        product.gross_amount = -(product.item_trade_price * product.stockQty);
        product.original_amount = -(product.item_trade_price * product.stockQty);
        product.total_retail_price = -(product.item_retail_price * product.stockQty);
        if (product.extra_discount) {
            product.booker_discount = +product.extra_discount;
            product.unit_price_after_individual_discount = product.item_trade_price
                - product.booker_discount;
        }
        product.net_amount = -(product.unit_price_after_individual_discount
            * product.stockQty);
        this.productUpdated.emit();
    }
    setExtraDiscount(product) {
        if (product.stockQty) {
            if (this.checkDiscount(product)) {
                product.booker_discount = +product.extra_discount;
                product.unit_price_after_individual_discount = product.item_trade_price
                    - product.booker_discount;
                product.net_amount = -(product.unit_price_after_individual_discount
                    * product.stockQty);
                this.productUpdated.emit();
            }
        }
    }
    checkDiscount(product) {
        if (product.extra_discount && +product.extra_discount > product.item_trade_price) {
            this.resetDiscount(product);
            return false;
        }
        return true;
    }
    resetDiscount(product) {
        const toast = {
            type: 'error', title: 'Incorrect discount:',
            message: `Discount should not be greater than item price!`
        };
        this.toastService.showToaster(toast);
        product.extra_discount = 0;
        this.setExtraDiscount(product);
    }
    applySlabOnAllProducts() {
        if (this.merchantDiscount && this.merchantDiscount.discount_filter === 'slab') {
            this.orderDetail.items = this.orderDetail.items.map(product => {
                product = this.dataService.applySlabForTotal(product, this.merchantDiscount, this.grossAmount);
                product = this.calculateProductSpecialDiscount(product);
                if (product.extra_discount) {
                    product.price = product.unit_price_after_special_discount - +product.extra_discount;
                }
                this.calculateNetAmountOfProduct(product);
                return product;
            });
            this.calculateTotalBill();
        }
    }
    calculateProductPrice(product) {
        product.original_amount = this.dataService.calculateUnitPrice(+product.stockQty, product.item_trade_price);
        product.gross_amount = product.unit_price_after_scheme_discount * +product.stockQty;
    }
    calculateProductDiscounts(product, scheme) {
        // Trade Offer
        if (scheme) {
            product.selectedScheme = scheme;
        }
        if (product.selectedScheme) {
            product = this.applyScheme(product);
        }
        else {
            product.scheme_discount = 0;
            product.price = JSON.parse(JSON.stringify(product.item_trade_price));
            product.unit_price_after_scheme_discount = JSON.parse(JSON.stringify(product.item_trade_price));
        }
        // Trade Discount
        if (this.merchantDiscount) {
            product = this.dataService.applyMerchantDiscountForSingleProduct(this.merchantDiscount, product, this.grossAmount);
        }
        else {
            product.trade_discount = 0;
            product.trade_discount_pkr = 0;
            product.unit_price_after_merchant_discount = JSON.parse(JSON.stringify(product.price));
        }
        // Special Discount
        product = this.calculateProductSpecialDiscount(product);
        // Extra Discount => Booker Discount
        if (!product.extra_discount || +product.stockQty < 1) {
            product.extra_discount = 0;
            product.extra_discount_pkr = 0;
            this.calculateNetAmountOfProduct(product);
        }
        else {
            this.calculateExtraDiscount(product);
        }
    }
    calculateProductSpecialDiscount(product) {
        return this.dataService.getSpecialDiscounts(this.selectedRetailer.segment_id, this.selectedRetailer.region_id, product, this.specialDiscounts);
    }
    calculateExtraDiscount(product) {
        if (+product.extra_discount < product.unit_price_after_special_discount) {
            product.price = product.unit_price_after_special_discount - +product.extra_discount;
            product.extra_discount_pkr = +product.stockQty * +product.extra_discount;
        }
        else {
            product.extra_discount = 0;
            product.extra_discount_pkr = 0;
            product.price = product.unit_price_after_special_discount;
            const toast = { type: 'error', message: 'Discount should not be greater than item price!', title: 'Error:' };
            this.toastService.showToaster(toast);
        }
        this.calculateNetAmountOfProduct(product);
        this.productUpdated.emit();
        this.calculateTotalBill();
    }
    calculateNetAmountOfProduct(product) {
        product.net_amount = this.dataService.calculateUnitPrice(product.price, +product.stockQty);
        this.calculateProductTax(product);
    }
    calculateProductTax(product) {
        if (product.tax_class_amount) {
            product.tax_amount_value = (product.tax_class_amount / 100) * product.item_retail_price;
            product.tax_amount_pkr = product.tax_amount_value * product.stockQty;
            product.net_amount = product.net_amount + product.tax_amount_pkr;
        }
        else {
            product.tax_amount_value = 0;
            product.tax_amount_pkr = 0;
        }
    }
    applyScheme(product) {
        switch (product.selectedScheme.scheme_type) {
            case 'free_product':
                product = this.applyFreeProductScheme(product);
                break;
            case 'dotp':
                product = this.applyDOTPScheme(product);
                break;
            default:
                product = this.applyGiftScheme(product);
                break;
        }
        return product;
    }
    applyFreeProductScheme(product) {
        product = this.dataService.applyFreeProductScheme(product);
        return product;
    }
    applyDOTPScheme(product) {
        return this.dataService.getSDForDOTP(product);
    }
    applyGiftScheme(product) {
        return this.dataService.getSDForGift(product);
    }
    checkRecovery() {
        if (+this.orderDetail.recovered > this.recoveryAmount) {
            this.toastService.showToaster({
                title: 'Recovery Error:',
                message: `The recovered amount cannot be greater than the credit (${this.recoveryAmount})`,
                type: 'error'
            });
            this.orderDetail.recovered = 0;
        }
        this.productUpdated.emit();
    }
    calculateTotalBill() {
        if (this.orderDetail.items.length) {
            this.selectedProductQuantities = this.orderDetail.items
                .map(product => +product.parent_qty_sold).reduce((a, b) => a + b);
        }
        // Gross Amount
        let prices = this.orderDetail.items.map(product => product.original_amount);
        this.grossAmount = this.dataService.calculateItemsBill(prices);
        // Net Amount
        prices = this.orderDetail.items.map(product => product.net_amount);
        this.netAmount = this.dataService.calculateItemsBill(prices);
        if (this.selectedRetailer && this.orderType !== 'execution') {
            // this.selectedRetailer.order_total = this.netAmount;
            this.orders.find(x => x.id === this.selectedRetailer.id).order_total = this.netAmount;
        }
        // Total Retail Price
        prices = this.orderDetail.items.map(product => +product.stockQty * product.item_retail_price);
        const totalRetailPrice = this.dataService.calculateItemsBill(prices);
        // Scheme Discount
        let discount = this.orderDetail.items.map(product => (+product.stockQty * product.scheme_discount));
        this.totalSchemeDiscount = this.dataService.calculateItemsBill(discount);
        // Trade Discount
        discount = this.orderDetail.items.map(product => (+product.stockQty * product.trade_discount_pkr));
        this.totalMerchantDiscount = this.dataService.calculateItemsBill(discount);
        // Special Discount
        discount = this.orderDetail.items.map(product => +product.stockQty * product.special_discount_pkr);
        this.totalSpecialDiscount = this.dataService.calculateItemsBill(discount);
        // Extra Discount
        discount = this.orderDetail.items.map(product => +product.extra_discount_pkr);
        this.totalBookerDiscount = this.dataService.calculateItemsBill(discount);
        // Tax
        const taxes = this.orderDetail.items.map(product => product.tax_amount_pkr);
        this.totalTax = this.dataService.calculateItemsBill(taxes);
        this.orderDetail.total_amount_after_tax = this.netAmount;
        if (this.orderType === 'execution') {
            if (this.selectedRetailer) {
                // this.selectedRetailer.order_total = this.totalPayment;
                let order;
                if (this.currentTab === 1) {
                    order = this.orders.find(x => x.id === this.selectedRetailer.id);
                }
                else {
                    order = this.orders.find(x => x.retailer_id === this.selectedRetailer.retailer_id);
                }
                if (order) {
                    order.order_total = this.dueAmount;
                }
            }
            this.orderDetail.order_total = this.dueAmount;
            this.orderDetail.total_amount_after_tax = this.dueAmount;
        }
        this.orderDetail.total_discount = this.totalSchemeDiscount +
            this.totalMerchantDiscount +
            this.totalSpecialDiscount +
            this.totalBookerDiscount;
        this.orderDetail.gross_sale_amount = this.grossAmount;
        this.orderDetail.total_retail_price = totalRetailPrice;
        this.orderDetail.ttl_qty_sold = this.selectedProductQuantities;
        this.orderDetail.ttl_products_sold = this.orderDetail.items.length;
    }
}
OrderItemsListComponent.ɵfac = function OrderItemsListComponent_Factory(t) { return new (t || OrderItemsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
OrderItemsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderItemsListComponent, selectors: [["app-order-items-list"]], inputs: { orderType: "orderType", returnAmount: "returnAmount", isChequeAdded: "isChequeAdded", isCreditAdded: "isCreditAdded", currentTab: "currentTab", recoveryAmount: "recoveryAmount", receivableAmount: "receivableAmount", dueAmount: "dueAmount", totalPayment: "totalPayment", cheque: "cheque", credit: "credit", cash: "cash", orderDetail: "orderDetail", selectedRetailer: "selectedRetailer", merchantDiscount: "merchantDiscount", schemes: "schemes", newProduct: "newProduct", returnedProduct: "returnedProduct", specialDiscounts: "specialDiscounts", orders: "orders", allProducts: "allProducts" }, outputs: { openDrawer: "openDrawer", openReturnedModal: "openReturnedModal", saveCurrentOrder: "saveCurrentOrder", cancelCurrentOrder: "cancelCurrentOrder", deleteReturned: "deleteReturned", productUpdated: "productUpdated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 107, vars: 36, consts: [["id", "exampleModal-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "top-borderRed"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-md-12"], [1, "modal-footer", "border-0"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "id", "close-prod-del", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-cancel"], [1, "header", "addPR-head", "mb-10"], [4, "ngIf"], ["class", "btn add_button addpr addReturn", 3, "click", 4, "ngIf"], ["id", "productlist01", 1, "btn", "add_button", "addpr", 3, "click"], [1, "fa", "fa-plus", 2, "margin-right", "3.5px"], [1, "col-12", "retailerTable"], [1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%"], [2, "width", "200px"], [2, "width", "48px"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "no-products", 4, "ngIf"], [1, "row"], [1, "col"], [1, "col-auto"], [1, "total-valu-div"], [1, "col-6"], ["class", "row", 4, "ngIf"], ["class", "col-auto", 4, "ngIf"], [1, "btn", "add_button", "addpr", "addReturn", 3, "click"], [3, "ngClass"], ["type", "number", "placeholder", "0", 1, "form-control", "value_input", 3, "id", "disabled", "name", "ngModel", "max", "paste", "keyup", "keydown", "ngModelChange"], ["type", "number", "placeholder", "0", 1, "form-control", "value_input", 3, "id", "disabled", "name", "ngModel", "paste", "ngModelChange", "keyup", "keydown"], ["type", "button", "class", "del_item btn smBTN red-bg", "data-toggle", "modal", "data-target", "#exampleModal-del", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal-del", 1, "del_item", "btn", "smBTN", "red-bg", 3, "disabled", "click"], ["type", "text", "placeholder", "0", 1, "form-control", "value_input", 3, "id", "disabled", "name", "ngModel", "max", "paste", "keyup", "keydown", "ngModelChange"], ["type", "text", "placeholder", "0", 1, "form-control", "value_input", 3, "disabled", "id", "name", "ngModel", "paste", "ngModelChange", "keyup", "keydown"], ["type", "button", "class", "del_item btn smBTN red-bg", "data-toggle", "modal", "data-target", "#exampleModal-del", 3, "click", 4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal-del", 1, "del_item", "btn", "smBTN", "red-bg", 3, "click"], [1, "no-products"], [1, "col-6", 2, "color", "#0038ba"], [1, "col-6", 2, "float", "right"], ["type", "number", "name", "recovered", "id", "recovered", 1, "form-control", "recovered", 2, "text-align", "right", 3, "disabled", "ngModel", "ngModelChange", "keydown", "keyup"]], template: function OrderItemsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Are you sure you want to delete?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderItemsListComponent_Template_button_click_15_listener() { return ctx.deleteProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OrderItemsListComponent_h2_20_Template, 4, 0, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OrderItemsListComponent_h2_21_Template, 4, 0, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, OrderItemsListComponent_a_22_Template, 4, 0, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderItemsListComponent_Template_a_click_23_listener($event) { return ctx.openProductsList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "T.P.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "GR.Amt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "T.O.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "T.Disc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Spec.Disc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "B.Disc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Net Amt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, OrderItemsListComponent_tr_54_Template, 28, 34, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, OrderItemsListComponent_tr_55_Template, 28, 34, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, OrderItemsListComponent_h4_56_Template, 2, 0, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Gross Amount: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Trade Offer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Trade Discount: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Special Discount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Booker Discount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](95, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Tax:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](102, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, OrderItemsListComponent_div_103_Template, 7, 4, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, OrderItemsListComponent_div_104_Template, 7, 4, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, OrderItemsListComponent_div_105_Template, 7, 4, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, OrderItemsListComponent_div_106_Template, 45, 25, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderType === "dispatch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderType === "execution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderType === "execution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orderType === "dispatch" ? "Bkd Qty" : "Disp.Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orderType === "dispatch" ? "Dely.Qty" : "Exec.Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderDetail == null ? null : ctx.orderDetail.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderDetail == null ? null : ctx.orderDetail.returned_items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.orderDetail == null ? null : ctx.orderDetail.items == null ? null : ctx.orderDetail.items.length) && !(ctx.orderDetail == null ? null : ctx.orderDetail.returned_items == null ? null : ctx.orderDetail.returned_items.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](67, 18, ctx.grossAmount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](74, 21, ctx.totalSchemeDiscount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](81, 24, ctx.totalMerchantDiscount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](88, 27, ctx.totalSpecialDiscount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](95, 30, ctx.totalBookerDiscount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](102, 33, ctx.totalTax, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderType === "execution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderType !== "execution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderType === "execution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderType === "execution");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".retailerTable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { font-size: 12px; border: solid 1px #fff !important; vertical-align: middle; padding: 2px 5px!important; }\r\n.retailerTable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { font-size: 12px!important; padding: 5px 4px!important; vertical-align: middle; line-height: 1 }\r\n.value_input[_ngcontent-%COMP%] { padding: 2px; margin: 0!important; font-size: 12px; box-shadow: none; height: 22px; width: 52px; border: solid 1px #e2e6ea; }\r\n.total-valu-div[_ngcontent-%COMP%]{width:280px; min-height: 173px; font-size: 13px; padding-left: 20px; padding-right: 20px; margin-left: auto; margin-right: 0; padding-top: 5px; background-color: #f7f7f7; border: solid 1px #ececec}\r\n.total-valu-div[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{border-bottom:solid 1px #e8e6e6}\r\n.total-valu-div[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]{padding:2px; line-height: 1.5;font-family: proximanova-semibold, sans-serif!important; }\r\n.total-valu-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family: 'Rationale', sans-serif; line-height: 1.1; font-size: 18px; text-align: right; display: block}\r\n.addPR-head[_ngcontent-%COMP%] { padding: 15px 15px 0px 20px !important; background:none!important }\r\n.addpr[_ngcontent-%COMP%]{padding: 4px 8px; font-size: 12px; top: 11px; right: 15px;}\r\n.addpr[_ngcontent-%COMP%] {padding: 4px 8px;font-size: 12px;top: 11px;right: 15px; cursor: pointer; }\r\n.no-products[_ngcontent-%COMP%] {text-align: center; color: lightgray;}\r\n.addReturn[_ngcontent-%COMP%]{right: 128px; box-shadow: none}\r\n.recovered[_ngcontent-%COMP%] { height: calc(1.25rem + 2px) !important;font-family: 'Rationale', sans-serif;font-size: 18px;padding: 2px !important; }\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button { -webkit-appearance: none;  margin: 0;}\r\n\r\ninput[type=number][_ngcontent-%COMP%] {-moz-appearance: textfield;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9vcmRlci1pdGVtcy9vcmRlci1pdGVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQyxlQUFlLEVBQUUsaUNBQWlDLEVBQUUsc0JBQXNCLEVBQUUsMEJBQTBCLEVBQUU7QUFDekksaUNBQWlDLHlCQUF5QixFQUFFLDBCQUEwQixFQUFFLHNCQUFzQixFQUFFLGVBQWU7QUFDL0gsZUFBZSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUseUJBQXlCLEVBQUU7QUFDM0ksZ0JBQWdCLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLHlCQUF5QixFQUFFLHlCQUF5QjtBQUNwTixxQkFBcUIsK0JBQStCO0FBQ3BELDRCQUE0QixXQUFXLEVBQUUsZ0JBQWdCLENBQUMsdURBQXVELEVBQUU7QUFDbkgscUJBQXFCLG9DQUFvQyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxjQUFjO0FBQy9ILGNBQWMsc0NBQXNDLEVBQUUsMEJBQTBCO0FBQ2hGLE9BQU8sZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUM7QUFDakUsUUFBUSxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUU7QUFDakYsY0FBYyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQztBQUNuRCxXQUFXLFlBQVksRUFBRSxnQkFBZ0I7QUFDekMsYUFBYSxzQ0FBc0MsQ0FBQyxvQ0FBb0MsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLEVBQUU7QUFDbEksZ0NBQWdDO0FBQ2hDLHFFQUFxRSx3QkFBd0IsR0FBRyxTQUFTLENBQUM7QUFDMUcsWUFBWTtBQUNaLG9CQUFvQiwwQkFBMEIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvb3JkZXItaXRlbXMvb3JkZXItaXRlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXRhaWxlclRhYmxlIC50YWJsZSB0aGVhZCB0aCB7IGZvbnQtc2l6ZTogMTJweDsgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZiAhaW1wb3J0YW50OyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBwYWRkaW5nOiAycHggNXB4IWltcG9ydGFudDsgfVxyXG4ucmV0YWlsZXJUYWJsZSAudGFibGUgdGJvZHkgdGQgeyBmb250LXNpemU6IDEycHghaW1wb3J0YW50OyBwYWRkaW5nOiA1cHggNHB4IWltcG9ydGFudDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgbGluZS1oZWlnaHQ6IDEgfVxyXG4udmFsdWVfaW5wdXQgeyBwYWRkaW5nOiAycHg7IG1hcmdpbjogMCFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMTJweDsgYm94LXNoYWRvdzogbm9uZTsgaGVpZ2h0OiAyMnB4OyB3aWR0aDogNTJweDsgYm9yZGVyOiBzb2xpZCAxcHggI2UyZTZlYTsgfVxyXG4udG90YWwtdmFsdS1kaXZ7d2lkdGg6MjgwcHg7IG1pbi1oZWlnaHQ6IDE3M3B4OyBmb250LXNpemU6IDEzcHg7IHBhZGRpbmctbGVmdDogMjBweDsgcGFkZGluZy1yaWdodDogMjBweDsgbWFyZ2luLWxlZnQ6IGF1dG87IG1hcmdpbi1yaWdodDogMDsgcGFkZGluZy10b3A6IDVweDsgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNzsgYm9yZGVyOiBzb2xpZCAxcHggI2VjZWNlY31cclxuLnRvdGFsLXZhbHUtZGl2IC5yb3d7Ym9yZGVyLWJvdHRvbTpzb2xpZCAxcHggI2U4ZTZlNn1cclxuLnRvdGFsLXZhbHUtZGl2IC5yb3cgLmNvbC02e3BhZGRpbmc6MnB4OyBsaW5lLWhlaWdodDogMS41O2ZvbnQtZmFtaWx5OiBwcm94aW1hbm92YS1zZW1pYm9sZCwgc2Fucy1zZXJpZiFpbXBvcnRhbnQ7IH1cclxuLnRvdGFsLXZhbHUtZGl2IHNwYW57Zm9udC1mYW1pbHk6ICdSYXRpb25hbGUnLCBzYW5zLXNlcmlmOyBsaW5lLWhlaWdodDogMS4xOyBmb250LXNpemU6IDE4cHg7IHRleHQtYWxpZ246IHJpZ2h0OyBkaXNwbGF5OiBibG9ja31cclxuLmFkZFBSLWhlYWQgeyBwYWRkaW5nOiAxNXB4IDE1cHggMHB4IDIwcHggIWltcG9ydGFudDsgYmFja2dyb3VuZDpub25lIWltcG9ydGFudCB9XHJcbi5hZGRwcntwYWRkaW5nOiA0cHggOHB4OyBmb250LXNpemU6IDEycHg7IHRvcDogMTFweDsgcmlnaHQ6IDE1cHg7fVxyXG4uYWRkcHIge3BhZGRpbmc6IDRweCA4cHg7Zm9udC1zaXplOiAxMnB4O3RvcDogMTFweDtyaWdodDogMTVweDsgY3Vyc29yOiBwb2ludGVyOyB9XHJcbi5uby1wcm9kdWN0cyB7dGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogbGlnaHRncmF5O31cclxuLmFkZFJldHVybntyaWdodDogMTI4cHg7IGJveC1zaGFkb3c6IG5vbmV9XHJcbi5yZWNvdmVyZWQgeyBoZWlnaHQ6IGNhbGMoMS4yNXJlbSArIDJweCkgIWltcG9ydGFudDtmb250LWZhbWlseTogJ1JhdGlvbmFsZScsIHNhbnMtc2VyaWY7Zm9udC1zaXplOiAxOHB4O3BhZGRpbmc6IDJweCAhaW1wb3J0YW50OyB9XHJcbi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiwgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24geyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7ICBtYXJnaW46IDA7fVxyXG4vKiBGaXJlZm94ICovXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7LW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7fVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderItemsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-items-list',
                templateUrl: 'order-items.component.html',
                styleUrls: ['./order-items.component.css'],
            }]
    }], function () { return [{ type: src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, { orderType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], returnAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isChequeAdded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isCreditAdded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], recoveryAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], receivableAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dueAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalPayment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cheque: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], credit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cash: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orderDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedRetailer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], merchantDiscount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], schemes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newProduct: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], returnedProduct: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], specialDiscounts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orders: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allProducts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openDrawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], openReturnedModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], saveCurrentOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cancelCurrentOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteReturned: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], productUpdated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "XSw2":
/*!****************************************************!*\
  !*** ./src/app/core/constants/schemes.constant.ts ***!
  \****************************************************/
/*! exports provided: schemes, freeProductsRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schemes", function() { return schemes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeProductsRules", function() { return freeProductsRules; });
const schemes = {
    dotp: 'Discount on Trade Price',
    free_products: 'Free Products',
    gift: 'Gift',
};
const freeProductsRules = {
    1: 'Discount on Trade Price',
    2: 'Discount on half quantity',
    3: 'Discount on Minimum quantity restriction',
    4: 'Free products',
};
/** Discount Implementation Rules For Free Products */
// 1. Discount on Trade Price
/**
 * 1. No constraint to check if the discount is applicable.
 * 2. Calculate the total trade price for the minimum quantity (i.e. TradePrice * MinimumQty => e.g. 1.72 * 5 = 8.6)
 * 3. Total items for the Scheme (i.e. MinimumQty + FreeQty => e.g. 5 + 2 = 7)
 * 4. Calculate discount (i.e. ToatalTradePriceForMinimumQty / TotalItem => e.g. 8.6/7 = 1.23)
 * 5. Trade Price for Single Item (TradePrice - discount => e.g. 1.72 - 1.23 = 0.49)
 * 6. Scheme Discount = TradePriceForSingleItem * QtyEnteredByUser
 * 7. Net Amount = TotalTradePriceItemsWithQty - SchemeDiscount
 */
// 2. Discount on Half Quantity
/**
 * 1. It has the restriction by half of the minimum quantity
 * 2. The Discount is applicable if and only if
 * the User Entered Qty is greater than the half of minimum quantity (e.g. 6/2 = 3(EligibleQty))
 * 3. Calculate the free quantity portion by dividing the UserEnteredQty over EligibleQty (e.g. 8/3 = 2.7 (get the floor) => 2)]
 * 4. Get Total Free Qty of Order by Multiplying FreeQtyPortion with scheme Free Qty (e.g. 2 * 2 = 4)
 * 5. Calculate the total trade price for the minimum quantity (i.e. TradePrice * MinimumQty => e.g. 1.72 * 6 = 10.32)
 * 6. Total items for the Scheme (i.e. MinimumQty + TotalFreeQty => e.g. 6 + 4 = 10)
 * 7. Calculate discount (i.e. ToatalTradePriceForMinimumQty / TotalItem => e.g. 10.32/10 = 1.032)
 * 8. SchemeAmount (TradePrice - discount => e.g. 1.72 - 1.032 = 0.68)
 * 9. Scheme Discount = SchemeAmount * QtyEnteredByUser
 * 10. Net Amount = TotalTradePriceItemsWithQty - SchemeDiscount
 */
// 3. Discount on Minimum Quantity Restriction
/**
 * 1. It has the restriction of minimum quantity
 * 2. The discount is applicable if and only if the user entered quantity is greater than the minimum qty of scheme
 * (i.e. UserEnterdQty > MinimumQty => e.g. 10 > 6 (apply) || 4 > 6 (reject))
 * 3. Calculate the free quantity portion by dividing the UserEnteredQty over MinimumQty (e.g. 23/6 = 3.8 (get the floor) => 3)]
 * 4. Get Total Free Qty of Order by Multiplying FreeQtyPortion with scheme Free Qty (e.g. 3 * 2 = 6)
 * 5. Calculate the total trade price for the minimum quantity (i.e. TradePrice * MinimumQty => e.g. 1.72 * 6 = 10.32)
 * 6. Total items for the Scheme (i.e. MinimumQty + TotalFreeQty => e.g. 6 + 6 = 12)
 * 7. Calculate discount (i.e. ToatalTradePriceForMinimumQty / TotalItem => e.g. 10.32/12 = 0.86)
 * 8. SchemeAmount (TradePrice - discount => e.g. 1.72 - 0.86 = 0.86)
 * 9. Scheme Discount = SchemeAmount * QtyEnteredByUser
 * 10. Net Amount = TotalTradePriceItemsWithQty - SchemeDiscount
 */
// 4. Free Products
/**
 * Need some discussion to clear free products scenario (Either the free products are going to be added in the UserEnteredQty
 * Or has to reduce the price of product for the free products).
 */
/** Discount On Trade Price */
/**
 * Check user quantity is greater than scheme mimum quantity
 * 1. Calculate the percentage value for the give discount_on_tp from the biggest unit of the selected product
 * 2. Calculate the scheme discount value from the percentage obtained to selected unit of the product
 */
/** Gift */
/**
 * Check user quantity is greater than scheme mimum quantity
 * 1. Calculate the scheme discount by deducting the gift_value from the totalItemPrice
 * i.e. disoucnt = item_trade_price * userQty - gift_value;
 */


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-click-outside */ "qew9");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_interceptor_http_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/interceptor/http-auth.interceptor */ "68oC");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reducer */ "LB4v");
/* harmony import */ var _core_effects_salesmen_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/effects/salesmen.effects */ "rDAt");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/shared/shared.module */ "FpXt");
/* harmony import */ var _modules_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/shared/pipes/pipe.module */ "DgO8");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_http_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_reducer__WEBPACK_IMPORTED_MODULE_12__["reducers"], { metaReducers: _reducer__WEBPACK_IMPORTED_MODULE_12__["metaReducers"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([
                _core_effects_salesmen_effects__WEBPACK_IMPORTED_MODULE_13__["LocalStorageSalemanEffects"],
            ]),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__["StoreRouterConnectingModule"].forRoot(),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"], _modules_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_16__["PipeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__["StoreRouterConnectingModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"],
                    _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"].forRoot(),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_reducer__WEBPACK_IMPORTED_MODULE_12__["reducers"], { metaReducers: _reducer__WEBPACK_IMPORTED_MODULE_12__["metaReducers"] }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([
                        _core_effects_salesmen_effects__WEBPACK_IMPORTED_MODULE_13__["LocalStorageSalemanEffects"],
                    ]),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__["StoreRouterConnectingModule"].forRoot(),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production })
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_http_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZgVV":
/*!**************************************************!*\
  !*** ./src/app/core/services/toaster.service.ts ***!
  \**************************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ToasterService {
    constructor() {
        this.toaster = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    showToaster(toaster) {
        this.toaster.next(toaster);
    }
    get getToast() {
        return this.toaster.asObservable();
    }
}
ToasterService.ɵfac = function ToasterService_Factory(t) { return new (t || ToasterService)(); };
ToasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToasterService, factory: ToasterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bUwk":
/*!***********************************************!*\
  !*** ./src/app/core/services/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBaseService", function() { return HttpBaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class HttpBaseService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.domainUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiDomain;
        this.httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-type', 'application/json');
    }
    get(url, isApiDomain = false) {
        url = `${isApiDomain ? src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiDomain : this.baseUrl}${url}`;
        return this.httpClient.get(url, { headers: this.httpOptions });
    }
    post(url, body = null) {
        url = `${this.baseUrl}${url}`;
        return this.httpClient.post(url, body, { headers: this.httpOptions });
    }
    put(url, body = null) {
        url = `${this.baseUrl}${url}`;
        return this.httpClient.put(url, body, { headers: this.httpOptions });
    }
    delete(url) {
        url = `${this.baseUrl}${url}`;
        return this.httpClient.delete(url, { headers: this.httpOptions });
    }
}
HttpBaseService.ɵfac = function HttpBaseService_Factory(t) { return new (t || HttpBaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpBaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpBaseService, factory: HttpBaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpBaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "lqmV":
/*!*****************************************************************!*\
  !*** ./src/app/modules/shared/services/general-data.service.ts ***!
  \*****************************************************************/
/*! exports provided: GeneralDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralDataService", function() { return GeneralDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/api-urls.constants */ "oo4J");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/http.service */ "bUwk");




class GeneralDataService {
    constructor(httpBaseService) {
        this.httpBaseService = httpBaseService;
    }
    getProductsWithPrefType(prefType) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].PRODUCTS_LIST_BY_PREF_TYPE}/${prefType}`;
        return this.httpBaseService.get(url);
    }
    getOrderBookers(distributorId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].GET_EMPLOYEES}/${distributorId}`;
        return this.httpBaseService.get(url);
    }
    getOrderBookerRoutes(orderBookerId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].GET_EMPLOYEE_ROUTES}/${orderBookerId}`;
        return this.httpBaseService.get(url);
    }
    getRetailersByRoute(routeId) {
        const url = `${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].GET_RETAILERS_BY_ROUTE}/${routeId}`;
        return this.httpBaseService.get(url);
    }
    getAllSalesMen() {
        const url = src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].GET_ALL_SALESMEN;
        return this.httpBaseService.get(url);
    }
}
GeneralDataService.ɵfac = function GeneralDataService_Factory(t) { return new (t || GeneralDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpBaseService"])); };
GeneralDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralDataService, factory: GeneralDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpBaseService"] }]; }, null); })();


/***/ }),

/***/ "oo4J":
/*!******************************************************!*\
  !*** ./src/app/core/constants/api-urls.constants.ts ***!
  \******************************************************/
/*! exports provided: API_URLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URLS", function() { return API_URLS; });
const API_URLS = {
    // Login
    LOGIN: '/login',
    // Dashboard
    DASHBOARD: '/dashboard',
    HOME_DAILY: '/reports/home/daily',
    HOME_MONTHLY: '/reports/home/monthly',
    // Orders
    COMPLETED_ORDERS_LOAD_SHEETS: '/getCompletedOrdersLoadSheetWise',
    COUNTER_SALE_DATA: '/counterSaleData',
    ADD_COUNTER_SALE: '/saveOrder/counter',
    SAVE_DISPATCH: '/saveOrder/dispatch',
    SAVE_EXECUTION: '/saveOrder/execution',
    SAVE_SPOT: '/saveOrder/spot',
    CANCEL_ORDER: '/orderCancel',
    CANCEL_EXECUTION_ORDER: '/cancelExecutionOrder',
    CANCEL_SPOT_SALE: '/cancelSpotSale',
    GET_SCHEMES: '/getSchemesDiscount',
    GET_EMPLOYEES: '/getEmployees',
    GET_EMPLOYEE_ROUTES: '/getEmployeeRoutes',
    GET_DISCOUNT_SLABS: '/getSlabDiscount',
    GET_SLABS_BY_CHANNEL: '/getSlabDiscountByChannel',
    GET_RETAILERS_BY_ROUTE: '/getRetailersByRoute',
    GET_NEW_ORDERS: '/getNewOrders',
    GET_SALE_HISTORY: '/orderBooker',
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
    // Reports
    DISTRIBUTOR_PURCHASE_HISTORY: '/distributorPurchaseHistory',
    RATE_LIST_CORE: '/rateListCore',
    CASH_SUMMARY: '/CashSummaryReport',
    PURCHASE_DETAIL: '/distributorPurchaseDetail'
    // Payments
};


/***/ }),

/***/ "rDAt":
/*!**************************************************!*\
  !*** ./src/app/core/effects/salesmen.effects.ts ***!
  \**************************************************/
/*! exports provided: LocalStorageSalemanEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageSalemanEffects", function() { return LocalStorageSalemanEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _modules_salesmen_reducers_salesmen_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/salesmen/reducers/salesmen.reducer */ "5l1v");
/* harmony import */ var _constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/localstorage.constants */ "Rb2t");









class LocalStorageSalemanEffects {
    constructor(actions) {
        this.actions = actions;
        // change this to `dispatch: true` to sync state with actions
        this.onChange = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'storage').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(evt => evt.key === _constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_6__["localStorageKeys"].actions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(evt => evt.newValue !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(evt => {
            const [{ type, payload }] = JSON.parse(evt.newValue);
            switch (type) {
                case _modules_salesmen_reducers_salesmen_reducer__WEBPACK_IMPORTED_MODULE_5__["ADD_SALEMAN"]:
                    return { type: _modules_salesmen_reducers_salesmen_reducer__WEBPACK_IMPORTED_MODULE_5__["ADD_SALEMAN_STORAGE"], payload };
                case _modules_salesmen_reducers_salesmen_reducer__WEBPACK_IMPORTED_MODULE_5__["UPDATE_SALEMAN"]:
                    return { type: _modules_salesmen_reducers_salesmen_reducer__WEBPACK_IMPORTED_MODULE_5__["UPDATE_SALEMAN"], payload };
                default:
                    return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }
        }));
        this.storeActions = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_modules_salesmen_reducers_salesmen_reducer__WEBPACK_IMPORTED_MODULE_5__["ADD_SALEMAN"], _modules_salesmen_reducers_salesmen_reducer__WEBPACK_IMPORTED_MODULE_5__["UPDATE_SALEMAN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(action => {
            const storedActions = window.localStorage.getItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_6__["localStorageKeys"].actions);
            const actions = storedActions ? JSON.parse(storedActions) : [];
            const newActions = [action, ...actions];
            window.localStorage.setItem(_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_6__["localStorageKeys"].actions, JSON.stringify(newActions));
        }));
        // change this to `dispatch: true` to sync state with state
        this.updateState = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'storage').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(evt => evt.key === _constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_6__["localStorageKeys"].saleman), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(evt => evt.newValue !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(evt => {
            const newState = JSON.parse(evt.newValue);
            return { type: 'UPDATE_SALEMAN', payload: { newState } };
        }));
    }
}
LocalStorageSalemanEffects.ɵfac = function LocalStorageSalemanEffects_Factory(t) { return new (t || LocalStorageSalemanEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"])); };
LocalStorageSalemanEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocalStorageSalemanEffects, factory: LocalStorageSalemanEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], LocalStorageSalemanEffects.prototype, "onChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], LocalStorageSalemanEffects.prototype, "storeActions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: true })
], LocalStorageSalemanEffects.prototype, "updateState", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalStorageSalemanEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }]; }, { onChange: [], storeActions: [], updateState: [] }); })();


/***/ }),

/***/ "tPJg":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/retailer-sub-listing/retailer-sub-listing.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: RetailerSubListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerSubListComponent", function() { return RetailerSubListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toaster.service */ "ZgVV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function RetailerSubListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RetailerSubListComponent_div_8_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.searchText = $event; })("keyup", function RetailerSubListComponent_div_8_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.searchByRetailer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchText);
} }
function RetailerSubListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RetailerSubListComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RetailerSubListComponent_div_10_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const retailer_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.getOrderDetails(retailer_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const retailer_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "retailer-", retailer_r8.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", retailer_r8.isActive ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](retailer_r8.retailer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", retailer_r8.retailer_address || retailer_r8.loc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 6, retailer_r8.order_total || 0, "1.2-2"), "");
} }
function RetailerSubListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RetailerSubListComponent_div_10_div_1_Template, 15, 9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.retailerDispList);
} }
function RetailerSubListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RetailerSubListComponent {
    constructor(toastService, change) {
        this.toastService = toastService;
        this.change = change;
        this.retailerChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        // if (changes.retailers.currentValue) {
        this.retailerDispList = this.retailers;
        this.change.detectChanges();
        // }
    }
    searchByRetailer() {
        if (this.searchText) {
            this.retailerDispList = this.retailers.filter(ret => ret.retailer_name.toLowerCase().includes(this.searchText.toLowerCase()));
        }
        else {
            this.retailerDispList = this.retailers;
        }
    }
    getOrderDetails(retailer) {
        if (this.orderType !== 'execution' || (this.orderType === 'execution' && !this.isSpotSaleActive)) {
            this.retailerDispList = this.retailerDispList.map(ret => {
                if (ret.isActive) {
                    ret.isActive = false;
                }
                if (((this.orderType !== 'execution' || (this.orderType === 'execution' && this.currentTab === 1))
                    && ret.id === retailer.id)
                    || (this.orderType === 'execution' && this.currentTab === 2 && ret.retailer_id === retailer.retailer_id)) {
                    ret.isActive = true;
                }
                return ret;
            });
            this.retailerChanged.emit(retailer);
        }
        else if (this.orderType === 'execution' && this.isSpotSaleActive) {
            const toast = {
                type: 'error', message: 'Please save/cancel the current order to move forward!',
                title: 'Spot Sale Error:'
            };
            this.toastService.showToaster(toast);
        }
    }
    ngOnDestroy() {
        this.change.detach();
    }
}
RetailerSubListComponent.ɵfac = function RetailerSubListComponent_Factory(t) { return new (t || RetailerSubListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
RetailerSubListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RetailerSubListComponent, selectors: [["app-retailer-sub-list"]], inputs: { loading: "loading", currentTab: "currentTab", retailers: "retailers", orderType: "orderType", isSpotSaleActive: "isSpotSaleActive" }, outputs: { retailerChanged: "retailerChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 4, consts: [[1, "_selectProList", "ProListHeight"], [1, "header", "ProListHD"], [1, "row"], [1, "col-12"], [1, "w-100"], ["class", "col-12", 4, "ngIf"], ["class", "ProList-div", 4, "ngIf"], [1, "APS-list"], [1, "fa", "fa-search"], ["type", "text", "id", "", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "box-list", "shine", "mt-10"], [1, "ProList-div"], ["class", "col-12 order-list", 3, "ngClass", "id", "click", 4, "ngFor", "ngForOf"], [1, "col-12", "order-list", 3, "ngClass", "id", "click"], [1, "ord-no"], [1, "col-8", "pr-0"], [1, "fa", "fa-map-marker-alt"], [1, "col-4", "pl-0", "text-right"], [1, "or-val"], [1, "box-list", "shine"]], template: function RetailerSubListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RetailerSubListComponent_div_8_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RetailerSubListComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RetailerSubListComponent_div_10_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RetailerSubListComponent_div_11_Template, 9, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && (ctx.retailerDispList == null ? null : ctx.retailerDispList.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".ProListHeight {\r\n    height: calc(100vh - 200px);\r\n}\r\n.ProList-div {\r\n    text-transform: capitalize;\r\n    flex: 1;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    height: inherit;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n}\r\n._selectProList .header {\r\n    padding: 15px 15px !important;\r\n}\r\n.order-list{font-size: 12px; background: #fff; padding: 6px 10px; border: solid 1px #eaeaea; position: relative;\r\n\ttransition: all 0.2s;\r\n    transform: translateZ(0);\r\n    transform: scale(0.97); cursor: pointer;\r\n\t}\r\n.order-list.active{\r\n\tborder-color:#0038ba;\r\n}\r\n.order-list:hover, .order-list.active{ \r\n\tbox-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.18);\r\n transform: scale(1); z-index: 3\r\n}\r\n.order-list span{display: block}\r\n.order-list span .fa{color: #b5b5b5}\r\n.order-list span.or-val{font-family: 'Rationale', sans-serif;font-size: 16.5px; line-height: 1; color: #0038ba }\r\n.order-list .ord-no{\r\n\tfont-family: 'Poppins', sans-serif;\r\n    line-height: 1;\r\n    font-size: 35px;\r\n    font-weight: 800; padding-top: 0px;\r\n    color: #ececec;  position: absolute; right:80px; top: 7px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9yZXRhaWxlci1zdWItbGlzdGluZy9yZXRhaWxlci1zdWItbGlzdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQSxZQUFZLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0I7Q0FDOUcsb0JBQW9CO0lBQ2pCLHdCQUF3QjtJQUd4QixzQkFBc0IsRUFBRSxlQUFlO0NBQzFDO0FBQ0Q7Q0FDQyxvQkFBb0I7QUFDckI7QUFDQTtDQUNDLGdEQUFnRDtDQUc3QyxtQkFBbUIsRUFBRTtBQUN6QjtBQUNBLGlCQUFpQixjQUFjO0FBQy9CLHFCQUFxQixjQUFjO0FBQ25DLHdCQUF3QixvQ0FBb0MsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsZUFBZTtBQUMvRztDQUNDLGtDQUFrQztJQUMvQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQixFQUFFLGdCQUFnQjtJQUNsQyxjQUFjLEdBQUcsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFFBQVEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3JldGFpbGVyLXN1Yi1saXN0aW5nL3JldGFpbGVyLXN1Yi1saXN0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUHJvTGlzdEhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XHJcbn1cclxuLlByb0xpc3QtZGl2IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZmxleDogMTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5fc2VsZWN0UHJvTGlzdCAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5vcmRlci1saXN0e2ZvbnQtc2l6ZTogMTJweDsgYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzogNnB4IDEwcHg7IGJvcmRlcjogc29saWQgMXB4ICNlYWVhZWE7IHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTsgY3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuLm9yZGVyLWxpc3QuYWN0aXZle1xyXG5cdGJvcmRlci1jb2xvcjojMDAzOGJhO1xyXG59XHJcbi5vcmRlci1saXN0OmhvdmVyLCAub3JkZXItbGlzdC5hY3RpdmV7IFxyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMjJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcdFxyXG5cdC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgei1pbmRleDogM1xyXG59XHJcbi5vcmRlci1saXN0IHNwYW57ZGlzcGxheTogYmxvY2t9XHJcbi5vcmRlci1saXN0IHNwYW4gLmZhe2NvbG9yOiAjYjViNWI1fVxyXG4ub3JkZXItbGlzdCBzcGFuLm9yLXZhbHtmb250LWZhbWlseTogJ1JhdGlvbmFsZScsIHNhbnMtc2VyaWY7Zm9udC1zaXplOiAxNi41cHg7IGxpbmUtaGVpZ2h0OiAxOyBjb2xvcjogIzAwMzhiYSB9XHJcbi5vcmRlci1saXN0IC5vcmQtbm97XHJcblx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDsgcGFkZGluZy10b3A6IDBweDtcclxuICAgIGNvbG9yOiAjZWNlY2VjOyAgcG9zaXRpb246IGFic29sdXRlOyByaWdodDo4MHB4OyB0b3A6IDdweH0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RetailerSubListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-retailer-sub-list',
                templateUrl: 'retailer-sub-listing.component.html',
                styleUrls: ['./retailer-sub-listing.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], retailers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orderType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isSpotSaleActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], retailerChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "uoBr":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/loader-white/loader-white.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WhiteLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteLoaderComponent", function() { return WhiteLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WhiteLoaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
WhiteLoaderComponent.ɵfac = function WhiteLoaderComponent_Factory(t) { return new (t || WhiteLoaderComponent)(); };
WhiteLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhiteLoaderComponent, selectors: [["app-loader-white"]], decls: 9, vars: 0, consts: [[1, "loader-sell360"], [1, "loader"], [1, "box-icon"], [1, "loader-img"], ["src", "assets/images/sell-360-logo.svg", "alt", ""], [1, "txt"]], template: function WhiteLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "LOADING...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loader-sell360[_ngcontent-%COMP%] {\r\n    height: 75vh;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index: 2000;\r\n    position: relative;\r\n}\r\n\r\n.loader-sell360[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\r\n    width: 90px;\r\n    height: 110px;\r\n    position: relative;\r\n    margin-top: -60px;\r\n}\r\n\r\n.loader-sell360[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]::before, .loader-sell360[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]::after {\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    position: absolute;\r\n    bottom: 30px;\r\n    left: 15px;\r\n    z-index: 1;\r\n    transform: scale(0);\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n.loader-sell360[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: -23px;\r\n    left: 5px;\r\n    font-size: 11px;\r\n    letter-spacing: 3px;\r\n    color: #282828;\r\n}\r\n\r\n.loader-sell360[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-family: 'Rationale', sans-serif;\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    color: #0038ba\r\n}\r\n\r\n.loader-sell360[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .loader-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 99;\r\n    bottom: 3px;\r\n    -webkit-animation-name: spaceboots;\r\n    -webkit-animation-duration: 1s;\r\n    -webkit-transform-origin: 50% 50%;\r\n    -webkit-animation-iteration-count: infinite;\r\n    -webkit-animation-timing-function: linear;\r\n}\r\n\r\n.loader-sell360[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .loader-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 85px;\r\n    height: auto;\r\n    margin-left: 5px\r\n}\r\n\r\n.loader-sell360[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .box-icon[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 80px;\r\n    display: block;\r\n    color: white;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0;\r\n    z-index: 2;\r\n    overflow: hidden;\r\n}\r\n\r\n.loader-sell360[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .box-icon[_ngcontent-%COMP%]::before, .loader-sell360[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .box-icon[_ngcontent-%COMP%]::after {\r\n    display: inline-block;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 0;\r\n    background-image: url(/assets/images/dashboard-icon.svg);\r\n    background-repeat: no-repeat;\r\n    width: 18px;\r\n    height: 18px;\r\n    filter: invert(60%);\r\n}\r\n\r\n.loader-sell360[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .box-icon[_ngcontent-%COMP%]:nth-child(1)::before {\r\n    content: \"\";\r\n    animation: a 1.1s linear infinite;\r\n    background-image: url(/assets/images/search-icon.svg);\r\n}\r\n\r\n.loader-sell360[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .box-icon[_ngcontent-%COMP%]:nth-child(1)::after {\r\n    content: \"\";\r\n    animation: b 1.3s linear infinite;\r\n    background-image: url(/assets/images/activity-icon.svg);\r\n}\r\n\r\n.loader-sell360[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .box-icon[_ngcontent-%COMP%]:nth-child(2)::before {\r\n    content: \"\";\r\n    animation: c 0.9s linear infinite;\r\n    background-image: url(/assets/images/geography-icon.svg);\r\n}\r\n\r\n.loader-sell360[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .box-icon[_ngcontent-%COMP%]:nth-child(2)::after {\r\n    content: \" \";\r\n    animation: d 0.7s linear infinite;\r\n    background-image: url(/assets/images/reports-icon.svg);\r\n}\r\n\r\n.loader-sell360[_ngcontent-%COMP%]   .loader.amit[_ngcontent-%COMP%]::before, .loader.amit[_ngcontent-%COMP%]::after {\r\n    transform: scale(1);\r\n}\r\n\r\n@keyframes a {\r\n    0% {\r\n        transform: translate(30px, 0) rotate(30deg);\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        transform: translate(30px, 150px) rotate(-50deg);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes b {\r\n    0% {\r\n        transform: translate(50px, 0) rotate(-40deg);\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        transform: translate(40px, 150px) rotate(80deg);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes c {\r\n    0% {\r\n        transform: translate(70px, 0) rotate(10deg);\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        transform: translate(60px, 150px) rotate(70deg);\r\n        opacity: 1;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXItd2hpdGUvbG9hZGVyLXdoaXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLGtDQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLDJDQUEyQztJQUMzQyx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLHdEQUF3RDtJQUN4RCw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsdURBQXVEO0FBQzNEOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztJQUNqQyx3REFBd0Q7QUFDNUQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksMkNBQTJDO1FBQzNDLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZ0RBQWdEO1FBQ2hELFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSw0Q0FBNEM7UUFDNUMsVUFBVTtJQUNkO0lBQ0E7UUFDSSwrQ0FBK0M7UUFDL0MsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDJDQUEyQztRQUMzQyxVQUFVO0lBQ2Q7SUFDQTtRQUNJLCtDQUErQztRQUMvQyxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyLXdoaXRlL2xvYWRlci13aGl0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci1zZWxsMzYwIHtcclxuICAgIGhlaWdodDogNzV2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sb2FkZXItc2VsbDM2MCAubG9hZGVyIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IC02MHB4O1xyXG59XHJcblxyXG4ubG9hZGVyLXNlbGwzNjAgLmxvYWRlcjo6YmVmb3JlLCAubG9hZGVyLXNlbGwzNjAgLmxvYWRlcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmxvYWRlci1zZWxsMzYwIC5sb2FkZXIgLnR4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTIzcHg7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgY29sb3I6ICMyODI4Mjg7XHJcbn1cclxuXHJcbi5sb2FkZXItc2VsbDM2MCAubG9hZGVyIC50eHQgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogJ1JhdGlvbmFsZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICMwMDM4YmFcclxufVxyXG5cclxuLmxvYWRlci1zZWxsMzYwIC5sb2FkZXIgLmxvYWRlci1pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNwYWNlYm9vdHM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbn1cclxuXHJcbi5sb2FkZXItc2VsbDM2MCAubG9hZGVyIC5sb2FkZXItaW1nIGltZyB7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHhcclxufVxyXG5cclxuLmxvYWRlci1zZWxsMzYwIC5sb2FkZXIgLmJveC1pY29uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmxvYWRlci1zZWxsMzYwIC5sb2FkZXIgLmJveC1pY29uOjpiZWZvcmUsIC5sb2FkZXItc2VsbDM2MCAubG9hZGVyIC5ib3gtaWNvbjo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9kYXNoYm9hcmQtaWNvbi5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoNjAlKTtcclxufVxyXG5cclxuLmxvYWRlci1zZWxsMzYwIC5sb2FkZXIgLmJveC1pY29uOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBhbmltYXRpb246IGEgMS4xcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvc2VhcmNoLWljb24uc3ZnKTtcclxufVxyXG5cclxuLmxvYWRlci1zZWxsMzYwIC5sb2FkZXIgLmJveC1pY29uOm50aC1jaGlsZCgxKTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGFuaW1hdGlvbjogYiAxLjNzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9hY3Rpdml0eS1pY29uLnN2Zyk7XHJcbn1cclxuXHJcbi5sb2FkZXItc2VsbDM2MCAubG9hZGVyIC5ib3gtaWNvbjpudGgtY2hpbGQoMik6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYW5pbWF0aW9uOiBjIDAuOXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2dlb2dyYXBoeS1pY29uLnN2Zyk7XHJcbn1cclxuXHJcbi5sb2FkZXItc2VsbDM2MCAubG9hZGVyIC5ib3gtaWNvbjpudGgtY2hpbGQoMik6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgYW5pbWF0aW9uOiBkIDAuN3MgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3JlcG9ydHMtaWNvbi5zdmcpO1xyXG59XHJcblxyXG4ubG9hZGVyLXNlbGwzNjAgLmxvYWRlci5hbWl0OjpiZWZvcmUsIC5sb2FkZXIuYW1pdDo6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwKSByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAxNTBweCkgcm90YXRlKC01MGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBiIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LCAwKSByb3RhdGUoLTQwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCwgMTUwcHgpIHJvdGF0ZSg4MGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MHB4LCAwKSByb3RhdGUoMTBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2MHB4LCAxNTBweCkgcm90YXRlKDcwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhiteLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader-white',
                templateUrl: 'loader-white.component.html',
                styleUrls: ['./loader-white.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guard/auth.guard */ "3IAN");





const routes = [
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-login-login-module */ "modules-login-login-module").then(__webpack_require__.bind(null, /*! ./modules/login/login.module */ "g7DB")).then(m => m.LoginModule)
    },
    {
        path: 'home',
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | modules-home-home-module */ "modules-home-home-module").then(__webpack_require__.bind(null, /*! ./modules/home/home.module */ "iydT")).then(m => m.HomeModule)
    },
    {
        path: 'salesmen',
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | modules-salesmen-salesmen-module */ "modules-salesmen-salesmen-module").then(__webpack_require__.bind(null, /*! ./modules/salesmen/salesmen.module */ "Sxus")).then(m => m.SalesmenModule)
    },
    {
        path: 'orders',
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | modules-orders-orders-module */[__webpack_require__.e("default~modules-orders-orders-module~modules-reports-reports-module"), __webpack_require__.e("modules-orders-orders-module")]).then(__webpack_require__.bind(null, /*! ./modules/orders/orders.module */ "fAJX")).then(m => m.OrderModule)
    },
    {
        path: 'product',
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | modules-product-product-module */ "modules-product-product-module").then(__webpack_require__.bind(null, /*! ./modules/product/product.module */ "sjYV")).then(m => m.ProductModule)
    },
    {
        path: 'reports',
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | modules-reports-reports-module */[__webpack_require__.e("default~modules-orders-orders-module~modules-reports-reports-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-reports-reports-module")]).then(__webpack_require__.bind(null, /*! ./modules/reports/reports.module */ "fm87")).then(m => m.ReportsModule)
    },
    {
        path: 'retailer',
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | modules-retailer-retailer-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-retailer-retailer-module")]).then(__webpack_require__.bind(null, /*! ./modules/retailer/retailer.module */ "q1sf")).then(m => m.RetailerModule)
    },
    {
        path: 'inventory',
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | modules-inventory-inventory-module */ "modules-inventory-inventory-module").then(__webpack_require__.bind(null, /*! ./modules/inventory/inventory.module */ "mycG")).then(m => m.InventoryModule)
    },
    {
        path: 'payments',
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | modules-payment-payment-module */ "modules-payment-payment-module").then(__webpack_require__.bind(null, /*! ./modules/payment/payment.module */ "oVPa")).then(m => m.PaymentModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yuE0":
/*!******************************************************!*\
  !*** ./src/app/modules/shared/pipes/Decimal.pipe.ts ***!
  \******************************************************/
/*! exports provided: Decimal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decimal", function() { return Decimal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Decimal {
    constructor() { }
    // tslint:disable-next-line: typedef
    transform(val, args) {
        try {
            const number = parseFloat(val.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]).toFixed(2);
            if (number.length) {
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            else {
                return number;
            }
        }
        catch (error) {
            return '0.00';
        }
    }
}
Decimal.ɵfac = function Decimal_Factory(t) { return new (t || Decimal)(); };
Decimal.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "decimal", type: Decimal, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Decimal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'decimal'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map