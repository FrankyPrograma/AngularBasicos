// Importaciones necesarias
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Van a ser los componentes (Estan invisibles para la aplicacion)
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Aqui ponemos las cosas que queremos hacer publicas
    exports: [
        ListadoComponent
    ],
    // En los imports suelen ir modulos
    imports: [
        // Ofrece funcionalidades de angular de forma que siempre hay que llamarle
        CommonModule
    ]
})
export class HeroesModule {

}