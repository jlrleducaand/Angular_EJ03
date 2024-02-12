import { Component } from '@angular/core';
import { ListadoProductosComponent } from '../listado/listado.productos.component';
import { FormularioProductosComponent } from '../formulario/formulario.productos.component';

@Component({
  selector: 'app-main-productos',
  standalone: true,
  imports: [ListadoProductosComponent, FormularioProductosComponent],
  templateUrl: './main.productos.component.html',
  styleUrl: './main.productos.component.css'
})
export class MainProductosComponent {

}
