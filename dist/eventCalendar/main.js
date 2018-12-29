(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home-page/home-page.module": [
		"./src/app/home-page/home-page.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home-page/home-page.module#HomePageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'eventCalendar';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_page_home_page_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-page/home-page.module */ "./src/app/home-page/home-page.module.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _home_page_home_page_module__WEBPACK_IMPORTED_MODULE_11__["HomePageModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["MenubarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["MessageModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["RadioButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["DataTableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["CheckboxModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["DataListModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["MenubarModule"]
            ],
            providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    //if the user is not authenticated , the user is redirected to login page
    AuthGuard.prototype.canActivate = function () {
        if (!localStorage.getItem("currentUser")) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home-page/app-header/app-header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/home-page/app-header/app-header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-menubar [model]=\"items\">\n  <div *ngIf=\"!(isLoggedIn | async)\">\n  </div>\n  <div *ngIf=\"(isLoggedIn | async)\">\n    <a class=\"myAccount\" routerLink=\"/userProfile\">Hi! {{currentUser}}</a>\n    <button pButton label=\"logout\" style=\"margin-left:.25em\" (click)=\"cleanUser()\" routerLink=\"/login\"></button>\n  </div>\n</p-menubar>\n"

/***/ }),

/***/ "./src/app/home-page/app-header/app-header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/home-page/app-header/app-header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myAccount {\n  padding: 10px;\n  text-decoration: none; }\n\n.ui-menuitem.ui-menuitem-active > .ui-menuitem-link {\n  color: #cccccc !important;\n  background-color: transparent !important; }\n\n.ui-state-active {\n  color: #cccccc !important;\n  background-color: transparent !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2FwcC1oZWFkZXIvQzpcXFVzZXJzXFxiYWNodVxcRG9jdW1lbnRzXFxldmVudENhbGVuZGFyL3NyY1xcYXBwXFxob21lLXBhZ2VcXGFwcC1oZWFkZXJcXGFwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2Isc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLHlDQUF3QyxFQUN6Qzs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6Qix5Q0FBd0MsRUFDekMiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvYXBwLWhlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15QWNjb3VudCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi51aS1tZW51aXRlbS51aS1tZW51aXRlbS1hY3RpdmUgPiAudWktbWVudWl0ZW0tbGluayB7XHJcbiAgY29sb3I6ICNjY2NjY2MgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWktc3RhdGUtYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home-page/app-header/app-header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/home-page/app-header/app-header.component.ts ***!
  \**************************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(appService) {
        this.appService = appService;
        this.isLoggedIn = this.appService.isLoggedIn();
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.userDataAvailable().subscribe(function (data) {
            _this.currentUser = data || localStorage.getItem('username');
        });
        this.items = [
            {
                label: 'Event Calendar',
                routerLink: '/home'
            }
        ];
    };
    AppHeaderComponent.prototype.cleanUser = function () {
        this.currentUser = null;
        this.appService.loggedIn.next(false);
        localStorage.clear();
    };
    AppHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/home-page/app-header/app-header.component.html"),
            styles: [__webpack_require__(/*! ./app-header.component.scss */ "./src/app/home-page/app-header/app-header.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-page/event-management/event-management.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/home-page/event-management/event-management.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dialog *ngIf=\"userform\" header=\"{{title}}\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"900\"\n          [minWidth]=\"200\" [minY]=\"70\"\n          [maximizable]=\"true\" [baseZIndex]=\"10000\">\n    <span>\n      <div class=\"login-wrap\">\n  <div class=\"login-html\">\n    <div class=\"login-form\">\n      <div class=\"sign-up-htm\">\n        <form [formGroup]=\"userform\">\n          <div class=\"group ui-grid-row\">\n            <div class=\"ui-grid-col-4\" style=\"padding: 20px;\">\n              <label class=\"label\">Event Name</label></div>\n            <div class=\"ui-grid-col-6\">\n              <input pInputText class=\"input\" type=\"text\" formControlName=\"name\" placeholder=\"Required\"/></div>\n            <div class=\"ui-grid-col-6\">\n              <p-message severity=\"error\" text=\"Event Name is required\"\n                         *ngIf=\"!userform.controls['name'].valid&&userform.controls['name'].dirty\"></p-message>\n            </div>\n          </div>\n          <div class=\"group ui-grid-row\">\n            <div class=\"ui-grid-col-4\" style=\"padding: 20px;\">\n              <label class=\"label\">Event Start Date</label></div>\n            <div class=\"ui-grid-col-6\">\n              <p-calendar formControlName=\"start\" [showIcon]=\"true\"></p-calendar>\n            <div class=\"ui-grid-col-6\">\n              <p-message severity=\"error\" text=\"Event Start Date is required\"\n                         *ngIf=\"!userform.controls['start'].valid&&userform.controls['start'].dirty\"></p-message>\n            </div>\n          </div>\n          </div>\n           <div class=\"group ui-grid-row\">\n            <div class=\"ui-grid-col-4\" style=\"padding: 20px;\">\n              <label class=\"label\">Event End Date</label></div>\n            <div class=\"ui-grid-col-6\">\n              <p-calendar formControlName=\"end\" [showIcon]=\"true\" ></p-calendar>\n            <div class=\"ui-grid-col-6\">\n              <p-message severity=\"error\" text=\"Event End Date is required\"\n                         *ngIf=\"!userform.controls['end'].valid&&userform.controls['end'].dirty\"></p-message>\n            </div>\n          </div>\n          </div>\n\n          <div class=\"group ui-grid-row\">\n            <div class=\"ui-grid-col-4\" style=\"padding: 20px;\">\n              <label class=\"label\">Description</label></div>\n            <div class=\"ui-grid-col-6\">\n              <input pInputText class=\"input\" type=\"text\" formControlName=\"description\" placeholder=\"Required\"/></div>\n            <div class=\"ui-grid-col-6\">\n              <p-message severity=\"error\" text=\"description\"\n                         *ngIf=\"!userform.controls['description'].valid&&userform.controls['description'].dirty\"></p-message>\n            </div>\n          </div>\n        </form>\n    </div>\n\n    </div>\n  </div>\n</div>\n\n    </span>\n  <p-footer>\n    <button type=\"button\" *ngIf=\"type === 'create'\" pButton [disabled]=\"!userform.valid\"\n            (click)=\"onSubmit(userform.value)\" label=\"Create\"></button>\n    <button type=\"button\" *ngIf=\"type==='Modify'\" pButton [disabled]=\"!userform.valid\"\n            (click)=\"onModify(userform.value)\" label=\"Modify\"></button>\n    <button type=\"button\" pButton (click)=\"onCancel()\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n  </p-footer>\n</p-dialog>\n\n<button type=\"button\" style=\"margin: 5px\" (click)=\"showDialog('create')\" pButton label=\"CreateEvent\"></button>\n<button type=\"button\" style=\"margin: 5px\" [disabled]=\"!(event && userID===event.userID)\" (click)=\"showDialog('modify')\" pButton\n        label=\"ModifyEvent\"></button>\n<button type=\"button\" style=\"margin: 5px\" [disabled]=\"!(event && userID===event.userID)\" (click)=\"showEventManagementDialog('del')\" pButton\n        label=\"DelEvent\"></button>\n<button *ngIf=\"!showJoinedEvents && !showMyEvents\" pButton type=\"button\" label=\"JoinEvent\"  (click)=\"showEventManagementDialog('join')\"  ></button>\n<button *ngIf=\"showJoinedEvents && !showMyEvents\" pButton type=\"button\" label=\"QuitEvent\"  (click)=\"showEventManagementDialog('quit')\"  ></button>\n\n\n<p-dialog [(visible)]=\"displayEventDialog\">\n  <h3>{{dialogMessage}}</h3>\n  <div>\n    <p-button label=\"Yes\" (onClick)=\"choice('yes')\"></p-button>\n    <p-button label=\"No\" (onClick)=\"choice('no')\"></p-button>\n  </div>\n</p-dialog>\n<div *ngIf=\"myEvents || otherEvents || joinedEvents\">\n  <p-table #dt [columns]=\"cols\" [value]=\"events\" [(selection)]=\"event\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"caption\">\n\n      <div style=\"text-align: left\">\n        <p-tabMenu [model]=\"items\" [activeItem]=\"items[0]\"></p-tabMenu>\n        <input  type=\"text\" pInputText size=\"50\" placeholder=\"Search\"\n                (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n        <i class=\"pi pi-search\" style=\"margin:4px 4px 0 0\"></i>\n      </div>\n    </ng-template>\n    <ng-template pTemplate=\"header\" let-columns>\n      <tr>\n        <th style=\"width: 3em\"></th>\n        <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n          {{col.header}}\n          <input *ngSwitchCase=\"'name'\" pInputText type=\"text\"\n                 (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n      <tr [pSelectableRow]=\"rowData\">\n        <td>\n          <p-tableRadioButton [value]=\"rowData\"></p-tableRadioButton>\n        </td>\n        <td *ngFor=\"let col of columns\">\n          {{rowData[col.field]}}\n        </td>\n      </tr>\n    </ng-template>\n\n  </p-table>\n\n</div>\n<div *ngIf=\"!(myEvents || otherEvents)\">\n  No Records Found\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/event-management/event-management.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home-page/event-management/event-management.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ldmVudC1tYW5hZ2VtZW50L2V2ZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home-page/event-management/event-management.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home-page/event-management/event-management.component.ts ***!
  \**************************************************************************/
/*! exports provided: EventManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventManagementComponent", function() { return EventManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventManagementComponent = /** @class */ (function () {
    function EventManagementComponent(fb, appService, datePipe, router) {
        this.fb = fb;
        this.appService = appService;
        this.datePipe = datePipe;
        this.router = router;
        this.display = false;
        this.displayEventDialog = false;
        this.showJoinedEvents = true;
        this.showMyEvents = true;
    }
    EventManagementComponent.prototype.showDialog = function (type) {
        this.type = type;
        if (this.type === 'create') {
            this.title = 'Create Event';
            this.userform = this.fb.group({
                'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'start': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'end': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
        }
        else if (this.type === 'modify') {
            this.title = 'Modify Event';
            this.userform = this.fb.group({
                'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.event.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'start': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.event.start, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'end': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.event.end, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.event.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
        }
        this.display = true;
    };
    EventManagementComponent.prototype.showEventManagementDialog = function (type) {
        var eventName = this.event.name;
        this.type = type;
        if (type === 'join') {
            this.dialogMessage = 'Are you sure to join the event: ' + eventName;
        }
        else if (type === 'quit') {
            this.dialogMessage = 'Are you sure to quit the event: ' + eventName;
        }
        else if (type === 'del') {
            this.dialogMessage = 'Are you sure to delete the event: ' + eventName;
        }
        this.displayEventDialog = true;
    };
    EventManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getUser(this.userID).subscribe(function (data) {
            _this.fullName = data.firstname + ' ' + data.lastname;
            _this.email = data.email;
            _this.userID = data.userID;
            _this.username = data.username;
            localStorage.setItem("firstName", data.firstname);
            localStorage.setItem("lastname", data.lastname);
            localStorage.setItem("email", data.email);
            localStorage.setItem("username", data.username);
            _this.appService.loggedIn.next(true);
            _this.appService.userData.next(data.username);
        }, function (error2) {
            _this.fullName = 'Janani Sundaresan';
            _this.email = 'janani.sundaresan@gmail.com';
            _this.userID = 100;
            _this.username = 'janu';
        });
        this.items = [
            { label: 'MyEvents', icon: 'pi pi-info', command: function () { return _this.showEvents(_this.items[0].label); } },
            { label: 'JoinedEvents', icon: 'pi pi-info', command: function () { return _this.showEvents(_this.items[1].label); } },
            { label: 'OtherEvents', icon: 'pi pi-info', command: function () { return _this.showEvents(_this.items[2].label); } }
        ];
        this.events = new Array();
        this.myEvents = new Array();
        this.otherEvents = new Array();
        this.joinedEvents = new Array();
        var event_te = {
            name: 'te',
            description: 'event',
            start: new Date('Tue Dec 04 2018 00:00:00 GMT+0000 (Greenwich Mean Time)'),
            end: new Date('Wed Dec 05 2018 00:00:00 GMT+0000 (Greenwich Mean Time)'),
            userID: 101,
            eventID: 1
        };
        var event_jane = {
            name: 'jane',
            description: 'event',
            start: new Date('Tue Dec 04 2018 00:00:00 GMT+0000 (Greenwich Mean Time)'),
            end: new Date('Wed Dec 05 2018 00:00:00 GMT+0000 (Greenwich Mean Time)'),
            userID: 100,
            eventID: 0
        };
        var event_temp = {
            name: 'temp',
            description: 'event',
            start: new Date('Tue Dec 04 2018 00:00:00 GMT+0000 (Greenwich Mean Time)'),
            end: new Date('Wed Dec 05 2018 00:00:00 GMT+0000 (Greenwich Mean Time)'),
            userID: 1001,
            eventID: 2
        };
        this.myEvents.push(event_jane);
        this.otherEvents.push(event_temp);
        this.joinedEvents.push(event_te);
        this.initEvents(this.myEvents, 'userEvents');
        this.initEvents(this.joinedEvents, 'joinedEvents');
        this.initEvents(this.otherEvents, 'otherEvents');
        this.events = this.myEvents;
        this.cols = [
            { field: 'name', header: 'EventName' },
            { field: 'description', header: 'Description' },
            { field: 'start', header: 'Start Date/Time' },
            { field: 'end', header: 'End Date/Time' },
        ];
    };
    EventManagementComponent.prototype.initEvents = function (events, type) {
        this.appService.getEvents(this.userID, type).subscribe(function (data) {
            // console.log(data[0]);
            data.forEach(function (event) {
                // console.log(event);
                events.push(event);
            });
            console.log(events);
        }, function (error) { return console.error(error.message); });
    };
    EventManagementComponent.prototype.showEvents = function (type) {
        if (type === 'MyEvents') {
            this.events = this.myEvents;
            this.showMyEvents = true;
        }
        else {
            this.showMyEvents = false;
            if (type === 'JoinedEvents') {
                this.events = this.joinedEvents;
                this.showJoinedEvents = true;
            }
            else if (type === 'OtherEvents') {
                this.events = this.otherEvents;
                this.showJoinedEvents = false;
            }
        }
    };
    EventManagementComponent.prototype.choice = function (value) {
        var _this = this;
        if (value === 'yes') {
            var choice = {
                userID: this.userID,
                eventID: this.event.eventID,
                date: this.event.start
            };
            if (this.type === 'join') {
                this.appService.createChoice(choice, this.userID).subscribe(function (data) {
                    _this.joinedEvents.push(_this.event);
                    _this.otherEvents = _this.otherEvents.filter(function (event) {
                        return event.eventID !== _this.event.eventID;
                    });
                    _this.afterOperstion();
                }, function (error) {
                    console.error(error.message);
                });
            }
            else if (this.type === 'quit') {
                this.appService.deleteChoice(this.userID, this.event.eventID).subscribe(function (data) {
                    _this.otherEvents.push(_this.event);
                    console.log(_this.event.eventID + data);
                    _this.joinedEvents = _this.joinedEvents.filter(function (event) {
                        return event.eventID !== _this.event.eventID;
                    });
                    _this.afterOperstion();
                }, function (error) {
                    console.error(error.message);
                });
            }
            else if (this.type === 'del') {
                //TODO del others joined event
                this.appService.deleteEvent(this.userID, this.event.eventID).subscribe(function (eventID) {
                    _this.myEvents = _this.myEvents.filter(function (event) {
                        return event.eventID !== Number(eventID);
                    });
                    _this.joinedEvents = _this.joinedEvents.filter(function (event) {
                        return event.eventID !== Number(eventID);
                    });
                    _this.afterOperstion();
                    alert('del event success');
                }, function (error) {
                    console.error(error.message);
                });
            }
        }
        this.displayEventDialog = false;
    };
    EventManagementComponent.prototype.onSubmit = function (value) {
        var _this = this;
        var event = {
            name: value.name,
            description: value.description,
            start: value.start,
            end: value.end,
            userID: this.userID,
            eventID: null
        };
        // console.log(event);
        if (this.type === 'create') {
            this.appService.createEvent(event, this.userID).subscribe(function (eventID) {
                console.log('get create event id:' + eventID);
                event['eventID'] = eventID;
                _this.myEvents.push(event);
                _this.joinedEvents.push(event);
                // console.log(event);
                _this.display = false;
                var choice = {
                    'eventID': eventID,
                    'userID': _this.userID,
                    // TODO add choose join date,now just use the start date
                    'date': event.start
                };
                _this.appService.createChoice(choice, _this.userID).subscribe(function (choiceID) {
                    console.log('create choice ID is: ' + choiceID);
                }), function (error) {
                    console.error(error.message);
                };
                alert('create event success');
            }, function (error) {
                console.error(error.message);
            });
        }
    };
    EventManagementComponent.prototype.onModify = function (value) {
        var _this = this;
        var event = {
            name: value.name,
            description: value.description,
            start: value.start,
            end: value.end,
            userID: this.userID,
            eventID: this.event.eventID
        };
        this.appService.updateEvent(event).subscribe(function (data) {
            var itemIndex = _this.myEvents.findIndex(function (item) { return item.eventID == event.eventID; });
            _this.myEvents[itemIndex] = event;
            itemIndex = _this.joinedEvents.findIndex(function (item) { return item.eventID == event.eventID; });
            _this.joinedEvents[itemIndex] = event;
            _this.afterOperstion();
            _this.display = false;
            alert('update event success');
        }, function (error) {
            console.error(error.message);
        });
    };
    EventManagementComponent.prototype.onCancel = function () {
        this.display = false;
    };
    EventManagementComponent.prototype.afterOperstion = function () {
        this.event = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EventManagementComponent.prototype, "userID", void 0);
    EventManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-management',
            template: __webpack_require__(/*! ./event-management.component.html */ "./src/app/home-page/event-management/event-management.component.html"),
            styles: [__webpack_require__(/*! ./event-management.component.scss */ "./src/app/home-page/event-management/event-management.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EventManagementComponent);
    return EventManagementComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/home-page/home-page-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/home-page/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/home-page/signup/signup.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/home-page/user-profile/user-profile.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'home', component: _home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'userProfile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-event-management [userID]=\"userID\"></app-event-management>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userID = Number(localStorage.getItem("currentUser"));
        // comment for dev
        if (this.userID == null) {
            this.router.navigate(['/login']);
        }
        this.appService.getUser(this.userID).subscribe(function (data) {
            _this.fullName = data.username;
            _this.email = data.email;
            _this.userID = data.userID;
            _this.username = data.username;
        }, function (error2) {
            _this.fullName = 'Janani Sundaresan';
            _this.email = 'janani.sundaresan@gmail.com';
            _this.userID = 100;
            _this.username = 'janu';
        });
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.module.ts":
/*!***********************************************!*\
  !*** ./src/app/home-page/home-page.module.ts ***!
  \***********************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page-routing.module */ "./src/app/home-page/home-page-routing.module.ts");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-header/app-header.component */ "./src/app/home-page/app-header/app-header.component.ts");
/* harmony import */ var _event_management_event_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-management/event-management.component */ "./src/app/home-page/event-management/event-management.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/home-page/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/home-page/signup/signup.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/home-page/user-profile/user-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__["AppHeaderComponent"], _event_management_event_management_component__WEBPACK_IMPORTED_MODULE_6__["EventManagementComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _home_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomePageRoutingModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["MenubarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["CardModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["MessageModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["MultiSelectModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["RadioButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["InputTextModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["DataTableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ButtonModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["DataListModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["MenubarModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["MenuModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["TabMenuModule"]
            ],
            exports: [_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__["AppHeaderComponent"], _event_management_event_management_component__WEBPACK_IMPORTED_MODULE_6__["EventManagementComponent"]],
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home-page/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/home-page/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <h2>Login</h2>\n  <form [formGroup]=\"loginForm\" style=\"border:1px solid #ccc\">\n    <div class=\"container\">\n      <div class=\"form-group\">\n        <label >Username</label>\n        <input pInputText type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label >Password</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"\">\n      </div>\n      <div class=\"clearfix\">\n        <button pButton style=\"margin-left:.25em\" type=\"button\" label=\"Login\" (click)=\"login(loginForm.value)\"></button>\n        <button pButton style=\"margin-left:.25em\" type=\"button\" label=\"SignUp\" routerLink=\"/signup\"></button>\n\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/home-page/login/login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 20px;\n  color: #252525;\n  background: white; }\n\nform {\n  width: 50%; }\n\ninput[type=text],\ninput[type=password],\ninput[type=email] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box; }\n\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%; }\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336; }\n\n.cancelbtn,\n.signupbtn {\n  float: left;\n  width: 50%; }\n\n.container {\n  padding: 16px;\n  width: calc(100% - 36px); }\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\na {\n  color: bisque; }\n\n@media screen and (max-width: 300px) {\n  .cancelbtn,\n  .signupbtn {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2xvZ2luL0M6XFxVc2Vyc1xcYmFjaHVcXERvY3VtZW50c1xcZXZlbnRDYWxlbmRhci9zcmNcXGFwcFxcaG9tZS1wYWdlXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrREFBaUQ7RUFDakQsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixlQUFzQjtFQUN0QixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxXQUFTLEVBQ1Y7O0FBRUQ7OztFQUdFLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHNCQUFxQjtFQUNyQix1QkFBc0I7RUFDdEIsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGFBQVk7RUFDWixnQkFBZTtFQUNmLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQiwwQkFBeUIsRUFDMUI7O0FBRUQ7O0VBRUUsWUFBVztFQUNYLFdBQVUsRUFDWDs7QUFFRDtFQUNFLGNBQWE7RUFDYix5QkFBd0IsRUFDekI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsWUFBVztFQUNYLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFOztJQUVFLFlBQVcsRUFDWixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogcmdiKDM3LCAzNywgMzcpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuZm9ybXtcbiAgd2lkdGg6NTAlO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0gLFxuaW5wdXRbdHlwZT1lbWFpbF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYW5jZWxidG4ge1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5jYW5jZWxidG4sXG4uc2lnbnVwYnRuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzZweCk7XG59XG5cbi5jbGVhcmZpeDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbmEge1xuICBjb2xvcjogYmlzcXVlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAuY2FuY2VsYnRuLFxuICAuc2lnbnVwYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/home-page/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home-page/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, fb, appService) {
        this.router = router;
        this.fb = fb;
        this.appService = appService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("currentUser")) {
            this.router.navigate(['/home']);
        }
        this.loginForm = this.fb.group({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    };
    LoginComponent.prototype.login = function (value) {
        var _this = this;
        var username = value.username;
        var password = value.password;
        this.appService.login(username, password).subscribe(function (user) {
            localStorage.setItem("currentUser", String(user.userID));
            _this.router.navigate(['/home']);
        }), function (error) {
            console.error(error.message.body);
            _this.router.navigate(['/home']);
        };
    };
    LoginComponent.prototype.debug = function () {
        this.appService.debug().subscribe(function (res) {
            console.log(res);
        }), function (error) {
            console.log(error.message);
        };
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/home-page/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/home-page/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/home-page/signup/signup.component.html":
/*!********************************************************!*\
  !*** ./src/app/home-page/signup/signup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <h2>Signup</h2>\n  <form [formGroup]=\"signupForm\" style=\"border:1px solid #ccc\">\n    <div class=\"container\">\n      <div class=\"form-group\">\n        <label >Username</label>\n        <input pInputText class=\"input\" type=\"text\" formControlName=\"username\" placeholder=\"required\"/>\n      </div>\n      <div class=\"form-group\">\n        <label >Firstname</label>\n        <input pInputText type=\"text\" class=\"input\" formControlName=\"firstname\" placeholder=\"required\">\n      </div>\n      <div class=\"form-group\">\n        <label >Lastname</label>\n        <input pInputText type=\"text\"  class=\"input\" formControlName=\"lastname\" placeholder=\"required\">\n      </div>\n      <div class=\"form-group\">\n        <label >Email</label>\n        <input pInputText type=\"email\"  class=\"input\" formControlName=\"email\" placeholder=\"required\">\n      </div>\n      <div class=\"form-group\">\n        <label >Password</label>\n        <input pInputText type=\"password\" class=\"input\" formControlName=\"password\" placeholder=\"required\">\n      </div>\n      <div class=\"form-group\">\n        <label >Check Password</label>\n        <input pInputText type=\"password\" class=\"input\" formControlName=\"checkPassword\" placeholder=\"required\">\n      </div>\n      <p-message severity=\"error\" text=\"checkPassword is not equal to password\"\n                 *ngIf=\"signupForm.controls['checkPassword'].valid && signupForm.controls['password'].value!=signupForm.controls['checkPassword'].value\"></p-message>\n      <div class=\"clearfix\">\n        <button pButton class=\"signupbtn\" [disabled]=\"!signupForm.valid || signupForm.controls['password'].value!=signupForm.controls['checkPassword'].value\" type=\"button\"  label=\"signup\" style=\"margin-left:.25em\" class=\"btn btn-default\" (click)=\"signup(signupForm.value)\"></button>\n        <button pButton style=\"margin-left:.25em\" type=\"button\" label=\"Login\" routerLink=\"/login\"></button>\n\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/signup/signup.component.scss":
/*!********************************************************!*\
  !*** ./src/app/home-page/signup/signup.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 20px;\n  color: #252525;\n  background: white; }\n\nform {\n  width: 50%; }\n\ninput[type=text],\ninput[type=password],\ninput[type=email] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box; }\n\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%; }\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336; }\n\n.cancelbtn,\n.signupbtn {\n  float: left;\n  width: 50%; }\n\n.container {\n  padding: 16px;\n  width: calc(100% - 36px); }\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\na {\n  color: bisque; }\n\n@media screen and (max-width: 300px) {\n  .cancelbtn,\n  .signupbtn {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3NpZ251cC9DOlxcVXNlcnNcXGJhY2h1XFxEb2N1bWVudHNcXGV2ZW50Q2FsZW5kYXIvc3JjXFxhcHBcXGhvbWUtcGFnZVxcc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrREFBaUQ7RUFDakQsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixlQUFzQjtFQUN0QixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxXQUFTLEVBQ1Y7O0FBRUQ7OztFQUdFLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHNCQUFxQjtFQUNyQix1QkFBc0I7RUFDdEIsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGFBQVk7RUFDWixnQkFBZTtFQUNmLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQiwwQkFBeUIsRUFDMUI7O0FBRUQ7O0VBRUUsWUFBVztFQUNYLFdBQVUsRUFDWDs7QUFFRDtFQUNFLGNBQWE7RUFDYix5QkFBd0IsRUFDekI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsWUFBVztFQUNYLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFOztJQUVFLFlBQVcsRUFDWixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xuICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiByZ2IoMzcsIDM3LCAzNyk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5mb3Jte1xuICB3aWR0aDo1MCU7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSAsXG5pbnB1dFt0eXBlPWVtYWlsXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhbmNlbGJ0biB7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLmNhbmNlbGJ0bixcbi5zaWdudXBidG4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzNnB4KTtcbn1cblxuLmNsZWFyZml4OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuYSB7XG4gIGNvbG9yOiBiaXNxdWU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC5jYW5jZWxidG4sXG4gIC5zaWdudXBidG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home-page/signup/signup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home-page/signup/signup.component.ts ***!
  \******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router, fb) {
        this.appService = appService;
        this.router = router;
        this.fb = fb;
    }
    SignupComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("currentUser")) {
            this.router.navigate(['/home']);
        }
        this.signupForm = this.fb.group({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'firstname': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'lastname': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'checkPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    SignupComponent.prototype.signup = function (value) {
        var _this = this;
        var user = {
            username: value.username,
            firstname: value.firstname,
            lastname: value.lastname,
            email: value.email,
            password: value.password
        };
        this.appService.createUser(user).subscribe(function (userID) {
            localStorage.setItem("currentUser", String(userID));
            _this.router.navigate(['/home']);
        }), function (error) {
            console.error(error.message.body);
        };
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/home-page/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/home-page/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/home-page/user-profile/user-profile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/home-page/user-profile/user-profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <div style=\"border:1px solid #ccc; width: 100%\">\n    <div class=\"container\">\n      <div class=\"form-group\">\n        <label >UserID</label>\n        {{userID}}\n      </div>\n      <div class=\"form-group\">\n        <label >Username</label>\n        {{username}}\n      </div>\n      <div class=\"form-group\">\n        <label >Full Name</label>\n        {{fullName}}\n      </div>\n      <div class=\"form-group\">\n        <label >Email</label>\n        {{email}}\n      </div>\n    </div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/user-profile/user-profile.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/home-page/user-profile/user-profile.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 20px;\n  color: #252525;\n  background: white; }\n\nform {\n  width: 50%; }\n\ninput[type=text],\ninput[type=password],\ninput[type=email] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box; }\n\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%; }\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336; }\n\n.cancelbtn,\n.signupbtn {\n  float: left;\n  width: 50%; }\n\n.container {\n  padding: 16px;\n  width: calc(100% - 36px); }\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\na {\n  color: bisque; }\n\n@media screen and (max-width: 300px) {\n  .cancelbtn,\n  .signupbtn {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3VzZXItcHJvZmlsZS9DOlxcVXNlcnNcXGJhY2h1XFxEb2N1bWVudHNcXGV2ZW50Q2FsZW5kYXIvc3JjXFxhcHBcXGhvbWUtcGFnZVxcdXNlci1wcm9maWxlXFx1c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrREFBaUQ7RUFDakQsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixlQUFzQjtFQUN0QixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxXQUFTLEVBQ1Y7O0FBRUQ7OztFQUdFLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHNCQUFxQjtFQUNyQix1QkFBc0I7RUFDdEIsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGFBQVk7RUFDWixnQkFBZTtFQUNmLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQiwwQkFBeUIsRUFDMUI7O0FBRUQ7O0VBRUUsWUFBVztFQUNYLFdBQVUsRUFDWDs7QUFFRDtFQUNFLGNBQWE7RUFDYix5QkFBd0IsRUFDekI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsWUFBVztFQUNYLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFOztJQUVFLFlBQVcsRUFDWixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgY29sb3I6IHJnYigzNywgMzcsIDM3KTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuZm9ybXtcclxuICB3aWR0aDo1MCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0sXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdICxcclxuaW5wdXRbdHlwZT1lbWFpbF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhbmNlbGJ0biB7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi5jYW5jZWxidG4sXHJcbi5zaWdudXBidG4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDM2cHgpO1xyXG59XHJcblxyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogYmlzcXVlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC5jYW5jZWxidG4sXHJcbiAgLnNpZ251cGJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home-page/user-profile/user-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home-page/user-profile/user-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(appService) {
        this.appService = appService;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userID = localStorage.getItem("currentUser");
        // if (this.userID==null) {
        //   this.router.navigate(['/login'])
        // }
        this.appService.getUser(this.userID).subscribe(function (data) {
            _this.fullName = localStorage.getItem("firstName") + ' ' + localStorage.getItem("lastname");
            ;
            _this.email = localStorage.getItem("email");
            _this.username = localStorage.getItem("username");
        }, function (error2) {
            _this.fullName = 'Janani Sundaresan';
            _this.email = 'janani.sundaresan@gmail.com';
            _this.userID = String(100);
            _this.username = 'janu';
        });
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/home-page/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/home-page/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.baseUrl = 'https://planeto-app.appspot.com/api/';
        this.userUrl = this.baseUrl + 'user/';
        this.eventUrl = this.baseUrl + 'event/';
        this.choiceUrl = this.baseUrl + 'choice/';
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.hasToken());
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    /**
     * if we have token the user is loggedIn
     * @returns {boolean}
     */
    AppService.prototype.hasToken = function () {
        return !!localStorage.getItem('currentUser');
    };
    AppService.prototype.isLoggedIn = function () {
        return this.loggedIn.asObservable();
    };
    AppService.prototype.userDataAvailable = function () {
        return this.userData.asObservable();
    };
    AppService.prototype.login = function (username, password) {
        var url = this.userUrl + 'login';
        var user = {
            username: username,
            password: password
        };
        return this.http.post(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    AppService.prototype.createUser = function (user) {
        var url = this.userUrl + 'register';
        return this.http.post(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    AppService.prototype.getUser = function (userID) {
        var url = this.userUrl + userID; //userId will be dynamic
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    AppService.prototype.createEvent = function (event, userID) {
        var uri = this.eventUrl + userID;
        return this.http.post(uri, event)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    AppService.prototype.updateEvent = function (event) {
        var url = this.eventUrl + event.eventID;
        return this.http.put(url, event)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    AppService.prototype.deleteEvent = function (userID, eventID) {
        var url = this.eventUrl + userID + '/' + eventID;
        return this.http.delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    AppService.prototype.getEvents = function (userID, type) {
        var url = this.eventUrl + type + '/' + userID; //userId will be dynamic
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    AppService.prototype.getEventInfo = function (eventId) {
        var url = this.eventUrl + eventId; //userId will be dynamic
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return String(res);
        }));
    };
    AppService.prototype.createChoice = function (choice, userID) {
        var url = this.choiceUrl + userID;
        return this.http.post(url, choice)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    AppService.prototype.updateChoice = function (choice) {
        var url = this.choiceUrl + choice.eventID;
        return this.http.put(url, choice)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    AppService.prototype.deleteChoice = function (userID, eventID) {
        var url = this.choiceUrl + userID + '/' + eventID;
        return this.http.delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    AppService.prototype.debug = function () {
        return this.http.get(this.baseUrl + 'test/getUser').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
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

module.exports = __webpack_require__(/*! C:\Users\bachu\Documents\eventCalendar\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map