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
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/fullcalendar */ "./node_modules/primeng/fullcalendar.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_13__);
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
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["CheckboxModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["DataListModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["MenubarModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_13__["FullCalendarModule"]
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
        //comment the code for local test
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

module.exports = ".myAccount {\n  padding: 10px;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2FwcC1oZWFkZXIvQzpcXFVzZXJzXFxiYWNodVxcRG9jdW1lbnRzXFxwcm9qZWN0XFxwbGFuZXRvLWNsb3VkLWV2ZW50cy9zcmNcXGFwcFxcaG9tZS1wYWdlXFxhcHAtaGVhZGVyXFxhcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLHNCQUFxQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9hcHAtaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlBY2NvdW50IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLy8udWktbWVudWl0ZW0udWktbWVudWl0ZW0tYWN0aXZlID4gLnVpLW1lbnVpdGVtLWxpbmsge1xyXG4vLyAgY29sb3I6ICNjY2NjY2MgIWltcG9ydGFudDtcclxuLy8gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbi8vfVxyXG4vL1xyXG4vLy51aS1zdGF0ZS1hY3RpdmUge1xyXG4vLyAgICBjb2xvcjogI2NjY2NjYyAhaW1wb3J0YW50O1xyXG4vLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4vLyAgfVxyXG5cclxuIl19 */"

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
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./app-header.component.scss */ "./src/app/home-page/app-header/app-header.component.scss")]
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

