"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_notificacao_notificacao_module_ts"],{

/***/ 3964:
/*!****************************************************************!*\
  !*** ./src/app/page/notificacao/notificacao-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificacaoPageRoutingModule": () => (/* binding */ NotificacaoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _notificacao_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notificacao.page */ 7652);




const routes = [
    {
        path: '',
        component: _notificacao_page__WEBPACK_IMPORTED_MODULE_0__.NotificacaoPage
    }
];
let NotificacaoPageRoutingModule = class NotificacaoPageRoutingModule {
};
NotificacaoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificacaoPageRoutingModule);



/***/ }),

/***/ 5848:
/*!********************************************************!*\
  !*** ./src/app/page/notificacao/notificacao.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificacaoPageModule": () => (/* binding */ NotificacaoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _notificacao_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notificacao-routing.module */ 3964);
/* harmony import */ var _notificacao_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificacao.page */ 7652);







let NotificacaoPageModule = class NotificacaoPageModule {
};
NotificacaoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notificacao_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificacaoPageRoutingModule
        ],
        declarations: [_notificacao_page__WEBPACK_IMPORTED_MODULE_1__.NotificacaoPage]
    })
], NotificacaoPageModule);



/***/ }),

/***/ 7652:
/*!******************************************************!*\
  !*** ./src/app/page/notificacao/notificacao.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificacaoPage": () => (/* binding */ NotificacaoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _notificacao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notificacao.page.html?ngResource */ 3876);
/* harmony import */ var _notificacao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificacao.page.scss?ngResource */ 1932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let NotificacaoPage = class NotificacaoPage {
    constructor() { }
    ngOnInit() {
    }
};
NotificacaoPage.ctorParameters = () => [];
NotificacaoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-notificacao',
        template: _notificacao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notificacao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificacaoPage);



/***/ }),

/***/ 1932:
/*!*******************************************************************!*\
  !*** ./src/app/page/notificacao/notificacao.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYWNhby5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3876:
/*!*******************************************************************!*\
  !*** ./src/app/page/notificacao/notificacao.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>notificacao</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_notificacao_notificacao_module_ts.js.map