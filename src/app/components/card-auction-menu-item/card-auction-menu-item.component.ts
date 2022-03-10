import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-auction-menu-item',
  templateUrl: './card-auction-menu-item.component.html',
  styleUrls: ['./card-auction-menu-item.component.scss']
})
export class CardAuctionMenuItemComponent implements OnInit {

  @Input() title = '';
  @Input() icon = '';  //class name of bootstrap icon
  @Input() route = '';
  @Input() count = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
