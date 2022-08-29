(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "0Pcf":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/localstorage.constants */ "Rb2t");
/* harmony import */ var src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/storage.service */ "UYTb");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/home.service */ "5u0j");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/loader-white/loader-white.component */ "uoBr");
/* harmony import */ var _shared_pipes_Decimal_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/pipes/Decimal.pipe */ "yuE0");









function HomeComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Here\u2019s what\u2019s happening at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.distributor.distributor_image ? ctx_r2.distributor.distributor_image : "assets/images/avatar.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Good Morning, ", ctx_r2.distributor.distributor_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.distributor.distributor_name, ".");
} }
function HomeComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Holy guacamole!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You should check in on some of those fields below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Open Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Holy guacamole!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " You should check in on some of those fields below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Open Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Holy guacamole!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " You should check in on some of those fields below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_0_div_91_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Rs. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "decimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CTNS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Dozens");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r5.item_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r5.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, product_r5.item_trade_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r5.ctns_booked, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r5.available_qty, " ");
} }
function HomeComponent_div_0_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_0_div_91_div_1_Template, 24, 7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 < 5);
} }
const _c0 = function () { return ["/orders", "counter-sale"]; };
const _c1 = function () { return ["/inventory", "distributor-purchase"]; };
const _c2 = function () { return ["/orders"]; };
function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_0_div_1_Template, 9, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_0_div_2_Template, 27, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Today's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Rs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "decimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pending Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Rs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "decimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Spot Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Rs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "decimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Counter Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Rs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "decimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Net Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Rs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "decimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Monthly ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sale Trends");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Rs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "decimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Pending Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Rs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "decimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Spot Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Rs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "decimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Counter Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Rs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "decimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Top 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Booked Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, HomeComponent_div_0_div_91_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Shortcuts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Counter Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Stock Purchase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.distributor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 15, ctx_r0.homeReport.today_sale), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 17, ctx_r0.homeReport.pending_sale), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 19, ctx_r0.homeReport.spot_sale), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 21, ctx_r0.homeReport.counter_sale));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 23, ctx_r0.homeReport.pending_sale + ctx_r0.homeReport.spot_sale + ctx_r0.homeReport.counter_sale), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 25, ctx_r0.homeReportMonthly == null ? null : ctx_r0.homeReportMonthly.monthly_sale), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 27, ctx_r0.homeReportMonthly == null ? null : ctx_r0.homeReportMonthly.pending_sale), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 29, ctx_r0.homeReportMonthly == null ? null : ctx_r0.homeReportMonthly.spot_sale), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](82, 31, ctx_r0.homeReportMonthly == null ? null : ctx_r0.homeReportMonthly.counter_sale));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.homeReport.products_sold);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c2));
} }
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(storageService, homeService) {
        this.storageService = storageService;
        this.homeService = homeService;
    }
    ngOnInit() {
        this.loading = false;
        this.distributor = this.storageService.getItem(src_app_core_constants_localstorage_constants__WEBPACK_IMPORTED_MODULE_1__["localStorageKeys"].distributor);
        this.getDashboardData();
    }
    getDashboardData() {
        this.loading = true;
        this.homeService.getDashboardData().subscribe(res => {
            this.homeService.getHomeDailyReport().subscribe(data => {
                this.homeReport = data;
                this.loading = false;
                this.homeService.getHomeDailyReport(true).subscribe(monthlyReport => {
                    this.homeReportMonthly = monthlyReport;
                });
            }, error => {
                this.loading = false;
                console.log('Home Daily report API error :>> ', error);
            });
        }, error => {
            this.loading = false;
            console.log('Home dashboard API error :>> ', error);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home-component"]], decls: 2, vars: 2, consts: [["class", "container mt-0", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container", "mt-0"], ["class", "row _user-TS", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-6"], [1, "card", "total-sale"], [1, "col-12"], [1, "col-12", "position-relative", 2, "background-image", "url(assets/images/kpi-achive-img.jpg)", "background-position", "bottom right", "background-repeat", "no-repeat"], [1, "card-heading"], [1, "total-amount", 2, "border-bottom", "solid 1px #e1e1e1"], [1, "col", "unit-v", "pr-0"], [1, "col-lg-12", "PB-10"], [1, "_head01", "HomeHead"], [1, "col-md-12"], [1, "row", "pro-list"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "row", "m-0"], [1, "col-lg-12", "p-0"], [1, "col-12", "h_dash"], [1, "col-4"], [3, "routerLink"], ["src", "assets/images/add-stock-01.svg", "alt", ""], [1, "HD-title"], [1, "f-light"], ["src", "assets/images/add-order.svg", "alt", ""], ["src", "assets/images/dispatch-order.svg", "alt", ""], [1, "row", "_user-TS"], [1, "col-md-12", "_dashTOP"], ["onError", "this.src='assets/images/avatar.svg'", "alt", "", 1, "_user_Pimage", 3, "src"], [1, "_head01"], [1, "col-12", "PB-15"], ["role", "alert", 1, "alert", "alert-primary", "alert-dismissible", "fade", "show"], [1, "btn", "btn-primary", "ml-2"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-secondary", "alert-dismissible", "fade", "show"], [1, "ml-2"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "col"], ["class", "product-card", 4, "ngIf"], [1, "product-card"], [1, "PR-Thumb"], ["alt", "", 3, "src"], [1, "row", "pr-st"], [1, "col-12", "rev-pr"], [1, "container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 120, 36, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_components_loader_white_loader_white_component__WEBPACK_IMPORTED_MODULE_6__["WhiteLoaderComponent"]], pipes: [_shared_pipes_Decimal_pipe__WEBPACK_IMPORTED_MODULE_7__["Decimal"]], styles: [".total-sale[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    font-size: 13px;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 20px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    box-shadow: 0px 0px 10px 0px rgb(82 63 105 / 20%);\r\n    -webkit-box-shadow: 0px 0px 10px 0px rgb(82 63 105 / 20%);\r\n    -moz-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.2);\r\n    -ms-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.2);\r\n    padding: 15px;\r\n}\r\n.card-heading[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    position: relative;\r\n}\r\n.card-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-family: 'proximanova-light', sans-serif !important;\r\n    font-weight: normal;\r\n}\r\n.total-sale[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\r\n    font-size: 42px;\r\n    color: #0038ba;\r\n    padding: 8px 0 8px 0; font-family: 'Rationale', sans-serif!important;\r\n}\r\n.total-sale[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #282828;\r\n}\r\n.unit-v[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n    color: #606060;\r\n}\r\n.unit-v[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .total-val[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    display: block;\r\n    line-height: 1;\r\n    color: #282828; font-family: 'Rationale', sans-serif!important;\r\n}\r\n.card-heading[_ngcontent-%COMP%]:before {\r\n    background: #0038ba;\r\n    position: absolute;\r\n    width: 2px;\r\n    height: 18px;\r\n    left: -15px;\r\n    top: 2px;\r\n    content: '';\r\n}\r\n.seabinReport[_ngcontent-%COMP%] {\r\n    padding-bottom: 15px\r\n}\r\n.seabinReport[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    border: none;\r\n    padding: 10px 15px;\r\n    margin: 15px 0px;\r\n    border-radius: 0px;\r\n    position: relative;\r\n    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);\r\n    background-image: url(/assets/images/distributor-bg.jpg);\r\n    background-position: top right;\r\n    background-repeat: no-repeat;\r\n    background-size: auto;\r\n    height: 110px\r\n}\r\n.seabinReport[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    padding-top: 15px;\r\n    margin-bottom: 15px;\r\n    display: block\r\n}\r\n.seabinReport[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    padding: 0;\r\n    margin: 0;\r\n    color: #0038ba\r\n}\r\n.seabinReport[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #282828;\r\n    font-family: 'proximanova-regular', sans-serif !important;\r\n    padding-top: 0px;\r\n    position: relative;\r\n    margin-top: 0px\r\n}\r\n.seabinReport[_ngcontent-%COMP%]   .digit[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    color: #282828;\r\n    margin-bottom: 0;\r\n    padding-bottom: 0;\r\n    line-height: 1;\r\n    font-family: 'Rationale', sans-serif!important;\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 15px\r\n}\r\n.seabinReport[_ngcontent-%COMP%]   .digit[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color: #0038ba}\r\n.seabinReport[_ngcontent-%COMP%]   .head-font[_ngcontent-%COMP%] {\r\n    font-size: 16px\r\n}\r\n.seabinReport[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .cardicon[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px\r\n}\r\n._user_Pimage[_ngcontent-%COMP%] {\r\n    border: solid 1px #0038ba;\r\n}\r\n._dashTOP[_ngcontent-%COMP%] {\r\n    padding-top: 0\r\n}\r\n.btnActivView[_ngcontent-%COMP%] {\r\n    border: solid 1px #0038ba;\r\n    font-size: 13px;\r\n    padding: 1px 10px;\r\n    margin: 10px 0 5px 0px;\r\n    border-radius: 0;\r\n    background: #0038ba;\r\n    color: #fff;\r\n    letter-spacing: 1px;\r\n    display: inline-block\r\n}\r\n.btnActivView[_ngcontent-%COMP%]:HOVER {\r\n    border: solid 1px #282828;\r\n    background: #282828;\r\n    color: #fff;\r\n    text-decoration: none\r\n}\r\n.view-all-EA[_ngcontent-%COMP%]:HOVER {\r\n    background: linear-gradient(90deg, #282828 0%, #282828 100%);\r\n    border: solid 1px #282828\r\n}\r\n.HomeHead[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    border-bottom: solid 2px #e3e3e3;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 0\r\n}\r\n.NoAct[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{border: none}\r\n.DashHomeLink[_ngcontent-%COMP%], .DashHomeLink[_ngcontent-%COMP%]:HOVER{text-decoration: none; display: block; transition: all 0.2s ease-in-out;}\r\n.DashHomeLink[_ngcontent-%COMP%]:HOVER   .card[_ngcontent-%COMP%] {box-shadow: 2px 2px 10px 0 rgba(79,79,79,.4);}\r\n.DashHomeLink[_ngcontent-%COMP%]:HOVER  {margin-top: -5px; transition: all 0.2s ease-in-out;}\r\n.pro-list[_ngcontent-%COMP%]{margin-left:-10px; margin-right: -10px; padding-bottom: 25px;}\r\n.pro-list[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{\r\n    padding: 0 5px;\r\n    max-width: 20%;\r\n}\r\n.product-card[_ngcontent-%COMP%] {\r\n    padding: 0 12px 0 15px;\r\n    position: relative;\r\n    font-size: 13px;\r\n    transition: all 0.2s;\r\n    transform: scale(0.96); border: solid 1px #e8e8e8; overflow: hidden\r\n}\r\n.product-card[_ngcontent-%COMP%]:HOVER {\r\n    transition: all 0.3s ease;\r\n    transform: scale(1);\r\n    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);\r\n}\r\n.product-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin-bottom: 5px; margin-top: 10px;\r\n    line-height: 20px;\r\n    height: 42px;\r\n    overflow: hidden;\r\n    color: #282828; position: relative;\r\n}\r\n.product-card[_ngcontent-%COMP%]:before {\r\n    background: #0038ba;\r\n    position: absolute;\r\n    width: 2px;\r\n    height: 32px;\r\n    left: 0px;\r\n    top: 13px;\r\n    content: '';\r\n}\r\n.PR-Thumb[_ngcontent-%COMP%]{margin: auto; display: block; text-align:center; height: 140px}\r\n.PR-Thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 130px; height:130px; margin: auto;}\r\n.pr-st[_ngcontent-%COMP%]{background-color: #fbfbfb;  text-align: center; line-height:1; margin-top: 5px; border: none;}\r\n.rev-pr[_ngcontent-%COMP%]{background-color: #fff; font-size: 16px; border-bottom: solid 1px #0038ba; color:#0038ba; font-size: 16px}\r\n.rev-pr[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size: 24px !important}\r\n.pr-st[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size: 20px; display: block;margin-bottom: 5px; font-family: 'Rationale', sans-serif!important;}\r\n.pr-st[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]{padding: 10px;}\r\n.bg-shade[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.h_dash[_ngcontent-%COMP%] {position: relative; padding: 0; padding-top: 20px; }\r\n.h_dash[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    box-shadow: 0px 0px 12px 0px rgba(79,79,79,0.3);\r\n    border-radius: 0px;\r\n    height: 165px; width: 100%; \r\n    position: relative;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 5px;\r\n    background-image: url(/assets/images/dash-card-bg.png);\r\n    background-position: left bottom; background-size: 30%; background-repeat: no-repeat; \r\n    background-color: #fff;\r\n    transition: all 0.15s;\r\n}\r\n.h_dash[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before{\r\n    content: '';\r\n    display: inline-block;\r\n    width: 2px;\r\n    height: 33px;\r\n    background-color: #0038ba;\r\n    position: absolute;\r\n    bottom: 22px;\r\n    left: 0;\r\n}\r\n.HD-title[_ngcontent-%COMP%]{\r\n    color: #282828;\r\n    font-size: 18px;\r\n    text-decoration: none; \r\n    text-align: left;\r\n    position: absolute;\r\n    bottom: 15px;\r\n    left: 15px;\r\n    margin: 0; font-weight: 600;\r\n    padding: 0;padding-bottom:5px; letter-spacing: 1px\r\n}\r\n.f-light[_ngcontent-%COMP%]{\r\n    font-weight: normal; font-size: 14px; display: block; font-family: 'proximanova-light', sans-serif !important; color: #787878\r\n}\r\n.h_dash[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    height: auto;\r\n    display: inline-block;\r\n    padding-top: 10px;\r\n    padding-right: 10px;\r\n    float: right;\r\n}\r\n.h_dash[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0px 0px 15px 0px rgba(79,79,79,0.5);\r\n    background-size: 150%;\r\n    transition: all 0.2s;\r\n}\r\n.h_dash[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .HD-title[_ngcontent-%COMP%]{ color: #0038ba;}\r\n.alert[_ngcontent-%COMP%] {padding: 10px 15px 10px 15px; font-size: 15px; line-height: normal}\r\n.alert-dismissible[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {padding: 5px 10px; outline: none!important;}\r\n.alert-primary[_ngcontent-%COMP%]{color: #0038ba}\r\n.alert-primary[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{font-size: 12px; padding: 3px 8px; letter-spacing: 1px; margin-top: -3px; margin-bottom: -3px}\r\n.set-ptb[_ngcontent-%COMP%]{padding-top:8px; padding-bottom: 8px}\r\n.total-sale[_ngcontent-%COMP%]{padding: 15px}\r\n.total-sale[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%]:before {left: -15px; top: 2px;}\r\n.unit-v[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .total-val[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size: 24px; letter-spacing: normal}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvZGFzaGJvYXJkLW5ldy5jc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlEQUFpRDtJQUNqRCx5REFBeUQ7SUFDekQsd0RBQXdEO0lBQ3hELHVEQUF1RDtJQUN2RCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVEQUF1RDtJQUN2RCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0JBQW9CLEVBQUUsOENBQThDO0FBQ3hFO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYyxFQUFFLDhDQUE4QztBQUNsRTtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxRQUFRO0lBQ1IsV0FBVztBQUNmO0FDL0NBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsK0NBQStDO0lBQy9DLHdEQUF3RDtJQUN4RCw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQjtBQUNKO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQjtBQUNKO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7SUFDVDtBQUNKO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseURBQXlEO0lBQ3pELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEI7QUFDSjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLDhDQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaO0FBQ0o7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztJQUNJO0FBQ0o7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNUO0FBQ0o7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0k7QUFDSjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQjtBQUNKO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWDtBQUNKO0FBQ0E7SUFDSSw0REFBNEQ7SUFDNUQ7QUFDSjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEI7QUFDSjtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDLG1DQUFtQyxxQkFBcUIsRUFBRSxjQUFjLEVBQUUsZ0NBQWdDLENBQUM7QUFDM0csMkJBQTJCLDRDQUE0QyxDQUFDO0FBQ3hFLHNCQUFzQixnQkFBZ0IsRUFBRSxnQ0FBZ0MsQ0FBQztBQUN6RSxVQUFVLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDO0FBQ3ZFO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUdmLG9CQUFvQjtJQUdwQixzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRTtBQUN2RDtBQUNBO0lBR0kseUJBQXlCO0lBR3pCLG1CQUFtQjtJQUNuQixnREFBZ0Q7QUFDcEQ7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0IsRUFBRSxnQkFBZ0I7SUFDcEMsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYyxFQUFFLGtCQUFrQjtBQUN0QztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztBQUNmO0FBQ0EsVUFBVSxZQUFZLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGFBQWE7QUFDeEUsZ0JBQWdCLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDO0FBQ3pELE9BQU8seUJBQXlCLEdBQUcsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUM7QUFDcEcsUUFBUSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsZ0NBQWdDLEVBQUUsYUFBYSxFQUFFLGVBQWU7QUFDakgsYUFBYSwwQkFBMEI7QUFDdkMsWUFBWSxlQUFlLEVBQUUsY0FBYyxDQUFDLGtCQUFrQixFQUFFLDhDQUE4QyxDQUFDO0FBQy9HLGNBQWMsYUFBYSxDQUFDO0FBQzVCLFVBQVUsd0JBQXdCLENBQUM7QUFDbkMsU0FBUyxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUU7QUFDNUQ7SUFDSSxjQUFjO0lBR2QsK0NBQStDO0lBQy9DLGtCQUFrQjtJQUNsQixhQUFhLEVBQUUsV0FBVztJQUMxQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0RBQXNEO0lBQ3RELGdDQUFnQyxFQUFFLG9CQUFvQixFQUFFLDRCQUE0QjtJQUNwRixzQkFBc0I7SUFHdEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztBQUNYO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUyxFQUFFLGdCQUFnQjtJQUMzQixVQUFVLENBQUMsa0JBQWtCLEVBQUU7QUFDbkM7QUFDQTtJQUNJLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsdURBQXVELEVBQUU7QUFDbkg7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBR0ksK0NBQStDO0lBQy9DLHFCQUFxQjtJQUdyQixvQkFBb0I7QUFDeEI7QUFDQSwyQkFBMkIsY0FBYyxDQUFDO0FBQzFDLFFBQVEsNEJBQTRCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQjtBQUMxRSwyQkFBMkIsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUM7QUFDdEUsZUFBZSxjQUFjO0FBQzdCLDRCQUE0QixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CO0FBQ3pILFNBQVMsZUFBZSxFQUFFLG1CQUFtQjtBQUM3QyxZQUFZLGFBQWE7QUFDekIsa0NBQWtDLFdBQVcsRUFBRSxRQUFRLENBQUM7QUFDeEQsOEJBQThCLGVBQWUsRUFBRSxzQkFBc0IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvdGFsLXNhbGUge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiKDgyIDYzIDEwNSAvIDIwJSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiKDgyIDYzIDEwNSAvIDIwJSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSg4MiwgNjMsIDEwNSwgMC4yKTtcclxuICAgIC1tcy1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoODIsIDYzLCAxMDUsIDAuMik7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5jYXJkLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhcmQtaGVhZGluZyBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAncHJveGltYW5vdmEtbGlnaHQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi50b3RhbC1zYWxlIC50b3RhbC1hbW91bnQge1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgY29sb3I6ICMwMDM4YmE7XHJcbiAgICBwYWRkaW5nOiA4cHggMCA4cHggMDsgZm9udC1mYW1pbHk6ICdSYXRpb25hbGUnLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcclxufVxyXG4udG90YWwtc2FsZSAudG90YWwtYW1vdW50IHNwYW4ge1xyXG4gICAgY29sb3I6ICMyODI4Mjg7XHJcbn1cclxuLnVuaXQtdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgY29sb3I6ICM2MDYwNjA7XHJcbn1cclxuLnVuaXQtdiBzcGFuLCAudG90YWwtdmFsIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGNvbG9yOiAjMjgyODI4OyBmb250LWZhbWlseTogJ1JhdGlvbmFsZScsIHNhbnMtc2VyaWYhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLWhlYWRpbmc6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDM4YmE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgbGVmdDogLTE1cHg7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG59XHJcbiAiLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2Rhc2hib2FyZC1uZXcuY3NzXCI7XHJcblxyXG4uc2VhYmluUmVwb3J0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4XHJcbn1cclxuLnNlYWJpblJlcG9ydCAuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Rpc3RyaWJ1dG9yLWJnLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMTBweFxyXG59XHJcbi5zZWFiaW5SZXBvcnQgaDIge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxufVxyXG4uc2VhYmluUmVwb3J0IGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzAwMzhiYVxyXG59XHJcbi5zZWFiaW5SZXBvcnQgaDQgc3BhbiB7XHJcbiAgICBjb2xvcjogIzI4MjgyODtcclxuICAgIGZvbnQtZmFtaWx5OiAncHJveGltYW5vdmEtcmVndWxhcicsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHhcclxufSBcclxuLnNlYWJpblJlcG9ydCAuZGlnaXQge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzI4MjgyODtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYXRpb25hbGUnLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHJpZ2h0OiAxNXB4XHJcbn1cclxuLnNlYWJpblJlcG9ydCAuZGlnaXQgc21hbGx7Y29sb3I6ICMwMDM4YmF9XHJcbi5zZWFiaW5SZXBvcnQgLmhlYWQtZm9udCB7XHJcbiAgICBmb250LXNpemU6IDE2cHhcclxufVxyXG4uc2VhYmluUmVwb3J0IC5jYXJkIC5jYXJkaWNvbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4XHJcbn1cclxuLl91c2VyX1BpbWFnZSB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMDAzOGJhO1xyXG59XHJcbiAgICBcclxuLl9kYXNoVE9QIHtcclxuICAgIHBhZGRpbmctdG9wOiAwXHJcbn1cclxuLmJ0bkFjdGl2VmlldyB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMDAzOGJhO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZzogMXB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMCA1cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDM4YmE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxufVxyXG4uYnRuQWN0aXZWaWV3OkhPVkVSIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICMyODI4Mjg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxufVxyXG4udmlldy1hbGwtRUE6SE9WRVIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjgyODI4IDAlLCAjMjgyODI4IDEwMCUpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzI4MjgyOFxyXG59XHJcbi5Ib21lSGVhZCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2UzZTNlMztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxyXG59XHJcbi5Ob0FjdCAuYnRuLXByaW1hcnl7Ym9yZGVyOiBub25lfVxyXG4uRGFzaEhvbWVMaW5rLCAuRGFzaEhvbWVMaW5rOkhPVkVSe3RleHQtZGVjb3JhdGlvbjogbm9uZTsgZGlzcGxheTogYmxvY2s7IHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O31cdFxyXG4uRGFzaEhvbWVMaW5rOkhPVkVSIC5jYXJkIHtib3gtc2hhZG93OiAycHggMnB4IDEwcHggMCByZ2JhKDc5LDc5LDc5LC40KTt9XHJcbi5EYXNoSG9tZUxpbms6SE9WRVIgIHttYXJnaW4tdG9wOiAtNXB4OyB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDt9XHJcbi5wcm8tbGlzdHttYXJnaW4tbGVmdDotMTBweDsgbWFyZ2luLXJpZ2h0OiAtMTBweDsgcGFkZGluZy1ib3R0b206IDI1cHg7fVxyXG4ucHJvLWxpc3QgLmNvbHtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMCU7XHJcbn1cdFx0XHJcbi5wcm9kdWN0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMCAxMnB4IDAgMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nik7IGJvcmRlcjogc29saWQgMXB4ICNlOGU4ZTg7IG92ZXJmbG93OiBoaWRkZW5cclxufVxyXG4ucHJvZHVjdC1jYXJkOkhPVkVSIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuLnByb2R1Y3QtY2FyZCBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjogIzI4MjgyODsgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wcm9kdWN0LWNhcmQ6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDM4YmE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAxM3B4O1xyXG4gICAgY29udGVudDogJyc7XHJcbn1cclxuLlBSLVRodW1ie21hcmdpbjogYXV0bzsgZGlzcGxheTogYmxvY2s7IHRleHQtYWxpZ246Y2VudGVyOyBoZWlnaHQ6IDE0MHB4fVxyXG4uUFItVGh1bWIgaW1nIHsgd2lkdGg6IDEzMHB4OyBoZWlnaHQ6MTMwcHg7IG1hcmdpbjogYXV0bzt9XHJcbi5wci1zdHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiOyAgdGV4dC1hbGlnbjogY2VudGVyOyBsaW5lLWhlaWdodDoxOyBtYXJnaW4tdG9wOiA1cHg7IGJvcmRlcjogbm9uZTt9XHJcbi5yZXYtcHJ7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxNnB4OyBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzAwMzhiYTsgY29sb3I6IzAwMzhiYTsgZm9udC1zaXplOiAxNnB4fVxyXG4ucmV2LXByIHNwYW57Zm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnR9XHJcbi5wci1zdCBzcGFue2ZvbnQtc2l6ZTogMjBweDsgZGlzcGxheTogYmxvY2s7bWFyZ2luLWJvdHRvbTogNXB4OyBmb250LWZhbWlseTogJ1JhdGlvbmFsZScsIHNhbnMtc2VyaWYhaW1wb3J0YW50O31cclxuLnByLXN0IC5jb2wtNntwYWRkaW5nOiAxMHB4O31cclxuLmJnLXNoYWRle2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTt9IFxyXG4uaF9kYXNoIHtwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmc6IDA7IHBhZGRpbmctdG9wOiAyMHB4OyB9XHJcbi5oX2Rhc2ggYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDc5LDc5LDc5LDAuMyk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggcmdiYSg3OSw3OSw3OSwwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDc5LDc5LDc5LDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDE2NXB4OyB3aWR0aDogMTAwJTsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9kYXNoLWNhcmQtYmcucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tOyBiYWNrZ3JvdW5kLXNpemU6IDMwJTsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XHJcbn1cclxuLmhfZGFzaCBhOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzOGJhO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMnB4O1xyXG4gICAgbGVmdDogMDtcclxufVxyXG4uSEQtdGl0bGV7XHJcbiAgICBjb2xvcjogIzI4MjgyODtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIG1hcmdpbjogMDsgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDA7cGFkZGluZy1ib3R0b206NXB4OyBsZXR0ZXItc3BhY2luZzogMXB4XHJcbn1cclxuLmYtbGlnaHR7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6IDE0cHg7IGRpc3BsYXk6IGJsb2NrOyBmb250LWZhbWlseTogJ3Byb3hpbWFub3ZhLWxpZ2h0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50OyBjb2xvcjogIzc4Nzg3OFxyXG59XHJcbi5oX2Rhc2ggYSBpbWcge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmhfZGFzaCBhOmhvdmVyIHsgIFxyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoNzksNzksNzksMC41KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2JhKDc5LDc5LDc5LDAuNSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoNzksNzksNzksMC41KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuLmhfZGFzaCBhOmhvdmVyIC5IRC10aXRsZXsgY29sb3I6ICMwMDM4YmE7fSBcclxuLmFsZXJ0IHtwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4OyBmb250LXNpemU6IDE1cHg7IGxpbmUtaGVpZ2h0OiBub3JtYWx9XHJcbi5hbGVydC1kaXNtaXNzaWJsZSAuY2xvc2Uge3BhZGRpbmc6IDVweCAxMHB4OyBvdXRsaW5lOiBub25lIWltcG9ydGFudDt9XHJcbi5hbGVydC1wcmltYXJ5e2NvbG9yOiAjMDAzOGJhfVxyXG4uYWxlcnQtcHJpbWFyeSAuYnRuLXByaW1hcnl7Zm9udC1zaXplOiAxMnB4OyBwYWRkaW5nOiAzcHggOHB4OyBsZXR0ZXItc3BhY2luZzogMXB4OyBtYXJnaW4tdG9wOiAtM3B4OyBtYXJnaW4tYm90dG9tOiAtM3B4fVx0XHJcbi5zZXQtcHRie3BhZGRpbmctdG9wOjhweDsgcGFkZGluZy1ib3R0b206IDhweH1cclxuLnRvdGFsLXNhbGV7cGFkZGluZzogMTVweH1cclxuLnRvdGFsLXNhbGUgLmNhcmQtaGVhZGluZzpiZWZvcmUge2xlZnQ6IC0xNXB4OyB0b3A6IDJweDt9XHJcbi51bml0LXYgc3BhbiwgLnRvdGFsLXZhbCBzcGFue2ZvbnQtc2l6ZTogMjRweDsgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbH1cclxuICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-component',
                templateUrl: 'home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }, { type: _services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] }]; }, null); })();


/***/ }),

/***/ "3Clk":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "0Pcf");





const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "5u0j":
/*!*******************************************************!*\
  !*** ./src/app/modules/home/services/home.service.ts ***!
  \*******************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/api-urls.constants */ "oo4J");
/* harmony import */ var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/http.service */ "bUwk");




class HomeService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getDashboardData() {
        // For Basic integration, APIs being created
        const url = src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].DASHBOARD;
        return this.httpService.get(url);
    }
    getHomeDailyReport(monthly = false) {
        const url = monthly ? src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].HOME_MONTHLY : src_app_core_constants_api_urls_constants__WEBPACK_IMPORTED_MODULE_1__["API_URLS"].HOME_DAILY;
        return this.httpService.get(url);
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpBaseService"])); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpBaseService"] }]; }, null); })();


/***/ }),

/***/ "iydT":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "3Clk");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "0Pcf");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/home.service */ "5u0j");








class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, providers: [
        _services_home_service__WEBPACK_IMPORTED_MODULE_6__["HomeService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [
                    _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
                ],
                providers: [
                    _services_home_service__WEBPACK_IMPORTED_MODULE_6__["HomeService"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-home-home-module.js.map