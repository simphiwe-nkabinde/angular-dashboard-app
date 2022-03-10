import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRuleComponent } from './header-rule.component';

describe('HeaderRuleComponent', () => {
  let component: HeaderRuleComponent;
  let fixture: ComponentFixture<HeaderRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
