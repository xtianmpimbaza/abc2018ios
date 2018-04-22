webpackJsonp([2],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(358);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SchedulePageModule = (function () {
    function SchedulePageModule() {
    }
    return SchedulePageModule;
}());
SchedulePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* SchedulePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* SchedulePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* SchedulePage */]
        ]
    })
], SchedulePageModule);

//# sourceMappingURL=schedule.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_schedule_service__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_scheduletwo_service__ = __webpack_require__(255);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SchedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SchedulePage = (function () {
    function SchedulePage(navCtrl, navParams, schOneService, schTwoService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewMode = "first";
        schOneService.findAll().then(function (data) { return _this.firstSchedule = data; });
        schTwoService.findAll().then(function (data) { return _this.secondSchedule = data; });
    }
    return SchedulePage;
}());
SchedulePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-schedule',template:/*ion-inline-start:"C:\Users\christian\Dropbox\Project Folder\abconference\src\pages\schedule\schedule.html"*/'<!--\n  Generated template for the SchedulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Schedule</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="property-list">\n\n  <div *ngIf="viewMode===\'first\'" style="width:100%;height:100%;">\n    <ion-list >\n\n      <button ion-item text-wrap *ngFor="let dayone of firstSchedule">\n        <h2>{{dayone.time}}</h2>\n        <p>{{dayone.item}}</p>\n      </button>\n\n    </ion-list>\n  </div>\n  <div *ngIf="viewMode===\'second\'" style="width:100%;height:100%;">\n    <ion-list>\n\n      <button ion-item text-wrap *ngFor="let daytwo of secondSchedule">\n        <h2>{{daytwo.time}}</h2>\n        <p>{{daytwo.item}}</p>\n      </button>\n\n    </ion-list>\n  </div>\n\n</ion-content>\n\n<ion-footer padding>\n  <ion-segment [(ngModel)]="viewMode">\n    <ion-segment-button value="first">\n      <!--<ion-icon name="list"></ion-icon>-->\n      23 May 2018\n\n    </ion-segment-button>\n    <ion-segment-button value="second">\n      <!--<ion-icon name="map"></ion-icon>-->\n      24 May 2018\n    </ion-segment-button>\n  </ion-segment>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\christian\Dropbox\Project Folder\abconference\src\pages\schedule\schedule.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_schedule_service__["a" /* ScheduleOneService */], __WEBPACK_IMPORTED_MODULE_3__providers_scheduletwo_service__["a" /* ScheduleTwoService */]])
], SchedulePage);

//# sourceMappingURL=schedule.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map