import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSchemaComponent } from './app-schema.component';

describe('AppSchemaComponent', () => {
  let component: AppSchemaComponent;
  let fixture: ComponentFixture<AppSchemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSchemaComponent]
    });
    fixture = TestBed.createComponent(AppSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
