import {EventEmitter, Injectable} from '@angular/core';
import {Producto} from '../productos/productos.module';


@Injectable({
    providedIn: 'root'
})

export class ProductosService {
    cat:string[] = ["Carpintería", "Ferretería", "Papelería"];
    rStock:string[] = ["Stock", "Minimos"];
    descont:boolean = false;

    //  En la practica se alimenta de la base de datos
    id: number = 1;
    private _productos: Producto[] = [
        {id: this.id++, nombre: "Bolígrafo", precio: 2.50, categoria: "Papelería", radStock: "Stock", nStock: 20, descont: false},
        {id: this.id++, nombre: "Martillo", precio: 5, categoria: "Ferretería", radStock: "Minimos", nStock: 20, descont: true},
        {id: this.id++, nombre: "Cuaderno", precio: 3.50, categoria: "Papelería", radStock: "Stock", nStock: 20, descont: false},
        {id: this.id++, nombre: "Regla", precio: 1.50, categoria: "Papelería", radStock: "Minimos", nStock: 20, descont: true},
        {id: this.id++, nombre: "Destornillador", precio: 4.50, categoria: "Ferretería", radStock: "Stock", nStock: 20, descont: false}
    ]

    eProductoEliminado: EventEmitter<Producto>;
    eProductoBuscado: EventEmitter<Producto>;
    eProductoEditado: EventEmitter<Producto>;
    eProductoCreado: EventEmitter<Producto>;

    constructor() {
        this.eProductoEliminado = new EventEmitter<Producto>();
        this.eProductoBuscado = new EventEmitter<Producto>();
        this.eProductoCreado = new EventEmitter<Producto>();
        this.eProductoEditado = new EventEmitter<Producto>();
    }


    getProductos(): Producto[] {
        return Array.from(this._productos);
    }

    buscar(nombre: String): Producto | null {
        let productoBuscado: Producto | null;

        let pos = this._productos.findIndex((x) => x.nombre.toLowerCase() == nombre.toLowerCase());
        if (pos >= 0) {
            productoBuscado = this._productos[pos];
            this.eProductoBuscado.emit(productoBuscado);
        } else {
            productoBuscado = null;
        }
        return productoBuscado;
    }


    eliminar(prod: Producto): Producto | null {
        let productoEliminado: Producto | null;

        let pos = this._productos.findIndex((x) => x.id == prod.id);
        if (pos >= 0) {
            productoEliminado = this._productos[pos];
            this._productos.splice(pos, 1);
            this.eProductoEliminado.emit(prod);
        } else {
            productoEliminado = null;
        }
        return productoEliminado;
    }

    crear(prod: Producto): Producto {
        this._productos.push({...prod});
        this.eProductoCreado.emit(prod);
        return prod;
    }



    editar(prod: Producto): Producto | null {

        let pos = this._productos.findIndex((x) => x.id == prod.id);
        let productoEditado: Producto | null;
        if (pos >= 0) {
            this._productos[pos] = ({...prod});
            productoEditado = this._productos[pos];
            this.eProductoEditado.emit(prod);
        } else {
            productoEditado = null;
        }
        return productoEditado;
    }
}
