import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideCardComponent } from './wide-card.component';

describe('WideCardComponent', () => {
  let component: WideCardComponent;
  let fixture: ComponentFixture<WideCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WideCardComponent]
    });
    fixture = TestBed.createComponent(WideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
