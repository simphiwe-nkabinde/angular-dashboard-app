import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-card',
  templateUrl: './applicant-card.component.html',
  styleUrls: ['./applicant-card.component.scss']
})
export class ApplicantCardComponent implements OnInit {
  @Input() color = '';
  @Input() status = '';
  @Input() icon = '';

  constructor() { }

  ngOnInit(): void {
  }

}
