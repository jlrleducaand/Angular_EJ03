import { Component } from '@angular/core';
import { ListadoProductosComponent } from '../listado/listado.productos.component';
import { FormularioCrearProductosComponent } from '../formularioCrear/formularioCrear.productos.component';

@Component({
  selector: 'app-main-productos',
  standalone: true,
  imports: [ListadoProductosComponent, FormularioCrearProductosComponent],
  templateUrl: './main.productos.component.html',
  styleUrl: './main.productos.component.css'
})
export class MainProductosComponent {

}
