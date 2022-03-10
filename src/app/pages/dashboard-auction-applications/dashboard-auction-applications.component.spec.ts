import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAuctionApplicationsComponent } from './dashboard-auction-applications.component';

describe('DashboardAuctionApplicationsComponent', () => {
  let component: DashboardAuctionApplicationsComponent;
  let fixture: ComponentFixture<DashboardAuctionApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAuctionApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAuctionApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
