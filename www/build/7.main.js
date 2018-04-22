webpackJsonp([7],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getinvolved__ = __webpack_require__(353);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetinvolvedPageModule", function() { return GetinvolvedPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GetinvolvedPageModule = (function () {
    function GetinvolvedPageModule() {
    }
    return GetinvolvedPageModule;
}());
GetinvolvedPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__getinvolved__["a" /* GetinvolvedPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__getinvolved__["a" /* GetinvolvedPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__getinvolved__["a" /* GetinvolvedPage */]
        ]
    })
], GetinvolvedPageModule);

//# sourceMappingURL=getinvolved.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetinvolvedPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetinvolvedPage = (function () {
    function GetinvolvedPage(navCtrl, navParams, sanitize) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitize = sanitize;
        this.viewMode = "list";
    }
    GetinvolvedPage.prototype.urlExhibitors = function () {
        this.my_url = "https://africanblockchain.org/exhibit/get-involved/";
        return this.sanitize.bypassSecurityTrustResourceUrl(this.my_url);
    };
    GetinvolvedPage.prototype.urlSponsors = function () {
        this.my_url = "https://africanblockchain.org/abc-sponsors/get-involved/";
        return this.sanitize.bypassSecurityTrustResourceUrl(this.my_url);
    };
    return GetinvolvedPage;
}());
GetinvolvedPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-getinvolved',template:/*ion-inline-start:"C:\Users\christian\Dropbox\Project Folder\abconference\src\pages\getinvolved\getinvolved.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Get involved</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="property-list">\n\n  <div *ngIf="viewMode===\'list\'" style="width:100%;height:100%;">\n    <iframe height="100%" width="100%" [src]="urlExhibitors()"></iframe>\n  </div>\n  <div *ngIf="viewMode===\'map\'" style="width:100%;height:100%;">\n    <iframe height="100%" width="100%" [src]="urlSponsors()"></iframe>\n  </div>\n\n</ion-content>\n\n<ion-footer padding>\n  <ion-segment [(ngModel)]="viewMode">\n    <ion-segment-button value="list">\n      <!--<ion-icon name="list"></ion-icon>-->\n      Exhibitor\n    </ion-segment-button>\n    <ion-segment-button value="map">\n      <!--<ion-icon name="map"></ion-icon>-->\n      Sponsor\n    </ion-segment-button>\n  </ion-segment>\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\christian\Dropbox\Project Folder\abconference\src\pages\getinvolved\getinvolved.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* DomSanitizer */]])
], GetinvolvedPage);

//# sourceMappingURL=getinvolved.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map