import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAuctionComponent } from './dashboard-auction.component';

describe('DashboardAuctionComponent', () => {
  let component: DashboardAuctionComponent;
  let fixture: ComponentFixture<DashboardAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAuctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
