import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackHeadingComponent } from './back-heading.component';

describe('BackHeadingComponent', () => {
  let component: BackHeadingComponent;
  let fixture: ComponentFixture<BackHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackHeadingComponent]
    });
    fixture = TestBed.createComponent(BackHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
