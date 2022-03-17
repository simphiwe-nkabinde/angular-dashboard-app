import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardAuctionComponent } from './pages//dashboard-auction/dashboard-auction.component';
import { DashboardAuctionApplicantComponent } from './pages/dashboard-auction-applicant/dashboard-auction-applicant.component';
import { DashboardAuctionApplicationsComponent } from './pages/dashboard-auction-applications/dashboard-auction-applications.component';
import { DashboardAuctionDetailsComponent } from './pages/dashboard-auction-details/dashboard-auction-details.component';
import { DashboardAuctionItemComponent } from './pages/dashboard-auction-item/dashboard-auction-item.component';
import { DashboardAuctionItemsComponent } from './pages/dashboard-auction-items/dashboard-auction-items.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/auction', component: DashboardAuctionComponent },
  { path: 'dashboard/auction/applicant', component: DashboardAuctionApplicantComponent },
  { path: 'dashboard/auction/applications', component: DashboardAuctionApplicationsComponent },
  { path: 'dashboard/auction/details', component: DashboardAuctionDetailsComponent },
  { path: 'dashboard/auction/item', component: DashboardAuctionItemComponent },
  { path: 'dashboard/auction/items', component: DashboardAuctionItemsComponent },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
