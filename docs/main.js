(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bmartin/codigos2021/01_holamundo/src/main.ts */"zUnb");


/***/ }),

/***/ "5U1G":
/*!*******************************************!*\
  !*** ./src/app/pipes/pipe-imagen.pipe.ts ***!
  \*******************************************/
/*! exports provided: PipeImagenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeImagenPipe", function() { return PipeImagenPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class PipeImagenPipe {
    transform(value, ...args) {
        if (value.length == 0) {
            return 'assets/images/angular.png';
        }
        return value;
    }
}
PipeImagenPipe.ɵfac = function PipeImagenPipe_Factory(t) { return new (t || PipeImagenPipe)(); };
PipeImagenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pipeImagen", type: PipeImagenPipe, pure: true });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class HomeComponent {
    constructor(ruta) {
        this.ruta = ruta;
    }
    ngOnInit() {
    }
    pasoParametros(parametro, parametroDos) {
        this.ruta.navigate([parametroDos, parametro]);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 0, consts: [[1, "m-4"], ["type", "text", "placeholder", "introduce nombre", 1, "form-control"], ["inputNombre", ""], ["routerLinkActive", "router-link-active", 1, "btn", "btn-primary", 3, "click"], ["type", "text", "placeholder", "introduce apellido", 1, "form-control"], ["inputApellido", ""], [1, "btn", "btn-primary", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aplicaci\u00F3n de rutas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.pasoParametros(_r0.value, "uno"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Pasar a componente uno ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.pasoParametros(_r1.value, "dos"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Pasar a componente dos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "G4QG":
/*!*************************************************************************!*\
  !*** ./src/app/components/cartas-completo/cartas-completo.component.ts ***!
  \*************************************************************************/
/*! exports provided: CartasCompletoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartasCompletoComponent", function() { return CartasCompletoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_tecnologias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/tecnologias.service */ "ii5U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");



function CartasCompletoComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.aplicacion, " ");
} }
class CartasCompletoComponent {
    constructor(servicioDatos) {
        this.servicioDatos = servicioDatos;
        this.tecnologias = [];
    }
    ngOnInit() {
        // Tecnologias[]
        this.tecnologias = this.servicioDatos.getAllTecnologias();
    }
    buscarTecnologia(busqueda) {
        //console.log(busqueda);
        this.tecnologias = this.servicioDatos.getTecnologiasFiltradas(busqueda);
    }
}
CartasCompletoComponent.ɵfac = function CartasCompletoComponent_Factory(t) { return new (t || CartasCompletoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tecnologias_service__WEBPACK_IMPORTED_MODULE_1__["TecnologiasService"])); };
CartasCompletoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartasCompletoComponent, selectors: [["app-cartas-completo"]], decls: 8, vars: 1, consts: [["placeholder", "que quieres buscar", 1, "form-control"], ["inputRef", ""], [1, "btn", "btn-primary", 3, "click"], [1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "card", 2, "width", "18rem"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function CartasCompletoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cartas - Servicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartasCompletoComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.buscarTecnologia(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Buscar\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CartasCompletoComponent_div_7_Template, 8, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tecnologias);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0YXMtY29tcGxldG8uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_directiva_if_directiva_if_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/directiva-if/directiva-if.component */ "r6MT");
/* harmony import */ var _components_directiva_switch_directiva_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/directiva-switch/directiva-switch.component */ "q4MK");
/* harmony import */ var _components_directiva_for_directiva_for_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/directiva-for/directiva-for.component */ "tmBE");
/* harmony import */ var _pipes_pipe_imagen_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/pipe-imagen.pipe */ "5U1G");
/* harmony import */ var _components_cartas_completo_cartas_completo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cartas-completo/cartas-completo.component */ "G4QG");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_uno_uno_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/uno/uno.component */ "eJFc");
/* harmony import */ var _components_dos_dos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dos/dos.component */ "iu93");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_carta_carta_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/carta/carta.component */ "bLkt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "8Y7J");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_directiva_if_directiva_if_component__WEBPACK_IMPORTED_MODULE_3__["DirectivaIfComponent"],
        _components_directiva_switch_directiva_switch_component__WEBPACK_IMPORTED_MODULE_4__["DirectivaSwitchComponent"],
        _components_directiva_for_directiva_for_component__WEBPACK_IMPORTED_MODULE_5__["DirectivaForComponent"],
        _pipes_pipe_imagen_pipe__WEBPACK_IMPORTED_MODULE_6__["PipeImagenPipe"],
        _components_cartas_completo_cartas_completo_component__WEBPACK_IMPORTED_MODULE_7__["CartasCompletoComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
        _components_uno_uno_component__WEBPACK_IMPORTED_MODULE_9__["UnoComponent"],
        _components_dos_dos_component__WEBPACK_IMPORTED_MODULE_10__["DosComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _components_carta_carta_component__WEBPACK_IMPORTED_MODULE_12__["CartaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "bLkt":
/*!*****************************************************!*\
  !*** ./src/app/components/carta/carta.component.ts ***!
  \*****************************************************/
/*! exports provided: CartaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaComponent", function() { return CartaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class CartaComponent {
    constructor() { }
    ngOnInit() {
    }
}
CartaComponent.ɵfac = function CartaComponent_Factory(t) { return new (t || CartaComponent)(); };
CartaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartaComponent, selectors: [["app-carta"]], inputs: { datoCarta: "datoCarta" }, decls: 9, vars: 0, consts: [[1, "card", 2, "width", "18rem"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary"]], template: function CartaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "asdfghj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0YS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "eJFc":
/*!*************************************************!*\
  !*** ./src/app/components/uno/uno.component.ts ***!
  \*************************************************/
/*! exports provided: UnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnoComponent", function() { return UnoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _carta_carta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carta/carta.component */ "bLkt");



class UnoComponent {
    constructor(rutaActiva) {
        this.rutaActiva = rutaActiva;
    }
    ngOnInit() {
        console.log(this.rutaActiva.snapshot.params.nombre);
    }
}
UnoComponent.ɵfac = function UnoComponent_Factory(t) { return new (t || UnoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
UnoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnoComponent, selectors: [["app-uno"]], decls: 3, vars: 0, template: function UnoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Componente uno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-carta");
    } }, directives: [_carta_carta_component__WEBPACK_IMPORTED_MODULE_2__["CartaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bm8uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/uno"]; };
class NavBarComponent {
    constructor(rutas) {
        this.rutas = rutas;
    }
    ngOnInit() {
    }
    navegar() {
        this.rutas.navigate(['dos', 1123456]);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 17, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLinkActive", "router-link-active", 1, "nav-link", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "nav-link", 3, "routerLink"], [1, "nav-link", 3, "click"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Componente uno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_15_listener() { return ctx.navegar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Componente dos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ii5U":
/*!*************************************************!*\
  !*** ./src/app/services/tecnologias.service.ts ***!
  \*************************************************/
/*! exports provided: TecnologiasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiasService", function() { return TecnologiasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class TecnologiasService {
    constructor() {
        this.tecnologias = [
            { nombre: "Java", imagen: "assets/images/news.jpg", aplicacion: "Multiplataforma" },
            { nombre: "JS", imagen: "", aplicacion: "Web" },
            { nombre: "MYSQL", imagen: "assets/images/news.jpg", aplicacion: "BD" },
            { nombre: "HTML", imagen: "assets/images/news.jpg", aplicacion: "BD" },
            { nombre: "CSS", imagen: "assets/images/news.jpg", aplicacion: "BD" },
            { nombre: "Python", imagen: "assets/images/news.jpg", aplicacion: "BD" },
            { nombre: "Powershell", imagen: "assets/images/news.jpg", aplicacion: "BD" },
            { nombre: "Angular", imagen: "assets/images/news.jpg", aplicacion: "BD" },
            { nombre: "XML", imagen: "assets/images/news.jpg", aplicacion: "BD" },
            { nombre: "PHP", imagen: "assets/images/news.jpg", aplicacion: "BD" }
        ];
    }
    getAllTecnologias() {
        return this.tecnologias;
    }
    getTecnologiasFiltradas(busqueda) {
        /*let arrayFiltrado: TecnologiaInterfaz[] = [];
    
        this.tecnologias.forEach(element => {
          if (element.nombre.toLowerCase().includes(busqueda.toLowerCase())){
            arrayFiltrado.push(element)
          }
        });*/
        return this.tecnologias.filter((elemento) => {
            return elemento.nombre.toLowerCase()
                .includes(busqueda.toLowerCase());
        });
    }
}
TecnologiasService.ɵfac = function TecnologiasService_Factory(t) { return new (t || TecnologiasService)(); };
TecnologiasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TecnologiasService, factory: TecnologiasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "iu93":
/*!*************************************************!*\
  !*** ./src/app/components/dos/dos.component.ts ***!
  \*************************************************/
/*! exports provided: DosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DosComponent", function() { return DosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_tecnologias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/tecnologias.service */ "ii5U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _carta_carta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carta/carta.component */ "bLkt");





function DosComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El apellido pasado es: ", ctx_r0.apellido, "");
} }
function DosComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El apellido no es suficientemente grande");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DosComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carta", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datoCarta", item_r4);
} }
class DosComponent {
    constructor(rutaActiva, servicio) {
        this.rutaActiva = rutaActiva;
        this.servicio = servicio;
        this.apellido = '';
        this.tecnologias = [];
    }
    ngOnInit() {
        //console.log(this.rutaActiva.snapshot.params.apellido);
        this.apellido = this.rutaActiva.snapshot.params.apellido;
        this.tecnologias = this.servicio.getAllTecnologias();
    }
}
DosComponent.ɵfac = function DosComponent_Factory(t) { return new (t || DosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tecnologias_service__WEBPACK_IMPORTED_MODULE_2__["TecnologiasService"])); };
DosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DosComponent, selectors: [["app-dos"]], decls: 7, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["noCumple", ""], [1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [3, "datoCarta"]], template: function DosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Componente dos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DosComponent_div_2_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DosComponent_ng_template_3_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DosComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apellido.length > 3)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tecnologias);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _carta_carta_component__WEBPACK_IMPORTED_MODULE_4__["CartaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "q4MK":
/*!***************************************************************************!*\
  !*** ./src/app/components/directiva-switch/directiva-switch.component.ts ***!
  \***************************************************************************/
/*! exports provided: DirectivaSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivaSwitchComponent", function() { return DirectivaSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");


function DirectivaSwitchComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Seleccionado opcion 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DirectivaSwitchComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Seleccionado opcion 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DirectivaSwitchComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Seleccionado opcion 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DirectivaSwitchComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Seleccionado opcion defecto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DirectivaSwitchComponent {
    constructor() {
        this.numero = 3;
    }
    ngOnInit() {
    }
    cambioInput(param) {
        //console.log(event.target);
        this.numero = parseInt(param);
    }
}
DirectivaSwitchComponent.ɵfac = function DirectivaSwitchComponent_Factory(t) { return new (t || DirectivaSwitchComponent)(); };
DirectivaSwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DirectivaSwitchComponent, selectors: [["app-directiva-switch"]], decls: 11, vars: 4, consts: [["type", "number", "placeholder", "intro n\u00FAmero", 1, "form-control", 3, "change"], ["inputNumber", ""], [3, "ngSwitch"], ["class", "alert alert-primary", "role", "alert", 4, "ngSwitchCase"], ["class", "alert alert-warning", "role", "alert", 4, "ngSwitchCase"], ["class", "alert alert-success", "role", "alert", 4, "ngSwitchCase"], ["class", "alert alert-danger", "role", "alert", 4, "ngSwitchDefault"], ["role", "alert", 1, "alert", "alert-primary"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-danger"]], template: function DirectivaSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Directiva switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "La directiva switch sirve para mostrar contenidos dependiendo de un valor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DirectivaSwitchComponent_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.cambioInput(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DirectivaSwitchComponent_div_7_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DirectivaSwitchComponent_div_8_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DirectivaSwitchComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DirectivaSwitchComponent_div_10_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.numero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXJlY3RpdmEtc3dpdGNoLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "r6MT":
/*!*******************************************************************!*\
  !*** ./src/app/components/directiva-if/directiva-if.component.ts ***!
  \*******************************************************************/
/*! exports provided: DirectivaIfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivaIfComponent", function() { return DirectivaIfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");


function DirectivaIfComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " We'll never share your email with anyone else. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Check me out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DirectivaIfComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Disabled fieldset example");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Disabled input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Disabled select menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Disabled select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Can't check this ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DirectivaIfComponent {
    constructor() {
        this.textoBoton = "Ver Login";
        this.variableMostrar = true;
        this.variabloMostrarNumero = 3;
    }
    ngOnInit() {
    }
    cambiarValor() {
        this.variableMostrar = !this.variableMostrar;
        if (this.variableMostrar) {
            this.textoBoton = "Ver Registro";
        }
        else {
            this.textoBoton = "Ver Login";
        }
    }
    cambiarValorInput(valor) {
        this.variabloMostrarNumero = parseInt(valor);
    }
}
DirectivaIfComponent.ɵfac = function DirectivaIfComponent_Factory(t) { return new (t || DirectivaIfComponent)(); };
DirectivaIfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DirectivaIfComponent, selectors: [["app-directiva-if"]], decls: 13, vars: 3, consts: [["type", "number", "placeholder", "introduce numero"], ["inputNumber", ""], [3, "click"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "mb-3"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["id", "emailHelp", 1, "form-text"], ["for", "exampleInputPassword1", 1, "form-label"], ["type", "password", "id", "exampleInputPassword1", 1, "form-control"], [1, "mb-3", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], ["disabled", ""], ["for", "disabledTextInput", 1, "form-label"], ["type", "text", "id", "disabledTextInput", "placeholder", "Disabled input", 1, "form-control"], ["for", "disabledSelect", 1, "form-label"], ["id", "disabledSelect", 1, "form-select"], [1, "form-check"], ["type", "checkbox", "id", "disabledFieldsetCheck", "disabled", "", 1, "form-check-input"], ["for", "disabledFieldsetCheck", 1, "form-check-label"]], template: function DirectivaIfComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Directiva if");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " La directiva if sirve para poder mostrar una etiqueta u otra dependiendo de un valor\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectivaIfComponent_Template_button_click_6_listener() { return ctx.cambiarValor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectivaIfComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.cambiarValorInput(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pulsar input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DirectivaIfComponent_ng_container_10_Template, 18, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DirectivaIfComponent_ng_template_11_Template, 21, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textoBoton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.variableMostrar)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXJlY3RpdmEtaWYuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "tmBE":
/*!*********************************************************************!*\
  !*** ./src/app/components/directiva-for/directiva-for.component.ts ***!
  \*********************************************************************/
/*! exports provided: DirectivaForComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivaForComponent", function() { return DirectivaForComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _pipes_pipe_imagen_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/pipe-imagen.pipe */ "5U1G");



function DirectivaForComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2, " ");
} }
function DirectivaForComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "pipeImagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, item_r3.imagen), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.nombre);
} }
class DirectivaForComponent {
    constructor() {
        this.conocimientos = ['Java', 'Angular', 'MySQL', 'PHP', 'JS', 'TypeScript', 'Python', 'HTML', 'CSS', 'Powershell', 'JavaFX', 'C#', '.NET'];
        /*tecnologia1: Tecnologia = new Tecnologia("Java","assets/images/news.jpg","Multiplataforma");
        tecnologia2: Tecnologia = new Tecnologia("JS","assets/images/angular.png","Multiplataforma");
        tecnologia3: Tecnologia = new Tecnologia("MySQL","assets/images/news.jpg","Multiplataforma");
        tecnologiasObjetos: Tecnologia[] = [this.tecnologia1,this.tecnologia2,this.tecnologia3];*/
        this.tecnologiasObjetos = [
            { nombre: "Java", imagen: "assets/images/news.jpg", aplicacion: "Multiplataforma" },
            { nombre: "JS", imagen: "", aplicacion: "Web" },
            { nombre: "MYSQL", imagen: "assets/images/news.jpg", aplicacion: "BD" }
        ];
    }
    ngOnInit() {
    }
}
DirectivaForComponent.ɵfac = function DirectivaForComponent_Factory(t) { return new (t || DirectivaForComponent)(); };
DirectivaForComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DirectivaForComponent, selectors: [["app-directiva-for"]], decls: 13, vars: 2, consts: [[1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "col"], [1, "card", 2, "width", "18rem"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"]], template: function DirectivaForComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Directiva for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " La directiva ngfor sirve para repetir n veces (n\u00FAmero de elementos que tenga una colecci\u00F3n) un div o elemento determinado\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Conocimientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DirectivaForComponent_li_8_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cartas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DirectivaForComponent_div_12_Template, 7, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.conocimientos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tecnologiasObjetos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_pipes_pipe_imagen_pipe__WEBPACK_IMPORTED_MODULE_2__["PipeImagenPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXJlY3RpdmEtZm9yLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_dos_dos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dos/dos.component */ "iu93");
/* harmony import */ var _components_uno_uno_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/uno/uno.component */ "eJFc");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");






const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'uno', component: _components_uno_uno_component__WEBPACK_IMPORTED_MODULE_1__["UnoComponent"] },
    { path: 'uno/:nombre', component: _components_uno_uno_component__WEBPACK_IMPORTED_MODULE_1__["UnoComponent"] },
    { path: 'dos', component: _components_dos_dos_component__WEBPACK_IMPORTED_MODULE_0__["DosComponent"] },
    { path: 'dos/:apellido', component: _components_dos_dos_component__WEBPACK_IMPORTED_MODULE_0__["DosComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map