"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_monitoramento_monitoramento_module_ts"],{

/***/ 6527:
/*!********************************************************************!*\
  !*** ./src/app/page/monitoramento/monitoramento-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitoramentoPageRoutingModule": () => (/* binding */ MonitoramentoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _monitoramento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitoramento.page */ 7220);




const routes = [
    {
        path: '',
        component: _monitoramento_page__WEBPACK_IMPORTED_MODULE_0__.MonitoramentoPage
    }
];
let MonitoramentoPageRoutingModule = class MonitoramentoPageRoutingModule {
};
MonitoramentoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MonitoramentoPageRoutingModule);



/***/ }),

/***/ 9648:
/*!************************************************************!*\
  !*** ./src/app/page/monitoramento/monitoramento.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitoramentoPageModule": () => (/* binding */ MonitoramentoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _monitoramento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitoramento-routing.module */ 6527);
/* harmony import */ var _monitoramento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitoramento.page */ 7220);







let MonitoramentoPageModule = class MonitoramentoPageModule {
};
MonitoramentoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _monitoramento_routing_module__WEBPACK_IMPORTED_MODULE_0__.MonitoramentoPageRoutingModule
        ],
        declarations: [_monitoramento_page__WEBPACK_IMPORTED_MODULE_1__.MonitoramentoPage]
    })
], MonitoramentoPageModule);



/***/ }),

/***/ 7220:
/*!**********************************************************!*\
  !*** ./src/app/page/monitoramento/monitoramento.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitoramentoPage": () => (/* binding */ MonitoramentoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _monitoramento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitoramento.page.html?ngResource */ 705);
/* harmony import */ var _monitoramento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitoramento.page.scss?ngResource */ 4539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MonitoramentoPage = class MonitoramentoPage {
    constructor() { }
    ngOnInit() {
    }
};
MonitoramentoPage.ctorParameters = () => [];
MonitoramentoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-monitoramento',
        template: _monitoramento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_monitoramento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MonitoramentoPage);



/***/ }),

