webpackJsonp([10],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(350);
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

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        selector: 'page-event',template:/*ion-inline-start:"C:\Users\christian\Dropbox\Project Folder\abconference\src\pages\event\event.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About The Conference</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="about-header">\n    <img src="assets/img/conference-logo.png">\n  </div>\n\n  <div padding class="about-info">\n\n    <h2>Kwame Rugunda\n      <br>\n      CHAIRMAN</h2>\n<div class="justify_p">\n    <p> Ladies and Gentlemen,\n    </p>\n    <p> The dawn of a new technology often creates excitement and presents great opportunity; and as it has done in the\n      past, this great opportunity favours early adopters. Nations that responded favourably at the dawn of the\n      internet, and at the dawn of mobile telephony reaped well on the opportunity and are today prosperous nations.\n      Although Africa has missed out at the onset of many technologies, a new one is now upon us – blockchain – and\n      Africa must not miss out again!\n    </p>\n    <p> Blockchain is one of the 4th Industrial Revolution technologies (4IRs), a phrase coined by World Economic Forum\n      in reference to technologies that are fusing humanity and technology. 4IR along with its predecessors, 3IR, 2IR\n      and 1IR have all had distinct disruptive marks in history. 1IR saw the onset of the steam engine, 2IR the\n      revolution of electricity, 3IR the dawn of the internet, and 4IR the fusion of technologies blurring the lines\n      with physical, digital and biological spheres, some of which include artificial intelligence, blockchain and\n      robotics.\n    </p>\n    <p> Committed to ensuring Africa does not miss out again, but instead leverages the opportunity that new technology\n      presents, the Africa Blockchain Conference will host delegates from Africa and around the world to consider the\n      role of blockchain technology in Africa’s transformation. Through keynote speeches, panel discussions, breakout\n      sessions and exhibitions, participants will engage on how to create a thriving blockchain business ecosystem while\n      setting in place the appropriate policies for the nascent industry. Relevant use cases from different sectors in\n      the African context will also be highlighted.\n    </p>\n    <p> On behalf of the organizing committee, it is my pleasure to welcome you to Uganda – the pearl of Africa – to\n      join us for the Africa Blockchain Conference, which I trust will be informative, insightful and impactful.\n    </p>\n</div>\n  </div>\n  <!--<div>-->\n    <!--<img src="assets/img/summary_eve_list.jpg">-->\n  <!--</div>-->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\christian\Dropbox\Project Folder\abconference\src\pages\event\event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], EventPage);

//# sourceMappingURL=event.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map