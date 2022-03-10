import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAuctionDetailsComponent } from './dashboard-auction-details.component';

describe('DashboardAuctionDetailsComponent', () => {
  let component: DashboardAuctionDetailsComponent;
  let fixture: ComponentFixture<DashboardAuctionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAuctionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAuctionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
