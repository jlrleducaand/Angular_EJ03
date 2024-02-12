import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Producto } from '../productos.module';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-formulario-editar-producto',
  standalone: true,
  imports: [],
  templateUrl: './formulario-editar.productos.component.html',
  styleUrl: './formulario-editar.productos.component.css'
})


export class FormularioEditarProductosComponent {
  productos:Producto[]=[];
  editado:Producto|null|undefined = null;
  encontrado: boolean=true;

  datosFormularios:Producto = {
    id:1,
    nombre: "",
    precio: 0,
    categoria: "",
    estado:"",
    aceptado:false
  }
  constructor(private _productosServicios:ProductosService){

    this.productos = _productosServicios.getProductos();

    this._productosServicios.productosChanged.subscribe(() => {
      this.productos = _productosServicios.getProductos();
    })
  }

  editar(datos:string):void {

    this.eliminado=this._productosServicios.eliminar(producto);
    this.encontrado = (this.eliminado!=null);

    setTimeout(() => {
      this.eliminado = null;
      this.encontrado = true;
    }, (1000));
  }
}
