import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRangeComponent } from './currency-range.component';

describe('CurrencyRangeComponent', () => {
  let component: CurrencyRangeComponent;
  let fixture: ComponentFixture<CurrencyRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
