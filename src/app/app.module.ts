import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEditorModule } from 'ngx-editor';

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
import { AccountComponent } from './pages/account/account.component';

NgxEditorModule.forRoot({
  locals: {
    // menu
    bold: 'Bold',
    italic: 'Italic',
    code: 'Code',
    underline: 'Underline',
    strike: 'Strike',
    blockquote: 'Blockquote',
    bullet_list: 'Bullet List',
    ordered_list: 'Ordered List',
    heading: 'Heading',
    h1: 'Header 1',
    h2: 'Header 2',
    h3: 'Header 3',
    h4: 'Header 4',
    h5: 'Header 5',
    h6: 'Header 6',
    align_left: 'Left Align',
    align_center: 'Center Align',
    align_right: 'Right Align',
    align_justify: 'Justify',
    text_color: 'Text Color',
    background_color: 'Background Color',

    // pupups, forms, others...
    url: 'URL',
    text: 'Text',
    openInNewTab: 'Open in new tab',
    insert: 'Insert',
    altText: 'Alt Text',
    title: 'Title',
    remove: 'Remove',
  },
})

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
    ApplicantCardComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
