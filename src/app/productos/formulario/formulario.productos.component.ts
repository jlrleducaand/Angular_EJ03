import {JsonPipe, NgClass, NgFor, NgIf} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {ProductosService} from '../../services/productos.service';
import {Producto} from '../productos.interface';


@Component({
    selector: 'app-formulario-productos',
    standalone: true,
    imports: [FormsModule, JsonPipe, NgIf, NgFor, NgClass],
    templateUrl: './formulario.productos.component.html',
    styleUrl: './formulario.productos.component.css'
})


export class FormularioProductosComponent implements OnInit {


    editado: Producto | null | undefined = null;
    creado: Producto | null | undefined = null;
    eliminado: Producto | null | undefined = null;
    buscado: Producto | null | undefined = null;

    contador: number = 0;
    ides: number[] = [];

    _productos: Producto[] = [];
    _categorias: string[] = [];
    _stocks: string[] = [];
    _datosFormularios: Producto = {
        id: 0,
        nombre: "",
        precio: 0,
        categoria: "",
        radStock: "",
        nStock:0,
        descont: true
    }

    hecho: boolean = true;


    constructor(private _productosServicios: ProductosService) {
        this._productos=this._productosServicios.getProductos().sort((a, b) => a.id - b.id);
        this.ides = this._productos.map((p) => p.id);
        this._stocks =  Array.from(_productosServicios.rStock);
        this.resetProducto();
        //console.log(this.contador);

        this._categorias = Array.from(_productosServicios.cat);
        //console.log(this._categorias);

        //botones que provienen del listado hay que subscribirse
        this._productosServicios.eProductoEditado.subscribe((p) => {
            this._datosFormularios = p;
            this.editado = p;
            this.creado = null;

            setTimeout(() => {
                this.hecho = false;
            }, (2000));
        })

        this._productosServicios.eProductoEliminado.subscribe((p) => {
            this._datosFormularios = p;
            this.eliminado = p;
            this.editado = null;

            setTimeout(() => {
                this.hecho = false;

            }, (2000));
        })

        this._productosServicios.eProductoBuscado.subscribe((p) => {
            this._datosFormularios = p;
            this.buscado = p;
            this.creado = null;

            setTimeout(() => {
                this.hecho = false;

            }, (2000));
        })

    }


    ngOnInit() {
    }

    onSubmit(f: NgForm) {

        //carga la lista   y el producto Seleccionado
        this._productos = (this._productosServicios.getProductos());
        // crea un array con solo los id de la lista
        this.ides = this._productos.map((p) => p.id);
        console.log(f);
        console.log("valores", f.value);


        //crear o Actualiza mediante el servicio (this._datosFormularios);

        if (f.valid) {
            console.log(this.ides);  //no debe contener el id eliminado
            if (this.ides.includes(this._datosFormularios.id)) {
                this._productosServicios.editar(this._datosFormularios);
                this.editado = this._datosFormularios;
                this.hecho = true;

                setTimeout(() => {
                    this.hecho = false;
                    this.resetBanderas();
                }, (2000));

            } else {
                this._productosServicios.crear(this._datosFormularios);
                this.creado = this._datosFormularios;

                setTimeout(() => {
                    this.hecho = false;
                    this.resetProducto();

                }, (2000));
            }
        }
    }
    resetBanderas(){
        this.buscado = null;
        this.editado = null;
        this.creado = null;
        this.eliminado = null;
        this.hecho = true;


    }
    resetProducto(){
        console.log("Nuevo Pulsado");
        this.resetBanderas();

        this._productos=this._productosServicios.getProductos().sort((a, b) => a.id - b.id);
        this.ides = this._productos.map((p) => p.id);
        this.contador = Math.max(...this.ides);

        this._datosFormularios.id = this.contador+1;
        this._datosFormularios.nombre = "";
        this._datosFormularios.precio= 0;
        this._datosFormularios.categoria = "";
        this._datosFormularios.radStock="";
        this._datosFormularios.nStock = 0,
        this._datosFormularios.descont=true;
    }

    // Función para validar si se ha seleccionado algún radio
    isRadioSelected(): boolean {
        if(this._datosFormularios.radStock !== ''){
            this._datosFormularios.descont = false;
        }
        return this._datosFormularios.radStock !== '';
    }
    // Funcion para cambiar el estado de radios  si se descontinua
    onDescontinuarProducto() {
        if (this._datosFormularios.descont) {
            // Si el producto se descontinúa, establece radStock como cadena vacía
            this._datosFormularios.radStock = '';
        }
    }

}
