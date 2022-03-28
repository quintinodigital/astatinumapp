"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_bemvindo_bemvindo_module_ts"],{

/***/ 349:
/*!**********************************************************!*\
  !*** ./src/app/page/bemvindo/bemvindo-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BemvindoPageRoutingModule": () => (/* binding */ BemvindoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _bemvindo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bemvindo.page */ 2185);




const routes = [
    {
        path: '',
        component: _bemvindo_page__WEBPACK_IMPORTED_MODULE_0__.BemvindoPage
    }
];
let BemvindoPageRoutingModule = class BemvindoPageRoutingModule {
};
BemvindoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BemvindoPageRoutingModule);



/***/ }),

/***/ 4957:
/*!**************************************************!*\
  !*** ./src/app/page/bemvindo/bemvindo.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BemvindoPageModule": () => (/* binding */ BemvindoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _bemvindo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bemvindo-routing.module */ 349);
/* harmony import */ var _bemvindo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bemvindo.page */ 2185);







let BemvindoPageModule = class BemvindoPageModule {
};
BemvindoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bemvindo_routing_module__WEBPACK_IMPORTED_MODULE_0__.BemvindoPageRoutingModule
        ],
        declarations: [_bemvindo_page__WEBPACK_IMPORTED_MODULE_1__.BemvindoPage]
    })
], BemvindoPageModule);



/***/ }),

/***/ 2185:
/*!************************************************!*\
  !*** ./src/app/page/bemvindo/bemvindo.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BemvindoPage": () => (/* binding */ BemvindoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _bemvindo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bemvindo.page.html?ngResource */ 6954);
/* harmony import */ var _bemvindo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bemvindo.page.scss?ngResource */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let BemvindoPage = class BemvindoPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    redirecionarTelaAcessar() {
        return this.router.navigate(["/acessar"]);
    }
    redirecionarTelaRegistrar() {
        return this.router.navigate(["/registrar"]);
    }
};
BemvindoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
BemvindoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-bemvindo',
        template: _bemvindo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_bemvindo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BemvindoPage);



/***/ }),

/***/ 8111:
/*!*************************************************************!*\
  !*** ./src/app/page/bemvindo/bemvindo.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  text-transform: initial;\n  --background: #FEFEFF;\n}\nion-content ion-img {\n  margin-top: 70px;\n}\nion-content ion-text {\n  display: flex;\n  justify-content: center;\n  margin-top: -80px;\n  font-size: 30px;\n  font-weight: bold;\n  color: white;\n}\nion-content ion-button {\n  margin-top: 100px;\n  display: flex;\n  justify-content: center;\n}\nion-content ion-label {\n  display: flex;\n  justify-content: center;\n  margin-top: 60px;\n  color: #9e9e9e;\n}\n.botao-princial {\n  --background: linear-gradient(160deg, #086AAF 0%, #4DBCE6 100%);\n  --box-shadow: none;\n  position: relative;\n  margin-bottom: 15px;\n}\n.botao-princial::after {\n  content: \"\";\n  position: absolute;\n  width: 80%;\n  right: 10%;\n  bottom: 0;\n  top: 10px;\n  height: 40px;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlbXZpbmRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVSO0FBRUE7RUFFSSwrREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSiIsImZpbGUiOiJiZW12aW5kby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkVGRUZGO1xuICAgIGlvbi1pbWcge1xuICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIH1cbiAgICBpb24tdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAtODBweDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgY29sb3I6IHJnYigxNTgsIDE1OCwgMTU4KTtcbiAgICB9XG59XG5cbi5ib3Rhby1wcmluY2lhbCB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTAyLCAxMjYsIDIzNCwgMSkgMCUsIHJnYmEoMTAwLCAxODIsIDI1NSwgMSkgMTAwJSk7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjMDg2QUFGIDAlLCAjNERCQ0U2IDEwMCUpO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmJvdGFvLXByaW5jaWFsOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICByaWdodDogMTAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDEwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHotaW5kZXg6IC0xO1xufSJdfQ== */";

/***/ }),

/***/ 6954:
/*!*************************************************************!*\
  !*** ./src/app/page/bemvindo/bemvindo.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n  <ion-img src=\"../../../assets/backgroundv.gif\"></ion-img>\n  <ion-text>Astatinum</ion-text>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n        <ion-button (click)=\"redirecionarTelaAcessar()\" class=\"botao-princial\">Acessar</ion-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-button (click)=\"redirecionarTelaRegistrar()\" fill=\"outline\">Registrar-se</ion-button>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-label>\n    <b>Astatinum Sistema Financeiro</b>\n  </ion-label>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_page_bemvindo_bemvindo_module_ts.js.map