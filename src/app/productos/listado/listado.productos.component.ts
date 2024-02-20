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
  items: string[] = ['id', 'nombre', 'precio', 'Cat', 'estado', 'acept' ];
  productos:Producto[]=[];
  editado:Producto|null|undefined = null;
  eliminado: Producto|null|undefined = null;
  encontrado: boolean=true;

  constructor(private _productosServicios:ProductosService){

    this.productos = _productosServicios.getProductos();
    
    this._productosServicios.productoChanged.subscribe(() => {
      this.productos = _productosServicios.getProductos();
    })
  }

  delete(producto:string):void {

    this.eliminado=this._productosServicios.delete(producto);
    this.encontrado = (this.eliminado!=null);

    setTimeout(() => {
      this.eliminado = null

      this.encontrado = true;
    }, (1000));
  }

  update(producto:string):void{
    let prod = this._productosServicios.buscarPorNombre(producto);
    if (prod!=null){
      this.editado=this._productosServicios.update(prod);
      this.encontrado = (this.editado!=null);
    }


    setTimeout(() => {
      this.editado = null;
      this.encontrado = true;
    }, (1000));

  }

  create(){

  }

  detail(producto:string):Producto{
    const prod: Producto | null = this._productosServicios.buscarPorNombre(producto);

    return <Producto>prod;
  }
}
