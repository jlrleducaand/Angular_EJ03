import { Injectable } from '@angular/core';
import { Producto } from '../productos/productos.module';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private idAuto:number=1;

  private _productos: Producto[]= [
    {id: this.idAuto++, nombre: "Bolígrafo", precio: 2.50, categoria: "Papelería",estado:"stock", aceptado: false},
    {id: this.idAuto++, nombre: "Martillo", precio: 5, categoria: "Ferretería",estado:"stock", aceptado: false},
    {id: this.idAuto++, nombre: "Cuaderno", precio: 3.50, categoria: "Papelería",estado:"stock", aceptado: false},
    {id: this.idAuto++, nombre: "Regla", precio: 1.50, categoria: "Papelería",estado:"stock", aceptado: false},
    {id: this.idAuto++, nombre: "Destornillador", precio: 4.50, categoria: "Ferretería",estado:"stock", aceptado: false}
  ]

  private categoria=[
    {codigo: "Fer", nombre: "Ferreteria"},
    {codigo: "Pap", nombre: "Papeleria"},
    {codigo: "Her", nombre: "Herramientas"}
  ];

  private estado:string[]= ["S/stock", "stock", "descontinuado"];


  productosChanged:EventEmitter<null>;
  productoBuscado:EventEmitter<null>;
  productoAcualizado:EventEmitter<null>;

  constructor() { 
    this.productosChanged = new EventEmitter;
    this.productoBuscado = new EventEmitter;
    this.productoAcualizado = new EventEmitter;
  }

  getProductos():Producto[]{
    return Array.from(this._productos);
  }

  eliminar(producto:string):Producto|null {
    let productoEliminado:Producto|null;

    let pos=this._productos.findIndex((x)=> x.nombre.toLocaleLowerCase() == producto.toLocaleLowerCase() );
    if(pos>=0) {
      productoEliminado = this._productos[pos];
      this._productos.splice(pos, 1);
      this.productosChanged.emit();
    } else {
      productoEliminado=null;
    }
    return productoEliminado;
  }

  crear(datos:Producto){
    this._productos.push({...datos});
    this.productosChanged.emit();
  }

  buscar(producto:string):Producto|null {
    let productoEncontrado:Producto|null;
    let res = null;
    let pos=this._productos.findIndex((x)=> x.nombre.toLocaleLowerCase() == producto.toLocaleLowerCase() );
    if(pos>=0) {
      productoEncontrado = this._productos[pos];
      this.productoBuscado.emit();
      res = productoEncontrado;
    }
    return res;
  }

  editar(datos:Producto):void{
    let productoActualizado:Producto|null;
    let res = null;
    let pos=this._productos.findIndex((x)=> x.nombre.toLocaleLowerCase() == datos.nombre.toLocaleLowerCase() );
    if(pos>=0) {
      productoActualizado = this._productos[pos];
      productoActualizado.nombre = datos.nombre;
      productoActualizado.precio = datos.precio,
      productoActualizado.categoria =    datos.categoria,
      productoActualizado.estado =    datos.estado,
      productoActualizado.aceptado =    datos.aceptado
      this.productosChanged.emit();
    }
  }


}
