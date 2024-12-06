import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  username: string = "";
password: string= "";

onSubmit(){
  console.log('Username', this.username);
  console.log('Password', this.password);
}

}