module.exports = "<p-dialog *ngIf=\"userform\" header=\"{{title}}\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"900\"\n          [minWidth]=\"200\" [minY]=\"70\"\n          [maximizable]=\"true\" [baseZIndex]=\"10000\">\n    <span>\n      <div class=\"login-wrap\">\n  <div class=\"login-html\">\n    <div class=\"login-form\">\n      <div class=\"sign-up-htm\">\n        <form [formGroup]=\"userform\">\n          <div class=\"group ui-grid-row\">\n            <div class=\"ui-grid-col-4\" style=\"padding: 20px;\">\n              <label class=\"label\">Event Name</label></div>\n            <div class=\"ui-grid-col-6\">\n              <input pInputText class=\"input\" type=\"text\" formControlName=\"name\" placeholder=\"Required\"/></div>\n            <div class=\"ui-grid-col-6\">\n              <p-message severity=\"error\" text=\"Event Name is required\"\n                         *ngIf=\"!userform.controls['name'].valid&&userform.controls['name'].dirty\"></p-message>\n            </div>\n          </div>\n          <div class=\"group ui-grid-row\">\n            <div class=\"ui-grid-col-4\" style=\"padding: 20px;\">\n              <label class=\"label\">Event Start Date</label></div>\n            <div class=\"ui-grid-col-6\">\n              <p-calendar formControlName=\"start\" [showIcon]=\"true\"></p-calendar>\n            <div class=\"ui-grid-col-6\">\n              <p-message severity=\"error\" text=\"Event Start Date is required\"\n                         *ngIf=\"!userform.controls['start'].valid&&userform.controls['start'].dirty\"></p-message>\n            </div>\n          </div>\n          </div>\n           <div class=\"group ui-grid-row\">\n            <div class=\"ui-grid-col-4\" style=\"padding: 20px;\">\n              <label class=\"label\">Event End Date</label></div>\n            <div class=\"ui-grid-col-6\">\n              <p-calendar formControlName=\"end\" [showIcon]=\"true\" ></p-calendar>\n            <div class=\"ui-grid-col-6\">\n              <p-message severity=\"error\" text=\"Event End Date is required\"\n                         *ngIf=\"!userform.controls['end'].valid&&userform.controls['end'].dirty\"></p-message>\n            </div>\n          </div>\n          </div>\n\n          <div class=\"group ui-grid-row\">\n            <div class=\"ui-grid-col-4\" style=\"padding: 20px;\">\n              <label class=\"label\">Description</label></div>\n            <div class=\"ui-grid-col-6\">\n              <input pInputText class=\"input\" type=\"text\" formControlName=\"description\" placeholder=\"Required\"/></div>\n            <div class=\"ui-grid-col-6\">\n              <p-message severity=\"error\" text=\"description\"\n                         *ngIf=\"!userform.controls['description'].valid&&userform.controls['description'].dirty\"></p-message>\n            </div>\n          </div>\n        </form>\n    </div>\n\n    </div>\n  </div>\n</div>\n\n    </span>\n  <p-footer>\n    <button type=\"button\" *ngIf=\"type === 'create'\" pButton [disabled]=\"!userform.valid\"\n            (click)=\"onSubmit(userform.value)\" label=\"Create\"></button>\n    <button type=\"button\" *ngIf=\"type==='Modify'\" pButton [disabled]=\"!userform.valid\"\n            (click)=\"onModify(userform.value)\" label=\"Modify\"></button>\n    <button type=\"button\" pButton (click)=\"onCancel()\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n  </p-footer>\n</p-dialog>\n\n<p-dialog [(visible)]=\"displayEventDialog\">\n  <h3>{{dialogMessage}}</h3>\n  <div>\n    <p-button label=\"Yes\" (onClick)=\"choice('yes')\"></p-button>\n    <p-button label=\"No\" (onClick)=\"choice('no')\"></p-button>\n  </div>\n</p-dialog>\n\n\n<p-splitButton\n  (onClick)=\"CalendarView(true)\" [model]=\"calendarItem\"\n  label=\"Switch View\"\n></p-splitButton>\n<button type=\"button\" style=\"margin: 5px\" (click)=\"showDialog('create')\" pButton\n        label=\"CreateEvent\"></button>\n<button type=\"button\" style=\"margin: 5px\" [disabled]=\"!(event && userID===event.userID)\" (click)=\"showDialog('modify')\" pButton\n        label=\"ModifyEvent\"></button>\n<button type=\"button\" style=\"margin: 5px\" [disabled]=\"!(event && userID===event.userID)\" (click)=\"showEventManagementDialog('del')\" pButton\n        label=\"DelEvent\"></button>\n<!--<button *ngIf=\"!showJoinedEvents && !showMyEvents\" pButton type=\"button\"\n        label=\"JoinEvent\"  (click)=\"showEventManagementDialog('join')\"  ></button>\n<button *ngIf=\"showJoinedEvents && !showMyEvents\" pButton type=\"button\"\n        label=\"QuitEvent\"  (click)=\"showEventManagementDialog('quit')\"  ></button>-->\n<br>\n<div class=\"container ui-grid-row\">\n<div class=\"ui-grid-col-6\">\n  <p-fullCalendar class=\"fc-basic-view\"  #ucCalendar *ngIf=\"showCalendarView && events && events.length > 0 &&  Events && Events.length > 0 \" [events]=\"Events\" [options]=\"options\"></p-fullCalendar>\n</div> test{{calendarEvent}}\n<!--\n<div *ngIf=\"calendarEvent\" style=\"border:1px solid #ccc;\" class=\"ui-grid-col-6\">\n      <label >Event Name</label>\n      {{calendarEvent.title}}\n      <label >Event Start Date</label>\n       {{calendarEvent.start}}\n      <label >Event End Date</label>\n       {{calendarEvent.end}}\n      <label >Event Description</label>\n       {{calendarEvent.def.extendedProps.description}}\n    </div>\n-->\n\n</div>\n<div *ngIf=\"!showCalendarView && events && events.length > 0\">\n  <p-table #dt [columns]=\"cols\" [value]=\"events\" [(selection)]=\"event\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"caption\">\n\n      <div style=\"text-align: left\">\n        <p-tabMenu [model]=\"items\" [activeItem]=\"items[0]\"></p-tabMenu>\n        <input  type=\"text\" pInputText size=\"50\" placeholder=\"Search\"\n                (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n        <i class=\"pi pi-search\" style=\"margin:4px 4px 0 0\"></i>\n      </div>\n    </ng-template>\n    <ng-template pTemplate=\"header\" let-columns>\n      <tr>\n        <th style=\"width: 3em\"></th>\n        <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n          {{col.header}}\n          <input *ngSwitchCase=\"'name'\" pInputText type=\"text\"\n                 (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n      <tr [pSelectableRow]=\"rowData\">\n        <td>\n          <p-tableRadioButton [value]=\"rowData\"></p-tableRadioButton>\n        </td>\n        <td *ngFor=\"let col of columns\">\n          {{rowData[col.field]}}\n        </td>\n      </tr>\n    </ng-template>\n\n  </p-table>\n\n</div>\n"

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
        this.showCalendarView = true;
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
        this.options = {
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            eventClick: function (date) {
                //self.calendarEvent =  new Event(date.event.title, date.event.start, date.event.end,date.event.extendedProps.description);
            },
        };
        // test full calendar
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
            _this.initEvents();
        }, function (error2) {
            _this.fullName = 'Janani Sundaresan';
            _this.email = 'janani.sundaresan@gmail.com';
            _this.userID = 100;
            _this.username = 'janu';
        });
        this.items = [
            { label: 'MyEvents', icon: 'pi pi-info', command: function () { return _this.showEvents(_this.items[0].label); } } /*,
            {label: 'JoinedEvents', icon: 'pi pi-info', command: () => this.showEvents(this.items[1].label)},
            {label: 'OtherEvents', icon: 'pi pi-info', command: () => this.showEvents(this.items[2].label)}*/
        ];
        this.calendarItem = [
            { label: 'EventsTableView', command: function () {
                    _this.CalendarView(false);
                } },
            { label: 'EventsCalendarView', command: function () {
                    _this.CalendarView(true);
                } }
        ];
        this.cols = [
            { field: 'name', header: 'EventName' },
            { field: 'description', header: 'Description' },
            { field: 'start', header: 'Start Date/Time' },
            { field: 'end', header: 'End Date/Time' },
        ];
    };
    ;
    // build calendarView events based on userEvents
    EventManagementComponent.prototype.initCalendarViewEvents = function () {
        var _this = this;
        this.Events = new Array();
        this.events.forEach(function (myEvent) {
            var event = {
                "title": myEvent.name,
                "start": _this.datePipe.transform(myEvent.start, 'yyyy-MM-dd'),
                "end": _this.datePipe.transform(myEvent.end, 'yyyy-MM-dd'),
                "description": myEvent.description,
                "eventID": myEvent.eventID,
                "userID": myEvent.userID
            };
            _this.Events.push(event);
        });
    };
    // get events from database
    EventManagementComponent.prototype.initEvents = function () {
        var _this = this;
        this.appService.getEvents(this.userID, 'userEvents').subscribe(function (data) {
            _this.events = data;
            _this.initCalendarViewEvents();
        }, function (error) { return console.error(error.message); });
    };
    EventManagementComponent.prototype.showEvents = function (type) {
        if (type === 'MyEvents') {
            //this.events = this.myEvents;
            this.showMyEvents = true;
        }
        else {
            this.showMyEvents = false;
            /*      if (type === 'JoinedEvents') {
                    this.events = this.joinedEvents;
                    this.showJoinedEvents = true;
                  } else if (type === 'OtherEvents') {
                    this.events = this.otherEvents;
                    this.showJoinedEvents = false;
                  }*/
        }
    };
    /*choice(value) {
      if (value === 'yes') {
        let choice = {
          userID: this.userID,
          eventID: this.event.eventID,
          date: this.event.start
        };
        if (this.type === 'join') {
          this.appService.createChoice(choice, this.userID).subscribe(data => {
            this.joinedEvents.push(this.event);
            this.otherEvents = this.otherEvents.filter(event => {
              return event.eventID !== this.event.eventID;
            });
            this.afterOperstion();
  
          }, error => {
            console.error(error.message);
          });
  
        } else if (this.type === 'quit') {
          this.appService.deleteChoice(this.userID, this.event.eventID).subscribe(data => {
  
            this.otherEvents.push(this.event);
            console.log(this.event.eventID + data);
            this.joinedEvents = this.joinedEvents.filter(event => {
              return event.eventID !== this.event.eventID;
            });
            this.afterOperstion();
  
          }, error => {
            console.error(error.message);
          });
  
        } else if (this.type === 'del') {
  
          //TODO del others joined event
          this.appService.deleteEvent(this.userID, this.event.eventID).subscribe(eventID => {
  
            this.myEvents = this.myEvents.filter(event => {
              return event.eventID !== Number(eventID);
            });
            this.joinedEvents = this.joinedEvents.filter(event => {
              return event.eventID !== Number(eventID);
            });
            this.afterOperstion();
            alert('del event success');
          }, error => {
            console.error(error.message);
          });
        }
  
      }
      this.displayEventDialog = false;
  
    }*/
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
                _this.initEvents();
                /* console.log('get create event id:' + eventID);
                 event['eventID'] = eventID;
        
                 this.myEvents.push(event);
                 this.joinedEvents.push(event);
        
                 // console.log(event);
                 this.display = false;
        
                 let choice = {
                   'eventID': eventID,
                   'userID': this.userID,
                   // TODO add choose join date,now just use the start date
                   'date': event.start
                 };
        
                 this.appService.createChoice(choice, this.userID).subscribe(choiceID => {
                   console.log('create choice ID is: ' + choiceID);
                 }), error => {
                   console.error(error.message);
                 };
        
                 alert('create event success');
               }, error => {
                 console.error(error.message);
               });
         */
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
            _this.initEvents();
            /*      let itemIndex = this.myEvents.findIndex(item => item.eventID == event.eventID);
                  this.myEvents[itemIndex] = event;
            
                  itemIndex = this.joinedEvents.findIndex(item => item.eventID == event.eventID);
                  this.joinedEvents[itemIndex] = event;
            
                  this.afterOperstion();*/
            _this.display = false;
            alert('update event success');
        }, function (error) {
            console.error(error.message);
        });
    };
    EventManagementComponent.prototype.onCancel = function () {
        this.display = false;
    };
    EventManagementComponent.prototype.CalendarView = function (show) {
        this.showCalendarView = show;
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
        // if (this.userID==null) {
        //   this.router.navigate(['/login'])
        // }
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
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/fullcalendar */ "./node_modules/primeng/fullcalendar.js");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_12__);
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
                primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["DataListModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["MenubarModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["MenuModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["TabMenuModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_12__["FullCalendarModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["SplitButtonModule"]
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

module.exports = ".login {\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 20px;\n  color: #252525;\n  background: white; }\n  .login form {\n    width: 50%; }\n  .login input[type=text],\n  .login input[type=password],\n  .login input[type=email] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box; }\n  .login button {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%; }\n  .login .cancelbtn {\n    padding: 14px 20px;\n    background-color: #f44336; }\n  .login .cancelbtn,\n  .login .signupbtn {\n    float: left;\n    width: 50%; }\n  .login .container {\n    padding: 16px;\n    width: calc(100% - 36px); }\n  .login .clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table; }\n  .login a {\n    color: bisque; }\n  @media screen and (max-width: 300px) {\n  .cancelbtn,\n  .signupbtn {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2xvZ2luL0M6XFxVc2Vyc1xcYmFjaHVcXERvY3VtZW50c1xccHJvamVjdFxccGxhbmV0by1jbG91ZC1ldmVudHMvc3JjXFxhcHBcXGhvbWUtcGFnZVxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0RBQWlEO0VBQ2pELGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osZUFBc0I7RUFDdEIsa0JBQWlCLEVBcURsQjtFQTdERDtJQVlJLFdBQVUsRUFDWDtFQWJIOzs7SUFrQkksWUFBVztJQUNYLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2Isc0JBQXFCO0lBQ3JCLHVCQUFzQjtJQUN0Qix1QkFBc0IsRUFDdkI7RUF4Qkg7SUEyQkksMEJBQXlCO0lBQ3pCLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLGFBQVk7SUFDWixnQkFBZTtJQUNmLFlBQVcsRUFDWjtFQWxDSDtJQXFDSSxtQkFBa0I7SUFDbEIsMEJBQXlCLEVBQzFCO0VBdkNIOztJQTJDSSxZQUFXO0lBQ1gsV0FBVSxFQUNYO0VBN0NIO0lBZ0RJLGNBQWE7SUFDYix5QkFBd0IsRUFDekI7RUFsREg7SUFxREksWUFBVztJQUNYLFlBQVc7SUFDWCxlQUFjLEVBQ2Y7RUF4REg7SUEyREksY0FBYSxFQUNkO0VBRUg7RUFDRTs7SUFFRSxZQUFXLEVBQ1osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6IHJnYigzNywgMzcsIDM3KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5cblxuICBmb3JtIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgaW5wdXRbdHlwZT10ZXh0XSxcbiAgaW5wdXRbdHlwZT1wYXNzd29yZF0sXG4gIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNhbmNlbGJ0biB7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIH1cblxuICAuY2FuY2VsYnRuLFxuICAuc2lnbnVwYnRuIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzZweCk7XG4gIH1cblxuICAuY2xlYXJmaXg6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6IGJpc3F1ZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLmNhbmNlbGJ0bixcbiAgLnNpZ251cGJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"

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

module.exports = ".login {\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 20px;\n  color: #252525;\n  background: white; }\n  .login form {\n    width: 50%; }\n  .login input[type=text],\n  .login input[type=password],\n  .login input[type=email] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box; }\n  .login button {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%; }\n  .login .cancelbtn {\n    padding: 14px 20px;\n    background-color: #f44336; }\n  .login .cancelbtn,\n  .login .signupbtn {\n    float: left;\n    width: 50%; }\n  .login .container {\n    padding: 16px;\n    width: calc(100% - 36px); }\n  .login .clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table; }\n  .login a {\n    color: bisque; }\n  @media screen and (max-width: 300px) {\n  .cancelbtn,\n  .signupbtn {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3NpZ251cC9DOlxcVXNlcnNcXGJhY2h1XFxEb2N1bWVudHNcXHByb2plY3RcXHBsYW5ldG8tY2xvdWQtZXZlbnRzL3NyY1xcYXBwXFxob21lLXBhZ2VcXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0RBQWlEO0VBQ2pELGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osZUFBc0I7RUFDdEIsa0JBQWlCLEVBcURsQjtFQTdERDtJQVlJLFdBQVUsRUFDWDtFQWJIOzs7SUFrQkksWUFBVztJQUNYLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2Isc0JBQXFCO0lBQ3JCLHVCQUFzQjtJQUN0Qix1QkFBc0IsRUFDdkI7RUF4Qkg7SUEyQkksMEJBQXlCO0lBQ3pCLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLGFBQVk7SUFDWixnQkFBZTtJQUNmLFlBQVcsRUFDWjtFQWxDSDtJQXFDSSxtQkFBa0I7SUFDbEIsMEJBQXlCLEVBQzFCO0VBdkNIOztJQTJDSSxZQUFXO0lBQ1gsV0FBVSxFQUNYO0VBN0NIO0lBZ0RJLGNBQWE7SUFDYix5QkFBd0IsRUFDekI7RUFsREg7SUFxREksWUFBVztJQUNYLFlBQVc7SUFDWCxlQUFjLEVBQ2Y7RUF4REg7SUEyREksY0FBYSxFQUNkO0VBRUg7RUFDRTs7SUFFRSxZQUFXLEVBQ1osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogcmdiKDM3LCAzNywgMzcpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuXG4gIGZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICBpbnB1dFt0eXBlPXRleHRdLFxuICBpbnB1dFt0eXBlPXBhc3N3b3JkXSxcbiAgaW5wdXRbdHlwZT1lbWFpbF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY2FuY2VsYnRuIHtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgfVxuXG4gIC5jYW5jZWxidG4sXG4gIC5zaWdudXBidG4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNnB4KTtcbiAgfVxuXG4gIC5jbGVhcmZpeDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogYmlzcXVlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAuY2FuY2VsYnRuLFxuICAuc2lnbnVwYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"

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

module.exports = ".login {\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 20px;\n  color: #252525;\n  background: white; }\n  .login form {\n    width: 50%; }\n  .login input[type=text],\n  .login input[type=password],\n  .login input[type=email] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box; }\n  .login button {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%; }\n  .login .cancelbtn {\n    padding: 14px 20px;\n    background-color: #f44336; }\n  .login .cancelbtn,\n  .login .signupbtn {\n    float: left;\n    width: 50%; }\n  .login .container {\n    padding: 16px;\n    width: calc(100% - 36px); }\n  .login .clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table; }\n  .login a {\n    color: bisque; }\n  @media screen and (max-width: 300px) {\n  .cancelbtn,\n  .signupbtn {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3VzZXItcHJvZmlsZS9DOlxcVXNlcnNcXGJhY2h1XFxEb2N1bWVudHNcXHByb2plY3RcXHBsYW5ldG8tY2xvdWQtZXZlbnRzL3NyY1xcYXBwXFxob21lLXBhZ2VcXHVzZXItcHJvZmlsZVxcdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0RBQWlEO0VBQ2pELGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osZUFBc0I7RUFDdEIsa0JBQWlCLEVBcURsQjtFQTdERDtJQVlJLFdBQVUsRUFDWDtFQWJIOzs7SUFrQkksWUFBVztJQUNYLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2Isc0JBQXFCO0lBQ3JCLHVCQUFzQjtJQUN0Qix1QkFBc0IsRUFDdkI7RUF4Qkg7SUEyQkksMEJBQXlCO0lBQ3pCLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLGFBQVk7SUFDWixnQkFBZTtJQUNmLFlBQVcsRUFDWjtFQWxDSDtJQXFDSSxtQkFBa0I7SUFDbEIsMEJBQXlCLEVBQzFCO0VBdkNIOztJQTJDSSxZQUFXO0lBQ1gsV0FBVSxFQUNYO0VBN0NIO0lBZ0RJLGNBQWE7SUFDYix5QkFBd0IsRUFDekI7RUFsREg7SUFxREksWUFBVztJQUNYLFlBQVc7SUFDWCxlQUFjLEVBQ2Y7RUF4REg7SUEyREksY0FBYSxFQUNkO0VBRUg7RUFDRTs7SUFFRSxZQUFXLEVBQ1osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcclxuICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2IoMzcsIDM3LCAzNyk7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG5cclxuICBmb3JtIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPXRleHRdLFxyXG4gIGlucHV0W3R5cGU9cGFzc3dvcmRdLFxyXG4gIGlucHV0W3R5cGU9ZW1haWxdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2FuY2VsYnRuIHtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgfVxyXG5cclxuICAuY2FuY2VsYnRuLFxyXG4gIC5zaWdudXBidG4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM2cHgpO1xyXG4gIH1cclxuXHJcbiAgLmNsZWFyZml4OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IGJpc3F1ZTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuY2FuY2VsYnRuLFxyXG4gIC5zaWdudXBidG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
        // deploy url
        this.baseUrl = 'https://planeto-app.appspot.com/api/';
        // for local test url
        // baseUrl = 'https://localhost:8080/';
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
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('login', [])));
    };
    AppService.prototype.createUser = function (user) {
        var url = this.userUrl + 'register';
        return this.http.post(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('register', [])));
    };
    AppService.prototype.getUser = function (userID) {
        var url = this.userUrl + userID; //userId will be dynamic
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('login', [])));
    };
    AppService.prototype.createEvent = function (event, userID) {
        var uri = this.eventUrl + userID;
        return this.http.post(uri, event)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('login', [])));
    };
    AppService.prototype.updateEvent = function (event) {
        var url = this.eventUrl + event.eventID;
        return this.http.put(url, event)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('login', [])));
    };
    AppService.prototype.deleteEvent = function (userID, eventID) {
        var url = this.eventUrl + userID + '/' + eventID;
        return this.http.delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('login', [])));
    };
    AppService.prototype.getEvents = function (userID, type) {
        var url = this.eventUrl + type + '/' + userID; //userId will be dynamic
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('login', [])));
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
    AppService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
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

module.exports = __webpack_require__(/*! C:\Users\bachu\Documents\project\planeto-cloud-events\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map