"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_pessoa_pessoa_module_ts"],{

/***/ 1742:
/*!***********************************************************************!*\
  !*** ./src/app/page/pessoa/pessoa-cadastrar/pessoa-cadastrar.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PessoaCadastrarPage": () => (/* binding */ PessoaCadastrarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pessoa_cadastrar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa-cadastrar.page.html?ngResource */ 9941);
/* harmony import */ var _pessoa_cadastrar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pessoa-cadastrar.page.scss?ngResource */ 4925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _service_pessoa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../service/pessoa.service */ 7227);







let PessoaCadastrarPage = class PessoaCadastrarPage {
    constructor(pessoaService, modalController, formBuilder) {
        this.pessoaService = pessoaService;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.formulario = this.formBuilder.group({
            nome: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)])]
        });
    }
    ngOnInit() { }
    redirecionarTelaGerenciadorPessoa() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // return this.modalController.dismiss();
            return location.reload();
        });
    }
    saveOne() {
        const pessoaEntity = {
            nome: this.formulario.value.nome
        };
        this.pessoaService.saveOne(pessoaEntity).subscribe(response => {
            console.log("Dados Salvos com Sucesso!");
            this.redirecionarTelaGerenciadorPessoa();
        });
    }
};
PessoaCadastrarPage.ctorParameters = () => [
    { type: _service_pessoa_service__WEBPACK_IMPORTED_MODULE_2__.PessoaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
PessoaCadastrarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-pessoa-cadastrar',
        template: _pessoa_cadastrar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pessoa_cadastrar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PessoaCadastrarPage);



/***/ }),

/***/ 3570:
/*!*********************************************************************!*\
  !*** ./src/app/page/pessoa/pessoa-detalhar/pessoa-detalhar.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PessoaDetalharPage": () => (/* binding */ PessoaDetalharPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pessoa_detalhar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa-detalhar.page.html?ngResource */ 4988);
/* harmony import */ var _pessoa_detalhar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pessoa-detalhar.page.scss?ngResource */ 4199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_service_pessoa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pessoa.service */ 7227);






let PessoaDetalharPage = class PessoaDetalharPage {
    constructor(alertController, pessoaService) {
        this.alertController = alertController;
        this.pessoaService = pessoaService;
    }
    ngOnInit() { }
    updateOne() {
        this.pessoaService.updateOne(this.pessoaEntityParameter).subscribe(response => {
            console.log("Dados Atualizados com Sucesso!", response);
            this.redirecionarTelaGerenciadorPessoa();
        });
    }
    deleteOne() {
        this.pessoaService.deleteOne(this.pessoaEntityParameter.codigo).subscribe(response => {
            console.log("Dados Removidos com Sucesso!", response);
            this.redirecionarTelaGerenciadorPessoa();
        });
    }
    redirecionarTelaGerenciadorPessoa() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return location.reload();
        });
    }
    recuperarImagem(imagem) {
        return 'data:image/png;base64,' + imagem;
    }
    apresentarAlertaExclusaoRegistro() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alerta = yield this.alertController.create({
                header: 'Atenção',
                subHeader: '',
                message: 'Deseja realmente Excluir esse Registro?',
                buttons: [
                    { text: 'Não' },
                    { text: 'Sim', id: 'confirm-button', handler: () => { this.deleteOne(); } }
                ]
            });
            return alerta.present();
        });
    }
};
PessoaDetalharPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: src_app_service_pessoa_service__WEBPACK_IMPORTED_MODULE_2__.PessoaService }
];
PessoaDetalharPage.propDecorators = {
    pessoaEntityParameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
PessoaDetalharPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-pessoa-detalhar',
        template: _pessoa_detalhar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pessoa_detalhar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PessoaDetalharPage);



/***/ }),

/***/ 2615:
/*!******************************************************!*\
  !*** ./src/app/page/pessoa/pessoa-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PessoaPageRoutingModule": () => (/* binding */ PessoaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pessoa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa.page */ 1949);




