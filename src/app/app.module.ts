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
// import {FCM} from "@ionic-native/fcm";
import {EmailService} from "../services/email-service";
import {GlobalVars} from "../providers/global-vars";
import {PartnersDetailsPage} from "../pages/partners-details/partners-details";
import {HomePageModule} from "../pages/home/home.module";
import {BreakoutPageModule} from "../pages/breakout/breakout.module";
import {ContactUsPageModule} from "../pages/contact-us/contact-us.module";
import {EventPageModule} from "../pages/event/event.module";
import {ExhibitorsPageModule} from "../pages/exhibitors/exhibitors.module";
import {SchedulePageModule} from "../pages/schedule/schedule.module";
import {SpeakersPageModule} from "../pages/speakers/speakers.module";
import {SponsorsPageModule} from "../pages/sponsors/sponsors.module";
import {ExhibitorsDetailsPageModule} from "../pages/exhibitors-details/exhibitors-details.module";
// import { DatabaseProvider } from '..\providers\database/database';

import { IonicStorageModule } from '@ionic/storage';
import { DatabaseProvider } from '../providers/database/database';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import {UserProvider} from "../providers/user/user";
import {ListPage} from "../pages/list/list";
import {AttendeeDetailsPageModule} from "../pages/attendee-details/attendee-details.module";
import {PartnersPageModule} from "../pages/partners/partners.module";

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    PropertyListPage,
    PropertyDetailPage,
    FavoriteListPage,
    ListPage,
    BrokerListPage,
    BrokerDetailPage,
    WelcomePage,
    PartnersDetailsPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomePageModule,
    BreakoutPageModule,
    ContactUsPageModule,
    EventPageModule,
    ExhibitorsPageModule,
    SchedulePageModule,
    SpeakersPageModule,
    PartnersPageModule,
    AttendeeDetailsPageModule,
    SponsorsPageModule,
    ExhibitorsDetailsPageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    PropertyListPage,
    PropertyDetailPage,
    PartnersDetailsPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,
    WelcomePage,
    ListPage,
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
    UserProvider,
    GlobalVars,
    DatabaseProvider,
    SQLitePorter,
    SQLite,
    // FCM,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
