import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAuctionBidderComponent } from './dashboard-auction-bidder.component';

describe('DashboardAuctionBidderComponent', () => {
  let component: DashboardAuctionBidderComponent;
  let fixture: ComponentFixture<DashboardAuctionBidderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAuctionBidderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAuctionBidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
