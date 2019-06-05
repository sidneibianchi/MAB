(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helps/DateFormatPipe.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/_helps/DateFormatPipe.pipe.ts ***!
  \***********************************************/
/*! exports provided: DateFormatPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatPipePipe", function() { return DateFormatPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _util_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Constants */ "./src/app/util/Constants.ts");




var DateFormatPipePipe = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DateFormatPipePipe, _super);
    function DateFormatPipePipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateFormatPipePipe.prototype.transform = function (value, args) {
        return _super.prototype.transform.call(this, value, _util_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DATE_FMT);
    };
    DateFormatPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'DateFormatPipe'
        })
    ], DateFormatPipePipe);
    return DateFormatPipePipe;
}(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]));



/***/ }),

/***/ "./src/app/_helps/HourFormatPipe.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/_helps/HourFormatPipe.pipe.ts ***!
  \***********************************************/
/*! exports provided: HourFormatPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HourFormatPipePipe", function() { return HourFormatPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _util_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Constants */ "./src/app/util/Constants.ts");




var HourFormatPipePipe = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HourFormatPipePipe, _super);
    function HourFormatPipePipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HourFormatPipePipe.prototype.transform = function (value, args) {
        return _super.prototype.transform.call(this, value, _util_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].TIME_FMT);
    };
    HourFormatPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'HourFormatPipe'
        })
    ], HourFormatPipePipe);
    return HourFormatPipePipe;
}(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]));



/***/ }),

/***/ "./src/app/_services/Cliente.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/Cliente.service.ts ***!
  \**********************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
        this.baseURL = 'https://sgcos.azurewebsites.net/api/cliente';
    }
    ClienteService.prototype.getAllCliente = function () {
        return this.http.get(this.baseURL);
    };
    ClienteService.prototype.getClienteById = function (id) {
        return this.http.get(this.baseURL + "/" + id);
    };
    ClienteService.prototype.getClienteByNome = function (nome) {
        return this.http.get(this.baseURL + "/" + nome);
    };
    ClienteService.prototype.postCliente = function (cliente) {
        return this.http.post(this.baseURL, cliente);
    };
    ClienteService.prototype.putCliente = function (cliente) {
        return this.http.put(this.baseURL + "/" + cliente.id, cliente);
    };
    ClienteService.prototype.deleteCliente = function (id) {
        return this.http.delete(this.baseURL + "/" + id);
    };
    ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClienteService);
    return ClienteService;
}());



/***/ }),

/***/ "./src/app/_services/Equipamento.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/Equipamento.service.ts ***!
  \**************************************************/
/*! exports provided: EquipamentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipamentoService", function() { return EquipamentoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EquipamentoService = /** @class */ (function () {
    function EquipamentoService(http) {
        this.http = http;
        this.baseURL = 'https://sgcos.azurewebsites.net/api/equipamento';
    }
    EquipamentoService.prototype.getAllEquipamento = function () {
        return this.http.get(this.baseURL);
    };
    EquipamentoService.prototype.getEquipamentoById = function (id) {
        return this.http.get(this.baseURL + "/" + id);
    };
    EquipamentoService.prototype.getEquipamentoBynrSerie = function (nrSerie) {
        return this.http.get(this.baseURL + "/" + nrSerie);
    };
    EquipamentoService.prototype.getEquipamentoByCliente = function (idCliente) {
        return this.http.get(this.baseURL + "/getByCliente/" + idCliente);
    };
    EquipamentoService.prototype.postEquipamento = function (equipamento) {
        return this.http.post(this.baseURL, equipamento);
    };
    EquipamentoService.prototype.putEquipamento = function (equipamento) {
        return this.http.put(this.baseURL + "/" + equipamento.id, equipamento);
    };
    EquipamentoService.prototype.deleteEquipamento = function (id) {
        return this.http.delete(this.baseURL + "/" + id);
    };
    EquipamentoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EquipamentoService);
    return EquipamentoService;
}());



/***/ }),

/***/ "./src/app/_services/Servico.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/Servico.service.ts ***!
  \**********************************************/
/*! exports provided: ServicoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoService", function() { return ServicoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ServicoService = /** @class */ (function () {
    function ServicoService(http) {
        this.http = http;
        this.baseURL = 'https://sgcos.azurewebsites.net/api/servico';
    }
    ServicoService.prototype.getAllServico = function () {
        return this.http.get(this.baseURL);
    };
    ServicoService.prototype.getServicoById = function (id) {
        return this.http.get(this.baseURL + "/" + id);
    };
    ServicoService.prototype.getServicoByEquipamento = function (idEquipamento) {
        return this.http.get(this.baseURL + "/getByEquipamento/" + idEquipamento);
    };
    ServicoService.prototype.postServico = function (servico) {
        return this.http.post(this.baseURL, servico);
    };
    ServicoService.prototype.putServico = function (servico) {
        return this.http.put(this.baseURL + "/" + servico.id, servico);
    };
    ServicoService.prototype.deleteServico = function (id) {
        return this.http.delete(this.baseURL + "/" + id);
    };
    ServicoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServicoService);
    return ServicoService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseURL = 'https://sgcos.azurewebsites.net/api/user/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http
            .post(this.baseURL + "login", model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
                sessionStorage.setItem('username', _this.decodedToken.unique_name);
            }
        }));
    };
    AuthService.prototype.register = function (model) {
        return this.http.post(this.baseURL + "register", model);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_shared/titulo/titulo.component.css":
/*!*****************************************************!*\
  !*** ./src/app/_shared/titulo/titulo.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19zaGFyZWQvdGl0dWxvL3RpdHVsby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/_shared/titulo/titulo.component.html":
/*!******************************************************!*\
  !*** ./src/app/_shared/titulo/titulo.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  {{ titulo }}\r\n</h2>\r\n<hr>\r\n"

/***/ }),

/***/ "./src/app/_shared/titulo/titulo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_shared/titulo/titulo.component.ts ***!
  \****************************************************/
