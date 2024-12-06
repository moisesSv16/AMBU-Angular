import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaDatosComponent } from './cinema-datos.component';

describe('CinemaDatosComponent', () => {
  let component: CinemaDatosComponent;
  let fixture: ComponentFixture<CinemaDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CinemaDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CinemaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
