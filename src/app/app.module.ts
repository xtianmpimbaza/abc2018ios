import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {PropertyListPage} from '../pages/property-list/property-list';
import {PropertyDetailPage} from '../pages/property-detail/property-detail';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {BrokerDetailPage} from '../pages/broker-detail/broker-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';

import {PropertyService} from "../providers/property-service-mock";
import {BrokerService} from "../providers/broker-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SponsorService} from "../providers/sponsor-service-mock";
import {ScheduleOneService} from "../providers/schedule-service";
import {ScheduleTwoService} from "../providers/scheduletwo-service";
import {BreakoutService} from "../services/breakout-service";
import {EmailComposer} from "@ionic-native/email-composer";
import {AttendeesService} from "../services/attendees-service";
import {AttendeeDetailsPage} from "../pages/attendee-details/attendee-details";
// import {FCM} from "@ionic-native/fcm";
import {EmailService} from "../services/email-service";
import {GlobalVars} from "../providers/global-vars";

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    AttendeeDetailsPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,
    WelcomePage,
    AboutPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    AttendeeDetailsPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,
    WelcomePage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PropertyService,
    SponsorService,
    BrokerService,
    BreakoutService,
    ScheduleOneService,
    ScheduleTwoService,
    AttendeesService,
    EmailService,
    EmailComposer,
    GlobalVars,
    // FCM,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
