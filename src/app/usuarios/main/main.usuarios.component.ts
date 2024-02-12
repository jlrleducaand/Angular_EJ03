import { Component } from '@angular/core';
import { ListadoUsuariosComponent } from '../listado/listado.usuarios.component';
import { FormularioUsuariosComponent } from '../formulario/formulario.usuarios.component';
import {FormularioCrearProductosComponent} from "../../productos/formularioCrear/formularioCrear.productos.component";
import {ListadoProductosComponent} from "../../productos/listado/listado.productos.component";

@Component({
  selector: 'app-main-usuarios',
  standalone: true,
  imports: [ListadoUsuariosComponent, FormularioUsuariosComponent, FormularioCrearProductosComponent, ListadoProductosComponent],
  templateUrl: './main.usuarios.component.html',
  styleUrl: './main.usuarios.component.css'
})
export class MainUsuariosComponent {

}
