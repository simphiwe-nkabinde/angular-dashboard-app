import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-dashboard-auction-bidder',
  templateUrl: './dashboard-auction-bidder.component.html',
  styleUrls: ['./dashboard-auction-bidder.component.scss']
})
export class DashboardAuctionBidderComponent implements OnInit {

  showDocuments: boolean = true;
  showDetails: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showHideSection(section: string) {
    switch (section) {
      case 'documents':
        this.showDocuments = !this.showDocuments;
        break;
      case 'details':
        this.showDetails = !this.showDetails;
        break;
    }
  }
}
