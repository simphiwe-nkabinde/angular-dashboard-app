import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderRuleComponent } from './components/header-rule/header-rule.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardAuctionComponent } from './pages/dashboard-auction/dashboard-auction.component';
import { DashboardAuctionDetailsComponent } from './pages/dashboard-auction-details/dashboard-auction-details.component';
import { DashboardAuctionItemsComponent } from './pages/dashboard-auction-items/dashboard-auction-items.component';
import { DashboardAuctionItemComponent } from './pages/dashboard-auction-item/dashboard-auction-item.component';
import { DashboardAuctionApplicationsComponent } from './pages/dashboard-auction-applications/dashboard-auction-applications.component';
import { DashboardAuctionApplicantComponent } from './pages/dashboard-auction-applicant/dashboard-auction-applicant.component';
import { CardAuctionComponent } from './components/card-auction/card-auction.component';
import { CardAuctionMenuItemComponent } from './components/card-auction-menu-item/card-auction-menu-item.component';
import { CardAuctionItemComponent } from './components/card-auction-item/card-auction-item.component';
import { ApplicantCardComponent } from './components/applicant-card/applicant-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderRuleComponent,
    DashboardComponent,
    DashboardAuctionComponent,
    DashboardAuctionDetailsComponent,
    DashboardAuctionItemsComponent,
    DashboardAuctionItemComponent,
    DashboardAuctionApplicationsComponent,
    DashboardAuctionApplicantComponent,
    CardAuctionComponent,
    CardAuctionMenuItemComponent,
    CardAuctionItemComponent,
    ApplicantCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
