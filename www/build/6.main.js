webpackJsonp([6],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(354);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.goToMyPage = function (page) {
        // go to the MyPage component
        this.navCtrl.push(page);
    };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"F:\abconference\src\pages\home\home.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Main Menu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <!--Dashboard here-->\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-6>\n        <ion-card (click)="goToMyPage(\'EventPage\')">\n\n          <ion-card-header>\n            <div class="header_ion">\n              <ion-icon name="ios-contact"></ion-icon>\n            </div>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-row><h2 class="title_card">About</h2></ion-row>\n            <!--<ion-row class="cant_card">Attendees profiles</ion-row>-->\n            <ion-row><h4 class="cant_card">About the event</h4></ion-row>\n          </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card (click)="goToMyPage(\'GetinvolvedPage\')">\n\n          <ion-card-header>\n            <div class="header_ion">\n              <ion-icon name="md-reorder"></ion-icon>\n            </div>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-row><h2 class="title_card">Get involved</h2></ion-row>\n            <!--<ion-row class="cant_card">Be part of us</ion-row>-->\n            <ion-row><h4 class="cant_card">Be part of us</h4></ion-row>\n          </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <ion-card (click)="goToMyPage(\'SpeakersPage\')">\n\n          <ion-card-header>\n            <div class="header_ion">\n              <ion-icon name="ios-volume-up"></ion-icon>\n            </div>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-row><h2 class="title_card">Speakers</h2></ion-row>\n            <!--<ion-row class="cant_card">Speakers\' profiles</ion-row>-->\n            <ion-row><h4 class="cant_card">Speakers\' profiles</h4></ion-row>\n          </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card (click)="goToMyPage(\'SponsorsPage\')">\n\n          <ion-card-header>\n            <div class="header_ion">\n              <ion-icon name="ios-people"></ion-icon>\n            </div>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-row><h2 class="title_card">Team</h2></ion-row>\n            <ion-row><h4 class="cant_card">Teams\' profiles</h4></ion-row>\n          </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <ion-card (click)="goToMyPage(\'SchedulePage\')">\n          <ion-card-header>\n            <div class="header_ion">\n              <ion-icon name="ios-calendar"></ion-icon>\n            </div>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-row><h2 class="title_card">Schedule</h2></ion-row>\n            <!--<ion-row class="cant_card">Event\'s program</ion-row>-->\n            <ion-row><h4 class="cant_card">Event\'s program</h4></ion-row>\n          </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card (click)="goToMyPage(\'BreakoutPage\')">\n\n          <ion-card-header>\n            <div class="header_ion">\n              <ion-icon name="ios-alarm"></ion-icon>\n            </div>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-row><h2 class="title_card">Breakout</h2></ion-row>\n            <ion-row><h4 class="cant_card">Breakout Sessions</h4></ion-row>\n          </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"F:\abconference\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map