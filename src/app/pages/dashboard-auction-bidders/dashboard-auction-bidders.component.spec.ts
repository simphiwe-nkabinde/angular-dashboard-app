import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAuctionBiddersComponent } from './dashboard-auction-bidders.component';

describe('DashboardAuctionBiddersComponent', () => {
  let component: DashboardAuctionBiddersComponent;
  let fixture: ComponentFixture<DashboardAuctionBiddersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAuctionBiddersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAuctionBiddersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
