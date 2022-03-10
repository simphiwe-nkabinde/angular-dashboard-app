import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAuctionItemsComponent } from './dashboard-auction-items.component';

describe('DashboardAuctionItemsComponent', () => {
  let component: DashboardAuctionItemsComponent;
  let fixture: ComponentFixture<DashboardAuctionItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAuctionItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAuctionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
