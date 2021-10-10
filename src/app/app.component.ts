import { Component, NgModule } from '@angular/core';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs);
registerLocaleData(localFr);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Gerardo Sanchez';
  nombre2: string = "GerArDO SaNCHez hDZ";
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7];
  PI: number = Math.PI;
  porcentaje: number = 0.53;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = true;
  videoUrl: string = 'https://www.youtube.com/embed/-Fa1M-mtflg';

  idioma: string = 'fr';

  valorPromesa = new Promise<string>((resolve) => {

    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);

  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    Golpear: () => {

    }
  }

  cambiaIdioma( idioma: string) {
   this.idioma = idioma;
  }


}
