export interface Producto {
    id:number,
    nombre: string,
    precio: number,
    categoria: string,  //selectbox
    estado:string,      // radio
    aceptado: boolean   //checkbox
  }