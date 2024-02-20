import {JsonPipe, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import {Usuario} from "../usuario.interface";
import {UsuariosService} from "../../services/usuarios.service";


@Component({
  selector: 'app-formularioCrear-usuarios',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf, ReactiveFormsModule],
  templateUrl: './formulario.usuarios.component.html',
  styleUrl: './formulario.usuarios.component.css'

export class FormularioUsuariosComponent {
  dForm: FormGroup | undefined;

  _usuariosService: usuarios.service



  constructor(this.dForm = new FormGroup({
    'nombre': new FormControl('Manuel', [Validators.required,Validators.minLength(3)]),
    'edad': new FormControl(56, [Validators.required,Validators.min(18)]),
    'email': new FormControl('mmm@mmmm.mmm', [
        Validators.required,Validators.minLength(9),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    'profesion': new FormControl('no tiene profesion',[Validators.required,Validators.minLength(3)]),
    'pais': new FormControl(''),
    'sexo': new FormControl('',[Validators.required]),
    'acepta': new FormControl(false,[Validators.requiredTrue])
  }),
      new FormGroup({
        'nombre': new FormControl('Antonio', [Validators.required, Validators.minLength(3)]),
        'edad': new FormControl(28, [Validators.required, Validators.min(18)]),
        'email': new FormControl('aaa@aaaa.aaa', [
          Validators.required, Validators.minLength(9),
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
        'profesion': new FormControl('no tiene profesion', [Validators.required, Validators.minLength(3)]),
        'pais': new FormControl(''),
        'sexo': new FormControl('', [Validators.required]),
        'acepta': new FormControl(false, [Validators.requiredTrue])
      }))



  onSubmit(f:NgForm){
    // console.log(f);
    // crearServicio(this.datosFormularios);
    if (f.valid) {
      this._usuariosService.crear(this.datosFormularios);
      console.log(this._usuariosService.getUsuarios());
    }

}

})