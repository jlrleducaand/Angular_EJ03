import { Component } from '@angular/core';
import {NgFor, NgIf} from "@angular/common";
import { Usuario} from "../usuario.interface";
import {UsuariosService} from "../../services/usuarios.service";

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './listado.usuarios.component.html',
  styleUrl: './listado.usuarios.component.css'
})
export class ListadoUsuariosComponent {
  usuarios:Usuario[]= [];

  eliminado:Usuario|null|undefined= null;
  encontrado: boolean=true;


  constructor(private _usuariosServicios:UsuariosService) {
    this.usuarios = _usuariosServicios.getUsuarios();

    this._usuariosServicios.usuariosChanged.subscribe(() => {
      this.usuarios = _usuariosServicios.getUsuarios();
    })

  }
    eliminar(usuario:string):void {

      this.eliminado=this._usuariosServicios.eliminar(usuario);
      this.encontrado = (this.eliminado!=null);

      setTimeout(() => {
      this.eliminado = null;
      this.encontrado = true;
    }, (1000));
  }

}

