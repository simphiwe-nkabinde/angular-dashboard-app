import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAuctionApplicantComponent } from './dashboard-auction-applicant.component';

describe('DashboardAuctionApplicantComponent', () => {
  let component: DashboardAuctionApplicantComponent;
  let fixture: ComponentFixture<DashboardAuctionApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAuctionApplicantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAuctionApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
