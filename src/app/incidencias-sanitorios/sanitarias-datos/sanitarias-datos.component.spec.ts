import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common'; 
import { SanitariasDatosComponent } from './sanitarias-datos.component';

describe('SanitariasDatosComponent', () => {
  let component: SanitariasDatosComponent;
  let fixture: ComponentFixture<SanitariasDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SanitariasDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanitariasDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
