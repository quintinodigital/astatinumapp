"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_configuracao_configuracao_module_ts"],{

/***/ 1535:
/*!******************************************************************!*\
  !*** ./src/app/page/configuracao/configuracao-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiguracaoPageRoutingModule": () => (/* binding */ ConfiguracaoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _configuracao_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuracao.page */ 9657);




const routes = [
    {
        path: '',
        component: _configuracao_page__WEBPACK_IMPORTED_MODULE_0__.ConfiguracaoPage
    }
];
let ConfiguracaoPageRoutingModule = class ConfiguracaoPageRoutingModule {
};
ConfiguracaoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfiguracaoPageRoutingModule);



/***/ }),

/***/ 6030:
/*!**********************************************************!*\
  !*** ./src/app/page/configuracao/configuracao.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiguracaoPageModule": () => (/* binding */ ConfiguracaoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _configuracao_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuracao-routing.module */ 1535);
/* harmony import */ var _configuracao_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuracao.page */ 9657);







let ConfiguracaoPageModule = class ConfiguracaoPageModule {
};
ConfiguracaoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _configuracao_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfiguracaoPageRoutingModule
        ],
        declarations: [_configuracao_page__WEBPACK_IMPORTED_MODULE_1__.ConfiguracaoPage]
    })
], ConfiguracaoPageModule);



/***/ }),

/***/ 9657:
/*!********************************************************!*\
  !*** ./src/app/page/configuracao/configuracao.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiguracaoPage": () => (/* binding */ ConfiguracaoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _configuracao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuracao.page.html?ngResource */ 8522);
/* harmony import */ var _configuracao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuracao.page.scss?ngResource */ 3349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let ConfiguracaoPage = class ConfiguracaoPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    redirecionarTelaGerenciadorPessoa() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return this.modalController.dismiss();
        });
    }
    recuperarImagem(imagem) {
        return 'data:image/png;base64,' + imagem;
    }
};
ConfiguracaoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ConfiguracaoPage.propDecorators = {
    pessoaEntity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ConfiguracaoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-configuracao',
        template: _configuracao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_configuracao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfiguracaoPage);



/***/ }),

/***/ 3349:
/*!*********************************************************************!*\
  !*** ./src/app/page/configuracao/configuracao.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  background-color: #2196F3;\n  height: 180px;\n  padding-top: 1px;\n  color: #FFFFFF;\n  font-weight: bold;\n}\n.header p {\n  font-size: 14px;\n  color: #e6e3e3;\n}\n.avatar {\n  height: 130px;\n  width: 130px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.bordaA {\n  border: 8px solid #006BBF;\n  border-radius: 50%;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.bordaB {\n  border: 4px solid white;\n  border-radius: 50%;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.centralizar {\n  display: flex;\n  justify-content: center;\n  margin-top: -80px;\n}\nion-list ion-list-header {\n  text-align: left;\n  font-weight: bold;\n}\nion-list ion-list-header ion-label {\n  color: #707070;\n}\nion-list ion-card ion-item ion-label {\n  font-size: 12px;\n}\nion-list ion-card ion-item ion-label p {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYWNhby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUVSO0FBRUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUFDSjtBQUVBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUFDSjtBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUdJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUFSO0FBQ1E7RUFDSSxjQUFBO0FBQ1o7QUFJWTtFQUNJLGVBQUE7QUFGaEI7QUFHZ0I7RUFDSSxlQUFBO0FBRHBCIiwiZmlsZSI6ImNvbmZpZ3VyYWNhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgcGFkZGluZy10b3A6IDFweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogcmdiKDIzMCwgMjI3LCAyMjcpO1xuICAgIH1cbn1cblxuLmF2YXRhciB7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3JkYUEge1xuICAgIGJvcmRlcjogOHB4IHNvbGlkICMwMDZCQkY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmJvcmRhQiB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmNlbnRyYWxpemFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC04MHB4O1xufVxuXG5pb24tbGlzdCB7XG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDExMiwgMTEyLCAxMTIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";

/***/ }),

/***/ 8522:
/*!*********************************************************************!*\
  !*** ./src/app/page/configuracao/configuracao.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-text-center\">\n\n  <div class=\"header\">\n    <h2>{{pessoaEntity.nome}}</h2>\n    <p>Administrador Financeiro</p>\n  </div>\n\n  <div class=\"centralizar\">\n    <div class=\"bordaA\">\n      <div class=\"bordaB\">\n        <div class=\"avatar\">\n        <img [src]=\"pessoaEntity.arquivo != null ? recuperarImagem(pessoaEntity.arquivo.imagem) : '../../../../assets/padrao_i.gif'\" />\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Notificações</ion-label>\n    </ion-list-header>\n    <ion-card>\n      <ion-item>\n        <ion-label text-wrap>\n          Alertas de Pagamentos\n          <p>Envia uma notificação toda vez que ocorrer um Pagamento</p>\n        </ion-label>\n        <ion-toggle slot=\"end\" color=\"primary\"></ion-toggle>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Segurança</ion-label>\n    </ion-list-header>\n    <ion-card>\n      <ion-item>\n        <ion-label text-wrap>\n          Mudar Nome de Usuário\n        </ion-label>\n        <ion-button fill=\"clear\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>\n          Mudar Senha de Acesso\n        </ion-label>\n        <ion-button fill=\"clear\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>\n          Mudar E-mail\n        </ion-label>\n        <ion-button fill=\"clear\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>\n          Tornar Perfil Privado\n        </ion-label>\n        <ion-toggle slot=\"end\" color=\"primary\"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>\n          Habilitar Verificação de Dois Fatores\n        </ion-label>\n        <ion-toggle slot=\"end\" color=\"primary\"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>\n          Deslogar de todas as Plataformas\n        </ion-label>\n        <ion-button fill=\"clear\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_configuracao_configuracao_module_ts.js.map