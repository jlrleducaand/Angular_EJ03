import {EventEmitter, Injectable} from '@angular/core';
import {Producto} from "../productos/producto.interface";
import {Categoria} from "../productos/categoria.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private idAuto: number = 1;
  private _productos: Producto[] = [
    {id: this.idAuto++, nombre: "Bolígrafo", precio: 2.50, categoria: "Papelería", estado: "stock", aceptado: false},
    {id: this.idAuto++, nombre: "Martillo", precio: 5, categoria: "Ferretería", estado: "stock", aceptado: false},
    {id: this.idAuto++, nombre: "Cuaderno", precio: 3.50, categoria: "Papelería", estado: "stock", aceptado: false},
    {id: this.idAuto++, nombre: "Regla", precio: 1.50, categoria: "Papelería", estado: "stock", aceptado: false},
    {id: this.idAuto++, nombre: "Destornillador", precio: 4.50,  categoria: "Ferretería", estado: "stock", aceptado: false}
  ];

  private idAutoC: number = 1;
  private _categorias: Categoria[] = [
    {id: this.idAutoC++, nombre: "Ferreteria"},
    {id: this.idAutoC++, nombre: "Papeleria"},
    {id: this.idAutoC++, nombre: "Drogueria"}
  ];

  private estado: string[] = ["S/stock", "C/stock", "descontinuado"];

  productoChanged: EventEmitter<null>;
  productoBuscado: EventEmitter<null>;
  productoActualizado: EventEmitter<null>;

  categoriaChanged:EventEmitter<null>;
  categoriaBuscada:EventEmitter<null>;
  categoriaActualizada: EventEmitter<null>;

  constructor() {
    this.productoChanged = new EventEmitter;
    this.productoBuscado = new EventEmitter;
    this.productoActualizado = new EventEmitter;

    this.categoriaChanged = new EventEmitter;
    this.categoriaBuscada = new EventEmitter;
    this.categoriaActualizada = new EventEmitter;
  }

  getProductos(): Producto[] {
    return Array.from(this._productos);
  }

  delete(producto: string): Producto | null {
    let productoEliminado: Producto | null;
    let pos = this._productos.findIndex((x) => x.nombre.toLocaleLowerCase() == producto.toLocaleLowerCase());
    if (pos >= 0) {
      productoEliminado = this._productos[pos];
      this._productos.splice(pos, 1);
      this.productoChanged.emit();
    } else {
      productoEliminado = null;
    }
    return productoEliminado;
  }

  create(datos: Producto) {
    this._productos.push({...datos});
    this.productoChanged.emit();
  }

  buscarPorNombre(producto: string): Producto | null {
    let productoBuscado: Producto | null;
    let pos = this._productos.findIndex((x) => x.nombre.toLocaleLowerCase() == producto.toLocaleLowerCase());
    if (pos >= 0) {
      productoBuscado = this._productos[pos];

      this.productoBuscado.emit();
    } else {
      productoBuscado = null;
    }
    return productoBuscado;
  }

  update(producto: Producto): Producto | null{
    let productoActualizado: Producto | null;
    let pos = this._productos.findIndex((x) => x.id == producto.id);
    if (pos >= 0) {
      productoActualizado = this._productos[pos];
      productoActualizado.nombre = producto.nombre;
      productoActualizado.precio = producto.precio,
      productoActualizado.categoria = producto.categoria,
      productoActualizado.estado = producto.estado,
      productoActualizado.aceptado = producto.aceptado
      this.productoActualizado.emit();
    } else {
      productoActualizado = null;
    }
    return productoActualizado;
  }
  buscarPorId(producto: Producto): Producto | null {
    let productoBuscado: Producto | null;
    let pos = this._productos.findIndex((x) => x.id  == producto.id);
    if (pos >= 0) {
      productoBuscado = this._productos[pos];

      this.productoBuscado.emit();
    } else {
      productoBuscado = null;
    }
    return productoBuscado;
  }

  getCategorias(): Categoria[] {
    return Array.from(this._categorias);
  }


}