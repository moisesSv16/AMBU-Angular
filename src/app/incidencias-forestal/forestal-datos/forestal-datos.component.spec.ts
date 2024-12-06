import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestalDatosComponent } from './forestal-datos.component';

describe('ForestalDatosComponent', () => {
  let component: ForestalDatosComponent;
  let fixture: ComponentFixture<ForestalDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForestalDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForestalDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
