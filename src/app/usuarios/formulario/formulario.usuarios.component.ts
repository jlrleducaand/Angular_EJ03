import {JsonPipe, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {Usuario} from "../usuario.interface";
import {UsuariosService} from "../../services/usuarios.service";


@Component({
  selector: 'app-formulario-usuarios',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf],
  templateUrl: './formulario.usuarios.component.html',
  styleUrl: './formulario.usuarios.component.css'
})
export class FormularioUsuariosComponent {
  datosFormularios:Usuario = {
    nombre: "",
    edad: 0,
    email:"",
    profesion: ""
  }


  constructor(private _usuariosService:UsuariosService){}

  onSubmit(f:NgForm){
    // console.log(f);
    // crearServicio(this.datosFormularios);
    if (f.valid) {
      this._usuariosService.crear(this.datosFormularios);
      console.log(this._usuariosService.getUsuarios());
    }

  }

}
