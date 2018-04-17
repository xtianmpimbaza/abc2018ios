webpackJsonp([10],{

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breakout__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakoutPageModule", function() { return BreakoutPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BreakoutPageModule = (function () {
    function BreakoutPageModule() {
    }
    return BreakoutPageModule;
}());
BreakoutPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__breakout__["a" /* BreakoutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__breakout__["a" /* BreakoutPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__breakout__["a" /* BreakoutPage */]
        ]
    })
], BreakoutPageModule);

//# sourceMappingURL=breakout.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_breakout_service__ = __webpack_require__(251);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreakoutPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreakoutPage = (function () {
    function BreakoutPage(navCtrl, navParams, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // constructor(public navCtrl: NavController, public navParams: NavParams) {
        // }
        this.viewMode = "first";
        service.getBreakOne().then(function (data) { return _this.firstSchedule = data; });
        service.getBreakTwo().then(function (data) { return _this.secondSchedule = data; });
    }
    return BreakoutPage;
}());
BreakoutPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-breakout',template:/*ion-inline-start:"F:\abconference\src\pages\breakout\breakout.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Breakout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="property-list">\n\n  <div *ngIf="viewMode===\'first\'" style="width:100%;height:100%;">\n    <ion-list >\n\n      <button ion-item text-wrap *ngFor="let dayone of firstSchedule">\n        <h2 class="hall_name">{{dayone.hall}}</h2>\n        <h2>{{dayone.time}}</h2>\n        <p>{{dayone.item}}</p>\n      </button>\n\n    </ion-list>\n  </div>\n  <div *ngIf="viewMode===\'second\'" style="width:100%;height:100%;">\n    <ion-list>\n\n      <button ion-item text-wrap *ngFor="let daytwo of secondSchedule">\n        <h2 class="hall_name">{{daytwo.hall}}</h2>\n        <h2>{{daytwo.time}}</h2>\n        <p>{{daytwo.item}}</p>\n      </button>\n\n    </ion-list>\n  </div>\n\n</ion-content>\n\n<ion-footer padding>\n  <ion-segment [(ngModel)]="viewMode">\n    <ion-segment-button value="first">\n      <!--<ion-icon name="list"></ion-icon>-->\n      23 May 2018\n\n    </ion-segment-button>\n    <ion-segment-button value="second">\n      <!--<ion-icon name="map"></ion-icon>-->\n      24 May 2018\n    </ion-segment-button>\n  </ion-segment>\n</ion-footer>\n'/*ion-inline-end:"F:\abconference\src\pages\breakout\breakout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_breakout_service__["a" /* BreakoutService */]])
], BreakoutPage);

//# sourceMappingURL=breakout.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map