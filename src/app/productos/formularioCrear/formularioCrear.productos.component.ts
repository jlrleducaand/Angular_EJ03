import {JsonPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {ProductosService} from '../../services/productos.service';
import {Producto} from '../producto.interface';
import {Categoria} from "../categoria.interface";

@Component({
    selector: 'app-formulario-Crear-productos',
    standalone: true,
    imports: [FormsModule, JsonPipe, NgIf],
    templateUrl: './formularioCrear.productos.component.html',
    styleUrl: './formularioCrear.productos.component.css'
})
export class FormularioCrearProductosComponent {
    datosFormularios: Producto = {
        id: 1,
        nombre: "",
        precio: 0,
        categoria: "",
        estado: "",
        aceptado: false
    }
    categorias: Categoria[] = [];

    constructor(protected _productosService: ProductosService) {
        this.categorias = _productosService.getCategorias();
    }

    onSubmit(f: NgForm) {
        console.log(f);
        // crearServicio(this.datosFormularios);
        if (f.valid) {
            let prod: Producto = {
                id: f.value.id,
                nombre: f.value.nombre,
                precio: f.value.precio,
                categoria: f.value.categoria,
                estado: f.value.estado,
                aceptado: f.value.aceptado,
            };
            this.datosFormularios = {...prod};
            let ids: number[] = this._productosService.getProductos().map((p) => p.id)
            if (ids.includes(f.value.id)) {
                this._productosService.update(prod);
            } else {
                this._productosService.create(this.datosFormularios);
                this._productosService.getProductos();
            }
        }
    }
}
