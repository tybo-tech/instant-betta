import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsFoundComponent } from './restaurants-found.component';

describe('RestaurantsFoundComponent', () => {
  let component: RestaurantsFoundComponent;
  let fixture: ComponentFixture<RestaurantsFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantsFoundComponent]
    });
    fixture = TestBed.createComponent(RestaurantsFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
