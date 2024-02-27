import { Component, OnInit} from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Producto } from '../productos.module';
import { ProductosService } from '../../services/productos.service';
import {FormularioProductosComponent} from "../formulario/formulario.productos.component";

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './listado.productos.component.html',
  styleUrl: './listado.productos.component.css'
})
export class ListadoProductosComponent {
  productos:Producto[]=[];
  pEditar:Producto|null|undefined   = null;
  pEliminar: Producto|null|undefined= null;
  pBuscar:Producto|null|undefined   = null;

  hecho: boolean=false;

  constructor(private _productosServicios:ProductosService){
    this.productos=this._productosServicios.getProductos().sort((a, b) => a.id - b.id);

    this._productosServicios.eProductoEditado.subscribe(() => {
      this.productos=this._productosServicios.getProductos().sort((a, b) => a.id - b.id);
    })
    this._productosServicios.eProductoEliminado.subscribe(() => {
      this.productos=this._productosServicios.getProductos().sort((a, b) => a.id - b.id);
    })
    this._productosServicios.eProductoBuscado.subscribe(() => {
      this.productos=this._productosServicios.getProductos().sort((a, b) => a.id - b.id);
    })
    this._productosServicios.eProductoCreado.subscribe(() => {
      this.productos=this._productosServicios.getProductos().sort((a, b) => a.id - b.id);
    })
  }

    ngOnInit():void {
    }



  eliminar(pro:Producto):void {
    this.pEliminar=this._productosServicios.eliminar(pro);
    this.hecho = (this.pEliminar!=null);

    console.log("Eliminando");
    setTimeout(() => {
      this.pEliminar = null;
      this.hecho = (this.pEliminar!=null);
    }, (1000));
  }

  editar(prod:Producto):void{
    this._productosServicios.eProductoEditado.emit(prod);
    this.pEditar = prod;
    this.hecho = (this.pEditar != null);

    console.log("Editando");
    setTimeout(() => {
      this.pEditar = null;
      this.hecho = (this.pEditar!=null);
    }, (1000));
  }

  buscar(nombre:string):void{
    this.pBuscar = this._productosServicios.buscar(nombre);
    this.hecho = (this.pBuscar != null);

    console.log("Buscando")
     setTimeout(() => {
       this.pBuscar = null;
       this.hecho = (this.pBuscar!=null);
     }, (1000));
  }

}