/***/ 4539:
/*!***********************************************************************!*\
  !*** ./src/app/page/monitoramento/monitoramento.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  background: transparent;\n}\nion-header ion-item {\n  --background: transparent;\n}\nion-content .cabecalho {\n  height: 45vh;\n  margin-top: -60px;\n  border-radius: 0px 0px 20px 20px;\n  background: linear-gradient(90deg, var(--ion-color-tertiary) 100%, var(--ion-color-primary) 100%);\n  box-shadow: 0 1px 10px var(--ion-color-light);\n}\nion-content ion-grid {\n  margin-top: -220px;\n}\nion-content ion-grid ion-col ion-note {\n  color: #eeeeee;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\nion-content ion-grid ion-col p {\n  text-align: left;\n}\nion-content ion-grid ion-col p ion-chip ion-label {\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n}\nion-content ion-grid ion-col ion-button {\n  margin-top: 14px;\n}\nion-content ion-grid ion-card {\n  box-shadow: -1px 11px 13px -6px #575656;\n  border-radius: 10px;\n  margin: 10px 0;\n}\nion-content ion-grid ion-card ion-card-content {\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\nion-content ion-grid ion-list {\n  background: transparent;\n}\nion-content ion-grid ion-list ion-list-header ion-label {\n  font-size: 16px;\n  font-weight: bold;\n  color: dimgray;\n}\nion-content ion-grid ion-list ion-item {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3JhbWVudG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjtBQUFJO0VBQ0kseUJBQUE7QUFFUjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpR0FBQTtFQUNBLDZDQUFBO0FBQVI7QUFFSTtFQUNJLGtCQUFBO0FBQVI7QUFFWTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQWhCO0FBRVk7RUFDSSxnQkFBQTtBQUFoQjtBQUVvQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBeEI7QUFJWTtFQUNJLGdCQUFBO0FBRmhCO0FBS1E7RUFDSSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUhaO0FBSVk7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0FBRmhCO0FBS1E7RUFDSSx1QkFBQTtBQUhaO0FBS2dCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUhwQjtBQU1ZO0VBRUksbUJBQUE7QUFMaEIiLCJmaWxlIjoibW9uaXRvcmFtZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLmNhYmVjYWxobyB7XG4gICAgICAgIGhlaWdodDogNDV2aDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgMTAwJSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDEwMCUpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIyMHB4O1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIGlvbi1ub3RlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBpb24tY2hpcCB7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxMXB4IDEzcHggLTZweCByZ2IoODcsIDg2LCA4Nik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxpc3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBpb24tbGlzdC1oZWFkZXIge1xuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTA1LCAxMDUsIDEwNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogcmdiKDIyMywgMjIzLCAyMjMpIHNvbGlkIDJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 705:
/*!***********************************************************************!*\
  !*** ./src/app/page/monitoramento/monitoramento.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n  <ion-header class=\"ion-no-border\">\n    <ion-item lines=\"none\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"main-menu\" color=\"light\"></ion-menu-button>\n      </ion-buttons>\n      </ion-item>\n  </ion-header>\n\n  <div class=\"cabecalho\">\n\n  </div>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col size=\"6\">\n        <ion-label>\n          <ion-note class=\"ion-margin-start\">Saldo em Conta</ion-note>\n          <p>\n            <ion-chip color=\"light\">\n              <ion-label>R$ 10.000,00</ion-label>\n            </ion-chip>\n          </p>\n        </ion-label>\n      </ion-col>\n\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <ion-button color=\"secondary\" fill=\"outline\">\n          <ion-text color=\"light\">Lançamento</ion-text>\n          <ion-icon name=\"add-outline\" slot=\"end\" color=\"light\"></ion-icon>\n        </ion-button>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class=\"ion-margin-horizontal ion-margin-top\">\n      <ion-col>\n        <ion-label color=\"light\">\n          <b>Atalhos</b>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"6\" routerLink=\"\">\n        <ion-card class=\"ion-text-center\">\n          <ion-card-header>\n            <div>\n              <ion-button fill=\"clear\">\n                <ion-icon name=\"trending-up-outline\" style=\"font-size: 30px;\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-card-header>\n          <ion-card-content>\n            Receitas\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"ion-text-center\">\n          <ion-card-header>\n            <div>\n              <ion-button fill=\"clear\">\n                <ion-icon name=\"trending-down-outline\" style=\"font-size: 30px;\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-card-header>\n          <ion-card-content>\n            Despesas\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"ion-text-center\">\n          <ion-card-header>\n            <div>\n              <ion-button fill=\"clear\">\n                <ion-icon name=\"swap-horizontal-outline\" style=\"font-size: 30px;\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-card-header>\n          <ion-card-content>\n            Emprestimos\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"ion-text-center\">\n          <ion-card-header>\n            <div>\n              <ion-button fill=\"clear\">\n                <ion-icon name=\"swap-vertical-outline\" style=\"font-size: 30px;\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-card-header>\n          <ion-card-content>\n            Transferência\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <div style=\"margin-top: 20px; font-size: 16px; font-weight: bold;\">\n      <ion-text>Transações</ion-text>\n    </div>\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-card>\n        <ion-card-content>\n          <ion-list lines=\"none\">\n            <ion-item>\n              <ion-avatar slot=\"start\" style=\"font-size: 30px;\">\n                <ion-icon name=\"logo-apple\"></ion-icon>\n              </ion-avatar>\n              <ion-label text-wrap style=\"font-weight: bold;\">\n                Apple Brasil\n                <p style=\"font-size: 12px;\">Macbook Pro 16GB 512 SDD i9</p>\n                <p style=\"font-size: 12px;\">20/03/2022</p>\n              </ion-label>\n              <ion-text slot=\"end\" style=\"font-size: 14px;\">\n                <ion-icon name=\"arrow-down-outline\" color=\"danger\"></ion-icon>\n                R$ 15.000,00\n              </ion-text>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n\n    <ion-row>\n      <ion-card>\n        <ion-card-content>\n          <ion-list lines=\"none\">\n            <ion-item>\n              <ion-avatar slot=\"start\" style=\"font-size: 30px;\">\n                <ion-icon name=\"logo-mastodon\"></ion-icon>\n              </ion-avatar>\n              <ion-label style=\"font-weight: bold;\">\n                Mirante Tecnologia da Informação\n                <p style=\"font-size: 12px;\">Salário Mensal</p>\n                <p style=\"font-size: 12px;\">10/03/2022</p>\n              </ion-label>\n              <ion-text slot=\"end\" style=\"font-size: 14px;\">\n                <ion-icon name=\"arrow-up-outline\" color=\"success\"></ion-icon>\n                R$ 6.000,00\n              </ion-text>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_monitoramento_monitoramento_module_ts.js.map