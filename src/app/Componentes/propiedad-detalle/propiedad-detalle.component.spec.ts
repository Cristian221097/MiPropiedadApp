import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadDetalleComponent } from './propiedad-detalle.component';

describe('PropiedadDetalleComponent', () => {
  let component: PropiedadDetalleComponent;
  let fixture: ComponentFixture<PropiedadDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropiedadDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
