import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSchemaListComponent } from './app-schema-list.component';

describe('AppSchemaListComponent', () => {
  let component: AppSchemaListComponent;
  let fixture: ComponentFixture<AppSchemaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSchemaListComponent]
    });
    fixture = TestBed.createComponent(AppSchemaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
