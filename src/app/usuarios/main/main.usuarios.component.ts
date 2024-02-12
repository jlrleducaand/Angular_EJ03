import { Component } from '@angular/core';
import { ListadoUsuariosComponent } from '../listado/listado.usuarios.component';
import { FormularioUsuariosComponent } from '../formulario/formulario.usuarios.component';
import {FormularioProductosComponent} from "../../productos/formulario/formulario.productos.component";
import {ListadoProductosComponent} from "../../productos/listado/listado.productos.component";

@Component({
  selector: 'app-main-usuarios',
  standalone: true,
  imports: [ListadoUsuariosComponent, FormularioUsuariosComponent, FormularioProductosComponent, ListadoProductosComponent],
  templateUrl: './main.usuarios.component.html',
  styleUrl: './main.usuarios.component.css'
})
export class MainUsuariosComponent {

}
