import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Producto } from '../productos.module';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './listado.productos.component.html',
  styleUrl: './listado.productos.component.css'
})
export class ListadoProductosComponent {
  productos:Producto[]=[];
  editado:Producto|null|undefined = null;
  eliminado: Producto|null|undefined = null;
  encontrado: boolean=true;

  constructor(private _productosServicios:ProductosService){

    this.productos = _productosServicios.getProductos();
    
    this._productosServicios.productosChanged.subscribe(() => {
      this.productos = _productosServicios.getProductos();
    })
  }

  eliminar(producto:string):void {

    this.eliminado=this._productosServicios.eliminar(producto);
    this.encontrado = (this.eliminado!=null);

    setTimeout(() => {
      this.eliminado = null;
      this.encontrado = true;
    }, (1000));
  }

  editar(producto:string):Producto{
    this.editado=this._productosServicios.buscar(producto);
    this.encontrado = (this.editado!=null);

    setTimeout(() => {
      this.editado = null;
      this.encontrado = true;
    }, (1000));

    return <Producto>this.editado;
  }
}
