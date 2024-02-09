import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapEmbedComponent } from './map-embed.component';

describe('MapEmbedComponent', () => {
  let component: MapEmbedComponent;
  let fixture: ComponentFixture<MapEmbedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapEmbedComponent]
    });
    fixture = TestBed.createComponent(MapEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
