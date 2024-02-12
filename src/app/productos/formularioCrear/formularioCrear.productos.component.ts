import {JsonPipe, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../producto.interface';


@Component({
  selector: 'app-formularioCrear-productos',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf],
  templateUrl: './formularioCrear.productos.component.html',
  styleUrl: './formularioCrear.productos.component.css'
})
export class FormularioCrearProductosComponent {
  datosFormularios:Producto = {
    id:1,
    nombre: "",
    precio: 0,
    categoria: "",
    estado:"",
    aceptado:false
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
