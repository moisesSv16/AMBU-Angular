import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
    private selectedIdSource = new BehaviorSubject<{ id: string, descripcion: string, imagen: string }>({ id: '', descripcion: '', imagen: '' });
    selectedId$ = this.selectedIdSource.asObservable();

  constructor() { }

  updateSelectedId(id: string, descripcion: string, imagen: string) {
    this.selectedIdSource.next({ id, descripcion,imagen });
  }
}
