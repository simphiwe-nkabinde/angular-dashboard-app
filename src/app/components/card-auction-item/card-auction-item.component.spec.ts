import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAuctionItemComponent } from './card-auction-item.component';

describe('CardAuctionItemComponent', () => {
  let component: CardAuctionItemComponent;
  let fixture: ComponentFixture<CardAuctionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAuctionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAuctionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
