"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_component_tabmenu_tabmenu_module_ts"],{

/***/ 4378:
/*!*************************************************************!*\
  !*** ./src/app/component/tabmenu/tabmenu-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabmenuPageRoutingModule": () => (/* binding */ TabmenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tabmenu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabmenu.page */ 5007);




const routes = [
    {
        path: '',
        redirectTo: '/tabmenu/monitoramento',
        pathMatch: 'full'
    },
    {
        path: "tabmenu",
        component: _tabmenu_page__WEBPACK_IMPORTED_MODULE_0__.TabmenuPage,
        children: [
            {
                path: "monitoramento",
                children: [
                    {
                        path: "",
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_monitoramento_monitoramento_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../page/monitoramento/monitoramento.module */ 9648)).then(module => module.MonitoramentoPageModule)
                    }
                ]
            },
            {
                path: "configuracao",
                children: [
                    {
                        path: "",
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_configuracao_configuracao_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../page/configuracao/configuracao.module */ 6030)).then(module => module.ConfiguracaoPageModule)
                    }
                ]
            },
            {
                path: "pessoa",
                children: [
                    {
                        path: "",
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_pessoa_pessoa_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../page/pessoa/pessoa.module */ 9771)).then(module => module.PessoaPageModule)
                    }
                ]
            },
            {
                path: "notificacao",
                children: [
                    {
                        path: "",
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_notificacao_notificacao_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../page/notificacao/notificacao.module */ 5848)).then(m => m.NotificacaoPageModule)
                    }
                ]
            },
            {
                path: "cartao",
                children: [
                    {
                        path: "",
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_cartao_cartao_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../page/cartao/cartao.module */ 5590)).then(m => m.CartaoPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabmenu/monitoramento',
                pathMatch: 'full'
            }
        ]
    },
];
let TabmenuPageRoutingModule = class TabmenuPageRoutingModule {
};
TabmenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabmenuPageRoutingModule);



/***/ }),

/***/ 7880:
/*!*****************************************************!*\
  !*** ./src/app/component/tabmenu/tabmenu.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabmenuPageModule": () => (/* binding */ TabmenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tabmenu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabmenu-routing.module */ 4378);
/* harmony import */ var _tabmenu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabmenu.page */ 5007);







let TabmenuPageModule = class TabmenuPageModule {
};
TabmenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabmenu_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabmenuPageRoutingModule
        ],
        declarations: [_tabmenu_page__WEBPACK_IMPORTED_MODULE_1__.TabmenuPage]
    })
], TabmenuPageModule);



/***/ }),

/***/ 5007:
/*!***************************************************!*\
  !*** ./src/app/component/tabmenu/tabmenu.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabmenuPage": () => (/* binding */ TabmenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabmenu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabmenu.page.html?ngResource */ 769);
/* harmony import */ var _tabmenu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabmenu.page.scss?ngResource */ 7648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TabmenuPage = class TabmenuPage {
    constructor() { }
    ngOnInit() {
    }
};
TabmenuPage.ctorParameters = () => [];
TabmenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabmenu',
        template: _tabmenu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabmenu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabmenuPage);



/***/ }),

/***/ 7648:
/*!****************************************************************!*\
  !*** ./src/app/component/tabmenu/tabmenu.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-fab {\n  margin-bottom: 16px;\n}\nion-fab ion-fab-button {\n  --background: linear-gradient(30deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYm1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjtBQUFJO0VBQ0ksb0dBQUE7QUFFUiIsImZpbGUiOiJ0YWJtZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGlvbi1mYWItYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMGRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoOSw5LDEyMSwxKSAzNSUsIHJnYmEoMCwyMTIsMjU1LDEpIDEwMCUpO1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 769:
/*!****************************************************************!*\
  !*** ./src/app/component/tabmenu/tabmenu.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"monitoramento\">\n      <ion-icon name=\"logo-apple-ar\"></ion-icon>\n      <ion-label>Monitoramento</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"cartao\">\n      <ion-icon name=\"card-outline\"></ion-icon>\n      <ion-label>Cartões</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"notificacao\">\n      <ion-icon name=\"alert-circle-outline\"></ion-icon>\n      <ion-label>Notificações</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"configuracao\">\n      <ion-icon name=\"hammer-outline\"></ion-icon>\n      <ion-label>Configuração</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n\n<ion-fab vertical=\"bottom\" horizontal=\"center\">\n  <ion-fab-button routerLink=\"/tabmenu/pessoa\">\n    <ion-icon name=\"add-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>";

/***/ })

}]);
//# sourceMappingURL=src_app_component_tabmenu_tabmenu_module_ts.js.map