import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFaunaComponent } from './modal-fauna.component';

describe('ModalFaunaComponent', () => {
  let component: ModalFaunaComponent;
  let fixture: ComponentFixture<ModalFaunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalFaunaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFaunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