const routes = [
    {
        path: '',
        component: _pessoa_page__WEBPACK_IMPORTED_MODULE_0__.PessoaPage
    },
    {
        path: 'pessoa-cadastrar',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_pessoa_pessoa-cadastrar_pessoa-cadastrar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pessoa-cadastrar/pessoa-cadastrar.module */ 3411)).then(m => m.PessoaCadastrarPageModule)
    },
    {
        path: 'pessoa-detalhar',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_pessoa_pessoa-detalhar_pessoa-detalhar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pessoa-detalhar/pessoa-detalhar.module */ 4978)).then(m => m.PessoaDetalharPageModule)
    }
];
let PessoaPageRoutingModule = class PessoaPageRoutingModule {
};
PessoaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PessoaPageRoutingModule);



/***/ }),

/***/ 9771:
/*!**********************************************!*\
  !*** ./src/app/page/pessoa/pessoa.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PessoaPageModule": () => (/* binding */ PessoaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _pessoa_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pessoa-routing.module */ 2615);
/* harmony import */ var _pessoa_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pessoa.page */ 1949);








let PessoaPageModule = class PessoaPageModule {
};
PessoaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pessoa_routing_module__WEBPACK_IMPORTED_MODULE_1__.PessoaPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule
        ],
        declarations: [_pessoa_page__WEBPACK_IMPORTED_MODULE_2__.PessoaPage]
    })
], PessoaPageModule);



/***/ }),

/***/ 1949:
/*!********************************************!*\
  !*** ./src/app/page/pessoa/pessoa.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PessoaPage": () => (/* binding */ PessoaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pessoa_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa.page.html?ngResource */ 1554);
/* harmony import */ var _pessoa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pessoa.page.scss?ngResource */ 6960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _service_pessoa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/pessoa.service */ 7227);
/* harmony import */ var _pessoa_cadastrar_pessoa_cadastrar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pessoa-cadastrar/pessoa-cadastrar.page */ 1742);
/* harmony import */ var _pessoa_detalhar_pessoa_detalhar_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pessoa-detalhar/pessoa-detalhar.page */ 3570);








let PessoaPage = class PessoaPage {
    constructor(pessoaService, modalController) {
        this.pessoaService = pessoaService;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.findAll();
    }
    findAll() {
        this.pessoaService.findAll().subscribe(response => {
            this.pessoaList = response;
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
            this.findAll();
        }, 2000);
    }
    recuperarImagem(imagem) {
        return 'data:image/png;base64,' + imagem;
    }
    redirecionarTelaCadastrarPessoa() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const pessoaCadastrarModal = yield this.modalController.create({
                component: _pessoa_cadastrar_pessoa_cadastrar_page__WEBPACK_IMPORTED_MODULE_3__.PessoaCadastrarPage
            });
            return pessoaCadastrarModal.present();
        });
    }
    redirecionarTelaDetalharPessoa(pessoaEntity) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const pessoaCadastrarModal = yield this.modalController.create({
                component: _pessoa_detalhar_pessoa_detalhar_page__WEBPACK_IMPORTED_MODULE_4__.PessoaDetalharPage,
                componentProps: { pessoaEntityParameter: pessoaEntity }
            });
            return pessoaCadastrarModal.present();
        });
    }
};
PessoaPage.ctorParameters = () => [
    { type: _service_pessoa_service__WEBPACK_IMPORTED_MODULE_2__.PessoaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
PessoaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-pessoa',
        template: _pessoa_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pessoa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PessoaPage);



/***/ }),

/***/ 7227:
/*!*******************************************!*\
  !*** ./src/app/service/pessoa.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PessoaService": () => (/* binding */ PessoaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let PessoaService = class PessoaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    findAll() {
        return this.httpClient.get("http://127.0.0.1:8080/pessoa");
    }
    saveOne(pessoaEntity) {
        return this.httpClient.post("http://127.0.0.1:8080/pessoa", pessoaEntity);
    }
    updateOne(pessoaEntity) {
        return this.httpClient.put("http://127.0.0.1:8080/pessoa", pessoaEntity);
    }
    deleteOne(pessoaCodigo) {
        return this.httpClient.delete(`http://127.0.0.1:8080/pessoa/${pessoaCodigo}`);
    }
};
PessoaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
PessoaService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PessoaService);



