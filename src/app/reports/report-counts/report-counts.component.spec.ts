import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCountsComponent } from './report-counts.component';

describe('ReportCountsComponent', () => {
  let component: ReportCountsComponent;
  let fixture: ComponentFixture<ReportCountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportCountsComponent]
    });
    fixture = TestBed.createComponent(ReportCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
