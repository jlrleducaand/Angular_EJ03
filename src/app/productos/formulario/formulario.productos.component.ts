import {JsonPipe, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../productos.interface';


@Component({
  selector: 'app-formulario-productos',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf],
  templateUrl: './formulario.productos.component.html',
  styleUrl: './formulario.productos.component.css'
})
export class FormularioProductosComponent {
  datosFormularios:Producto = {
    nombre: "",
    precio: 0,
    categoria: ""
  }


  constructor(private _productosService:ProductosService){}

  onSubmit(f:NgForm){
    // console.log(f);
    // crearServicio(this.datosFormularios);
    if (f.valid) {
      this._productosService.crear(this.datosFormularios);
      console.log(this._productosService.getProductos());
    }

  }

}
