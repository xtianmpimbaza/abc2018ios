webpackJsonp([0],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sponsors__ = __webpack_require__(360);
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

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_attendees_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attendee_details_attendee_details__ = __webpack_require__(251);
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





var SponsorsPage = (function () {
    function SponsorsPage(navCtrl, service, emailComposer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.emailComposer = emailComposer;
        service.getAll().then(function (data) { return _this.attendees = data; });
    }
    SponsorsPage.prototype.openSpeakerDetail = function (broker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__attendee_details_attendee_details__["a" /* AttendeeDetailsPage */], broker);
    };
    SponsorsPage.prototype.send = function () {
        var email = {
            to: 'xtianm4@gmail.com',
            subject: 'Cordova Icons',
            body: 'How are you? Nice greetings from Leipzig',
            isHtml: true
        };
        this.emailComposer.open(email);
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                //Now we know we can send
            }
        });
    };
    return SponsorsPage;
}());
SponsorsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-sponsors',template:/*ion-inline-start:"C:\Users\christian\Dropbox\Project Folder\abconference\src\pages\sponsors\sponsors.html"*/'<!--\n  Generated template for the SponsorsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Attendees</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let speaker of attendees" (click)="openSpeakerDetail(speaker)">\n      <!--<ion-avatar item-left>-->\n      <!--<img src="{{speaker.picture}}"/>-->\n      <!--</ion-avatar>-->\n      <h2>{{speaker.Name}}</h2>\n      <p>{{speaker.Email}}</p>\n    </button>\n  </ion-list>\n  <!--<ion-list>-->\n\n  <!--<button ion-item *ngFor="let sponsor of sponsors" (click)="send()">-->\n  <!--&lt;!&ndash;<ion-avatar >&ndash;&gt;-->\n  <!--<ion-row class="sponsor_card">-->\n  <!--<img src="{{sponsor.picture}}"/>-->\n  <!--</ion-row>-->\n\n  <!--&lt;!&ndash;</ion-avatar>&ndash;&gt;-->\n  <!--&lt;!&ndash;<h2>{{speaker.name}}</h2>&ndash;&gt;-->\n  <!--&lt;!&ndash;<p>{{speaker.title}}</p>&ndash;&gt;-->\n  <!--</button>-->\n\n  <!--</ion-list>-->\n</ion-content>\n'/*ion-inline-end:"C:\Users\christian\Dropbox\Project Folder\abconference\src\pages\sponsors\sponsors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_attendees_service__["a" /* AttendeesService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]])
], SponsorsPage);

//# sourceMappingURL=sponsors.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map