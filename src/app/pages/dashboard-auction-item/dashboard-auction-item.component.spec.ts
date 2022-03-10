import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAuctionItemComponent } from './dashboard-auction-item.component';

describe('DashboardAuctionItemComponent', () => {
  let component: DashboardAuctionItemComponent;
  let fixture: ComponentFixture<DashboardAuctionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAuctionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAuctionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
