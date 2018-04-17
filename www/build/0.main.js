webpackJsonp([0],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sponsors__ = __webpack_require__(349);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsPageModule", function() { return SponsorsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SponsorsPageModule = (function () {
    function SponsorsPageModule() {
    }
    return SponsorsPageModule;
}());
SponsorsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sponsors__["a" /* SponsorsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sponsors__["a" /* SponsorsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sponsors__["a" /* SponsorsPage */]
        ]
    })
], SponsorsPageModule);

//# sourceMappingURL=sponsors.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sponsor_service_mock__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {BrokerService} from "../../providers/broker-service-mock";
var SponsorsPage = (function () {
    // constructor(public navCtrl: NavController, public service: SponsorService) {
    //   service.findAll().then(data => this.sponsors = data);
    // }
    function SponsorsPage(navCtrl, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        service.findAll().then(function (data) { return _this.sponsors = data; });
    }
    return SponsorsPage;
}());
SponsorsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-sponsors',template:/*ion-inline-start:"F:\abconference\src\pages\sponsors\sponsors.html"*/'<!--\n  Generated template for the SponsorsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sponsors</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n\n    <button ion-item *ngFor="let sponsor of sponsors">\n      <!--<ion-avatar >-->\n      <ion-row class="sponsor_card">\n        <img src="{{sponsor.picture}}"/>\n      </ion-row>\n\n      <!--</ion-avatar>-->\n      <!--<h2>{{speaker.name}}</h2>-->\n      <!--<p>{{speaker.title}}</p>-->\n    </button>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\abconference\src\pages\sponsors\sponsors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_sponsor_service_mock__["a" /* SponsorService */]])
], SponsorsPage);

//# sourceMappingURL=sponsors.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map