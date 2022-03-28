"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_cartao_cartao_module_ts"],{

/***/ 1921:
/*!******************************************************!*\
  !*** ./src/app/page/cartao/cartao-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartaoPageRoutingModule": () => (/* binding */ CartaoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _cartao_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartao.page */ 7451);




const routes = [
    {
        path: '',
        component: _cartao_page__WEBPACK_IMPORTED_MODULE_0__.CartaoPage
    }
];
let CartaoPageRoutingModule = class CartaoPageRoutingModule {
};
CartaoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartaoPageRoutingModule);



/***/ }),

/***/ 5590:
/*!**********************************************!*\
  !*** ./src/app/page/cartao/cartao.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartaoPageModule": () => (/* binding */ CartaoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cartao_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartao-routing.module */ 1921);
/* harmony import */ var _cartao_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartao.page */ 7451);







let CartaoPageModule = class CartaoPageModule {
};
CartaoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cartao_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartaoPageRoutingModule
        ],
        declarations: [_cartao_page__WEBPACK_IMPORTED_MODULE_1__.CartaoPage]
    })
], CartaoPageModule);



/***/ }),

/***/ 7451:
/*!********************************************!*\
  !*** ./src/app/page/cartao/cartao.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartaoPage": () => (/* binding */ CartaoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cartao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartao.page.html?ngResource */ 2423);
/* harmony import */ var _cartao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartao.page.scss?ngResource */ 2108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CartaoPage = class CartaoPage {
    constructor() { }
    ngOnInit() {
    }
};
CartaoPage.ctorParameters = () => [];
CartaoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cartao',
        template: _cartao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cartao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CartaoPage);



/***/ }),

/***/ 2108:
/*!*********************************************************!*\
  !*** ./src/app/page/cartao/cartao.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0YW8ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2423:
/*!*********************************************************!*\
  !*** ./src/app/page/cartao/cartao.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>cartao</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_cartao_cartao_module_ts.js.map