import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data-forestal.service';


@Component({
  selector: 'app-modal-forestal',
  templateUrl: './modal-forestal.component.html',
  styleUrl: './modal-forestal.component.css'
})
export class ModalForestalComponent {
  selectedId: string = '';
  selectedDesc: string = '';
  selectedImg: string = '';

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.selectedId$.subscribe(({ id, descripcion, imagen }) => {
      this.selectedId = id;
      this.selectedDesc = descripcion;
      this.selectedImg = imagen;
    });
  }

  getImagenUrl(imagen: string): string {
    // Ajusta esta lógica según sea necesario para formar la URL correcta
    return `http://127.0.0.1:8000/${imagen}`;
  }
}
