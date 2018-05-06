import {Component, ViewChild} from '@angular/core';
import {Events, MenuController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';

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
import {UserProvider} from "../providers/user/user";

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

  // appMenuItems: Array<MenuItem>;

  helpMenuItems: Array<MenuItem>;


  loggedInPages: MenuItem[] = [
    {title: 'Home', component: HomePage, icon: 'home'},
    {title: 'Speakers', component: SpeakersPage, icon: 'ios-volume-up'},
    {title: 'Partners', component: PartnersPage, icon: 'md-reorder'},
    {title: 'Exhibitors', component: ExhibitorsPage, icon: 'ios-contact'},
    {title: 'Attendees', component: SponsorsPage, icon: 'ios-contacts'},
    {title: 'Schedule', component: SchedulePage, icon: 'ios-calendar'},
    {title: 'Breakout', component: BreakoutPage, icon: 'ios-alarm'}
  ];
  loggedOutPages: MenuItem[] = [
    {title: 'Home', component: WelcomePage, icon: 'home'},
    {title: 'Speakers', component: SpeakersPage, icon: 'ios-volume-up'},
    {title: 'Partners', component: PartnersPage, icon: 'md-reorder'},
    {title: 'Schedule', component: SchedulePage, icon: 'ios-calendar'},
    {title: 'Breakout', component: BreakoutPage, icon: 'ios-alarm'}
  ];
  rootPage: any;


  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private user: UserProvider,
              private storage: Storage,
              public menu: MenuController,
              public events: Events) {

    this.initializeApp();


    this.helpMenuItems = [
      {title: 'About', component: AboutPage, icon: 'information-circle'},
      {title: 'Contact us', component: ContactUsPage, icon: 'mail'}
    ];


    // this.storage.get('login_key').then(logged => {
    //   if (logged) {
    //     // this.appMenuItems = [];
    //     console.log(this.appMenuItems);
    //     this.appMenuItems = [
    //       {title: 'Home', component: HomePage, icon: 'home'},
    //       {title: 'Speakers', component: SpeakersPage, icon: 'ios-volume-up'},
    //       {title: 'Partners', component: PartnersPage, icon: 'md-reorder'},
    //       {title: 'Exhibitors', component: ExhibitorsPage, icon: 'ios-contact'},
    //       {title: 'Attendees', component: SponsorsPage, icon: 'ios-contacts'},
    //       {title: 'Schedule', component: SchedulePage, icon: 'ios-calendar'},
    //       {title: 'Breakout', component: BreakoutPage, icon: 'ios-alarm'}
    //     ];
    //   } else {
    //     this.appMenuItems = [
    //       {title: 'Home', component: WelcomePage, icon: 'home'},
    //       {title: 'Speakers', component: SpeakersPage, icon: 'ios-volume-up'},
    //       {title: 'Partners', component: PartnersPage, icon: 'md-reorder'},
    //       {title: 'Schedule', component: SchedulePage, icon: 'ios-calendar'},
    //       {title: 'Breakout', component: BreakoutPage, icon: 'ios-alarm'}
    //     ];
    //     console.log(this.appMenuItems);
    //   }
    // });
    // console.log(this.appMenuItems);

    // events.subscribe('user:created', (user, time) => {
    //   // user and time are the same arguments passed in `events.publish(user, time)`
    //   console.log('Welcome', user, 'at', time);
    //   if (this.user)
    //   this.appMenuItems = [
    //     // appMenuItems: Array<MenuItem> = [
    //     {title: 'Home', component: HomePage, icon: 'home'},
    //     {title: 'Speakers', component: SpeakersPage, icon: 'ios-volume-up'},
    //     {title: 'Partners', component: PartnersPage, icon: 'md-reorder'},
    //     {title: 'Exhibitors', component: ExhibitorsPage, icon: 'ios-contact'},
    //     {title: 'Attendees', component: SponsorsPage, icon: 'ios-contacts'},
    //     {title: 'Schedule', component: SchedulePage, icon: 'ios-calendar'},
    //     {title: 'Breakout', component: BreakoutPage, icon: 'ios-alarm'}
    //   ];
    //   this.nav.setRoot(HomePage);
    // });


    storage.get('login_key').then((logged) => {
      if (logged) {
        // this.nav.setRoot(HomePage);
        this.rootPage = HomePage;
      } else {
        // this.nav.setRoot(WelcomePage);
        this.rootPage = WelcomePage;
      }
    });

    this.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });
    this.enableMenu(true);

    this.listenToLoginEvents();
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    // this.events.subscribe('user:signup', () => {
    //   this.enableMenu(true);
    // });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get('login_key').then((value) => {
      return value === true;
    });
  };


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    // this.navCtrl.push(page.component);
  }

}
