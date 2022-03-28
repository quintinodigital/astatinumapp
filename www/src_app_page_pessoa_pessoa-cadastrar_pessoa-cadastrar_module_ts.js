"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_pessoa_pessoa-cadastrar_pessoa-cadastrar_module_ts"],{

/***/ 541:
/*!*********************************************************************************!*\
  !*** ./src/app/page/pessoa/pessoa-cadastrar/pessoa-cadastrar-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PessoaCadastrarPageRoutingModule": () => (/* binding */ PessoaCadastrarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pessoa_cadastrar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa-cadastrar.page */ 1742);




const routes = [
    {
        path: '',
        component: _pessoa_cadastrar_page__WEBPACK_IMPORTED_MODULE_0__.PessoaCadastrarPage
    }
];
let PessoaCadastrarPageRoutingModule = class PessoaCadastrarPageRoutingModule {
};
PessoaCadastrarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PessoaCadastrarPageRoutingModule);



/***/ }),

/***/ 3411:
/*!*************************************************************************!*\
  !*** ./src/app/page/pessoa/pessoa-cadastrar/pessoa-cadastrar.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PessoaCadastrarPageModule": () => (/* binding */ PessoaCadastrarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _pessoa_cadastrar_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pessoa-cadastrar-routing.module */ 541);
/* harmony import */ var _pessoa_cadastrar_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pessoa-cadastrar.page */ 1742);








let PessoaCadastrarPageModule = class PessoaCadastrarPageModule {
};
PessoaCadastrarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pessoa_cadastrar_routing_module__WEBPACK_IMPORTED_MODULE_1__.PessoaCadastrarPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule
        ],
        declarations: [_pessoa_cadastrar_page__WEBPACK_IMPORTED_MODULE_2__.PessoaCadastrarPage]
    })
], PessoaCadastrarPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_page_pessoa_pessoa-cadastrar_pessoa-cadastrar_module_ts.js.map