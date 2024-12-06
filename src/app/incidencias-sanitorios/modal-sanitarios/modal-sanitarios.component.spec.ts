import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSanitariosComponent } from './modal-sanitarios.component';

describe('ModalSanitariosComponent', () => {
  let component: ModalSanitariosComponent;
  let fixture: ComponentFixture<ModalSanitariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalSanitariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSanitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