/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule),
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); };
Ng2SearchPipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 4925:
/*!************************************************************************************!*\
  !*** ./src/app/page/pessoa/pessoa-cadastrar/pessoa-cadastrar.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content ion-item {\n  margin-top: 20px;\n}\nion-content ion-button {\n  margin-top: 20px;\n  text-decoration: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlc3NvYS1jYWRhc3RyYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksZ0JBQUE7QUFEUjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtBQUZSIiwiZmlsZSI6InBlc3NvYS1jYWRhc3RyYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxufSJdfQ== */";

/***/ }),

/***/ 4199:
/*!**********************************************************************************!*\
  !*** ./src/app/page/pessoa/pessoa-detalhar/pessoa-detalhar.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "ion-content ion-item {\n  margin-top: 20px;\n}\nion-content ion-button {\n  margin-top: 20px;\n  text-decoration: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlc3NvYS1kZXRhbGhhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxnQkFBQTtBQURSO0FBSUk7RUFDSSxnQkFBQTtFQUNBLHdCQUFBO0FBRlIiLCJmaWxlIjoicGVzc29hLWRldGFsaGFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbn0iXX0= */";

/***/ }),

/***/ 6960:
/*!*********************************************************!*\
  !*** ./src/app/page/pessoa/pessoa.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 16px;\n  font-weight: bold;\n}\n\nion-content ion-list ion-list-header {\n  font-size: 15px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlc3NvYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFETjs7QUFRTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUxSIiwiZmlsZSI6InBlc3NvYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iXX0= */";

/***/ }),

/***/ 9941:
/*!************************************************************************************!*\
  !*** ./src/app/page/pessoa/pessoa-cadastrar/pessoa-cadastrar.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"redirecionarTelaGerenciadorPessoa()\" slot=\"start\">\n      <ion-button>\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Cadastrar Pessoa</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"formulario\">\n    <ion-item>\n      <ion-label position=\"floating\">Nome Completo</ion-label>\n      <ion-input formControlName=\"nome\" autofocus=\"true\"></ion-input>\n    </ion-item>\n  </form>\n\n  <ion-button (click)=\"saveOne()\" expand=\"block\">Cadastrar</ion-button>\n\n</ion-content>\n";

/***/ }),

/***/ 4988:
/*!**********************************************************************************!*\
  !*** ./src/app/page/pessoa/pessoa-detalhar/pessoa-detalhar.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"redirecionarTelaGerenciadorPessoa()\" slot=\"start\">\n      <ion-button>\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Editar Pessoa</ion-title>\n    <ion-buttons (click)=\"apresentarAlertaExclusaoRegistro()\" slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"trash-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form>\n    <ion-item>\n      <ion-label position=\"floating\">Nome Completo</ion-label>\n      <ion-input [(ngModel)]=\"pessoaEntityParameter.nome\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\n    </ion-item>\n    <ion-button (click)=\"updateOne()\" expand=\"block\">Editar</ion-button>\n  </form>\n\n</ion-content>";

/***/ }),

/***/ 1554:
/*!*********************************************************!*\
  !*** ./src/app/page/pessoa/pessoa.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Gerenciador de Pessoas</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"redirecionarTelaCadastrarPessoa()\">\n      <ion-button>\n        <ion-icon name=\"person-add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list lines=\"none\">\n\n    <ion-list-header>\n      <ion-label>Pessoas Cadastradas</ion-label>\n    </ion-list-header>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingIcon=\"chevron-down-circle-outline\"\n        pullingText=\"Carregar Dados\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"Recuperando...\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-searchbar [(ngModel)]=\"termoPesquisa\" placeholder=\"Pesquisar...\" showCancelButton=\"focus\" animated></ion-searchbar>\n\n    <ion-item-sliding *ngFor=\"let item of pessoaList | filter:termoPesquisa\">\n      <ion-item>\n          <ion-avatar slot=\"start\">\n            <img [src]=\"item.arquivo != null ? recuperarImagem(item.arquivo.imagem) : '../../assets/icon/favicon.png'\" />\n          </ion-avatar>\n          <ion-label>\n            {{item.nome}}\n            <p>Administrador Financeiro</p>\n          </ion-label>\n          <ion-button slot=\"end\" color=\"primary\" fill=\"clear\">\n            <ion-icon name=\"swap-horizontal-outline\"></ion-icon>\n          </ion-button>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"redirecionarTelaDetalharPessoa(item)\">\n          <ion-label>Detalhar</ion-label>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_pessoa_pessoa_module_ts.js.map