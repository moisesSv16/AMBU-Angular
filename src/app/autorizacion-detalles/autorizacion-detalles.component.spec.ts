import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizacionDetallesComponent } from './autorizacion-detalles.component';

describe('AutorizacionDetallesComponent', () => {
  let component: AutorizacionDetallesComponent;
  let fixture: ComponentFixture<AutorizacionDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutorizacionDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutorizacionDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
