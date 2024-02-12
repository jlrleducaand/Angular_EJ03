import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUsuariosComponent } from './listado/listado.usuarios.component';
import { MainUsuariosComponent } from './main/main.usuarios.component';
import { FormularioUsuariosComponent } from './formulario/formulario.usuarios.component';
import { Usuario } from './usuario.interface';
export { Usuario };

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListadoUsuariosComponent,
    MainUsuariosComponent,
    FormularioUsuariosComponent
  ],
  exports: [
    ListadoUsuariosComponent,
    MainUsuariosComponent,
    FormularioUsuariosComponent
  ]
})
export class UsuariosModule { }