/*! exports provided: TituloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TituloComponent", function() { return TituloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TituloComponent = /** @class */ (function () {
    function TituloComponent() {
    }
    TituloComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TituloComponent.prototype, "titulo", void 0);
    TituloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-titulo',
            template: __webpack_require__(/*! ./titulo.component.html */ "./src/app/_shared/titulo/titulo.component.html"),
            styles: [__webpack_require__(/*! ./titulo.component.css */ "./src/app/_shared/titulo/titulo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TituloComponent);
    return TituloComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/clientes/clientes.component.ts");
/* harmony import */ var _equipamentos_equipamentos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equipamentos/equipamentos.component */ "./src/app/equipamentos/equipamentos.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _servicos_servicos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicos/servicos.component */ "./src/app/servicos/servicos.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");











var routes = [
    {
        path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
        children: [
            { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
            { path: 'registration', component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"] }
        ]
    },
    { path: 'clientes', component: _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_3__["ClientesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'equipamentos/:idCliente/edit', component: _equipamentos_equipamentos_component__WEBPACK_IMPORTED_MODULE_4__["EquipamentosComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'servicos/:idEquipamento/edit', component: _servicos_servicos_component__WEBPACK_IMPORTED_MODULE_6__["ServicosComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: '', redirectTo: 'clientes', pathMatch: 'full' },
    { path: '**', redirectTo: 'clientes', pathMatch: 'full' }
    /*{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}*/
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-nav></app-nav>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_Cliente_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/Cliente.service */ "./src/app/_services/Cliente.service.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/clientes/clientes.component.ts");
/* harmony import */ var _equipamentos_equipamentos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./equipamentos/equipamentos.component */ "./src/app/equipamentos/equipamentos.component.ts");
/* harmony import */ var _helps_DateFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_helps/DateFormatPipe.pipe */ "./src/app/_helps/DateFormatPipe.pipe.ts");
/* harmony import */ var _helps_HourFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_helps/HourFormatPipe.pipe */ "./src/app/_helps/HourFormatPipe.pipe.ts");
/* harmony import */ var _shared_titulo_titulo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_shared/titulo/titulo.component */ "./src/app/_shared/titulo/titulo.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _servicos_servicos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./servicos/servicos.component */ "./src/app/servicos/servicos.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-currency */ "./node_modules/ngx-currency/index.js");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
                _helps_DateFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_15__["DateFormatPipePipe"],
                _helps_HourFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_16__["HourFormatPipePipe"],
                _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_13__["ClientesComponent"],
                _equipamentos_equipamentos_component__WEBPACK_IMPORTED_MODULE_14__["EquipamentosComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _shared_titulo_titulo_component__WEBPACK_IMPORTED_MODULE_17__["TituloComponent"],
                _servicos_servicos_component__WEBPACK_IMPORTED_MODULE_19__["ServicosComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_20__["UserComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_22__["RegistrationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
                ngx_mask__WEBPACK_IMPORTED_MODULE_18__["NgxMaskModule"].forRoot(),
                ngx_currency__WEBPACK_IMPORTED_MODULE_24__["NgxCurrencyModule"]
            ],
            providers: [
                _services_Cliente_service__WEBPACK_IMPORTED_MODULE_10__["ClienteService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token') !== null) {
            return true;
        }
        else {
            this.router.navigate(['/user/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "./node_modules/rxjs/internal/operators/tap.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_3__);




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (localStorage.getItem('token') !== null) {
            var cloneReq = req.clone({
                headers: req.headers.set('Authorization', "Bearer " + localStorage.getItem('token'))
            });
            return next.handle(cloneReq).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (succ) { }, function (err) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('user/login');
                }
            }));
        }
        else {
            return next.handle(req.clone());
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/clientes/clientes.component.css":
/*!*************************************************!*\
  !*** ./src/app/clientes/clientes.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\r\n    font-size: 25px;\r\n}\r\n\r\n.iconesSociais a {\r\n    color: rgb(94, 94, 94);\r\n}\r\n\r\n.capitalize {\r\n  text-transform: capitalize;\r\n  border-bottom: 1px solid silver;\r\n}\r\n\r\n.tab-pane {\r\n  padding: 20px 8px 8px;\r\n  border-top: 0px;\r\n  border-right: 1px solid #dee2e6;\r\n  border-bottom: 1px solid #dee2e6;\r\n  border-left: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmljb25lc1NvY2lhaXMgYSB7XHJcbiAgICBjb2xvcjogcmdiKDk0LCA5NCwgOTQpO1xyXG59XHJcblxyXG4uY2FwaXRhbGl6ZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcclxufVxyXG5cclxuLnRhYi1wYW5lIHtcclxuICBwYWRkaW5nOiAyMHB4IDhweCA4cHg7XHJcbiAgYm9yZGVyLXRvcDogMHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/clientes/clientes.component.html":
/*!**************************************************!*\
  !*** ./src/app/clientes/clientes.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<app-titulo [titulo]=titulo></app-titulo>\r\n<div class=\"d-flex\">\r\n  <div class=\"form-inline mr-auto\" action=\"\">\r\n    <div class=\"form-group mb-2\"><input type=\"text\" class=\"form-control mr-2\" placeholder=\"Filtrar\"\r\n        [(ngModel)]=\"filtroLista\">\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-outline-primary\" (click)=\"novoCliente(template)\">\r\n    <i class=\"fa fa-plus-circle\"></i>&nbsp;\r\n    Novo Cliente\r\n  </button>\r\n</div>\r\n<br>\r\n<table class=\"table table-striped\">\r\n  <thead class=\"thead-light\">\r\n    <tr>\r\n      <th>#</th>\r\n      <th>Nome</th>\r\n      <th>Contato</th>\r\n      <th>Telefone</th>\r\n      <th>Editar | Excluir</th>\r\n      <th>Equipamentos</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody *ngIf=\"clientes\">\r\n    <tr *ngFor=\"let cliente of clienteFiltrados\">\r\n      <td>{{cliente.id}}</td>\r\n      <td>{{cliente.nome | uppercase}}</td>\r\n      <td>{{cliente.contato | uppercase}}</td>\r\n      <td>\r\n        <div *ngIf=\"!cliente.telefones.length\">\r\n          Não Informado\r\n        </div>\r\n        <div *ngIf=\"cliente.telefones.length\">\r\n          {{cliente.telefones[0].numero}}\r\n        </div>\r\n      </td>\r\n      <td>\r\n        <div style=\"margin: auto;\">\r\n          <button class=\"btn btn-sm btn-success\" tooltip=\"Editar\" (click)=\"editarCliente(cliente, template)\">\r\n            <i class=\"fa fa-edit\"></i>\r\n          </button>\r\n          <button style=\"margin-left: 15px;\" class=\"btn btn-sm btn-danger\" tooltip=\"Excluir\"\r\n            (click)=\"excluirCliente(cliente, confirm)\">\r\n            <i class=\"fa fa-eraser\"></i>\r\n          </button>\r\n        </div>\r\n      </td>\r\n      <td>\r\n        <a style=\"align-items: center; margin-left:20px;\" [routerLink]=\"['/equipamentos', cliente.id, 'edit']\"\r\n          tooltip=\"Equipamentos\" class=\"btn btn-sm btn-warning\">\r\n          <i class=\"fa fa-edit\"></i></a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n  <tfoot *ngIf=\"!clientes\">\r\n    <tr>\r\n      <td colspan=\"7\" class=\"text-center\">\r\n        <h4>Nenhum cliente encontrado</h4>\r\n      </td>\r\n    </tr>\r\n  </tfoot>\r\n</table>\r\n\r\n<div bsModal #template=\"bs-modal\"  data-backdrop=\"static\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n  <div class=\"modal-dialog modal-xl\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">Clientes</h4>\r\n        <button type=\"button\" class=\"close pull-right\" (click)=\"fechaModal(template)\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"registerForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <tabset>\r\n                <tab heading=\"Cliente\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-3\">\r\n                      <label>CNPJ</label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"cpfCnpj\" id=\"cpfCnpj\"\r\n                        placeholder=\"CPF/CNPJ.\" maxlength=\"18\" name=\"cpfCnpj\" id=\"cpfCnpj\"\r\n                        onkeydown=\"javascript:return aplica_mascara_cpfcnpj(this,18,event)\"\r\n                        onkeyup=\"javascript:return aplica_mascara_cpfcnpj(this,18,event)\" >\r\n                    </div>\r\n                    <div class=\"form-group col-md-9\">\r\n                      <label>Nome</label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"nome\" placeholder=\"Nome\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                      <label>Contato</label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"contato\" placeholder=\"Contato.\">\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                      <label>E-mail</label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"E-mail.\">\r\n                    </div>\r\n                  </div>\r\n                </tab>\r\n                \r\n                <tab heading=\"Endereço\">\r\n                      <div>\r\n                        <div formArrayName=\"enderecos\" *ngFor=\"let endereco of enderecos.controls; let i=index\">\r\n                          <fieldset [formGroupName]=\"i\" class=\"form-group\">\r\n                            <legend class=\"d-flex justify-content-between capitalize\">\r\n                              {{ enderecos.get(i+'.logradouro').value === '' ?\r\n                                'Endereço' :\r\n                                enderecos.get(i+'.logradouro').value\r\n                              }}\r\n                              <button class=\"btn btn-sm btn-danger mb-1\" (click)=\"removerEndereco(i)\">remove</button>\r\n                            </legend>\r\n                            <div class=\"row\">\r\n                              <div class=\"form-group col-md-2\">\r\n                                <label>CEP</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                  [ngClass]=\"{'is-invalid': enderecos.get(i+'.cep').errors && enderecos.get(i+'.cep').touched}\"\r\n                                  formControlName=\"cep\" placeholder=\"Cep\" mask=\"00000-000\" onkeypress=\"return SomenteNumero(event)\">\r\n                              </div>\r\n                              <div class=\"form-group col-md-8\">\r\n                                <label>Logradouro</label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"logradouro\"\r\n                                [ngClass]=\"{'is-invalid': enderecos.get(i+'.logradouro').errors && enderecos.get(i+'.logradouro').touched}\"\r\n                                  placeholder=\"Logradouro.\">\r\n                              </div>\r\n                              <div class=\"form-group col-md-2\">\r\n                                <label>Número</label>\r\n                                <input type=\"text\" class=\"form-control\" \r\n                                [ngClass]=\"{'is-invalid': enderecos.get(i+'.numero').errors && enderecos.get(i+'.numero').touched}\"\r\n                                formControlName=\"numero\" placeholder=\"Numero.\">\r\n                              </div>\r\n                            </div>\r\n                              <div class=\"form-row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                  <label>Bairro</label>\r\n                                  <input type=\"text\" class=\"form-control\" \r\n                                  [ngClass]=\"{'is-invalid': enderecos.get(i+'.bairro').errors && enderecos.get(i+'.bairro').touched}\"\r\n                                  formControlName=\"bairro\" placeholder=\"Bairro.\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                  <label>Cidade</label>\r\n                                  <input type=\"text\" class=\"form-control\" \r\n                                  [ngClass]=\"{'is-invalid': enderecos.get(i+'.cidade').errors && enderecos.get(i+'.cidade').touched}\"\r\n                                  formControlName=\"cidade\" placeholder=\"Cidade.\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-3\">\r\n                                  <label>Estado</label>\r\n                                  <select class=\"form-control\" \r\n                                  [ngClass]=\"{'is-invalid': enderecos.get(i+'.uf').errors && enderecos.get(i+'.uf').touched}\"\r\n                                  formControlName=\"uf\" data-search=\"false\">\r\n                                    <option value=\"\">Selecione</option>\r\n                                    <option value=\"AC\">Acre</option>\r\n                                    <option value=\"AL\">Alagoas</option>\r\n                                    <option value=\"AP\">Amapá</option>\r\n                                    <option value=\"AM\">Amazonas</option>\r\n                                    <option value=\"BA\">Bahia</option>\r\n                                    <option value=\"CE\">Ceará</option>\r\n                                    <option value=\"DF\">Distrito Federal</option>\r\n                                    <option value=\"ES\">Espírito Santo</option>\r\n                                    <option value=\"GO\">Goiás</option>\r\n                                    <option value=\"MA\">Maranhão</option>\r\n                                    <option value=\"MT\">Mato Grosso</option>\r\n                                    <option value=\"MS\">Mato Grosso do Sul</option>\r\n                                    <option value=\"MG\">Minas Gerais</option>\r\n                                    <option value=\"PA\">Pará</option>\r\n                                    <option value=\"PB\">Paraíba</option>\r\n                                    <option value=\"PR\">Paraná</option>\r\n                                    <option value=\"PE\">Pernambuco</option>\r\n                                    <option value=\"PI\">Piauí</option>\r\n                                    <option value=\"RJ\">Rio de Janeiro</option>\r\n                                    <option value=\"RN\">Rio Grande do Norte</option>\r\n                                    <option value=\"RS\">Rio Grande do Sul</option>\r\n                                    <option value=\"RO\">Rondônia</option>\r\n                                    <option value=\"RR\">Roraima</option>\r\n                                    <option value=\"SC\">Santa Catarina</option>\r\n                                    <option value=\"SP\">São Paulo</option>\r\n                                    <option value=\"SE\">Sergipe</option>\r\n                                    <option value=\"TO\">Tocantins</option>\r\n                                  </select>\r\n                                </div>\r\n                            </div>\r\n                          </fieldset>\r\n                        </div>\r\n                        <button (click)=\"adicionarEndereco()\" class=\"btn btn-outline-primary\">\r\n                          Adicionar Endereço\r\n                        </button>\r\n                      </div>\r\n                    </tab>\r\n\r\n                <tab heading=\"telefones\">\r\n                  <div>\r\n                    <div formArrayName=\"telefones\" *ngFor=\"let telefone of telefones.controls; let i=index\">\r\n                      <div [formGroupName]=\"i\" class=\"form-group\">\r\n                        <h5>Telefones</h5>\r\n                        <div class=\"form-row\">\r\n                          <div class=\"form-group col-md-3\">\r\n                            <label>Numero</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"numero\" placeholder=\"Número.\"\r\n                              maxlength=\"15\" mask=\"(00) 000000000\" id=\"telefone\" onkeypress=\"return SomenteNumero(event)\">\r\n                          </div>\r\n                          <div class=\"form-group col-md-3\">\r\n                            <label>Tipo</label>\r\n                            <select class=\"form-control\" formControlName=\"tipo\">\r\n                              <option value=\"\">Selecione</option>\r\n                              <option value=\"1\">Celular</option>\r\n                              <option value=\"2\">Comercial</option>\r\n                            </select>\r\n                          </div>\r\n                          <div class=\"form-group col-md-1\">\r\n                            <br>\r\n                            <button type=\"button\" class=\"btn btn-outline-danger mt-2\"\r\n                              (click)=\"removerTelefone(i)\">Remover</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <button class=\"btn btn-outline-primary\" (click)=\"adicionarTelefone();\">\r\n                      Adicionar Telefone\r\n                    </button>\r\n                  </div>\r\n                </tab>\r\n\r\n              </tabset>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer d-flex\">\r\n        <button class=\"btn btn-secondary\" (click)=\"fechaModal(template)\">\r\n          Fechar\r\n        </button>\r\n        <button class=\"btn btn-primary ml-auto\" [disabled]=\"!registerForm.valid\" (click)=\"salvarAlteracao(template)\">\r\n          Salvar\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div bsModal #confirm=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          Deletando Cliente\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" (click)=\"confirm.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>{{bodyDeletarCliente}}</p>\r\n      </div>\r\n      <div class=\"modal-footer btn-group d-flex\">\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"confirm.hide()\">\r\n          CANCELAR\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"confirmeDelete(confirm)\">\r\n          DELETAR\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/clientes/clientes.component.ts":
/*!************************************************!*\
  !*** ./src/app/clientes/clientes.component.ts ***!
  \************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/Cliente.service */ "./src/app/_services/Cliente.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var ClientesComponent = /** @class */ (function () {
    function ClientesComponent(clienteService, modalService, fb, toastr) {
        this.clienteService = clienteService;
        this.modalService = modalService;
        this.fb = fb;
        this.toastr = toastr;
        this.titulo = 'Clientes';
        this.bodyDeletarCliente = '';
        this.modoSalvar = 'post';
    }
    Object.defineProperty(ClientesComponent.prototype, "filtroLista", {
        get: function () {
            return this.FiltroLista;
        },
        set: function (value) {
            this.FiltroLista = value;
            this.clienteFiltrados = this.filtroLista ? this.filtrarClientes(this.filtroLista) : this.clientes;
        },
        enumerable: true,
        configurable: true
    });
    ClientesComponent.prototype.editarCliente = function (cli, template) {
        var _this = this;
        this.clienteService.getClienteById(cli.id)
            .subscribe(function (cliente) {
            _this.cliente = Object.assign({}, cliente);
            console.log(cliente);
            _this.registerForm.patchValue(_this.cliente);
            _this.cliente.enderecos.forEach(function (endereco) {
                _this.enderecos.push(_this.criaEndereco(endereco));
            });
            _this.cliente.telefones.forEach(function (telefone) {
                _this.telefones.push(_this.criaTelefone(telefone));
            });
        });
        this.modoSalvar = 'put';
        this.openModal(template);
    };
    ClientesComponent.prototype.novoCliente = function (template) {
        this.modoSalvar = 'post';
        this.openModal(template);
    };
    ClientesComponent.prototype.excluirCliente = function (cliente, template) {
        this.openModal(template);
        this.cliente = cliente;
        this.bodyDeletarCliente = "Tem certeza que deseja excluir o cliente: " + cliente.nome;
    };
    ClientesComponent.prototype.confirmeDelete = function (template) {
        var _this = this;
        this.clienteService.deleteCliente(this.cliente.id).subscribe(function () {
            template.hide();
            _this.getClientes();
            _this.toastr.success('Cliente excluido com sucesso!');
        }, function (error) {
            _this.toastr.error('Erro ao tentar excluir cliente: ${ error}');
            console.log(error);
        });
    };
    ClientesComponent.prototype.openModal = function (template) {
        this.registerForm.reset();
        template.show();
    };
    ClientesComponent.prototype.ngOnInit = function () {
        this.getClientes();
        this.validation();
    };
    ClientesComponent.prototype.filtrarClientes = function (filtrarPor) {
        filtrarPor = filtrarPor.toLocaleLowerCase();
        return this.clientes.filter(function (cliente) { return cliente.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1; });
    };
    ClientesComponent.prototype.validation = function () {
        this.registerForm = this.fb.group({
            cpfCnpj: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: [''],
            contato: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            enderecos: this.fb.array([]),
            telefones: this.fb.array([])
        });
    };
    Object.defineProperty(ClientesComponent.prototype, "telefones", {
        get: function () {
            return this.registerForm.get('telefones');
        },
        enumerable: true,
        configurable: true
    });
    ClientesComponent.prototype.criaTelefone = function (telefone) {
        return this.fb.group({
            id: [telefone.id],
            numero: [telefone.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tipo: [telefone.tipo]
        });
    };
    ClientesComponent.prototype.adicionarTelefone = function () {
        this.telefones.push(this.criaTelefone({ id: 0 }));
    };
    ClientesComponent.prototype.removerTelefone = function (id) {
        this.telefones.removeAt(id);
    };
    Object.defineProperty(ClientesComponent.prototype, "enderecos", {
        get: function () {
            return this.registerForm.get('enderecos');
        },
        enumerable: true,
        configurable: true
    });
    ClientesComponent.prototype.criaEndereco = function (endereco) {
        return this.fb.group({
            id: [endereco.id],
            cep: [endereco.cep],
            logradouro: [endereco.logradouro],
            numero: [endereco.numero],
            bairro: [endereco.bairro],
            cidade: [endereco.cidade],
            uf: [endereco.uf]
        });
    };
    ClientesComponent.prototype.adicionarEndereco = function () {
        this.enderecos.push(this.criaEndereco({ id: 0 }));
    };
    ClientesComponent.prototype.fechaModal = function (template) {
        this.ngOnInit();
        template.hide();
    };
    ClientesComponent.prototype.removerEndereco = function (id) {
        this.enderecos.removeAt(id);
    };
    ClientesComponent.prototype.salvarAlteracao = function (template) {
        var _this = this;
        if (this.registerForm.valid) {
            if (this.modoSalvar === 'post') {
                this.cliente = Object.assign({}, this.registerForm.value);
                console.log(this.cliente);
                this.clienteService.postCliente(this.cliente).subscribe(function (novoCliente) {
                    template.hide();
                    _this.ngOnInit();
                    _this.toastr.success('Cliente inserido com sucesso!');
                }, function (error) {
                    console.log(error);
                    console.log(_this.cliente);
                    _this.toastr.error('Erro ao incluir cliente: ${error}');
                });
            }
            else {
                this.cliente = Object.assign({ id: this.cliente.id }, this.registerForm.value);
                console.log(this.cliente);
                this.clienteService.putCliente(this.cliente).subscribe(function () {
                    template.hide();
                    _this.ngOnInit();
                    _this.toastr.success('Cliente alterado com sucesso!');
                }, function (error) {
                    console.log(error);
                    console.log(_this.cliente);
                    _this.toastr.error('Erro ao alterar cliente: ${error}');
                });
            }
        }
    };
    ClientesComponent.prototype.getClientes = function () {
        var _this = this;
        this.clienteService.getAllCliente().subscribe(function (Clientes) {
            _this.clientes = Clientes;
            _this.clienteFiltrados = _this.clientes;
        }, function (error) {
            _this.toastr.error('Erro ao tentar carregar cliente: ${error}');
        });
    };
    ClientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clientes',
            template: __webpack_require__(/*! ./clientes.component.html */ "./src/app/clientes/clientes.component.html"),
            styles: [__webpack_require__(/*! ./clientes.component.css */ "./src/app/clientes/clientes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_Cliente_service__WEBPACK_IMPORTED_MODULE_2__["ClienteService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ClientesComponent);
    return ClientesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/equipamentos/equipamentos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/equipamentos/equipamentos.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwYW1lbnRvcy9lcXVpcGFtZW50b3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/equipamentos/equipamentos.component.html":
/*!**********************************************************!*\
  !*** ./src/app/equipamentos/equipamentos.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<app-titulo [titulo]=titulo></app-titulo>\r\n<div class=\"d-flex\">\r\n  <div class=\"form-inline mr-auto\" action=\"\">\r\n    <div class=\"form-group mb-2\"><input type=\"text\" class=\"form-control mr-2\" placeholder=\"Filtrar\"\r\n        [(ngModel)]=\"filtroLista\">\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-outline-primary\" (click)=\"novoEquipamento(template)\">\r\n    <i class=\"fa fa-plus-circle\"></i>&nbsp;\r\n    Novo Equipamento\r\n  </button>\r\n</div>\r\n<br>\r\n<table class=\"table table-striped\">\r\n  <thead class=\"thead-light\">\r\n    <tr>\r\n      <th>#</th>\r\n      <th>Nr Série</th>\r\n      <th>Marca</th>\r\n      <th>Modelo</th>\r\n      <th>Editar</th>\r\n      <th>Excluir</th>\r\n      <th>Serviços</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody *ngIf=\"equipamentos\">\r\n    <tr *ngFor=\"let equipamento of equipamentoFiltrados\">\r\n      <td>{{equipamento.id}}</td>\r\n      <td>{{equipamento.nrSerie | uppercase}}</td>\r\n      <td>{{equipamento.marca | uppercase}}</td>\r\n      <td>{{equipamento.modelo | uppercase}}</td>\r\n      <td>\r\n        <button class=\"btn btn-sm btn-success\" tooltip=\"Editar\" (click)=\"editarEquipamento(equipamento, template)\">\r\n          <i class=\"fa fa-edit\"></i>\r\n        </button>\r\n      </td>\r\n      <td>\r\n        <button class=\"btn btn-sm btn-danger\" tooltip=\"Excluir\" (click)=\"excluirEquipamento(equipamento, confirm)\">\r\n          <i class=\"fa fa-eraser\"></i>\r\n        </button>\r\n      </td>\r\n      <td>\r\n        <a [routerLink]=\"['/servicos', equipamento.id, 'edit']\" tooltip=\"Cadastrar serviços\" class=\"btn btn-sm btn-warning\">\r\n          <i class=\"fa fa-eye\"></i>\r\n        </a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n  <tfoot *ngIf=\"!equipamentos\">\r\n    <tr>\r\n      <td colspan=\"7\" class=\"text-center\">\r\n        <h4>Nenhum equipamento encontrado</h4>\r\n      </td>\r\n    </tr>\r\n  </tfoot>\r\n</table>\r\n\r\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n  <div class=\"modal-dialog modal-xl\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">Equipamentos</h4>\r\n        <button type=\"button\" class=\"close pull-right\" (click)=\"template.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"registerForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-3\">\r\n                      <label>Número de Série</label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"nrSerie\" placeholder=\"Número de Série.\">\r\n                    </div>\r\n                  </div>\r\n                    <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                      <label>Marca</label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"marca\" placeholder=\"Marca\">\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                      <label>Modelo</label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"modelo\" placeholder=\"Modelo.\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                      <label>Descrição</label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"descricao\" placeholder=\"Descrição.\">\r\n                    </div>\r\n                  </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer d-flex\">\r\n        <button class=\"btn btn-secondary\" (click)=\"template.hide()\">\r\n          Fechar\r\n        </button>\r\n        <button class=\"btn btn-primary ml-auto\" [disabled]=\"!registerForm.valid\" (click)=\"salvarEquipamento(template)\">\r\n          Salvar\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div bsModal #confirm=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          Deletando Equipamento\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" (click)=\"confirm.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>{{bodyDeletarEquipamento}}</p>\r\n      </div>\r\n      <div class=\"modal-footer btn-group d-flex\">\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"confirm.hide()\">\r\n          CANCELAR\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"confirmeDelete(confirm)\">\r\n          DELETAR\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/equipamentos/equipamentos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/equipamentos/equipamentos.component.ts ***!
  \********************************************************/
/*! exports provided: EquipamentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipamentosComponent", function() { return EquipamentosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_Equipamento_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/Equipamento.service */ "./src/app/_services/Equipamento.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var EquipamentosComponent = /** @class */ (function () {
    function EquipamentosComponent(equipamentoService, modalService, fb, toastr, route) {
        this.equipamentoService = equipamentoService;
        this.modalService = modalService;
        this.fb = fb;
        this.toastr = toastr;
        this.route = route;
        this.titulo = 'Equipamentos';
        this.bodyDeletarEquipamento = '';
        this.modoSalvar = 'post';
    }
    Object.defineProperty(EquipamentosComponent.prototype, "filtroLista", {
        get: function () {
            return this.FiltroLista;
        },
        set: function (value) {
            this.FiltroLista = value;
            this.equipamentoFiltrados = this.filtroLista ? this.filtrarEquipamentos(this.filtroLista) : this.equipamentos;
        },
        enumerable: true,
        configurable: true
    });
    EquipamentosComponent.prototype.filtrarEquipamentos = function (filtrarPor) {
        filtrarPor = filtrarPor.toLocaleLowerCase();
        return this.equipamentos.filter(function (equipamento) { return equipamento.nrSerie.toLocaleLowerCase().indexOf(filtrarPor) !== -1; });
    };
    EquipamentosComponent.prototype.novoEquipamento = function (template) {
        this.modoSalvar = 'post';
        this.openModal(template);
    };
    EquipamentosComponent.prototype.openModal = function (template) {
        this.registerForm.reset();
        template.show();
    };
    EquipamentosComponent.prototype.ngOnInit = function () {
        this.idCliente = +this.route.snapshot.paramMap.get('idCliente');
        this.getEquipamentosPorCliente(this.idCliente);
        this.validation();
    };
    EquipamentosComponent.prototype.getEquipamentosPorCliente = function (idCliente) {
        var _this = this;
        this.equipamentoService.getEquipamentoByCliente(idCliente).subscribe(function (Equipamentos) {
            _this.equipamentos = Equipamentos;
            _this.equipamentoFiltrados = _this.equipamentos;
            console.log(_this.equipamentos);
        }, function (error) {
            console.log(error);
            _this.toastr.error('Erro ao tentar carregar equipamentos: ${error}');
        });
    };
    EquipamentosComponent.prototype.getEquipamentos = function () {
        var _this = this;
        this.equipamentoService.getAllEquipamento().subscribe(function (Equipamentos) {
            _this.equipamentos = Equipamentos;
            _this.equipamentoFiltrados = _this.equipamentos;
        }, function (error) {
            console.log(error);
            _this.toastr.error('Erro ao tentar carregar equipamentos: ${error}');
        });
    };
    EquipamentosComponent.prototype.validation = function () {
        this.registerForm = this.fb.group({
            nrSerie: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descricao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            marca: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            modelo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            clienteId: []
        });
    };
    EquipamentosComponent.prototype.editarEquipamento = function (equipamento, template) {
        this.modoSalvar = 'put';
        this.openModal(template);
        this.equipamento = Object.assign({}, equipamento);
        console.log(equipamento);
        this.registerForm.patchValue(this.equipamento);
    };
    EquipamentosComponent.prototype.excluirEquipamento = function (equipamento, template) {
        this.openModal(template);
        this.equipamento = equipamento;
        this.bodyDeletarEquipamento = "Tem certeza que deseja excluir o equipamento: " + equipamento.nrSerie;
    };
    EquipamentosComponent.prototype.confirmeDelete = function (template) {
        var _this = this;
        this.equipamentoService.deleteEquipamento(this.equipamento.id).subscribe(function () {
            template.hide();
            _this.getEquipamentos();
            _this.toastr.success('Equipamento excluido com sucesso!');
        }, function (error) {
            _this.toastr.error('Erro ao tentar excluir equipamento: ${error}');
            console.log(error);
        });
    };
    EquipamentosComponent.prototype.salvarEquipamento = function (template) {
        var _this = this;
        if (this.registerForm.valid) {
            if (this.modoSalvar === 'post') {
                this.equipamento = Object.assign({}, this.registerForm.value);
                this.equipamento.clienteId = this.idCliente;
                console.log(this.equipamento);
                this.equipamentoService.postEquipamento(this.equipamento).subscribe(function (novoEquipamento) {
                    template.hide();
                    _this.getEquipamentosPorCliente(_this.equipamento.clienteId);
                    _this.toastr.success('Equipamento inserido com sucesso!');
                }, function (error) {
                    _this.toastr.error('Erro ao incluir equipamento: ${error}');
                });
            }
            else {
                this.equipamento = Object.assign({ id: this.equipamento.id }, this.registerForm.value);
                console.log(this.equipamento);
                this.equipamentoService.putEquipamento(this.equipamento).subscribe(function () {
                    template.hide();
                    _this.getEquipamentosPorCliente(_this.equipamento.clienteId);
                    _this.toastr.success('Equipamento alterado com sucesso!');
                }, function (error) {
                    console.log(error);
                    _this.toastr.error('Erro ao alterar equipamento: ${error}');
                });
            }
        }
    };
    EquipamentosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-equipamentos',
            template: __webpack_require__(/*! ./equipamentos.component.html */ "./src/app/equipamentos/equipamentos.component.html"),
            styles: [__webpack_require__(/*! ./equipamentos.component.css */ "./src/app/equipamentos/equipamentos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_Equipamento_service__WEBPACK_IMPORTED_MODULE_5__["EquipamentoService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EquipamentosComponent);
    return EquipamentosComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark  bg-dark\">\r\n    <div class=\"container\">\r\n  <a class=\"navbar-brand\" routerLink=\"clientes\">SGCOS</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div *ngIf=\"loggedIn()\" class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"clientes\">Clientes<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <!--<li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"equipamentos\">Equipamentos</a>\r\n      </li>-->\r\n      </ul>\r\n    </div>\r\n    <ul *ngIf=\"loggedIn()\" class=\"navbar-nav\">\r\n      <li class=\"nav-item dropdown\" dropdown>\r\n        <a dropdownToggle class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\" style=\"cursor: pointer; text-transform: capitalize;\">\r\n          {{userName()}}\r\n        </a>\r\n        <div *dropdownMenu class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n          <div role=\"separator\" class=\"divider\"></div>\r\n          <a class=\"dropdown-item\" (click)=\"logout()\" style=\"cursor: pointer\">\r\n            Sair\r\n          </a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n      <button *ngIf=\"!loggedIn()\" class=\"btn btn-success\" (click)=\"entrar()\">Entrar</button>\r\n  </div>  \r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var NavComponent = /** @class */ (function () {
    function NavComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent.prototype.entrar = function () {
        this.router.navigate(['/user/login']);
    };
    NavComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.toastr.show('Você saiu do sistema.');
        this.router.navigate(['/user/login']);
    };
    NavComponent.prototype.userName = function () {
        return sessionStorage.getItem('username');
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/servicos/servicos.component.css":
/*!*************************************************!*\
  !*** ./src/app/servicos/servicos.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY29zL3NlcnZpY29zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/servicos/servicos.component.html":
/*!**************************************************!*\
  !*** ./src/app/servicos/servicos.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<app-titulo [titulo]=titulo></app-titulo>\r\n<div class=\"d-flex\">\r\n  <div class=\"form-inline mr-auto\" action=\"\">\r\n    <div class=\"form-group mb-2\"><input type=\"text\" class=\"form-control mr-2\" placeholder=\"Filtrar\"\r\n        [(ngModel)]=\"filtroLista\">\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-outline-primary\" (click)=\"novoServico(template)\">\r\n    <i class=\"fa fa-plus-circle\"></i>&nbsp;\r\n    Novo Serviço\r\n  </button>\r\n</div>\r\n<br>\r\n<table class=\"table table-striped\">\r\n  <thead class=\"thead-light\">\r\n    <tr>\r\n      <th>#</th>\r\n      <th>Nr Ordem se Serviço</th>\r\n      <th>Data Atendimento</th>\r\n      <th>Dias de Garantia</th>\r\n      <th>Status</th>\r\n      <th>Opções</th> \r\n    </tr>\r\n  </thead>\r\n  <tbody *ngIf=\"servicos\">\r\n    <tr *ngFor=\"let servico of servicoFiltrados\">\r\n      <td>{{servico.id}}</td>\r\n      <td>{{servico.nrOrdem}}</td>\r\n      <td>{{servico.dtAtendimento | DateFormatPipe}}</td>\r\n      <td>{{servico.qtdDiasGarantia}}</td>\r\n      <td>\r\n        <div *ngIf=\"servico.garantia\">\r\n         <h3>\r\n           <span class=\"badge badge-success\">\r\n              <i class=\"fa fa-thumbs-up\"></i>&nbsp; \r\n              Garantia\r\n            </span>\r\n          </h3>\r\n        </div>\r\n        <div *ngIf=\"!servico.garantia\">\r\n          <h3>\r\n            <span class=\"badge badge-danger\">\r\n              <i class=\"fa fa-thumbs-down\"></i>&nbsp;\r\n              Garantia\r\n            </span>\r\n          </h3>\r\n        </div>\r\n      </td>\r\n      <td>\r\n        <div class=\"btn-group\">\r\n          <button class=\"btn btn-sm btn-success\" tooltip=\"Editar\" (click)=\"editarServico(servico, template)\">\r\n            <i class=\"fa fa-edit\"></i>\r\n          </button>\r\n          <button class=\"btn btn-sm btn-danger\" tooltip=\"Excluir\" (click)=\"excluirServico(servico, confirm)\">\r\n            <i class=\"fa fa-eraser\"></i>\r\n          </button>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n  <tfoot *ngIf=\"!servicos\">\r\n    <tr>\r\n      <td colspan=\"7\" class=\"text-center\">\r\n        <h4>Nenhum serviço encontrado</h4>\r\n      </td>\r\n    </tr>\r\n  </tfoot>\r\n</table>\r\n\r\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\n     role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n  <div class=\"modal-dialog modal-xl\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">Serviços</h4>\r\n        <button type=\"button\" class=\"close pull-right\" (click)=\"template.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"registerForm\">  \r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-3\">\r\n              <label>Nr Ordem</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"nrOrdem\" placeholder=\"Nr Ordem de serviço.\" onkeypress=\"return SomenteNumero(event)\">\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <label>Data de atendimento</label>\r\n              <input type=\"text\" bsDatepicker [bsConfig]=\"{ dateInputFormat : 'DD/MM/YYYY' }\"\r\n              value=\"{{servico.dtAtendimento | DateFormatPipe}}\" \r\n              class=\"form-control\" formControlName=\"dtAtendimento\" placeholder=\"Data Atendimento.\">\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <label>Dias de garantia</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"qtdDiasGarantia\" placeholder=\"Dias de garantia\" onkeypress=\"return SomenteNumero(event)\">\r\n            </div>\r\n          </div>  \r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label>Defeito</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"defeito\" placeholder=\"Defeito.\">\r\n            </div>\r\n          </div> \r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label>Serviço executado</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"servicosExecutados\" placeholder=\"Serviço executado.\">\r\n            </div>\r\n          </div> \r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label>Peças Substituidas</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"pecasSubstituidas\" placeholder=\"Peças Substituidas.\">\r\n            </div>\r\n          </div> \r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label>Observações</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"observacao\" placeholder=\"Observações.\">\r\n            </div>\r\n          </div> \r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-4\">\r\n              <label>Valor do Serviço</label>\r\n              <input type=\"text\" currencyMask\r\n              [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\r\n              class=\"form-control\" formControlName=\"valorServico\" placeholder=\"R$ 0,00\" onkeypress=\"return SomenteNumero(event)\">  \r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer d-flex\">\r\n        <button class=\"btn btn-secondary\" (click)=\"template.hide()\">\r\n          Fechar\r\n        </button>\r\n        <button class=\"btn btn-primary ml-auto\" [disabled]=\"!registerForm.valid\" (click)=\"salvarServico(template)\">\r\n          Salvar\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div bsModal #confirm=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n\t<div class=\"modal-dialog modal-sm\">\r\n  \t\t<div class=\"modal-content\">\r\n    \t\t<div class=\"modal-header\">\r\n      \t\t\t<h4 class=\"modal-title pull-left\">\r\n        \t\t\tDeletando Serviço\r\n      \t\t\t</h4>\r\n      \t\t\t<button type=\"button\" class=\"close pull-right\" (click)=\"confirm.hide()\" aria-label=\"Close\">\r\n        \t\t\t<span aria-hidden=\"true\">&times;</span>\r\n      \t\t\t</button>\r\n    \t\t</div>\r\n    \t\t<div class=\"modal-body\">\r\n      \t\t\t<p>{{bodyDeletarServico}}</p>\r\n    \t\t</div>    \r\n    \t\t<div class=\"modal-footer btn-group d-flex\">      \r\n      \t\t\t<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"confirm.hide()\">\r\n        \t\t\tCANCELAR\r\n      \t\t\t</button>\r\n      \t\t\t<button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"confirmeDelete(confirm)\">\r\n          \t\tDELETAR\r\n        \t\t</button>\r\n    \t\t</div>\r\n  \t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/servicos/servicos.component.ts":
/*!************************************************!*\
  !*** ./src/app/servicos/servicos.component.ts ***!
  \************************************************/
/*! exports provided: ServicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosComponent", function() { return ServicosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_Servico_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/Servico.service */ "./src/app/_services/Servico.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ptBrLocale"]);
var ServicosComponent = /** @class */ (function () {
    function ServicosComponent(servicoService, modalService, fb, toastr, route, localeService) {
        this.servicoService = servicoService;
        this.modalService = modalService;
        this.fb = fb;
        this.toastr = toastr;
        this.route = route;
        this.localeService = localeService;
        this.titulo = 'Serviços';
        this.bodyDeletarServico = '';
        this.modoSalvar = 'post';
        this.dataAtual = new Date();
        this.localeService.use('pt-br');
    }
    Object.defineProperty(ServicosComponent.prototype, "filtroLista", {
        get: function () {
            return this.FiltroLista;
        },
        set: function (value) {
            this.FiltroLista = value;
            this.servicoFiltrados = this.filtroLista ? this.filtrarServicos(this.filtroLista) : this.servicos;
        },
        enumerable: true,
        configurable: true
    });
    ServicosComponent.prototype.filtrarServicos = function (filtrarPor) {
        filtrarPor = filtrarPor.toLocaleLowerCase();
        return this.servicos.filter(function (servico) { return servico.observacao.toLowerCase().indexOf(filtrarPor) !== -1; });
    };
    ServicosComponent.prototype.ngOnInit = function () {
        this.idEquipamento = +this.route.snapshot.paramMap.get('idEquipamento');
        this.getServicosPorEquipamento(this.idEquipamento.toString());
        this.validation();
    };
    ServicosComponent.prototype.novoServico = function (template) {
        this.modoSalvar = 'post';
        this.openModal(template);
    };
    ServicosComponent.prototype.openModal = function (template) {
        this.registerForm.reset();
        template.show();
    };
    ServicosComponent.prototype.validation = function () {
        this.registerForm = this.fb.group({
            nrOrdem: [''],
            dtAtendimento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            qtdDiasGarantia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            defeito: [''],
            servicosExecutados: [''],
            pecasSubstituidas: [''],
            observacao: [''],
            valorServico: [''],
            equipamentoId: ['']
        });
    };
    ServicosComponent.prototype.editarServico = function (servico, template) {
        this.modoSalvar = 'put';
        this.openModal(template);
        this.servico = Object.assign({}, servico);
        console.log(servico);
        this.registerForm.patchValue(this.servico);
    };
    ServicosComponent.prototype.excluirServico = function (servico, template) {
        this.openModal(template);
        this.servico = servico;
        this.bodyDeletarServico = "Tem certeza que deseja excluir o servico: " + servico.id;
    };
    ServicosComponent.prototype.confirmeDelete = function (template) {
        var _this = this;
        this.servicoService.deleteServico(this.servico.id).subscribe(function () {
            template.hide();
            _this.getServicosPorEquipamento(_this.servico.equipamentoId.toString());
            _this.toastr.success('Servico excluido com sucesso!');
        }, function (error) {
            _this.toastr.error('Erro ao tentar excluir servico: ${error}');
            console.log(error);
        });
    };
    ServicosComponent.prototype.salvarServico = function (template) {
        var _this = this;
        if (this.registerForm.valid) {
            if (this.modoSalvar === 'post') {
                this.servico = Object.assign({}, this.registerForm.value);
                this.servico.equipamentoId = this.idEquipamento;
                console.log(this.servico);
                this.servicoService.postServico(this.servico).subscribe(function (novoServico) {
                    template.hide();
                    _this.getServicosPorEquipamento(_this.servico.equipamentoId.toString());
                    _this.toastr.success('Servico inserido com sucesso!');
                }, function (error) {
                    _this.toastr.error('Erro ao incluir servico: ${error}');
                });
            }
            else {
                this.servico = Object.assign({ id: this.servico.id }, this.registerForm.value);
                console.log(this.servico);
                this.servicoService.putServico(this.servico).subscribe(function () {
                    template.hide();
                    _this.getServicosPorEquipamento(_this.servico.equipamentoId.toString());
                    _this.toastr.success('Servico alterado com sucesso!');
                }, function (error) {
                    console.log(error);
                    _this.toastr.error('Erro ao alterar servico: ${error}');
                });
            }
        }
    };
    ServicosComponent.prototype.getServicosPorEquipamento = function (idEquipamento) {
        var _this = this;
        this.servicoService.getServicoByEquipamento(idEquipamento).subscribe(function (Servicos) {
            _this.servicos = Servicos;
            _this.servicoFiltrados = _this.servicos;
            console.log(_this.servicos);
        }, function (error) {
            console.log(error);
            _this.toastr.error('Erro ao tentar carregar servicos: ${error}');
        });
    };
    ServicosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicos',
            template: __webpack_require__(/*! ./servicos.component.html */ "./src/app/servicos/servicos.component.html"),
            styles: [__webpack_require__(/*! ./servicos.component.css */ "./src/app/servicos/servicos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_Servico_service__WEBPACK_IMPORTED_MODULE_3__["ServicoService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"]])
    ], ServicosComponent);
    return ServicosComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin .checkbox {\r\n    font-weight: 400;\r\n  }\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n  }\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin input[type=\"email\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  .form-signin input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QiwwQkFBMEI7RUFDNUIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-titulo [titulo]=\"titulo\"></app-titulo>\n\n<body class=\"text-center\" data-gr-c-s-loaded=\"true\">\n  <form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n    <img class=\"mb-4\" src=\"\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Login</h1>\n    <label for=\"username\" class=\"sr-only\">Usuário</label>\n    <input type=\"email\" id=\"username\" class=\"form-control\" placeholder=\"Usuário\"\n    name=\"username\" required [(ngModel)]=\"model.username\">\n    <br>\n    <label for=\"password\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Senha\"\n    name=\"password\" required [(ngModel)]=\"model.password\">\n    <!--div class=\"checkbox mb-3\">\n      <label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label>\n    </div-->\n    <button [disabled]=\"!loginForm.valid\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Entrar</button>\n    <p class=\"mt-5 mb-3 text-muted\">Não tem login? Cadastre-se abaixo</p>\n    <button class=\"btn btn-lg btn-link btn-block\" (click)=\"router.navigate(['/user/registration'])\">Quero me cadastrar</button>\n  </form>  \n\n</body>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.titulo = '';
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['/clientes']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model)
            .subscribe(function () {
            _this.router.navigate(['/clientes']);
            _this.toastr.success('Seja bem vindo!');
        }, function (error) {
            _this.toastr.error('Falha ao tentar Logar');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/registration/registration.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/registration/registration.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/registration/registration.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/registration/registration.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4\">\n  <div class=\"col-md-6\" style=\"height: 450px;\">\n    <div class=\"row col-md-12 my-auto side-heder\">\n      <h1>Cadastro de Usuário</h1>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <form [formGroup]=\"registerForm\">\n      <div class=\"form-group required\">\n        <label for=\"\">Nome Completo:</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"fullName\" [ngClass]=\"{'is-invalid': registerForm.get('fullName').errors &&\n                                  registerForm.get('fullName').touched }\" placeholder=\"Insira o Nome Completo\" />\n        <div *ngIf=\"registerForm.get('fullName').hasError('required') &&\n                    registerForm.get('fullName').touched\" class=\"invalid-feedback\">\n          Nome Completo é obrigatório.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Email:</label>\n        <input class=\"form-control\" type=\"text\" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': registerForm.get('email').errors && \n                                     registerForm.get('email').touched}\" placeholder=\"Insira o Nome Completo\" />\n        <div *ngIf=\"registerForm.get('email').hasError('required') &&\n                    registerForm.get('email').touched\" class=\"invalid-feedback\">\n          email é obrigatório.\n        </div>\n        <div *ngIf=\"registerForm.get('email').hasError('email')\n        && registerForm.get('email').touched\" class=\"invalid-feedback\">\n          Deve ser um e-mail válido.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Usuario:</label>\n        <input class=\"form-control\" type=\"text\" formControlName=\"userName\" [ngClass]=\"{'is-invalid': registerForm.get('userName').errors &&\n                                    registerForm.get('userName').touched}\" placeholder=\"Insira o nome de Usuário\" />\n        <div *ngIf=\"registerForm.get('userName').hasError('required') &&\n                    registerForm.get('userName').touched\" class=\"invalid-feedback\">\n          Usuário é obrigatório.\n        </div>\n      </div>\n      <div formGroupName=\"passwords\">\n        <div class=\"form-group\">\n          <label for=\"\">Senha:</label>\n          <input class=\"form-control\" type=\"password\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': registerForm.get('passwords.password').errors &&\n                                       registerForm.get('passwords.password').touched}\"\n            placeholder=\"Digite uma Senha\" />\n          <div *ngIf=\"registerForm.get('passwords.password').hasError('minlength') &&\n            registerForm.get('passwords.password').touched\" class=\"invalid-feedback\">\n            Deve conter no mínimo 4 caracters\n          </div>\n          <div *ngIf=\"registerForm.get('passwords.password').hasError('required') &&\n                      registerForm.get('passwords.password').touched\" class=\"invalid-feedback\">\n            Senha é obrigatório.\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Confirmar Senha:</label>\n          <input class=\"form-control\" type=\"password\" formControlName=\"confirmPassword\" [ngClass]=\"{ 'is-invalid': registerForm.get('passwords.confirmPassword').errors \n                         && registerForm.get('passwords.confirmPassword').touched \n                         ||registerForm.get('passwords.confirmPassword').hasError('mismatch') \n                         && registerForm.get('passwords.confirmPassword').touched }\" placeholder=\"Confirme a Senha\" />\n          <div *ngIf=\"registerForm.get('passwords.confirmPassword').hasError('required') &&\n                      registerForm.get('passwords.confirmPassword').touched\" class=\"invalid-feedback\">\n            Confirme a Senha\n          </div>\n          <div *ngIf=\"registerForm.get('passwords.confirmPassword').hasError('mismatch') \n                      && registerForm.get('passwords.confirmPassword').touched\" class=\"invalid-feedback\">\n            Confirmação não confere\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-8 offset-md-2\">\n          <button class=\"btn btn-lg btn-success btn-block\" [disabled]=\"!registerForm.valid\"\n            (click)=\"cadastrarUsuario()\">Registar</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(authService, router, fb, toastr) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.validation();
    };
    RegistrationComponent.prototype.validation = function () {
        this.registerForm = this.fb.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passwords: this.fb.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }, { validator: this.compararSenhas })
        });
    };
    RegistrationComponent.prototype.compararSenhas = function (fb) {
        var confirmSenhaCtrl = fb.get('confirmPassword');
        if (confirmSenhaCtrl.errors == null || 'mismatch' in confirmSenhaCtrl.errors) {
            if (fb.get('password').value !== confirmSenhaCtrl.value) {
                confirmSenhaCtrl.setErrors({ mismatch: true });
            }
            else {
                confirmSenhaCtrl.setErrors(null);
            }
        }
    };
    RegistrationComponent.prototype.cadastrarUsuario = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({ password: this.registerForm.get('passwords.password').value }, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.router.navigate(['/user/login']);
                _this.toastr.success('Cadastro Realizado');
            }, function (error) {
                var erro = error.error;
                erro.forEach(function (element) {
                    switch (element.code) {
                        case 'DuplicateUserName':
                            _this.toastr.error('Cadastro Duplicado!');
                            break;
                        default:
                            _this.toastr.error("Erro no Cadatro! CODE: " + element.code);
                            break;
                    }
                });
            });
        }
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/user/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/user/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-8 offset-md-2\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/util/Constants.ts":
/*!***********************************!*\
  !*** ./src/app/util/Constants.ts ***!
  \***********************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.DATE_FMT = 'dd/MM/yyyy';
    Constants.TIME_FMT = 'hh:mm';
    Constants.DATE_TIME_FMT = '${Constants.DATE_FMT} ${Constants.TIME_FMT}';
    return Constants;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sidnei\Downloads\SGCOS\SGCOS-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map