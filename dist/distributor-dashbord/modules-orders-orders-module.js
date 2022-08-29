(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-orders-orders-module"],{

/***/ "/5vP":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/orders/components/order-dispatched/order-dispatched.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OrderDispatchedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDispatchedComponent", function() { return OrderDispatchedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/api-urls.constants */ "oo4J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/toaster.service */ "ZgVV");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services */ "NJqk");
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/storage.service */ "UYTb");
/* harmony import */ var _services_dispatch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/dispatch.service */ "AH8O");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/orders.service */ "5TcN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_retailer_sub_listing_retailer_sub_listing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/retailer-sub-listing/retailer-sub-listing.component */ "tPJg");
/* harmony import */ var _shared_components_product_right_panel_product_right_panel_compoent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/product-right-panel/product-right-panel.compoent */ "LCr2");
/* harmony import */ var _shared_components_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/order-items/order-items.component */ "VzUJ");
/* harmony import */ var _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/loader-white/loader-white.component */ "uoBr");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-datatables */ "njyG");

















function OrderDispatchedComponent_app_products_drawer_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-products-drawer", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drawerClosed", function OrderDispatchedComponent_app_products_drawer_0_Template_app_products_drawer_drawerClosed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.closeNewProducts(); })("productSelected", function OrderDispatchedComponent_app_products_drawer_0_Template_app_products_drawer_productSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.addNewProductToOrder($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedRetailer", ctx_r0.selectedRetailer)("orderedProducts", ctx_r0.orderDetails == null ? null : ctx_r0.orderDetails.items)("loadingProducts", ctx_r0.loadingProduct)("allProducts", ctx_r0.inventory)("productSchemes", ctx_r0.schemes)("productMerchantDiscount", ctx_r0.merchantDiscount)("specialDiscounts", ctx_r0.specialDiscounts);
} }
function OrderDispatchedComponent_div_107_app_order_items_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-order-items-list", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openDrawer", function OrderDispatchedComponent_div_107_app_order_items_list_1_Template_app_order_items_list_openDrawer_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.openProductsList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderDetail", ctx_r12.orderDetails)("schemes", ctx_r12.schemes)("selectedRetailer", ctx_r12.selectedRetailer)("orders", ctx_r12.ordersRetailers)("allProducts", ctx_r12.inventory)("specialDiscounts", ctx_r12.specialDiscounts)("merchantDiscount", ctx_r12.merchantDiscount)("newProduct", ctx_r12.newProduct)("orderType", "dispatch");
} }
function OrderDispatchedComponent_div_107_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDispatchedComponent_div_107_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select order to see details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDispatchedComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderDispatchedComponent_div_107_app_order_items_list_1_Template, 1, 9, "app-order-items-list", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderDispatchedComponent_div_107_div_2_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderDispatchedComponent_div_107_div_3_Template, 5, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.savingOrder && ctx_r1.selectedRetailer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.savingOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.savingOrder && !ctx_r1.selectedRetailer);
} }
function OrderDispatchedComponent_div_108_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_div_108_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.setOrderItems(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r17.orderDetails == null ? null : ctx_r17.orderDetails.items == null ? null : ctx_r17.orderDetails.items.length));
} }
function OrderDispatchedComponent_div_108_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r18.orderDetails == null ? null : ctx_r18.orderDetails.items == null ? null : ctx_r18.orderDetails.items.length));
} }
function OrderDispatchedComponent_div_108_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDispatchedComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderDispatchedComponent_div_108_button_1_Template, 2, 1, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderDispatchedComponent_div_108_button_2_Template, 2, 1, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderDispatchedComponent_div_108_button_3_Template, 4, 0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.savingOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.savingOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.savingOrder);
} }
function OrderDispatchedComponent_table_111_ng_container_14_tr_1_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The payable amount should not be greater than pending amount! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDispatchedComponent_table_111_ng_container_14_tr_1_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_table_111_ng_container_14_tr_1_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const order_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r29.id = "hello"; return ctx_r29.addOrderBill(order_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add to Bill");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !order_r23.recovery || +order_r23.recovery === 0 || +order_r23.recovery > order_r23.balance);
} }
function OrderDispatchedComponent_table_111_ng_container_14_tr_1_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_table_111_ng_container_14_tr_1_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const order_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.removeOrderBill(order_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Remove From Bill ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDispatchedComponent_table_111_ng_container_14_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderDispatchedComponent_table_111_ng_container_14_tr_1_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const order_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return order_r23.recovery = $event; })("keydown", function OrderDispatchedComponent_table_111_ng_container_14_tr_1_Template_input_keydown_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r39.isNumber($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrderDispatchedComponent_table_111_ng_container_14_tr_1_span_11_Template, 2, 0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OrderDispatchedComponent_table_111_ng_container_14_tr_1_button_13_Template, 2, 1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrderDispatchedComponent_table_111_ng_container_14_tr_1_button_14_Template, 2, 0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const order_r23 = ctx_r40.$implicit;
    const ind_r24 = ctx_r40.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, order_r23.retailer_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 12, order_r23.balance, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", order_r23.aging || 0, " Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", order_r23.isAdded)("id", ind_r24)("ngModel", order_r23.recovery)("name", ind_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +order_r23.recovery > order_r23.balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !order_r23.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r23.isAdded);
} }
function OrderDispatchedComponent_table_111_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderDispatchedComponent_table_111_ng_container_14_tr_1_Template, 15, 15, "tr", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const order_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r23.balance > 0);
} }
function OrderDispatchedComponent_table_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Retailer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pending Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Aging");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add to Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrderDispatchedComponent_table_111_ng_container_14_Template, 2, 1, "ng-container", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r3.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.recoveryRetailers);
} }
function OrderDispatchedComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDispatchedComponent_div_114_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Order Booker:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OrderDispatchedComponent_div_114_div_1_div_19_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const order_r45 = ctx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r47.retailerSelected(order_r45); })("ngModelChange", function OrderDispatchedComponent_div_114_div_1_div_19_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const order_r45 = ctx.$implicit; return order_r45.isSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r45 = ctx.$implicit;
    const ind_r46 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ind_r46 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r45.retailer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r45.emp_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r45.retailer_address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ind_r46)("ngModel", order_r45.isSelected)("id", "ord" + ind_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "ord" + ind_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 9, order_r45.order_total || 0, "1.2-2"), "");
} }
function OrderDispatchedComponent_div_114_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderDispatchedComponent_div_114_div_1_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.isAllSelected = $event; })("change", function OrderDispatchedComponent_div_114_div_1_Template_input_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.allSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OrderDispatchedComponent_div_114_div_1_div_19_Template, 23, 12, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.isAllSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r41.ordersDispList);
} }
function OrderDispatchedComponent_div_114_div_2_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_div_114_div_2_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const cont_r55 = ctx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r57.changeCurrentLoad(cont_r55.loadNumber); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cont_r55 = ctx.$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", cont_r55.loadNumber)("ngClass", cont_r55.loadNumber === ctx_r53.currentLoadContent.loadNumber ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Load ", cont_r55.loadNumber, "");
} }
function OrderDispatchedComponent_div_114_div_2_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderDispatchedComponent_div_114_div_2_tr_25_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const item_r59 = ctx.$implicit; return item_r59.issued_qty = $event; })("keyup", function OrderDispatchedComponent_div_114_div_2_tr_25_Template_input_keyup_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const item_r59 = ctx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r63.updateDispatchedQty(item_r59); })("keydown", function OrderDispatchedComponent_div_114_div_2_tr_25_Template_input_keydown_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r64.isNumber($event, "quantity"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = ctx.$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r59.item_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r54.getItemName(item_r59.item_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, item_r59.actual_qty));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r59.issued_qty)("name", item_r59.item_id)("id", item_r59.item_id);
} }
function OrderDispatchedComponent_div_114_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderDispatchedComponent_div_114_div_2_a_4_Template, 2, 3, "a", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Issuance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "BOX/PIECE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "BOX/PIECE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OrderDispatchedComponent_div_114_div_2_tr_25_Template, 10, 8, "tr", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r42.load == null ? null : ctx_r42.load.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r42.currentLoadContent.items);
} }
function OrderDispatchedComponent_div_114_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDispatchedComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderDispatchedComponent_div_114_div_1_Template, 20, 2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderDispatchedComponent_div_114_div_2_Template, 26, 2, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderDispatchedComponent_div_114_div_3_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading);
} }
function OrderDispatchedComponent_table_124_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r71 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Load ", i_r71 + 1, "");
} }
function OrderDispatchedComponent_table_124_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CTN/Bundle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Box/Piece");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CTN/Bundle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Box/Piece");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CTN/Bundle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Box/Piece");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CTN/Bundle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Box/Piece");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDispatchedComponent_table_124_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CTN/Bundle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Box/Piece");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CTN/Bundle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Box/Piece");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CTN/Bundle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Box/Piece");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDispatchedComponent_table_124_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CTN/Bundle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Box/Piece");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CTN/Bundle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Box/Piece");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDispatchedComponent_table_124_tr_14_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const loadContent_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, loadContent_r74.parent_qty));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loadContent_r74.child_qty);
} }
function OrderDispatchedComponent_table_124_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrderDispatchedComponent_table_124_tr_14_ng_container_5_Template, 6, 4, "ng-container", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r72.item_sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r72.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", product_r72.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, product_r72.total_primary_qty));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, product_r72.total_secondary_qty));
} }
function OrderDispatchedComponent_table_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OrderDispatchedComponent_table_124_th_7_Template, 2, 1, "th", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Total Issuance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrderDispatchedComponent_table_124_tr_10_Template, 17, 0, "tr", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrderDispatchedComponent_table_124_tr_11_Template, 13, 0, "tr", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OrderDispatchedComponent_table_124_tr_12_Template, 9, 0, "tr", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrderDispatchedComponent_table_124_tr_14_Template, 12, 9, "tr", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r6.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.finalLoad.load[0].content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.finalLoad.count == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.finalLoad.count == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.finalLoad.count == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.finalLoad.load);
} }
function OrderDispatchedComponent_div_126_button_77_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_div_126_button_77_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r79.revertDispatch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDispatchedComponent_div_126_button_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDispatchedComponent_div_126_button_80_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_div_126_button_80_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r81.completeDispatch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDispatchedComponent_div_126_button_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderDispatchedComponent_div_126_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gross Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Trade Offer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Trade Discount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Special Discount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Booker Discount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tax:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Total Amount Due:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Recovery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Total Issued Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_div_126_Template_a_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.getBookingSheet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Booking Sheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_div_126_Template_a_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.generateLSPDF(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Load Sheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Bills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, OrderDispatchedComponent_div_126_button_77_Template, 2, 0, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, OrderDispatchedComponent_div_126_button_78_Template, 4, 0, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, OrderDispatchedComponent_div_126_button_80_Template, 2, 0, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, OrderDispatchedComponent_div_126_button_81_Template, 4, 0, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 14, ctx_r7.finalLoad.summary.total_gross_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 17, ctx_r7.finalLoad.summary.total_trade_offer, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 20, ctx_r7.finalLoad.summary.total_trade_discount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 23, ctx_r7.finalLoad.summary.total_special_discount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 26, ctx_r7.finalLoad.summary.total_booker_discount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 29, ctx_r7.finalLoad.summary.total_gross_amount - ctx_r7.finalLoad.summary.total_trade_offer - ctx_r7.finalLoad.summary.total_trade_discount - ctx_r7.finalLoad.summary.total_special_discount - ctx_r7.finalLoad.summary.total_booker_discount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](43, 32, ctx_r7.finalLoad.summary.total_tax_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](49, 35, ctx_r7.finalLoad.summary.total_net_sale, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](55, 38, ctx_r7.finalLoad.summary.total_recovery_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](61, 41, ctx_r7.finalLoad.summary.issued_total_price, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.loading);
} }
function OrderDispatchedComponent_div_127_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_div_127_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r88.currentTab = ctx_r88.currentTab + 1; return ctx_r88.tabChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r86.currentTab === 4 || ctx_r86.loading || ctx_r86.loadingProduct || ctx_r86.savingOrder);
} }
function OrderDispatchedComponent_div_127_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_div_127_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r90.openConfirmationModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r87.loading || ctx_r87.loadingProduct);
} }
function OrderDispatchedComponent_div_127_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_div_127_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r92.currentTab = ctx_r92.currentTab - 1; return ctx_r92.tabChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderDispatchedComponent_div_127_button_4_Template, 2, 1, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrderDispatchedComponent_div_127_button_5_Template, 2, 1, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Open Modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.currentTab === 1 || ctx_r8.currentTab === 4 || ctx_r8.loading || ctx_r8.savingOrder || ctx_r8.load.content[0].items.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.currentTab !== 4 && ctx_r8.currentTab !== 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.currentTab === 3);
} }
class OrderDispatchedComponent {
    constructor(router, route, toastService, dataService, storageService, dispatchService, orderService) {
        this.router = router;
        this.route = route;
        this.toastService = toastService;
        this.dataService = dataService;
        this.storageService = storageService;
        this.dispatchService = dispatchService;
        this.orderService = orderService;
        this.orderDetails = {};
        this.inventory = [];
        this.ordersRetailers = [];
        this.specialDiscounts = [];
        this.schemes = [];
        this.discountSlabs = [];
        this.credits = [];
        this.recoveryRetailers = [];
        this.remainingOrders = [];
        this.ordersDispList = [];
        this.distributorId = this.storageService.getItem('distributor').id;
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.currentTab = 1;
        this.setLoad();
        this.setCurrentLoad(1);
        this.load.content.push(this.currentLoadContent);
        this.assignmentId = this.route.snapshot.paramMap.get('assignId') || null;
        this.salemanId = +this.route.snapshot.paramMap.get('saleManId') || null;
        this.orderDate = this.route.snapshot.paramMap.get('date');
        if (!this.salemanId || !this.orderDate || !this.assignmentId) {
            this.router.navigateByUrl('/orders/dispatch-orders');
            const toast = { type: 'error', message: 'No order selected to dispatch!', title: 'Dispatch Error:' };
            this.toastService.showToaster(toast);
        }
        else {
            this.getProducts();
            this.getSchemes();
        }
    }
    setLoad() {
        this.load = {
            salesman_id: 0,
            total_orders: 0,
            total_gross_amount: 0,
            total_trade_offer: 0,
            total_trade_discount: 0,
            total_special_discount: 0,
            total_booker_discount: 0,
            total_tax_amount: 0,
            total_recovery_amount: 0,
            total_net_sale: 0,
            total_products: 0,
            distributor_id: 0,
            total_sub_loads: 0,
            processed_date: '',
            content: []
        };
    }
    setCurrentLoad(ldNumber) {
        this.currentLoadContent = {
            loadNumber: ldNumber,
            order_ids: [],
            total_products: 0,
            total_orders: 0,
            items: []
        };
    }
    tabChanged() {
        switch (this.currentTab) {
            case 1:
                this.savingOrder = true;
                this.selectedRetailer = JSON.parse(JSON.stringify(null));
                this.orderDetails.items = [];
                this.getDispatchDetails();
                break;
            case 2:
                this.dispatchOrderDetail = null;
                this.getDispatchOrdersDetail();
                break;
            case 3:
                this.setDataForLoad();
                break;
            default:
                break;
        }
    }
    isNumber(event, type = 'charges') {
        return this.dataService.isNumber(event, type);
    }
    getDispatchDetails() {
        this.loading = true;
        this.savingOrder = false;
        this.showFinalLoad = false;
        this.orderService.getDispatchDetailBySalemanAndDate(this.salemanId, this.assignmentId, this.orderDate).subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                if (res.data.loadSheet) {
                    this.finalLoad = res.data.loadSheetData;
                    this.currentTab = 4;
                    setTimeout(() => {
                        this.showFinalLoad = true;
                    }, 500);
                }
                else {
                    this.ordersRetailers = res.data.retailers.map(ret => {
                        ret.isActive = false;
                        return ret;
                    });
                }
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Error while getting orders data :>> ', error.message);
                const toast = { type: 'error', message: 'Cannot fetch Orders. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }
    getDispatchOrdersDetail() {
        if (!this.dispatchOrderDetail || !this.dispatchOrderDetail.summary) {
            this.loading = true;
            this.orderService.getDispatchOrdersDetail(this.salemanId, this.orderDate, this.assignmentId).subscribe(res => {
                this.loading = false;
                if (res.status === 200) {
                    this.dispatchOrderDetail = res.data;
                    this.dispatchOrderDetail.orders = this.dispatchOrderDetail.orders.map(order => {
                        order.isAdded = false;
                        const isInCredit = this.credits.find(x => x.order_id === order.id && x.recovery > 0);
                        if (isInCredit) {
                            order.isAdded = true;
                        }
                        const { retailer_id } = order;
                        this.credits.push({
                            recovery: 0, order_id: order.id, retailer_id, dispatched_bill_amount: order.order_total
                        });
                        return order;
                    });
                    this.recoveryRetailers = [];
                    this.dispatchOrderDetail.orders.forEach(order => {
                        const ord = this.recoveryRetailers.find(x => x.retailer_id === order.retailer_id);
                        if (!ord) {
                            this.recoveryRetailers.push(order);
                        }
                    });
                    if (this.currentTab === 3) {
                        this.setDataForLoad();
                    }
                }
            }, error => {
                this.loading = false;
                if (error.status !== 1 && error.status !== 401) {
                    console.log('Error while getting orders data :>> ', error.message);
                    const toast = { type: 'error', message: 'Cannot fetch Orders. Please try again', title: 'Error:' };
                    this.toastService.showToaster(toast);
                }
            });
        }
    }
    setDataForLoad() {
        var _a, _b;
        if (!((_a = this.dispatchOrderDetail) === null || _a === void 0 ? void 0 : _a.orders)) {
            this.getDispatchOrdersDetail();
        }
        else {
            this.remainingOrders = JSON.parse(JSON.stringify((_b = this.dispatchOrderDetail) === null || _b === void 0 ? void 0 : _b.orders));
            this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
        }
    }
    getProducts() {
        this.loadingProduct = true;
        this.orderService.getCounterSaleData().subscribe(res => {
            this.loadingProduct = false;
            if (res.status === 200) {
                this.inventory = res.data.inventory;
                this.specialDiscounts = res.data.special_discount;
                this.getDispatchDetails();
            }
        }, error => {
            this.loadingProduct = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Error while getting products data :>> ', error.message);
                const toast = { type: 'error', message: 'Cannot fetch Products. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }
    getSchemes() {
        this.orderService.getSchemes().subscribe(res => {
            if (res.status === 200) {
                this.schemes = res.data;
            }
            else {
                const toast = { type: 'error', message: res.message, title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                const toast = { type: 'error', message: 'Cannot fetch Trade Offers. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }
    getOrderDetailsByRetailer(retailer) {
        var _a;
        if (((_a = this.selectedRetailer) === null || _a === void 0 ? void 0 : _a.id) !== retailer.id) {
            this.savingOrder = true;
            this.newProduct = null;
            this.selectedRetailer = JSON.parse(JSON.stringify(retailer));
            this.orderService.getOrderDetails(retailer.id).subscribe(res => {
                this.savingOrder = false;
                if (res.status === 200) {
                    this.orderDetails = res.data;
                    this.orderDetails.items = this.orderDetails.items.map(prod => {
                        const product = this.inventory.find(x => x.item_id === prod.item_id);
                        prod.item_trade_price = JSON.parse(JSON.stringify(product.item_trade_price));
                        prod.parent_trade_price = JSON.parse(JSON.stringify(product.parent_trade_price));
                        prod.parent_unit_id = JSON.parse(JSON.stringify(product.parent_unit_id));
                        prod.parent_quantity = JSON.parse(JSON.stringify(product.quantity));
                        prod.child = JSON.parse(JSON.stringify(product.child));
                        prod.item_retail_price = JSON.parse(JSON.stringify(product.item_retail_price));
                        prod.extra_discount = JSON.parse(JSON.stringify(prod.booker_discount));
                        prod.tax_class_amount = JSON.parse(JSON.stringify(product.tax_class_amount));
                        prod.tax_class_id = JSON.parse(JSON.stringify(product.tax_class_id));
                        prod.tax_class_type = JSON.parse(JSON.stringify(product.tax_class_type));
                        prod.pref_id = JSON.parse(JSON.stringify(product.pref_id));
                        prod.unit_id = JSON.parse(JSON.stringify(product.unit_id));
                        prod.unit_name = JSON.parse(JSON.stringify(product.unit_name));
                        prod.brand_id = JSON.parse(JSON.stringify(product.brand_id));
                        prod.is_active = JSON.parse(JSON.stringify(product.is_active));
                        prod.stockQty = JSON.parse(JSON.stringify(prod.dispatch_qty));
                        prod.net_amount = JSON.parse(JSON.stringify(prod.final_price));
                        prod.gross_amount = prod.unit_price_after_scheme_discount * prod.stockQty;
                        prod.extra_discount_pkr = prod.stockQty * prod.extra_discount;
                        prod.original_amount = prod.item_trade_price * prod.stockQty;
                        prod.special_discount_pkr = prod.special_discount;
                        prod.trade_discount = JSON.parse(JSON.stringify(prod.merchant_discount));
                        prod.trade_discount_pkr = JSON.parse(JSON.stringify(prod.merchant_discount_pkr));
                        prod.tax_amount_pkr = JSON.parse(JSON.stringify(prod.total_tax_amount || 0));
                        prod.selectedScheme = this.schemes.find(scheme => scheme.id === prod.scheme_id);
                        return prod;
                    });
                }
            }, error => {
                this.savingOrder = false;
                this.loading = false;
                if (error.status !== 1 && error.status !== 401) {
                    console.log('Error while getting order detail data :>> ', error.message);
                    const toast = { type: 'error', message: 'Cannot fetch Order Detail. Please try again', title: 'Error:' };
                    this.toastService.showToaster(toast);
                }
            });
            this.getDiscountSlabs();
        }
    }
    addNewProductToOrder(product) {
        this.newProduct = product;
    }
    getDiscountSlabs() {
        if (!this.discountSlabs.length) {
            this.orderService.getDiscountSlabs().subscribe(res => {
                if (res.status === 200) {
                    this.discountSlabs = res.data;
                    this.setMerchantDiscount();
                }
            }, error => {
                if (error.status !== 1 && error.status !== 401) {
                    console.log('Error while getting order detail data :>> ', error.message);
                    const toast = { type: 'error', message: 'Cannot fetch Merchant Discounts. Please try again', title: 'Error:' };
                    this.toastService.showToaster(toast);
                }
            });
        }
        else {
            this.setMerchantDiscount();
        }
    }
    setMerchantDiscount() {
        this.merchantDiscount = this.discountSlabs.find(x => x.region_id === this.selectedRetailer.region_id &&
            this.selectedRetailer.segment_id === x.segment_id && x.channel_id === this.selectedRetailer.retailer_type_id);
    }
    openProductsList() {
        this.showProducts = true;
        document.body.classList.add('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.add('d-block');
        document.getElementById('order-contaienr').classList.add('blur-div');
    }
    closeNewProducts() {
        this.showProducts = false;
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('order-contaienr').classList.remove('blur-div');
    }
    saveOrder() {
        this.savingOrder = true;
        console.log('this.orderDetails :>> ', this.orderDetails);
        this.orderService.saveDispatchQuantityOrder(this.orderDetails).subscribe(res => {
            this.newProduct = null;
            this.savingOrder = false;
            if (res.status === 200) {
                this.toastService.showToaster({
                    message: `Order for ${this.selectedRetailer.retailer_name.toUpperCase()} dispatched successfully!`,
                    title: 'Order dispatched:',
                    type: 'success'
                });
            }
            this.orderDetails.items = [];
            this.selectedRetailer.isActive = false;
            this.ordersRetailers.find(x => x.id === this.selectedRetailer.id).isActive = false;
            this.selectedRetailer = JSON.parse(JSON.stringify(null));
        }, error => {
            this.savingOrder = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Error in Save Order for dispatch ::>> ', error);
                this.toastService.showToaster({
                    message: 'Something went wrong dispatch cannot be save at the moment!',
                    title: 'Error:',
                    type: 'error'
                });
            }
        });
    }
    setOrderItems() {
        this.orderDetails.items = this.orderDetails.items.map(item => {
            var _a, _b, _c, _d, _e;
            const orderItem = {
                id: item.id || 0,
                employee_id: this.orderDetails.employee_id,
                pref_id: item.pref_id,
                item_quantity_booker: item.item_quantity_booker,
                item_quantity_updated: item.item_quantity_updated || 0,
                quantity_returned: 0,
                original_price: item.item_trade_price,
                scheme_discount: item.scheme_discount,
                unit_price_after_scheme_discount: item.unit_price_after_scheme_discount,
                merchant_discount: item.trade_discount,
                merchant_discount_pkr: item.trade_discount_pkr,
                unit_price_after_merchant_discount: item.unit_price_after_merchant_discount,
                special_discount: item.special_discount,
                unit_price_after_special_discount: item.unit_price_after_special_discount,
                booker_discount: item.extra_discount,
                unit_price_after_individual_discount: item.unit_price_after_individual_discount || item.price,
                unit_id: item.unit_id,
                unit_name: item.unit_name,
                brand_id: item.brand_id,
                item_id: item.item_id,
                item_name: item.item_name,
                scheme_id: ((_a = item.selectedScheme) === null || _a === void 0 ? void 0 : _a.id) || 0,
                scheme_min_quantity: ((_b = item.selectedScheme) === null || _b === void 0 ? void 0 : _b.min_qty) || 0,
                scheme_quantity_free: ((_c = item.selectedScheme) === null || _c === void 0 ? void 0 : _c.quantity_free) || 0,
                scheme_rule: ((_d = item.selectedScheme) === null || _d === void 0 ? void 0 : _d.rule_name) || '',
                gift_value: item.gift_value || 0,
                parent_pref_id: item.child,
                parent_unit_id: item.parent_unit_id,
                parent_brand_id: item.brand_id,
                parent_tp: item.parent_trade_price,
                parent_qty_sold: item.parent_qty_sold,
                parent_value_sold: item.net_amount,
                final_price: item.net_amount,
                campaign_id: ((_e = item.selectedScheme) === null || _e === void 0 ? void 0 : _e.id) || 0,
                item_status: item.is_active,
                dispatch_status: 2,
                dispatch_qty: +item.stockQty,
                dispatch_amount: item.net_amount,
                reasoning: '',
                distributor_id: this.orderDetails.distributor_id,
                division_id: this.selectedRetailer.division_id || 0,
                region_id: this.orderDetails.region_id,
                area_id: this.orderDetails.area_id,
                assigned_route_id: this.orderDetails.assigned_route_id,
                territory_id: this.orderDetails.territory_id,
                booked_order_value: item.booked_order_value || 0,
                booked_total_qty: item.booked_total_qty || 0,
                is_deleted: item.isDeleted,
                quantity: +item.stockQty,
                gross_sale_amount: item.original_amount,
                total_retail_price: item.item_retail_price * item.stockQty,
                tax_class_id: item.tax_class_id,
                tax_in_percentage: item.tax_class_amount,
                tax_in_value: item.tax_amount_value || 0,
                total_tax_amount: item.tax_amount_pkr || 0,
                total_amount_after_tax: item.net_amount,
                total_discount: +item.stockQty * item.scheme_discount +
                    +item.stockQty * item.trade_discount_pkr + (+item.stockQty * item.special_discount) + item.extra_discount_pkr,
                order_id: this.orderDetails.id
            };
            return orderItem;
        });
        this.saveOrder();
    }
    cancelOrder() {
        document.getElementById('close-del').click();
        this.savingOrder = true;
        this.orderService.cancelOrder(this.orderDetails.id).subscribe(res => {
            this.savingOrder = false;
            if (res.status === 200) {
                this.toastService.showToaster({
                    message: `Order for ${this.selectedRetailer.retailer_name.toUpperCase()} canceled!`,
                    title: 'Order dispatched:',
                    type: 'success'
                });
                this.orderDetails.items = [];
                this.ordersRetailers = this.ordersRetailers.filter(x => x.id !== this.selectedRetailer.id);
                this.selectedRetailer = null;
                this.getDispatchDetails();
            }
        }, error => {
            this.savingOrder = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Error in Save Order for dispatch ::>> ', error);
                this.toastService.showToaster({
                    message: 'Something went wrong order cannot be canceled at the moment!',
                    title: 'Error:',
                    type: 'error'
                });
            }
        });
    }
    addOrderBill(order) {
        order.isAdded = true;
        let payment = this.credits.find(x => x.order_id === order.id);
        if (payment) {
            payment.recovery = +order.recovery;
        }
        else {
            payment = {
                recovery: +order.recovery, order_id: order.id, retailer_id: order.retailer_id, dispatched_bill_amount: order.order_total
            };
            this.credits.push(payment);
        }
    }
    removeOrderBill(order) {
        order.isAdded = false;
        order.recovery = 0;
        // this.credits = this.credits.filter(ord => ord.order_id !== order.id);
    }
    searchByRetailer() {
        if (this.searchText) {
            this.ordersDispList = this.remainingOrders.filter(ret => ret.retailer_name.toLowerCase().includes(this.searchText.toLowerCase()));
        }
        else {
            this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
        }
    }
    openConfirmationModal() {
        if (this.currentLoadValidation()) {
            const unSelected = this.dispatchOrderDetail.orders.filter(x => !x.isSelected);
            if (this.load.content.length === 3 && unSelected.length !== 0) {
                this.toastService.showToaster({
                    type: 'error',
                    title: 'Select All Orders:',
                    message: 'Some orders are not selected'
                });
                return;
            }
            if (this.load.content.length !== 3 && unSelected.length !== 0) {
                if (this.currentLoadContent.items.length) {
                    document.getElementById('open-create-load').click();
                }
                else {
                    this.toastService.showToaster({
                        type: 'error',
                        title: 'Select Orders:',
                        message: 'Select orders to create load'
                    });
                }
            }
            else {
                this.saveDispatch();
            }
        }
    }
    saveDispatch() {
        this.loading = true;
        let totalRecovery = 0;
        this.credits.map((x) => {
            totalRecovery = x.recovery + totalRecovery;
        });
        let totalProducts = 0;
        this.load.content.map((x) => {
            totalProducts = x.total_products + totalProducts;
        });
        this.load.content = this.load.content.map(x => {
            delete x.loadNumber;
            return x;
        });
        this.load.salesman_id = this.salemanId;
        this.load.total_orders = this.dispatchOrderDetail.orders.length;
        this.load.total_gross_amount = this.dispatchOrderDetail.summary.gross_total || 0;
        this.load.total_trade_offer = this.dispatchOrderDetail.summary.trade_offer;
        this.load.total_trade_discount = this.dispatchOrderDetail.summary.trade_discount;
        this.load.total_special_discount = this.dispatchOrderDetail.summary.special_discount;
        this.load.total_booker_discount = this.dispatchOrderDetail.summary.booker_discount;
        this.load.total_tax_amount = this.dispatchOrderDetail.summary.total_tax || 0;
        this.load.total_recovery_amount = totalRecovery;
        this.load.total_net_sale = this.dispatchOrderDetail.summary.total_price;
        this.load.total_products = totalProducts;
        this.load.distributor_id = this.distributorId;
        this.load.total_sub_loads = this.load.content.length;
        this.load.processed_date = this.orderDate;
        this.load.assignmentId = this.assignmentId;
        const order = { load: this.load, payments: this.credits };
        this.showFinalLoad = false;
        this.orderService.saveDispatchOrder(order).subscribe(res => {
            if (res.status === 200) {
                this.finalLoad = res.data;
                setTimeout(() => {
                    this.loading = false;
                    this.showFinalLoad = true;
                }, 500);
                this.dispatchOrderDetail = null;
                this.ordersDispList = [];
                this.remainingOrders = [];
                this.isAllSelected = false;
                this.setLoad();
                this.setCurrentLoad(1);
                this.load.content.push(this.currentLoadContent);
                this.toastService.showToaster({
                    type: 'success',
                    message: 'Payments and Load saved successfully!',
                    title: 'Payments and Load saved:'
                });
                this.currentTab = 4;
                this.tabChanged();
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    type: 'error',
                    message: 'Payments and Load not saved, please try again later!',
                    title: 'Error:'
                });
            }
        });
    }
    currentLoadValidation() {
        if (!this.currentLoadContent.items.length) {
            this.toastService.showToaster({
                title: 'Load Error:',
                message: 'Please select orders to add into current load',
                type: 'error'
            });
            return false;
        }
        return true;
    }
    changeCurrentLoad(ldNumber) {
        var _a;
        if (this.currentLoadValidation()) {
            this.remainingOrders = this.dispatchOrderDetail.orders.filter(x => !x.isSelected);
            this.currentLoadContent = this.load.content.find(x => x.loadNumber === ldNumber);
            const orders = (_a = this.dispatchOrderDetail) === null || _a === void 0 ? void 0 : _a.orders.filter(x => {
                if (this.currentLoadContent.order_ids.includes(x.id)) {
                    x.isSelected = true;
                    return x;
                }
            });
            if (orders.length) {
                this.remainingOrders = [...orders, ...this.remainingOrders];
            }
            this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
        }
    }
    updateDispatchedQty(item) {
        if (+item.issued_qty > 1000) {
            item.issued_qty = 0;
        }
        item.dispatched_qty = +item.issued_qty + item.actual_qty;
    }
    allSelected() {
        if (this.isAllSelected) {
            this.remainingOrders = this.remainingOrders.map(order => {
                order.isSelected = true;
                return order;
            });
            this.setAllOrdersToCurrentLoad();
        }
        else {
            this.remainingOrders = this.remainingOrders.map(order => {
                order.isSelected = false;
                return order;
            });
            this.removeAllOrdersFromCurrentLoad();
        }
        this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
    }
    setAllOrdersToCurrentLoad() {
        this.currentLoadContent.items = [];
        this.remainingOrders.forEach(order => {
            this.dispatchOrderDetail.orders = this.dispatchOrderDetail.orders.map(x => {
                if (order.id === x.id) {
                    x.isSelected = true;
                }
                return x;
            });
            this.currentLoadContent = this.dispatchService.setLoadContent(order, this.currentLoadContent);
        });
    }
    getItemName(itemId) {
        const item = this.inventory.find(x => x.item_id === itemId);
        return item.item_name;
    }
    addCurrentLoad() {
        this.remainingOrders = this.remainingOrders.filter(x => !this.currentLoadContent.order_ids.includes(x.id));
        this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
        this.setCurrentLoad(this.load.content.length + 1);
        this.load.content.push(this.currentLoadContent);
        if (this.currentLoadContent.loadNumber === 3) {
            this.isAllSelected = true;
            this.allSelected();
        }
        document.getElementById('close-confirm-load').click();
    }
    removeAllOrdersFromCurrentLoad() {
        this.currentLoadContent.items = [];
        this.dispatchOrderDetail.orders = this.dispatchOrderDetail.orders.map(x => {
            if (this.currentLoadContent.order_ids.includes(x.id)) {
                x.isSelected = false;
            }
            return x;
        });
        this.currentLoadContent.order_ids = [];
        this.currentLoadContent.total_orders = 0;
        this.currentLoadContent.total_products = 0;
    }
    retailerSelected(order) {
        if (order.isSelected) {
            this.currentLoadContent = this.dispatchService.setLoadContent(order, this.currentLoadContent);
            this.dispatchOrderDetail.orders = this.dispatchOrderDetail.orders.map(x => {
                if (order.id === x.id) {
                    x.isSelected = true;
                }
                return x;
            });
        }
        else {
            this.isAllSelected = false;
            this.currentLoadContent = this.dispatchService.removeOrderFromCurrentLoad(order, this.currentLoadContent);
            this.dispatchOrderDetail.orders = this.dispatchOrderDetail.orders.map(x => {
                if (order.id === x.id) {
                    x.isSelected = false;
                }
                return x;
            });
        }
        this.remainingOrders = this.remainingOrders.map(x => {
            if (x.id === order.id) {
                x.isSelected = order.isSelected;
            }
            return x;
        });
        this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
    }
    completeDispatch() {
        this.loading = true;
        this.orderService.completeOrderDispatch(this.finalLoad.load_id).subscribe(res => {
            this.loading = false;
            this.toastService.showToaster({
                type: 'success',
                message: 'Order dispatch completed successfully!',
                title: 'Order Dipatched Completed:'
            });
            this.router.navigateByUrl('/orders/dispatch-orders');
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    type: 'error',
                    message: 'Order Dispatch cannot be completed at the moment, please try again later!',
                    title: 'Error:'
                });
            }
        });
    }
    revertDispatch() {
        this.loading = true;
        this.orderService.revertOrderDispatch(this.finalLoad.load_id).subscribe(res => {
            this.loading = false;
            this.toastService.showToaster({
                type: 'success',
                message: 'Order dispatch reverted successfully!',
                title: 'Dipatch Reverted:'
            });
            this.currentTab = 1;
            this.credits = [];
            this.dispatchOrderDetail = null;
            this.ordersDispList = [];
            this.isAllSelected = false;
            this.tabChanged();
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    type: 'error',
                    message: 'Revert cannot be completed at the moment, please try again later!',
                    title: 'Error:'
                });
            }
        });
    }
    getBookingSheet() {
        const sheetUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiDomain}${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].BOOKING_SHEET_PDF}?emp=${this.salemanId}&date=${this.orderDate}&loadId=${this.finalLoad.load_id}`;
        window.open(sheetUrl);
    }
    getBills(size = 'A4') {
        if (this.invoiceDate) {
            this.orderService.updateDispatchInvoiceDate(this.finalLoad.load_id, this.invoiceDate).subscribe(res => {
                if (res.status === 200) {
                    document.getElementById('close-bills').click();
                    const billsUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiDomain}${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].BILLS}?type=bill&emp=${this.salemanId}&date=${this.orderDate}&dist_id=${this.distributorId}&size=${size}&status=processed&loadId=${this.finalLoad.load_id}`;
                    window.open(billsUrl);
                }
                else {
                    this.toastService.showToaster({
                        type: 'error',
                        message: 'Bill cannot be generated at the moment, please try again later!',
                        title: 'Bill cannot be generated:'
                    });
                }
            }, error => {
                if (error.status !== 1 && error.status !== 401) {
                    this.toastService.showToaster({
                        type: 'error',
                        message: 'Bill cannot be generated at the moment, please try again later!',
                        title: 'Bill cannot be generated:'
                    });
                }
            });
        }
        else {
            this.toastService.showToaster({
                type: 'error',
                message: 'Please select invoice date to generate bill(s)!',
                title: 'Please select invoice date:'
            });
        }
    }
    generateLSPDF() {
        const billsUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiDomain}${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].LS_PDF}/${this.finalLoad.load_id}/${this.salemanId}/${this.orderDate}`;
        window.open(billsUrl);
    }
}
OrderDispatchedComponent.ɵfac = function OrderDispatchedComponent_Factory(t) { return new (t || OrderDispatchedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dispatch_service__WEBPACK_IMPORTED_MODULE_7__["OrderDispatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_8__["OrdersService"])); };
OrderDispatchedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderDispatchedComponent, selectors: [["app-dispatch-order"]], decls: 128, vars: 20, consts: [[3, "selectedRetailer", "orderedProducts", "loadingProducts", "allProducts", "productSchemes", "productMerchantDiscount", "specialDiscounts", "drawerClosed", "productSelected", 4, "ngIf"], ["id", "order-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "orderLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "top-borderRed"], [1, "modal-header"], ["id", "orderLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-md-12"], [1, "modal-footer", "border-0"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "id", "close-del", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-cancel"], ["id", "billsModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "billsModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content", "top_border"], ["id", "billsModalLabel", 1, "modal-title"], ["type", "button", "id", "close-bills", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "row"], [1, "col-auto", 2, "padding-top", "6px", "font-size", "14px"], [1, "col"], ["type", "date", "id", "invoice-date", "name", "invoice-date", "placeholder", "", 1, "form-control", "select-date", 3, "ngModel", "ngModelChange"], [1, "col-12"], [1, "heading3"], [1, "row", "print-icon-div", "pb-0"], [1, "col-6", "pl-0"], [3, "click"], ["src", "assets/images/a4.svg", "alt", "", 1, "print-icon"], [1, "col-6", "pr-0"], ["src", "assets/images/a5.svg", "alt", "", 1, "print-icon"], ["id", "create-load", "tabindex", "-1", "role", "dialog", "aria-labelledby", "create-loadLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "create-loadLabel", 1, "modal-title"], ["type", "submit", "id", "close-confirm-load", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-cancel"], ["id", "order-contaienr", 1, "container"], [1, "card", "daily-operations"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "nav_M", "mb-3"], [1, "nav-item"], ["id", "pills-home-tab", 1, "nav-link", 3, "ngClass"], [1, "wz-icon"], [1, "fa", "fa-list-ul"], ["id", "pills-contact-tab", 1, "nav-link", 3, "ngClass"], [1, "fa", "fa-dollar-sign"], ["id", "pills-load-tab", 1, "nav-link", 3, "ngClass"], [1, "fa", "fa-truck"], ["id", "pills-final-tab", 1, "nav-link", 3, "ngClass"], [1, "fa", "fa-check"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "tab_M", "p-0", "PT-15", "fade", 3, "ngClass"], [1, "row", "m-0", "grayTopborder"], ["id", "orderList-id", 1, "col-4", "p-0"], [3, "retailers", "loading", "retailerChanged"], [1, "col", "p-0"], ["class", "rightHeight", 4, "ngIf"], ["class", "col-md-12 bottom-act-btn", 4, "ngIf"], ["id", "pills-contact", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "p-0", "PT-20", "tab_M", "fade", 3, "ngClass"], [1, "col-12", "PT-15"], ["datatable", "", "class", "table table-hover dt-responsive nowrap", "id", "example", "style", "width:100%", 3, "dtOptions", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], ["id", "pills-load", "role", "tabpanel", "aria-labelledby", "pills-load-tab", 1, "tab-pane", "tab_M", "p-0", "PT-15", "fade", 3, "ngClass"], ["class", "row m-0 grayTopborder", 4, "ngIf"], ["id", "pills-final", "role", "tabpanel", "aria-labelledby", "pills-final-tab", 1, "tab-pane", "tab_M", "p-0", "PT-15", "fade", 3, "ngClass"], [1, "col-8", "PB-30"], [1, "header", "PT-10", "PB-10", "mb-15"], [1, "w-100"], ["datatable", "", "class", "table table-hover dt-responsive nowrap dc-table", "id", "example2", "style", "width:100%", 3, "dtOptions", 4, "ngIf"], [1, "col-4"], ["class", "cash-report", 4, "ngIf"], ["class", "col-md-12 pl-10 pr-10 text-center", 4, "ngIf"], [3, "selectedRetailer", "orderedProducts", "loadingProducts", "allProducts", "productSchemes", "productMerchantDiscount", "specialDiscounts", "drawerClosed", "productSelected"], [1, "rightHeight"], [3, "orderDetail", "schemes", "selectedRetailer", "orders", "allProducts", "specialDiscounts", "merchantDiscount", "newProduct", "orderType", "openDrawer", 4, "ngIf"], ["class", "no-content", 4, "ngIf"], [3, "orderDetail", "schemes", "selectedRetailer", "orders", "allProducts", "specialDiscounts", "merchantDiscount", "newProduct", "orderType", "openDrawer"], [1, "no-content"], [1, "no-content-container", 2, "margin", "auto", "display", "table", "text-align", "center", "color", "#B7B7B7"], ["src", "assets/images/select order-icon.svg", "alt", ""], [1, "col-md-12", "bottom-act-btn"], ["class", "btn btn-primary mr-2 save_order_execution font13", 3, "disabled", "click", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#order-del", "class", "btn btn-cancel cancel_order_btn font13", 3, "disabled", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary mr-2", "disabled", "", 4, "ngIf"], [1, "btn", "btn-primary", "mr-2", "save_order_execution", "font13", 3, "disabled", "click"], ["data-toggle", "modal", "data-target", "#order-del", 1, "btn", "btn-cancel", "cancel_order_btn", "font13", 3, "disabled"], ["type", "submit", "disabled", "", 1, "btn", "btn-primary", "mr-2"], ["role", "status", 1, "spinner-border", "text-light"], [1, "sr-only"], ["datatable", "", "id", "example", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "number", "placeholder", "0", 1, "form-control", "value_input", 3, "readonly", "id", "ngModel", "name", "ngModelChange", "keydown"], ["class", "input-error", "style", "width: 100px;max-width: 100px;", 4, "ngIf"], ["class", "btn btn-default btn-line", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-default red-bg", 3, "click", 4, "ngIf"], [1, "input-error", 2, "width", "100px", "max-width", "100px"], [1, "btn", "btn-default", "btn-line", 3, "disabled", "click"], [1, "btn", "btn-default", "red-bg", 3, "click"], ["id", "orderList-id2", "class", "col-4 p-0", 4, "ngIf"], ["class", "col p-0", 4, "ngIf"], ["id", "orderList-id2", 1, "col-4", "p-0"], [1, "_selectProList", "ProListHeight"], [1, "header", "ProListHD"], [1, "select-all-op"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "all-selected", "id", "all-selected", "id", "all-s", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "all-s", 1, "custom-control-label"], [1, "APS-list"], [1, "fa", "fa-search"], ["type", "text", "id", "", "placeholder", "Search", 1, "form-control"], [1, "ProList-div"], ["class", "col-12 order-list select-checkmark", 4, "ngFor", "ngForOf"], [1, "col-12", "order-list", "select-checkmark"], [1, "ord-no"], [1, "col-8", "pr-0"], [2, "margin-bottom", "2px"], [1, "fa", "fa-map-marker-alt"], [1, "col-4", "pl-0"], ["type", "checkbox", 1, "custom-control-input", 3, "name", "ngModel", "id", "change", "ngModelChange"], [1, "custom-control-label", 3, "for"], [1, "text-right"], [1, "or-val"], [1, "rightHeight", "PT-5"], [1, "header-tabs"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item nav-link", "id", "nav-load1-tab", 3, "id", "ngClass", "click", 4, "ngFor", "ngForOf"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-load1", "role", "tabpanel", "aria-labelledby", "nav-load1-tab", 1, "tab-pane", "fade", "show", "active", "body_sales_agants"], [1, "col-12", "retailerTable"], [1, "table", "table-hover", "dt-responsive", "nowrap", "th-boarder", 2, "width", "100%"], ["rowspan", "2"], ["colspan", "1", 2, "text-align", "center"], [2, "text-align", "center"], ["id", "nav-load1-tab", 1, "nav-item", "nav-link", 3, "id", "ngClass", "click"], ["type", "number", 1, "value_input", 3, "ngModel", "name", "id", "ngModelChange", "keyup", "keydown"], ["datatable", "", "id", "example2", 1, "table", "table-hover", "dt-responsive", "nowrap", "dc-table", 2, "width", "100%", 3, "dtOptions"], ["rowspan", "2", 2, "vertical-align", "middle"], ["colspan", "2", "style", "text-align:center", 4, "ngFor", "ngForOf"], ["colspan", "2", 2, "text-align", "center"], [1, "cash-report"], [1, "header"], [1, "report_value"], [1, "report_value", 2, "color", "#0038ba"], [2, "padding", "10px 15px"], [1, "row", "act-btn-print"], [1, "btn", "btn-primary", "print-btn", "fontSize", 3, "click"], [1, "fa", "fa-print"], ["data-toggle", "modal", "data-target", "#billsModal", 1, "btn", "btn-primary", "print-btn", "fontSize"], [1, "col-6", "pl-5", "pt-5"], ["class", "btn btn-primary red-bg cancel_dispatch w-100", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary red-bg w-100 mr-2", "disabled", "", 4, "ngIf"], [1, "col-6", "pl-0", "pr-5", "pt-5"], ["class", "btn btn-primary m-0 nextButton w-100", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary w-100 mr-2", "disabled", "", 4, "ngIf"], [1, "btn", "btn-primary", "red-bg", "cancel_dispatch", "w-100", 3, "click"], ["type", "submit", "disabled", "", 1, "btn", "btn-primary", "red-bg", "w-100", "mr-2"], [1, "btn", "btn-primary", "m-0", "nextButton", "w-100", 3, "click"], ["type", "submit", "disabled", "", 1, "btn", "btn-primary", "w-100", "mr-2"], [1, "col-md-12", "pl-10", "pr-10", "text-center"], [1, "execFooter"], ["type", "submit", 1, "btn", "btn-primary", "m-0", "mr-2", 3, "disabled", "click"], ["type", "submit", "class", "btn btn-primary m-0", 3, "disabled", "click", 4, "ngIf"], ["id", "open-create-load", "data-toggle", "modal", "data-target", "#create-load", 2, "display", "none"], ["type", "submit", 1, "btn", "btn-primary", "m-0", 3, "disabled", "click"]], template: function OrderDispatchedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderDispatchedComponent_app_products_drawer_0_Template, 1, 7, "app-products-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel Order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Are you sure you want to cancel the order?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_Template_button_click_16_listener() { return ctx.cancelOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Please chose invoice date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Select Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderDispatchedComponent_Template_input_ngModelChange_35_listener($event) { return ctx.invoiceDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Select paper size for print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_Template_a_click_44_listener() { return ctx.getBills("A4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "A4 Portrait Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_Template_a_click_49_listener() { return ctx.getBills("A5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "A5 Landscape Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Confirm Load ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Are you sure you want to create New Load?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDispatchedComponent_Template_button_click_68_listener() { return ctx.addCurrentLoad(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Load");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Final");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "app-retailer-sub-list", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("retailerChanged", function OrderDispatchedComponent_Template_app_retailer_sub_list_retailerChanged_105_listener($event) { return ctx.getOrderDetailsByRetailer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, OrderDispatchedComponent_div_107_Template, 4, 3, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, OrderDispatchedComponent_div_108_Template, 4, 3, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, OrderDispatchedComponent_table_111_Template, 15, 2, "table", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, OrderDispatchedComponent_div_112_Template, 2, 0, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, OrderDispatchedComponent_div_114_Template, 4, 3, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Load ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, OrderDispatchedComponent_table_124_Template, 15, 6, "table", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, OrderDispatchedComponent_div_126_Template, 82, 44, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, OrderDispatchedComponent_div_127_Template, 8, 3, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab === 1 ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab === 2 ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab === 3 ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab === 4 ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab === 1 ? "active show" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("retailers", ctx.ordersRetailers)("loading", ctx.loading || ctx.loadingProduct || ctx.savingOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedRetailer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab === 2 ? "active show" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.recoveryRetailers == null ? null : ctx.recoveryRetailers.length) && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab === 3 ? "active show" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab === 4 ? "active show" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFinalLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.finalLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab !== 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _shared_components_retailer_sub_listing_retailer_sub_listing_component__WEBPACK_IMPORTED_MODULE_11__["RetailerSubListComponent"], _shared_components_product_right_panel_product_right_panel_compoent__WEBPACK_IMPORTED_MODULE_12__["ProductsRightPanelComponent"], _shared_components_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_13__["OrderItemsListComponent"], _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_14__["WhiteLoaderComponent"], angular_datatables__WEBPACK_IMPORTED_MODULE_15__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: [".dispatch-order[_ngcontent-%COMP%]{padding:0px!important;}\r\n.dispatch-order[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{max-width: 1220px;}\r\n.dispatch-order[_ngcontent-%COMP%]{padding: 0}\r\n.retailerTable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { font-size: 12px; border: solid 1px #fff !important; vertical-align: middle; padding: 2px 5px!important; }\r\n.retailerTable[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { font-size: 12px!important; padding: 5px 4px!important; vertical-align: middle; line-height: 1 }\r\n#wrapper[_ngcontent-%COMP%]   #content-wrapper[_ngcontent-%COMP%] {padding-left: 0!important;}\r\n.container[_ngcontent-%COMP%] {max-width: 1280px;}\r\n.add-stock-input[_ngcontent-%COMP%]{font-size: 13px; width: 80px; height: 25px; box-shadow: none; border-color:#dddddd; padding: 0px 5px 0 8px;}\r\n.CP-name[_ngcontent-%COMP%]{letter-spacing: 1px;}\r\n.CP-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{letter-spacing:1px; display: block; margin-top: 4px;}\r\n.ProList-div[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top: -2px; margin-bottom: -2px; margin-left: 4px;}\r\n._selectProList[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .add_button[_ngcontent-%COMP%] {padding: 4px 8px 3px 8px; right: 15px;}\r\n#orderList-id[_ngcontent-%COMP%]{flex: 0 0 300px; max-width: 300px; width: 300px;}\r\n#orderList-id2[_ngcontent-%COMP%]{flex: 0 0 300px; max-width: 300px; width: 300px;}\r\n.value_input[_ngcontent-%COMP%] { padding: 2px; margin: 0!important; font-size: 12px; box-shadow: none;height: 22px; width: 52px; border: solid 1px #e2e6ea;}\r\n.rightHeight[_ngcontent-%COMP%]{ height: calc(100vh - 249px); overflow-y: auto;}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button { -webkit-appearance: none;  margin: 0;}\r\n\r\ninput[type=number][_ngcontent-%COMP%] {-moz-appearance: textfield;}\r\n.no-products[_ngcontent-%COMP%] {text-align: center; color: lightgray;}\r\n.daily-operations[_ngcontent-%COMP%]   .nav_M[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .daily-operations[_ngcontent-%COMP%]   .nav_M[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{padding-top: 15px;}\r\n.cash-report[_ngcontent-%COMP%]{background-color: #f8f8f8; min-height: calc(100vh - 210px);}\r\n.cash-report[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{background: linear-gradient(0deg, #f8f8f8 0%, #f8f8f8 50%); padding:15px 20px;}\r\n.cash-report[_ngcontent-%COMP%]   .report_value[_ngcontent-%COMP%] {\r\n    background-color: #fff; font-size: 13px;\r\n    position: relative;\r\n    padding: 10px 10px;\r\n    letter-spacing: 0.5px;\r\n    margin-bottom: 5px; margin-top: 5px;\r\n    box-shadow: 0 2px 8px 0 rgba(79,79,79,.1); line-height: 1\r\n}\r\n.cash-report[_ngcontent-%COMP%]   .report_value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family: 'Rationale', sans-serif; line-height: 1; font-size: 18px; float: right; margin-top: -2px}\r\n.totalcash[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size: 20px!important; color: #0038ba}\r\n.cash-report[_ngcontent-%COMP%]   .value_input[_ngcontent-%COMP%]{float: right; width: 85px;}\r\n.addsalesman[_ngcontent-%COMP%]{font-size: 11px;width: 100%;line-height: 1; margin-top: 5px;}\r\n.return-btn[_ngcontent-%COMP%]{line-height: 1; margin-top: 10px;}\r\n.add-expense[_ngcontent-%COMP%]{font-size: 13px;\r\n    padding: 2px 10px;\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n.red-bg[_ngcontent-%COMP%]{border: solid 1px #f12300}\r\n.input-error[_ngcontent-%COMP%] {font-size: 13px; color: red;}\r\n.act-btn-print[_ngcontent-%COMP%]{margin: 0px 0 0 0}\r\n.act-btn-print[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]{padding: 5px;}\r\n.print-btn[_ngcontent-%COMP%]{font-size: 14px; text-align: center; background: linear-gradient(90deg, #fff 0%, #fff 100%); color: #282828 !important; border: solid 1px #0038ba; box-shadow: none; padding: 10px 14px; white-space: normal; width: 100%; min-height: 85px; line-height: 16px;}\r\n.print-btn[_ngcontent-%COMP%]:hover{background: linear-gradient(90deg, #1e54d3 0%, #0038ba 100%); color: #fff !important}\r\n.print-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{display: block; font-size: 16px; padding: 5px; margin-bottom: 5px;}\r\n.select-checkmark[_ngcontent-%COMP%]   .salevalue[_ngcontent-%COMP%]{text-align: right; margin: auto; vertical-align: middle}\r\n.select-checkmark[_ngcontent-%COMP%]   .ord-no[_ngcontent-%COMP%]{top: 14px; font-size: 45px}\r\n.select-checkmark[_ngcontent-%COMP%]   .custom-control[_ngcontent-%COMP%]{text-align: right; margin-top: -15px; margin-right: -10px; margin-bottom: 13px;}\r\n.select-all-op[_ngcontent-%COMP%] {position: absolute; top:-3px; right: 15px;}\r\n.select-all-op[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]{font-size: 12px; line-height: 2.2}\r\n.header-tabs[_ngcontent-%COMP%]{box-shadow: none; border-bottom:solid 1px #e2e2e2}\r\n.header-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{ border-bottom:solid 1px #e2e2e2}\r\n.header-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .header-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .header-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{padding:10px 26px; height: 42px;}\r\n.header-tabs[_ngcontent-%COMP%]   .add_button[_ngcontent-%COMP%]{letter-spacing: 1px; padding:4px 15px; right: 15px; box-shadow: none}\r\n.dc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align: middle; padding: 4px 5px; border: solid 1px #fff!important}\r\n.dc-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding: 5px 8px!important; }\r\n.wz-icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {color: #fff;}\r\n.th-boarder[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: solid 1px #fff !important;\r\n    vertical-align: middle;\r\n    padding: 2px 5px!important;\r\n}\r\n.daily-operations[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]{padding-bottom: 10px}\r\n.bottom-act-btn[_ngcontent-%COMP%]{text-align: right; padding-top: 15px; padding-bottom: 15px}\r\n.bottom-act-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    letter-spacing: 1px;\r\n    font-size: 12px;\r\n    padding: 4px 12px; box-shadow: none}\r\n.execFooter[_ngcontent-%COMP%] {\r\n    background: #F6F6F6;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px; margin-top: 5px;\r\n}\r\n.cash-report[_ngcontent-%COMP%]   .value_input[_ngcontent-%COMP%] { float: right; width: 95px; }\r\n._selectProList[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {padding: 15px 15px !important;}\r\n.print-icon-div[_ngcontent-%COMP%]{text-align: center; padding: 15px;}\r\n.print-icon-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display: inline-block; border: solid 1px #e9ecef; padding: 15px; width: 100%; text-align: center; text-decoration: none; color: #282828; font-size: 13px;}\r\n.print-icon-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:HOVER{border: solid 1px #0038ba; color: #0038ba; box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);}\r\n.print-icon[_ngcontent-%COMP%]{filter: grayscale(1); width: 45px; opacity: 0.7; display: block; margin: auto; margin-top: 10px; margin-bottom: 15px;}\r\n.print-icon-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:HOVER   .print-icon[_ngcontent-%COMP%]{filter:none; opacity: 1;}\r\n.heading3[_ngcontent-%COMP%]{margin: 0; font-size: 16px;}\r\n.select-date[_ngcontent-%COMP%], .select-date[_ngcontent-%COMP%]:focus{box-shadow: none; border: none; background-color:#f6f6f6; font-size: 14px; height: 30px; width: 200px}\r\n.no-content[_ngcontent-%COMP%] {width:100%;height:65vh;display:flex;}\r\n.no-content[_ngcontent-%COMP%]   .no-content-container[_ngcontent-%COMP%] {margin: auto;display:table;text-align: center; color:#B7B7B7}\r\n.no-content[_ngcontent-%COMP%]   .no-content-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 70px; height: 70px; margin: auto auto 10px auto; display: block}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcmRlcnMvY29tcG9uZW50cy9vcmRlci1kaXNwYXRjaGVkL29yZGVyLWRpc3BhdGNoZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IscUJBQXFCLENBQUM7QUFDdEMsMkJBQTJCLGlCQUFpQixDQUFDO0FBQzdDLGdCQUFnQixVQUFVO0FBQzFCLGlDQUFpQyxlQUFlLEVBQUUsaUNBQWlDLEVBQUUsc0JBQXNCLEVBQUUsMEJBQTBCLEVBQUU7QUFDekksaUNBQWlDLHlCQUF5QixFQUFFLDBCQUEwQixFQUFFLHNCQUFzQixFQUFFLGVBQWU7QUFDL0gsMkJBQTJCLHlCQUF5QixDQUFDO0FBQ3JELFlBQVksaUJBQWlCLENBQUM7QUFDOUIsaUJBQWlCLGVBQWUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixDQUFDO0FBQzVILFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsY0FBYyxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDO0FBQ2xFLHdCQUF3QixnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsQ0FBQztBQUNoRixxQ0FBcUMsd0JBQXdCLEVBQUUsV0FBVyxDQUFDO0FBQzNFLGNBQWMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQztBQUM5RCxlQUFlLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUM7QUFDL0QsZUFBZSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUseUJBQXlCLENBQUM7QUFDekksY0FBYywyQkFBMkIsRUFBRSxnQkFBZ0IsQ0FBQztBQUM1RCxnQ0FBZ0M7QUFDaEMscUVBQXFFLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztBQUMxRyxZQUFZO0FBQUMsb0JBQW9CLDBCQUEwQixDQUFDO0FBQzVELGNBQWMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7QUFDbkQsc0VBQXNFLGlCQUFpQixDQUFDO0FBQ3hGLGFBQWEseUJBQXlCLEVBQUUsK0JBQStCLENBQUM7QUFDeEUscUJBQXFCLDBEQUEwRCxFQUFFLGlCQUFpQixDQUFDO0FBQ25HO0lBQ0ksc0JBQXNCLEVBQUUsZUFBZTtJQUN2QyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBRSxlQUFlO0lBR25DLHlDQUF5QyxFQUFFO0FBQy9DO0FBQ0EsZ0NBQWdDLG9DQUFvQyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGdCQUFnQjtBQUNySSxnQkFBZ0IseUJBQXlCLEVBQUUsY0FBYztBQUN6RCwwQkFBMEIsWUFBWSxFQUFFLFdBQVcsQ0FBQztBQUNwRCxhQUFhLGVBQWUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQztBQUN6RSxZQUFZLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQztBQUM3QyxhQUFhLGVBQWU7SUFDeEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxjQUFjLGVBQWUsRUFBRSxVQUFVLENBQUM7QUFDMUMsZUFBZSxpQkFBaUI7QUFDaEMsc0JBQXNCLFlBQVksQ0FBQztBQUNuQyxXQUFXLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxzREFBc0QsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUM7QUFDMVEsaUJBQWlCLDREQUE0RCxFQUFFLHNCQUFzQjtBQUNyRyxlQUFlLGNBQWMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixDQUFDO0FBQ2pGLDZCQUE2QixpQkFBaUIsRUFBRSxZQUFZLEVBQUUsc0JBQXNCO0FBQ3BGLDBCQUEwQixTQUFTLEVBQUUsZUFBZTtBQUNwRCxtQ0FBbUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUM7QUFDbEgsZ0JBQWdCLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUM7QUFDMUQscUNBQXFDLGVBQWUsRUFBRSxnQkFBZ0I7QUFDdEUsYUFBYSxnQkFBZ0IsRUFBRSwrQkFBK0I7QUFDOUQsa0NBQWtDLCtCQUErQjtBQUNqRSwySEFBMkgsaUJBQWlCLEVBQUUsWUFBWSxDQUFDO0FBQzNKLHlCQUF5QixtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCO0FBQzdGLG1CQUFtQixzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxnQ0FBZ0M7QUFDN0YsYUFBYSwwQkFBMEIsRUFBRTtBQUN6QyxjQUFjLFdBQVcsQ0FBQztBQUMxQjtJQUNJLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsMEJBQTBCO0FBQzlCO0FBQ0EsK0JBQStCLG9CQUFvQjtBQUNuRCxnQkFBZ0IsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CO0FBQzFFO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUIsRUFBRSxnQkFBZ0I7QUFDdkM7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQixFQUFFLGVBQWU7QUFDekM7QUFDQSw0QkFBNEIsWUFBWSxFQUFFLFdBQVcsRUFBRTtBQUN2RCx5QkFBeUIsNkJBQTZCLENBQUM7QUFDdkQsZ0JBQWdCLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztBQUNsRCxrQkFBa0IscUJBQXFCLEVBQUUseUJBQXlCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDO0FBQzNLLHdCQUF3Qix5QkFBeUIsRUFBRSxjQUFjLEVBQUUsK0NBQStDLENBQUM7QUFDbkgsWUFBWSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7QUFDakksb0NBQW9DLFdBQVcsRUFBRSxVQUFVLENBQUM7QUFDNUQsVUFBVSxTQUFTLEVBQUUsZUFBZSxDQUFDO0FBQ3JDLGlDQUFpQyxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxZQUFZO0FBQ3RJLGFBQWEsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7QUFDakQsbUNBQW1DLFlBQVksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsYUFBYTtBQUMvRix1Q0FBdUMsV0FBVyxFQUFFLFlBQVksRUFBRSwyQkFBMkIsRUFBRSxjQUFjIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vcmRlcnMvY29tcG9uZW50cy9vcmRlci1kaXNwYXRjaGVkL29yZGVyLWRpc3BhdGNoZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwYXRjaC1vcmRlcntwYWRkaW5nOjBweCFpbXBvcnRhbnQ7fVxyXG4uZGlzcGF0Y2gtb3JkZXIgLmNvbnRhaW5lcnttYXgtd2lkdGg6IDEyMjBweDt9XHJcbi5kaXNwYXRjaC1vcmRlcntwYWRkaW5nOiAwfVxyXG4ucmV0YWlsZXJUYWJsZSAudGFibGUgdGhlYWQgdGggeyBmb250LXNpemU6IDEycHg7IGJvcmRlcjogc29saWQgMXB4ICNmZmYgIWltcG9ydGFudDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgcGFkZGluZzogMnB4IDVweCFpbXBvcnRhbnQ7IH1cclxuLnJldGFpbGVyVGFibGUgLnRhYmxlIHRib2R5IHRkIHsgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDsgcGFkZGluZzogNXB4IDRweCFpbXBvcnRhbnQ7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IGxpbmUtaGVpZ2h0OiAxIH1cclxuI3dyYXBwZXIgI2NvbnRlbnQtd3JhcHBlciB7cGFkZGluZy1sZWZ0OiAwIWltcG9ydGFudDt9XHJcbi5jb250YWluZXIge21heC13aWR0aDogMTI4MHB4O31cclxuLmFkZC1zdG9jay1pbnB1dHtmb250LXNpemU6IDEzcHg7IHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDI1cHg7IGJveC1zaGFkb3c6IG5vbmU7IGJvcmRlci1jb2xvcjojZGRkZGRkOyBwYWRkaW5nOiAwcHggNXB4IDAgOHB4O31cclxuLkNQLW5hbWV7bGV0dGVyLXNwYWNpbmc6IDFweDt9XHJcbi5DUC1uYW1lIHNwYW57bGV0dGVyLXNwYWNpbmc6MXB4OyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogNHB4O31cclxuLlByb0xpc3QtZGl2IC50YWJsZSBpbWd7bWFyZ2luLXRvcDogLTJweDsgbWFyZ2luLWJvdHRvbTogLTJweDsgbWFyZ2luLWxlZnQ6IDRweDt9XHJcbi5fc2VsZWN0UHJvTGlzdCAuaGVhZGVyIC5hZGRfYnV0dG9uIHtwYWRkaW5nOiA0cHggOHB4IDNweCA4cHg7IHJpZ2h0OiAxNXB4O31cclxuI29yZGVyTGlzdC1pZHtmbGV4OiAwIDAgMzAwcHg7IG1heC13aWR0aDogMzAwcHg7IHdpZHRoOiAzMDBweDt9XHJcbiNvcmRlckxpc3QtaWQye2ZsZXg6IDAgMCAzMDBweDsgbWF4LXdpZHRoOiAzMDBweDsgd2lkdGg6IDMwMHB4O31cclxuLnZhbHVlX2lucHV0IHsgcGFkZGluZzogMnB4OyBtYXJnaW46IDAhaW1wb3J0YW50OyBmb250LXNpemU6IDEycHg7IGJveC1zaGFkb3c6IG5vbmU7aGVpZ2h0OiAyMnB4OyB3aWR0aDogNTJweDsgYm9yZGVyOiBzb2xpZCAxcHggI2UyZTZlYTt9XHJcbi5yaWdodEhlaWdodHsgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQ5cHgpOyBvdmVyZmxvdy15OiBhdXRvO31cclxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLCBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgIG1hcmdpbjogMDt9XHJcbi8qIEZpcmVmb3ggKi9pbnB1dFt0eXBlPW51bWJlcl0gey1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO31cclxuLm5vLXByb2R1Y3RzIHt0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiBsaWdodGdyYXk7fVxyXG4uZGFpbHktb3BlcmF0aW9ucyAubmF2X00gYSwgLmRhaWx5LW9wZXJhdGlvbnMgLm5hdl9NIC5uYXYtbGluay5hY3RpdmV7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4uY2FzaC1yZXBvcnR7YmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODsgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIxMHB4KTt9XHJcbi5jYXNoLXJlcG9ydCAuaGVhZGVye2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZjhmOGY4IDAlLCAjZjhmOGY4IDUwJSk7IHBhZGRpbmc6MTVweCAyMHB4O31cclxuLmNhc2gtcmVwb3J0IC5yZXBvcnRfdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoNzksNzksNzksLjEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDc5LDc5LDc5LC4xKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoNzksNzksNzksLjEpOyBsaW5lLWhlaWdodDogMVxyXG59XHJcbi5jYXNoLXJlcG9ydCAucmVwb3J0X3ZhbHVlIHNwYW57Zm9udC1mYW1pbHk6ICdSYXRpb25hbGUnLCBzYW5zLXNlcmlmOyBsaW5lLWhlaWdodDogMTsgZm9udC1zaXplOiAxOHB4OyBmbG9hdDogcmlnaHQ7IG1hcmdpbi10b3A6IC0ycHh9XHJcbi50b3RhbGNhc2ggc3Bhbntmb250LXNpemU6IDIwcHghaW1wb3J0YW50OyBjb2xvcjogIzAwMzhiYX1cclxuLmNhc2gtcmVwb3J0IC52YWx1ZV9pbnB1dHtmbG9hdDogcmlnaHQ7IHdpZHRoOiA4NXB4O31cclxuLmFkZHNhbGVzbWFue2ZvbnQtc2l6ZTogMTFweDt3aWR0aDogMTAwJTtsaW5lLWhlaWdodDogMTsgbWFyZ2luLXRvcDogNXB4O31cclxuLnJldHVybi1idG57bGluZS1oZWlnaHQ6IDE7IG1hcmdpbi10b3A6IDEwcHg7fVxyXG4uYWRkLWV4cGVuc2V7Zm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4ucmVkLWJne2JvcmRlcjogc29saWQgMXB4ICNmMTIzMDB9XHJcbi5pbnB1dC1lcnJvciB7Zm9udC1zaXplOiAxM3B4OyBjb2xvcjogcmVkO31cclxuLmFjdC1idG4tcHJpbnR7bWFyZ2luOiAwcHggMCAwIDB9XHJcbi5hY3QtYnRuLXByaW50IC5jb2wtNHtwYWRkaW5nOiA1cHg7fVxyXG4ucHJpbnQtYnRue2ZvbnQtc2l6ZTogMTRweDsgdGV4dC1hbGlnbjogY2VudGVyOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmYgMCUsICNmZmYgMTAwJSk7IGNvbG9yOiAjMjgyODI4ICFpbXBvcnRhbnQ7IGJvcmRlcjogc29saWQgMXB4ICMwMDM4YmE7IGJveC1zaGFkb3c6IG5vbmU7IHBhZGRpbmc6IDEwcHggMTRweDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgd2lkdGg6IDEwMCU7IG1pbi1oZWlnaHQ6IDg1cHg7IGxpbmUtaGVpZ2h0OiAxNnB4O31cclxuLnByaW50LWJ0bjpob3ZlcntiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxZTU0ZDMgMCUsICMwMDM4YmEgMTAwJSk7IGNvbG9yOiAjZmZmICFpbXBvcnRhbnR9XHJcbi5wcmludC1idG4gLmZhe2Rpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDE2cHg7IHBhZGRpbmc6IDVweDsgbWFyZ2luLWJvdHRvbTogNXB4O31cclxuLnNlbGVjdC1jaGVja21hcmsgLnNhbGV2YWx1ZXt0ZXh0LWFsaWduOiByaWdodDsgbWFyZ2luOiBhdXRvOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlfVxyXG4uc2VsZWN0LWNoZWNrbWFyayAub3JkLW5ve3RvcDogMTRweDsgZm9udC1zaXplOiA0NXB4fVxyXG4uc2VsZWN0LWNoZWNrbWFyayAgLmN1c3RvbS1jb250cm9se3RleHQtYWxpZ246IHJpZ2h0OyBtYXJnaW4tdG9wOiAtMTVweDsgbWFyZ2luLXJpZ2h0OiAtMTBweDsgbWFyZ2luLWJvdHRvbTogMTNweDt9XHJcbi5zZWxlY3QtYWxsLW9wIHtwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDotM3B4OyByaWdodDogMTVweDt9XHJcbi5zZWxlY3QtYWxsLW9wIC5jdXN0b20tY29udHJvbC1sYWJlbHtmb250LXNpemU6IDEycHg7IGxpbmUtaGVpZ2h0OiAyLjJ9XHJcbi5oZWFkZXItdGFic3tib3gtc2hhZG93OiBub25lOyBib3JkZXItYm90dG9tOnNvbGlkIDFweCAjZTJlMmUyfVxyXG4uaGVhZGVyLXRhYnMgLm5hdi10YWJzIC5uYXYtbGlua3sgYm9yZGVyLWJvdHRvbTpzb2xpZCAxcHggI2UyZTJlMn1cclxuLmhlYWRlci10YWJzIC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5oZWFkZXItdGFicyAubmF2LXRhYnMgLm5hdi1saW5rLCAuaGVhZGVyLXRhYnMgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7cGFkZGluZzoxMHB4IDI2cHg7IGhlaWdodDogNDJweDt9XHJcbi5oZWFkZXItdGFicyAuYWRkX2J1dHRvbntsZXR0ZXItc3BhY2luZzogMXB4OyBwYWRkaW5nOjRweCAxNXB4OyByaWdodDogMTVweDsgYm94LXNoYWRvdzogbm9uZX1cclxuLmRjLXRhYmxlIHRoZWFkIHRoe3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IHBhZGRpbmc6IDRweCA1cHg7IGJvcmRlcjogc29saWQgMXB4ICNmZmYhaW1wb3J0YW50fVxyXG4uZGMtdGFibGUgdGR7cGFkZGluZzogNXB4IDhweCFpbXBvcnRhbnQ7IH1cclxuLnd6LWljb24gLmZhIHtjb2xvcjogI2ZmZjt9XHJcbi50aC1ib2FyZGVyIHRoZWFkIHRoIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmYgIWltcG9ydGFudDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nOiAycHggNXB4IWltcG9ydGFudDtcclxufVxyXG4uZGFpbHktb3BlcmF0aW9ucyAudGFiLWNvbnRlbnR7cGFkZGluZy1ib3R0b206IDEwcHh9XHJcbi5ib3R0b20tYWN0LWJ0bnt0ZXh0LWFsaWduOiByaWdodDsgcGFkZGluZy10b3A6IDE1cHg7IHBhZGRpbmctYm90dG9tOiAxNXB4fVxyXG4uYm90dG9tLWFjdC1idG4gLmJ0biB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNHB4IDEycHg7IGJveC1zaGFkb3c6IG5vbmV9XHJcbi5leGVjRm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNGNkY2RjY7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4OyBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmNhc2gtcmVwb3J0IC52YWx1ZV9pbnB1dCB7IGZsb2F0OiByaWdodDsgd2lkdGg6IDk1cHg7IH1cclxuLl9zZWxlY3RQcm9MaXN0IC5oZWFkZXIge3BhZGRpbmc6IDE1cHggMTVweCAhaW1wb3J0YW50O31cclxuLnByaW50LWljb24tZGl2e3RleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMTVweDt9XHJcbi5wcmludC1pY29uLWRpdiBhe2Rpc3BsYXk6IGlubGluZS1ibG9jazsgYm9yZGVyOiBzb2xpZCAxcHggI2U5ZWNlZjsgcGFkZGluZzogMTVweDsgd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlcjsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogIzI4MjgyODsgZm9udC1zaXplOiAxM3B4O31cclxuLnByaW50LWljb24tZGl2IGE6SE9WRVJ7Ym9yZGVyOiBzb2xpZCAxcHggIzAwMzhiYTsgY29sb3I6ICMwMDM4YmE7IGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO31cclxuLnByaW50LWljb257ZmlsdGVyOiBncmF5c2NhbGUoMSk7IHdpZHRoOiA0NXB4OyBvcGFjaXR5OiAwLjc7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IGF1dG87IG1hcmdpbi10b3A6IDEwcHg7IG1hcmdpbi1ib3R0b206IDE1cHg7fVxyXG4ucHJpbnQtaWNvbi1kaXYgYTpIT1ZFUiAucHJpbnQtaWNvbntmaWx0ZXI6bm9uZTsgb3BhY2l0eTogMTt9XHJcbi5oZWFkaW5nM3ttYXJnaW46IDA7IGZvbnQtc2l6ZTogMTZweDt9XHJcbi5zZWxlY3QtZGF0ZSwgLnNlbGVjdC1kYXRlOmZvY3Vze2JveC1zaGFkb3c6IG5vbmU7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjojZjZmNmY2OyBmb250LXNpemU6IDE0cHg7IGhlaWdodDogMzBweDsgd2lkdGg6IDIwMHB4fVxyXG4ubm8tY29udGVudCB7d2lkdGg6MTAwJTtoZWlnaHQ6NjV2aDtkaXNwbGF5OmZsZXg7fVxyXG4ubm8tY29udGVudCAubm8tY29udGVudC1jb250YWluZXIge21hcmdpbjogYXV0bztkaXNwbGF5OnRhYmxlO3RleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6I0I3QjdCN31cclxuLm5vLWNvbnRlbnQgLm5vLWNvbnRlbnQtY29udGFpbmVyIGltZyB7d2lkdGg6IDcwcHg7IGhlaWdodDogNzBweDsgbWFyZ2luOiBhdXRvIGF1dG8gMTBweCBhdXRvOyBkaXNwbGF5OiBibG9ja31cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDispatchedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dispatch-order',
                templateUrl: 'order-dispatched.component.html',
                styleUrls: ['./order-dispatched.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }, { type: _shared_services__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: _core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }, { type: _services_dispatch_service__WEBPACK_IMPORTED_MODULE_7__["OrderDispatchService"] }, { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_8__["OrdersService"] }]; }, null); })();


/***/ }),

/***/ "8v8s":
/*!****************************************************!*\
  !*** ./src/app/modules/orders/orders.component.ts ***!
  \****************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class OrdersComponent {
    constructor() {
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(); };
OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders-component"]], decls: 1, vars: 0, template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-orders-component',
                templateUrl: './orders.component.html',
                styleUrls: ['./orders.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AH8O":
/*!*************************************************************!*\
  !*** ./src/app/modules/orders/services/dispatch.service.ts ***!
  \*************************************************************/
/*! exports provided: OrderDispatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDispatchService", function() { return OrderDispatchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class OrderDispatchService {
    constructor() {
        this.orderLoad = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    setLoadContent(newOrder, currentLoadContent) {
        newOrder.items.forEach(item => {
            const loadItem = currentLoadContent.items.find(x => x.item_id === item.item_id);
            if (!loadItem) {
                const newContent = {
                    item_id: item.item_id,
                    pref_id: item.pref_id,
                    unit_id: item.unit_id,
                    item_trade_price: item.original_price,
                    actual_qty: item.dispatch_qty,
                    dispatched_qty: item.dispatch_qty,
                    issued_qty: 0,
                };
                currentLoadContent.items.push(newContent);
            }
            else {
                loadItem.actual_qty = loadItem.actual_qty + item.dispatch_qty;
                loadItem.dispatched_qty = loadItem.dispatched_qty + item.dispatch_qty;
            }
        });
        currentLoadContent.order_ids.push(newOrder.id);
        currentLoadContent.total_orders = currentLoadContent.order_ids.length;
        currentLoadContent.total_products = currentLoadContent.items.length;
        return currentLoadContent;
    }
    removeOrderFromCurrentLoad(order, currentLoadContent) {
        order.items.forEach(item => {
            const loadItem = currentLoadContent.items.find(x => x.item_id === item.item_id);
            if (loadItem) {
                loadItem.actual_qty = loadItem.actual_qty - item.dispatch_qty;
                loadItem.dispatched_qty = loadItem.dispatched_qty - item.dispatch_qty - loadItem.issued_qty;
                loadItem.issued_qty = 0;
            }
            if (loadItem.actual_qty === 0) {
                currentLoadContent.items = currentLoadContent.items.filter(x => x.item_id !== item.item_id);
            }
        });
        currentLoadContent.order_ids = currentLoadContent.order_ids.filter(x => x !== order.id);
        currentLoadContent.total_orders = currentLoadContent.order_ids.length;
        currentLoadContent.total_products = currentLoadContent.items.length;
        return currentLoadContent;
    }
}
OrderDispatchService.ɵfac = function OrderDispatchService_Factory(t) { return new (t || OrderDispatchService)(); };
OrderDispatchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderDispatchService, factory: OrderDispatchService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDispatchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "F35G":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/orders/components/booking-vs-execution/booking-vs-execution.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: BookingVsExecutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingVsExecutionComponent", function() { return BookingVsExecutionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class BookingVsExecutionComponent {
    constructor() { }
    ngOnInit() {
    }
}
BookingVsExecutionComponent.ɵfac = function BookingVsExecutionComponent_Factory(t) { return new (t || BookingVsExecutionComponent)(); };
BookingVsExecutionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingVsExecutionComponent, selectors: [["app-booking-vs-execution"]], decls: 325, vars: 0, consts: [[1, "container"], [1, "row", "mt-2", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], [1, "row"], [1, "col-lg-12"], [1, "header-tabs"], [1, "Product-Filter"], [1, "col-12"], [1, "CL-Product"], [1, "fa", "fa-calendar-alt"], ["type", "text", "id", "datepicker", "placeholder", "Select Date", 1, "form-control"], [1, "_cust_filter"], [1, "form-s2"], ["placeholder", "Select Order Booker", 1, "form-control", "formselect"], [1, "btn", "btn-primary"], [1, "fa", "fa-retweet"], [1, "clearfix"], [1, "card", "p-15"], [1, "topstats"], [1, "row", "m-0"], [1, "col", "pl-0", "pr-0"], [1, "gary-box"], [1, "col", "pr-0"], [1, "col-6"], [1, "col-12", "header", "head-div"], [1, "col-12", "value-sec"], [1, "col-6", "value-sh"], [1, "col-12", "header", "head-div", "border-left-0"], [1, "col-12", "value-sec", "border-left-0"], [1, "col-12", "p-0", "PT-20", "PB-15"], [1, "Product-row-title"], [1, "col", "colStyle", "h-auto", 2, "max-width", "255px"], [1, "col", "colStyle", "h-auto", 2, "max-width", "159px"], [1, "col", "colStyle", "h-auto", 2, "max-width", "172px"], [1, "col", "colStyle", "h-auto", 2, "max-width", "135px"], [1, "col", "colStyle", "h-auto", 2, "max-width", "150px"], [1, "col", "colStyle", "h-auto", 2, "max-width", "127px"], [1, "col", "colStyle", "h-auto", 2, "max-width", "115px"], [1, "Product-row"], [1, "col", "_ITEMNAME", 2, "max-width", "255px", "font-size", "14px"], [1, "pt-10"], [1, "r-location"], [1, "fa", "fa-map-marker-alt"], [1, "col", "colStyle", "font-no", 2, "max-width", "159px"], [1, "col", "colStyle", "font-no", 2, "max-width", "172px"], [1, "col", "colStyle", "font-no", 2, "max-width", "135px"], [1, "col", "colStyle", "font-no", 2, "max-width", "150px"], [1, "col", "colStyle", 2, "max-width", "127px"], [1, "fa", "fa-circle", "executed-st"], [1, "col", "colStyle", 2, "max-width", "115px"], [1, "btn", "btn-default", "btn-line", "smBTN"], [1, "fa", "fa-circle", "pending-st"], [1, "fa", "fa-circle", "cancel-st"]], template: function BookingVsExecutionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Booking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " vs Execution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Booking vs Execution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Select Order Booker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Asif Ali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Utba Aziz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Fetch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Order Booker:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Babar Ali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "19-09-2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Total Booking:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Rs. 100,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Total Execution:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Rs. 100,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Total Booking:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Rs. 100,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Total Booked Orders:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Rs. 100,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Total Shop Visited:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Execution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Total Execution:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Rs. 100,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Total Orders Executed:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Rs. 100,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Total Cancel Orders:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Retailer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Booked Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Executed Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Booking Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Execution Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Order Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Sardar General Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Main Bazar Fateh Garh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Rs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " 70,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Rs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " 60,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Executed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "View Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Sardar General Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Main Bazar Fateh Garh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Rs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " 70,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Rs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " 60,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "View Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Sardar General Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Main Bazar Fateh Garh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Rs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " 70,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Rs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " 60,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "View Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Sardar General Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " Main Bazar Fateh Garh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Rs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " 70,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Rs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " 60,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " Executed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "View Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Sardar General Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " Main Bazar Fateh Garh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Rs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, " 70,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Rs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, " 60,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "View Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Sardar General Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " Main Bazar Fateh Garh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Rs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " 70,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Rs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, " 60,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, " Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "View Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".topstats[_ngcontent-%COMP%]{margin-top: 0px; font-size: 13px; margin-bottom: 15px;}\r\n.topstats[_ngcontent-%COMP%]   .gary-box[_ngcontent-%COMP%]{line-height: 1;background-color: #f9f9f9;border-bottom: solid 1px #d1d1d1;padding: 10px;}\r\n.topstats[_ngcontent-%COMP%]   .gary-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .value-sh[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family: 'Rationale', sans-serif; color:#0038ba; font-size: 20px; float: right; margin-top: -4px;}\r\n.value-sh[_ngcontent-%COMP%]{font-size: 13px;}\r\n.value-sh[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size: 18px;}\r\n.value-sec[_ngcontent-%COMP%]{background-color: #f9f9f9; border: solid 1px #e6e6e6; padding-top: 10px; padding-bottom: 4px;}\r\n.head-div[_ngcontent-%COMP%]{border: solid 1px #e6e6e6; border-bottom: none; background: none!important; padding: 10px 20px!important}\r\n._cust_filter[_ngcontent-%COMP%]{width: 250px; padding-top: 0;padding-right: 10px;float: left;margin-bottom: 15px;}\r\n._cust_filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {height: 32px;}\r\n.Product-row[_ngcontent-%COMP%]{padding:5px 8px; margin-bottom: -1px; box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);}\r\n.Product-row-title[_ngcontent-%COMP%]{padding:10px 8px; background-color: #f9f9f9; color: #282828; text-transform: none!important;}\r\n.Product-IMG[_ngcontent-%COMP%]{margin-bottom: -5px}\r\n.Product-IMG[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 32px; height: 32px; border-radius:50%; border: solid 1px #333;}\r\n.Product-Name[_ngcontent-%COMP%]{color: #808080; line-height: 1}\r\n.Product-Name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color: #282828; padding-bottom: 3px; display: block}\r\n._ITEMNAME[_ngcontent-%COMP%]{height: auto;}\r\n.font-no[_ngcontent-%COMP%]{font-size: 20px; line-height:1}\r\n.font-no[_ngcontent-%COMP%]{font-size: 20px; line-height:1; font-family: 'Rationale', sans-serif!important;}\r\n.r-location[_ngcontent-%COMP%]{display:block; color:#a0a0a0; font-size:13px}\r\n.executed-st[_ngcontent-%COMP%]{color:#06C420; font-size: 12px}\r\n.cancel-st[_ngcontent-%COMP%]{color:#C40606; font-size: 12px}\r\n.pending-st[_ngcontent-%COMP%]{color:#D9A20A; font-size: 12px}\r\n.date-order[_ngcontent-%COMP%] {width: 200px;position: relative;float: left;padding-right: 15px;}\r\n.date-order[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {height: 32px;border: solid 1px #dedede;box-shadow: none;padding-left: 15px;font-size: 13px;letter-spacing: 1px;}\r\n.Product-Filter[_ngcontent-%COMP%] {background-color: #f3f2f2;padding: 15px 15px 0px 15px;box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);margin-bottom: 15px;border-bottom: solid 2px #0038ba}\r\n.Product-Filter[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {color: #fff !important;cursor: pointer;float: left;margin: 0;padding-top: 4px;padding-bottom: 4px;letter-spacing: 1px;}\r\n.CL-Product[_ngcontent-%COMP%] {width: 230px;position: relative;float: left;padding-right: 10px}\r\n.CL-Product[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {height: 32px;border: solid 1px #dedede;box-shadow: none;padding-left: 30px;font-size: 13px;letter-spacing: 1px}\r\n.CL-Product[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {position: absolute;top: 8px;left: 8px;color: #b5b5b5}\r\n.Product-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {cursor: pointer;}\r\n.Product-row-title[_ngcontent-%COMP%] {border: none;padding: 10px 8px;position: relative;text-transform: uppercase;color: #000;font-family: proximanova-semibold, sans-serif;letter-spacing: 1px;font-size: 13px;transform: scale(0.97);}\r\n.Product-row[_ngcontent-%COMP%] {background-color: #fff;border: none;padding: 5px 8px;border-radius: 0px;position: relative;font-size: 13px;width: 100%;margin-bottom: -1px;transition: all 0.2s;transform: scale(0.97);box-shadow: 0px 0px 2px 0px rgba(0 0 0 / 20%);}\r\n.Product-row[_ngcontent-%COMP%]:HOVER {border-bottom: solid 2px #0038ba;transition: all 0.3s ease;transform: scale(1);box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.3);z-index: 5;}\r\n.Product-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .Product-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {text-decoration: none;color: #282828}\r\n@media (max-width: 1024px) {.Product-row[_ngcontent-%COMP%] {transform: scale(1);}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcmRlcnMvY29tcG9uZW50cy9ib29raW5nLXZzLWV4ZWN1dGlvbi9ib29raW5nLXZzLWV4ZWN1dGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsZUFBZSxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQztBQUNoRSxvQkFBb0IsY0FBYyxDQUFDLHlCQUF5QixDQUFDLGdDQUFnQyxDQUFDLGFBQWEsQ0FBQztBQUM1Ryx5Q0FBeUMsb0NBQW9DLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7QUFDOUksVUFBVSxlQUFlLENBQUM7QUFDMUIsZUFBZSxlQUFlLENBQUM7QUFDL0IsV0FBVyx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQztBQUN4RyxVQUFVLHlCQUF5QixFQUFFLG1CQUFtQixFQUFFLDBCQUEwQixFQUFFLDRCQUE0QjtBQUNsSCxjQUFjLFlBQVksRUFBRSxjQUFjLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDO0FBQy9GLHNCQUFzQixZQUFZLENBQUM7QUFDbkMsYUFBYSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsOENBQThDLENBQUM7QUFDbEcsbUJBQW1CLGdCQUFnQixFQUFFLHlCQUF5QixFQUFFLGNBQWMsRUFBRSw4QkFBOEIsQ0FBQztBQUMvRyxhQUFhLG1CQUFtQjtBQUNoQyxrQkFBa0IsV0FBVyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQztBQUN2RixjQUFjLGNBQWMsRUFBRSxjQUFjO0FBQzVDLHFCQUFxQixjQUFjLEVBQUUsbUJBQW1CLEVBQUUsY0FBYztBQUN4RSxXQUFXLFlBQVksQ0FBQztBQUN4QixTQUFTLGVBQWUsRUFBRSxhQUFhO0FBQ3ZDLFNBQVMsZUFBZSxFQUFFLGFBQWEsRUFBRSw4Q0FBOEMsQ0FBQztBQUN4RixZQUFZLGFBQWEsRUFBRSxhQUFhLEVBQUUsY0FBYztBQUN4RCxhQUFhLGFBQWEsRUFBRSxlQUFlO0FBQzNDLFdBQVcsYUFBYSxFQUFFLGVBQWU7QUFDekMsWUFBWSxhQUFhLEVBQUUsZUFBZTtBQUMxQyxhQUFhLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7QUFDN0UsbUJBQW1CLFlBQVksQ0FBQyx5QkFBeUIsQ0FBZ0QsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDO0FBQ2pMLGlCQUFpQix5QkFBeUIsQ0FBQywyQkFBMkIsQ0FBQywrQ0FBK0MsQ0FBQyxtQkFBbUIsQ0FBQyxnQ0FBZ0M7QUFDM0ssOEJBQThCLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDO0FBQ3BKLGFBQWEsWUFBWSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxtQkFBbUI7QUFDNUUsbUJBQW1CLFlBQVksQ0FBQyx5QkFBeUIsQ0FBZ0QsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLG1CQUFtQjtBQUNoTCxpQkFBaUIsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjO0FBQ3JFLGdCQUFnQixlQUFlLENBQUM7QUFDaEMsb0JBQW9CLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsNkNBQTZDLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUEyRCxzQkFBc0IsQ0FBQztBQUMvUSxjQUFjLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUF3RCxvQkFBb0IsQ0FBMkQsc0JBQXNCLENBQUMsNkNBQTZDLENBQUM7QUFDcFcsb0JBQW9CLGdDQUFnQyxDQUFrRSx5QkFBeUIsQ0FBcUQsbUJBQW1CLENBQUMsK0NBQStDLENBQUMsVUFBVSxDQUFDO0FBQ25SLHNDQUFzQyxxQkFBcUIsQ0FBQyxjQUFjO0FBQzFFLDRCQUE0QixjQUFrRSxtQkFBbUIsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vcmRlcnMvY29tcG9uZW50cy9ib29raW5nLXZzLWV4ZWN1dGlvbi9ib29raW5nLXZzLWV4ZWN1dGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcHN0YXRze21hcmdpbi10b3A6IDBweDsgZm9udC1zaXplOiAxM3B4OyBtYXJnaW4tYm90dG9tOiAxNXB4O31cclxuLnRvcHN0YXRzIC5nYXJ5LWJveHtsaW5lLWhlaWdodDogMTtiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O2JvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZDFkMWQxO3BhZGRpbmc6IDEwcHg7fVxyXG4udG9wc3RhdHMgLmdhcnktYm94IHNwYW4sIC52YWx1ZS1zaCBzcGFue2ZvbnQtZmFtaWx5OiAnUmF0aW9uYWxlJywgc2Fucy1zZXJpZjsgY29sb3I6IzAwMzhiYTsgZm9udC1zaXplOiAyMHB4OyBmbG9hdDogcmlnaHQ7IG1hcmdpbi10b3A6IC00cHg7fVxyXG4udmFsdWUtc2h7Zm9udC1zaXplOiAxM3B4O31cdFxyXG4udmFsdWUtc2ggc3Bhbntmb250LXNpemU6IDE4cHg7fVxyXG4udmFsdWUtc2Vje2JhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7IGJvcmRlcjogc29saWQgMXB4ICNlNmU2ZTY7IHBhZGRpbmctdG9wOiAxMHB4OyBwYWRkaW5nLWJvdHRvbTogNHB4O31cclxuLmhlYWQtZGl2e2JvcmRlcjogc29saWQgMXB4ICNlNmU2ZTY7IGJvcmRlci1ib3R0b206IG5vbmU7IGJhY2tncm91bmQ6IG5vbmUhaW1wb3J0YW50OyBwYWRkaW5nOiAxMHB4IDIwcHghaW1wb3J0YW50fVxyXG4uX2N1c3RfZmlsdGVye3dpZHRoOiAyNTBweDsgcGFkZGluZy10b3A6IDA7cGFkZGluZy1yaWdodDogMTBweDtmbG9hdDogbGVmdDttYXJnaW4tYm90dG9tOiAxNXB4O31cclxuLl9jdXN0X2ZpbHRlciBzZWxlY3Qge2hlaWdodDogMzJweDt9XHJcbi5Qcm9kdWN0LXJvd3twYWRkaW5nOjVweCA4cHg7IG1hcmdpbi1ib3R0b206IC0xcHg7IGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7fVxyXG4uUHJvZHVjdC1yb3ctdGl0bGV7cGFkZGluZzoxMHB4IDhweDsgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgY29sb3I6ICMyODI4Mjg7IHRleHQtdHJhbnNmb3JtOiBub25lIWltcG9ydGFudDt9XHJcbi5Qcm9kdWN0LUlNR3ttYXJnaW4tYm90dG9tOiAtNXB4fVxyXG4uUHJvZHVjdC1JTUcgaW1nIHt3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyBib3JkZXItcmFkaXVzOjUwJTsgYm9yZGVyOiBzb2xpZCAxcHggIzMzMzt9XHRcclxuLlByb2R1Y3QtTmFtZXtjb2xvcjogIzgwODA4MDsgbGluZS1oZWlnaHQ6IDF9XHRcclxuLlByb2R1Y3QtTmFtZSBzdHJvbmd7Y29sb3I6ICMyODI4Mjg7IHBhZGRpbmctYm90dG9tOiAzcHg7IGRpc3BsYXk6IGJsb2NrfVxyXG4uX0lURU1OQU1Fe2hlaWdodDogYXV0bzt9XHJcbi5mb250LW5ve2ZvbnQtc2l6ZTogMjBweDsgbGluZS1oZWlnaHQ6MX1cclxuLmZvbnQtbm97Zm9udC1zaXplOiAyMHB4OyBsaW5lLWhlaWdodDoxOyBmb250LWZhbWlseTogJ1JhdGlvbmFsZScsIHNhbnMtc2VyaWYhaW1wb3J0YW50O31cclxuLnItbG9jYXRpb257ZGlzcGxheTpibG9jazsgY29sb3I6I2EwYTBhMDsgZm9udC1zaXplOjEzcHh9XHJcbi5leGVjdXRlZC1zdHtjb2xvcjojMDZDNDIwOyBmb250LXNpemU6IDEycHh9XHJcbi5jYW5jZWwtc3R7Y29sb3I6I0M0MDYwNjsgZm9udC1zaXplOiAxMnB4fVxyXG4ucGVuZGluZy1zdHtjb2xvcjojRDlBMjBBOyBmb250LXNpemU6IDEycHh9XHRcclxuLmRhdGUtb3JkZXIge3dpZHRoOiAyMDBweDtwb3NpdGlvbjogcmVsYXRpdmU7ZmxvYXQ6IGxlZnQ7cGFkZGluZy1yaWdodDogMTVweDt9XHJcbi5kYXRlLW9yZGVyIGlucHV0IHtoZWlnaHQ6IDMycHg7Ym9yZGVyOiBzb2xpZCAxcHggI2RlZGVkZTstd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7LW1vei1ib3gtc2hhZG93OiBub25lO2JveC1zaGFkb3c6IG5vbmU7cGFkZGluZy1sZWZ0OiAxNXB4O2ZvbnQtc2l6ZTogMTNweDtsZXR0ZXItc3BhY2luZzogMXB4O31cclxuLlByb2R1Y3QtRmlsdGVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYyO3BhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTttYXJnaW4tYm90dG9tOiAxNXB4O2JvcmRlci1ib3R0b206IHNvbGlkIDJweCAjMDAzOGJhfVxyXG4uUHJvZHVjdC1GaWx0ZXIgLmJ0bi1wcmltYXJ5IHtjb2xvcjogI2ZmZiAhaW1wb3J0YW50O2N1cnNvcjogcG9pbnRlcjtmbG9hdDogbGVmdDttYXJnaW46IDA7cGFkZGluZy10b3A6IDRweDtwYWRkaW5nLWJvdHRvbTogNHB4O2xldHRlci1zcGFjaW5nOiAxcHg7fVxyXG4uQ0wtUHJvZHVjdCB7d2lkdGg6IDIzMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtmbG9hdDogbGVmdDtwYWRkaW5nLXJpZ2h0OiAxMHB4fVxyXG4uQ0wtUHJvZHVjdCBpbnB1dCB7aGVpZ2h0OiAzMnB4O2JvcmRlcjogc29saWQgMXB4ICNkZWRlZGU7LXdlYmtpdC1ib3gtc2hhZG93OiBub25lOy1tb3otYm94LXNoYWRvdzogbm9uZTtib3gtc2hhZG93OiBub25lO3BhZGRpbmctbGVmdDogMzBweDtmb250LXNpemU6IDEzcHg7bGV0dGVyLXNwYWNpbmc6IDFweH1cclxuLkNMLVByb2R1Y3QgLmZhIHtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiA4cHg7bGVmdDogOHB4O2NvbG9yOiAjYjViNWI1fVxyXG4uUHJvZHVjdC1yb3cgYSB7Y3Vyc29yOiBwb2ludGVyO31cclxuLlByb2R1Y3Qtcm93LXRpdGxlIHtib3JkZXI6IG5vbmU7cGFkZGluZzogMTBweCA4cHg7cG9zaXRpb246IHJlbGF0aXZlO3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Y29sb3I6ICMwMDA7Zm9udC1mYW1pbHk6IHByb3hpbWFub3ZhLXNlbWlib2xkLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOiAxcHg7Zm9udC1zaXplOiAxM3B4Oy1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTcpOy13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTt0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO31cclxuLlByb2R1Y3Qtcm93IHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO2JvcmRlcjogbm9uZTtwYWRkaW5nOiA1cHggOHB4O2JvcmRlci1yYWRpdXM6IDBweDtwb3NpdGlvbjogcmVsYXRpdmU7Zm9udC1zaXplOiAxM3B4O3dpZHRoOiAxMDAlO21hcmdpbi1ib3R0b206IC0xcHg7LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yczstbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO3RyYW5zaXRpb246IGFsbCAwLjJzOy1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTcpOy13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTt0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO2JveC1zaGFkb3c6IDBweCAwcHggMnB4IDBweCByZ2JhKDAgMCAwIC8gMjAlKTt9XHJcbi5Qcm9kdWN0LXJvdzpIT1ZFUiB7Ym9yZGVyLWJvdHRvbTogc29saWQgMnB4ICMwMDM4YmE7LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOy1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTt0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOy1tcy10cmFuc2Zvcm06IHNjYWxlKDEpOy13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO2JveC1zaGFkb3c6IDBweCAwcHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO3otaW5kZXg6IDU7fVxyXG4uUHJvZHVjdC1yb3cgYSwgLlByb2R1Y3Qtcm93IGE6aG92ZXIge3RleHQtZGVjb3JhdGlvbjogbm9uZTtjb2xvcjogIzI4MjgyOH1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkgey5Qcm9kdWN0LXJvdyB7LW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO3RyYW5zZm9ybTogc2NhbGUoMSk7fX0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingVsExecutionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-booking-vs-execution',
                templateUrl: 'booking-vs-execution.component.html',
                styleUrls: ['./booking-vs-execution.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FKeZ":
/*!************************************************************************************!*\
  !*** ./src/app/modules/orders/components/execute-order/execute-order.component.ts ***!
  \************************************************************************************/
/*! exports provided: ExecuteOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteOrderComponent", function() { return ExecuteOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/api-urls.constants */ "oo4J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/orders.service */ "5TcN");
/* harmony import */ var _services_execution_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/execution.service */ "iv1J");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/toaster.service */ "ZgVV");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services */ "NJqk");
/* harmony import */ var _services_spot_sale_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/spot-sale.service */ "uJg1");
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/storage.service */ "UYTb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _shared_components_product_right_panel_product_right_panel_compoent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/product-right-panel/product-right-panel.compoent */ "LCr2");
/* harmony import */ var _shared_components_returned_products_returned_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/returned-products/returned-products.component */ "Unci");
/* harmony import */ var _shared_components_retailer_sub_listing_retailer_sub_listing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/retailer-sub-listing/retailer-sub-listing.component */ "tPJg");
/* harmony import */ var _shared_components_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/order-items/order-items.component */ "VzUJ");
/* harmony import */ var _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/loader-white/loader-white.component */ "uoBr");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");




















function ExecuteOrderComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.cancelOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_button_42_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_button_42_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.cancelSpotSale(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_77_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expType_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", expType_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", expType_r23.name, "");
} }
function ExecuteOrderComponent_div_77_table_24_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_77_table_24_tr_10_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const expense_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r26.removeExpense(expense_r25.expense_type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expense_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.getExpense(expense_r25.expense_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](expense_r25.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", expense_r25.type);
} }
function ExecuteOrderComponent_div_77_table_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Expense Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExecuteOrderComponent_div_77_table_24_tr_10_Template, 8, 3, "tr", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r21.dtOPtions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.finalLoad == null ? null : ctx_r21.finalLoad.expense_detail);
} }
function ExecuteOrderComponent_div_77_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Expense Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Expense Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExecuteOrderComponent_div_77_option_10_Template, 2, 2, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ExecuteOrderComponent_div_77_Template_input_keydown_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.isNumber($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_77_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.addExpense(_r18, _r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ExecuteOrderComponent_div_77_table_24_Template, 11, 2, "table", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ExecuteOrderComponent_div_77_div_25_Template, 4, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.finalLoad == null ? null : ctx_r2.finalLoad.expense_types);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isExpenseAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isExpenseAdded);
} }
function ExecuteOrderComponent_app_products_drawer_83_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-products-drawer", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drawerClosed", function ExecuteOrderComponent_app_products_drawer_83_Template_app_products_drawer_drawerClosed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.closeNewProducts(); })("productSelected", function ExecuteOrderComponent_app_products_drawer_83_Template_app_products_drawer_productSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.addNewProductToOrder($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedRetailer", ctx_r3.selectedRetailer)("orderType", "execution")("orderedProducts", ctx_r3.orderDetails == null ? null : ctx_r3.orderDetails.items)("loadingProducts", ctx_r3.loadingProduct)("allProducts", ctx_r3.inventory)("productSchemes", ctx_r3.schemes)("productMerchantDiscount", ctx_r3.merchantDiscount)("specialDiscounts", ctx_r3.specialDiscounts);
} }
function ExecuteOrderComponent_app_returned_products_84_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-returned-products", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("productReturned", function ExecuteOrderComponent_app_returned_products_84_Template_app_returned_products_productReturned_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.handleReturnedProduct($event); })("closeReturned", function ExecuteOrderComponent_app_returned_products_84_Template_app_returned_products_closeReturned_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.closeReturnedModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productsList", ctx_r4.allProducts)("orderReturnedItems", ctx_r4.orderDetails.returned_items);
} }
function ExecuteOrderComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cheque Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_88_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.paymentCancelled(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_89_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select a payment method! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_89_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please add Cheque Number! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_89_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please add Payment Date! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_89_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please add Bank Name! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_89_div_36_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please add Total Amount! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_89_div_36_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Negative values not allowed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_89_div_36_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Amount should not be greater than ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r50.cash == null ? null : ctx_r50.cash.amount_received, "1.2-2"), " ");
} }
function ExecuteOrderComponent_div_89_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Total Amount*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 121, 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ExecuteOrderComponent_div_89_div_36_Template_input_focus_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r51.focused($event); })("blur", function ExecuteOrderComponent_div_89_div_36_Template_input_blur_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.left($event); })("ngModelChange", function ExecuteOrderComponent_div_89_div_36_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.chequeAmount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExecuteOrderComponent_div_89_div_36_span_6_Template, 2, 0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExecuteOrderComponent_div_89_div_36_span_7_Template, 2, 0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExecuteOrderComponent_div_89_div_36_span_8_Template, 3, 4, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r46.cash == null ? null : ctx_r46.cash.amount_received)("ngModel", ctx_r46.chequeAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r47.errors == null ? null : _r47.errors.required) && ctx_r46.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r47.errors == null ? null : _r47.errors.required) && ctx_r46.chequeAmount < 0 && ctx_r46.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r47.errors == null ? null : _r47.errors.required) && ctx_r46.chequeAmount > (ctx_r46.cash == null ? null : ctx_r46.cash.amount_received) && ctx_r46.isAdded);
} }
function ExecuteOrderComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExecuteOrderComponent_div_89_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.paymentTypeCheque = $event; })("click", function ExecuteOrderComponent_div_89_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r57.chequeAmount = null; return ctx_r57.currentFullPayment("Cheque Payment", "Credit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Full Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_89_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.setPartial("Cheque Payment"); })("ngModelChange", function ExecuteOrderComponent_div_89_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.paymentTypeCheque = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Partial Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExecuteOrderComponent_div_89_div_13_Template, 2, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cheque Number*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 110, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ExecuteOrderComponent_div_89_Template_input_focus_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.focused($event); })("blur", function ExecuteOrderComponent_div_89_Template_input_blur_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.left($event); })("ngModelChange", function ExecuteOrderComponent_div_89_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.chequeNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ExecuteOrderComponent_div_89_span_21_Template, 2, 0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Date*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 113, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ExecuteOrderComponent_div_89_Template_input_focus_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.focused($event); })("blur", function ExecuteOrderComponent_div_89_Template_input_blur_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.left($event); })("ngModelChange", function ExecuteOrderComponent_div_89_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.paymentDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ExecuteOrderComponent_div_89_span_28_Template, 2, 0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Bank Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 116, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ExecuteOrderComponent_div_89_Template_input_focus_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.focused($event); })("blur", function ExecuteOrderComponent_div_89_Template_input_blur_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.left($event); })("ngModelChange", function ExecuteOrderComponent_div_89_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.bankName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ExecuteOrderComponent_div_89_span_35_Template, 2, 0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ExecuteOrderComponent_div_89_div_36_Template, 9, 5, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.paymentTypeCheque);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.paymentTypeCheque);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.paymentTypeCheque === "" && ctx_r6.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.chequeNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r40.errors == null ? null : _r40.errors.required) && ctx_r6.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.paymentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.paymentDate === "  " && ctx_r6.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.bankName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r44.errors == null ? null : _r44.errors.required) && ctx_r6.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.paymentTypeCheque !== "full");
} }
function ExecuteOrderComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Credit Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_91_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select a payment method! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_91_div_14_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please add Total Amount! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_91_div_14_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Negative values not allowed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_91_div_14_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Amount should not be greater than ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r74.dueAmount - ((ctx_r74.cheque == null ? null : ctx_r74.cheque.amount_received) || 0), "1.2-2"), " ");
} }
function ExecuteOrderComponent_div_91_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Amount*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 129, 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ExecuteOrderComponent_div_91_div_14_Template_input_focus_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r75.focused($event); })("blur", function ExecuteOrderComponent_div_91_div_14_Template_input_blur_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r77.left($event); })("ngModelChange", function ExecuteOrderComponent_div_91_div_14_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r78.creditAmount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExecuteOrderComponent_div_91_div_14_span_6_Template, 2, 0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExecuteOrderComponent_div_91_div_14_span_7_Template, 2, 0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExecuteOrderComponent_div_91_div_14_span_8_Template, 3, 4, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r70.dueAmount - ((ctx_r70.cheque == null ? null : ctx_r70.cheque.amount_received) || 0))("ngModel", ctx_r70.creditAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r71.errors == null ? null : _r71.errors.required) && ctx_r70.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r71.errors == null ? null : _r71.errors.required) && ctx_r70.creditAmount < 0 && ctx_r70.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r71.errors == null ? null : _r71.errors.required) && ctx_r70.creditAmount > ctx_r70.dueAmount - ((ctx_r70.cheque == null ? null : ctx_r70.cheque.amount_received) || 0) && ctx_r70.isAdded);
} }
function ExecuteOrderComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExecuteOrderComponent_div_91_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.paymentTypeCredit = $event; })("click", function ExecuteOrderComponent_div_91_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r81.creditAmount = null; return ctx_r81.currentFullPayment("Credit", "Cheque payment"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Full Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExecuteOrderComponent_div_91_span_8_Template, 2, 0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_91_Template_input_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.setPartial("Credit"); })("ngModelChange", function ExecuteOrderComponent_div_91_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.paymentTypeCredit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Partial Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExecuteOrderComponent_div_91_div_14_Template, 9, 5, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.paymentTypeCredit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.paymentTypeCredit === "" && ctx_r8.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.paymentTypeCredit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.paymentTypeCredit !== "full");
} }
function ExecuteOrderComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have to choose \"Partial Amount\" to use both Credit and Cheque Payment!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_128_app_order_items_list_39_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-order-items-list", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteReturned", function ExecuteOrderComponent_div_128_app_order_items_list_39_Template_app_order_items_list_deleteReturned_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r88.deleteReturnedProduct($event); })("openDrawer", function ExecuteOrderComponent_div_128_app_order_items_list_39_Template_app_order_items_list_openDrawer_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r90.openProductsList(); })("openReturnedModal", function ExecuteOrderComponent_div_128_app_order_items_list_39_Template_app_order_items_list_openReturnedModal_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r91.openReturnedModal(); })("productUpdated", function ExecuteOrderComponent_div_128_app_order_items_list_39_Template_app_order_items_list_productUpdated_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r92.calculateReceivable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentTab", ctx_r84.currentTab)("orderDetail", ctx_r84.orderDetails)("returnAmount", ctx_r84.returnAmount)("dueAmount", ctx_r84.dueAmount)("isChequeAdded", ctx_r84.isChequeAdded)("isCreditAdded", ctx_r84.isCreditAdded)("receivableAmount", ctx_r84.receivableAmount)("totalPayment", ctx_r84.totalPayment)("cheque", ctx_r84.cheque)("credit", ctx_r84.credit)("cash", ctx_r84.cash)("orders", ctx_r84.retailersList)("schemes", ctx_r84.schemes)("selectedRetailer", ctx_r84.selectedRetailer)("returnedProduct", ctx_r84.returnedProduct)("allProducts", ctx_r84.inventory)("specialDiscounts", ctx_r84.specialDiscounts)("merchantDiscount", ctx_r84.merchantDiscount)("newProduct", ctx_r84.newProduct)("orderType", "execution")("recoveryAmount", ctx_r84.recoveryAmount);
} }
function ExecuteOrderComponent_div_128_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_128_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select order to see details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_128_div_42_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_128_div_42_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r98.isCredit = false; return ctx_r98.isFullyPaymentAdded("Cheque Payment"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r93.selectedRetailer);
} }
function ExecuteOrderComponent_div_128_div_42_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_128_div_42_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r100.removeCheque(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r94.selectedRetailer);
} }
function ExecuteOrderComponent_div_128_div_42_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_128_div_42_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r102.isCredit = true; return ctx_r102.isFullyPaymentAdded("Credit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r95.selectedRetailer);
} }
function ExecuteOrderComponent_div_128_div_42_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_128_div_42_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r104.removeCredit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r96.selectedRetailer);
} }
function ExecuteOrderComponent_div_128_div_42_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show Modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_128_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExecuteOrderComponent_div_128_div_42_button_1_Template, 2, 1, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExecuteOrderComponent_div_128_div_42_button_2_Template, 2, 1, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExecuteOrderComponent_div_128_div_42_button_3_Template, 2, 1, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExecuteOrderComponent_div_128_div_42_button_4_Template, 2, 1, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExecuteOrderComponent_div_128_div_42_button_5_Template, 2, 0, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_128_div_42_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r106.saveExecutionQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r87.savingOrder && !ctx_r87.isChequeAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r87.savingOrder && ctx_r87.isChequeAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r87.savingOrder && !ctx_r87.isCreditAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r87.savingOrder && ctx_r87.isCreditAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r87.savingOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r87.savingOrder || !ctx_r87.selectedRetailer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r87.savingOrder || !ctx_r87.selectedRetailer);
} }
function ExecuteOrderComponent_div_128_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Order Booker:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Territory:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Total Outlets:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Total Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-retailer-sub-list", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("retailerChanged", function ExecuteOrderComponent_div_128_Template_app_retailer_sub_list_retailerChanged_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.getOrderDetailsByRetailer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ExecuteOrderComponent_div_128_app_order_items_list_39_Template, 1, 21, "app-order-items-list", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ExecuteOrderComponent_div_128_div_40_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ExecuteOrderComponent_div_128_div_41_Template, 5, 0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ExecuteOrderComponent_div_128_div_42_Template, 10, 7, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r10.currentTab === 1 ? "show active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r10.dispatchSummary == null ? null : ctx_r10.dispatchSummary.date) || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r10.dispatchSummary == null ? null : ctx_r10.dispatchSummary.order_bookers.join(", ")) || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r10.dispatchSummary == null ? null : ctx_r10.dispatchSummary.territories.join(", ")) || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r10.dispatchSummary == null ? null : ctx_r10.dispatchSummary.total_outlets) || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 14, (ctx_r10.dispatchSummary == null ? null : ctx_r10.dispatchSummary.total_amount) || 0, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r10.loading || ctx_r10.savingOrder)("currentTab", ctx_r10.currentTab)("retailers", ctx_r10.retailersList)("orderType", "execution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.savingOrder && ctx_r10.selectedRetailer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.savingOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.savingOrder && !ctx_r10.selectedRetailer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.savingOrder && ctx_r10.selectedRetailer);
} }
function ExecuteOrderComponent_div_129_ng_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r118.employee_first_name, " ", item_r118.employee_last_name, " ");
} }
function ExecuteOrderComponent_div_129_div_42_ng_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r121 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r121.route_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r121.name);
} }
function ExecuteOrderComponent_div_129_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExecuteOrderComponent_div_129_div_42_Template_ng_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r123.getRetaielrsByRoute($event); })("ngModelChange", function ExecuteOrderComponent_div_129_div_42_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r125.selectedRoute = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExecuteOrderComponent_div_129_div_42_ng_option_4_Template, 2, 2, "ng-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r111.selectedRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r111.bookerRoutes);
} }
function ExecuteOrderComponent_div_129_div_43_ng_container_4_ng_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r127.retailer_name, "");
} }
function ExecuteOrderComponent_div_129_div_43_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExecuteOrderComponent_div_129_div_43_ng_container_4_ng_option_1_Template, 2, 2, "ng-option", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r127 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r127.isAdded);
} }
function ExecuteOrderComponent_div_129_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExecuteOrderComponent_div_129_div_43_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r131.spotRetailer = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExecuteOrderComponent_div_129_div_43_ng_container_4_Template, 2, 1, "ng-container", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r112.spotRetailer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r112.routeRetailers);
} }
function ExecuteOrderComponent_div_129_button_44_Template(rf, ctx) { if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_129_button_44_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r133.setSpotSaleRetailer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_129_app_order_items_list_50_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-order-items-list", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openDrawer", function ExecuteOrderComponent_div_129_app_order_items_list_50_Template_app_order_items_list_openDrawer_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r135.openProductsList(); })("openReturnedModal", function ExecuteOrderComponent_div_129_app_order_items_list_50_Template_app_order_items_list_openReturnedModal_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r137.openReturnedModal(); })("productUpdated", function ExecuteOrderComponent_div_129_app_order_items_list_50_Template_app_order_items_list_productUpdated_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r138.calculateReceivable(); })("deleteReturned", function ExecuteOrderComponent_div_129_app_order_items_list_50_Template_app_order_items_list_deleteReturned_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r139.deleteReturnedProduct($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentTab", ctx_r114.currentTab)("orderDetail", ctx_r114.orderDetails)("returnAmount", ctx_r114.returnAmount)("isChequeAdded", ctx_r114.isChequeAdded)("isCreditAdded", ctx_r114.isCreditAdded)("receivableAmount", ctx_r114.receivableAmount)("totalPayment", ctx_r114.totalPayment)("cheque", ctx_r114.cheque)("credit", ctx_r114.credit)("orders", ctx_r114.spotSaleOrder.retailers)("cash", ctx_r114.cash)("schemes", ctx_r114.schemes)("dueAmount", ctx_r114.dueAmount)("selectedRetailer", ctx_r114.selectedRetailer)("orderType", "execution")("allProducts", ctx_r114.inventory)("specialDiscounts", ctx_r114.specialDiscounts)("merchantDiscount", ctx_r114.merchantDiscount)("newProduct", ctx_r114.newProduct);
} }
function ExecuteOrderComponent_div_129_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_129_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select order to see details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_129_div_53_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_129_div_53_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r145.isCredit = false; return ctx_r145.isFullyPaymentAdded("Cheque Payment"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_129_div_53_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_129_div_53_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r147.removeCheque(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_129_div_53_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_129_div_53_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r150); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r149.isCredit = true; return ctx_r149.isFullyPaymentAdded("Credit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_129_div_53_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_129_div_53_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r152); const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r151.removeCredit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_129_div_53_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show Modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_129_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExecuteOrderComponent_div_129_div_53_button_1_Template, 2, 0, "button", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExecuteOrderComponent_div_129_div_53_button_2_Template, 2, 0, "button", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExecuteOrderComponent_div_129_div_53_button_3_Template, 2, 0, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExecuteOrderComponent_div_129_div_53_button_4_Template, 2, 0, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExecuteOrderComponent_div_129_div_53_button_5_Template, 2, 0, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_129_div_53_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154); const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r153.saveSpotSaleOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r117.savingOrder && !ctx_r117.isChequeAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r117.savingOrder && ctx_r117.isChequeAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r117.savingOrder && !ctx_r117.isCreditAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r117.savingOrder && ctx_r117.isCreditAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r117.savingOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r117.orderDetails == null ? null : ctx_r117.orderDetails.items == null ? null : ctx_r117.orderDetails.items.length) && !(ctx_r117.orderDetails == null ? null : ctx_r117.orderDetails.returned_items == null ? null : ctx_r117.orderDetails.returned_items.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r117.orderDetails);
} }
function ExecuteOrderComponent_div_129_Template(rf, ctx) { if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Order Booker:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Territory:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Total Outlets:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Total Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ng-select", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExecuteOrderComponent_div_129_Template_ng_select_change_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r155.getOrderBookerRoutes(); })("ngModelChange", function ExecuteOrderComponent_div_129_Template_ng_select_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156); const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r157.selectedOrderBooker = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ExecuteOrderComponent_div_129_ng_option_41_Template, 2, 3, "ng-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ExecuteOrderComponent_div_129_div_42_Template, 5, 2, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ExecuteOrderComponent_div_129_div_43_Template, 5, 2, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ExecuteOrderComponent_div_129_button_44_Template, 2, 0, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "app-retailer-sub-list", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("retailerChanged", function ExecuteOrderComponent_div_129_Template_app_retailer_sub_list_retailerChanged_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156); const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r158.setCurrentSpotSaleOrder($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ExecuteOrderComponent_div_129_app_order_items_list_50_Template, 1, 19, "app-order-items-list", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ExecuteOrderComponent_div_129_div_51_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ExecuteOrderComponent_div_129_div_52_Template, 5, 0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ExecuteOrderComponent_div_129_div_53_Template, 10, 7, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r11.currentTab === 2 ? "show active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.spotSaleOrder.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.spotSaleOrder.orderBookerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.spotSaleOrder.territory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.spotSaleOrder.retailers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 19, ctx_r11.spotSaleOrder.order_total || 0, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.selectedOrderBooker);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.orderBookers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.selectedOrderBooker);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.selectedRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.spotRetailer && ctx_r11.showAddRetailer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("retailers", ctx_r11.spotSaleOrder.retailers)("currentTab", ctx_r11.currentTab)("orderType", "execution")("isSpotSaleActive", ctx_r11.isSpotSaleActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.savingOrder && ctx_r11.selectedRetailer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.savingOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.savingOrder && !ctx_r11.selectedRetailer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.savingOrder && ctx_r11.selectedRetailer);
} }
function ExecuteOrderComponent_div_130_ng_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r164 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r164.employee_first_name, " ", item_r164.employee_last_name, " ");
} }
function ExecuteOrderComponent_div_130_div_9_ng_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r167 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r167.route_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r167.name);
} }
function ExecuteOrderComponent_div_130_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExecuteOrderComponent_div_130_div_9_Template_ng_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r169.getRetaielrsByRoute($event); })("ngModelChange", function ExecuteOrderComponent_div_130_div_9_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r171.selectedRoute = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExecuteOrderComponent_div_130_div_9_ng_option_4_Template, 2, 2, "ng-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r160.selectedRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r160.bookerRoutes);
} }
function ExecuteOrderComponent_div_130_div_10_ng_container_4_ng_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r173.retailer_name, "");
} }
function ExecuteOrderComponent_div_130_div_10_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExecuteOrderComponent_div_130_div_10_ng_container_4_ng_option_1_Template, 2, 2, "ng-option", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r173 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r173.isAdded);
} }
function ExecuteOrderComponent_div_130_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExecuteOrderComponent_div_130_div_10_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178); const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r177.recoveryRetailer = $event; })("change", function ExecuteOrderComponent_div_130_div_10_Template_ng_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178); const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r179.setRecoveryRetailer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExecuteOrderComponent_div_130_div_10_ng_container_4_Template, 2, 1, "ng-container", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r161.recoveryRetailer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r161.routeRetailers);
} }
function ExecuteOrderComponent_div_130_table_12_tr_12_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_130_table_12_tr_12_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r186); const retailer_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r184.addRevoery(retailer_r181); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Recovery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const retailer_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", +retailer_r181.recovery < 1);
} }
function ExecuteOrderComponent_div_130_table_12_tr_12_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_130_table_12_tr_12_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190); const retailer_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r188.removeRecovery(retailer_r181); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove Recovery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_130_table_12_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExecuteOrderComponent_div_130_table_12_tr_12_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r192); const retailer_r181 = ctx.$implicit; return retailer_r181.recovery = $event; })("keydown", function ExecuteOrderComponent_div_130_table_12_tr_12_Template_input_keydown_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r192); const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r193.isNumber($event); })("keyup", function ExecuteOrderComponent_div_130_table_12_tr_12_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r192); const retailer_r181 = ctx.$implicit; const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r194.checkRecovery(retailer_r181); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExecuteOrderComponent_div_130_table_12_tr_12_button_9_Template, 2, 1, "button", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExecuteOrderComponent_div_130_table_12_tr_12_button_10_Template, 2, 0, "button", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const retailer_r181 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](retailer_r181.retailer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 8, retailer_r181.balance, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", retailer_r181.retailer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", retailer_r181.retailer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", retailer_r181.recoveryAdded)("ngModel", retailer_r181.recovery);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !retailer_r181.recoveryAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", retailer_r181.recoveryAdded);
} }
function ExecuteOrderComponent_div_130_table_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Retailer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Recovery Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Received Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExecuteOrderComponent_div_130_table_12_tr_12_Template, 11, 11, "tr", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r162.dtOPtions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r162.recoveryListing);
} }
function ExecuteOrderComponent_div_130_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_130_Template(rf, ctx) { if (rf & 1) {
    const _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-select", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExecuteOrderComponent_div_130_Template_ng_select_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r196); const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r195.getOrderBookerRoutes(); })("ngModelChange", function ExecuteOrderComponent_div_130_Template_ng_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r196); const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r197.selectedOrderBooker = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExecuteOrderComponent_div_130_ng_option_8_Template, 2, 3, "ng-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExecuteOrderComponent_div_130_div_9_Template, 5, 2, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExecuteOrderComponent_div_130_div_10_Template, 5, 2, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExecuteOrderComponent_div_130_table_12_Template, 13, 2, "table", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExecuteOrderComponent_div_130_div_13_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r12.currentTab === 3 ? "show active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.selectedOrderBooker);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.orderBookers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.selectedOrderBooker);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.selectedRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.isAdded);
} }
function ExecuteOrderComponent_div_131_div_35_table_7_tr_18_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r207 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r207.item_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r207.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r207.unit_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r207.total_dispatch_qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r207.total_return_qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r207.total_sold_qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r207.total_cancel_qty);
} }
function ExecuteOrderComponent_div_131_div_35_table_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Issue QTY.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Return QTY.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sold QTY.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Inventory Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExecuteOrderComponent_div_131_div_35_table_7_tr_18_Template, 15, 7, "tr", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r200.dtOPtions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r200.finalLoad == null ? null : ctx_r200.finalLoad.dsr == null ? null : ctx_r200.finalLoad.dsr.contents);
} }
function ExecuteOrderComponent_div_131_div_35_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Expense");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_131_div_35_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_131_div_35_div_113_Template(rf, ctx) { if (rf & 1) {
    const _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_131_div_35_div_113_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209); const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r208.generateDSR(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Generate DSR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_131_div_35_div_114_Template(rf, ctx) { if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_div_131_div_35_div_114_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r210.checkRecieveable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mark Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", +ctx_r204.amountReceived === 0);
} }
function ExecuteOrderComponent_div_131_div_35_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_131_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delivery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Challan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExecuteOrderComponent_div_131_div_35_table_7_Template, 19, 2, "table", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cash ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExecuteOrderComponent_div_131_div_35_button_15_Template, 2, 0, "button", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExecuteOrderComponent_div_131_div_35_button_16_Template, 4, 0, "button", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Gross Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Trade Offer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Trade Discount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Special Discount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Extra Discount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Total Tax:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Total Net Sale:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Expense:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Return Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Recovery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Total Net Receivable:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Cheque:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Credit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Cash:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](100, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "AMT. Received:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "input", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExecuteOrderComponent_div_131_div_35_Template_input_ngModelChange_104_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r213); const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r212.amountReceived = $event; })("keydown", function ExecuteOrderComponent_div_131_div_35_Template_input_keydown_104_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r213); const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r214.isNumber($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Balance AMT:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, ExecuteOrderComponent_div_131_div_35_div_113_Template, 3, 0, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, ExecuteOrderComponent_div_131_div_35_div_114_Template, 3, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, ExecuteOrderComponent_div_131_div_35_div_115_Template, 5, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.contents);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r198.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r198.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 22, ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_gross_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 25, ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_trade_offer, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](34, 28, ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_trade_discount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](40, 31, ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_special_discount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](46, 34, ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_booker_discount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](52, 37, ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_tax_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](58, 40, ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_net_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](64, 43, ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_expense, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](70, 46, ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_return_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](76, 49, ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_recovered_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](82, 52, ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_net_after_recovery, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](88, 55, ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_cheque_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](94, 58, ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_credit_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](100, 61, ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_cash_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r198.amountReceived);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](110, 64, (ctx_r198.finalLoad == null ? null : ctx_r198.finalLoad.dsr == null ? null : ctx_r198.finalLoad.dsr.total_amount_recieveable) - ctx_r198.amountReceived || 0, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r198.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r198.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r198.loading);
} }
function ExecuteOrderComponent_div_131_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExecuteOrderComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Order Booker:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Territory:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Total Outlets:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Total Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ExecuteOrderComponent_div_131_div_35_Template, 116, 67, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ExecuteOrderComponent_div_131_div_36_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r13.currentTab === 4 ? "show active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r13.finalLoad == null ? null : ctx_r13.finalLoad.dsr == null ? null : ctx_r13.finalLoad.dsr.executed_date == null ? null : ctx_r13.finalLoad.dsr.executed_date.split(" ")[0]) || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r13.finalLoad == null ? null : ctx_r13.finalLoad.dsr == null ? null : ctx_r13.finalLoad.dsr.territory) || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r13.finalLoad == null ? null : ctx_r13.finalLoad.dsr == null ? null : ctx_r13.finalLoad.dsr.total_orders) || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 8, (ctx_r13.finalLoad == null ? null : ctx_r13.finalLoad.dsr == null ? null : ctx_r13.finalLoad.dsr.total_net_amount) || 0, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.loading);
} }
class ExecuteOrderComponent {
    constructor(change, route, router, orderService, executionService, toastService, generalDataService, dataService, spotSaleService, storageService) {
        this.change = change;
        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.executionService = executionService;
        this.toastService = toastService;
        this.generalDataService = generalDataService;
        this.dataService = dataService;
        this.spotSaleService = spotSaleService;
        this.storageService = storageService;
        this.dtOPtions = {};
        this.orderDetails = {};
        this.spotSaleOrder = {};
        this.currentSpotSale = {};
        this.recoveryListing = [];
        this.outOfRouteRecovery = [];
        this.orderBookers = [];
        this.bookerRoutes = [];
        this.routeRetailers = [];
        this.retailersList = [];
        this.schemes = [];
        this.inventory = [];
        this.allProducts = [];
        this.specialDiscounts = [];
        this.discountSlabs = [];
        this.billsData = null;
        this.spotSaleOrderId = null;
    }
    ngOnInit() {
        this.currentTab = 1;
        this.dtOPtions = {
            pagingType: 'simple_numbers',
        };
        this.showAddRetailer = true;
        this.getSchemesData();
        this.setPaymentInitalValues();
        this.setSpotSaleOrder();
        this.salemanId = +this.route.snapshot.paramMap.get('saleManId');
        this.orderDate = this.route.snapshot.paramMap.get('date');
        this.selectedLoadId = +this.route.snapshot.paramMap.get('loadId');
        if (!this.salemanId || !this.orderDate || !this.selectedLoadId) {
            this.router.navigateByUrl('/orders/execution-list');
        }
        else {
            this.getOrdersBySalemanAndDate();
            this.getOrderBookers();
        }
    }
    setSpotSaleOrder() {
        this.spotSaleOrder = {
            retailers: [],
            orders: [],
            order_total: 0,
            date: new Date().toISOString().split('T')[0],
            territory: '--',
            total_outlets: '--',
            orderBookerName: '--',
        };
    }
    setPaymentInitalValues() {
        this.netAmount = 0;
        this.creditAmount = 0;
        this.amountReceived = 0;
        this.chequeAmount = 0;
        this.returnAmount = 0;
        this.dueAmount = 0;
        this.receivableAmount = 0;
        this.recoveryAmount = 0;
        this.totalPayment = 0;
        this.isChequeAdded = false;
        this.isCreditAdded = false;
        this.paymentDate = new Date().toISOString().split('T')[0];
        this.distributorId = this.storageService.getItem('distributor').id;
    }
    addNewProductToOrder(product) {
        this.newProduct = product;
    }
    getSchemesData() {
        this.orderService.getSchemes().subscribe((res) => {
            if (res.status === 200) {
                this.schemes = res.data;
            }
        }, (error) => {
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    type: 'error',
                    title: 'Error:',
                    message: 'Order details not fetched, please try again later!',
                });
            }
        });
    }
    getOrdersBySalemanAndDate() {
        this.loading = true;
        this.orderService
            .getExectedOrdersListing(this.salemanId, this.orderDate, this.selectedLoadId)
            .subscribe((res) => {
            this.loading = false;
            if (res.status === 200) {
                this.retailersList = res.data.retailers;
                this.allProducts = res.data.all_products;
                this.loadId = res.data.load_id;
                this.spotSaleOrder.retailers = res.data.spot_sale_orders;
                this.inventory = res.data.executed_products;
                this.specialDiscounts = res.data.special_discount;
                this.dispatchSummary = res.data.summary;
                this.recoveryListing = res.data.out_of_route_recovery.map((x) => {
                    x.recovery = x.amount_received;
                    x.retailer_id = x.id;
                    x.recoveryAdded = true;
                    return x;
                });
                this.outOfRouteRecovery = res.data.out_of_route_recovery.map((x) => {
                    const recovery = {
                        retailer_id: x.id,
                        amount: x.amount_received,
                        booker_id: x.booker_id,
                    };
                    return recovery;
                });
                if (res.data.is_dsr) {
                    this.changeTab(4);
                }
            }
            else {
                this.toastService.showToaster({
                    type: 'error',
                    title: 'Error:',
                    message: 'Order details not fetched, please try again later!',
                });
            }
        }, (error) => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    type: 'error',
                    title: 'Error:',
                    message: 'Order details not fetched, please try again later!',
                });
            }
        });
    }
    getOrderBookers() {
        this.generalDataService.getOrderBookers(this.distributorId).subscribe((res) => {
            if (res.status === 200) {
                this.orderBookers = res.data;
            }
        }, (error) => {
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    type: 'error',
                    title: 'Error:',
                    message: 'Bookers not fetched, please try again later!',
                });
            }
        });
    }
    getOrderBookerRoutes() {
        this.spotSaleOrder.orderBookerName = `${this.selectedOrderBooker.employee_first_name} ${this.selectedOrderBooker.employee_last_name}`;
        this.selectedRoute = null;
        this.bookerRoutes = [];
        this.spotRetailer = null;
        this.routeRetailers = [];
        this.generalDataService
            .getOrderBookerRoutes(this.selectedOrderBooker.employee_id)
            .subscribe((res) => {
            if (res.status === 200) {
                this.bookerRoutes = res.data;
            }
        }, (error) => {
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    type: 'error',
                    title: 'Error:',
                    message: 'Routes not fetched, please try again later!',
                });
            }
        });
    }
    getRetaielrsByRoute(routeId) {
        this.spotRetailer = null;
        this.routeRetailers = [];
        this.generalDataService.getRetailersByRoute(routeId).subscribe((res) => {
            if (res.status === 200) {
                this.routeRetailers = res.data;
                if (this.spotSaleOrder.retailers.length) {
                    this.routeRetailers = this.routeRetailers.map((x) => {
                        const index = this.spotSaleOrder.retailers.findIndex((y) => y.retailer_id === x.retailer_id);
                        if (index > -1) {
                            x.isAdded = true;
                        }
                        return x;
                    });
                }
                if (this.retailersList.length) {
                    this.routeRetailers = this.routeRetailers.map((x) => {
                        const index = this.retailersList.findIndex((y) => y.retailer_id === x.retailer_id);
                        if (index > -1) {
                            x.isAdded = true;
                        }
                        return x;
                    });
                }
            }
        }, (error) => {
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    type: 'error',
                    title: 'Error:',
                    message: 'Retailers not fetched, please try again later!',
                });
            }
        });
    }
    setSpotSaleRetailer() {
        var _a;
        this.spotSaleOrder.territory = this.spotRetailer.territory;
        if (!this.spotSaleOrder.retailers.find((x) => x.retailer_id === this.spotRetailer.retailer_id)) {
            if (!((_a = this.spotSaleOrder.retailers) === null || _a === void 0 ? void 0 : _a.length)) {
                this.spotSaleOrder.retailers = [];
            }
            this.spotRetailer.isAdded = true;
            delete this.spotRetailer.id;
            this.spotRetailer.region_id = this.selectedOrderBooker.region_id;
            const order = this.spotSaleService.setSpotSaleOrderContent(this.spotRetailer, this.selectedOrderBooker, this.distributorId);
            this.spotSaleOrder.orders.push(order);
            const retailers = JSON.parse(JSON.stringify(this.spotSaleOrder.retailers));
            retailers.push(this.spotRetailer);
            this.spotSaleOrder.retailers = JSON.parse(JSON.stringify(retailers));
            this.showAddRetailer = false;
            this.change.detectChanges();
        }
    }
    getOrderDetailsByRetailer(retailer) {
        var _a;
        if (((_a = this.selectedRetailer) === null || _a === void 0 ? void 0 : _a.id) !== retailer.id) {
            this.savingOrder = true;
            this.newProduct = null;
            this.returnedProduct = null;
            this.paymentTypeCredit = '';
            this.paymentTypeCheque = '';
            this.resetPaymentValues();
            this.setPaymentInitalValues();
            this.selectedRetailer = JSON.parse(JSON.stringify(retailer));
            this.orderService.getOrderDetails(retailer.id).subscribe((res) => {
                this.savingOrder = false;
                if (res.status === 200) {
                    this.orderDetails = res.data;
                    this.orderDetails.returned_items = this.orderDetails.returned_items;
                    this.recoveryAmount = this.orderDetails.recovery;
                    this.orderDetails.recovered =
                        +this.orderDetails.recovered.toFixed(2);
                    if (this.orderDetails.payment && this.orderDetails.payment.length) {
                        this.orderDetails.payment.forEach((pay) => {
                            if (pay.payment_mode === 'Cheque') {
                                this.setCheque(pay);
                            }
                            else if (pay.payment_mode === 'Credit') {
                                this.setCredit(pay);
                            }
                            else if (pay.payment_mode === 'Cash') {
                                this.setCash(pay);
                            }
                        });
                    }
                    if (this.orderDetails.returned_items.length) {
                        this.setOrderDetailReturnedItems();
                    }
                    else {
                        this.receivableAmount =
                            this.orderDetails.total_amount_after_tax +
                                this.orderDetails.recovered;
                    }
                    this.setOrderDetailItems();
                    this.calculateReceivable();
                }
            }, (error) => {
                this.savingOrder = false;
                if (error.status !== 1 && error.status !== 401) {
                    console.log('Error while getting order detail data :>> ', error.message);
                    const toast = {
                        type: 'error',
                        message: 'Cannot fetch Order Detail. Please try again',
                        title: 'Error:',
                    };
                    this.toastService.showToaster(toast);
                }
            });
            this.getDiscountSlabs();
        }
    }
    setCash(payment) {
        this.cash = {
            retailer_id: this.selectedRetailer.retailer_id,
            distributor_id: this.distributorId,
            type: this.currentTab === 1 ? 'Execution' : 'Spot',
            payment_mode: 'Cash',
            payment_detail: '',
            dispatched_bill_amount: 0,
            return_amount: this.returnAmount || 0,
            recovery: 0,
            amount_received: payment.amount_received,
        };
    }
    setCredit(payment) {
        this.paymentTypeCredit =
            payment.amount_received < this.orderDetails.order_total
                ? 'partial'
                : 'full';
        this.credit = {
            retailer_id: this.selectedRetailer.retailer_id,
            distributor_id: this.distributorId,
            type: this.currentTab === 1 ? 'Execution' : 'Spot',
            payment_mode: 'Credit',
            payment_detail: '',
            dispatched_bill_amount: 0,
            recovery: 0,
            amount_received: payment.amount_received,
        };
        this.isCreditAdded = true;
    }
    setCheque(payment) {
        this.paymentTypeCheque =
            payment.amount_received < this.orderDetails.order_total
                ? 'partial'
                : 'full';
        const paymentDetail = JSON.parse(payment.payment_detail);
        this.cheque = {
            retailer_id: this.selectedRetailer.retailer_id,
            distributor_id: this.distributorId,
            type: this.currentTab === 1 ? 'Execution' : 'Spot',
            payment_mode: 'Cheque',
            payment_detail: {
                cheque_amount: payment.amount_received,
                bank_name: paymentDetail.bank_name,
                cheque_number: paymentDetail.cheque_number,
                cheque_date: paymentDetail.cheque_date,
            },
            dispatched_bill_amount: 0,
            recovery: 0,
            amount_received: payment.amount_received,
        };
        this.isChequeAdded = true;
    }
    setOrderDetailReturnedItems() {
        this.orderDetails.returned_items = this.orderDetails.returned_items.map((x) => {
            x.item_trade_price = x.original_price;
            x.stockQty = x.quantity_returned;
            x.extra_discount = x.booker_discount;
            x.extra_discount_pkr = x.booker_discount * x.quantity_returned;
            x.productType = 'returned';
            x.special_discount_pkr = 0;
            x.trade_discount = 0;
            x.trade_discount_pkr = 0;
            x.net_amount = x.final_price;
            x.gross_amount = x.gross_sale_amount;
            x.original_amount = x.gross_sale_amount;
            return x;
        });
    }
    setOrderDetailItems() {
        this.orderDetails.items = this.orderDetails.items.map((prod) => {
            const product = this.inventory.find((x) => x.item_id === prod.item_id);
            if (!product)
                return;
            prod.parent_trade_price = JSON.parse(JSON.stringify(product.parent_trade_price));
            prod.parent_unit_id = JSON.parse(JSON.stringify(product.parent_unit_id));
            prod.parent_quantity = JSON.parse(JSON.stringify(product.quantity));
            prod.child = JSON.parse(JSON.stringify(product.child));
            prod.item_retail_price = JSON.parse(JSON.stringify(product.item_retail_price));
            prod.extra_discount = JSON.parse(JSON.stringify(prod.booker_discount));
            prod.tax_class_amount = JSON.parse(JSON.stringify(product.tax_class_amount));
            prod.tax_class_id = JSON.parse(JSON.stringify(product.tax_class_id));
            prod.tax_class_type = JSON.parse(JSON.stringify(product.tax_class_type));
            prod.pref_id = JSON.parse(JSON.stringify(product.pref_id));
            prod.unit_id = JSON.parse(JSON.stringify(product.unit_id));
            prod.unit_name = JSON.parse(JSON.stringify(product.unit_name));
            prod.brand_id = JSON.parse(JSON.stringify(product.brand_id));
            prod.is_active = JSON.parse(JSON.stringify(product.is_active));
            prod.item_trade_price = JSON.parse(JSON.stringify(product.item_trade_price));
            prod.stockQty = JSON.parse(JSON.stringify(prod.executed_qty));
            prod.net_amount = JSON.parse(JSON.stringify(prod.final_price));
            prod.gross_amount = prod.item_trade_price * prod.stockQty;
            prod.extra_discount_pkr = prod.stockQty * prod.extra_discount;
            prod.original_amount = prod.item_trade_price * prod.stockQty;
            prod.special_discount_pkr = prod.special_discount;
            prod.trade_discount = JSON.parse(JSON.stringify(prod.merchant_discount));
            prod.trade_discount_pkr = JSON.parse(JSON.stringify(prod.merchant_discount_pkr));
            prod.tax_amount_pkr = JSON.parse(JSON.stringify(prod.total_tax_amount || 0));
            prod.selectedScheme = this.schemes.find((scheme) => scheme.id === prod.scheme_id);
            return prod;
        });
        this.orderDetails.items = this.orderDetails.items.filter((x) => x);
    }
    setCurrentSpotSaleOrder(retailer) {
        if (!this.isSpotSaleActive) {
            if (retailer.id) {
                this.isSpotSaleActive = true;
                this.getOrderDetailsByRetailer(retailer);
            }
            else {
                this.resetPaymentValues();
                this.setPaymentInitalValues();
                this.selectedRetailer = Object.assign({}, retailer);
                this.isSpotSaleActive = true;
                this.orderDetails = this.spotSaleOrder.orders.find((x) => x.retailer_id === retailer.retailer_id);
                this.getDiscountSlabs();
                this.newProduct = null;
            }
        }
        else {
            const toast = {
                type: 'error',
                message: 'Please complete the current order to move forward!',
                title: 'Spot Sale Error:',
            };
            this.toastService.showToaster(toast);
        }
    }
    getDiscountSlabs() {
        if (!this.discountSlabs.length) {
            this.orderService.getDiscountSlabs().subscribe((res) => {
                if (res.status === 200) {
                    this.discountSlabs = res.data;
                    this.setMerchantDiscount();
                }
            }, (error) => {
                if (error.status !== 1 && error.status !== 401) {
                    console.log('Error while getting order detail data :>> ', error.message);
                    const toast = {
                        type: 'error',
                        message: 'Cannot fetch Merchant Discounts. Please try again',
                        title: 'Error:',
                    };
                    this.toastService.showToaster(toast);
                }
            });
        }
        else {
            this.setMerchantDiscount();
        }
    }
    setMerchantDiscount() {
        this.merchantDiscount = this.discountSlabs.find((x) => x.region_id === this.selectedRetailer.region_id &&
            this.selectedRetailer.segment_id === x.segment_id &&
            x.channel_id ===
                (this.selectedRetailer.retailer_type_id ||
                    this.selectedRetailer.type_id));
    }
    handleReturnedProduct(returnedProduct) {
        this.orderDetails.returned_items.push(returnedProduct);
        this.calculateReceivable();
    }
    deleteReturnedProduct(selectedItem) {
        var _a;
        if (selectedItem.id) {
            const productAvalableQty = (_a = this.inventory.find((x) => x.item_id === selectedItem.item_id)) === null || _a === void 0 ? void 0 : _a.available_qty;
            if (productAvalableQty >= selectedItem.quantity_returned ||
                selectedItem.return_type === 'damage') {
                selectedItem.stockQty = 0;
                selectedItem.isDeleted = true;
            }
            else {
                this.toastService.showToaster({
                    title: 'Returned Product:',
                    message: 'The selected product is part of other order please remove from other orders and delete!',
                    type: 'error',
                });
            }
        }
        else {
            this.orderDetails.returned_items =
                this.orderDetails.returned_items.filter((x) => x.item_id !== selectedItem.item_id);
            // this.applySlabOnAllProducts();
        }
        document.getElementById('close-prod-del').click();
        this.calculateReceivable();
    }
    calculateReceivable() {
        const returnPrices = this.orderDetails.returned_items
            .filter((x) => !x.isDeleted)
            .map((x) => x.net_amount);
        this.returnAmount = this.dataService.calculateItemsBill(returnPrices);
        const price = this.orderDetails.items.map((x) => x.net_amount);
        this.netAmount = this.dataService.calculateItemsBill(price);
        this.dueAmount = this.netAmount + this.returnAmount;
        this.receivableAmount =
            this.netAmount + this.orderDetails.recovered + this.returnAmount;
        this.selectedRetailer.order_total = this.dueAmount;
        if (this.currentTab === 2) {
            const retailer = this.spotSaleOrder.retailers.find((x) => x.retailer_id === this.selectedRetailer.retailer_id);
            retailer.order_total = this.dueAmount;
        }
        this.calculatePayments();
    }
    openProductsList() {
        if (!this.isPaymentAdded()) {
            this.showProducts = true;
            document.body.classList.add('no-scroll');
            document
                .getElementsByClassName('overlay-blure')[0]
                .classList.add('d-block');
            document.getElementById('order-container').classList.add('blur-div');
        }
    }
    isPaymentAdded() {
        if (this.isChequeAdded || this.isCreditAdded) {
            this.toastService.showToaster({
                title: 'Payment Added:',
                message: 'Please remove the payment to proceed!',
                type: 'error',
            });
            return true;
        }
        return false;
    }
    closeNewProducts() {
        this.showProducts = false;
        document.body.classList.remove('no-scroll');
        document
            .getElementsByClassName('overlay-blure')[0]
            .classList.remove('d-block');
        document.getElementById('order-container').classList.remove('blur-div');
    }
    openReturnedModal() {
        if (!this.isPaymentAdded()) {
            this.showReturned = true;
        }
    }
    closeReturnedModal() {
        this.showReturned = false;
    }
    changeTab(selectedTab) {
        this.currentTab = selectedTab;
        if (this.currentTab === 1) {
            this.retailersList = this.retailersList.map((x) => {
                x.isActive = false;
                return x;
            });
            this.selectedRetailer = null;
            this.orderDetails = null;
        }
        if (this.currentTab === 2) {
            if (this.selectedRetailer) {
                this.orderDetails.items = [];
                this.orderDetails.returned_items = [];
                this.selectedRetailer.isActive = false;
                this.spotSaleOrder.retailers = this.spotSaleOrder.retailers.map((x) => {
                    x.isActive = false;
                    return x;
                });
                this.selectedRetailer = null;
                this.orderDetails = null;
            }
            this.resetPaymentValues();
            this.setPaymentInitalValues();
        }
        else if (this.currentTab === 3) {
            this.selectedOrderBooker = null;
            this.selectedRoute = null;
            this.recoveryRetailer = null;
        }
        else if (this.currentTab === 4) {
            this.isAdded = false;
            this.getExecutionFinalLoad();
        }
    }
    focused(event) {
        event.target.parentElement.classList.add('focused');
    }
    left(event) {
        if (!event.target.value) {
            event.target.parentElement.classList.remove('focused');
        }
    }
    isNumber(event) {
        return this.dataService.isNumber(event);
    }
    isFullyPaymentAdded(current) {
        if (this.receivableAmount <= 0) {
            const toast = {
                type: 'error',
                message: `Your receivable amount (${this.receivableAmount.toFixed(2)}) is not enough to add payment!`,
                title: `Payment cannot be added`,
            };
            this.toastService.showToaster(toast);
            return;
        }
        if (current === 'Credit') {
            this.paymentTypeCredit = '';
        }
        else {
            this.paymentTypeCheque = '';
        }
        if (!this.selectedRetailer) {
            const toast = {
                type: 'error',
                message: `Please select order to add payment details!`,
                title: `Payment cannot be added`,
            };
            this.toastService.showToaster(toast);
        }
        else {
            if ((this.paymentTypeCheque === 'full' ||
                this.paymentTypeCredit === 'full') &&
                this.addedPayment !== current) {
                const toast = {
                    type: 'error',
                    message: `You already selected Full payment for ${this.addedPayment} please remove it if you want to add ${this.currentPayment}!`,
                    title: `Full Payment selected for ${this.addedPayment}`,
                };
                this.toastService.showToaster(toast);
            }
            else {
                // this.focusForPaymentValues();
                document.getElementById('open-modal-payment').click();
            }
        }
    }
    currentFullPayment(current, other) {
        if ((this.paymentTypeCheque === 'full' ||
            this.paymentTypeCredit === 'full') &&
            this.addedPayment !== current) {
            const toast = {
                type: 'error',
                message: `You already selected Full payment for ${this.addedPayment} please remove it if you want to add ${this.currentPayment}!`,
                title: `Full Payment selected for ${this.addedPayment}`,
            };
            this.toastService.showToaster(toast);
        }
        else {
            this.addedPayment = current;
            this.currentPayment = other;
        }
    }
    setPartial(current) {
        if (current === this.addedPayment) {
            if (this.credit && current === 'Credit') {
                this.cash.amount_received =
                    this.cash.amount_received + this.credit.amount_received;
                this.credit.amount_received = 0;
            }
            if (this.cheque && current === 'Cheque Payment') {
                this.cash.amount_received =
                    this.cash.amount_received + this.cheque.amount_received;
                this.cheque.amount_received = 0;
            }
            this.addedPayment = '';
            this.currentPayment = '';
            this.alreadyFullPayment = false;
        }
    }
    checkPaymentHasValues() {
        if (this.isCredit) {
            if (this.paymentTypeCredit === 'full') {
                return this.paymentTypeCredit.length > 0;
            }
            else {
                return (this.paymentTypeCredit.length > 0 &&
                    this.creditAmount > -1 &&
                    this.creditAmount <=
                        this.dueAmount - (this.cheque ? this.cheque.amount_received : 0));
            }
        }
        else {
            if (this.paymentTypeCheque === 'full') {
                return (this.paymentTypeCheque.length > 0 &&
                    this.bankName.length > 0 &&
                    this.chequeNumber.length > 0 &&
                    this.paymentDate.length > 0);
            }
            else {
                return (this.paymentTypeCheque.length > 0 &&
                    this.chequeAmount > -1 &&
                    this.chequeAmount <= this.cash.amount_received &&
                    this.bankName.length > 0 &&
                    this.chequeNumber.length > 0 &&
                    this.paymentDate.length > 0);
            }
        }
    }
    removeCheque() {
        this.cheque = null;
        this.isChequeAdded = false;
        this.paymentTypeCheque = '';
        this.calculatePayments();
    }
    removeCredit() {
        this.credit = null;
        this.isCreditAdded = false;
        this.paymentTypeCredit = '';
        this.calculatePayments();
    }
    makePayment() {
        if (this.isCredit) {
            this.credit = {
                retailer_id: this.selectedRetailer.retailer_id,
                distributor_id: this.distributorId,
                type: this.currentTab === 1 ? 'Execution' : 'Spot',
                payment_mode: 'Credit',
                payment_detail: '',
                dispatched_bill_amount: 0,
                recovery: 0,
                amount_received: this.paymentTypeCredit === 'full'
                    ? JSON.parse(JSON.stringify(this.dueAmount -
                        (this.cheque ? this.cheque.amount_received : 0)))
                    : JSON.parse(JSON.stringify(this.creditAmount)),
            };
            this.isCreditAdded = true;
        }
        if (!this.isCredit) {
            this.cheque = {
                retailer_id: this.selectedRetailer.retailer_id,
                distributor_id: this.distributorId,
                type: this.currentTab === 1 ? 'Execution' : 'Spot',
                payment_mode: 'Cheque',
                payment_detail: {
                    cheque_amount: this.paymentTypeCheque === 'full'
                        ? JSON.parse(JSON.stringify(this.receivableAmount))
                        : JSON.parse(JSON.stringify(this.chequeAmount)),
                    bank_name: JSON.parse(JSON.stringify(this.bankName)),
                    cheque_number: JSON.parse(JSON.stringify(this.chequeNumber)),
                    cheque_date: JSON.parse(JSON.stringify(this.paymentDate)),
                },
                dispatched_bill_amount: 0,
                recovery: 0,
                amount_received: this.paymentTypeCheque === 'full'
                    ? JSON.parse(JSON.stringify(this.receivableAmount))
                    : JSON.parse(JSON.stringify(this.chequeAmount)),
            };
            this.isChequeAdded = true;
        }
        this.calculatePayments();
    }
    addPaymentMethod() {
        this.isAdded = true;
        const isPaymentAdded = this.checkPaymentHasValues();
        if (isPaymentAdded) {
            this.isAdded = false;
            this.makePayment();
            document.getElementById('open-modal-payment').click();
        }
    }
    paymentCancelled() {
        this.isAdded = false;
        // this.resetPaymentValues();
        this.paymentTypeCredit = '';
        this.paymentTypeCheque = '';
    }
    resetPaymentValues() {
        this.chequeAmount = null;
        this.paymentDate = new Date().toISOString().split('T')[0];
        this.bankName = '';
        this.chequeNumber = null;
        this.creditAmount = null;
        this.cash = null;
        this.cheque = null;
        this.credit = null;
    }
    calculatePayments() {
        this.cash = {
            retailer_id: this.selectedRetailer.retailer_id,
            distributor_id: this.distributorId,
            type: this.currentTab === 1 ? 'Execution' : 'Spot',
            payment_mode: 'Cash',
            payment_detail: '',
            dispatched_bill_amount: 0,
            return_amount: this.returnAmount || 0,
            recovery: 0,
            amount_received: Math.round((this.receivableAmount + Number.EPSILON) * 100) / 100,
        };
        if (this.cheque) {
            this.cheque.return_amount = this.returnAmount || 0;
            this.cash.amount_received =
                this.cash.amount_received - this.cheque.amount_received;
        }
        if (this.credit) {
            this.credit.return_amount = this.returnAmount || 0;
            this.cash.amount_received =
                this.cash.amount_received - this.credit.amount_received;
        }
        this.totalPayment = this.cheque
            ? this.cash.amount_received + this.cheque.amount_received
            : this.cash.amount_received;
        if (this.currentTab === 2) {
            const retailer = this.spotSaleOrder.retailers.find((x) => x.retailer_id === this.selectedRetailer.retailer_id);
            retailer.order_total = this.dueAmount;
        }
        this.selectedRetailer.order_total = this.dueAmount;
        if (this.currentTab === 1) {
            this.retailersList.find((x) => x.id === this.selectedRetailer.id).order_total = this.dueAmount;
        }
        if (this.currentTab === 2) {
            this.spotSaleOrder.retailers.find((x) => x.retailer_id === this.selectedRetailer.retailer_id).order_total = this.dueAmount;
        }
        this.orderDetails.order_total = this.dueAmount;
        this.orderDetails.total_amount_after_tax = this.dueAmount;
    }
    saveExecutionQuantity() {
        this.orderDetails.items = this.executionService.setOrderPayloadItems(this.orderDetails, this.selectedRetailer);
        this.orderDetails.returned_items =
            this.executionService.setOrderPayloadReturnedItems(this.orderDetails, this.selectedRetailer);
        this.cash.amount_received =
            this.cash.amount_received > -1
                ? this.cash.amount_received
                : this.netAmount;
        this.orderDetails.payment = {
            total_payment: this.totalPayment > -1 ? this.totalPayment : this.netAmount,
            detail: [this.cash],
        };
        if (this.credit) {
            this.orderDetails.payment.detail.push(this.credit);
        }
        if (this.cheque) {
            this.orderDetails.payment.detail.push(this.cheque);
        }
        this.savingOrder = true;
        this.orderService.saveExecutionQuantityOrder(this.orderDetails).subscribe((res) => {
            this.savingOrder = false;
            if (res.status === 200) {
                this.inventory = res.data.executed_products;
                this.toastService.showToaster({
                    message: `Order for ${this.selectedRetailer.retailer_name.toUpperCase()} execution updated successfully!`,
                    title: 'Order execution:',
                    type: 'success',
                });
                this.newProduct = null;
                this.orderDetails.items = [];
                this.orderDetails.returned_items = [];
                this.selectedRetailer.isActive = false;
                if (this.currentTab === 1) {
                    this.retailersList.find((x) => x.id === this.selectedRetailer.id).isActive = false;
                }
                if (this.currentTab === 2) {
                    this.spotSaleOrder.retailers.find((x) => x.id === this.selectedRetailer.id).isActive = false;
                }
                this.selectedRetailer = null;
                this.resetPaymentValues();
                this.setPaymentInitalValues();
            }
        }, (error) => {
            this.savingOrder = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Error in Save Order for execution ::>> ', error);
                this.toastService.showToaster({
                    message: 'Something went wrong execution cannot be save at the moment!',
                    title: 'Error:',
                    type: 'error',
                });
            }
        });
    }
    openBillsModal() {
        document.getElementById('billsPrintPaperModalTrigger').click();
    }
    getBills(size = 'A4') {
        document.getElementById('close-bills').click();
        const billsUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiDomain}${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].BILLS}?type=bill&emp=${this.billsData.salesman_id}&date=${this.billsData.order_date}&dist_id=${this.billsData.distributorId}&size=${size}&status=processed&orderID=${this.spotSaleOrderId}`;
        window.open(billsUrl, '_blank');
    }
    saveSpotSaleOrder() {
        if (this.orderDetails.items.map((i) => i.stockQty).filter((x) => !x).length)
            return this.toastService.showToaster({
                message: 'Please provide quantities for all the items',
                title: 'Error:',
                type: 'error',
            });
        this.savingOrder = true;
        this.orderDetails.load_id = this.loadId;
        this.orderDetails.processed_at = this.orderDate;
        this.orderDetails.processed_by = this.distributorId;
        this.orderDetails.sales_man_id = this.salemanId;
        this.orderDetails.dispatched_by = this.distributorId;
        this.orderDetails.dispatched_at = this.orderDate;
        this.orderDetails.status = 'Processed';
        this.billsData = {
            load_id: this.loadId,
            distributorId: this.distributorId,
            salesman_id: this.salemanId,
            order_date: this.orderDate,
        };
        this.orderDetails.items = this.executionService.setOrderPayloadItems(this.orderDetails, this.selectedRetailer);
        this.orderDetails.returned_items =
            this.executionService.setOrderPayloadReturnedItems(this.orderDetails, this.selectedRetailer);
        this.orderDetails.payment = {
            total_payment: this.totalPayment,
            detail: [this.cash],
        };
        if (this.credit) {
            this.orderDetails.payment.detail.push(this.credit);
        }
        if (this.cheque) {
            this.orderDetails.payment.detail.push(this.cheque);
        }
        this.orderService.saveSpotSaleOrder(this.orderDetails).subscribe((res) => {
            this.savingOrder = false;
            this.isSpotSaleActive = false;
            if (res.status === 200) {
                this.openBillsModal();
                const toast = {
                    type: 'success',
                    message: `Spot Sale for ${this.selectedRetailer.retailer_name.toUpperCase()} saved successfully!`,
                    title: 'Spot Sale Saved:',
                };
                this.newProduct = null;
                this.toastService.showToaster(toast);
                this.inventory = res.data.executed_products;
                this.selectedRetailer.id = res.data.order.id;
                this.spotSaleOrderId = res.data.order.id;
                const orderIndex = this.spotSaleOrder.orders.findIndex((x) => x.retailer_id === this.orderDetails.retailer_id);
                const retailerIndex = this.spotSaleOrder.retailers.findIndex((x) => x.retailer_id === this.selectedRetailer.retailer_id);
                this.spotSaleOrder.retailers[retailerIndex].id = res.data.order.id;
                this.spotSaleOrder.retailers[retailerIndex].order_total =
                    res.data.order.order_total;
                this.spotSaleOrder.orders[orderIndex] = JSON.parse(JSON.stringify(res.data.order));
                this.orderDetails = JSON.parse(JSON.stringify(res.data.order));
                const emptyOrder = this.spotSaleOrder.orders.find((x) => x.order_total === 0);
                if (emptyOrder) {
                    this.showAddRetailer = false;
                }
                else {
                    this.showAddRetailer = true;
                }
                this.setOrderDetailItems();
                this.setOrderDetailReturnedItems();
            }
        }, (error) => {
            this.savingOrder = false;
            this.isSpotSaleActive = false;
            if (error.status !== 1 && error.status !== 401) {
                const toast = {
                    type: 'error',
                    message: 'Something went wrong spot sale order not placed, please try again later!',
                    title: 'Spot Sale Error:',
                };
            }
        });
    }
    validateCancel() {
        var _a;
        if (!((_a = this.orderDetails.returned_items) === null || _a === void 0 ? void 0 : _a.length)) {
            return true;
        }
        else {
            let isOrderValid = true;
            const returnedProduct = this.orderDetails.returned_items.find((product) => {
                var _a;
                const productAvalableQty = (_a = this.inventory.find((x) => x.item_id === product.item_id)) === null || _a === void 0 ? void 0 : _a.available_qty;
                if (productAvalableQty < product.quantity_returned &&
                    product.return_type !== 'damage') {
                    isOrderValid = false;
                    return product;
                }
            });
            if (!isOrderValid && returnedProduct) {
                this.toastService.showToaster({
                    title: 'Returned Product:',
                    message: 'The selected order has returned products which or part of other orders, cannot cancel the order!',
                    type: 'error',
                });
            }
            return isOrderValid;
        }
    }
    cancelOrder() {
        document.getElementById('close-del').click();
        if (this.validateCancel()) {
            this.savingOrder = true;
            this.orderService.canceleExecutionOrder(this.orderDetails.id).subscribe((res) => {
                this.savingOrder = false;
                if (res.status === 200) {
                    this.toastService.showToaster({
                        message: `Order for ${this.selectedRetailer.retailer_name.toUpperCase()} canceled!`,
                        title: 'Order Execution:',
                        type: 'success',
                    });
                    // this.orderDetails = null;
                    this.newProduct = null;
                    this.selectedRetailer = null;
                    this.orderDetails.items = [];
                    this.setPaymentInitalValues();
                    this.getOrdersBySalemanAndDate();
                }
            }, (error) => {
                this.savingOrder = false;
                if (error.status !== 1 && error.status !== 401) {
                    console.log('Error in Save Order for dispatch ::>> ', error);
                    this.toastService.showToaster({
                        message: 'Something went wrong order cannot be canceled at the moment!',
                        title: 'Error:',
                        type: 'error',
                    });
                }
            });
        }
    }
    cancelSpotSale() {
        if (this.orderDetails.id) {
            this.cancelSpotSaleOrder();
        }
        else {
            this.removeSpotOrder();
            document.getElementById('close-del').click();
        }
    }
    cancelSpotSaleOrder() {
        document.getElementById('close-del').click();
        if (this.validateCancel()) {
            this.savingOrder = true;
            this.orderService.cancelSpotSaleOrder(this.orderDetails.id).subscribe((res) => {
                this.savingOrder = false;
                this.isSpotSaleActive = false;
                if (res.status === 200) {
                    this.toastService.showToaster({
                        message: `Order for ${this.selectedRetailer.retailer_name.toUpperCase()} canceled!`,
                        title: 'Spot Order:',
                        type: 'success',
                    });
                    this.newProduct = null;
                    this.inventory = res.data.executed_products;
                    this.removeSpotOrder();
                    // this.resetPaymentValues();
                    // this.setPaymentInitalValues();
                    // this.selectedRetailer = { ...retailer };
                    // this.isSpotSaleActive = true;
                    // this.orderDetails = this.spotSaleOrder.orders.find(x => x.retailer_id === retailer.retailer_id);
                    // this.getDiscountSlabs();
                }
            }, (error) => {
                this.savingOrder = false;
                this.isSpotSaleActive = false;
                if (error.status !== 1 && error.status !== 401) {
                    console.log('Error in cancel spot sale Order ::>> ', error);
                    this.toastService.showToaster({
                        message: 'Something went wrong order cannot be canceled at the moment!',
                        title: 'Error:',
                        type: 'error',
                    });
                }
            });
        }
    }
    removeSpotOrder() {
        this.selectedRetailer.isAdded = false;
        this.spotSaleOrder.retailers = this.spotSaleOrder.retailers.filter((x) => x.retailer_id !== this.selectedRetailer.retailer_id);
        this.spotSaleOrder.orders = this.spotSaleOrder.orders.filter((x) => x.retailer_id !== this.selectedRetailer.retailer_id);
        this.orderDetails.items = [];
        this.orderDetails.returned_items = [];
        this.isSpotSaleActive = false;
        this.selectedRetailer = null;
        const emptyOrder = this.spotSaleOrder.orders.find((x) => x.order_total === 0);
        if (emptyOrder) {
            this.showAddRetailer = false;
        }
        else {
            this.showAddRetailer = true;
        }
        this.resetPaymentValues();
        this.setPaymentInitalValues();
    }
    getExecutionFinalLoad() {
        this.loading = true;
        this.orderService
            .getExecutionFinalLoad(this.loadId, this.outOfRouteRecovery)
            .subscribe((res) => {
            this.loading = false;
            if (res.status === 200) {
                this.finalLoad = res.data;
                this.recoveryListing = res.data.out_of_route_recovery.map((x) => {
                    x.recovery = x.amount_received;
                    x.retailer_id = x.id;
                    x.recoveryAdded = true;
                    return x;
                });
                this.outOfRouteRecovery = res.data.out_of_route_recovery.map((x) => {
                    const recovery = {
                        retailer_id: x.id,
                        amount: x.amount_received,
                        booker_id: x.booker_id,
                    };
                    return recovery;
                });
            }
        }, (error) => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Error while fetching execution delivery challan :>> ', error);
                this.toastService.showToaster({
                    message: 'Delivery challan not fetched, please try again later!',
                    title: 'Delivery Challan Error:',
                    type: 'error',
                });
            }
        });
    }
    getExpense(id) {
        return this.finalLoad.expense_types.find((y) => y.id === id).name;
    }
    addExpense(type, amount) {
        if (type.value && amount.value) {
            const expenses = JSON.parse(JSON.stringify(this.finalLoad.expense_detail));
            const expIndex = expenses.findIndex((x) => x.expense_type === +type.value);
            if (expIndex > -1) {
                expenses[expIndex].amount = amount.value;
            }
            else {
                expenses.push({ expense_type: +type.value, amount: +amount.value });
            }
            type.value = '';
            amount.value = '';
            this.finalLoad.expense_detail = JSON.parse(JSON.stringify(expenses));
            this.setIsExpenseAdded();
        }
        else {
            this.toastService.showToaster({
                type: 'error',
                title: 'Expense Error:',
                message: 'Please select expense type and add amount!',
            });
        }
    }
    removeExpense(type) {
        this.finalLoad.expense_detail = this.finalLoad.expense_detail.filter((x) => x.expense_type !== type);
        this.setIsExpenseAdded();
    }
    setIsExpenseAdded() {
        this.isExpenseAdded = true;
        setTimeout(() => {
            this.isExpenseAdded = false;
        }, 500);
    }
    saveExpense() {
        document.getElementById('close-expense').click();
        // if (this.finalLoad.expense_detail.length) {
        //     this.isAdded = true;
        //     this.finalLoad.expense_detail = this.finalLoad.expense_detail.map(x => {
        //         return { expense_type: +x.expense_type, amount: +x.amount };
        //     });
        //     this.orderService.saveExecutionExpense(this.loadId, this.salemanId, this.orderDate, this.finalLoad.expense_detail)
        //         .subscribe(res => {
        //             this.isAdded = false;
        //             if (res.status === 200) {
        //                 this.toastService.showToaster({
        //                     title: 'Expense Saved:',
        //                     message: 'Expense saved successfully!',
        //                     type: 'success'
        //                 });
        //                 this.finalLoad = res.data;
        //             }
        //         }, error => {
        //             this.isAdded = false;
        //             if (error.status !== 1 && error.status !== 401) {
        //                 console.log('Error while saving expenses :>> ', error);
        //                 this.toastService.showToaster({
        //                     title: 'Expense Error:',
        //                     message: 'Expense not saved, please try again before marking complete!',
        //                     type: 'error'
        //                 });
        //             }
        //         });
        // }
        this.isAdded = true;
        this.finalLoad.expense_detail = this.finalLoad.expense_detail.map((x) => {
            return { expense_type: +x.expense_type, amount: +x.amount };
        });
        this.orderService
            .saveExecutionExpense(this.loadId, this.salemanId, this.orderDate, this.finalLoad.expense_detail)
            .subscribe((res) => {
            this.isAdded = false;
            if (res.status === 200) {
                this.toastService.showToaster({
                    title: 'Expense Saved:',
                    message: 'Expense saved successfully!',
                    type: 'success',
                });
                this.finalLoad = res.data;
            }
        }, (error) => {
            this.isAdded = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Error while saving expenses :>> ', error);
                this.toastService.showToaster({
                    title: 'Expense Error:',
                    message: 'Expense not saved, please try again before marking complete!',
                    type: 'error',
                });
            }
        });
    }
    checkRecovery(retailer) {
        if (+retailer.recovery > retailer.balance) {
            this.toastService.showToaster({
                title: 'Recovery Error:',
                message: 'Recovered amount cannot be greater than credit!',
                type: 'error',
            });
            retailer.recovery = 0;
        }
    }
    setRecoveryRetailer() {
        this.isAdded = true;
        this.orderService
            .checkBalance(this.recoveryRetailer.retailer_id)
            .subscribe((res) => {
            this.isAdded = false;
            if (res.status) {
                if (res.data[0].balance > 0) {
                    this.recoveryRetailer.isAdded = true;
                    this.recoveryRetailer.balance = res.data[0].balance;
                    this.recoveryRetailer.recovery = 0;
                    this.recoveryRetailer.recoveryAdded = false;
                    this.recoveryListing.push(this.recoveryRetailer);
                    this.isAdded = false;
                }
                else {
                    this.toastService.showToaster({
                        title: 'Recovery:',
                        message: `${this.recoveryRetailer.retailer_name.toUpperCase()} has no credit to add recovery!`,
                        type: 'error',
                    });
                }
            }
        });
    }
    addRevoery(retaielr) {
        retaielr.recoveryAdded = true;
        const recoveryData = {
            retailer_id: retaielr.retailer_id,
            amount: +retaielr.recovery,
            booker_id: retaielr.booker_id || this.selectedOrderBooker.employee_id,
        };
        this.outOfRouteRecovery.push(recoveryData);
    }
    removeRecovery(retailer) {
        if (retailer.order_payment_id) {
            this.orderService
                .removeOutOfRuoteRecovery(retailer.order_payment_id)
                .subscribe((res) => {
                if (res.status === 200) {
                    this.resetRecoveryValues(retailer);
                }
            });
        }
        else {
            this.resetRecoveryValues(retailer);
        }
    }
    resetRecoveryValues(retailer) {
        this.isAdded = true;
        retailer.recoveryAdded = false;
        retailer.recovery = 0;
        this.outOfRouteRecovery = this.outOfRouteRecovery.filter((x) => x.retailer_id !== retailer.retailer_id);
        this.recoveryListing = this.recoveryListing.filter((x) => x.retailer_id !== retailer.retailer_id);
        setTimeout(() => {
            this.isAdded = false;
        }, 500);
    }
    checkRecieveable() {
        if (+this.amountReceived === 0) {
            this.toastService.showToaster({
                title: 'Execution Error:',
                message: 'Please add received amount!',
                type: 'error',
            });
        }
        else {
            document.getElementById('show-complete').click();
        }
    }
    amountReceivedMax() {
        const receiable = this.finalLoad.dsr.total_amount_recieveable.toFixed(2);
        if (+this.amountReceived > +receiable) {
            this.toastService.showToaster({
                title: 'Execution Error:',
                message: `Received amount cannot be greater than ${this.finalLoad.dsr.total_amount_recieveable}!`,
                type: 'error',
            });
            this.amountReceived = 0;
        }
    }
    markCompelet() {
        var _a, _b, _c, _d, _e, _f;
        document.getElementById('close-complete').click();
        this.loading = true;
        this.orderService
            .markCompeleteExecution(this.loadId, {
            saleman_id: this.salemanId,
            total_amount_recieved: +this.amountReceived,
            dsr_id: (_b = (_a = this.finalLoad) === null || _a === void 0 ? void 0 : _a.dsr) === null || _b === void 0 ? void 0 : _b.id,
            net_receivable: (_d = (_c = this.finalLoad) === null || _c === void 0 ? void 0 : _c.dsr) === null || _d === void 0 ? void 0 : _d.total_net_after_recovery,
            balance: ((_f = (_e = this.finalLoad) === null || _e === void 0 ? void 0 : _e.dsr) === null || _f === void 0 ? void 0 : _f.total_net_after_recovery) - this.amountReceived,
            execution_date: this.orderDate,
        })
            .subscribe((res) => {
            this.loading = false;
            if (res.status === 200) {
                this.toastService.showToaster({
                    title: 'Execution Completed:',
                    message: 'Execution completed successfully!',
                    type: 'success',
                });
                this.router.navigateByUrl('/orders/execution-list');
            }
        }, (error) => {
            this.loading = false;
            console.log('Execution complete Error :>> ', error);
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    title: 'Execution Error:',
                    message: 'Execution not completed, please try again later!',
                    type: 'error',
                });
            }
        });
    }
    generateDSR() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiDomain}${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].DSR_PDF}/${this.finalLoad.dsr.id}`;
        window.open(url);
    }
    ngOnDestroy() {
        this.change.detach();
    }
}
ExecuteOrderComponent.ɵfac = function ExecuteOrderComponent_Factory(t) { return new (t || ExecuteOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_execution_service__WEBPACK_IMPORTED_MODULE_5__["ExecutionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_7__["GeneralDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spot_sale_service__WEBPACK_IMPORTED_MODULE_8__["SpotSaleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"])); };
ExecuteOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExecuteOrderComponent, selectors: [["app-execute-order"]], decls: 140, vars: 21, consts: [["id", "billsModalCounterSale", "tabindex", "-1", "role", "dialog", "aria-labelledby", "billsModalCounterSaleLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "top_border"], [1, "modal-header"], ["id", "billsModalCounterSaleLabel", 1, "modal-title"], ["type", "button", "id", "close-bills", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-12"], [1, "heading3"], [1, "row", "print-icon-div", "pb-0"], [1, "col-6", "pl-0"], [3, "click"], ["src", "assets/images/a4.svg", "alt", "", 1, "print-icon"], [1, "col-6", "pr-0"], ["src", "assets/images/a5.svg", "alt", "", 1, "print-icon"], ["id", "order-del", "tabindex", "-1", "role", "dialog", "aria-labelledby", "orderLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content", "top-borderRed"], ["id", "orderLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "col-md-12"], [1, "modal-footer", "border-0"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "submit", "id", "close-del", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-cancel"], ["id", "order-complete", "tabindex", "-1", "role", "dialog", "aria-labelledby", "orderCompleteLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "id", "close-complete", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-cancel"], ["hidden", "", "data-target", "#order-complete", "data-toggle", "modal", "id", "show-complete"], ["id", "expenseModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "expenseLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "850px"], [1, "modal-content", "top-borderBlue"], ["id", "expnseLabel", 1, "modal-title"], ["class", "modal-body", 4, "ngIf"], ["type", "button", "id", "close-expense", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-cancel"], [3, "selectedRetailer", "orderType", "orderedProducts", "loadingProducts", "allProducts", "productSchemes", "productMerchantDiscount", "specialDiscounts", "drawerClosed", "productSelected", 4, "ngIf"], [3, "productsList", "orderReturnedItems", "productReturned", "closeReturned", 4, "ngIf"], ["id", "exampleModal2", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["class", "modal-header", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], ["id", "floating-label", "class", "form-wrap p-0", 4, "ngIf"], ["class", "form-wrap p-10", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", "id", "close-payment-modal", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-cancel", 3, "click"], ["id", "order-container", 1, "container", "mw-1280"], [1, "card", "daily-operations"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "nav_M", "mb-3"], [1, "nav-item"], ["id", "pills-home-tab", 1, "nav-link", 3, "ngClass"], [1, "wz-icon"], [1, "fa", "fa-list-ul"], ["id", "pills-sale-tab", 1, "nav-link", 3, "ngClass"], [1, "fa", "fa-dollar-sign"], ["id", "pills-load-tab", 1, "nav-link", 3, "ngClass"], [1, "fa", "fa-redo"], ["id", "pills-final-tab", 1, "nav-link", 3, "ngClass"], [1, "fa", "fa-check"], ["id", "pills-tabContent", 1, "tab-content"], ["class", "tab-pane tab_M p-0 PT-10 fade", "id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 3, "ngClass", 4, "ngIf"], ["class", "tab-pane tab_M p-0 PT-10 fade", "id", "pills-sale", "role", "tabpanel", "aria-labelledby", "pills-sale-tab", 3, "ngClass", 4, "ngIf"], ["class", "tab-pane tab_M p-0 PT-20 fade", "id", "pills-load", "role", "tabpanel", "aria-labelledby", "pills-load-tab", 3, "ngClass", 4, "ngIf"], ["class", "tab-pane tab_M p-0 PT-10 fade", "id", "pills-final", "role", "tabpanel", "aria-labelledby", "pills-final-tab", 3, "ngClass", 4, "ngIf"], [1, "col-md-12", "text-center"], [1, "execFooter"], ["type", "submit", 1, "btn", "btn-primary", "m-0", "mr-2", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-primary", "m-0", 3, "disabled", "click"], ["data-toggle", "modal", "data-target", "#billsModalCounterSale", "id", "billsPrintPaperModalTrigger", "hidden", "", 1, "btn", "btn-default", "mb-0"], [1, "row", "mb-20"], [1, "col-md-4", "pr-0"], [1, "font12", "mb-5"], ["data-select2-id", "39", 1, "form-s2", "focused"], ["id", "expense_type", "placeholder", "Expense Type", "tabindex", "-1", "aria-hidden", "true", "value", "", 1, "form-control", "formselect", "expense_id", "select2-hidden-accessible", 2, "width", "100%", "font-size", "12px"], ["expenseType", ""], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-3", "pr-0"], [1, "form-group", "focused"], [1, "control-label"], ["type", "number", "id", "expense-amount", "placeholder", "", 1, "form-control", "expense_amount", 3, "keydown"], ["expenseAmount", ""], [1, "col-2", 2, "padding-top", "29px"], ["type", "button", 1, "btn", "btn-primary", "add_expense_btn", 3, "click"], [1, "expense_table"], ["id", "expenseAddedTable_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], ["class", "table", "datatable", "", "id", "expenseAddedTable", "style", "width: 100%;", "role", "grid", "aria-describedby", "expenseAddedTable_info", 3, "dtOptions", 4, "ngIf"], ["class", "col-md-12", "style", "text-align: center;padding: 30px;", 4, "ngIf"], [3, "value"], ["datatable", "", "id", "expenseAddedTable", "role", "grid", "aria-describedby", "expenseAddedTable_info", 1, "table", 2, "width", "100%", 3, "dtOptions"], ["role", "row"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-default", "red-bg", "mb-0", "remove_expense", 3, "id", "click"], [1, "col-md-12", 2, "text-align", "center", "padding", "30px"], ["role", "status", 1, "spinner-border", 2, "width", "5rem", "height", "5rem", "color", "#0038ba"], [1, "sr-only"], [3, "selectedRetailer", "orderType", "orderedProducts", "loadingProducts", "allProducts", "productSchemes", "productMerchantDiscount", "specialDiscounts", "drawerClosed", "productSelected"], [3, "productsList", "orderReturnedItems", "productReturned", "closeReturned"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["id", "floating-label", 1, "form-wrap", "p-0"], [1, "row", "pt-10"], [1, "col-4"], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "payment", "id", "payment1", "value", "full", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "click"], ["for", "payment1", 1, "custom-control-label", 2, "font-size", "13px", "line-height", "25px"], ["type", "radio", "name", "payment", "id", "payment2", "value", "partial", 1, "custom-control-input", 3, "ngModel", "click", "ngModelChange"], ["for", "payment2", 1, "custom-control-label", 2, "font-size", "13px", "line-height", "25px"], ["class", "col-12 input-error", 4, "ngIf"], [1, "col-md-6", "PT-10"], [1, "control-label", "mb-10"], ["type", "text", "id", "chequeNum", "name", "cheque_num", "required", "", "autocomplete", "off", 1, "form-control", "cheque_num", 3, "ngModel", "focus", "blur", "ngModelChange"], ["chequNo", "ngModel"], ["class", "input-error", 4, "ngIf"], ["type", "date", "id", "datepicker", "required", "", "placeholder", "", "autocomplete", "off", "name", "payment_date", 1, "form-control", "cheque_date", 3, "ngModel", "focus", "blur", "ngModelChange"], ["payDate", "ngModel"], [1, "col-md-6", "PT-5"], ["type", "text", "name", "cheque_bank_name", "id", "chequeBankName", "required", "", "autocomplete", "off", 1, "form-control", "cheque_bank_name", 3, "ngModel", "focus", "blur", "ngModelChange"], ["bank_Name", "ngModel"], ["class", "col-md-6 PT-5", 4, "ngIf"], [1, "col-12", "input-error"], [1, "input-error"], ["type", "number", "min", "0", "name", "cheque_amount", "required", "", "id", "Amount1", "autocomplete", "off", 1, "form-control", "cheque_amount", 3, "max", "ngModel", "focus", "blur", "ngModelChange"], ["cheqAmount", "ngModel"], [1, "col-6"], ["type", "radio", "name", "payment", "id", "Amount1", "value", "full", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "click"], ["for", "Amount1", 1, "custom-control-label", 2, "font-size", "13px", "line-height", "25px"], ["type", "radio", "name", "payment", "id", "Amount2", "value", "partial", 1, "custom-control-input", 3, "ngModel", "click", "ngModelChange"], ["for", "Amount2", 1, "custom-control-label", 2, "font-size", "13px", "line-height", "25px"], ["class", "col-md-6 PT-10", 4, "ngIf"], ["type", "number", "min", "0", "name", "cheque_amount", "required", "", "autocomplete", "off", 1, "form-control", "cheque_amount", 3, "max", "ngModel", "focus", "blur", "ngModelChange"], ["credAmount", "ngModel"], [1, "form-wrap", "p-10"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "tab_M", "p-0", "PT-10", "fade", 3, "ngClass"], [1, "topstats"], [1, "row", "m-0"], [1, "col", "pr-0"], [1, "gary-box"], [1, "execution_date"], [1, "col-auto", "pr-0"], [1, "gary-box", "min-w"], [1, "execution_bookers", "float-right"], [1, "execution_territories"], [1, "execution_order"], [1, "col"], [1, "gary-box", 2, "min-width", "200px"], [1, "execution_amount"], [1, "row", "m-0", "grayTopborder"], ["id", "orderList-id", 1, "col-4", "p-0"], [3, "loading", "currentTab", "retailers", "orderType", "retailerChanged"], [1, "col", "p-0"], [1, "rightHeight"], [3, "currentTab", "orderDetail", "returnAmount", "dueAmount", "isChequeAdded", "isCreditAdded", "receivableAmount", "totalPayment", "cheque", "credit", "cash", "orders", "schemes", "selectedRetailer", "returnedProduct", "allProducts", "specialDiscounts", "merchantDiscount", "newProduct", "orderType", "recoveryAmount", "deleteReturned", "openDrawer", "openReturnedModal", "productUpdated", 4, "ngIf"], ["class", "no-content", 4, "ngIf"], ["class", "col-md-12 bottom-act-btn", 4, "ngIf"], [3, "currentTab", "orderDetail", "returnAmount", "dueAmount", "isChequeAdded", "isCreditAdded", "receivableAmount", "totalPayment", "cheque", "credit", "cash", "orders", "schemes", "selectedRetailer", "returnedProduct", "allProducts", "specialDiscounts", "merchantDiscount", "newProduct", "orderType", "recoveryAmount", "deleteReturned", "openDrawer", "openReturnedModal", "productUpdated"], [1, "no-content"], [1, "no-content-container", 2, "margin", "auto", "display", "table", "text-align", "center", "color", "#B7B7B7"], ["src", "assets/images/select order-icon.svg", "alt", ""], [1, "col-md-12", "bottom-act-btn"], ["class", "btn btn-primary float-left mr-2 font13", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-primary float-left font13 mr-2 red-bg", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-primary float-left font13", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-primary float-left font13 red-bg", 3, "disabled", "click", 4, "ngIf"], ["id", "open-modal-payment", "style", "display: none;", "data-toggle", "modal", "data-target", "#exampleModal2", 4, "ngIf"], [1, "btn", "btn-primary", "mr-2", "save_order_execution", "font13", 3, "disabled", "click"], ["data-toggle", "modal", "data-target", "#order-del", 1, "btn", "btn-cancel", "cancel_order_btn", "font13", 3, "disabled"], [1, "btn", "btn-primary", "float-left", "mr-2", "font13", 3, "disabled", "click"], [1, "btn", "btn-primary", "float-left", "font13", "mr-2", "red-bg", 3, "disabled", "click"], [1, "btn", "btn-primary", "float-left", "font13", 3, "disabled", "click"], [1, "btn", "btn-primary", "float-left", "font13", "red-bg", 3, "disabled", "click"], ["id", "open-modal-payment", "data-toggle", "modal", "data-target", "#exampleModal2", 2, "display", "none"], ["id", "pills-sale", "role", "tabpanel", "aria-labelledby", "pills-sale-tab", 1, "tab-pane", "tab_M", "p-0", "PT-10", "fade", 3, "ngClass"], [1, "Product-Filter", "border-0"], [1, "col-3", "pr-0"], [1, "_cust_filter", "p-0", "m-0", "w-100"], [1, "form-s2"], ["name", "order-booker", "placeholder", "Select Order Booker", 1, "formselect", 2, "width", "100%!important", 3, "ngModel", "change", "ngModelChange"], ["class", "col-3 pr-0", 4, "ngIf"], ["class", "btn add_button addpr addReturn add-ordr", 3, "click", 4, "ngIf"], [3, "retailers", "currentTab", "orderType", "isSpotSaleActive", "retailerChanged"], [3, "currentTab", "orderDetail", "returnAmount", "isChequeAdded", "isCreditAdded", "receivableAmount", "totalPayment", "cheque", "credit", "orders", "cash", "schemes", "dueAmount", "selectedRetailer", "orderType", "allProducts", "specialDiscounts", "merchantDiscount", "newProduct", "openDrawer", "openReturnedModal", "productUpdated", "deleteReturned", 4, "ngIf"], ["name", "booker-route", "placeholder", "Select Route", 1, "formselect", 2, "width", "100%!important", 3, "ngModel", "change", "ngModelChange"], ["name", "spot-retailer", "placeholder", "Select Retailer", 1, "formselect", 2, "width", "100%!important", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngIf"], [1, "btn", "add_button", "addpr", "addReturn", "add-ordr", 3, "click"], [3, "currentTab", "orderDetail", "returnAmount", "isChequeAdded", "isCreditAdded", "receivableAmount", "totalPayment", "cheque", "credit", "orders", "cash", "schemes", "dueAmount", "selectedRetailer", "orderType", "allProducts", "specialDiscounts", "merchantDiscount", "newProduct", "openDrawer", "openReturnedModal", "productUpdated", "deleteReturned"], ["class", "btn btn-primary float-left mr-2 font13", 3, "click", 4, "ngIf"], ["class", "btn btn-primary float-left font13 mr-2 red-bg", 3, "click", 4, "ngIf"], ["class", "btn btn-primary float-left font13", 3, "click", 4, "ngIf"], ["class", "btn btn-primary float-left font13 red-bg", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "float-left", "mr-2", "font13", 3, "click"], [1, "btn", "btn-primary", "float-left", "font13", "mr-2", "red-bg", 3, "click"], [1, "btn", "btn-primary", "float-left", "font13", 3, "click"], [1, "btn", "btn-primary", "float-left", "font13", "red-bg", 3, "click"], ["id", "pills-load", "role", "tabpanel", "aria-labelledby", "pills-load-tab", 1, "tab-pane", "tab_M", "p-0", "PT-20", "fade", 3, "ngClass"], [1, "col-12", "PT-10"], ["datatable", "", "class", "table table-hover dt-responsive nowrap", "id", "example2", "style", "width:100%", 3, "dtOptions", 4, "ngIf"], ["name", "spot-retailer", "placeholder", "Select Retailer", 1, "formselect", 2, "width", "100%!important", 3, "ngModel", "ngModelChange", "change"], ["datatable", "", "id", "example2", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions"], ["type", "text", "placeholder", "0", 1, "form-control", "value_input", 2, "width", "90px", 3, "readonly", "ngModel", "name", "id", "ngModelChange", "keydown", "keyup"], ["class", "btn btn-default btn-line", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-default red-bg", "style", "color: white;", 3, "click", 4, "ngIf"], [1, "btn", "btn-default", "btn-line", 3, "disabled", "click"], [1, "btn", "btn-default", "red-bg", 2, "color", "white", 3, "click"], ["id", "pills-final", "role", "tabpanel", "aria-labelledby", "pills-final-tab", 1, "tab-pane", "tab_M", "p-0", "PT-10", "fade", 3, "ngClass"], ["class", "row", 4, "ngIf"], [1, "col-8", "PB-30", "pr-0"], [1, "header", "PT-10", "PB-10", "mb-15"], [1, "w-100"], ["datatable", "", "class", "table table-hover dt-responsive nowrap", "id", "example3", "style", "width:100%", 3, "dtOptions", 4, "ngIf"], [1, "cash-report"], [1, "header"], [1, "cash-title", "w-100", "mb-15"], ["class", "btn btn-primary add-expense", "data-toggle", "modal", "data-target", "#expenseModal", 4, "ngIf"], ["class", "btn btn-primary add-expense", "disabled", "", 4, "ngIf"], [1, "report_value"], [1, "report_value", 2, "color", "#0038ba"], [1, "report_value", 2, "height", "40px", "line-height", "22px"], ["type", "number", "placeholder", "0", 1, "form-control", "value_input", "amount_recieved_cashReport", 3, "ngModel", "ngModelChange", "keydown"], ["class", "col-12 PB-10", 4, "ngIf"], ["datatable", "", "id", "example3", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions"], ["data-toggle", "modal", "data-target", "#expenseModal", 1, "btn", "btn-primary", "add-expense"], ["disabled", "", 1, "btn", "btn-primary", "add-expense"], ["role", "status", 1, "spinner-border", "text-light"], [1, "col-12", "PB-10"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "btn", "btn-primary", "w-100", 3, "disabled", "click"], ["type", "submit", "disabled", "", 1, "btn", "btn-primary", "w-100", "mr-2"]], template: function ExecuteOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Print bill for this order");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select paper size for print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_Template_a_click_17_listener() { return ctx.getBills("A4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "A4 Portrait Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_Template_a_click_22_listener() { return ctx.getBills("A5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "A5 Landscape Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cancel Order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Are you sure you want to cancel the order?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ExecuteOrderComponent_button_41_Template, 2, 0, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ExecuteOrderComponent_button_42_Template, 2, 0, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Complete Execution ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Are you sure you want to Mark the order as Completed?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_Template_button_click_60_listener() { return ctx.markCompelet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "show complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ExecuteOrderComponent_div_77_Template, 26, 3, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_Template_button_click_79_listener() { return ctx.saveExpense(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ExecuteOrderComponent_app_products_drawer_83_Template, 1, 8, "app-products-drawer", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, ExecuteOrderComponent_app_returned_products_84_Template, 1, 2, "app-returned-products", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ExecuteOrderComponent_div_88_Template, 8, 0, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, ExecuteOrderComponent_div_89_Template, 37, 10, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ExecuteOrderComponent_div_90_Template, 8, 0, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, ExecuteOrderComponent_div_91_Template, 15, 4, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, ExecuteOrderComponent_div_92_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_Template_button_click_94_listener() { return ctx.addPaymentMethod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_Template_button_click_96_listener() { return ctx.paymentCancelled(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "ul", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Spot Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Recovery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Final");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, ExecuteOrderComponent_div_128_Template, 43, 17, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, ExecuteOrderComponent_div_129_Template, 54, 22, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, ExecuteOrderComponent_div_130_Template, 14, 7, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, ExecuteOrderComponent_div_131_Template, 37, 11, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_Template_button_click_134_listener() { return ctx.changeTab(ctx.currentTab - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExecuteOrderComponent_Template_button_click_136_listener() { return ctx.changeTab(ctx.currentTab + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.finalLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showReturned);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCredit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCredit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCredit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCredit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paymentTypeCheque === "partial" && ctx.paymentTypeCredit === "full" || ctx.paymentTypeCheque === "full" && ctx.paymentTypeCredit === "partial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.paymentTypeCheque === "partial" && ctx.paymentTypeCredit === "full" || ctx.paymentTypeCheque === "full" && ctx.paymentTypeCredit === "partial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab === 1 ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab === 2 ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab === 3 ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentTab === 4 ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.currentTab === 1 || ctx.isSpotSaleActive || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isSpotSaleActive || ctx.loading || ctx.currentTab === 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTableDirective"], _shared_components_product_right_panel_product_right_panel_compoent__WEBPACK_IMPORTED_MODULE_13__["ProductsRightPanelComponent"], _shared_components_returned_products_returned_products_component__WEBPACK_IMPORTED_MODULE_14__["ReturnedProductsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], _shared_components_retailer_sub_listing_retailer_sub_listing_component__WEBPACK_IMPORTED_MODULE_15__["RetailerSubListComponent"], _shared_components_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_16__["OrderItemsListComponent"], _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_17__["WhiteLoaderComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"]], styles: [".mw-1280 {max-width: 1280px;}\r\n.retailerTable .table thead th{font-size: 12px;  padding: 5px 8px!important}\r\n.retailerTable .table td{font-size: 12px!important; padding: 5px 4px!important; vertical-align: middle; line-height: 1}\r\n.ProList-div { max-height: 57vh; flex: 1; overflow-y: auto; overflow-x: hidden; padding: 10px; font-size: 14px; }\r\n.ProList-div .table img{margin-top: -2px; margin-bottom: -2px; margin-left: 4px;}\r\n.APS-list input {height: 32px; border: solid 1px #eae9e9; box-shadow: none; padding-left: 30px; font-size: 13px; letter-spacing: 1px;}\r\n.APS-list .fa {position: absolute;  top: 8px; left: 8px; color: #b5b5b5;}\r\n._selectProList .header .add_button {padding: 4px 8px 3px 8px; right: 15px;}\r\n._selectProList .APS-list { padding: 0; width: 100%; margin-top: 10px; position: relative; float: right;}\r\n.topstats{margin-top: 10px; font-size: 13px; margin-bottom: 5px;}\r\n.topstats .gary-box{line-height: 1;background-color: #f9f9f9;border-bottom: solid 1px #d1d1d1;padding: 10px;}\r\n.topstats .gary-box span{font-family: 'Rationale', sans-serif; color:#0038ba; font-size: 18px; float: right; margin-top: -4px;}\r\n.min-w{min-width:240px }\r\n.order-list{font-size: 12px; background: #fff; padding: 6px 10px; border: solid 1px #eaeaea; position: relative;\r\n\ttransition: all 0.2s; transform: translateZ(0); transform: scale(0.97); cursor: pointer;}\r\n.order-list.active{\tborder-color:#0038ba;}\r\n.order-list:hover, .order-list.active{ \tbox-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.18); transform: scale(1); z-index: 3}\r\n.order-list span{display: block}\r\n.order-list span .fa{color: #b5b5b5}\r\n.order-list span.or-val{font-family: 'Rationale', sans-serif;font-size: 16.5px; line-height: 1; color: #0038ba }\r\n.order-list .ord-no{font-family: 'Poppins', sans-serif;line-height: 1;font-size: 35px; font-weight: 800; padding-top: 0; color: #ececec;  position: absolute; right:80px; top: 7px}\r\n.addPR-head { padding: 15px 15px 0px 20px !important; background:none!important }\r\n#orderList-id{flex: 0 0 300px; max-width: 300px; width: 300px;}\r\n.value_input { padding: 2px; margin: 0!important; font-size: 12px;  box-shadow: none;height: 22px; width: 52px;}\r\n.total-valu-div{width:280px; min-height: 173px; font-size: 13px; padding-left: 20px; padding-right: 20px; margin-left: auto; margin-right: 0; padding-top: 5px; background-color: #f7f7f7; border: solid 1px #ececec}\r\n.total-valu-div .row{border-bottom:solid 1px #e8e6e6}\r\n.total-valu-div .row .col-6{padding:2px; line-height: 1.5;font-family: proximanova-semibold, sans-serif!important; }\r\n.total-valu-div span{font-family: 'Rationale', sans-serif; line-height: 1.1; font-size: 18px; text-align: right; display: block}\r\n.ProListHeight{ height: calc(100vh - 200px)}\r\n.rightHeight{ height: calc(100vh - 249px); overflow-y: auto;}\r\n.addpr{padding: 4px 8px; font-size: 12px; top: 11px; right: 15px;}\r\n.productSearch {position: relative;}\r\n.productSearch input {height: 32px;border: solid 1px #eae9e9;box-shadow: none;padding-left: 30px;font-size: 13px;letter-spacing: 1px;}\r\n.productSearch .fa {position: absolute;top: 8px;left: 8px;color: #b5b5b5;}\r\n.AddProductTable {padding: 0;margin: 0}\r\n.AddProductTable tr {border-bottom: solid 1px #eeeeee}\r\n.AddProductTable td {padding-bottom: 7px;padding-top: 7px}\r\n.ProListDiv {padding: 0;display: table;}\r\n.ProListDiv .PR_Name {display: table-cell;vertical-align: middle;font-size: 14px;letter-spacing: 1px;line-height: 16px}\r\n.ProListDiv .PrList_img {width: 35px;height: 35px;margin-right: 8px;border: solid 1px #e0e0e0}\r\n.AddProductTable .btn-default {padding: 5px 8px;font-size: 13px;border-radius: 0;-khtml-border-radius: 0;background: linear-gradient(90deg, #1e54d3 0%, #0038ba 100%);color: #fff;text-align: center;margin: 0;line-height: 1;min-width: 74px;letter-spacing: 1px;float: right;border: none!important}\r\n.se_cus-type .form-control{border: 1px solid #eeeeee;background-color: #fff;}\r\n.ng-select .ng-select-container, .ng-option, .ng-select span { text-transform: capitalize; }\r\n.ng-select .ng-clear-wrapper {display: none;}\r\n.daily-operations .nav_M a, .daily-operations .nav_M .nav-link.active{padding-top: 15px;}\r\n.cash-report{background-color: #f8f8f8; min-height: calc(100vh - 210px);}\r\n.cash-report .header{background: linear-gradient(0deg, #f8f8f8 0%, #f8f8f8 50%); padding:15px 20px;}\r\n.cash-report .report_value {background-color: #fff; font-size: 13px; position: relative; padding: 10px 10px;  letter-spacing: 0.5px; margin-bottom: 5px; margin-top: 5px; box-shadow: 0 2px 8px 0 rgba(79,79,79,.1); line-height: 1}\r\n.cash-report .report_value span{font-family: 'Rationale', sans-serif; line-height: 1; font-size: 18px; float: right; margin-top: -2px}\r\n.totalcash span{font-size: 20px!important; color: #0038ba}\r\n.add-ordr {float: left;position: static;margin-left: 10px;}\r\n.Product-Filter {background-color: #f3f2f2;padding: 10px 15px 10px 15px !important;box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);margin: 15px 0px 15px 0px !important;border-bottom: solid 2px #0038ba;}\r\n._cust_filter {padding-left: 0 !important;padding-top: 0 !important;float: left;}\r\n._cust_filter .form-s2 .ng-select {padding: 0 !important;height: 30px !important;}\r\n._cust_filter .form-s2 .ng-select .ng-select-container {width: 100%;font-size: 14px;border: none;border-radius: 0;min-height: 30px !important;height: 30px !important;}\r\n.cash-report .value_input{float: right; width: 85px;}\r\n.addsalesman { font-size: 11px; width: 100%; line-height: 1; margin-top: 5px;}\r\n.add-expense{font-size: 13px;padding: 2px 10px;position: absolute;right: 0;}\r\n.red-bg{border: solid 1px #f12300}\r\n.wz-icon .fa { color: #fff;}\r\n.addpr { padding: 4px 8px; font-size: 12px;top: 11px;right: 15px; cursor: pointer;}\r\n.daily-operations .tab-content{padding-bottom: 10px}\r\n.bottom-act-btn{text-align: right; padding-top: 15px; padding-bottom: 15px}\r\n.bottom-act-btn .btn { letter-spacing: 1px; font-size: 12px; padding: 4px 12px; box-shadow: none}\r\n.execFooter { background: #F6F6F6; padding-top: 10px; padding-bottom: 10px; margin-top: 5px;}\r\n.cash-report .value_input { float: right;  width: 95px;}\r\n.input-error { color: red; font-size: 13px; float: left;}\r\n/* Chrome, Safari, Edge, Opera */\r\ninput::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none;  margin: 0;}\r\n/* Firefox */\r\ninput[type=number] {-moz-appearance: textfield;}\r\n.red-bg {background: red!important; color: #fff !important;}\r\n.no-content {width:100%;height:65vh;display:flex;}\r\n.no-content .no-content-container {margin: auto;display:table;text-align: center; color:#B7B7B7}\r\n.no-content .no-content-container img {width: 70px; height: 70px; margin: auto auto 10px auto; display: block}\r\n.print-icon-div{text-align: center; padding: 15px;}\r\n.print-icon-div a{display: inline-block; border: solid 1px #e9ecef; padding: 15px; width: 100%; text-align: center; text-decoration: none; color: #282828; font-size: 13px;}\r\n.print-icon-div a:HOVER{border: solid 1px #0038ba; color: #0038ba; box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);}\r\n.print-icon{filter: grayscale(1); width: 45px; opacity: 0.7; display: block; margin: auto; margin-top: 10px; margin-bottom: 15px;}\r\n.print-icon-div a:HOVER .print-icon{filter:none; opacity: 1;}\r\n.heading3{margin: 0; font-size: 16px;}\r\n.select-date, .select-date:focus{box-shadow: none; border: none; background-color:#f6f6f6; font-size: 14px; height: 30px; width: 200px}\r\n.no-content {width:100%;height:65vh;display:flex;}\r\n.no-content .no-content-container {margin: auto;display:table;text-align: center; color:#B7B7B7}\r\n.no-content .no-content-container img {width: 70px; height: 70px; margin: auto auto 10px auto; display: block}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcmRlcnMvY29tcG9uZW50cy9leGVjdXRlLW9yZGVyL2V4ZWN1dGUtb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVLGlCQUFpQixDQUFDO0FBQzVCLCtCQUErQixlQUFlLEdBQUcsMEJBQTBCO0FBQzNFLHlCQUF5Qix5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSxzQkFBc0IsRUFBRSxjQUFjO0FBQ3RILGVBQWUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUU7QUFDaEgsd0JBQXdCLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDO0FBQ2hGLGlCQUFpQixZQUFZLEVBQUUseUJBQXlCLEVBQW1ELGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQztBQUN0TCxlQUFlLGtCQUFrQixHQUFHLFFBQVEsRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDO0FBQ3hFLHFDQUFxQyx3QkFBd0IsRUFBRSxXQUFXLENBQUM7QUFDM0UsNEJBQTRCLFVBQVUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDO0FBQ3hHLFVBQVUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixDQUFDO0FBQ2hFLG9CQUFvQixjQUFjLENBQUMseUJBQXlCLENBQUMsZ0NBQWdDLENBQUMsYUFBYSxDQUFDO0FBQzVHLHlCQUF5QixvQ0FBb0MsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztBQUM5SCxPQUFPLGdCQUFnQjtBQUN2QixZQUFZLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0I7Q0FDOUcsb0JBQW9CLEVBQUUsd0JBQXdCLEVBQTRELHNCQUFzQixFQUFFLGVBQWUsQ0FBQztBQUNuSixvQkFBb0Isb0JBQW9CLENBQUM7QUFDekMsd0NBQXdDLGdEQUFnRCxFQUF1RCxtQkFBbUIsRUFBRSxVQUFVO0FBQzlLLGlCQUFpQixjQUFjO0FBQy9CLHFCQUFxQixjQUFjO0FBQ25DLHdCQUF3QixvQ0FBb0MsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsZUFBZTtBQUMvRyxvQkFBb0Isa0NBQWtDLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsY0FBYyxHQUFHLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxRQUFRO0FBQ2xMLGNBQWMsc0NBQXNDLEVBQUUsMEJBQTBCO0FBQ2hGLGNBQWMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQztBQUM5RCxlQUFlLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztBQUMvRyxnQkFBZ0IsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCO0FBQ3BOLHFCQUFxQiwrQkFBK0I7QUFDcEQsNEJBQTRCLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyx1REFBdUQsRUFBRTtBQUNuSCxxQkFBcUIsb0NBQW9DLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGNBQWM7QUFDL0gsZ0JBQWdCLDJCQUEyQjtBQUMzQyxjQUFjLDJCQUEyQixFQUFFLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUM7QUFDakUsZ0JBQWdCLGtCQUFrQixDQUFDO0FBQ25DLHNCQUFzQixZQUFZLENBQUMseUJBQXlCLENBQWdELGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQztBQUNwTCxvQkFBb0Isa0JBQWtCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7QUFDekUsa0JBQWtCLFVBQVUsQ0FBQyxTQUFTO0FBQ3RDLHFCQUFxQixnQ0FBZ0M7QUFDckQscUJBQXFCLG1CQUFtQixDQUFDLGdCQUFnQjtBQUN6RCxhQUFhLFVBQVUsQ0FBQyxjQUFjLENBQUM7QUFDdkMsc0JBQXNCLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUI7QUFDdEgseUJBQXlCLFdBQVcsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMseUJBQXlCO0FBQzdGLCtCQUErQixnQkFBZ0IsQ0FBQyxlQUFlLENBQWdELGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLDREQUE0RCxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsc0JBQXNCO0FBQ3BWLDJCQUEyQix5QkFBeUIsQ0FBQyxzQkFBc0IsQ0FBQztBQUM1RSwrREFBK0QsMEJBQTBCLEVBQUU7QUFDM0YsOEJBQThCLGFBQWEsQ0FBQztBQUM1QyxzRUFBc0UsaUJBQWlCLENBQUM7QUFDeEYsYUFBYSx5QkFBeUIsRUFBRSwrQkFBK0IsQ0FBQztBQUN4RSxxQkFBcUIsMERBQTBELEVBQUUsaUJBQWlCLENBQUM7QUFDbkcsNEJBQTRCLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsR0FBRyxxQkFBcUIsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQ2pFLHlDQUF5QyxFQUFFLGNBQWM7QUFDaEssZ0NBQWdDLG9DQUFvQyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGdCQUFnQjtBQUNySSxnQkFBZ0IseUJBQXlCLEVBQUUsY0FBYztBQUN6RCxXQUFXLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztBQUMxRCxpQkFBaUIseUJBQXlCLENBQUMsdUNBQXVDLENBQUMsNkNBQTZDLENBQUMsb0NBQW9DLENBQUMsZ0NBQWdDLENBQUM7QUFDdk0sZUFBZSwwQkFBMEIsQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUM7QUFDaEYsbUNBQW1DLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDO0FBQ2pGLHdEQUF3RCxXQUFXLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQyx1QkFBdUIsQ0FBQztBQUN0SywwQkFBMEIsWUFBWSxFQUFFLFdBQVcsQ0FBQztBQUNwRCxlQUFlLGVBQWUsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQztBQUM3RSxhQUFhLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7QUFDM0UsUUFBUSx5QkFBeUI7QUFDakMsZUFBZSxXQUFXLENBQUM7QUFDM0IsU0FBUyxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7QUFDbEYsK0JBQStCLG9CQUFvQjtBQUNuRCxnQkFBZ0IsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CO0FBQzFFLHVCQUF1QixtQkFBbUIsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCO0FBQ2hHLGNBQWMsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxDQUFDO0FBQzVGLDRCQUE0QixZQUFZLEdBQUcsV0FBVyxDQUFDO0FBQ3ZELGVBQWUsVUFBVSxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUM7QUFDeEQsZ0NBQWdDO0FBQ2hDLHFFQUFxRSx3QkFBd0IsR0FBRyxTQUFTLENBQUM7QUFDMUcsWUFBWTtBQUFDLG9CQUFvQiwwQkFBMEIsQ0FBQztBQUM1RCxTQUFTLHlCQUF5QixFQUFFLHNCQUFzQixDQUFDO0FBQzNELGFBQWEsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7QUFDakQsbUNBQW1DLFlBQVksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsYUFBYTtBQUMvRix1Q0FBdUMsV0FBVyxFQUFFLFlBQVksRUFBRSwyQkFBMkIsRUFBRSxjQUFjO0FBQzdHLGdCQUFnQixrQkFBa0IsRUFBRSxhQUFhLENBQUM7QUFDbEQsa0JBQWtCLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQztBQUMzSyx3QkFBd0IseUJBQXlCLEVBQUUsY0FBYyxFQUFFLCtDQUErQyxDQUFDO0FBQ25ILFlBQVksb0JBQW9CLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO0FBQ2pJLG9DQUFvQyxXQUFXLEVBQUUsVUFBVSxDQUFDO0FBRzVELFVBQVUsU0FBUyxFQUFFLGVBQWUsQ0FBQztBQUNyQyxpQ0FBaUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsWUFBWTtBQUN0SSxhQUFhLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO0FBQ2pELG1DQUFtQyxZQUFZLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLGFBQWE7QUFDL0YsdUNBQXVDLFdBQVcsRUFBRSxZQUFZLEVBQUUsMkJBQTJCLEVBQUUsY0FBYyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3JkZXJzL2NvbXBvbmVudHMvZXhlY3V0ZS1vcmRlci9leGVjdXRlLW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXctMTI4MCB7bWF4LXdpZHRoOiAxMjgwcHg7fVxyXG4ucmV0YWlsZXJUYWJsZSAudGFibGUgdGhlYWQgdGh7Zm9udC1zaXplOiAxMnB4OyAgcGFkZGluZzogNXB4IDhweCFpbXBvcnRhbnR9XHJcbi5yZXRhaWxlclRhYmxlIC50YWJsZSB0ZHtmb250LXNpemU6IDEycHghaW1wb3J0YW50OyBwYWRkaW5nOiA1cHggNHB4IWltcG9ydGFudDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgbGluZS1oZWlnaHQ6IDF9XHJcbi5Qcm9MaXN0LWRpdiB7IG1heC1oZWlnaHQ6IDU3dmg7IGZsZXg6IDE7IG92ZXJmbG93LXk6IGF1dG87IG92ZXJmbG93LXg6IGhpZGRlbjsgcGFkZGluZzogMTBweDsgZm9udC1zaXplOiAxNHB4OyB9XHJcbi5Qcm9MaXN0LWRpdiAudGFibGUgaW1ne21hcmdpbi10b3A6IC0ycHg7IG1hcmdpbi1ib3R0b206IC0ycHg7IG1hcmdpbi1sZWZ0OiA0cHg7fVxyXG4uQVBTLWxpc3QgaW5wdXQge2hlaWdodDogMzJweDsgYm9yZGVyOiBzb2xpZCAxcHggI2VhZTllOTsgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lOyAtbW96LWJveC1zaGFkb3c6IG5vbmU7IGJveC1zaGFkb3c6IG5vbmU7IHBhZGRpbmctbGVmdDogMzBweDsgZm9udC1zaXplOiAxM3B4OyBsZXR0ZXItc3BhY2luZzogMXB4O31cclxuLkFQUy1saXN0IC5mYSB7cG9zaXRpb246IGFic29sdXRlOyAgdG9wOiA4cHg7IGxlZnQ6IDhweDsgY29sb3I6ICNiNWI1YjU7fVxyXG4uX3NlbGVjdFByb0xpc3QgLmhlYWRlciAuYWRkX2J1dHRvbiB7cGFkZGluZzogNHB4IDhweCAzcHggOHB4OyByaWdodDogMTVweDt9XHJcbi5fc2VsZWN0UHJvTGlzdCAuQVBTLWxpc3QgeyBwYWRkaW5nOiAwOyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDogMTBweDsgcG9zaXRpb246IHJlbGF0aXZlOyBmbG9hdDogcmlnaHQ7fVxyXG4udG9wc3RhdHN7bWFyZ2luLXRvcDogMTBweDsgZm9udC1zaXplOiAxM3B4OyBtYXJnaW4tYm90dG9tOiA1cHg7fVxyXG4udG9wc3RhdHMgLmdhcnktYm94e2xpbmUtaGVpZ2h0OiAxO2JhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkMWQxZDE7cGFkZGluZzogMTBweDt9XHJcbi50b3BzdGF0cyAuZ2FyeS1ib3ggc3Bhbntmb250LWZhbWlseTogJ1JhdGlvbmFsZScsIHNhbnMtc2VyaWY7IGNvbG9yOiMwMDM4YmE7IGZvbnQtc2l6ZTogMThweDsgZmxvYXQ6IHJpZ2h0OyBtYXJnaW4tdG9wOiAtNHB4O31cclxuLm1pbi13e21pbi13aWR0aDoyNDBweCB9XHJcbi5vcmRlci1saXN0e2ZvbnQtc2l6ZTogMTJweDsgYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzogNnB4IDEwcHg7IGJvcmRlcjogc29saWQgMXB4ICNlYWVhZWE7IHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4yczsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApOy1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTcpOy13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTsgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTsgY3Vyc29yOiBwb2ludGVyO31cclxuLm9yZGVyLWxpc3QuYWN0aXZle1x0Ym9yZGVyLWNvbG9yOiMwMDM4YmE7fVxyXG4ub3JkZXItbGlzdDpob3ZlciwgLm9yZGVyLWxpc3QuYWN0aXZleyBcdGJveC1zaGFkb3c6IDBweCAwcHggMjJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE4KTstbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB6LWluZGV4OiAzfVxyXG4ub3JkZXItbGlzdCBzcGFue2Rpc3BsYXk6IGJsb2NrfVxyXG4ub3JkZXItbGlzdCBzcGFuIC5mYXtjb2xvcjogI2I1YjViNX1cclxuLm9yZGVyLWxpc3Qgc3Bhbi5vci12YWx7Zm9udC1mYW1pbHk6ICdSYXRpb25hbGUnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZTogMTYuNXB4OyBsaW5lLWhlaWdodDogMTsgY29sb3I6ICMwMDM4YmEgfVxyXG4ub3JkZXItbGlzdCAub3JkLW5ve2ZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6IDE7Zm9udC1zaXplOiAzNXB4OyBmb250LXdlaWdodDogODAwOyBwYWRkaW5nLXRvcDogMDsgY29sb3I6ICNlY2VjZWM7ICBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OjgwcHg7IHRvcDogN3B4fVxyXG4uYWRkUFItaGVhZCB7IHBhZGRpbmc6IDE1cHggMTVweCAwcHggMjBweCAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kOm5vbmUhaW1wb3J0YW50IH1cclxuI29yZGVyTGlzdC1pZHtmbGV4OiAwIDAgMzAwcHg7IG1heC13aWR0aDogMzAwcHg7IHdpZHRoOiAzMDBweDt9XHJcbi52YWx1ZV9pbnB1dCB7IHBhZGRpbmc6IDJweDsgbWFyZ2luOiAwIWltcG9ydGFudDsgZm9udC1zaXplOiAxMnB4OyAgYm94LXNoYWRvdzogbm9uZTtoZWlnaHQ6IDIycHg7IHdpZHRoOiA1MnB4O31cclxuLnRvdGFsLXZhbHUtZGl2e3dpZHRoOjI4MHB4OyBtaW4taGVpZ2h0OiAxNzNweDsgZm9udC1zaXplOiAxM3B4OyBwYWRkaW5nLWxlZnQ6IDIwcHg7IHBhZGRpbmctcmlnaHQ6IDIwcHg7IG1hcmdpbi1sZWZ0OiBhdXRvOyBtYXJnaW4tcmlnaHQ6IDA7IHBhZGRpbmctdG9wOiA1cHg7IGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7IGJvcmRlcjogc29saWQgMXB4ICNlY2VjZWN9XHJcbi50b3RhbC12YWx1LWRpdiAucm93e2JvcmRlci1ib3R0b206c29saWQgMXB4ICNlOGU2ZTZ9XHJcbi50b3RhbC12YWx1LWRpdiAucm93IC5jb2wtNntwYWRkaW5nOjJweDsgbGluZS1oZWlnaHQ6IDEuNTtmb250LWZhbWlseTogcHJveGltYW5vdmEtc2VtaWJvbGQsIHNhbnMtc2VyaWYhaW1wb3J0YW50OyB9XHJcbi50b3RhbC12YWx1LWRpdiBzcGFue2ZvbnQtZmFtaWx5OiAnUmF0aW9uYWxlJywgc2Fucy1zZXJpZjsgbGluZS1oZWlnaHQ6IDEuMTsgZm9udC1zaXplOiAxOHB4OyB0ZXh0LWFsaWduOiByaWdodDsgZGlzcGxheTogYmxvY2t9XHJcbi5Qcm9MaXN0SGVpZ2h0eyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCl9XHJcbi5yaWdodEhlaWdodHsgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQ5cHgpOyBvdmVyZmxvdy15OiBhdXRvO31cclxuLmFkZHBye3BhZGRpbmc6IDRweCA4cHg7IGZvbnQtc2l6ZTogMTJweDsgdG9wOiAxMXB4OyByaWdodDogMTVweDt9XHJcbi5wcm9kdWN0U2VhcmNoIHtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4ucHJvZHVjdFNlYXJjaCBpbnB1dCB7aGVpZ2h0OiAzMnB4O2JvcmRlcjogc29saWQgMXB4ICNlYWU5ZTk7LXdlYmtpdC1ib3gtc2hhZG93OiBub25lOy1tb3otYm94LXNoYWRvdzogbm9uZTtib3gtc2hhZG93OiBub25lO3BhZGRpbmctbGVmdDogMzBweDtmb250LXNpemU6IDEzcHg7bGV0dGVyLXNwYWNpbmc6IDFweDt9XHJcbi5wcm9kdWN0U2VhcmNoIC5mYSB7cG9zaXRpb246IGFic29sdXRlO3RvcDogOHB4O2xlZnQ6IDhweDtjb2xvcjogI2I1YjViNTt9XHJcbi5BZGRQcm9kdWN0VGFibGUge3BhZGRpbmc6IDA7bWFyZ2luOiAwfVxyXG4uQWRkUHJvZHVjdFRhYmxlIHRyIHtib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VlZWVlZX1cclxuLkFkZFByb2R1Y3RUYWJsZSB0ZCB7cGFkZGluZy1ib3R0b206IDdweDtwYWRkaW5nLXRvcDogN3B4fVxyXG4uUHJvTGlzdERpdiB7cGFkZGluZzogMDtkaXNwbGF5OiB0YWJsZTt9XHJcbi5Qcm9MaXN0RGl2IC5QUl9OYW1lIHtkaXNwbGF5OiB0YWJsZS1jZWxsO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7Zm9udC1zaXplOiAxNHB4O2xldHRlci1zcGFjaW5nOiAxcHg7bGluZS1oZWlnaHQ6IDE2cHh9XHJcbi5Qcm9MaXN0RGl2IC5Qckxpc3RfaW1nIHt3aWR0aDogMzVweDtoZWlnaHQ6IDM1cHg7bWFyZ2luLXJpZ2h0OiA4cHg7Ym9yZGVyOiBzb2xpZCAxcHggI2UwZTBlMH1cclxuLkFkZFByb2R1Y3RUYWJsZSAuYnRuLWRlZmF1bHQge3BhZGRpbmc6IDVweCA4cHg7Zm9udC1zaXplOiAxM3B4Oy13ZWJraXQtYm9yZGVyLXJhZGl1czogMDstbW96LWJvcmRlci1yYWRpdXM6IDA7Ym9yZGVyLXJhZGl1czogMDsta2h0bWwtYm9yZGVyLXJhZGl1czogMDtiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxZTU0ZDMgMCUsICMwMDM4YmEgMTAwJSk7Y29sb3I6ICNmZmY7dGV4dC1hbGlnbjogY2VudGVyO21hcmdpbjogMDtsaW5lLWhlaWdodDogMTttaW4td2lkdGg6IDc0cHg7bGV0dGVyLXNwYWNpbmc6IDFweDtmbG9hdDogcmlnaHQ7Ym9yZGVyOiBub25lIWltcG9ydGFudH1cclxuLnNlX2N1cy10eXBlIC5mb3JtLWNvbnRyb2x7Ym9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO31cclxuLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciwgLm5nLW9wdGlvbiwgLm5nLXNlbGVjdCBzcGFuIHsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cclxuLm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlciB7ZGlzcGxheTogbm9uZTt9XHJcbi5kYWlseS1vcGVyYXRpb25zIC5uYXZfTSBhLCAuZGFpbHktb3BlcmF0aW9ucyAubmF2X00gLm5hdi1saW5rLmFjdGl2ZXtwYWRkaW5nLXRvcDogMTVweDt9XHJcbi5jYXNoLXJlcG9ydHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4OyBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjEwcHgpO31cclxuLmNhc2gtcmVwb3J0IC5oZWFkZXJ7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNmOGY4ZjggMCUsICNmOGY4ZjggNTAlKTsgcGFkZGluZzoxNXB4IDIwcHg7fVxyXG4uY2FzaC1yZXBvcnQgLnJlcG9ydF92YWx1ZSB7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxM3B4OyBwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmc6IDEwcHggMTBweDsgIGxldHRlci1zcGFjaW5nOiAwLjVweDsgbWFyZ2luLWJvdHRvbTogNXB4OyBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoNzksNzksNzksLjEpOyAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoNzksNzksNzksLjEpOyBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDc5LDc5LDc5LC4xKTsgbGluZS1oZWlnaHQ6IDF9XHJcbi5jYXNoLXJlcG9ydCAucmVwb3J0X3ZhbHVlIHNwYW57Zm9udC1mYW1pbHk6ICdSYXRpb25hbGUnLCBzYW5zLXNlcmlmOyBsaW5lLWhlaWdodDogMTsgZm9udC1zaXplOiAxOHB4OyBmbG9hdDogcmlnaHQ7IG1hcmdpbi10b3A6IC0ycHh9XHJcbi50b3RhbGNhc2ggc3Bhbntmb250LXNpemU6IDIwcHghaW1wb3J0YW50OyBjb2xvcjogIzAwMzhiYX1cclxuLmFkZC1vcmRyIHtmbG9hdDogbGVmdDtwb3NpdGlvbjogc3RhdGljO21hcmdpbi1sZWZ0OiAxMHB4O31cclxuLlByb2R1Y3QtRmlsdGVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYyO3BhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHggIWltcG9ydGFudDtib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYigwIDAgMCAvIDIwJSk7bWFyZ2luOiAxNXB4IDBweCAxNXB4IDBweCAhaW1wb3J0YW50O2JvcmRlci1ib3R0b206IHNvbGlkIDJweCAjMDAzOGJhO31cclxuLl9jdXN0X2ZpbHRlciB7cGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtmbG9hdDogbGVmdDt9XHJcbi5fY3VzdF9maWx0ZXIgLmZvcm0tczIgLm5nLXNlbGVjdCB7cGFkZGluZzogMCAhaW1wb3J0YW50O2hlaWdodDogMzBweCAhaW1wb3J0YW50O31cclxuLl9jdXN0X2ZpbHRlciAuZm9ybS1zMiAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIHt3aWR0aDogMTAwJTtmb250LXNpemU6IDE0cHg7Ym9yZGVyOiBub25lO2JvcmRlci1yYWRpdXM6IDA7bWluLWhlaWdodDogMzBweCAhaW1wb3J0YW50O2hlaWdodDogMzBweCAhaW1wb3J0YW50O31cclxuLmNhc2gtcmVwb3J0IC52YWx1ZV9pbnB1dHtmbG9hdDogcmlnaHQ7IHdpZHRoOiA4NXB4O31cclxuLmFkZHNhbGVzbWFuIHsgZm9udC1zaXplOiAxMXB4OyB3aWR0aDogMTAwJTsgbGluZS1oZWlnaHQ6IDE7IG1hcmdpbi10b3A6IDVweDt9XHJcbi5hZGQtZXhwZW5zZXtmb250LXNpemU6IDEzcHg7cGFkZGluZzogMnB4IDEwcHg7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAwO31cclxuLnJlZC1iZ3tib3JkZXI6IHNvbGlkIDFweCAjZjEyMzAwfVxyXG4ud3otaWNvbiAuZmEgeyBjb2xvcjogI2ZmZjt9XHJcbi5hZGRwciB7IHBhZGRpbmc6IDRweCA4cHg7IGZvbnQtc2l6ZTogMTJweDt0b3A6IDExcHg7cmlnaHQ6IDE1cHg7IGN1cnNvcjogcG9pbnRlcjt9XHJcbi5kYWlseS1vcGVyYXRpb25zIC50YWItY29udGVudHtwYWRkaW5nLWJvdHRvbTogMTBweH1cclxuLmJvdHRvbS1hY3QtYnRue3RleHQtYWxpZ246IHJpZ2h0OyBwYWRkaW5nLXRvcDogMTVweDsgcGFkZGluZy1ib3R0b206IDE1cHh9XHJcbi5ib3R0b20tYWN0LWJ0biAuYnRuIHsgbGV0dGVyLXNwYWNpbmc6IDFweDsgZm9udC1zaXplOiAxMnB4OyBwYWRkaW5nOiA0cHggMTJweDsgYm94LXNoYWRvdzogbm9uZX1cclxuLmV4ZWNGb290ZXIgeyBiYWNrZ3JvdW5kOiAjRjZGNkY2OyBwYWRkaW5nLXRvcDogMTBweDsgcGFkZGluZy1ib3R0b206IDEwcHg7IG1hcmdpbi10b3A6IDVweDt9XHJcbi5jYXNoLXJlcG9ydCAudmFsdWVfaW5wdXQgeyBmbG9hdDogcmlnaHQ7ICB3aWR0aDogOTVweDt9XHJcbi5pbnB1dC1lcnJvciB7IGNvbG9yOiByZWQ7IGZvbnQtc2l6ZTogMTNweDsgZmxvYXQ6IGxlZnQ7fVxyXG4vKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAgbWFyZ2luOiAwO31cclxuLyogRmlyZWZveCAqL2lucHV0W3R5cGU9bnVtYmVyXSB7LW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7fVxyXG4ucmVkLWJnIHtiYWNrZ3JvdW5kOiByZWQhaW1wb3J0YW50OyBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O31cclxuLm5vLWNvbnRlbnQge3dpZHRoOjEwMCU7aGVpZ2h0OjY1dmg7ZGlzcGxheTpmbGV4O31cclxuLm5vLWNvbnRlbnQgLm5vLWNvbnRlbnQtY29udGFpbmVyIHttYXJnaW46IGF1dG87ZGlzcGxheTp0YWJsZTt0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiNCN0I3Qjd9XHJcbi5uby1jb250ZW50IC5uby1jb250ZW50LWNvbnRhaW5lciBpbWcge3dpZHRoOiA3MHB4OyBoZWlnaHQ6IDcwcHg7IG1hcmdpbjogYXV0byBhdXRvIDEwcHggYXV0bzsgZGlzcGxheTogYmxvY2t9XHJcbi5wcmludC1pY29uLWRpdnt0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDE1cHg7fVxyXG4ucHJpbnQtaWNvbi1kaXYgYXtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJvcmRlcjogc29saWQgMXB4ICNlOWVjZWY7IHBhZGRpbmc6IDE1cHg7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6ICMyODI4Mjg7IGZvbnQtc2l6ZTogMTNweDt9XHJcbi5wcmludC1pY29uLWRpdiBhOkhPVkVSe2JvcmRlcjogc29saWQgMXB4ICMwMDM4YmE7IGNvbG9yOiAjMDAzOGJhOyBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTt9XHJcbi5wcmludC1pY29ue2ZpbHRlcjogZ3JheXNjYWxlKDEpOyB3aWR0aDogNDVweDsgb3BhY2l0eTogMC43OyBkaXNwbGF5OiBibG9jazsgbWFyZ2luOiBhdXRvOyBtYXJnaW4tdG9wOiAxMHB4OyBtYXJnaW4tYm90dG9tOiAxNXB4O31cclxuLnByaW50LWljb24tZGl2IGE6SE9WRVIgLnByaW50LWljb257ZmlsdGVyOm5vbmU7IG9wYWNpdHk6IDE7fVxyXG5cclxuXHJcbi5oZWFkaW5nM3ttYXJnaW46IDA7IGZvbnQtc2l6ZTogMTZweDt9XHJcbi5zZWxlY3QtZGF0ZSwgLnNlbGVjdC1kYXRlOmZvY3Vze2JveC1zaGFkb3c6IG5vbmU7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjojZjZmNmY2OyBmb250LXNpemU6IDE0cHg7IGhlaWdodDogMzBweDsgd2lkdGg6IDIwMHB4fVxyXG4ubm8tY29udGVudCB7d2lkdGg6MTAwJTtoZWlnaHQ6NjV2aDtkaXNwbGF5OmZsZXg7fVxyXG4ubm8tY29udGVudCAubm8tY29udGVudC1jb250YWluZXIge21hcmdpbjogYXV0bztkaXNwbGF5OnRhYmxlO3RleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6I0I3QjdCN31cclxuLm5vLWNvbnRlbnQgLm5vLWNvbnRlbnQtY29udGFpbmVyIGltZyB7d2lkdGg6IDcwcHg7IGhlaWdodDogNzBweDsgbWFyZ2luOiBhdXRvIGF1dG8gMTBweCBhdXRvOyBkaXNwbGF5OiBibG9ja31cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExecuteOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-execute-order',
                templateUrl: 'execute-order.component.html',
                styleUrls: ['./execute-order.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"] }, { type: _services_execution_service__WEBPACK_IMPORTED_MODULE_5__["ExecutionService"] }, { type: _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] }, { type: _shared_services__WEBPACK_IMPORTED_MODULE_7__["GeneralDataService"] }, { type: _shared_services__WEBPACK_IMPORTED_MODULE_7__["DataService"] }, { type: _services_spot_sale_service__WEBPACK_IMPORTED_MODULE_8__["SpotSaleService"] }, { type: _core_services_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "Hn+O":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/orders/components/counter-sale/counter-sale.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CounterSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterSaleComponent", function() { return CounterSaleComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/api-urls.constants */ "oo4J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_schemes_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/constants/schemes.constant */ "XSw2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services */ "NJqk");
/* harmony import */ var src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/storage.service */ "UYTb");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/orders.service */ "5TcN");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/toaster.service */ "ZgVV");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/data.service */ "8/39");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-click-outside */ "qew9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");















function CounterSaleComponent_div_37_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please add Quantity! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_div_37_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Quantity should be greater than 0! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_div_37_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Trade Offer: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_div_37_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CounterSaleComponent_div_37_div_15_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r32.selectedProduct.selectedScheme = $event; })("click", function CounterSaleComponent_div_37_div_15_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const scheme_r30 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r34.selectedProduct.pref_id && ctx_r34.selectedProduct.stockQty && ctx_r34.calculateProductDiscounts(ctx_r34.selectedProduct, scheme_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const scheme_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "byTerritory-", i_r31, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r29.selectedProduct.selectedScheme)("value", scheme_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("for", "byTerritory-", i_r31, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](scheme_r30.title);
} }
function CounterSaleComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Add Quantity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 99, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function CounterSaleComponent_div_37_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r35.setQuantity(ctx_r35.selectedProduct); })("keydown", function CounterSaleComponent_div_37_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r37.isNumber($event, "quantity"); })("ngModelChange", function CounterSaleComponent_div_37_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.selectedProduct.stockQty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CounterSaleComponent_div_37_span_7_Template, 2, 0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CounterSaleComponent_div_37_span_8_Template, 2, 0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Unit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CounterSaleComponent_div_37_div_13_Template, 2, 0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CounterSaleComponent_div_37_div_15_Template, 5, 5, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.selectedProduct.stockQty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r25.errors == null ? null : _r25.errors.required) && ctx_r0.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", +ctx_r0.selectedProduct.stockQty === 0 && ctx_r0.isAdded && !(_r25.errors == null ? null : _r25.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedProduct.unit_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.selectedProduct.schemes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.selectedProduct.schemes);
} }
function CounterSaleComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Cheque Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_div_46_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r39.paymentCancelled(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_div_47_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please select a payment method! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_div_47_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please add Cheque Number! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_div_47_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please add Payment Date! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_div_47_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please add Bank Name! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_div_47_div_36_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please add Total Amount! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_div_47_div_36_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Zero value not allowed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_div_47_div_36_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Amount should not be greater than ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r52.cash == null ? null : ctx_r52.cash.amount_received, "1.2-2"), " ");
} }
function CounterSaleComponent_div_47_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Total Amount*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 132, 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function CounterSaleComponent_div_47_div_36_Template_input_focus_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r53.focused($event); })("blur", function CounterSaleComponent_div_47_div_36_Template_input_blur_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r55.left($event); })("ngModelChange", function CounterSaleComponent_div_47_div_36_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r56.chequeAmount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CounterSaleComponent_div_47_div_36_span_6_Template, 2, 0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CounterSaleComponent_div_47_div_36_span_7_Template, 2, 0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CounterSaleComponent_div_47_div_36_span_8_Template, 3, 4, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx_r48.cash == null ? null : ctx_r48.cash.amount_received)("ngModel", ctx_r48.chequeAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r49.errors == null ? null : _r49.errors.required) && ctx_r48.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", +ctx_r48.chequeAmount === 0 && ctx_r48.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(_r49.errors == null ? null : _r49.errors.required) && ctx_r48.chequeAmount > (ctx_r48.cash == null ? null : ctx_r48.cash.amount_received) && ctx_r48.isAdded);
} }
function CounterSaleComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CounterSaleComponent_div_47_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r57.paymentTypeCheque = $event; })("click", function CounterSaleComponent_div_47_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r59.chequeAmount = null; return ctx_r59.currentFullPayment("Cheque Payment", "Credit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Full Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_div_47_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r60.setPartial("Cheque Payment"); })("ngModelChange", function CounterSaleComponent_div_47_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r61.paymentTypeCheque = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Partial Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CounterSaleComponent_div_47_div_13_Template, 2, 0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Cheque Number*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 122, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function CounterSaleComponent_div_47_Template_input_focus_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r62.focused($event); })("blur", function CounterSaleComponent_div_47_Template_input_blur_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r63.left($event); })("ngModelChange", function CounterSaleComponent_div_47_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r64.chequeNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CounterSaleComponent_div_47_span_21_Template, 2, 0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Date*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 125, 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function CounterSaleComponent_div_47_Template_input_focus_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r65.focused($event); })("blur", function CounterSaleComponent_div_47_Template_input_blur_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r66.left($event); })("ngModelChange", function CounterSaleComponent_div_47_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r67.paymentDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CounterSaleComponent_div_47_span_28_Template, 2, 0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Bank Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 128, 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function CounterSaleComponent_div_47_Template_input_focus_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r68.focused($event); })("blur", function CounterSaleComponent_div_47_Template_input_blur_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r69.left($event); })("ngModelChange", function CounterSaleComponent_div_47_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r70.bankName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, CounterSaleComponent_div_47_span_35_Template, 2, 0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, CounterSaleComponent_div_47_div_36_Template, 9, 5, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](34);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.paymentTypeCheque);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.paymentTypeCheque);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.paymentTypeCheque === "" && ctx_r2.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.chequeNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r42.errors == null ? null : _r42.errors.required) && ctx_r2.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.paymentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.paymentDate === "  " && ctx_r2.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.bankName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r46.errors == null ? null : _r46.errors.required) && ctx_r2.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.paymentTypeCheque !== "full");
} }
function CounterSaleComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Credit Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_div_49_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please select a payment method! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_div_49_div_14_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please add Total Amount! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_div_49_div_14_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Zero value not allowed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_div_49_div_14_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Amount should not be greater than ", ctx_r76.cash == null ? null : ctx_r76.cash.amount_received, " ");
} }
function CounterSaleComponent_div_49_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Amount*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 141, 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function CounterSaleComponent_div_49_div_14_Template_input_focus_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r77.focused($event); })("blur", function CounterSaleComponent_div_49_div_14_Template_input_blur_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r78); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r79.left($event); })("ngModelChange", function CounterSaleComponent_div_49_div_14_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r78); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r80.creditAmount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CounterSaleComponent_div_49_div_14_span_6_Template, 2, 0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CounterSaleComponent_div_49_div_14_span_7_Template, 2, 0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CounterSaleComponent_div_49_div_14_span_8_Template, 2, 1, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx_r72.cash == null ? null : ctx_r72.cash.amount_received)("ngModel", ctx_r72.creditAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r73.errors == null ? null : _r73.errors.required) && ctx_r72.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", +ctx_r72.creditAmount === 0 && ctx_r72.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(_r73.errors == null ? null : _r73.errors.required) && +ctx_r72.creditAmount > (ctx_r72.cash == null ? null : ctx_r72.cash.amount_received) && ctx_r72.isAdded);
} }
function CounterSaleComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CounterSaleComponent_div_49_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r81.paymentTypeCredit = $event; })("click", function CounterSaleComponent_div_49_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r82); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r83.creditAmount = null; return ctx_r83.currentFullPayment("Credit", "Cheque payment"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Full Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CounterSaleComponent_div_49_span_8_Template, 2, 0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_div_49_Template_input_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r82); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r84.setPartial("Credit"); })("ngModelChange", function CounterSaleComponent_div_49_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r82); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r85.paymentTypeCredit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Partial Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CounterSaleComponent_div_49_div_14_Template, 9, 5, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.paymentTypeCredit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.paymentTypeCredit === "" && ctx_r4.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.paymentTypeCredit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.paymentTypeCredit !== "full");
} }
function CounterSaleComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "You have to choose \"Partial Amount\" to use both Credit and Cheque Payment!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_table_76_tr_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_table_76_tr_2_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_table_76_tr_2_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r94); const product_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r92.openQuantityModal(product_r87); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_table_76_tr_2_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_table_76_tr_2_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r97); const product_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r95.removeProductFromOrder(product_r87); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_table_76_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CounterSaleComponent_table_76_tr_2_div_3_Template, 2, 0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CounterSaleComponent_table_76_tr_2_button_8_Template, 2, 0, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CounterSaleComponent_table_76_tr_2_button_9_Template, 2, 0, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r87.schemes == null ? null : product_r87.schemes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", product_r87.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r87.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !product_r87.isAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r87.isAdded);
} }
function CounterSaleComponent_table_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CounterSaleComponent_table_76_tr_2_Template, 10, 5, "tr", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.dispProducts);
} }
function CounterSaleComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading Products...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_ng_option_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderBooker_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", orderBooker_r98.employee_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](orderBooker_r98.employee_first_name + " " + orderBooker_r98.employee_last_name);
} }
function CounterSaleComponent_ng_option_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select Employee First");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_ng_option_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select Route");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_ng_option_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const route_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", route_r99.route_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", route_r99.name, " ");
} }
function CounterSaleComponent_ng_option_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select Route First");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_ng_option_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select Retailer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_ng_option_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const retailer_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", retailer_r100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", retailer_r100.retailer_name, "");
} }
function CounterSaleComponent_div_156_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "a", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function CounterSaleComponent_div_156_Template_input_keyup_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r104); const product_r101 = ctx.$implicit; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r103.setQuantity(product_r101); })("keydown", function CounterSaleComponent_div_156_Template_input_keydown_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r104); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r105.isNumber($event, "quantity"); })("ngModelChange", function CounterSaleComponent_div_156_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r104); const product_r101 = ctx.$implicit; return product_r101.stockQty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CounterSaleComponent_div_156_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r104); const product_r101 = ctx.$implicit; return product_r101.extra_discount = $event; })("keyup", function CounterSaleComponent_div_156_Template_input_keyup_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r104); const product_r101 = ctx.$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r108.calculateExtraDiscount(product_r101); })("keydown", function CounterSaleComponent_div_156_Template_input_keydown_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r104); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r109.isNumber($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_div_156_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r104); const product_r101 = ctx.$implicit; const ind_r102 = ctx.index; const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r110.removeProductFromOrder(product_r101, ind_r102); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r101 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r101.item_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r101.unit_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r15.isChequeAdded || ctx_r15.isCreditAdded)("ngModel", product_r101.stockQty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r101.item_trade_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 14, +product_r101.stockQty * product_r101.scheme_discount || 0, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", product_r101.trade_discount || 0, "% (", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 17, +product_r101.stockQty * product_r101.trade_discount_pkr, "1.2-2"), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](21, 20, +product_r101.stockQty * product_r101.special_discount || 0, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", ctx_r15.isCreditAdded || ctx_r15.isChequeAdded || +product_r101.stockQty < 1)("ngModel", product_r101.extra_discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](26, 23, product_r101.tax_amount_pkr || 0, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](29, 26, product_r101.net_amount || 0, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r15.isChequeAdded || ctx_r15.isCreditAdded);
} }
function CounterSaleComponent_div_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h6", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add products to counter sale...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_button_297_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/home"]; };
function CounterSaleComponent_button_298_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function CounterSaleComponent_button_299_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_button_299_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r112); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r111.setOrderFields(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Save Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_button_300_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_button_300_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r113.isCredit = false; return ctx_r113.isFullyPaymentAdded("Cheque Payment"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_button_301_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_button_301_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r116); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r115.removeCheque(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Remove Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_button_302_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_button_302_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r118); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r117.isCredit = true; return ctx_r117.isFullyPaymentAdded("Credit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_button_303_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_button_303_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r120); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r119.removeCredit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Remove Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CounterSaleComponent_button_304_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Show Modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CounterSaleComponent {
    constructor(router, generalDataService, storageService, ordersService, toastService, dataService) {
        this.router = router;
        this.generalDataService = generalDataService;
        this.storageService = storageService;
        this.ordersService = ordersService;
        this.toastService = toastService;
        this.dataService = dataService;
        this.selectedProduct = {};
        this.schemeItemIds = [];
        this.allProducts = [];
        this.dispProducts = [];
        this.specialDiscounts = [];
        this.prefrences = [];
        this.orderBookers = [];
        this.routes = [];
        this.retailers = [];
        this.selectedProducts = [];
        this.selectedProductsIds = [];
        this.schemes = [];
        this.subInventory = [];
        this.discountSlabs = [];
    }
    ngOnInit() {
        this.grossAmount = 0.00;
        this.tradeOffer = 0.00;
        this.tradeDiscount = 0.00;
        this.specialDiscount = 0.00;
        this.extraDiscount = 0.00;
        this.tax = 0.00;
        this.dueAmount = 0.00;
        this.totalAmountAfterScheme = 0.00;
        this.notes = '';
        this.paymentDate = new Date().toISOString().split('T')[0];
        this.paymentTypeCheque = '';
        this.paymentTypeCredit = '';
        this.addedPayment = '';
        this.currentPayment = '';
        this.getSchemesData();
        this.getOrderBookers();
        this.getCounterSaleData();
    }
    getOrderBookers() {
        this.distributorId = this.storageService.getItem('distributor').id;
        this.generalDataService.getOrderBookers(this.distributorId).subscribe(res => {
            if (res.status === 200) {
                this.orderBookers = res.data;
            }
            else {
                const toast = { type: 'error', message: res.message, title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                const toast = { type: 'error', message: 'Cannot fetch order bookers. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }
    getCounterSaleData() {
        this.loadingProducts = true;
        this.ordersService.getCounterSaleData().subscribe((res) => {
            this.loadingProducts = false;
            if (res.status === 200) {
                this.allProducts = res.data.inventory.map(pr => {
                    pr.net_amount = 0.00;
                    pr.isAdded = false;
                    return pr;
                });
                this.specialDiscounts = res.data.special_discount;
                // this.prefrences = res.data.prefs;
                this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
                this.subInventory = res.data.sub_inventory;
            }
            else {
                const toast = { type: 'error', message: res.message, title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        }, error => {
            this.loadingProducts = false;
            if (error.status !== 1 && error.status !== 401) {
                const toast = { type: 'error', message: 'Cannot fetch counter sale data. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }
    resetValues() {
        this.selectedProducts = [];
        this.selectedProductsIds = [];
        this.grossAmount = 0.00;
        this.tradeOffer = 0.00;
        this.tradeDiscount = 0.00;
        this.specialDiscount = 0.00;
        this.extraDiscount = 0.00;
        this.credit = null;
        this.cheque = null;
        this.cash = null;
        this.tax = 0.00;
        this.dueAmount = 0.00;
        this.notes = '';
        this.paymentDate = new Date().toISOString().split('T')[0];
        this.paymentTypeCheque = '';
        this.paymentTypeCredit = '';
        this.addedPayment = '';
        this.allProducts = this.allProducts.map(pr => { pr.isAdded = false; return pr; });
        this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
    }
    getSchemesData() {
        this.ordersService.getSchemes().subscribe(res => {
            if (res.status === 200) {
                this.schemes = res.data;
            }
            else {
                const toast = { type: 'error', message: res.message, title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                const toast = { type: 'error', message: 'Cannot fetch Trade Offers. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }
    getDiscountSlabs() {
        this.selectedSegment = this.selectedRetailer.segment_id;
        this.resetValues();
        this.ordersService.getDiscountSlabs().subscribe(res => {
            if (res.status === 200) {
                this.discountSlabs = res.data;
                this.merchantDiscount = this.discountSlabs.find(x => x.region_id === this.selectedRegion &&
                    this.selectedSegment === x.segment_id && x.channel_id === this.selectedRetailer.type_id);
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                const toast = { type: 'error', message: 'Cannot fetch Trade Discount. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }
    focused(event) {
        event.target.parentElement.classList.add('focused');
    }
    left(event) {
        if (!event.target.value) {
            event.target.parentElement.classList.remove('focused');
        }
    }
    isFullyPaymentAdded(current) {
        if (current === 'Credit') {
            this.paymentTypeCredit = '';
        }
        else {
            this.paymentTypeCheque = '';
        }
        if (this.selectedProducts.length === 0 && this.dueAmount === 0.00) {
            const toast = {
                type: 'error',
                message: `Please select products first!`,
                title: `Payment cannot be added`
            };
            this.toastService.showToaster(toast);
        }
        else {
            if ((this.paymentTypeCheque === 'full' || this.paymentTypeCredit === 'full') && this.addedPayment !== current) {
                const toast = {
                    type: 'error',
                    message: `You already selected Full payment for ${this.addedPayment} please remove it if you want to add ${this.currentPayment}!`,
                    title: `Full Payment selected for ${this.addedPayment}`
                };
                this.toastService.showToaster(toast);
            }
            else {
                document.getElementById('open-modal-payment').click();
                this.focusForPaymentValues();
            }
        }
    }
    focusForPaymentValues() {
        if (this.isCredit && this.creditAmount) {
            document.getElementById('Amount2').parentElement.classList.add('focused');
        }
        else {
            if (this.chequeAmount) {
                document.getElementById('Amount1').parentElement.classList.add('focused');
            }
            if (this.bankName) {
                document.getElementById('chequeBankName').parentElement.classList.add('focused');
            }
            if (this.chequeNumber) {
                document.getElementById('chequeNum').parentElement.classList.add('focused');
            }
        }
    }
    currentFullPayment(current, other) {
        if ((this.paymentTypeCheque === 'full' || this.paymentTypeCredit === 'full') && this.addedPayment !== current) {
            const toast = {
                type: 'error',
                message: `You already selected Full payment for ${this.addedPayment} please remove it if you want to add ${this.currentPayment}!`,
                title: `Full Payment selected for ${this.addedPayment}`
            };
            this.toastService.showToaster(toast);
        }
        else {
            this.addedPayment = current;
            this.currentPayment = other;
        }
    }
    setPartial(current) {
        if (current === this.addedPayment) {
            if (this.credit && current === 'Credit') {
                this.cash.amount_received = this.cash.amount_received + this.credit.amount_received;
                this.credit.amount_received = 0;
            }
            if (this.cheque && current === 'Cheque Payment') {
                this.cash.amount_received = this.cash.amount_received + this.cheque.amount_received;
                this.cheque.amount_received = 0;
            }
            this.addedPayment = '';
            this.currentPayment = '';
            this.alreadyFullPayment = false;
        }
    }
    checkPaymentHasValues() {
        if (this.isCredit) {
            if (this.paymentTypeCredit === 'full') {
                return this.paymentTypeCredit.length > 0;
            }
            else {
                return this.paymentTypeCredit.length > 0 && this.creditAmount &&
                    this.creditAmount > -1 && this.creditAmount <= this.cash.amount_received;
            }
        }
        else {
            if (this.paymentTypeCheque === 'full') {
                return this.paymentTypeCheque.length > 0 && this.bankName.length > 0 &&
                    this.chequeNumber.length > 0 && this.paymentDate.length > 0;
            }
            else {
                return this.paymentTypeCheque.length > 0 && this.chequeAmount &&
                    this.chequeAmount > -1 && this.chequeAmount <= this.cash.amount_received &&
                    this.bankName.length > 0 && this.chequeNumber.length > 0 && this.paymentDate.length > 0;
            }
        }
    }
    removeCheque() {
        this.cheque = null;
        this.isChequeAdded = false;
        this.paymentTypeCheque = '';
        this.calculatePayments();
    }
    removeCredit() {
        this.credit = null;
        this.isCreditAdded = false;
        this.paymentTypeCredit = '';
        this.calculatePayments();
    }
    makePayment() {
        if (this.isCredit) {
            this.credit = {
                retailer_id: this.selectedRetailer.retailer_id,
                distributor_id: this.distributorId,
                type: 'Counter',
                payment_mode: 'Credit',
                payment_detail: '',
                dispatched_bill_amount: 0,
                recovery: 0,
                amount_received: this.paymentTypeCredit === 'full' ? JSON.parse(JSON.stringify(this.dueAmount)) :
                    JSON.parse(JSON.stringify(this.creditAmount))
            };
            this.isCreditAdded = true;
        }
        if (!this.isCredit) {
            this.cheque = {
                retailer_id: this.selectedRetailer.retailer_id,
                distributor_id: this.distributorId,
                type: 'Counter',
                payment_mode: 'Cheque',
                payment_detail: {
                    cheque_amount: this.paymentTypeCheque === 'full' ? JSON.parse(JSON.stringify(this.dueAmount)) :
                        JSON.parse(JSON.stringify(this.chequeAmount)),
                    bank_name: JSON.parse(JSON.stringify(this.bankName)),
                    cheque_number: JSON.parse(JSON.stringify(this.chequeNumber)),
                    cheque_date: JSON.parse(JSON.stringify(this.paymentDate))
                },
                dispatched_bill_amount: 0,
                recovery: 0,
                amount_received: this.paymentTypeCheque === 'full' ? JSON.parse(JSON.stringify(this.dueAmount)) :
                    JSON.parse(JSON.stringify(this.chequeAmount))
            };
            this.isChequeAdded = true;
        }
        this.calculatePayments();
    }
    addPaymentMethod() {
        this.isAdded = true;
        const isPaymentAdded = this.checkPaymentHasValues();
        if (isPaymentAdded) {
            this.isAdded = false;
            this.makePayment();
            document.getElementById('open-modal-payment').click();
        }
    }
    paymentCancelled() {
        this.isAdded = false;
        this.resetPaymentValues();
        this.paymentTypeCredit = '';
        this.paymentTypeCheque = '';
    }
    resetPaymentValues() {
        this.chequeAmount = null;
        this.paymentDate = new Date().toISOString().split('T')[0];
        this.bankName = '';
        this.chequeNumber = null;
        this.creditAmount = null;
    }
    getRoutes() {
        const employee = this.orderBookers.find(x => x.employee_id === this.selectedEmployee);
        this.selectedRegion = employee.region_id;
        this.selectedRoute = null;
        this.selectedRetailer = null;
        this.resetValues();
        this.generalDataService.getOrderBookerRoutes(this.selectedEmployee).subscribe(res => {
            if (res.status === 200) {
                this.routes = res.data;
            }
            else {
                const toast = { type: 'error', message: res.message, title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                const toast = { type: 'error', message: 'Cannot fetch order booker routes. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }
    getRetailerByRoute() {
        this.selectedRetailer = null;
        this.resetValues();
        this.generalDataService.getRetailersByRoute(this.selectedRoute).subscribe(res => {
            if (res.status === 200) {
                this.retailers = res.data;
            }
            else {
                const toast = { type: 'error', message: res.message, title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                const toast = { type: 'error', message: 'Cannot fetch retailers. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }
    openQuantityModal(product) {
        var _a;
        this.showQuantityModal = true;
        if ((_a = product.schemes) === null || _a === void 0 ? void 0 : _a.length) {
            product.schemes = product.schemes.map(scheme => {
                switch (scheme.scheme_type) {
                    case 'free_product':
                        scheme.name = src_app_core_constants_schemes_constant__WEBPACK_IMPORTED_MODULE_3__["schemes"].free_products;
                        scheme.rule_name = src_app_core_constants_schemes_constant__WEBPACK_IMPORTED_MODULE_3__["freeProductsRules"][scheme.scheme_rule];
                        break;
                    case 'dotp':
                        scheme.name = src_app_core_constants_schemes_constant__WEBPACK_IMPORTED_MODULE_3__["schemes"].dotp;
                        break;
                    default:
                        scheme.name = src_app_core_constants_schemes_constant__WEBPACK_IMPORTED_MODULE_3__["schemes"].gift;
                        break;
                }
                return scheme;
            });
        }
        this.selectedProduct = JSON.parse(JSON.stringify(product));
        this.selectedProduct.selectedScheme = null;
        // this.selectedProduct.units = this.prefrences.filter(x => x.item_id === product.item_id);
    }
    showProductsList(event) {
        event.stopPropagation();
        if (this.selectedRetailer) {
            this.allProducts = this.allProducts.map(product => {
                product.schemes = this.dataService.getSchemes(product.item_id, product.unit_id, product.pref_id, this.schemes, this.selectedRetailer.type_id, this.selectedRetailer.id);
                return product;
            });
            this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
            this.showProducts = true;
            document.body.classList.add('no-scroll');
            document.getElementsByClassName('overlay-blure')[0].classList.add('d-block');
            document.getElementById('counter-sale').classList.add('blur-div');
        }
        else {
            this.toastService.showToaster({
                type: 'error',
                message: 'Please select Retailer first!',
                title: 'Fill required fields:'
            });
        }
    }
    // setPrefrence(prefId: number, product: any): void {
    //     this.alreadyAdded = false;
    //     const prefrence = this.prefrences.find(x => x.pref_id === +prefId);
    //     product.unit_id = prefrence.unit_id;
    //     product.item_trade_price = prefrence.item_trade_price;
    //     product.unit_name = prefrence.unit_name;
    //     product.retail_price = prefrence.item_retail_price;
    //     if (product.stockQty) {
    //         if (this.selectedProducts.find(x => x.item_id === product.item_id && x.pref_id === product.pref_id)) {
    //             this.grossAmount = this.grossAmount - product.original_amount;
    //         }
    //         this.calculateProductDiscounts(product);
    //         this.calculateProductPrice(product);
    //         this.calculateTotalBill();
    //         this.applySlabOnAllProducts();
    //     }
    // }
    isNumber(event, type = 'charges') {
        return this.dataService.isNumber(event, type);
    }
    setQuantity(product) {
        if (+product.stockQty > 1000) {
            product.stockQty = 0;
        }
        if (product.item_trade_price) {
            if (this.selectedProducts.find(x => x.item_id === product.item_id)) {
                this.grossAmount = this.grossAmount - product.original_amount || 0;
            }
            product.parent_qty_sold = this.dataService.getParentQty(+product.stockQty, product.quantity);
            this.calculateProductPrice(product);
            this.calculateProductDiscounts(product);
            this.calculateTotalBill();
            this.applySlabOnAllProducts();
        }
    }
    calculateProductPrice(product) {
        product.original_amount = this.dataService.calculateUnitPrice(+product.stockQty, product.item_trade_price);
        product.gross_amount = product.unit_price_after_scheme_discount || product.item_trade_price * +product.stockQty;
    }
    applySlabOnAllProducts() {
        if (this.merchantDiscount && this.merchantDiscount.discount_filter === 'slab' && this.grossAmount) {
            this.selectedProducts = this.selectedProducts.map(product => {
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
    addProductToOrder() {
        if (this.selectedProduct.selectedScheme && !this.selectedProduct.selectedScheme.applied) {
            this.dataService.schemeCannotApplied();
            return;
        }
        this.isAdded = true;
        if (+this.selectedProduct.stockQty > 0 && this.selectedProduct.pref_id) {
            const pr = this.selectedProducts.find(x => x.item_id === this.selectedProduct.item_id &&
                x.pref_id === this.selectedProduct.pref_id);
            if (pr) {
                this.alreadyAdded = true;
            }
            else {
                this.alreadyAdded = false;
                this.showQuantityModal = false;
                this.allProducts = this.allProducts.map(prod => {
                    if (prod.item_id === this.selectedProduct.item_id) {
                        prod.isAdded = true;
                    }
                    return prod;
                });
                this.dispProducts = this.dispProducts.map(prod => {
                    if (prod.item_id === this.selectedProduct.item_id) {
                        prod.isAdded = true;
                    }
                    return prod;
                });
                this.selectedProduct.isAdded = true;
                this.selectedProducts.push(this.selectedProduct);
                if (!this.selectedProductsIds.includes(this.selectedProduct.item_id)) {
                    this.selectedProductsIds.push(this.selectedProduct.item_id);
                }
                this.calculateTotalBill();
                this.applySlabOnAllProducts();
                document.getElementById('pl-qty-close').click();
                this.isAdded = false;
            }
        }
    }
    removeProductFromOrder(product) {
        if (this.isCreditAdded || this.isChequeAdded) {
            this.toastService.showToaster({
                title: 'Payment Error:',
                message: 'Cannot edit or remove current products if payment method added!',
                type: 'error'
            });
            return;
        }
        this.selectedProducts = this.selectedProducts.filter(x => {
            if (x.item_id === product.item_id && x.unit_name !== product.unit_name) {
                return x;
            }
            else if (x.item_id !== product.item_id) {
                return x;
            }
        });
        this.allProducts = this.allProducts.map(prod => {
            if (prod.item_id === product.item_id) {
                prod.isAdded = false;
            }
            return prod;
        });
        this.dispProducts = this.dispProducts.map(prod => {
            if (prod.item_id === product.item_id) {
                prod.isAdded = false;
            }
            return prod;
        });
        // if (!this.selectedProducts.find(x => x.item_id !== product.item_id)) {
        this.selectedProductsIds = this.selectedProductsIds.filter(x => x !== product.item_id);
        // }
        this.calculateTotalBill();
        this.applySlabOnAllProducts();
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
        product.extra_discount = 0;
        product.extra_discount_pkr = 0;
        this.calculateNetAmountOfProduct(product);
    }
    calculateProductSpecialDiscount(product) {
        return this.dataService.getSpecialDiscounts(this.selectedSegment, this.selectedRegion, product, this.specialDiscounts);
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
        this.calculateTotalBill();
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
    calculateNetAmountOfProduct(product) {
        product.net_amount = this.dataService.calculateUnitPrice(product.price, +product.stockQty);
        this.calculateProductTax(product);
    }
    calculateTotalBill() {
        if (this.selectedProducts.length) {
            this.selectedProductQuantities = this.selectedProducts.map(product => +product.parent_qty_sold).reduce((a, b) => a + b);
        }
        // Gross Amount
        let prices = this.selectedProducts.map(product => product.original_amount);
        this.grossAmount = this.dataService.calculateItemsBill(prices);
        // Retail Price
        prices = this.selectedProducts.map(product => product.stockQty * product.item_retail_price);
        this.totalRetailPrice = this.dataService.calculateItemsBill(prices);
        // Gross Amount
        prices = this.selectedProducts.map(product => product.gross_amount);
        this.totalAmountAfterScheme = this.dataService.calculateItemsBill(prices);
        // Net Amount
        prices = this.selectedProducts.map(product => product.net_amount);
        this.dueAmount = this.dataService.calculateItemsBill(prices);
        // Order Original
        prices = this.selectedProducts.map(product => product.original_amount);
        this.orderTotal = JSON.parse(JSON.stringify(this.dueAmount));
        // Scheme Discount
        let discount = this.selectedProducts.map(product => +product.stockQty * product.scheme_discount);
        this.tradeOffer = this.dataService.calculateItemsBill(discount);
        // Trade Discount
        discount = this.selectedProducts.map(product => +product.stockQty * product.trade_discount_pkr);
        this.tradeDiscount = this.dataService.calculateItemsBill(discount);
        // Special Discount
        discount = this.selectedProducts.map(product => +product.stockQty * product.special_discount_pkr);
        this.specialDiscount = this.dataService.calculateItemsBill(discount);
        // Extra Discount
        discount = this.selectedProducts.map(product => +product.extra_discount_pkr);
        this.extraDiscount = this.dataService.calculateItemsBill(discount);
        // Tax
        const taxes = this.selectedProducts.map(product => product.tax_amount_pkr);
        this.tax = this.dataService.calculateItemsBill(taxes);
        this.calculatePayments();
    }
    calculatePayments() {
        this.cash = {
            retailer_id: this.selectedRetailer.retailer_id,
            distributor_id: this.distributorId,
            type: 'Counter',
            payment_mode: 'Cash',
            payment_detail: '',
            dispatched_bill_amount: 0,
            recovery: 0,
            amount_received: this.dueAmount
        };
        if (this.cheque) {
            this.cash.amount_received = this.cash.amount_received - this.cheque.amount_received;
        }
        if (this.credit) {
            this.cash.amount_received = this.cash.amount_received - this.credit.amount_received;
        }
        this.cash.amount_received = +this.cash.amount_received.toFixed(2);
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
            this.dispProducts = this.allProducts.filter(prod => prod.item_name.toLowerCase().includes(this.productSearchText.toLowerCase()));
        }
    }
    isAlreadyAdded(itemId) {
        return this.selectedProductsIds.includes(itemId);
    }
    clickedOutSide(event) {
        if (this.showProducts && !this.showQuantityModal && !event.target.classList.contains('dont-close-products')) {
            this.closeProductsList();
        }
    }
    closeProductsList() {
        this.showProducts = false;
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('counter-sale').classList.remove('blur-div');
    }
    isDataValid() {
        if (!this.selectedProductsIds.length || !this.selectedEmployee && !this.selectedRoute || !this.selectedRetailer) {
            return false;
        }
        else {
            return true;
        }
    }
    setOrderFields() {
        if (!this.isDataValid()) {
            const toast = {
                type: 'error',
                message: 'Please select Employee, Route, Retailer and Products to place the order!',
                title: 'Error:'
            };
            this.toastService.showToaster(toast);
        }
        else {
            const employee = this.orderBookers.find(x => x.employee_id === this.selectedEmployee);
            const newOrder = {
                area_id: employee.area_id,
                assigned_route_id: this.selectedRoute,
                booking_territory: employee.territory_id,
                order_type: 'counter',
                counter_sale: 1,
                spot_sale: 0,
                sales_man_id: 0,
                within_radius: 0,
                booking_region: this.selectedRegion,
                invoice_number: '',
                invoice_date: new Date().toISOString(),
                remarks: this.notes,
                retailer_id: this.selectedRetailer.retailer_id,
                distributor_id: this.distributorId,
                gross_sale_amount: this.grossAmount,
                total_amount_after_tax: this.dueAmount,
                total_discount: this.specialDiscount + this.tradeDiscount + this.tradeOffer + this.extraDiscount,
                total_tax_amount: this.tax,
                booked_order_value: 0,
                booked_total_qty: 0,
                booked_total_skus: 0,
                booking_area: employee.area_id,
                booking_locality_id: this.selectedRetailer.locality_id,
                booking_neighbourhood_id: this.selectedRetailer.neighbourhood_id,
                booking_zone: employee.area_id,
                employee_id: employee.employee_id,
                freight_charges: 0,
                order_total: this.orderTotal,
                region_id: this.selectedRegion,
                status: 'Completed',
                status_code: 0,
                territory_id: employee.territory_id,
                total_retail_price: this.totalRetailPrice,
                ttl_products_sold: this.selectedProductsIds.length,
                ttl_qty_sold: this.selectedProductQuantities,
                payment: {
                    total_payment: this.dueAmount,
                    detail: []
                },
                items: []
            };
            this.order = newOrder;
            if (this.cheque) {
                this.order.payment.detail.push(this.cheque);
            }
            if (this.credit) {
                this.order.payment.detail.push(this.credit);
            }
            this.order.payment.detail.push(this.cash);
            this.setOrderItems(employee);
        }
    }
    setOrderItems(selectedEmployee) {
        this.selectedProducts.forEach((product, index) => {
            var _a, _b, _c, _d, _e;
            const productTotalDiscount = (+product.stockQty * product.scheme_discount) +
                (+product.stockQty * product.trade_discount_pkr) + (+product.stockQty * product.special_discount) +
                product.extra_discount_pkr;
            const item = {
                item_id: product.item_id,
                pref_id: product.pref_id,
                unit_id: product.unit_id,
                item_name: product.item_name,
                unit_name: product.unit_name,
                item_quantity_booker: 0,
                quantity_returned: 0,
                area_id: selectedEmployee.area_id,
                division_id: selectedEmployee.division_id,
                assigned_route_id: this.selectedRoute,
                booked_total_qty: 0,
                quantity: +product.stockQty,
                gross_sale_amount: product.original_amount,
                booked_order_value: 0,
                brand_id: product.brand_id,
                campaign_id: ((_a = product.selectedScheme) === null || _a === void 0 ? void 0 : _a.id) || 0,
                dispatch_status: 0,
                distributor_id: this.distributorId,
                final_price: product.net_amount,
                gift_value: product.gift_value || 0,
                item_quantity_updated: 0,
                item_status: product.is_active,
                order_id: 0,
                original_price: product.item_trade_price,
                scheme_id: ((_b = product.selectedScheme) === null || _b === void 0 ? void 0 : _b.id) || 0,
                scheme_discount: product.scheme_discount,
                unit_price_after_scheme_discount: product.unit_price_after_scheme_discount,
                merchant_discount_pkr: product.trade_discount_pkr,
                merchant_discount: product.trade_discount,
                unit_price_after_merchant_discount: product.unit_price_after_merchant_discount,
                special_discount: product.special_discount,
                unit_price_after_special_discount: product.unit_price_after_special_discount,
                booker_discount: product.extra_discount,
                unit_price_after_individual_discount: product.unit_price_after_individual_discount || product.price,
                scheme_min_quantity: ((_c = product.selectedScheme) === null || _c === void 0 ? void 0 : _c.min_qty) || 0,
                scheme_quantity_free: ((_d = product.selectedScheme) === null || _d === void 0 ? void 0 : _d.quantity_free) || 0,
                scheme_rule: ((_e = product.selectedScheme) === null || _e === void 0 ? void 0 : _e.rule_name) || '',
                parent_pref_id: product.child,
                parent_unit_id: product.parent_unit_id,
                parent_brand_id: product.brand_id,
                parent_tp: product.parent_trade_price,
                reasoning: '',
                region_id: this.selectedRegion,
                territory_id: selectedEmployee.territory_id,
                parent_qty_sold: product.parent_qty_sold,
                parent_value_sold: product.net_amount,
                tax_class_id: product.tax_class_id,
                tax_in_percentage: product.tax_class_amount,
                tax_in_value: product.tax_amount_value,
                total_amount_after_tax: product.net_amount,
                total_discount: productTotalDiscount,
                total_retail_price: product.stockQty * product.item_retail_price,
                total_tax_amount: product.tax_amount_pkr || 0,
            };
            this.order.items.push(item);
            if (index === this.selectedProducts.length - 1) {
                this.placeOrder();
            }
        });
    }
    openBillsModal() {
        document.getElementById("billsPrintPaperModalTrigger").click();
    }
    getBills(size = 'A4') {
        document.getElementById('close-bills').click();
        const billsUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiDomain}${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].BILLS}?type=bill&order_booker=${this.order.employee_id}&date=${this.order.invoice_date.substring(0, 10)}&size=${size}&orderID=${this.order['id']}`;
        window.open(billsUrl, "_blank");
    }
    placeOrder() {
        this.isOrdering = true;
        this.ordersService.counterSaleOrder(this.order).subscribe(res => {
            this.isOrdering = false;
            if (res.status === 200) {
                this.order['id'] = res.data.id;
                this.openBillsModal();
                const toast = {
                    type: 'success',
                    message: 'Order Placed successfully!',
                    title: 'Order Placed:'
                };
                this.toastService.showToaster(toast);
                this.selectedEmployee = null;
                this.selectedRoute = null;
                this.selectedRetailer = null;
                this.credit = null;
                this.cheque = null;
                this.cash = null;
                this.retailers = [];
                this.routes = [];
                this.isChequeAdded = false;
                this.isCreditAdded = false;
                this.resetValues();
                this.paymentCancelled();
            }
        }, error => {
            this.isOrdering = false;
            if (error.status !== 1 && error.status !== 401) {
                const toast = {
                    type: 'error',
                    message: 'Order cannot be placed at the moment! Please try again',
                    title: 'Error:'
                };
                this.toastService.showToaster(toast);
            }
        });
    }
}
CounterSaleComponent.ɵfac = function CounterSaleComponent_Factory(t) { return new (t || CounterSaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_5__["GeneralDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_7__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"])); };
CounterSaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CounterSaleComponent, selectors: [["app-counter-sale"]], decls: 305, vars: 80, consts: [["id", "billsModalCounterSale", "tabindex", "-1", "role", "dialog", "aria-labelledby", "billsModalCounterSaleLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "top_border"], [1, "modal-header"], ["id", "billsModalCounterSaleLabel", 1, "modal-title"], ["type", "button", "id", "close-bills", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-12"], [1, "heading3"], [1, "row", "print-icon-div", "pb-0"], [1, "col-6", "pl-0"], [3, "click"], ["src", "assets/images/a4.svg", "alt", "", 1, "print-icon"], [1, "col-6", "pr-0"], ["src", "assets/images/a5.svg", "alt", "", 1, "print-icon"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "dont-close-products", 3, "click"], ["aria-hidden", "true", 1, "dont-close-products"], ["class", "modal-body AddDetailPR", 4, "ngIf"], [1, "modal-footer", "border-0", 2, "background-color", "#f6f6f6"], ["type", "submit", 1, "btn", "btn-primary", "dont-close-products", 3, "click"], ["type", "button", "id", "pl-qty-close", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-cancel", "dont-close-products", 3, "click"], ["id", "exampleModal2", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["class", "modal-header", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], ["id", "floating-label", "class", "form-wrap p-0", 4, "ngIf"], ["class", "form-wrap p-10", 4, "ngIf"], [1, "modal-footer", "border-0"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", "id", "close-payment-modal", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-cancel", 3, "click"], ["id", "product-cl-sec", 3, "ngClass", "clickOutside"], ["id", "pl-close", 1, "close-btn-pl", 3, "click"], [1, "pro-header-text"], [1, "se_cus-type", "form-wrap", "p-15"], [1, "productSearch"], [1, "fa", "fa-search"], ["type", "text", "id", "", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "pc-cartlist"], [1, "overflow-plist"], [1, "plist-content"], [1, "_left-filter", "pt-0"], [1, "container"], [1, "card", "top_border", "p-15"], ["class", "AddProductTable", "width", "100%", 4, "ngIf"], ["class", "col-md-12 loader", 4, "ngIf"], [1, "_cl-bottom"], ["id", "pl-prod-close", "type", "butotn", 1, "btn", "btn-cancel", "mr-2", 3, "click"], ["id", "counter-sale", 1, "container", "_order-container"], ["data-toggle", "modal", "data-target", "#billsModalCounterSale", "id", "billsPrintPaperModalTrigger", "hidden", "", 1, "btn", "btn-default", "mb-0"], [1, "row", "mt-2", "mb-2"], [1, "col-md-12"], [1, "_head01", "float-left"], [1, "row", "mt-2"], [1, "card", "p-20", "top_border", "mb-3", "_INV-h"], [1, "row", "_add-customer"], [1, "_sa-customer"], [1, "form-s2"], ["placeholder", "Select Employee", 1, "formselect", 3, "multiple", "ngModel", "ngModelChange", "change"], ["disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Select Route", 1, "formselect", 3, "multiple", "ngModel", "ngModelChange", "change"], ["disabled", "", 4, "ngIf"], ["placeholder", "Select Retailer", 1, "formselect", 3, "multiple", "ngModel", "ngModelChange", "change"], ["id", "productlist01", 1, "btn", "btn-primary", "ml-15", 3, "click"], [1, "_cut-detail"], [1, "col-md-6"], [1, "_add-product"], [1, "row", "AP_heading"], [1, "addItemCell", "PL-5"], [1, "addItemCell", "unit-w"], [1, "addItemCell2"], [1, "addItemCell3"], ["class", "row _row-product", 4, "ngFor", "ngForOf"], ["class", "row _row-product", 4, "ngIf"], [1, "row", "_totalBar", "_totalBar2"], [1, "addItemCell", "_h25", "PL-5"], [1, "addItemCell", "_h25", "unit-w"], [1, "addItemCell2", "_h25"], [1, "addItemCell2", "_h25", "width-t"], [1, "addItemCell3", "_h25"], [1, "row", "_totalBar2"], [1, "addItemCell3", "_h25", 2, "font-size", "18px", "color", "#0038ba"], [1, "Action_bottom"], [1, "container-fluid", "p-0"], [1, "align-right"], ["type", "submit", "class", "btn btn-primary mr-2", "disabled", "", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary btn-cancel mr-2", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-primary float-left mr-2", 3, "click", 4, "ngIf"], ["class", "btn btn-primary float-left mr-2 red-bg", 3, "click", 4, "ngIf"], ["class", "btn btn-primary float-left", 3, "click", 4, "ngIf"], ["class", "btn btn-primary float-left red-bg", 3, "click", 4, "ngIf"], ["id", "open-modal-payment", "style", "display: none;", "data-toggle", "modal", "data-target", "#exampleModal2", 4, "ngIf"], [1, "modal-body", "AddDetailPR"], [1, "col-md-4", "pt-7", "mb-15"], [1, "col-md-8", "mb-15"], ["type", "text", "placeholder", "", "required", "", 1, "form-control", 2, "font-size", "13px", 3, "ngModel", "keyup", "keydown", "ngModelChange"], ["selectedQty", "ngModel"], ["class", "input-error", 4, "ngIf"], ["class", "col-md-4", "style", "padding-top: 2px", 4, "ngIf"], [1, "col-md-8"], [4, "ngFor", "ngForOf"], [1, "input-error"], [1, "col-md-4", 2, "padding-top", "2px"], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "AssignCatalogue", 1, "custom-control-input", 3, "ngModel", "id", "value", "ngModelChange", "click"], [1, "custom-control-label", "font13", 2, "line-height", "25px", 3, "for"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["id", "floating-label", 1, "form-wrap", "p-0"], [1, "row", "pt-10"], [1, "col-4"], ["type", "radio", "name", "payment", "id", "payment1", "value", "full", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "click"], ["for", "payment1", 1, "custom-control-label", 2, "font-size", "13px", "line-height", "25px"], ["type", "radio", "name", "payment", "id", "payment2", "value", "partial", 1, "custom-control-input", 3, "ngModel", "click", "ngModelChange"], ["for", "payment2", 1, "custom-control-label", 2, "font-size", "13px", "line-height", "25px"], ["class", "col-12 input-error", 4, "ngIf"], [1, "col-md-6", "PT-10"], [1, "form-group"], [1, "control-label", "mb-10"], ["type", "text", "id", "chequeNum", "name", "cheque_num", "required", "", "autocomplete", "off", 1, "form-control", "cheque_num", 3, "ngModel", "focus", "blur", "ngModelChange"], ["chequNo", "ngModel"], [1, "form-group", "focused"], ["type", "date", "id", "datepicker", "required", "", "placeholder", "", "autocomplete", "off", "name", "payment_date", 1, "form-control", "cheque_date", 3, "ngModel", "focus", "blur", "ngModelChange"], ["payDate", "ngModel"], [1, "col-md-6", "PT-5"], ["type", "text", "name", "cheque_bank_name", "id", "chequeBankName", "required", "", "autocomplete", "off", 1, "form-control", "cheque_bank_name", 3, "ngModel", "focus", "blur", "ngModelChange"], ["bank_Name", "ngModel"], ["class", "col-md-6 PT-5", 4, "ngIf"], [1, "col-12", "input-error"], ["type", "number", "min", "0", "name", "cheque_amount", "required", "", "id", "Amount1", "autocomplete", "off", 1, "form-control", "cheque_amount", 3, "max", "ngModel", "focus", "blur", "ngModelChange"], ["cheqAmount", "ngModel"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "col-6"], ["type", "radio", "name", "payment", "id", "Amount1", "value", "full", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "click"], ["for", "Amount1", 1, "custom-control-label", 2, "font-size", "13px", "line-height", "25px"], ["type", "radio", "name", "payment", "id", "Amount2", "value", "partial", 1, "custom-control-input", 3, "ngModel", "click", "ngModelChange"], ["for", "Amount2", 1, "custom-control-label", 2, "font-size", "13px", "line-height", "25px"], ["class", "col-md-6 PT-10", 4, "ngIf"], ["type", "number", "min", "0", "name", "cheque_amount", "required", "", "autocomplete", "off", 1, "form-control", "cheque_amount", 3, "max", "ngModel", "focus", "blur", "ngModelChange"], ["credAmount", "ngModel"], [1, "form-wrap", "p-10"], ["width", "100%", 1, "AddProductTable"], [1, "ProListDiv"], ["class", "lab-promotion", 4, "ngIf"], ["alt", "", 1, "PrList_img", 3, "src"], [1, "PR_Name"], ["data-toggle", "modal", "data-target", "#exampleModal", "class", "btn btn-default mb-0 dont-close-quantity", 3, "click", 4, "ngIf"], ["class", "btn btn-default mb-0 red-bg dont-close-product", 3, "click", 4, "ngIf"], [1, "lab-promotion"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-default", "mb-0", "dont-close-quantity", 3, "click"], [1, "btn", "btn-default", "mb-0", "red-bg", "dont-close-product", 3, "click"], [1, "col-md-12", "loader"], [1, "loading"], [3, "value"], [1, "row", "_row-product"], [1, "dd-handle", "dd3-handle", "swap-div"], [1, "col-12", "p-0"], [1, "_emp-sele", "_product-name"], ["type", "text", "placeholder", "0", 1, "addItemCell2_input", 2, "font-size", "13px", 3, "disabled", "ngModel", "keyup", "keydown", "ngModelChange"], ["type", "text", "placeholder", "0", 1, "addItemCell2_input", 2, "font-size", "13px", 3, "readonly", "ngModel", "ngModelChange", "keyup", "keydown"], ["title", "Delete", 1, "btn", "_order-del", 3, "disabled", "click"], [1, "fa", "fa-trash-alt"], [1, "no-data"], ["type", "submit", "disabled", "", 1, "btn", "btn-primary", "mr-2"], ["role", "status", 1, "spinner-border", "text-light"], [1, "sr-only"], ["type", "submit", 1, "btn", "btn-primary", "btn-cancel", "mr-2", 3, "routerLink"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "float-left", "mr-2", 3, "click"], [1, "btn", "btn-primary", "float-left", "mr-2", "red-bg", 3, "click"], [1, "btn", "btn-primary", "float-left", 3, "click"], [1, "btn", "btn-primary", "float-left", "red-bg", 3, "click"], ["id", "open-modal-payment", "data-toggle", "modal", "data-target", "#exampleModal2", 2, "display", "none"]], template: function CounterSaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Print bill for this order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Select paper size for print");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_Template_a_click_17_listener() { return ctx.getBills("A4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "A4 Portrait Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_Template_a_click_22_listener() { return ctx.getBills("A5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "A5 Landscape Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_Template_button_click_34_listener($event) { return ctx.closeQuantityModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, CounterSaleComponent_div_37_Template, 16, 6, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_Template_button_click_39_listener() { return ctx.addProductToOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_Template_button_click_41_listener($event) { return ctx.closeQuantityModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, CounterSaleComponent_div_46_Template, 8, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, CounterSaleComponent_div_47_Template, 37, 10, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, CounterSaleComponent_div_48_Template, 8, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, CounterSaleComponent_div_49_Template, 15, 4, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, CounterSaleComponent_div_50_Template, 3, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_Template_button_click_52_listener() { return ctx.addPaymentMethod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_Template_button_click_54_listener() { return ctx.paymentCancelled(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clickOutside", function CounterSaleComponent_Template_div_clickOutside_56_listener($event) { return ctx.clickedOutSide($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_Template_a_click_57_listener() { return ctx.closeProductsList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CounterSaleComponent_Template_input_ngModelChange_67_listener($event) { return ctx.productSearchText = $event; })("keyup", function CounterSaleComponent_Template_input_keyup_67_listener() { return ctx.searchProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, CounterSaleComponent_table_76_Template, 3, 1, "table", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, CounterSaleComponent_div_77_Template, 3, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_Template_button_click_79_listener() { return ctx.closeProductsList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "h2", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "ng-select", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CounterSaleComponent_Template_ng_select_ngModelChange_98_listener($event) { return ctx.selectedEmployee = $event; })("change", function CounterSaleComponent_Template_ng_select_change_98_listener() { return ctx.getRoutes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "ng-option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Select Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](101, CounterSaleComponent_ng_option_101_Template, 2, 2, "ng-option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "ng-select", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CounterSaleComponent_Template_ng_select_ngModelChange_104_listener($event) { return ctx.selectedRoute = $event; })("change", function CounterSaleComponent_Template_ng_select_change_104_listener() { return ctx.getRetailerByRoute(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](105, CounterSaleComponent_ng_option_105_Template, 2, 0, "ng-option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, CounterSaleComponent_ng_option_106_Template, 2, 0, "ng-option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](107, CounterSaleComponent_ng_option_107_Template, 2, 2, "ng-option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "ng-select", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CounterSaleComponent_Template_ng_select_ngModelChange_110_listener($event) { return ctx.selectedRetailer = $event; })("change", function CounterSaleComponent_Template_ng_select_change_110_listener() { return ctx.getDiscountSlabs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](111, CounterSaleComponent_ng_option_111_Template, 2, 0, "ng-option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](112, CounterSaleComponent_ng_option_112_Template, 2, 0, "ng-option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](113, CounterSaleComponent_ng_option_113_Template, 2, 2, "ng-option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CounterSaleComponent_Template_button_click_114_listener($event) { return ctx.showProductsList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Retailer Name: \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Channel Type: \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Location: \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "Territory: \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "QTY.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "T.P");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "T.O ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "T. Dis. (%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "S. Disc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "E. Disc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "Net Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](156, CounterSaleComponent_div_156_Template, 32, 29, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](157, CounterSaleComponent_div_157_Template, 3, 0, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "Total Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](163, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](164, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](167, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Gross Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](172, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](174, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](175, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](176, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](178, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](179, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "Trade Offer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](185, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](188, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](189, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](190, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](191, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](192, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Trade Discount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](198, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](200, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](201, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](202, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](203, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](204, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](205, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "Special Discount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](211, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](213, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](214, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](215, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](216, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](217, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](218, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](219, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "Extra Discount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](224, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](227, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](228, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](229, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](230, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](231, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](232, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, "Tax:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](237, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](239, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](240, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](241, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](242, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](243, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](244, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](245, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](248, "Total Amount Due:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](251, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](253, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](254, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](255, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](256, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](257, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](258, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](259, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, "Cash:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](264);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](265, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](267, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](268, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](269, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](270, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](271, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](272, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](273, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, "Cheque Payment:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](278);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](279, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](281, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](282, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](283, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](284, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](285, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](286, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](287, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](290, "Credited Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](292);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](293, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](296, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](297, CounterSaleComponent_button_297_Template, 4, 0, "button", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](298, CounterSaleComponent_button_298_Template, 2, 2, "button", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](299, CounterSaleComponent_button_299_Template, 2, 0, "button", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](300, CounterSaleComponent_button_300_Template, 2, 0, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](301, CounterSaleComponent_button_301_Template, 2, 0, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](302, CounterSaleComponent_button_302_Template, 2, 0, "button", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](303, CounterSaleComponent_button_303_Template, 2, 0, "button", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](304, CounterSaleComponent_button_304_Template, 2, 0, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedProduct.hasOwnProperty("quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isCredit);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isCredit);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCredit);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCredit);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.paymentTypeCheque === "partial" && ctx.paymentTypeCredit === "full" || ctx.paymentTypeCheque === "full" && ctx.paymentTypeCredit === "partial");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.paymentTypeCheque === "partial" && ctx.paymentTypeCredit === "full" || ctx.paymentTypeCheque === "full" && ctx.paymentTypeCredit === "partial");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.showProducts ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.productSearchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loadingProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadingProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", false)("ngModel", ctx.selectedEmployee);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.orderBookers);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", false)("ngModel", ctx.selectedRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selectedEmployee);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedEmployee);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.routes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", false)("ngModel", ctx.selectedRetailer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selectedRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.retailers);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.selectedRetailer == null ? null : ctx.selectedRetailer.retailer_name) || "--", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", (ctx.selectedRetailer == null ? null : ctx.selectedRetailer.type) || "--", " ", ctx.selectedRetailer && " (" + (ctx.selectedRetailer == null ? null : ctx.selectedRetailer.segment_name) + ")", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.selectedRetailer == null ? null : ctx.selectedRetailer.loc) || "--", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.selectedRetailer == null ? null : ctx.selectedRetailer.territory) || "--", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectedProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selectedProducts.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedProducts.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](172, 50, ctx.grossAmount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](185, 53, ctx.tradeOffer, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](198, 56, ctx.tradeDiscount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](211, 59, ctx.specialDiscount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](224, 62, ctx.extraDiscount, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](237, 65, ctx.tax, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](251, 68, ctx.dueAmount, "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](265, 71, (ctx.cash == null ? null : ctx.cash.amount_received) || 0, "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](279, 74, (ctx.cheque == null ? null : ctx.cheque.amount_received) || 0, "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](293, 77, (ctx.credit == null ? null : ctx.credit.amount_received) || 0, "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isOrdering);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isOrdering);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isOrdering);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isOrdering && !ctx.isChequeAdded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isOrdering && ctx.isChequeAdded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isOrdering && !ctx.isCreditAdded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isOrdering && ctx.isCreditAdded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isOrdering);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], ng_click_outside__WEBPACK_IMPORTED_MODULE_11__["ClickOutsideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"]], styles: ["._date-order{padding-left: 15px;}\r\n._sa-customer {flex: 0 0 280px; max-width: 280px; padding-right: 0}\r\n.calendar-icon{top: 6px;}\r\n._add-product .addItemCell{width:230px;}\r\n._add-product .unit-w{width:130px;}\r\n.addItemCell2{text-align: left!important; color: #282828!important;}\r\n.AP_heading .addItemCell2 {color: #0038ba!important;}\r\n._add-product input{text-align: left!important;}\r\n._add-product .addItemCell2_input{text-align: left!important; border: solid 1px #fff!important; height: 25px!important; margin-top: -3px;}\r\n._add-product .addItemCell3{width: 100px; text-align: right!important;}\r\n._order-del{right:10px}\r\n._INV-h:HOVER ._row-product .addItemCell2_input{ border: solid 1px #e9e9e9!important;}\r\n.ng-select .ng-select-container {border-radius: 0;}\r\n.addItemCell .ng-select .ng-select-container {height: 25px!important;min-height: 25px!important;border-radius: 0; text-transform: capitalize;}\r\n.addItemCell .ng-select .ng-select-container div.ng-input { top: 2px !important; }\r\n._cut-detail, .ng-option, .ng-select span { text-transform: capitalize; }\r\n._row-product .addItemCell3{color: #282828!important}\r\n._totalBar2 ._h25{height: 20px;color: #282828; font-size: 14px;}\r\n._totalBar2 .width-t{width: 196px; text-align: right!important;}\r\n._totalBar2 .addItemCell3 {\tfont-family: 'Rationale', sans-serif; font-size: 17px; line-height: 1;}\r\n.itemQTY {font-size: 12px;width: 70px;padding: 0px 5px;border: solid 1px #e6e6e6}\r\n.itemIMG {width: 32px;height: 32px;\tborder: solid 1px #e5e5e5;margin-top: -5px;margin-bottom: -5px;margin-right: 5px;float: left}\r\n.productSearch {position: relative;}\r\n.productSearch input {height: 32px;border: solid 1px #eae9e9;box-shadow: none;padding-left: 30px;font-size: 13px;letter-spacing: 1px;}\r\n.productSearch .fa {position: absolute;\ttop: 8px;left: 8px;\tcolor: #b5b5b5;}\r\n.AddProductTable {padding: 0;margin: 0}\r\n.AddProductTable tr {border-bottom: solid 1px #eeeeee}\r\n.AddProductTable td {padding-bottom: 10px;padding-top: 10px}\r\n.ProListDiv {padding: 0;display: table; position: relative;}\r\n.ProListDiv .PR_Name {display: table-cell;vertical-align: middle;font-size: 14px;letter-spacing: 1px;line-height: 16px}\r\n.ProListDiv .PrList_img {width: 50px;height: 50px;margin-right: 8px;border: solid 1px #e0e0e0}\r\n.AddProductTable .btn-default {padding: 5px 8px;font-size: 13px;border-radius: 0;-khtml-border-radius: 0;background: linear-gradient(90deg, #1e54d3 0%, #0038ba 100%);\r\n\tcolor: #fff;text-align: center;margin: 0;line-height: 1;min-width: 74px;letter-spacing: 1px;float: right;border: none!important}\r\n.AddDetailPR {padding: 25px;font-size: 14px}\r\n.AddDetailPR .form-control {height: 32px;border: solid 1px #dedede;box-shadow: none;padding: 0px 10px;font-size: 13px;letter-spacing: 1px;}\r\n.AddDetailPR select {border-radius: 0;padding: 0px 10px;height: 32px;border: solid 1px #dedede;font-size: 14px}\r\n.Action_bottom{z-index: 900}\r\n.Action_bottom .btn{letter-spacing: 1px; font-size: 13px}\r\n.se_cus-type{background-color: #fff}\r\n._product-name{margin-top: 5px; position: relative; padding-right: 0px; color: #282828; font-size: 12px;  line-height: normal;}\r\n.lab-promotion{position: absolute;top:-8px;left: -.438rem;padding:2px 6px;font-size: 10.5px;z-index: 3;background-color: #fed02a;color: #282828;line-height: 1;}\r\n.lab-promotion:before {border-top: 4px solid #000;border-left: 7px solid transparent;content: \"\";left: 0;position: absolute;top: 14px;z-index: -1;}\r\n.lab-promotion-l {position: absolute;top:-15px;left: -13px;padding: 1px 6px;font-size: 10.5px;z-index: 3;background-color: #fed02a;color: #282828;line-height: 1; letter-spacing: 1px;}\r\n.lab-promotion-l:before {border-top: 4px solid #000;border-left: 7px solid transparent;content: \"\";left: 0;position: absolute; top: 12px;z-index: -1;}\r\n._row-product {padding: 12px 0px 10px 0px !important;}\r\n._order-container { max-width: 1270px; }\r\n.loader { text-align: center; padding: 30px; }\r\n.loading { color: #b5b5b5; font-size: 24px; margin: 0 auto;}\r\n.ng-select .ng-clear-wrapper {display: none;}\r\n.custom-control-label {text-transform: capitalize;}\r\n.no-data {width: 100%; color: rgb(168, 154, 154); font-size: 20px; text-align: center;}\r\n.input-error { color: red; font-size: 13px; float: left;}\r\n/* Chrome, Safari, Edge, Opera */\r\ninput::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none;  margin: 0;}\r\n/* Firefox */\r\ninput[type=number] {-moz-appearance: textfield;}\r\n.print-icon-div{text-align: center; padding: 15px;}\r\n.print-icon-div a{display: inline-block; border: solid 1px #e9ecef; padding: 15px; width: 100%; text-align: center; text-decoration: none; color: #282828; font-size: 13px;}\r\n.print-icon-div a:HOVER{border: solid 1px #0038ba; color: #0038ba; box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);}\r\n.print-icon{filter: grayscale(1); width: 45px; opacity: 0.7; display: block; margin: auto; margin-top: 10px; margin-bottom: 15px;}\r\n.print-icon-div a:HOVER .print-icon{filter:none; opacity: 1;}\r\n.heading3{margin: 0; font-size: 16px;}\r\n.select-date, .select-date:focus{box-shadow: none; border: none; background-color:#f6f6f6; font-size: 14px; height: 30px; width: 200px}\r\n.no-content {width:100%;height:65vh;display:flex;}\r\n.no-content .no-content-container {margin: auto;display:table;text-align: center; color:#B7B7B7}\r\n.no-content .no-content-container img {width: 70px; height: 70px; margin: auto auto 10px auto; display: block}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcmRlcnMvY29tcG9uZW50cy9jb3VudGVyLXNhbGUvY291bnRlci1zYWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYSxrQkFBa0IsQ0FBQztBQUNoQyxlQUFlLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0I7QUFDbEUsZUFBZSxRQUFRLENBQUM7QUFDeEIsMkJBQTJCLFdBQVcsQ0FBQztBQUN2QyxzQkFBc0IsV0FBVyxDQUFDO0FBQ2xDLGNBQWMsMEJBQTBCLEVBQUUsd0JBQXdCLENBQUM7QUFDbkUsMkJBQTJCLHdCQUF3QixDQUFDO0FBQ3BELG9CQUFvQiwwQkFBMEIsQ0FBQztBQUMvQyxrQ0FBa0MsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUM7QUFDekksNEJBQTRCLFlBQVksRUFBRSwyQkFBMkIsQ0FBQztBQUN0RSxZQUFZLFVBQVU7QUFDdEIsaURBQWlELG1DQUFtQyxDQUFDO0FBQ3JGLGlDQUFpQyxnQkFBZ0IsQ0FBQztBQUNsRCw4Q0FBOEMsc0JBQXNCLENBQUMsMEJBQTBCLENBQUMsZ0JBQWdCLEVBQUUsMEJBQTBCLENBQUM7QUFDN0ksNERBQTRELG1CQUFtQixFQUFFO0FBQ2pGLDRDQUE0QywwQkFBMEIsRUFBRTtBQUN4RSw0QkFBNEIsd0JBQXdCO0FBQ3BELGtCQUFrQixZQUFZLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQztBQUMvRCxxQkFBcUIsWUFBWSxFQUFFLDJCQUEyQixDQUFDO0FBQy9ELDRCQUE0QixvQ0FBb0MsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDO0FBQ2xHLFVBQVUsZUFBZSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUI7QUFDaEYsVUFBVSxXQUFXLENBQUMsWUFBWSxFQUFFLHlCQUF5QixDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLFdBQVc7QUFDaEksZ0JBQWdCLGtCQUFrQixDQUFDO0FBQ25DLHNCQUFzQixZQUFZLENBQUMseUJBQXlCLENBQWdELGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQztBQUNwTCxvQkFBb0Isa0JBQWtCLEVBQUUsUUFBUSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUM7QUFDM0Usa0JBQWtCLFVBQVUsQ0FBQyxTQUFTO0FBQ3RDLHFCQUFxQixnQ0FBZ0M7QUFDckQscUJBQXFCLG9CQUFvQixDQUFDLGlCQUFpQjtBQUMzRCxhQUFhLFVBQVUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7QUFDM0Qsc0JBQXNCLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUI7QUFDdEgseUJBQXlCLFdBQVcsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMseUJBQXlCO0FBQzdGLCtCQUErQixnQkFBZ0IsQ0FBQyxlQUFlLENBQWdELGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLDREQUE0RDtDQUNuTixXQUFXLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLHNCQUFzQjtBQUNoSSxjQUFjLGFBQWEsQ0FBQyxlQUFlO0FBQzNDLDRCQUE0QixZQUFZLENBQUMseUJBQXlCLENBQWdELGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQztBQUN6TCxxQkFBcUIsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLHlCQUF5QixDQUFDLGVBQWU7QUFDOUcsZUFBZSxZQUFZO0FBQzNCLG9CQUFvQixtQkFBbUIsRUFBRSxlQUFlO0FBQ3hELGFBQWEsc0JBQXNCO0FBQ25DLGVBQWUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxlQUFlLEdBQUcsbUJBQW1CLENBQUM7QUFDOUgsZUFBZSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztBQUMvSix1QkFBdUIsMEJBQTBCLENBQUMsa0NBQWtDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO0FBQ2xKLGtCQUFrQixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLG1CQUFtQixDQUFDO0FBQ3RMLHlCQUF5QiwwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUM7QUFDckosZUFBZSxxQ0FBcUMsQ0FBQztBQUNyRCxvQkFBb0IsaUJBQWlCLEVBQUU7QUFDdkMsVUFBVSxrQkFBa0IsRUFBRSxhQUFhLEVBQUU7QUFDN0MsV0FBVyxjQUFjLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQztBQUMzRCw4QkFBOEIsYUFBYSxDQUFDO0FBQzVDLHVCQUF1QiwwQkFBMEIsQ0FBQztBQUNsRCxVQUFVLFdBQVcsRUFBRSx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLENBQUM7QUFDdEYsZUFBZSxVQUFVLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQztBQUN4RCxnQ0FBZ0M7QUFDaEMscUVBQXFFLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztBQUMxRyxZQUFZO0FBQUMsb0JBQW9CLDBCQUEwQixDQUFDO0FBRzVELGdCQUFnQixrQkFBa0IsRUFBRSxhQUFhLENBQUM7QUFDbEQsa0JBQWtCLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQztBQUMzSyx3QkFBd0IseUJBQXlCLEVBQUUsY0FBYyxFQUFFLCtDQUErQyxDQUFDO0FBQ25ILFlBQVksb0JBQW9CLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO0FBQ2pJLG9DQUFvQyxXQUFXLEVBQUUsVUFBVSxDQUFDO0FBQzVELFVBQVUsU0FBUyxFQUFFLGVBQWUsQ0FBQztBQUNyQyxpQ0FBaUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsWUFBWTtBQUN0SSxhQUFhLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO0FBQ2pELG1DQUFtQyxZQUFZLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLGFBQWE7QUFDL0YsdUNBQXVDLFdBQVcsRUFBRSxZQUFZLEVBQUUsMkJBQTJCLEVBQUUsY0FBYyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3JkZXJzL2NvbXBvbmVudHMvY291bnRlci1zYWxlL2NvdW50ZXItc2FsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLl9kYXRlLW9yZGVye3BhZGRpbmctbGVmdDogMTVweDt9XHJcbi5fc2EtY3VzdG9tZXIge2ZsZXg6IDAgMCAyODBweDsgbWF4LXdpZHRoOiAyODBweDsgcGFkZGluZy1yaWdodDogMH1cclxuLmNhbGVuZGFyLWljb257dG9wOiA2cHg7fVxyXG4uX2FkZC1wcm9kdWN0IC5hZGRJdGVtQ2VsbHt3aWR0aDoyMzBweDt9XHJcbi5fYWRkLXByb2R1Y3QgLnVuaXQtd3t3aWR0aDoxMzBweDt9XHJcbi5hZGRJdGVtQ2VsbDJ7dGV4dC1hbGlnbjogbGVmdCFpbXBvcnRhbnQ7IGNvbG9yOiAjMjgyODI4IWltcG9ydGFudDt9XHJcbi5BUF9oZWFkaW5nIC5hZGRJdGVtQ2VsbDIge2NvbG9yOiAjMDAzOGJhIWltcG9ydGFudDt9XHJcbi5fYWRkLXByb2R1Y3QgaW5wdXR7dGV4dC1hbGlnbjogbGVmdCFpbXBvcnRhbnQ7fVxyXG4uX2FkZC1wcm9kdWN0IC5hZGRJdGVtQ2VsbDJfaW5wdXR7dGV4dC1hbGlnbjogbGVmdCFpbXBvcnRhbnQ7IGJvcmRlcjogc29saWQgMXB4ICNmZmYhaW1wb3J0YW50OyBoZWlnaHQ6IDI1cHghaW1wb3J0YW50OyBtYXJnaW4tdG9wOiAtM3B4O31cclxuLl9hZGQtcHJvZHVjdCAuYWRkSXRlbUNlbGwze3dpZHRoOiAxMDBweDsgdGV4dC1hbGlnbjogcmlnaHQhaW1wb3J0YW50O31cclxuLl9vcmRlci1kZWx7cmlnaHQ6MTBweH1cclxuLl9JTlYtaDpIT1ZFUiAuX3Jvdy1wcm9kdWN0IC5hZGRJdGVtQ2VsbDJfaW5wdXR7IGJvcmRlcjogc29saWQgMXB4ICNlOWU5ZTkhaW1wb3J0YW50O31cclxuLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciB7Ym9yZGVyLXJhZGl1czogMDt9XHJcbi5hZGRJdGVtQ2VsbCAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIHtoZWlnaHQ6IDI1cHghaW1wb3J0YW50O21pbi1oZWlnaHQ6IDI1cHghaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6IDA7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO31cclxuLmFkZEl0ZW1DZWxsIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgZGl2Lm5nLWlucHV0IHsgdG9wOiAycHggIWltcG9ydGFudDsgfVxyXG4uX2N1dC1kZXRhaWwsIC5uZy1vcHRpb24sIC5uZy1zZWxlY3Qgc3BhbiB7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XHJcbi5fcm93LXByb2R1Y3QgLmFkZEl0ZW1DZWxsM3tjb2xvcjogIzI4MjgyOCFpbXBvcnRhbnR9XHJcbi5fdG90YWxCYXIyIC5faDI1e2hlaWdodDogMjBweDtjb2xvcjogIzI4MjgyODsgZm9udC1zaXplOiAxNHB4O31cclxuLl90b3RhbEJhcjIgLndpZHRoLXR7d2lkdGg6IDE5NnB4OyB0ZXh0LWFsaWduOiByaWdodCFpbXBvcnRhbnQ7fVxyXG4uX3RvdGFsQmFyMiAuYWRkSXRlbUNlbGwzIHtcdGZvbnQtZmFtaWx5OiAnUmF0aW9uYWxlJywgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxN3B4OyBsaW5lLWhlaWdodDogMTt9XHJcbi5pdGVtUVRZIHtmb250LXNpemU6IDEycHg7d2lkdGg6IDcwcHg7cGFkZGluZzogMHB4IDVweDtib3JkZXI6IHNvbGlkIDFweCAjZTZlNmU2fVxyXG4uaXRlbUlNRyB7d2lkdGg6IDMycHg7aGVpZ2h0OiAzMnB4O1x0Ym9yZGVyOiBzb2xpZCAxcHggI2U1ZTVlNTttYXJnaW4tdG9wOiAtNXB4O21hcmdpbi1ib3R0b206IC01cHg7bWFyZ2luLXJpZ2h0OiA1cHg7ZmxvYXQ6IGxlZnR9XHJcbi5wcm9kdWN0U2VhcmNoIHtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4ucHJvZHVjdFNlYXJjaCBpbnB1dCB7aGVpZ2h0OiAzMnB4O2JvcmRlcjogc29saWQgMXB4ICNlYWU5ZTk7LXdlYmtpdC1ib3gtc2hhZG93OiBub25lOy1tb3otYm94LXNoYWRvdzogbm9uZTtib3gtc2hhZG93OiBub25lO3BhZGRpbmctbGVmdDogMzBweDtmb250LXNpemU6IDEzcHg7bGV0dGVyLXNwYWNpbmc6IDFweDt9XHJcbi5wcm9kdWN0U2VhcmNoIC5mYSB7cG9zaXRpb246IGFic29sdXRlO1x0dG9wOiA4cHg7bGVmdDogOHB4O1x0Y29sb3I6ICNiNWI1YjU7fVxyXG4uQWRkUHJvZHVjdFRhYmxlIHtwYWRkaW5nOiAwO21hcmdpbjogMH1cclxuLkFkZFByb2R1Y3RUYWJsZSB0ciB7Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlZWVlZWV9XHJcbi5BZGRQcm9kdWN0VGFibGUgdGQge3BhZGRpbmctYm90dG9tOiAxMHB4O3BhZGRpbmctdG9wOiAxMHB4fVxyXG4uUHJvTGlzdERpdiB7cGFkZGluZzogMDtkaXNwbGF5OiB0YWJsZTsgcG9zaXRpb246IHJlbGF0aXZlO31cclxuLlByb0xpc3REaXYgLlBSX05hbWUge2Rpc3BsYXk6IHRhYmxlLWNlbGw7dmVydGljYWwtYWxpZ246IG1pZGRsZTtmb250LXNpemU6IDE0cHg7bGV0dGVyLXNwYWNpbmc6IDFweDtsaW5lLWhlaWdodDogMTZweH1cclxuLlByb0xpc3REaXYgLlByTGlzdF9pbWcge3dpZHRoOiA1MHB4O2hlaWdodDogNTBweDttYXJnaW4tcmlnaHQ6IDhweDtib3JkZXI6IHNvbGlkIDFweCAjZTBlMGUwfVxyXG4uQWRkUHJvZHVjdFRhYmxlIC5idG4tZGVmYXVsdCB7cGFkZGluZzogNXB4IDhweDtmb250LXNpemU6IDEzcHg7LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwOy1tb3otYm9yZGVyLXJhZGl1czogMDtib3JkZXItcmFkaXVzOiAwOy1raHRtbC1ib3JkZXItcmFkaXVzOiAwO2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFlNTRkMyAwJSwgIzAwMzhiYSAxMDAlKTtcclxuXHRjb2xvcjogI2ZmZjt0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luOiAwO2xpbmUtaGVpZ2h0OiAxO21pbi13aWR0aDogNzRweDtsZXR0ZXItc3BhY2luZzogMXB4O2Zsb2F0OiByaWdodDtib3JkZXI6IG5vbmUhaW1wb3J0YW50fVxyXG4uQWRkRGV0YWlsUFIge3BhZGRpbmc6IDI1cHg7Zm9udC1zaXplOiAxNHB4fVxyXG4uQWRkRGV0YWlsUFIgLmZvcm0tY29udHJvbCB7aGVpZ2h0OiAzMnB4O2JvcmRlcjogc29saWQgMXB4ICNkZWRlZGU7LXdlYmtpdC1ib3gtc2hhZG93OiBub25lOy1tb3otYm94LXNoYWRvdzogbm9uZTtib3gtc2hhZG93OiBub25lO3BhZGRpbmc6IDBweCAxMHB4O2ZvbnQtc2l6ZTogMTNweDtsZXR0ZXItc3BhY2luZzogMXB4O31cclxuLkFkZERldGFpbFBSIHNlbGVjdCB7Ym9yZGVyLXJhZGl1czogMDtwYWRkaW5nOiAwcHggMTBweDtoZWlnaHQ6IDMycHg7Ym9yZGVyOiBzb2xpZCAxcHggI2RlZGVkZTtmb250LXNpemU6IDE0cHh9XHJcbi5BY3Rpb25fYm90dG9te3otaW5kZXg6IDkwMH1cclxuLkFjdGlvbl9ib3R0b20gLmJ0bntsZXR0ZXItc3BhY2luZzogMXB4OyBmb250LXNpemU6IDEzcHh9XHJcbi5zZV9jdXMtdHlwZXtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmfVxyXG4uX3Byb2R1Y3QtbmFtZXttYXJnaW4tdG9wOiA1cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1yaWdodDogMHB4OyBjb2xvcjogIzI4MjgyODsgZm9udC1zaXplOiAxMnB4OyAgbGluZS1oZWlnaHQ6IG5vcm1hbDt9XHJcbi5sYWItcHJvbW90aW9ue3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6LThweDtsZWZ0OiAtLjQzOHJlbTtwYWRkaW5nOjJweCA2cHg7Zm9udC1zaXplOiAxMC41cHg7ei1pbmRleDogMztiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkMDJhO2NvbG9yOiAjMjgyODI4O2xpbmUtaGVpZ2h0OiAxO31cclxuLmxhYi1wcm9tb3Rpb246YmVmb3JlIHtib3JkZXItdG9wOiA0cHggc29saWQgIzAwMDtib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O2NvbnRlbnQ6IFwiXCI7bGVmdDogMDtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAxNHB4O3otaW5kZXg6IC0xO31cclxuLmxhYi1wcm9tb3Rpb24tbCB7cG9zaXRpb246IGFic29sdXRlO3RvcDotMTVweDtsZWZ0OiAtMTNweDtwYWRkaW5nOiAxcHggNnB4O2ZvbnQtc2l6ZTogMTAuNXB4O3otaW5kZXg6IDM7YmFja2dyb3VuZC1jb2xvcjogI2ZlZDAyYTtjb2xvcjogIzI4MjgyODtsaW5lLWhlaWdodDogMTsgbGV0dGVyLXNwYWNpbmc6IDFweDt9XHJcbi5sYWItcHJvbW90aW9uLWw6YmVmb3JlIHtib3JkZXItdG9wOiA0cHggc29saWQgIzAwMDtib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O2NvbnRlbnQ6IFwiXCI7bGVmdDogMDtwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMTJweDt6LWluZGV4OiAtMTt9XHJcbi5fcm93LXByb2R1Y3Qge3BhZGRpbmc6IDEycHggMHB4IDEwcHggMHB4ICFpbXBvcnRhbnQ7fVxyXG4uX29yZGVyLWNvbnRhaW5lciB7IG1heC13aWR0aDogMTI3MHB4OyB9XHJcbi5sb2FkZXIgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDMwcHg7IH1cclxuLmxvYWRpbmcgeyBjb2xvcjogI2I1YjViNTsgZm9udC1zaXplOiAyNHB4OyBtYXJnaW46IDAgYXV0bzt9XHJcbi5uZy1zZWxlY3QgLm5nLWNsZWFyLXdyYXBwZXIge2Rpc3BsYXk6IG5vbmU7fVxyXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWwge3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO31cclxuLm5vLWRhdGEge3dpZHRoOiAxMDAlOyBjb2xvcjogcmdiKDE2OCwgMTU0LCAxNTQpOyBmb250LXNpemU6IDIwcHg7IHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5pbnB1dC1lcnJvciB7IGNvbG9yOiByZWQ7IGZvbnQtc2l6ZTogMTNweDsgZmxvYXQ6IGxlZnQ7fVxyXG4vKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAgbWFyZ2luOiAwO31cclxuLyogRmlyZWZveCAqL2lucHV0W3R5cGU9bnVtYmVyXSB7LW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7fVxyXG5cclxuXHJcbi5wcmludC1pY29uLWRpdnt0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDE1cHg7fVxyXG4ucHJpbnQtaWNvbi1kaXYgYXtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJvcmRlcjogc29saWQgMXB4ICNlOWVjZWY7IHBhZGRpbmc6IDE1cHg7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6ICMyODI4Mjg7IGZvbnQtc2l6ZTogMTNweDt9XHJcbi5wcmludC1pY29uLWRpdiBhOkhPVkVSe2JvcmRlcjogc29saWQgMXB4ICMwMDM4YmE7IGNvbG9yOiAjMDAzOGJhOyBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTt9XHJcbi5wcmludC1pY29ue2ZpbHRlcjogZ3JheXNjYWxlKDEpOyB3aWR0aDogNDVweDsgb3BhY2l0eTogMC43OyBkaXNwbGF5OiBibG9jazsgbWFyZ2luOiBhdXRvOyBtYXJnaW4tdG9wOiAxMHB4OyBtYXJnaW4tYm90dG9tOiAxNXB4O31cclxuLnByaW50LWljb24tZGl2IGE6SE9WRVIgLnByaW50LWljb257ZmlsdGVyOm5vbmU7IG9wYWNpdHk6IDE7fVxyXG4uaGVhZGluZzN7bWFyZ2luOiAwOyBmb250LXNpemU6IDE2cHg7fVxyXG4uc2VsZWN0LWRhdGUsIC5zZWxlY3QtZGF0ZTpmb2N1c3tib3gtc2hhZG93OiBub25lOyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQtY29sb3I6I2Y2ZjZmNjsgZm9udC1zaXplOiAxNHB4OyBoZWlnaHQ6IDMwcHg7IHdpZHRoOiAyMDBweH1cclxuLm5vLWNvbnRlbnQge3dpZHRoOjEwMCU7aGVpZ2h0OjY1dmg7ZGlzcGxheTpmbGV4O31cclxuLm5vLWNvbnRlbnQgLm5vLWNvbnRlbnQtY29udGFpbmVyIHttYXJnaW46IGF1dG87ZGlzcGxheTp0YWJsZTt0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiNCN0I3Qjd9XHJcbi5uby1jb250ZW50IC5uby1jb250ZW50LWNvbnRhaW5lciBpbWcge3dpZHRoOiA3MHB4OyBoZWlnaHQ6IDcwcHg7IG1hcmdpbjogYXV0byBhdXRvIDEwcHggYXV0bzsgZGlzcGxheTogYmxvY2t9XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CounterSaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-counter-sale',
                templateUrl: './counter-sale.component.html',
                styleUrls: ['./counter-sale.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _shared_services__WEBPACK_IMPORTED_MODULE_5__["GeneralDataService"] }, { type: src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }, { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_7__["OrdersService"] }, { type: _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] }, { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] }]; }, null); })();


/***/ }),

/***/ "Hyv+":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/orders/components/orders-list-details/orders-list-details.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OrdersListDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersListDetailsComponent", function() { return OrdersListDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/orders.service */ "5TcN");
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toaster.service */ "ZgVV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loader-white/loader-white.component */ "uoBr");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _shared_pipes_Decimal_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pipes/Decimal.pipe */ "yuE0");









function OrdersListDetailsComponent_div_9_tr_81_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "decimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.item_sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.parent_qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.child_qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.original_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, item_r4.original_price * item_r4.quantity));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 12, item_r4.scheme_discount * item_r4.quantity, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 15, item_r4.merchant_discount_pkr * item_r4.quantity, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 18, item_r4.special_discount * item_r4.quantity, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 21, item_r4.final_price, "1.2-2"));
} }
function OrdersListDetailsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Order # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Retailer Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone No: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Location: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Booking Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Employee: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "CTN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "BOX/PCS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "T.P");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "GR Amt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "T.O");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "T.Disc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "SPC.Disc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Net.Amt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tbody", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, OrdersListDetailsComponent_div_9_tr_81_Template, 26, 24, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Total Discount PKR.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](97, "decimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Total PKR.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](113, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.orderDetail == null ? null : ctx_r0.orderDetail.retailer_detail == null ? null : ctx_r0.orderDetail.retailer_detail.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.orderDetail == null ? null : ctx_r0.orderDetail.retailer_detail.retailer_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.orderDetail == null ? null : ctx_r0.orderDetail.retailer_detail.retailer_phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.orderDetail == null ? null : ctx_r0.orderDetail.retailer_detail.retailer_address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.orderDetail == null ? null : ctx_r0.orderDetail.retailer_detail.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.orderDetail == null ? null : ctx_r0.orderDetail.retailer_detail.order_date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.orderDetail == null ? null : ctx_r0.orderDetail.retailer_detail.employee_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.orderDetail == null ? null : ctx_r0.orderDetail.order_detail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](97, 10, ctx_r0.orderDetail == null ? null : ctx_r0.orderDetail.totalDiscount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](113, 12, ctx_r0.orderDetail == null ? null : ctx_r0.orderDetail.retailer_detail == null ? null : ctx_r0.orderDetail.retailer_detail.order_total, "1.2-2"));
} }
function OrdersListDetailsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrdersListDetailsComponent_div_11_table_27_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersListDetailsComponent_div_11_table_27_tr_16_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const order_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r9.showDetails = true; return ctx_r9.openDetailsModal(order_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r8.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r8.retailer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", order_r8.channel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r8.emp_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 5, order_r8.order_total, "1.2-2"));
} }
function OrdersListDetailsComponent_div_11_table_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Retailer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Orders Booker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Order Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OrdersListDetailsComponent_div_11_table_27_tr_16_Template, 15, 8, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r5.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.orders);
} }
function OrdersListDetailsComponent_div_11_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrdersListDetailsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Booked Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, OrdersListDetailsComponent_div_11_table_27_Template, 17, 2, "table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, OrdersListDetailsComponent_div_11_div_28_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.orders.length || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loading);
} }
class OrdersListDetailsComponent {
    constructor(route, ordersService, toastService) {
        this.route = route;
        this.ordersService = ordersService;
        this.toastService = toastService;
        this.dtOptions = {};
        this.orders = [];
        this.orderDetail = null;
        this.date = 0;
        this.employeeId = 0;
    }
    ngOnInit() {
        this.showDetails = false;
        this.date = this.route.snapshot.params.date;
        this.employeeId = this.route.snapshot.params.employeeId;
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.getViewOrdersByEmployee();
    }
    getViewOrdersByEmployee() {
        this.loading = true;
        this.ordersService.getViewOrdersByEmployee(this.employeeId, this.date.toString()).subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.orders = res.data;
            }
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
    getViewOrderDetailById(id) {
        this.loading = true;
        this.ordersService.getViewOrderDetailById(id).subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.orderDetail = res.data;
                this.orderDetail.subTotal = this.orderDetail.order_detail.map(x => x.final_price).reduce((a, b) => a + b, 0);
                this.orderDetail.totalDiscount = this.orderDetail.order_detail
                    .map(x => (x.original_price * x.quantity) - (x.unit_price_after_individual_discount * x.quantity))
                    .reduce((a, b) => a + b, 0);
                this.showDetails = true;
            }
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
    openDetailsModal(orderId) {
        this.orderDetail = null;
        // document.body.classList.add('no-scroll');
        this.getViewOrderDetailById(orderId);
    }
    closeDetailsModal() {
        document.body.classList.remove('no-scroll');
    }
}
OrdersListDetailsComponent.ɵfac = function OrdersListDetailsComponent_Factory(t) { return new (t || OrdersListDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])); };
OrdersListDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersListDetailsComponent, selectors: [["app-order-detail-list"]], decls: 12, vars: 4, consts: [["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "overflow-y", "auto", 3, "ngClass"], ["role", "document", 1, "modal-dialog", "modal-full", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "border-0"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 2, "font-size", "30px", "outline", "none", 3, "click"], [1, "modal-body", "p-0"], [1, "container"], [1, "row"], ["class", "col-12", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "p-10", 2, "border-bottom", "solid 2px #000"], [1, "row", "m-0"], [1, "col-8", "OrderLogo"], ["src", "assets/images/sell-360.svg", "alt", ""], [1, "col-4", "ord-no"], [1, "body", 2, "padding", "15px 20px"], [1, "form-body"], [1, "row", "OrderInfo"], [1, "col-md-9"], [1, "col-md-3", "p-0"], [1, "seprator-block"], [1, "Order-Detail-table", "mt-30"], [1, "table"], [1, "order_items_body"], [4, "ngFor", "ngForOf"], [1, "border-0"], [2, "background-color", "#000", "color", "#fff"], [1, "clearfix"], [1, "row", "mt-2", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], ["routerLink", "/orders"], [1, "col-md-12"], [1, "header"], [1, "_list-total"], [1, "body"], ["datatable", "", "class", "table table-hover dt-responsive nowrap", "id", "example", "style", "width:100%", 3, "dtOptions", 4, "ngIf"], ["datatable", "", "id", "example", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions"], [1, "btn", "btn-default", "btn-line", "mb-0", 3, "click"]], template: function OrdersListDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersListDetailsComponent_Template_button_click_4_listener() { ctx.showDetails = false; return ctx.closeDetailsModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OrdersListDetailsComponent_div_9_Template, 115, 15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrdersListDetailsComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrdersListDetailsComponent_div_11_Template, 29, 3, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showDetails ? "show active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_5__["WhiteLoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]], pipes: [_shared_pipes_Decimal_pipe__WEBPACK_IMPORTED_MODULE_7__["Decimal"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".OrderLogo[_ngcontent-%COMP%]{ text-align: left; padding-left:0}\r\n.OrderLogo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ width:auto; height: 46px}\r\n.OrderInfo[_ngcontent-%COMP%]{font-size: 14px}\r\n.OrderInfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width: 105px; float:left}\r\n.Order-Detail-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border: solid 1px #333333; padding: 5px!important; font-size:12px}\r\n.Order-Detail-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border: solid 1px #333333!important; background-color: #ededed!important; color:#000; padding: 5px!important; font-size:12px}\r\n.button-list[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{font-size: 14px!important; letter-spacing: 1px}\r\n.button-list[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{padding-right:3px}\r\n.ord-no[_ngcontent-%COMP%]{padding-top:17px; font-size:14px; text-align: right}\r\n.active[_ngcontent-%COMP%] {display: block !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcmRlcnMvY29tcG9uZW50cy9vcmRlcnMtbGlzdC1kZXRhaWxzL29yZGVycy1saXN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLGdCQUFnQixFQUFFLGNBQWM7QUFDNUMsZ0JBQWdCLFVBQVUsRUFBRSxZQUFZO0FBQ3hDLFdBQVcsZUFBZTtBQUMxQixnQkFBZ0IsWUFBWSxFQUFFLFVBQVU7QUFDeEMsNkJBQTZCLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLGNBQWM7QUFDOUYsNkJBQTZCLG1DQUFtQyxFQUFFLG1DQUFtQyxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsRUFBRSxjQUFjO0FBQ3pKLDBCQUEwQix5QkFBeUIsRUFBRSxtQkFBbUI7QUFDeEUsOEJBQThCLGlCQUFpQjtBQUMvQyxRQUFRLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxpQkFBaUI7QUFDM0QsU0FBUyx5QkFBeUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3JkZXJzL2NvbXBvbmVudHMvb3JkZXJzLWxpc3QtZGV0YWlscy9vcmRlcnMtbGlzdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuT3JkZXJMb2dveyB0ZXh0LWFsaWduOiBsZWZ0OyBwYWRkaW5nLWxlZnQ6MH1cclxuLk9yZGVyTG9nbyBpbWd7IHdpZHRoOmF1dG87IGhlaWdodDogNDZweH1cdFxyXG4uT3JkZXJJbmZve2ZvbnQtc2l6ZTogMTRweH1cclxuLk9yZGVySW5mbyBzcGFue3dpZHRoOiAxMDVweDsgZmxvYXQ6bGVmdH1cclxuLk9yZGVyLURldGFpbC10YWJsZSB0YWJsZSB0ZHtib3JkZXI6IHNvbGlkIDFweCAjMzMzMzMzOyBwYWRkaW5nOiA1cHghaW1wb3J0YW50OyBmb250LXNpemU6MTJweH1cclxuLk9yZGVyLURldGFpbC10YWJsZSB0YWJsZSB0aHtib3JkZXI6IHNvbGlkIDFweCAjMzMzMzMzIWltcG9ydGFudDsgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZCFpbXBvcnRhbnQ7IGNvbG9yOiMwMDA7IHBhZGRpbmc6IDVweCFpbXBvcnRhbnQ7IGZvbnQtc2l6ZToxMnB4fVxyXG4uYnV0dG9uLWxpc3QgLmJ0bi1wcmltYXJ5e2ZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7IGxldHRlci1zcGFjaW5nOiAxcHh9XHJcbi5idXR0b24tbGlzdCAuYnRuLXByaW1hcnkgLmZhe3BhZGRpbmctcmlnaHQ6M3B4fVxyXG4ub3JkLW5ve3BhZGRpbmctdG9wOjE3cHg7IGZvbnQtc2l6ZToxNHB4OyB0ZXh0LWFsaWduOiByaWdodH1cclxuLmFjdGl2ZSB7ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersListDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-detail-list',
                templateUrl: './orders-list-details.component.html',
                styleUrls: ['./orders-list-details.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] }, { type: src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "TtjQ":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/orders/components/completed-orders/completed-orders.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CompletedOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedOrdersComponent", function() { return CompletedOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/orders", "completed-orders", 1]; };
const _c1 = function () { return ["/orders", "completed-orders", 2]; };
const _c2 = function () { return ["/orders", "completed-orders", 3]; };
const _c3 = function () { return ["/orders", "completed-orders", 4]; };
class CompletedOrdersComponent {
    constructor() {
        this.dtOptions = {};
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }
    ngOnInit() {
    }
}
CompletedOrdersComponent.ɵfac = function CompletedOrdersComponent_Factory(t) { return new (t || CompletedOrdersComponent)(); };
CompletedOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompletedOrdersComponent, selectors: [["app-completed-orders"]], decls: 79, vars: 9, consts: [[1, "container"], [1, "row", "mt-2", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "header"], [1, "_list-total"], [1, "body"], ["datatable", "", "id", "example", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions"], [1, "btn", "btn-default", "btn-line", "m-0", 3, "routerLink"]], template: function CompletedOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "145");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "February");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Rs. 15,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "January");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Rs. 15,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "June");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Rs. 15,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "March");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Rs. 15,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3JkZXJzL2NvbXBvbmVudHMvY29tcGxldGVkLW9yZGVycy9jb21wbGV0ZWQtb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompletedOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-completed-orders',
                templateUrl: 'completed-orders.component.html',
                styleUrls: ['./completed-orders.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WQuE":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/orders/components/execution-list/execution-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OrderExecutionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderExecutionListComponent", function() { return OrderExecutionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/api-urls.constants */ "oo4J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/orders.service */ "5TcN");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/toaster.service */ "ZgVV");
/* harmony import */ var src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/storage.service */ "UYTb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/loader-white/loader-white.component */ "uoBr");











const _c0 = function (a2, a3, a4) { return ["/orders", "execute-order", a2, a3, a4]; };
function OrderExecutionListComponent_table_46_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderExecutionListComponent_table_46_tr_16_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const order_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.loadBookingSheet(order_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "BS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderExecutionListComponent_table_46_tr_16_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const order_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.loadLoadSheet(order_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "LS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderExecutionListComponent_table_46_tr_16_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const order_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.loadBills(order_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Bills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderExecutionListComponent_table_46_tr_16_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const order_r3 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.selectedLoadId = order_r3.load_id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Revert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Execute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r3.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r3.sales_man);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", order_r3.emp_names, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r3.total_orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 6, order_r3.order_total, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c0, order_r3.sales_man_id, order_r3.date, order_r3.load_id));
} }
function OrderExecutionListComponent_table_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sales Man");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order Bookers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OrderExecutionListComponent_table_46_tr_16_Template, 23, 13, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r0.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.ordersList);
} }
function OrderExecutionListComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class OrderExecutionListComponent {
    constructor(router, orderService, toastServicer, storageService) {
        this.router = router;
        this.orderService = orderService;
        this.toastServicer = toastServicer;
        this.storageService = storageService;
        this.dtOptions = {};
        this.ordersList = [];
        this.bookingSheetUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiDomain}${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].BOOKING_SHEET_PDF}`;
        this.distributorId = storageService.getItem('distributor').id;
    }
    ngOnInit() {
        this.showExecuteOrder = false;
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.getExecutionList();
    }
    getExecutionList() {
        this.loading = true;
        this.orderService.getExecutionList().subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.ordersList = res.data;
            }
            else {
                console.log('Error when fetching orders :>> ', res.message);
                const toast = { type: 'error', message: 'Cannot fetch orders list, please try again later!', title: 'Error:' };
                this.toastServicer.showToaster(toast);
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Cannot fetch orders list for execution :>> ', error.messge);
                const toast = { type: 'error', message: 'Cannot fetch orders list, please try again later!', title: 'Error:' };
                this.toastServicer.showToaster(toast);
            }
        });
    }
    loadBookingSheet(order) {
        const sheetUrl = `${this.bookingSheetUrl}?emp=${order.sales_man_id}&date=${order.date}&loadId=${order.load_id}`;
        window.open(sheetUrl);
    }
    loadLoadSheet(order) {
        const sheetUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiDomain}${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].LS_PDF}/${order.load_id}/${order.sales_man_id}/${order.date}`;
        window.open(sheetUrl);
    }
    loadBills(order) {
        const billsUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiDomain}${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].BILLS}?type=bill&emp=${order.sales_man_id}&date=${order.date}&dist_id=${this.distributorId}&size=A4&status=processed&loadId=${order.load_id}`;
        window.open(billsUrl);
    }
    revertOrder() {
        this.loading = true;
        document.getElementById('close-revert').click();
        this.orderService.revertOrder('load', this.selectedLoadId).subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.toastServicer.showToaster({
                    title: 'Revet Success:',
                    message: 'The order reverted successfully!',
                    type: 'success'
                });
                this.router.navigateByUrl('/orders');
            }
            else {
                this.toastServicer.showToaster({
                    title: 'Revet Error:',
                    message: 'The order cannot be reverted at the momnent, please try again later.',
                    type: 'error'
                });
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                this.toastServicer.showToaster({
                    title: 'Revet Error:',
                    message: 'The order cannot be reverted at the momnent, please try again later.',
                    type: 'error'
                });
            }
        });
    }
}
OrderExecutionListComponent.ɵfac = function OrderExecutionListComponent_Factory(t) { return new (t || OrderExecutionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"])); };
OrderExecutionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderExecutionListComponent, selectors: [["app-orderexecution-list"]], decls: 48, vars: 3, consts: [["id", "order-revert", "tabindex", "-1", "role", "dialog", "aria-labelledby", "orderLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "top-borderRed"], [1, "modal-header"], ["id", "orderLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-md-12"], [1, "modal-footer", "border-0"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "close-revert", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-cancel"], [1, "container"], [1, "row", "mt-2", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], ["routerLink", "/orders"], [1, "row"], [1, "card"], [1, "header"], [1, "_list-total"], [1, "body"], ["datatable", "", "class", "table table-hover dt-responsive nowrap", "id", "example", "style", "width:100%", 3, "dtOptions", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], ["datatable", "", "id", "example", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-default", "mb-0", 3, "click"], ["data-target", "#order-revert", "data-toggle", "modal", 1, "btn", "btn-default", "red-bg", "mb-0", 3, "click"], [1, "btn", "btn-default", "mb-0", 3, "routerLink"], [1, "col-12"]], template: function OrderExecutionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel Order ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Are you sure you want to revert the order?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderExecutionListComponent_Template_button_click_15_listener() { return ctx.revertOrder(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ol", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Execute ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, OrderExecutionListComponent_table_46_Template, 17, 2, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, OrderExecutionListComponent_div_47_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ordersList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_9__["WhiteLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: [".active[_ngcontent-%COMP%] { display: block; overflow-y: auto; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcmRlcnMvY29tcG9uZW50cy9leGVjdXRpb24tbGlzdC9leGVjdXRpb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsY0FBYyxFQUFFLGdCQUFnQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vcmRlcnMvY29tcG9uZW50cy9leGVjdXRpb24tbGlzdC9leGVjdXRpb24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7IGRpc3BsYXk6IGJsb2NrOyBvdmVyZmxvdy15OiBhdXRvOyB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderExecutionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-orderexecution-list',
                templateUrl: 'execution-list.component.html',
                styleUrls: ['./execution-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"] }, { type: _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }, { type: src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "fAJX":
/*!*************************************************!*\
  !*** ./src/app/modules/orders/orders.module.ts ***!
  \*************************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-routing.module */ "wgom");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-click-outside */ "qew9");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orders.component */ "8v8s");
/* harmony import */ var _components_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/orders-list/orders-list.component */ "ptgJ");
/* harmony import */ var _components_orders_list_details_orders_list_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/orders-list-details/orders-list-details.component */ "Hyv+");
/* harmony import */ var _components_create_dispatched_create_dispatched_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/create-dispatched/create-dispatched.component */ "pmTo");
/* harmony import */ var _components_execution_list_execution_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/execution-list/execution-list.component */ "WQuE");
/* harmony import */ var _components_execute_order_execute_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/execute-order/execute-order.component */ "FKeZ");
/* harmony import */ var _components_completed_orders_completed_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/completed-orders/completed-orders.component */ "TtjQ");
/* harmony import */ var _components_counter_sale_counter_sale_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/counter-sale/counter-sale.component */ "Hn+O");
/* harmony import */ var _components_booking_vs_execution_booking_vs_execution_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/booking-vs-execution/booking-vs-execution.component */ "F35G");
/* harmony import */ var _components_completed_orders_detail_completed_orders_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/completed-orders-detail/completed-orders-detail.component */ "sKyn");
/* harmony import */ var _components_order_dispatched_order_dispatched_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/order-dispatched/order-dispatched.component */ "/5vP");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/orders.service */ "5TcN");
/* harmony import */ var _services_dispatch_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/dispatch.service */ "AH8O");
/* harmony import */ var _services_execution_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/execution.service */ "iv1J");
/* harmony import */ var _services_spot_sale_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/spot-sale.service */ "uJg1");
























class OrderModule {
}
OrderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrderModule });
OrderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrderModule_Factory(t) { return new (t || OrderModule)(); }, providers: [
        _services_dispatch_service__WEBPACK_IMPORTED_MODULE_20__["OrderDispatchService"],
        _services_execution_service__WEBPACK_IMPORTED_MODULE_21__["ExecutionService"],
        _services_spot_sale_service__WEBPACK_IMPORTED_MODULE_22__["SpotSaleService"],
        _services_orders_service__WEBPACK_IMPORTED_MODULE_19__["OrdersService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderModule, { declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_8__["OrdersComponent"],
        _components_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_9__["OrdersListComponent"],
        _components_orders_list_details_orders_list_details_component__WEBPACK_IMPORTED_MODULE_10__["OrdersListDetailsComponent"],
        _components_create_dispatched_create_dispatched_component__WEBPACK_IMPORTED_MODULE_11__["CreateDispatchedComponent"],
        _components_execution_list_execution_list_component__WEBPACK_IMPORTED_MODULE_12__["OrderExecutionListComponent"],
        _components_order_dispatched_order_dispatched_component__WEBPACK_IMPORTED_MODULE_18__["OrderDispatchedComponent"],
        _components_execute_order_execute_order_component__WEBPACK_IMPORTED_MODULE_13__["ExecuteOrderComponent"],
        _components_completed_orders_completed_orders_component__WEBPACK_IMPORTED_MODULE_14__["CompletedOrdersComponent"],
        _components_counter_sale_counter_sale_component__WEBPACK_IMPORTED_MODULE_15__["CounterSaleComponent"],
        _components_booking_vs_execution_booking_vs_execution_component__WEBPACK_IMPORTED_MODULE_16__["BookingVsExecutionComponent"],
        _components_completed_orders_detail_completed_orders_detail_component__WEBPACK_IMPORTED_MODULE_17__["CompletedOrdersDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                ],
                declarations: [
                    _orders_component__WEBPACK_IMPORTED_MODULE_8__["OrdersComponent"],
                    _components_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_9__["OrdersListComponent"],
                    _components_orders_list_details_orders_list_details_component__WEBPACK_IMPORTED_MODULE_10__["OrdersListDetailsComponent"],
                    _components_create_dispatched_create_dispatched_component__WEBPACK_IMPORTED_MODULE_11__["CreateDispatchedComponent"],
                    _components_execution_list_execution_list_component__WEBPACK_IMPORTED_MODULE_12__["OrderExecutionListComponent"],
                    _components_order_dispatched_order_dispatched_component__WEBPACK_IMPORTED_MODULE_18__["OrderDispatchedComponent"],
                    _components_execute_order_execute_order_component__WEBPACK_IMPORTED_MODULE_13__["ExecuteOrderComponent"],
                    _components_completed_orders_completed_orders_component__WEBPACK_IMPORTED_MODULE_14__["CompletedOrdersComponent"],
                    _components_counter_sale_counter_sale_component__WEBPACK_IMPORTED_MODULE_15__["CounterSaleComponent"],
                    _components_booking_vs_execution_booking_vs_execution_component__WEBPACK_IMPORTED_MODULE_16__["BookingVsExecutionComponent"],
                    _components_completed_orders_detail_completed_orders_detail_component__WEBPACK_IMPORTED_MODULE_17__["CompletedOrdersDetailComponent"],
                ],
                providers: [
                    _services_dispatch_service__WEBPACK_IMPORTED_MODULE_20__["OrderDispatchService"],
                    _services_execution_service__WEBPACK_IMPORTED_MODULE_21__["ExecutionService"],
                    _services_spot_sale_service__WEBPACK_IMPORTED_MODULE_22__["SpotSaleService"],
                    _services_orders_service__WEBPACK_IMPORTED_MODULE_19__["OrdersService"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "iv1J":
/*!**************************************************************!*\
  !*** ./src/app/modules/orders/services/execution.service.ts ***!
  \**************************************************************/
/*! exports provided: ExecutionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutionService", function() { return ExecutionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ExecutionService {
    constructor() { }
    setOrderPayloadItems(orderDetails, selectedRetailer) {
        const payLoadItems = orderDetails.items.map(item => {
            var _a, _b, _c, _d, _e;
            const payloadItem = {
                quantity_returned: item.dispatch_qty - item.stockQty > -1 ? item.dispatch_qty - item.stockQty : 0,
                executed_qty: +item.stockQty,
                id: item.id || 0,
                employee_id: orderDetails.employee_id,
                pref_id: item.pref_id,
                item_quantity_booker: item.item_quantity_booker,
                item_quantity_updated: item.item_quantity_updated || 0,
                original_price: item.item_trade_price,
                scheme_discount: item.scheme_discount,
                unit_price_after_scheme_discount: item.unit_price_after_scheme_discount,
                merchant_discount: item.trade_discount,
                merchant_discount_pkr: item.trade_discount_pkr,
                unit_price_after_merchant_discount: item.unit_price_after_merchant_discount,
                special_discount: item.special_discount,
                unit_price_after_special_discount: item.unit_price_after_special_discount,
                booker_discount: item.extra_discount || 0,
                unit_price_after_individual_discount: item.unit_price_after_individual_discount || item.price,
                unit_id: item.unit_id,
                unit_name: item.unit_name,
                brand_id: item.brand_id,
                item_id: item.item_id,
                item_name: item.item_name,
                scheme_id: ((_a = item.selectedScheme) === null || _a === void 0 ? void 0 : _a.id) || 0,
                scheme_min_quantity: ((_b = item.selectedScheme) === null || _b === void 0 ? void 0 : _b.min_qty) || 0,
                scheme_quantity_free: ((_c = item.selectedScheme) === null || _c === void 0 ? void 0 : _c.quantity_free) || 0,
                scheme_rule: ((_d = item.selectedScheme) === null || _d === void 0 ? void 0 : _d.rule_name) || '',
                gift_value: item.gift_value || 0,
                parent_pref_id: item.child || item.parent_pref_id,
                parent_unit_id: item.parent_unit_id,
                parent_brand_id: item.brand_id,
                parent_tp: item.parent_trade_price || item.parent_tp,
                parent_qty_sold: item.parent_qty_sold,
                parent_value_sold: item.net_amount,
                final_price: item.net_amount,
                campaign_id: ((_e = item.selectedScheme) === null || _e === void 0 ? void 0 : _e.id) || 0,
                item_status: item.is_active || item.item_status,
                dispatch_status: 0,
                dispatch_qty: +item.dispatch_qty,
                dispatch_amount: item.net_amount,
                reasoning: '',
                distributor_id: orderDetails.distributor_id,
                division_id: selectedRetailer.division_id || 0,
                region_id: orderDetails.region_id,
                area_id: orderDetails.area_id,
                assigned_route_id: orderDetails.assigned_route_id,
                territory_id: orderDetails.territory_id,
                booked_order_value: item.booked_order_value || 0,
                booked_total_qty: item.booked_total_qty || 0,
                is_deleted: item.isDeleted,
                quantity: +item.stockQty,
                gross_sale_amount: item.original_amount,
                total_retail_price: item.item_retail_price * item.stockQty,
                tax_class_id: item.tax_class_id,
                tax_in_percentage: item.tax_class_amount,
                tax_in_value: item.tax_amount_value || 0,
                total_tax_amount: item.tax_amount_pkr || 0,
                total_amount_after_tax: item.net_amount,
                total_discount: item.scheme_discount * +item.stockQty +
                    item.trade_discount_pkr * +item.stockQty + (+item.stockQty * item.special_discount) + item.extra_discount_pkr,
                order_id: orderDetails.id
            };
            return payloadItem;
        });
        return payLoadItems;
    }
    setOrderPayloadReturnedItems(orderDetails, selectedRetailer) {
        const payLoadReturnedItems = orderDetails.returned_items.map(item => {
            const payloadItem = {
                quantity_returned: +item.stockQty,
                executed_qty: -item.stockQty,
                id: item.id || 0,
                employee_id: orderDetails.employee_id,
                pref_id: item.pref_id,
                item_quantity_booker: 0,
                item_quantity_updated: 0,
                original_price: item.item_trade_price,
                scheme_discount: 0,
                unit_price_after_scheme_discount: item.unit_price_after_scheme_discount,
                merchant_discount: 0,
                merchant_discount_pkr: 0,
                unit_price_after_merchant_discount: item.unit_price_after_merchant_discount,
                special_discount: 0,
                unit_price_after_special_discount: item.unit_price_after_special_discount,
                booker_discount: item.extra_discount || 0,
                unit_price_after_individual_discount: item.unit_price_after_individual_discount || item.unit_price_after_special_discount,
                unit_id: item.unit_id,
                unit_name: item.unit_name,
                brand_id: item.brand_id,
                item_id: item.item_id,
                item_name: item.item_name,
                scheme_id: 0,
                scheme_min_quantity: 0,
                scheme_quantity_free: 0,
                return_type: item.returnType || item.return_type,
                scheme_rule: '',
                gift_value: 0,
                parent_pref_id: item.child || item.parent_pref_id,
                parent_unit_id: item.parent_unit_id,
                parent_brand_id: item.brand_id,
                parent_tp: item.parent_trade_price || item.parent_tp,
                parent_qty_sold: 0,
                parent_value_sold: item.net_amount,
                final_price: item.net_amount,
                campaign_id: 0,
                item_status: item.is_active || item.item_status,
                dispatch_status: 0,
                dispatch_qty: 0,
                dispatch_amount: item.net_amount,
                reasoning: '',
                distributor_id: orderDetails.distributor_id,
                division_id: selectedRetailer.division_id || 0,
                region_id: orderDetails.region_id,
                area_id: orderDetails.area_id,
                assigned_route_id: orderDetails.assigned_route_id,
                territory_id: orderDetails.territory_id,
                booked_order_value: 0,
                booked_total_qty: 0,
                is_deleted: item.isDeleted,
                quantity: 0,
                gross_sale_amount: item.original_amount,
                total_retail_price: item.total_retail_price,
                tax_class_id: 0,
                tax_in_percentage: 0,
                tax_in_value: 0,
                total_tax_amount: 0,
                total_amount_after_tax: item.net_amount,
                total_discount: item.extra_discount ? item.extra_discount * +item.stockQty : 0,
                order_id: orderDetails.id
            };
            return payloadItem;
        });
        return payLoadReturnedItems;
    }
}
ExecutionService.ɵfac = function ExecutionService_Factory(t) { return new (t || ExecutionService)(); };
ExecutionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExecutionService, factory: ExecutionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExecutionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pmTo":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/orders/components/create-dispatched/create-dispatched.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CreateDispatchedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDispatchedComponent", function() { return CreateDispatchedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/api-urls.constants */ "oo4J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/toaster.service */ "ZgVV");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/orders.service */ "5TcN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/loader-white/loader-white.component */ "uoBr");










const _c0 = function (a2, a3, a4) { return ["/orders", "dispatch", a2, a3, a4]; };
function CreateDispatchedComponent_table_39_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDispatchedComponent_table_39_tr_16_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const order_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.loadBookingSheet(order_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "BS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Dispatch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDispatchedComponent_table_39_tr_16_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const order_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.selectedAssignmentId = order_r3.assignment_id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Revert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r3.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, order_r3.sales_man));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", order_r3.emp_names || order_r3.emp_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r3.total_orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 8, order_r3.order_total, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](11, _c0, order_r3.assignment_id, order_r3.sales_man_id, order_r3.date));
} }
function CreateDispatchedComponent_table_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sales Man");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order Bookers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Booked Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateDispatchedComponent_table_39_tr_16_Template, 20, 15, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r0.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.ordersList);
} }
function CreateDispatchedComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreateDispatchedComponent {
    constructor(router, toastService, orderService) {
        this.router = router;
        this.toastService = toastService;
        this.orderService = orderService;
        this.dtOptions = {};
        this.ordersList = [];
        this.bookingSheetUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiDomain}${src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].BOOKING_SHEET_PDF}`;
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.getDispatchOrderListing();
    }
    getDispatchOrderListing() {
        this.loading = true;
        this.orderService.getDispatchOrdersListing().subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.ordersList = res.data;
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                const toast = {
                    type: 'error',
                    message: 'Dispatch Order list cannot be fetched at the moment! Please try again',
                    title: 'Error:'
                };
                this.toastService.showToaster(toast);
            }
        });
    }
    revertOrder() {
        this.loading = true;
        document.getElementById('close-revert').click();
        this.orderService.revertOrder('assignment', this.selectedAssignmentId).subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.toastService.showToaster({
                    title: 'Revet Success:',
                    message: 'The order reverted successfully!',
                    type: 'success'
                });
                this.router.navigateByUrl('/orders');
            }
            else {
                this.toastService.showToaster({
                    title: 'Revet Error:',
                    message: 'The order cannot be reverted at the momnent, please try again later.',
                    type: 'error'
                });
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    title: 'Revet Error:',
                    message: 'The order cannot be reverted at the momnent, please try again later.',
                    type: 'error'
                });
            }
        });
    }
    loadBookingSheet(order) {
        const sheetUrl = `${this.bookingSheetUrl}?emp=${order.sales_man_id}&date=${order.date}&assignmentId=${order.assignment_id}`;
        window.open(sheetUrl);
    }
}
CreateDispatchedComponent.ɵfac = function CreateDispatchedComponent_Factory(t) { return new (t || CreateDispatchedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"])); };
CreateDispatchedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateDispatchedComponent, selectors: [["app-create-dispatched"]], decls: 41, vars: 2, consts: [["id", "order-revert", "tabindex", "-1", "role", "dialog", "aria-labelledby", "orderLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "top-borderRed"], [1, "modal-header"], ["id", "orderLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-md-12"], [1, "modal-footer", "border-0"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "close-revert", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-cancel"], [1, "container"], [1, "row", "mt-2", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], ["routerLink", "/orders"], [1, "row"], [1, "card"], [1, "body"], ["datatable", "", "class", "table table-hover dt-responsive nowrap", "id", "example", "style", "width:100%", 3, "dtOptions", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], ["datatable", "", "id", "example", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-default", "mb-0", 3, "click"], [1, "btn", "btn-default", "btn-line", "mb-0", 3, "routerLink"], ["data-toggle", "modal", "data-target", "#order-revert", 1, "btn", "btn-default", "red-bg", "mb-0", 3, "click"]], template: function CreateDispatchedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel Order ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Are you sure you want to revert the order?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDispatchedComponent_Template_button_click_15_listener() { return ctx.revertOrder(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Dispatch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ol", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CreateDispatchedComponent_table_39_Template, 17, 2, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CreateDispatchedComponent_div_40_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_8__["WhiteLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3JkZXJzL2NvbXBvbmVudHMvY3JlYXRlLWRpc3BhdGNoZWQvY3JlYXRlLWRpc3BhdGNoZWQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateDispatchedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-dispatched',
                templateUrl: 'create-dispatched.component.html',
                styleUrls: ['./create-dispatched.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }, { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] }]; }, null); })();


/***/ }),

/***/ "ptgJ":
/*!********************************************************************************!*\
  !*** ./src/app/modules/orders/components/orders-list/orders-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: OrdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersListComponent", function() { return OrdersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services */ "NJqk");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/orders.service */ "5TcN");
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toaster.service */ "ZgVV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/loader-white/loader-white.component */ "uoBr");











function OrdersListComponent_ng_option_249_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderBooker_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", orderBooker_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", orderBooker_r6.name, " ");
} }
function OrdersListComponent_tr_267_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersListComponent_tr_267_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const order_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r9.showDetailsPopup = true; return ctx_r9.openDetailsModal(order_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r7.emp_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r7.retailer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 5, order_r7.order_total, "1.2-2"));
} }
function OrdersListComponent_ng_option_274_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderBooker_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", orderBooker_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", orderBooker_r11.name, " ");
} }
function OrdersListComponent_table_281_tr_14_ng_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const saleman_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", saleman_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](saleman_r16.name);
} }
const _c0 = function (a1, a2) { return ["/orders/order-list-details", a1, a2]; };
function OrdersListComponent_table_281_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ng-select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OrdersListComponent_table_281_tr_14_Template_ng_select_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const order_r13 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.addOrderToAssignment(order_r13); })("ngModelChange", function OrdersListComponent_table_281_tr_14_Template_ng_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const order_r13 = ctx.$implicit; return order_r13.selectedSaleman = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OrdersListComponent_table_281_tr_14_ng_option_9_Template, 2, 2, "ng-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r13.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r13.emp_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r13.total_orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "select-saleman-", i_r14, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "select-saleman-", i_r14, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false)("ngModel", order_r13.selectedSaleman);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.salesMen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, order_r13.employee_id, order_r13.date));
} }
function OrdersListComponent_table_281_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order Booker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Total Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Assign To Salesman");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrdersListComponent_table_281_tr_14_Template, 13, 12, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r3.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.orders);
} }
function OrdersListComponent_div_282_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrdersListComponent_div_283_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersListComponent_div_283_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.assignSaleman(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.selectedOrders.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.selectedOrders.length === 0 ? "Select Salesman" : "Assign Salesman");
} }
class OrdersListComponent {
    constructor(generalDataService, ordersService, toastService) {
        this.generalDataService = generalDataService;
        this.ordersService = ordersService;
        this.toastService = toastService;
        this.orderBookers = [];
        this.salesMen = [];
        this.orders = [];
        this.dtOptions = {};
        this.selectedOrders = [];
    }
    ngOnInit() {
        this.byOrderBooker = true;
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.getAllSalesMen();
        this.getNewOrders();
    }
    getAllSalesMen() {
        this.generalDataService.getAllSalesMen().subscribe(res => {
            if (res.status === 200) {
                this.salesMen = res.data;
            }
        }, error => {
            if (error.status !== 401 && error.status !== 1) {
                this.toastService.showToaster({
                    title: 'Error:',
                    message: 'Salesmen not fetched, try again later.',
                    type: 'error'
                });
            }
        });
    }
    getNewOrders() {
        this.loading = true;
        this.ordersService.getNewOrders().subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.orders = res.data;
            }
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
    addOrderToAssignment(order) {
        this.selectedOrders = this.selectedOrders.filter(odr => odr.id !== order.id);
        const assignment = {
            sales_man: order.selectedSaleman.id,
            employee_id: order.employee_id,
            id: order.id,
            date: order.date
        };
        this.selectedOrders.push(assignment);
    }
    assignSaleman() {
        if (this.selectedOrders.length) {
            const assigned = {
                salesman: this.selectedOrders.map(x => {
                    const { sales_man, employee_id, date } = x;
                    return { sales_man, employee_id, date };
                })
            };
            this.loading = true;
            this.ordersService.assignSalesMan(assigned).subscribe(res => {
                if (res.status) {
                    this.toastService.showToaster({
                        title: 'Salesman Assigned:',
                        message: 'Salesmen assigned to selected order.',
                        type: 'success'
                    });
                    this.selectedOrders.forEach(order => {
                        this.orders = this.orders.filter(ordr => ordr.id !== order.id);
                    });
                    this.loading = false;
                    this.selectedOrders = [];
                }
            }, error => {
                this.loading = false;
                if (error.status !== 401 && error.status !== 1) {
                    this.toastService.showToaster({
                        title: 'Error:',
                        message: 'Salesmen assignment is not working at the moment, try again later.',
                        type: 'error'
                    });
                }
                scrollTo(0, 0);
            });
        }
        else {
            this.toastService.showToaster({
                title: 'Error:',
                message: 'Please select saleman to assign orders!',
                type: 'error'
            });
        }
    }
    openDetailsModal(order) {
        document.body.classList.add('no-scroll');
    }
    closeDetailsModal() {
        document.body.classList.remove('no-scroll');
    }
}
OrdersListComponent.ɵfac = function OrdersListComponent_Factory(t) { return new (t || OrdersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__["GeneralDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])); };
OrdersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersListComponent, selectors: [["app-orders-list"]], decls: 284, vars: 14, consts: [["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 3, "ngClass"], ["role", "document", 1, "modal-dialog", "modal-full", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "border-0"], ["type", "button", "aria-label", "Close", 1, "close", 2, "font-size", "30px", "outline", "none", 3, "click"], [1, "modal-body", "p-0"], [1, "container"], [1, "row"], [1, "col-12"], [1, "card"], [1, "p-10", 2, "border-bottom", "solid 2px #000"], [1, "row", "m-0"], [1, "col-8", "OrderLogo"], ["src", "assets/images/sell-360.svg", "alt", ""], [1, "col-4", "ord-no"], [1, "body", 2, "padding", "15px 20px"], [1, "form-body"], [1, "row", "OrderInfo"], [1, "col-md-9"], [1, "col-md-3", "p-0"], [1, "seprator-block"], [1, "Order-Detail-table", "mt-30"], [1, "table"], [1, "order_items_body"], [1, "border-0"], [2, "background-color", "#000", "color", "#fff"], [1, "clearfix"], [1, "modal-footer", "button-list"], ["type", "button", 1, "btn", "btn-primary", "btn-outline"], [1, "fa", "fa-file-pdf"], [1, "fa", "fa-envelope"], [1, "fa", "fa-print"], [1, "row", "mt-2", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], ["routerLink", "/orders"], [1, "col-lg-12"], [1, "header-tabs", "mb-0", 2, "min-height", "47px"], [1, "col-auto"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "ProcessedOrder-tab", "data-toggle", "tab", "role", "tab", "aria-controls", "ProcessedOrder", "aria-selected", "false", 1, "nav-item", "nav-link", 3, "ngClass", "click"], [1, "col-md-12"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "NewOrder", "role", "tabpanel", "aria-labelledby", "NewOrder-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "Product-Filter", "border-0"], [1, "col-auto", "pr-0"], [1, "CL-Product", 2, "width", "180px!important"], ["type", "text", "id", "datepicker", "placeholder", "Select Date", 1, "form-control", "pl-15"], [1, "col", "pl-0"], [1, "_cust_filter"], [1, "form-s2"], ["placeholder", "Select Order Booker", "name", "order-booker", "id", "order-booker", 1, "form-control", "formselect", 2, "width", "100%!important", 3, "multiple", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "card", "p-15"], [1, "col-12", "p-0", 2, "min-height", "360px"], ["datatable", "", "id", "example", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions"], [4, "ngFor", "ngForOf"], [1, "col-12", "bottom-gray"], [1, "row", "justify-content-end"], [1, "_cust_filter", "m-0"], ["placeholder", "Select Salesman", "name", "select-saleman", "id", "select-saleman", 1, "form-control", "formselect", 2, "width", "100%!important", 3, "ngModel", "ngModelChange"], [1, "col-auto", "pl-0"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "ProcessedOrder", "role", "tabpanel", "aria-labelledby", "ProcessedOrder-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "card", "p-15", "mt-15"], ["datatable", "", "class", "table table-hover dt-responsive nowrap", "id", "example2", "style", "width:100%", 3, "dtOptions", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], ["class", "col-12 bottom-gray", 4, "ngIf"], [3, "value"], [1, "custom-control", "custom-checkbox", "cus-che-table"], ["type", "checkbox", "name", "", "value", "", 1, "custom-control-input", 3, "id"], [1, "custom-control-label", 3, "for"], [1, "btn", "btn-default", "btn-line", "mb-0", 3, "click"], ["datatable", "", "id", "example2", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions"], ["placeholder", "Select Salesman", 1, "formselect", 2, "width", "95%!important", 3, "name", "multiple", "ngModel", "id", "change", "ngModelChange"], [1, "btn", "btn-default", "btn-line", "mb-0", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function OrdersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersListComponent_Template_button_click_4_listener() { ctx.showDetailsPopup = false; return ctx.closeDetailsModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Order # ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "05485");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Retailer Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Chohan Store Township");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Phone No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "02222222221");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Location: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Madina Market Township, Lahore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Awaiting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Booking Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "12/04/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Employee: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Asad Ali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "CTN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "BOX/PCS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "T.P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "GR Amt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "T.O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "T.Disc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "SPC.Disc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Net.Amt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tbody", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "5261");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "AasPas R5 (Chocolate BTNT) (24x36)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "103.25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "103.25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "100.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "5259");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "AasPas Rs2 (chocolate WO BTNT)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "82.61");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "82.61");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "75.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "5258");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "AasPas Rs5 (Sweet Sonf) (24x24)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "103.26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "929.34");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "900.02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Subtotal PKR.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "1115.20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Discount PKR.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "-40.18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Total PKR.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "1075.02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " Save PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Send Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "ol", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersListComponent_Template_a_click_234_listener() { return ctx.byOrderBooker = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Assign By Order Booker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "ng-select", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrdersListComponent_Template_ng_select_ngModelChange_248_listener($event) { return ctx.selectedOrderBooker = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](249, OrdersListComponent_ng_option_249_Template, 2, 2, "ng-option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "table", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Retailer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Order Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](267, OrdersListComponent_tr_267_Template, 15, 8, "tr", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "ng-select", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrdersListComponent_Template_ng_select_ngModelChange_273_listener($event) { return ctx.selectedOrderBooker = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](274, OrdersListComponent_ng_option_274_Template, 2, 2, "ng-option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Assign Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](281, OrdersListComponent_table_281_Template, 15, 2, "table", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](282, OrdersListComponent_div_282_Template, 2, 0, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](283, OrdersListComponent_div_283_Template, 5, 2, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showDetailsPopup ? "show active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.byOrderBooker === true ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.byOrderBooker === false ? "active show" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false)("ngModel", ctx.selectedOrderBooker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderBookers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedOrderBooker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderBookers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.byOrderBooker === true ? "active show" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["ɵr"], _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_9__["WhiteLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".OrderLogo {text-align: left;padding-left: 0}\r\n.OrderLogo img {width: auto;height: 46px}\r\n._cust_filter {padding-left: 0 !important;padding-top: 0 !important;}\r\n._cust_filter .form-s2 .ng-select {padding: 0 !important;height: 30px !important;}\r\n._cust_filter .form-s2 .ng-select .ng-select-container {width: 100%; font-size: 14px;border: none;border-radius: 0;min-height: 30px !important;height: 30px !important;}\r\n.nav-item {cursor: pointer;text-transform: capitalize !important;}\r\n.CL-Product {padding-top: 0 !important;margin-left: 0 !important;}\r\n.OrderInfo {font-size: 14px}\r\n.dataTable .btn-default, .smBTN {color: #fff; }\r\n.OrderInfo span {width: 105px;float: left}\r\n.Order-Detail-table table td {border: solid 1px #333333;padding: 5px!important;font-size: 12px}\r\n.Order-Detail-table table th {border: solid 1px #333333!important;background-color: #ededed!important;color: #000;padding: 5px!important;font-size: 12px}\r\n.button-list .btn-primary {font-size: 14px!important;letter-spacing: 1px}\r\n.button-list .btn-primary .fa {padding-right: 3px}\r\n.ord-no {padding-top: 17px;font-size: 14px;text-align: right}\r\n.table .select2-container--default .select2-selection--single {border-radius: 0;border-color: #dddddd;}\r\n.table .select2-container--default .select2-selection--single .select2-selection__rendered, .select2-container .select2-selection--single {height: 26px;}\r\n.table .select2-container--default .select2-selection--single .select2-selection__arrow {height: 24px;}\r\n.cus-che-table .custom-control-label::before, .cus-che-table .custom-control-label::after {top: -7px;left: 0}\r\n.cus-che-table {padding: 0;margin: 0;width: 22px}\r\n.btn-primary {padding-top: 4px;padding-bottom: 4px;letter-spacing: 1px}\r\n.bottom-gray {background-color: #f6f6f6; padding: 10px; margin-top: 20px;}\r\n.active { display: block;}\r\n#example2 .ng-select .ng-select-container {width: 100%;font-size: 14px;border-radius: 0;min-height: 25px !important;height: 25px !important;}\r\n#example2 .ng-select .ng-select-container div.ng-input { top: 0 !important; }\r\n.ng-select .ng-clear {display: none !important;}\r\n.Product-Filter {\r\n    background-color: #f3f2f2;\r\n    padding: 15px 15px 0px 15px;\r\n    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\r\n    margin-bottom: 15px;\r\n    border-bottom: solid 2px #0038ba\r\n}\r\n.Product-Filter .nav-link {\r\n    padding: 6px 8px 0px 8px;\r\n    cursor: pointer;\r\n}\r\n.Product-Filter .nav {\r\n    width: 74px;\r\n    float: right\r\n}\r\n.Product-Filter .nav .fa {\r\n    color: #a6a5a5;\r\n    font-size: 20px\r\n}\r\n.Product-Filter .active .fa {\r\n    color: #0038ba\r\n}\r\n.CL-Product {\r\n    width: 230px;\r\n    position: relative;\r\n    float: left;\r\n    padding-right: 15px\r\n}\r\n.CL-Product input {\r\n    height: 32px;\r\n    border: solid 1px #dedede;\r\n    box-shadow: none;\r\n    padding-left: 30px;\r\n    font-size: 13px;\r\n    letter-spacing: 1px\r\n}\r\n._cust_filter .select2-container .select2-selection--single {\r\n    background-color: #fff;\r\n    border-color: #e4e4e4;\r\n    font-size: 14px;\r\n    border-radius: 0px;\r\n    height: 32px;\r\n}\r\n._cust_filter .select2-container--default .select2-selection--single .select2-selection__rendered {\r\n    line-height: 32px;\r\n}\r\n.Product-Filter .btn-primary {\r\n    color: #fff !important;\r\n    cursor: pointer;\r\n    float: left;\r\n    margin-left: 15px;\r\n    padding-top: 4px;\r\n    padding-bottom: 4px\r\n}\r\n.CL-Product .fa {\r\n    position: absolute;\r\n    top: 8px;\r\n    left: 8px;\r\n    color: #b5b5b5\r\n}\r\n._cust_filter {\r\n    width: 170px;\r\n    float: left;\r\n    margin-bottom: 15px\r\n}\r\n._cust_filter select {\r\n    border-radius: 0;\r\n    height: 32px;\r\n    border: solid 1px #dedede\r\n}\r\n@media (max-width: 1300px) {\r\n    .header-tabs .nav-tabs .nav-item.show .nav-link, .header-tabs .nav-tabs .nav-link, .header-tabs .nav-tabs .nav-link.active {\r\n        font-size: 14px;\r\n        padding: 12px 12px;\r\n        letter-spacing: 0.5px;\r\n    }\r\n}\r\n._cust_filter {\r\n    width: 230px;\r\n    padding-right: 10px;\r\n}\r\n._cust_filter .select2-container .select2-selection--single {\r\n    height: 32px!important;\r\n}\r\n._cust_filter .select2-container--default .select2-selection--single .select2-selection__rendered {\r\n    line-height: 30px;\r\n}\r\n._cust_filter .form-s2 .select2-container--default .select2-selection--single .select2-selection__arrow {\r\n    height: 32px;\r\n}\r\n.CL-Product {\r\n    padding-right: 10px\r\n}\r\n.Product-Filter .btn-primary {\r\n    margin: 0px;\r\n    letter-spacing: 1px;\r\n    float: left;\r\n    box-shadow: none\r\n}\r\n@media (max-width: 1170px) {\r\n    .header-tabs .nav-tabs .nav-item.show .nav-link, .header-tabs .nav-tabs .nav-link, .header-tabs .nav-tabs .nav-link.active {\r\n        padding: 12px 10px;\r\n        letter-spacing: normal;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcmRlcnMvY29tcG9uZW50cy9vcmRlcnMtbGlzdC9vcmRlcnMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksZ0JBQWdCLENBQUMsZUFBZTtBQUM1QyxnQkFBZ0IsV0FBVyxDQUFDLFlBQVk7QUFDeEMsZUFBZSwwQkFBMEIsQ0FBQyx5QkFBeUIsQ0FBQztBQUNwRSxtQ0FBbUMscUJBQXFCLENBQUMsdUJBQXVCLENBQUM7QUFDakYsd0RBQXdELFdBQVcsRUFBRSxlQUFlLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDLHVCQUF1QixDQUFDO0FBQ3ZLLFdBQVcsZUFBZSxDQUFDLHFDQUFxQyxDQUFDO0FBQ2pFLGFBQWEseUJBQXlCLENBQUMseUJBQXlCLENBQUM7QUFDakUsWUFBWSxlQUFlO0FBQzNCLGlDQUFpQyxXQUFXLEVBQUU7QUFDOUMsaUJBQWlCLFlBQVksQ0FBQyxXQUFXO0FBQ3pDLDhCQUE4Qix5QkFBeUIsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlO0FBQzlGLDhCQUE4QixtQ0FBbUMsQ0FBQyxtQ0FBbUMsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsZUFBZTtBQUN4SiwyQkFBMkIseUJBQXlCLENBQUMsbUJBQW1CO0FBQ3hFLCtCQUErQixrQkFBa0I7QUFDakQsU0FBUyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsaUJBQWlCO0FBQzVELCtEQUErRCxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztBQUN0RywySUFBMkksWUFBWSxDQUFDO0FBQ3hKLHlGQUF5RixZQUFZLENBQUM7QUFDdEcsMkZBQTJGLFNBQVMsQ0FBQyxPQUFPO0FBQzVHLGdCQUFnQixVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVc7QUFDaEQsY0FBYyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUI7QUFDdEUsY0FBYyx5QkFBeUIsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7QUFDekUsVUFBVSxjQUFjLENBQUM7QUFDekIsMkNBQTJDLFdBQVcsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsMkJBQTJCLENBQUMsdUJBQXVCLENBQUM7QUFDNUkseURBQXlELGlCQUFpQixFQUFFO0FBQzVFLHNCQUFzQix3QkFBd0IsQ0FBQztBQUMvQztJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsK0NBQStDO0lBQy9DLG1CQUFtQjtJQUNuQjtBQUNKO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZDtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWDtBQUNKO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBR3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmO0FBQ0o7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEI7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Q7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWDtBQUNKO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixxQkFBcUI7SUFDekI7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLHNCQUFzQjtJQUMxQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vcmRlcnMvY29tcG9uZW50cy9vcmRlcnMtbGlzdC9vcmRlcnMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk9yZGVyTG9nbyB7dGV4dC1hbGlnbjogbGVmdDtwYWRkaW5nLWxlZnQ6IDB9XHJcbi5PcmRlckxvZ28gaW1nIHt3aWR0aDogYXV0bztoZWlnaHQ6IDQ2cHh9XHJcbi5fY3VzdF9maWx0ZXIge3BhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O3BhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7fVxyXG4uX2N1c3RfZmlsdGVyIC5mb3JtLXMyIC5uZy1zZWxlY3Qge3BhZGRpbmc6IDAgIWltcG9ydGFudDtoZWlnaHQ6IDMwcHggIWltcG9ydGFudDt9XHJcbi5fY3VzdF9maWx0ZXIgLmZvcm0tczIgLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciB7d2lkdGg6IDEwMCU7IGZvbnQtc2l6ZTogMTRweDtib3JkZXI6IG5vbmU7Ym9yZGVyLXJhZGl1czogMDttaW4taGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7aGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7fVxyXG4ubmF2LWl0ZW0ge2N1cnNvcjogcG9pbnRlcjt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O31cclxuLkNMLVByb2R1Y3Qge3BhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDt9XHJcbi5PcmRlckluZm8ge2ZvbnQtc2l6ZTogMTRweH1cclxuLmRhdGFUYWJsZSAuYnRuLWRlZmF1bHQsIC5zbUJUTiB7Y29sb3I6ICNmZmY7IH1cclxuLk9yZGVySW5mbyBzcGFuIHt3aWR0aDogMTA1cHg7ZmxvYXQ6IGxlZnR9XHJcbi5PcmRlci1EZXRhaWwtdGFibGUgdGFibGUgdGQge2JvcmRlcjogc29saWQgMXB4ICMzMzMzMzM7cGFkZGluZzogNXB4IWltcG9ydGFudDtmb250LXNpemU6IDEycHh9XHJcbi5PcmRlci1EZXRhaWwtdGFibGUgdGFibGUgdGgge2JvcmRlcjogc29saWQgMXB4ICMzMzMzMzMhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6ICNlZGVkZWQhaW1wb3J0YW50O2NvbG9yOiAjMDAwO3BhZGRpbmc6IDVweCFpbXBvcnRhbnQ7Zm9udC1zaXplOiAxMnB4fVxyXG4uYnV0dG9uLWxpc3QgLmJ0bi1wcmltYXJ5IHtmb250LXNpemU6IDE0cHghaW1wb3J0YW50O2xldHRlci1zcGFjaW5nOiAxcHh9XHJcbi5idXR0b24tbGlzdCAuYnRuLXByaW1hcnkgLmZhIHtwYWRkaW5nLXJpZ2h0OiAzcHh9XHJcbi5vcmQtbm8ge3BhZGRpbmctdG9wOiAxN3B4O2ZvbnQtc2l6ZTogMTRweDt0ZXh0LWFsaWduOiByaWdodH1cclxuLnRhYmxlIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7Ym9yZGVyLXJhZGl1czogMDtib3JkZXItY29sb3I6ICNkZGRkZGQ7fVxyXG4udGFibGUgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQsIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7aGVpZ2h0OiAyNnB4O31cclxuLnRhYmxlIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93IHtoZWlnaHQ6IDI0cHg7fVxyXG4uY3VzLWNoZS10YWJsZSAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1cy1jaGUtdGFibGUgLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7dG9wOiAtN3B4O2xlZnQ6IDB9XHJcbi5jdXMtY2hlLXRhYmxlIHtwYWRkaW5nOiAwO21hcmdpbjogMDt3aWR0aDogMjJweH1cclxuLmJ0bi1wcmltYXJ5IHtwYWRkaW5nLXRvcDogNHB4O3BhZGRpbmctYm90dG9tOiA0cHg7bGV0dGVyLXNwYWNpbmc6IDFweH1cclxuLmJvdHRvbS1ncmF5IHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2OyBwYWRkaW5nOiAxMHB4OyBtYXJnaW4tdG9wOiAyMHB4O31cclxuLmFjdGl2ZSB7IGRpc3BsYXk6IGJsb2NrO31cclxuI2V4YW1wbGUyIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge3dpZHRoOiAxMDAlO2ZvbnQtc2l6ZTogMTRweDtib3JkZXItcmFkaXVzOiAwO21pbi1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtoZWlnaHQ6IDI1cHggIWltcG9ydGFudDt9XHJcbiNleGFtcGxlMiAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIGRpdi5uZy1pbnB1dCB7IHRvcDogMCAhaW1wb3J0YW50OyB9XHJcbi5uZy1zZWxlY3QgLm5nLWNsZWFyIHtkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7fVxyXG4uUHJvZHVjdC1GaWx0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMjtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjMDAzOGJhXHJcbn1cclxuLlByb2R1Y3QtRmlsdGVyIC5uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4IDBweCA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLlByb2R1Y3QtRmlsdGVyIC5uYXYge1xyXG4gICAgd2lkdGg6IDc0cHg7XHJcbiAgICBmbG9hdDogcmlnaHRcclxufVxyXG4uUHJvZHVjdC1GaWx0ZXIgLm5hdiAuZmEge1xyXG4gICAgY29sb3I6ICNhNmE1YTU7XHJcbiAgICBmb250LXNpemU6IDIwcHhcclxufVxyXG4uUHJvZHVjdC1GaWx0ZXIgLmFjdGl2ZSAuZmEge1xyXG4gICAgY29sb3I6ICMwMDM4YmFcclxufVxyXG4uQ0wtUHJvZHVjdCB7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHhcclxufVxyXG4uQ0wtUHJvZHVjdCBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZGVkZWRlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHhcclxufVxyXG4uX2N1c3RfZmlsdGVyIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTRlNGU0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbi5fY3VzdF9maWx0ZXIgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbn1cclxuLlByb2R1Y3QtRmlsdGVyIC5idG4tcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4XHJcbn1cclxuLkNMLVByb2R1Y3QgLmZhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgY29sb3I6ICNiNWI1YjVcclxufVxyXG4uX2N1c3RfZmlsdGVyIHtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweFxyXG59XHJcbi5fY3VzdF9maWx0ZXIgc2VsZWN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZGVkZWRlXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIC5oZWFkZXItdGFicyAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAuaGVhZGVyLXRhYnMgLm5hdi10YWJzIC5uYXYtbGluaywgLmhlYWRlci10YWJzIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxMnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIH1cclxufVxyXG4uX2N1c3RfZmlsdGVyIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLl9jdXN0X2ZpbHRlciAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xyXG4gICAgaGVpZ2h0OiAzMnB4IWltcG9ydGFudDtcclxufVxyXG4uX2N1c3RfZmlsdGVyIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5fY3VzdF9maWx0ZXIgLmZvcm0tczIgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3cge1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbi5DTC1Qcm9kdWN0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHhcclxufVxyXG4uUHJvZHVjdC1GaWx0ZXIgLmJ0bi1wcmltYXJ5IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTcwcHgpIHtcclxuICAgIC5oZWFkZXItdGFicyAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAuaGVhZGVyLXRhYnMgLm5hdi10YWJzIC5uYXYtbGluaywgLmhlYWRlci10YWJzIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDEwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-orders-list',
                templateUrl: './orders-list.component.html',
                styleUrls: ['./orders-list.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _shared_services__WEBPACK_IMPORTED_MODULE_1__["GeneralDataService"] }, { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] }, { type: src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "sKyn":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/orders/components/completed-orders-detail/completed-orders-detail.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CompletedOrdersDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedOrdersDetailComponent", function() { return CompletedOrdersDetailComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/orders.service */ "5TcN");
/* harmony import */ var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../core/services/toaster.service */ "ZgVV");
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../core/services/storage.service */ "UYTb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/loader-white/loader-white.component */ "uoBr");












function CompletedOrdersDetailComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompletedOrdersDetailComponent_tr_48_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const sheet_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.routeToPdf("ls", sheet_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Load Sheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompletedOrdersDetailComponent_tr_48_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const sheet_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.routeToPdf("bills", sheet_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Bills");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompletedOrdersDetailComponent_tr_48_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const sheet_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.routeToPdf("dsr", sheet_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "DSR");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sheet_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sheet_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sheet_r1.salesman);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Rs. ", sheet_r1.total_net_sale, "");
} }
class CompletedOrdersDetailComponent {
    constructor(ordersService, toastService, ls) {
        this.ordersService = ordersService;
        this.toastService = toastService;
        this.ls = ls;
        this.dtOptions = {};
        this.loading = false;
        this.date = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
        this.loadsheets = [];
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }
    ngOnInit() {
        this.getData();
    }
    routeToPdf(mod, sheet) {
        if (mod == "ls")
            window.open(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiDomain}/LoadSheetDataPdf/${sheet.id}/${sheet.salesman_id}/${sheet.date}`, "_blank");
        else if (mod == "bs")
            window.open(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiDomain}/BookingSheetPdf?emp=${sheet.salesman_id}&date=${sheet.date}&loadId=${sheet.id}`, "_blank");
        else if (mod == "bills")
            window.open(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiDomain}/GetAllBillsDetail?type=bill&emp=${sheet.salesman_id}&date=${sheet.date}&dist_id=${this.ls.getItem("distributor").id}&size=A4&status=processed&loadId=${sheet.id}`, "_blank");
        else if (mod == "dsr")
            window.open(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiDomain}/pdfDSRNew/${sheet.dsrId}`, "_blank");
    }
    getData() {
        this.loading = true;
        // TO destroy
        if (this.isDtInitialized) {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.isDtInitialized = false;
        }
        this.ordersService.getCompletedOrdersLoadsheets(this.date).subscribe(res => {
            this.loadsheets = res;
            debugger;
            if (!this.isDtInitialized) {
                this.isDtInitialized = true;
                this.dtTrigger.next();
            }
            this.loading = false;
        });
    }
}
CompletedOrdersDetailComponent.ɵfac = function CompletedOrdersDetailComponent_Factory(t) { return new (t || CompletedOrdersDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"])); };
CompletedOrdersDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CompletedOrdersDetailComponent, selectors: [["app-completed-orders-detail"]], viewQuery: function CompletedOrdersDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 51, vars: 9, consts: [[1, "container"], [1, "row", "mt-2", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "_head01"], [1, "breadcrumb"], ["href", "#"], [1, "row"], [1, "col-lg-12"], [1, "header-tabs"], [1, "Product-Filter"], [1, "col-12"], [1, "CL-Product"], ["placeholder", "Start Date", "type", "text", "onfocus", "(this.type = 'date')", "id", "date", 1, "form-control", "pad-date", 3, "ngModel", "change", "ngModelChange"], [1, "clearfix"], [1, "col-md-12"], [1, "card"], [1, "header"], [1, "_list-total"], [1, "body"], ["datatable", "", "id", "example", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtTrigger", "dtOptions"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-default", "mb-0", 3, "click"]], template: function CompletedOrdersDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CompletedOrdersDetailComponent_Template_input_change_23_listener() { return ctx.getData(); })("ngModelChange", function CompletedOrdersDetailComponent_Template_input_ngModelChange_23_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Load ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Salesman");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Sales Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, CompletedOrdersDetailComponent_tr_48_Template, 14, 3, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "app-loader-white");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.loadsheets.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.loading ? "none" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtTrigger", ctx.dtTrigger)("dtOptions", ctx.dtOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.loadsheets);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", !ctx.loading ? "none" : "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_9__["WhiteLoaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3JkZXJzL2NvbXBvbmVudHMvY29tcGxldGVkLW9yZGVycy1kZXRhaWwvY29tcGxldGVkLW9yZGVycy1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CompletedOrdersDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-completed-orders-detail',
                templateUrl: './completed-orders-detail.component.html',
                styleUrls: ['./completed-orders-detail.component.css']
            }]
    }], function () { return [{ type: _services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"] }, { type: _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }, { type: _core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "uJg1":
/*!**************************************************************!*\
  !*** ./src/app/modules/orders/services/spot-sale.service.ts ***!
  \**************************************************************/
/*! exports provided: SpotSaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotSaleService", function() { return SpotSaleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SpotSaleService {
    constructor() { }
    setSpotSaleOrderContent(selectedRetailer, selectedEmployee, distributorId) {
        const order = {
            employee_id: selectedEmployee.employee_id,
            retailer_id: selectedRetailer.retailer_id,
            within_radius: 0,
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
            region_id: selectedEmployee.region_id,
            recovery: 0,
            recovered: 0,
            area_id: selectedEmployee.area_id,
            assigned_route_id: selectedRetailer.route_id,
            territory_id: selectedEmployee.territory_id,
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
SpotSaleService.ɵfac = function SpotSaleService_Factory(t) { return new (t || SpotSaleService)(); };
SpotSaleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpotSaleService, factory: SpotSaleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpotSaleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wgom":
/*!*********************************************************!*\
  !*** ./src/app/modules/orders/orders-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.component */ "8v8s");
/* harmony import */ var _components_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/orders-list/orders-list.component */ "ptgJ");
/* harmony import */ var _components_orders_list_details_orders_list_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/orders-list-details/orders-list-details.component */ "Hyv+");
/* harmony import */ var _components_create_dispatched_create_dispatched_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-dispatched/create-dispatched.component */ "pmTo");
/* harmony import */ var _components_execution_list_execution_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/execution-list/execution-list.component */ "WQuE");
/* harmony import */ var _components_execute_order_execute_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/execute-order/execute-order.component */ "FKeZ");
/* harmony import */ var _components_counter_sale_counter_sale_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/counter-sale/counter-sale.component */ "Hn+O");
/* harmony import */ var _components_booking_vs_execution_booking_vs_execution_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/booking-vs-execution/booking-vs-execution.component */ "F35G");
/* harmony import */ var _components_completed_orders_detail_completed_orders_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/completed-orders-detail/completed-orders-detail.component */ "sKyn");
/* harmony import */ var _components_order_dispatched_order_dispatched_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/order-dispatched/order-dispatched.component */ "/5vP");














const routes = [
    {
        path: '',
        component: _orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _components_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_3__["OrdersListComponent"]
            },
            {
                path: 'order-list-details/:employeeId/:date',
                pathMatch: 'full',
                component: _components_orders_list_details_orders_list_details_component__WEBPACK_IMPORTED_MODULE_4__["OrdersListDetailsComponent"]
            },
            {
                path: 'dispatch-orders',
                pathMatch: 'full',
                component: _components_create_dispatched_create_dispatched_component__WEBPACK_IMPORTED_MODULE_5__["CreateDispatchedComponent"]
            },
            {
                path: 'dispatch/:assignId/:saleManId/:date',
                pathMatch: 'full',
                component: _components_order_dispatched_order_dispatched_component__WEBPACK_IMPORTED_MODULE_11__["OrderDispatchedComponent"]
            },
            {
                path: 'execution-list',
                pathMatch: 'full',
                component: _components_execution_list_execution_list_component__WEBPACK_IMPORTED_MODULE_6__["OrderExecutionListComponent"]
            },
            {
                path: 'execute-order/:saleManId/:date/:loadId',
                pathMatch: 'full',
                component: _components_execute_order_execute_order_component__WEBPACK_IMPORTED_MODULE_7__["ExecuteOrderComponent"]
            },
            {
                path: 'completed-orders',
                pathMatch: 'full',
                component: _components_completed_orders_detail_completed_orders_detail_component__WEBPACK_IMPORTED_MODULE_10__["CompletedOrdersDetailComponent"]
            },
            {
                path: 'completed-orders/:id',
                pathMatch: 'full',
                component: _components_completed_orders_detail_completed_orders_detail_component__WEBPACK_IMPORTED_MODULE_10__["CompletedOrdersDetailComponent"],
            },
            {
                path: 'counter-sale',
                pathMatch: 'full',
                component: _components_counter_sale_counter_sale_component__WEBPACK_IMPORTED_MODULE_8__["CounterSaleComponent"]
            },
            {
                path: 'booking-vs-execution',
                pathMatch: 'full',
                component: _components_booking_vs_execution_booking_vs_execution_component__WEBPACK_IMPORTED_MODULE_9__["BookingVsExecutionComponent"]
            },
        ]
    }
];
class OrdersRoutingModule {
}
OrdersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrdersRoutingModule });
OrdersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrdersRoutingModule_Factory(t) { return new (t || OrdersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-orders-orders-module.js.map