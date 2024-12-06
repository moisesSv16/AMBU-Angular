import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaunaDatosComponent } from './fauna-datos.component';

describe('FaunaDatosComponent', () => {
  let component: FaunaDatosComponent;
  let fixture: ComponentFixture<FaunaDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaunaDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaunaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
