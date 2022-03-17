import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-dashboard-auction-applicant',
  templateUrl: './dashboard-auction-applicant.component.html',
  styleUrls: ['./dashboard-auction-applicant.component.scss']
})
export class DashboardAuctionApplicantComponent implements OnInit {

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
