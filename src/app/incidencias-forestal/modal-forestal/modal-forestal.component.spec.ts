import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalForestalComponent } from './modal-forestal.component';

describe('ModalForestalComponent', () => {
  let component: ModalForestalComponent;
  let fixture: ComponentFixture<ModalForestalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalForestalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalForestalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
