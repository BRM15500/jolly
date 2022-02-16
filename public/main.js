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
/* harmony import */ var _empleados_crud_empleados_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empleados-crud/empleados-crud.component */ "./src/app/empleados-crud/empleados-crud.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _juego_juego_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./juego/juego.component */ "./src/app/juego/juego.component.ts");






var routes = [
    { path: 'Empleados', component: _empleados_crud_empleados_crud_component__WEBPACK_IMPORTED_MODULE_3__["EmpleadosCrudComponent"] },
    { path: 'Juego', component: _juego_juego_component__WEBPACK_IMPORTED_MODULE_5__["JuegoComponent"] },
    { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\" *ngIf=\"isLoged\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/Home']\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/Home']\" >Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/Empleados']\" *ngIf=\"logedUser.rol === 1\">Empleados</a>\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\" *ngIf=\"logedUser.rol === 2\">Empleados</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/Juego']\" *ngIf=\"logedUser.rol === 2\">Juego</a>\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\"*ngIf=\"logedUser.rol === 1\">Juego</a>\n      </li>\n    </ul>\n  </div>\n</nav> -->\n<nx-menu *ngIf=\"isLoged\" [favsItems]=\"leftContent\" [menuItems]=\"mainContent\" title=\"MENU\"></nx-menu>\n<div class=\"main-div\" *ngIf=\"!isLoged\">\n  <div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"col-md-4 text-center\">\n        <div class=\"card\">\n          <div class=\"card-header\">{{title}}</div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <mat-label>Usuario</mat-label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Usuario\" #user>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label>Contraseña</label>\n                  <input type=\"password\" class=\"form-control\" #password>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12\">\n              <button class=\"dark\" (click)=\"login(user.value, password.value)\">Iniciar sesión</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_catalogService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/catalogService */ "./src/app/services/catalogService.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(catalogService, authService, router) {
        this.catalogService = catalogService;
        this.authService = authService;
        this.router = router;
        this.title = 'Banregio Web App';
        this.isLoged = false;
        this.logedUser = null;
        this.currentUser = null;
        this.leftContent = [{ description: 'MENU', isTitle: true }];
        this.mainContent = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getAccount();
        console.log(this.currentUser);
        if (this.currentUser !== null) {
            console.log("logeado");
            switch (this.currentUser.rol) {
                case 1:
                    this.leftContent = [{ description: 'MENU', isTitle: true }, { description: 'Juego', isTitle: false, route: '/Juego' }, { description: 'Home', isTitle: false, route: '/Home' }];
                    break;
                case 2:
                    this.leftContent = [{ description: 'MENU', isTitle: true }, { description: 'Empleados', isTitle: false, route: '/Empleados' }, { description: 'Home', isTitle: false, route: '/Home' }];
                    break;
            }
            this.isLoged = true;
            this.logedUser = this.authService.getAccount();
        }
        else {
            console.log("logOut");
            this.isLoged = false;
            this.logedUser = null;
            this.currentUser = null;
        }
    };
    AppComponent.prototype.login = function (user, pass) {
        var _this = this;
        console.log(user);
        console.log(pass);
        var login = {};
        login.username = user;
        login.password = pass;
        this.catalogService.login(login).subscribe(function (x) {
            console.log(x);
            if (x.username) {
                alert(x.username + " se ha logueado con éxito!");
                _this.isLoged = true;
                _this.logedUser = x;
                _this.authService.setAccount(x);
                _this.router.navigate(['/Home']);
            }
            else {
                alert("Credenciales inválidas");
            }
        }, function (error) {
            alert("Valide la información de entrada");
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_catalogService__WEBPACK_IMPORTED_MODULE_4__["CatalogService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _next_nx_controls_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next/nx-controls-common */ "./node_modules/@next/nx-controls-common/index.js");
/* harmony import */ var _empleados_crud_empleados_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empleados-crud/empleados-crud.component */ "./src/app/empleados-crud/empleados-crud.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _juego_juego_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./juego/juego.component */ "./src/app/juego/juego.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _juego_cuadro_cuadro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./juego/cuadro/cuadro.component */ "./src/app/juego/cuadro/cuadro.component.ts");
/* harmony import */ var _juego_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./juego/tabla/tabla.component */ "./src/app/juego/tabla/tabla.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
















var config = {
    usernameLabel: 'BRM/BRS/BRE',
    usernamePlaceholder: 'Usuario',
    endpoint: '/api',
    application: 'MI_PROYECTO',
    applicationTitle: 'Mi Proyecto'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _empleados_crud_empleados_crud_component__WEBPACK_IMPORTED_MODULE_6__["EmpleadosCrudComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _juego_juego_component__WEBPACK_IMPORTED_MODULE_8__["JuegoComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _juego_cuadro_cuadro_component__WEBPACK_IMPORTED_MODULE_10__["CuadroComponent"],
                _juego_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_11__["TablaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                //FrameworkModule.forRoot(config),
                _next_nx_controls_common__WEBPACK_IMPORTED_MODULE_5__["CommonsModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/empleados-crud/empleados-crud.component.html":
/*!**************************************************************!*\
  !*** ./src/app/empleados-crud/empleados-crud.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"showPage\">\n  <div class=\"card\" *ngIf=\"currentUser.rol === 2\">\n    <div class=\"card-header\">\n      <h3>Datos del empleado</h3>\n    </div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"empleadoForm\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div class=\"form-group\">\n            <label for=\"brm\">BRM (buscar)</label>\n            <input type=\"number\" maxlength=\"5\" class=\"form-control\" id=\"brm\" formControlName=\"brm\" placeholder=\"Ingresar BRM\" #brm>\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"form-group\">\n            <label for=\"puesto\">Puesto</label>\n            <select class=\"form-control\" id=\"puesto\" formControlName=\"puesto\">\n              <option selected disabled value=\"null\">Seleccione un puesto</option>\n              <option value=\"Desarrollador FrontEnd JR\">Desarrollador FrontEnd JR</option>\n              <option value=\"Desarrollador FrontEnd SR\">Desarrollador FrontEnd SR</option>\n              <option value=\"Desarrollador BackEnd JR\">Desarrollador BackEnd JR</option>\n              <option value=\"Desarrollador BackEnd SR\">Desarrollador BackEnd SR</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"form-group\">\n            <label for=\"nombre\">Nombre</label>\n            <input type=\"text\" class=\"form-control\" id=\"nombre\" formControlName=\"nombre\" placeholder=\"Ingresar Nombre\" #nombre>\n          </div>\n        </div>\n      </div>\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <div class=\"form-group\">\n              <label for=\"\">Foto</label>\n              <input type=\"file\" class=\"form-control-file\" accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"form-group\">\n              <button class=\"primary\" (click)=\"guardarEmp()\" [disabled]=\"empleadoForm.status !== 'VALID'\">Guardar empleado</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <!-- <div class=\"card\" *ngIf=\"edit\">\n    <div class=\"card-header\">\n      <h3>Datos del empleado</h3>\n    </div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"empleadoForm\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div class=\"form-group\">\n            <label for=\"brm\">BRM (buscar)</label>\n            <input type=\"number\" maxlength=\"5\" class=\"form-control\" id=\"brm\" formControlName=\"brm\" placeholder=\"Ingresar BRM\" #brm>\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"form-group\">\n            <label for=\"puesto\">Puesto</label>\n            <select class=\"form-control\" id=\"puesto\" formControlName=\"puesto\">\n              <option selected disabled value=\"null\">Seleccione un puesto</option>\n              <option value=\"Desarrollador FrontEnd JR\">Desarrollador FrontEnd JR</option>\n              <option value=\"Desarrollador FrontEnd SR\">Desarrollador FrontEnd SR</option>\n              <option value=\"Desarrollador BackEnd JR\">Desarrollador BackEnd JR</option>\n              <option value=\"Desarrollador BackEnd SR\">Desarrollador BackEnd SR</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"form-group\">\n            <label for=\"nombre\">Nombre</label>\n            <input type=\"text\" class=\"form-control\" id=\"nombre\" formControlName=\"nombre\" placeholder=\"Ingresar Nombre\" #nombre>\n          </div>\n        </div>\n      </div>\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <div class=\"form-group\">\n              <label for=\"\">Foto</label>\n              <input type=\"file\" class=\"form-control-file\" accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"form-group\">\n              <button class=\"btn btn-success mt-4 col-12\" (click)=\"guardarEmp()\" [disabled]=\"empleadoForm.status !== 'VALID'\">Editar empleado</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div> -->\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3>Empleados</h3>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr class=\"text-center\">\n            <th>BRM</th>\n            <th>Nombre</th>\n            <th>Foto</th>\n            <th>Puesto</th>\n            <th>Acciones</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"text-center\" *ngFor=\"let emp of empleados\">\n            <td>{{emp.brm}}</td>\n            <td>{{emp.nombre}}</td>\n            <td><img style='display:block; width:100px;height:100px;' id='base64image'\n              src='{{emp.img}},{{emp.base64}}' /></td>\n            <td>{{emp.puesto}}</td>\n            <td>\n              <button class=\"orange\" (click)=\"editEmp(emp)\">Editar</button>\n              <button class=\"dark\" (click)=\"elimEmp(emp)\">Eliminar</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/empleados-crud/empleados-crud.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/empleados-crud/empleados-crud.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxlYWRvcy1jcnVkL2VtcGxlYWRvcy1jcnVkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/empleados-crud/empleados-crud.component.ts":
/*!************************************************************!*\
  !*** ./src/app/empleados-crud/empleados-crud.component.ts ***!
  \************************************************************/
/*! exports provided: EmpleadosCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadosCrudComponent", function() { return EmpleadosCrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_catalogService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/catalogService */ "./src/app/services/catalogService.ts");






var EmpleadosCrudComponent = /** @class */ (function () {
    function EmpleadosCrudComponent(catalogService, authService, router) {
        this.catalogService = catalogService;
        this.authService = authService;
        this.router = router;
        this.ImageBaseData = null;
        this.add = true;
        this.edit = false;
        this.empleados = [];
        this.currentUser = null;
        this.showPage = false;
    }
    EmpleadosCrudComponent.prototype.ngOnInit = function () {
        //console.log("Usuario logeado: ", this.authService.getAccount());
        this.currentUser = this.authService.getAccount();
        console.log(this.currentUser);
        // if(this.currentUser.rol !== 1){
        //   this.router.navigate(['/Home']);
        // }
        // if(this.currentUser === null){
        //   this.authService.logout();
        // }else if(this.currentUser.rol === 1){
        //   console.log("usuario correcto logueado");
        // }
        if (this.currentUser !== null) {
            if (this.currentUser.rol !== 2) {
                this.router.navigate(['/Home']);
            }
            else {
                this.showPage = true;
                this.traerEmpleados();
            }
        }
        else {
            this.authService.logout();
            this.router.navigate(['/']);
        }
    };
    EmpleadosCrudComponent.prototype.traerEmpleados = function () {
        var _this = this;
        //Trae a los empleados
        this.catalogService.getEmpleados().subscribe(function (x) {
            _this.empleados = x;
        }, function (error) {
            alert("Error: \n" + error);
        });
        this.empleadoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            brm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            puesto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    EmpleadosCrudComponent.prototype.setValues = function (data) {
        this.empleadoForm.patchValue({
            id: data.id,
            brm: data.brm,
            nombre: data.nombre,
            puesto: data.puesto,
        });
    };
    EmpleadosCrudComponent.prototype.guardarEmp = function () {
        var _this = this;
        var nuevoEmp = {};
        nuevoEmp.id = this.empleadoForm.controls["id"].value;
        nuevoEmp.brm = this.empleadoForm.controls["brm"].value;
        nuevoEmp.nombre = this.empleadoForm.controls["nombre"].value;
        nuevoEmp.puesto = this.empleadoForm.controls["puesto"].value;
        nuevoEmp.img = this.ImageBaseData.toString().split(",")[0];
        nuevoEmp.base64 = this.ImageBaseData.toString().split(",")[1];
        console.log(nuevoEmp);
        //Se agrega/edita
        this.catalogService.saveEmp(nuevoEmp).subscribe(function (res) {
            alert(res);
            _this.ngOnInit();
        }, function (error) {
            alert("Error: \n" + error);
        });
    };
    EmpleadosCrudComponent.prototype.editEmp = function (emp) {
        this.add = false;
        this.edit = true;
        this.setValues(emp);
    };
    EmpleadosCrudComponent.prototype.elimEmp = function (emp) {
        var _this = this;
        this.catalogService.borraEmp(emp.id).subscribe(function (res) {
            alert(res);
            _this.ngOnInit();
        }, function (error) {
            alert("Error: \n" + error);
            _this.ngOnInit();
        });
    };
    EmpleadosCrudComponent.prototype.handleFileInput = function (files) {
        var me = this;
        var file = files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            //console.log(reader.result);
            alert("Imagen cargada con éxito!");
            me.ImageBaseData = reader.result;
        };
        reader.onerror = function (error) {
            //console.log('Error: ', error);
            alert('Error al cargar imagen: ' + error);
        };
    };
    EmpleadosCrudComponent.prototype.btnUpload = function () {
        console.log(this.ImageBaseData.toString());
    };
    EmpleadosCrudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empleados-crud',
            template: __webpack_require__(/*! ./empleados-crud.component.html */ "./src/app/empleados-crud/empleados-crud.component.html"),
            styles: [__webpack_require__(/*! ./empleados-crud.component.scss */ "./src/app/empleados-crud/empleados-crud.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_catalogService__WEBPACK_IMPORTED_MODULE_5__["CatalogService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmpleadosCrudComponent);
    return EmpleadosCrudComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"showPage\">\n  <div class=\"card\">\n    <div class=\"card-header text-center\">\n      <h3>Bienvenido</h3>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"col-12\">\n        <button class=\"default\">Continuar</button>\n        <button class=\"primary\">Continuar</button>\n        <button class=\"primary outline\">Continuar</button>\n        <button class=\"dark outline\">Continuar</button>\n        <button class=\"orange\">Continuar</button>\n        <button class=\"dark\">Continuar</button>\n        <button class=\"clear\">Continuar</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.currentUser = null;
        this.showPage = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getAccount();
        console.log(this.currentUser);
        if (this.currentUser !== null) {
            this.showPage = true;
        }
        else {
            this.authService.logout();
            this.router.navigate(['/']);
        }
    };
    HomeComponent.prototype.logOut = function () {
        this.authService.logout();
        console.log(this.authService.getAccount());
        this.router.navigate(['/Home']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/juego/cuadro/cuadro.component.html":
/*!****************************************************!*\
  !*** ./src/app/juego/cuadro/cuadro.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cell align-middle\"\n[ngClass]=\"{'v1': col !== 2, 'h1': row !== 2}\">\n{{ piece }}\n</div>"

/***/ }),

/***/ "./src/app/juego/cuadro/cuadro.component.scss":
/*!****************************************************!*\
  !*** ./src/app/juego/cuadro/cuadro.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell {\n  width: 100px;\n  height: 100px;\n  box-sizing: border-box;\n  font-size: 5em;\n  font-family: sans-serif;\n  color: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell:hover {\n  background-color: #c1cdcd;\n  cursor: pointer;\n}\n\n.v1 {\n  border-right: 3px solid black;\n}\n\n.h1 {\n  border-bottom: 3px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVlZ28vY3VhZHJvL0M6XFxVc2Vyc1xcQlJNMTU1MDBcXERvY3VtZW50c1xcaW50ZWdyYWNpb24tam9sbHlcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxqdWVnb1xcY3VhZHJvXFxjdWFkcm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2p1ZWdvL2N1YWRyby9jdWFkcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvanVlZ28vY3VhZHJvL2N1YWRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZWxsIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZWxsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWNkY2Q7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi52MSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmgxIHtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcclxufSIsIi5jZWxsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDVlbTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxY2RjZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udjEge1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBibGFjaztcbn1cblxuLmgxIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/juego/cuadro/cuadro.component.ts":
/*!**************************************************!*\
  !*** ./src/app/juego/cuadro/cuadro.component.ts ***!
  \**************************************************/
/*! exports provided: CuadroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuadroComponent", function() { return CuadroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cuadroEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cuadroEnum */ "./src/app/juego/cuadro/cuadroEnum.ts");



var CuadroComponent = /** @class */ (function () {
    function CuadroComponent() {
        this.piece = _cuadroEnum__WEBPACK_IMPORTED_MODULE_2__["cuadroEnum"].EMPTY;
    }
    CuadroComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CuadroComponent.prototype, "piece", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CuadroComponent.prototype, "row", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CuadroComponent.prototype, "col", void 0);
    CuadroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cuadro',
            template: __webpack_require__(/*! ./cuadro.component.html */ "./src/app/juego/cuadro/cuadro.component.html"),
            styles: [__webpack_require__(/*! ./cuadro.component.scss */ "./src/app/juego/cuadro/cuadro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CuadroComponent);
    return CuadroComponent;
}());



/***/ }),

/***/ "./src/app/juego/cuadro/cuadroEnum.ts":
/*!********************************************!*\
  !*** ./src/app/juego/cuadro/cuadroEnum.ts ***!
  \********************************************/
/*! exports provided: cuadroEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cuadroEnum", function() { return cuadroEnum; });
var cuadroEnum;
(function (cuadroEnum) {
    cuadroEnum["EMPTY"] = "";
    cuadroEnum["X"] = "X";
    cuadroEnum["O"] = "O";
})(cuadroEnum || (cuadroEnum = {}));


/***/ }),

/***/ "./src/app/juego/juego.component.html":
/*!********************************************!*\
  !*** ./src/app/juego/juego.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 class=\"text-center p-4\">\n      Bienvenido al gato!\n  </h1>\n  <div class=\"main-app\">\n      <app-tabla></app-tabla>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/juego/juego.component.scss":
/*!********************************************!*\
  !*** ./src/app/juego/juego.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-app {\n  margin: 0 auto;\n  max-width: 300px;\n  color: #34495e;\n}\n\n.board {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  color: #fff;\n}\n\n.status {\n  color: black;\n  font-size: 1.4em;\n  font-weight: bold;\n}\n\n.new-game {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVlZ28vQzpcXFVzZXJzXFxCUk0xNTUwMFxcRG9jdW1lbnRzXFxpbnRlZ3JhY2lvbi1qb2xseVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGp1ZWdvXFxqdWVnby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvanVlZ28vanVlZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQ0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENFO0VBQ0UsVUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvanVlZ28vanVlZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1hcHAge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgY29sb3I6ICMzNDQ5NWU7XHJcbiAgfVxyXG4gIC5ib2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuc3RhdHVzIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLm5ldy1nYW1lIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfSIsIi5tYWluLWFwcCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBjb2xvcjogIzM0NDk1ZTtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc3RhdHVzIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5ldy1nYW1lIHtcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/juego/juego.component.ts":
/*!******************************************!*\
  !*** ./src/app/juego/juego.component.ts ***!
  \******************************************/
/*! exports provided: JuegoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoComponent", function() { return JuegoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var JuegoComponent = /** @class */ (function () {
    function JuegoComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.currentUser = null;
        this.gameStarted = false;
        this.showPage = false;
    }
    JuegoComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getAccount();
        console.log(this.currentUser);
        if (this.currentUser !== null) {
            if (this.currentUser.rol !== 1) {
                this.router.navigate(['/Home']);
            }
            else {
                this.showPage = true;
            }
        }
        else {
            this.authService.logout();
            this.router.navigate(['/']);
        }
    };
    JuegoComponent.prototype.initGame = function () {
        this.gameStarted = true;
    };
    JuegoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-juego',
            template: __webpack_require__(/*! ./juego.component.html */ "./src/app/juego/juego.component.html"),
            styles: [__webpack_require__(/*! ./juego.component.scss */ "./src/app/juego/juego.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JuegoComponent);
    return JuegoComponent;
}());



/***/ }),

/***/ "./src/app/juego/tabla/tabla.component.html":
/*!**************************************************!*\
  !*** ./src/app/juego/tabla/tabla.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"startedGame\">\n  <div class=\"status text-center p-4\">\n      {{statusMessage}}\n  </div>\n  <div class=\"board\" *ngFor=\"let row of [0,1,2]\">\n      <app-cuadro *ngFor=\"let col of [0,1,2]\" [row]=\"row\" [col]=\"col\" [piece]=\"board[row][col]\"\n          (click)=\"move(row,col)\">\n      </app-cuadro>\n  </div>\n  <div class=\"pt-2\"></div>\n  <button *ngIf=\"gameOver\" class=\"btn btn-primary new-game\" (click)=\"newGame()\">Nuevo juego</button>\n  <button *ngIf=\"gameOver\" class=\"btn btn-danger new-game\" (click)=\"exitGame()\">Salir</button>\n</div>\n\n<div *ngIf=\"!startedGame\">\n  <div class=\"status text-center p-4\">\n     <h3>Tic tac Toe</h3>\n  </div>\n  <div class=\"pt-2\"></div>\n  <button class=\"btn btn-primary new-game\" (click)=\"initGame()\">Iniciar juego</button>\n</div>"

/***/ }),

/***/ "./src/app/juego/tabla/tabla.component.scss":
/*!**************************************************!*\
  !*** ./src/app/juego/tabla/tabla.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  color: #fff;\n}\n\n.status {\n  color: black;\n  font-size: 1.4em;\n  font-weight: bold;\n}\n\n.new-game {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVlZ28vdGFibGEvQzpcXFVzZXJzXFxCUk0xNTUwMFxcRG9jdW1lbnRzXFxpbnRlZ3JhY2lvbi1qb2xseVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGp1ZWdvXFx0YWJsYVxcdGFibGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2p1ZWdvL3RhYmxhL3RhYmxhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2p1ZWdvL3RhYmxhL3RhYmxhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zdGF0dXMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubmV3LWdhbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iLCIuYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zdGF0dXMge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmV3LWdhbWUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/juego/tabla/tabla.component.ts":
/*!************************************************!*\
  !*** ./src/app/juego/tabla/tabla.component.ts ***!
  \************************************************/
/*! exports provided: TablaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaComponent", function() { return TablaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cuadro_cuadroEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cuadro/cuadroEnum */ "./src/app/juego/cuadro/cuadroEnum.ts");



var TablaComponent = /** @class */ (function () {
    function TablaComponent() {
        this.startedGame = false;
    }
    TablaComponent.prototype.ngOnInit = function () {
    };
    TablaComponent.prototype.initGame = function () {
        this.startedGame = true;
        this.newGame();
    };
    TablaComponent.prototype.exitGame = function () {
        this.startedGame = false;
    };
    Object.defineProperty(TablaComponent.prototype, "gameOver", {
        get: function () {
            return this.isGameOver;
        },
        enumerable: true,
        configurable: true
    });
    TablaComponent.prototype.newGame = function () {
        this.board = [];
        for (var row = 0; row < 3; row++) {
            this.board[row] = [];
            for (var col = 0; col < 3; col++) {
                this.board[row][col] = _cuadro_cuadroEnum__WEBPACK_IMPORTED_MODULE_2__["cuadroEnum"].EMPTY;
            }
        }
        this.currentPlayer = _cuadro_cuadroEnum__WEBPACK_IMPORTED_MODULE_2__["cuadroEnum"].X;
        this.statusMessage = "Turno del jugador " + this.currentPlayer;
        this.isGameOver = false;
    };
    TablaComponent.prototype.move = function (row, col) {
        if (!this.isGameOver && this.board[row][col] === _cuadro_cuadroEnum__WEBPACK_IMPORTED_MODULE_2__["cuadroEnum"].EMPTY) {
            this.board[row][col] = this.currentPlayer;
            if (this.isDraw()) {
                this.statusMessage = "Empate :(";
                this.isGameOver = true;
            }
            else if (this.isWin()) {
                alert(this.statusMessage = "El jugador " + this.currentPlayer + " ganó");
                this.isGameOver = true;
            }
            else {
                this.currentPlayer = this.currentPlayer === _cuadro_cuadroEnum__WEBPACK_IMPORTED_MODULE_2__["cuadroEnum"].X ? _cuadro_cuadroEnum__WEBPACK_IMPORTED_MODULE_2__["cuadroEnum"].O : _cuadro_cuadroEnum__WEBPACK_IMPORTED_MODULE_2__["cuadroEnum"].X;
                //this.statusMessage = "Turno del jugador "+this.currentPlayer;
            }
        }
    };
    TablaComponent.prototype.isDraw = function () {
        for (var _i = 0, _a = this.board; _i < _a.length; _i++) {
            var columns = _a[_i];
            for (var _b = 0, columns_1 = columns; _b < columns_1.length; _b++) {
                var col = columns_1[_b];
                if (col === _cuadro_cuadroEnum__WEBPACK_IMPORTED_MODULE_2__["cuadroEnum"].EMPTY) {
                    return false;
                }
            }
        }
        return !this.isWin();
    };
    TablaComponent.prototype.isWin = function () {
        //horizontal
        for (var _i = 0, _a = this.board; _i < _a.length; _i++) {
            var columns = _a[_i];
            if (columns[0] === columns[1] && columns[0] === columns[2] && columns[0] !== _cuadro_cuadroEnum__WEBPACK_IMPORTED_MODULE_2__["cuadroEnum"].EMPTY) {
                return true;
            }
        }
        //vertical
        for (var col = 0; col < this.board[0].length; col++) {
            if (this.board[0][col] === this.board[1][col] &&
                this.board[0][col] === this.board[2][col] &&
                this.board[0][col] !== _cuadro_cuadroEnum__WEBPACK_IMPORTED_MODULE_2__["cuadroEnum"].EMPTY) {
                return true;
            }
        }
        //diagonal
        if (this.board[0][0] === this.board[1][1] &&
            this.board[0][0] === this.board[2][2] &&
            this.board[0][0] !== _cuadro_cuadroEnum__WEBPACK_IMPORTED_MODULE_2__["cuadroEnum"].EMPTY) {
            return true;
        }
        if (this.board[0][1] === this.board[1][1] &&
            this.board[0][1] === this.board[2][2] &&
            this.board[0][1] !== _cuadro_cuadroEnum__WEBPACK_IMPORTED_MODULE_2__["cuadroEnum"].EMPTY) {
            return true;
        }
        if (this.board[0][2] === this.board[1][1] &&
            this.board[0][2] === this.board[2][2] &&
            this.board[0][2] !== _cuadro_cuadroEnum__WEBPACK_IMPORTED_MODULE_2__["cuadroEnum"].EMPTY) {
            return true;
        }
        return false;
    };
    TablaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabla',
            template: __webpack_require__(/*! ./tabla.component.html */ "./src/app/juego/tabla/tabla.component.html"),
            styles: [__webpack_require__(/*! ./tabla.component.scss */ "./src/app/juego/tabla/tabla.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TablaComponent);
    return TablaComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  menu works!\n</p>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CURRENT_ACCOUNT = "auth:account:current";
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.getAccount = function () {
        return JSON.parse(localStorage.getItem(CURRENT_ACCOUNT));
    };
    AuthService.prototype.setAccount = function (acc) {
        return localStorage.setItem(CURRENT_ACCOUNT, JSON.stringify(acc));
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/catalogService.ts":
/*!********************************************!*\
  !*** ./src/app/services/catalogService.ts ***!
  \********************************************/
/*! exports provided: CatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogService", function() { return CatalogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CatalogService = /** @class */ (function () {
    function CatalogService(http) {
        this.http = http;
    }
    //METODOS
    CatalogService.prototype.login = function (data) {
        //return this.http.post<loginResponse>(`localhost:8080/login`, data);
        return this.http.post("https://login-menu.herokuapp.com/login", data);
    };
    CatalogService.prototype.getEmpleados = function () {
        return this.http.get("https://heroku-mauricio-app.herokuapp.com/usuario");
    };
    CatalogService.prototype.saveEmp = function (data) {
        return this.http.post("https://heroku-mauricio-app.herokuapp.com/usuario", data);
    };
    CatalogService.prototype.borraEmp = function (id) {
        return this.http.delete("https://heroku-mauricio-app.herokuapp.com/usuario/" + id);
    };
    CatalogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CatalogService);
    return CatalogService;
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

module.exports = __webpack_require__(/*! C:\Users\BRM15500\Documents\integracion-jolly\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map