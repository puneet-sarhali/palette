import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
