import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAuctionMenuItemComponent } from './card-auction-menu-item.component';

describe('CardAuctionMenuItemComponent', () => {
  let component: CardAuctionMenuItemComponent;
  let fixture: ComponentFixture<CardAuctionMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAuctionMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAuctionMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
