"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_registrar_registrar_module_ts"],{

/***/ 2496:
/*!************************************************************!*\
  !*** ./src/app/page/registrar/registrar-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarPageRoutingModule": () => (/* binding */ RegistrarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar.page */ 2027);




const routes = [
    {
        path: '',
        component: _registrar_page__WEBPACK_IMPORTED_MODULE_0__.RegistrarPage
    }
];
let RegistrarPageRoutingModule = class RegistrarPageRoutingModule {
};
RegistrarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistrarPageRoutingModule);



/***/ }),

/***/ 828:
/*!****************************************************!*\
  !*** ./src/app/page/registrar/registrar.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarPageModule": () => (/* binding */ RegistrarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registrar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar-routing.module */ 2496);
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registrar.page */ 2027);







let RegistrarPageModule = class RegistrarPageModule {
};
RegistrarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registrar_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrarPageRoutingModule
        ],
        declarations: [_registrar_page__WEBPACK_IMPORTED_MODULE_1__.RegistrarPage]
    })
], RegistrarPageModule);



/***/ }),

/***/ 2027:
/*!**************************************************!*\
  !*** ./src/app/page/registrar/registrar.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarPage": () => (/* binding */ RegistrarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registrar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar.page.html?ngResource */ 4151);
/* harmony import */ var _registrar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registrar.page.scss?ngResource */ 5094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let RegistrarPage = class RegistrarPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirecionarTelaAcessar() {
        return this.router.navigate(["/acessar"]);
    }
};
RegistrarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
RegistrarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-registrar',
        template: _registrar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registrar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistrarPage);



/***/ }),

/***/ 5094:
/*!***************************************************************!*\
  !*** ./src/app/page/registrar/registrar.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4151:
/*!***************************************************************!*\
  !*** ./src/app/page/registrar/registrar.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>registrar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-button (click)=\"redirecionarTelaAcessar()\" class=\"botao-princial\">Acessar</ion-button>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_registrar_registrar_module_ts.js.map