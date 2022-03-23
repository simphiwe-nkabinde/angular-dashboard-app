import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardAuctionComponent } from './pages//dashboard-auction/dashboard-auction.component';
import { DashboardAuctionBidderComponent } from './pages/dashboard-auction-bidder/dashboard-auction-bidder.component';
import { DashboardAuctionBiddersComponent } from './pages/dashboard-auction-bidders/dashboard-auction-bidders.component';
import { DashboardAuctionDetailsComponent } from './pages/dashboard-auction-details/dashboard-auction-details.component';
import { DashboardAuctionItemComponent } from './pages/dashboard-auction-item/dashboard-auction-item.component';
import { DashboardAuctionItemsComponent } from './pages/dashboard-auction-items/dashboard-auction-items.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/auction', component: DashboardAuctionComponent },
  { path: 'dashboard/auction/bidder', component: DashboardAuctionBidderComponent },
  { path: 'dashboard/auction/bidders', component: DashboardAuctionBiddersComponent },
  { path: 'dashboard/auction/details', component: DashboardAuctionDetailsComponent },
  { path: 'dashboard/auction/item', component: DashboardAuctionItemComponent },
  { path: 'dashboard/auction/items', component: DashboardAuctionItemsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
