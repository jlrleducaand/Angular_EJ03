import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductosModule } from './productos/productos.module';
import { CabeceraModule } from './cabecera/cabecera.module';
import { MainProductosComponent } from './productos/main/main.productos.component';
import { MainUsuariosComponent} from "./usuarios/main/main.usuarios.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    ProductosModule, CabeceraModule, MainUsuariosComponent, MainProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02-productos';

}
