import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoProductosComponent } from './listado/listado.productos.component';
import { MainProductosComponent } from './main/main.productos.component';
import { FormularioCrearProductosComponent } from './formularioCrear/formularioCrear.productos.component';
import { Producto } from './producto.interface';
export { Producto };
import { Categoria } from "./categoria.interface";
export { Categoria };

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListadoProductosComponent,
    MainProductosComponent,
    FormularioCrearProductosComponent
  ],
  exports: [
    ListadoProductosComponent,
    MainProductosComponent,
    FormularioCrearProductosComponent
  ]
})
export class ProductosModule { }

