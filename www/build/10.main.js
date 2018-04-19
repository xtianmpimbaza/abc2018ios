webpackJsonp([10],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(348);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageModule", function() { return EventPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventPageModule = (function () {
    function EventPageModule() {
    }
    return EventPageModule;
}());
EventPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__event__["a" /* EventPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event__["a" /* EventPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__event__["a" /* EventPage */]
        ]
    })
], EventPageModule);

//# sourceMappingURL=event.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
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
 * Generated class for the EventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EventPage = (function () {
    function EventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventPage');
    };
    return EventPage;
}());
EventPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-event',template:/*ion-inline-start:"F:\abconference\src\pages\event\event.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About the conference</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="about-header">\n    <img src="assets/img/conference-logo.png">\n  </div>\n\n  <div padding class="about-info">\n\n    <h4>Africa Is Ready For Blockchain </h4>\n\n    <p>On the 23rd and 24th May, leaders in policy, business and academia from around the world will converge in Kampala\n      for Africa’s largest blockchain conference.</p>\n\n    <p> Organized by The Blockchain Association of Uganda, with support from the Government of Uganda, the Africa Blockchain\n      Conference will concentrate on “the role of blockchain technology in Africa’s transformation.”</p>\n\n    <p>Through a series of impactful and experiential sessions, participants will realise their role in how to support a\n      thriving blockchain innovation and business ecosystem.</p>\n\n  </div>\n  <div>\n    <img src="assets/img/summary_eve_list.jpg">\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"F:\abconference\src\pages\event\event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], EventPage);

//# sourceMappingURL=event.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map