"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_acessar_acessar_module_ts"],{

/***/ 8658:
/*!********************************************************!*\
  !*** ./src/app/page/acessar/acessar-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcessarPageRoutingModule": () => (/* binding */ AcessarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _acessar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acessar.page */ 7304);




const routes = [
    {
        path: '',
        component: _acessar_page__WEBPACK_IMPORTED_MODULE_0__.AcessarPage
    }
];
let AcessarPageRoutingModule = class AcessarPageRoutingModule {
};
AcessarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AcessarPageRoutingModule);



/***/ }),

/***/ 6901:
/*!************************************************!*\
  !*** ./src/app/page/acessar/acessar.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcessarPageModule": () => (/* binding */ AcessarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _acessar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acessar-routing.module */ 8658);
/* harmony import */ var _acessar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acessar.page */ 7304);







let AcessarPageModule = class AcessarPageModule {
};
AcessarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _acessar_routing_module__WEBPACK_IMPORTED_MODULE_0__.AcessarPageRoutingModule
        ],
        declarations: [_acessar_page__WEBPACK_IMPORTED_MODULE_1__.AcessarPage]
    })
], AcessarPageModule);



/***/ }),

/***/ 7304:
/*!**********************************************!*\
  !*** ./src/app/page/acessar/acessar.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcessarPage": () => (/* binding */ AcessarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _acessar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acessar.page.html?ngResource */ 6630);
/* harmony import */ var _acessar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acessar.page.scss?ngResource */ 2080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let AcessarPage = class AcessarPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirecionarTelaMonitoramento() {
        return this.router.navigate(["/tabmenu/monitoramento"]);
    }
};
AcessarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AcessarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-acessar',
        template: _acessar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_acessar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AcessarPage);



/***/ }),

/***/ 2080:
/*!***********************************************************!*\
  !*** ./src/app/page/acessar/acessar.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Vzc2FyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6630:
/*!***********************************************************!*\
  !*** ./src/app/page/acessar/acessar.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>acessar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-col>\n    <ion-button (click)=\"redirecionarTelaMonitoramento()\" class=\"botao-princial\">Monitoramento</ion-button>\n  </ion-col>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_acessar_acessar_module_ts.js.map