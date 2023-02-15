import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { ClipboardModule } from '@angular/cdk/clipboard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { AvatarComponent } from './dashboard/avatar/avatar.component';
import { BackdropComponent } from './dashboard/backdrop/backdrop.component';
import { StatsComponent } from './dashboard/stats/stats.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { CoursesComponent } from './dashboard/courses/courses.component';
import { ColorsComponent } from './colors/colors.component';
import { BannerComponent } from './dashboard/banner/banner.component';
import { LandingComponent } from './landing/landing.component';
import { CopyComponent } from './copy/copy.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { LgDashboardComponent } from './views/lg-dashboard/lg-dashboard.component';
import { FeedbackPageComponent } from './views/feedback-page/feedback-page.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { Portfolio2Component } from './views/portfolio2/portfolio2.component';
import { Landing2Component } from './views/landing2/landing2.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { EmailComponent } from './email/email.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    AvatarComponent,
    BackdropComponent,
    StatsComponent,
    NotificationComponent,
    CoursesComponent,
    ColorsComponent,
    BannerComponent,
    LandingComponent,
    CopyComponent,
    LandingPageComponent,
    PortfolioComponent,
    LgDashboardComponent,
    FeedbackPageComponent,
    ErrorPageComponent,
    PortfolioComponent,
    Portfolio2Component,
    Landing2Component,
    EmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClipboardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance())
  ],
  providers: [
    ScreenTrackingService, UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
