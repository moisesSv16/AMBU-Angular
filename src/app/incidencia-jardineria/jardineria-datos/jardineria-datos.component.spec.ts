import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JardineriaDatosComponent } from './jardineria-datos.component';

describe('JardineriaDatosComponent', () => {
  let component: JardineriaDatosComponent;
  let fixture: ComponentFixture<JardineriaDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JardineriaDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JardineriaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
