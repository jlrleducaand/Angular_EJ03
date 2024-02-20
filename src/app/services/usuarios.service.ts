import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from "../usuarios/usuario.interface";
import {Producto} from "../productos/producto.interface";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private _usuarios:Usuario[]=[
    {nombre:"Manuel", edad:56, email:"Manuel@gmail.com",profesion:"no tiene profesion"},
    {nombre:"Antonio", edad:28, email:"antonio@gmail.com", profesion:"no tiene profesion"}
  ]
     usuarioBuscado:EventEmitter<null>;
     usuariosChanged:EventEmitter<null>;
  constructor() {
    this.usuariosChanged = new EventEmitter;
    this.usuarioBuscado = new EventEmitter;
  }



  getUsuarios() :Usuario[] {
    return Array.from(this._usuarios);
  }
  buscar(usuario:string):Usuario|null {
    let usuarioBuscado:Usuario|null;
    let pos=this._usuarios.findIndex((x)=> x.nombre.toLocaleLowerCase() == usuario.toLocaleLowerCase() );
    if(pos>=0) {
      usuarioBuscado = this._usuarios[pos];
      this.usuarioBuscado.emit();
    }else{
      usuarioBuscado = null;
    }
    return usuarioBuscado;
  }
  eliminar(usuario:string):Usuario|null{
    let usuarioEliminado:Usuario|null;

    let pos=this._usuarios.findIndex((x)=> x.nombre.toLocaleLowerCase() == usuario.toLocaleLowerCase() );
    if(pos>=0) {
      usuarioEliminado = this._usuarios[pos];
      this._usuarios.splice(pos, 1);
      this.usuariosChanged.emit();
    } else {
      usuarioEliminado=null;
    }
    return usuarioEliminado;
  }

  crear(datos:Usuario){
    this._usuarios.push({...datos});
    this.usuariosChanged.emit();
  }
}
