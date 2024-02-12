import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, LogoComponent
  ],
  exports: [
    LogoComponent
  ]
})
export class CabeceraModule { }
