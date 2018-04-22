webpackJsonp([1],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speakers__ = __webpack_require__(359);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakersPageModule", function() { return SpeakersPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpeakersPageModule = (function () {
    function SpeakersPageModule() {
    }
    return SpeakersPageModule;
}());
SpeakersPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__speakers__["a" /* SpeakersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__speakers__["a" /* SpeakersPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__speakers__["a" /* SpeakersPage */]
        ]
    })
], SpeakersPageModule);

//# sourceMappingURL=speakers.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__broker_detail_broker_detail__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_broker_service_mock__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakersPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeakersPage = (function () {
    function SpeakersPage(navCtrl, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        service.findAll().then(function (data) { return _this.speakers = data; });
    }
    SpeakersPage.prototype.openSpeakerDetail = function (broker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__broker_detail_broker_detail__["a" /* BrokerDetailPage */], broker);
    };
    return SpeakersPage;
}());
SpeakersPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-speakers',template:/*ion-inline-start:"C:\Users\christian\Dropbox\Project Folder\abconference\src\pages\speakers\speakers.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Speakers</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let speaker of speakers" (click)="openSpeakerDetail(speaker)">\n      <ion-avatar item-left>\n        <img src="{{speaker.picture}}"/>\n      </ion-avatar>\n      <h2>{{speaker.name}}</h2>\n      <p>{{speaker.title}}</p>\n    </button>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\christian\Dropbox\Project Folder\abconference\src\pages\speakers\speakers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_broker_service_mock__["a" /* BrokerService */]])
], SpeakersPage);

//# sourceMappingURL=speakers.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map