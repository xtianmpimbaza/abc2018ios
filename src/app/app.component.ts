import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';
import {SpeakersPage} from "../pages/speakers/speakers";
import {PartnersPage} from "../pages/partners/partners";
import {ExhibitorsPage} from "../pages/exhibitors/exhibitors";
import {SponsorsPage} from "../pages/sponsors/sponsors";
import {SchedulePage} from "../pages/schedule/schedule";
import {BreakoutPage} from "../pages/breakout/breakout";
import {HomePage} from "../pages/home/home";
import {ContactUsPage} from "../pages/contact-us/contact-us";
// import {FCM} from "@ionic-native/fcm";

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = WelcomePage;

    appMenuItems: Array<MenuItem>;

    accountMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
      // this.fcm.getToken().then(token => {
      //   // Your best bet is to here store the token on the user's profile on the
      //   // Firebase database, so that when you want to send notifications to this
      //   // specific user you can do it from Cloud Functions.
      //
      // });
        this.initializeApp();

        if (this.isLogedIn()){
          this.appMenuItems = [
            {title: 'Home', component: HomePage, icon: 'home'},
            {title: 'Speakers', component: SpeakersPage, icon: 'ios-volume-up'},
            {title: 'Partners', component: PartnersPage, icon: 'md-reorder'},
            {title: 'Exhibitors', component: ExhibitorsPage, icon: 'ios-contact'},
            {title: 'Attendees', component: SponsorsPage, icon: 'ios-contacts'},
            {title: 'Schedule', component: SchedulePage, icon: 'ios-calendar'},
            {title: 'Breakout', component: BreakoutPage, icon: 'ios-alarm'}
          ];
        } else {
          this.appMenuItems = [
            {title: 'Home', component: WelcomePage, icon: 'home'},
            {title: 'Speakers', component: SpeakersPage, icon: 'ios-volume-up'},
            {title: 'Partners', component: PartnersPage, icon: 'md-reorder'},
            {title: 'Schedule', component: SchedulePage, icon: 'ios-calendar'},
            {title: 'Breakout', component: BreakoutPage, icon: 'ios-alarm'}
          ];
        }



        this.accountMenuItems = [
            {title: 'Book a seat', component: WelcomePage, icon: 'ios-contact'},
            // {title: 'Login', component: LoginPage, icon: 'md-log-in'}
        ];

        this.helpMenuItems = [
            // {title: 'Location', component: EventmapPage, icon: 'ios-map'},
            {title: 'About', component: AboutPage, icon: 'information-circle'},
            {title: 'Contact us', component: ContactUsPage, icon: 'mail'}
        ];

    }

  isLogedIn(){
      return true;
  }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        // this.navCtrl.push(page.component);
    }
}
