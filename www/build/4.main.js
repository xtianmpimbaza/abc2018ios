webpackJsonp([4],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(354);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = (function () {
    function ModalPageModule() {
    }
    return ModalPageModule;
}());
ModalPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]
        ]
    })
], ModalPageModule);

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalPage = (function () {
    function ModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.receipient = this.navParams.get('mail_receipiennt');
        this.credentialsForm = this.formBuilder.group({
            mail_to: this.receipient,
            email: [''],
            message: ['']
        });
        this.ionViewDidLoad();
    }
    ModalPage.prototype.sendContact = function () {
        console.log('Form submit');
    };
    ModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.send = function () {
        console.log(this.credentialsForm.value);
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.get('message'));
    };
    return ModalPage;
}());
ModalPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-modal',template:/*ion-inline-start:"F:\abconference\src\pages\modal\modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Send Email</ion-title>\n    <ion-buttons end>\n      <!--<button ion-button (click)="send()">Send</button>-->\n      <button ion-button (click)="closeModal()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="credentialsForm">\n    <ion-list>\n\n      <div>\n        <ion-label stacked>Email</ion-label>\n        <ion-input style="border-bottom: thin solid gray" type="text"\n                   [formControl]="credentialsForm.controls[\'email\']"></ion-input>\n      </div>\n\n      <div>\n        <ion-label stacked>Message</ion-label>\n        <ion-textarea class="textarea" name="description"\n                      [formControl]="credentialsForm.controls[\'message\']"></ion-textarea>\n      </div>\n      <div>\n        <!--<ion-buttons stacked (click)="send()">Submit</ion-buttons>-->\n        <button ion-button style="background-color: #007aff" (click)="send()">\n          Submit\n        </button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"F:\abconference\src\pages\modal\modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]])
], ModalPage);

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map