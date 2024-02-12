import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoProductosComponent } from './listado/listado.productos.component';
import { MainProductosComponent } from './main/main.productos.component';
import { FormularioProductosComponent } from './formulario/formulario.productos.component';
import { Producto } from './productos.interface';
export { Producto };

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListadoProductosComponent,
    MainProductosComponent,
    FormularioProductosComponent
  ],
  exports: [
    ListadoProductosComponent,
    MainProductosComponent,
    FormularioProductosComponent
  ]
})
export class ProductosModule { }

