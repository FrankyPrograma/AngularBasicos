import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  // Componentes que se estan utilizando
  declarations: [
    AppComponent
  ],
  // Vamos a colorcar otros modulos (Como los que queremos crear nosotros)
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  // Servicios especificos a un modulo
  providers: [],
  // Este es el componente que queremos lanzar primero
  bootstrap: [AppComponent]
})
export class AppModule { }
