"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_pessoa_pessoa-detalhar_pessoa-detalhar_module_ts"],{

/***/ 9931:
/*!*******************************************************************************!*\
  !*** ./src/app/page/pessoa/pessoa-detalhar/pessoa-detalhar-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PessoaDetalharPageRoutingModule": () => (/* binding */ PessoaDetalharPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pessoa_detalhar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa-detalhar.page */ 3570);




const routes = [
    {
        path: '',
        component: _pessoa_detalhar_page__WEBPACK_IMPORTED_MODULE_0__.PessoaDetalharPage
    }
];
let PessoaDetalharPageRoutingModule = class PessoaDetalharPageRoutingModule {
};
PessoaDetalharPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PessoaDetalharPageRoutingModule);



/***/ }),

/***/ 4978:
/*!***********************************************************************!*\
  !*** ./src/app/page/pessoa/pessoa-detalhar/pessoa-detalhar.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PessoaDetalharPageModule": () => (/* binding */ PessoaDetalharPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pessoa_detalhar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa-detalhar-routing.module */ 9931);
/* harmony import */ var _pessoa_detalhar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pessoa-detalhar.page */ 3570);







let PessoaDetalharPageModule = class PessoaDetalharPageModule {
};
PessoaDetalharPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _pessoa_detalhar_routing_module__WEBPACK_IMPORTED_MODULE_0__.PessoaDetalharPageRoutingModule
        ],
        declarations: [_pessoa_detalhar_page__WEBPACK_IMPORTED_MODULE_1__.PessoaDetalharPage]
    })
], PessoaDetalharPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_page_pessoa_pessoa-detalhar_pessoa-detalhar_module_ts.js.map