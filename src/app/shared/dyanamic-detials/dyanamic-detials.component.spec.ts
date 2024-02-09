import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyanamicDetialsComponent } from './dyanamic-detials.component';

describe('DyanamicDetialsComponent', () => {
  let component: DyanamicDetialsComponent;
  let fixture: ComponentFixture<DyanamicDetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DyanamicDetialsComponent]
    });
    fixture = TestBed.createComponent(DyanamicDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
