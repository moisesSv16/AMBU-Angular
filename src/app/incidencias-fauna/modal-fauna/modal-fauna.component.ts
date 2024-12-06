import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data-fauna.service';

@Component({
  selector: 'app-modal-fauna',
  templateUrl: './modal-fauna.component.html',
  styleUrl: './modal-fauna.component.css'
})
export class ModalFaunaComponent {
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
