// Importaciones necesarias
import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <!-- Entre las dos llaves colocamos codigo typescript/javascript -->
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <!-- Los eventos en angular se definen con parentesis -->
        <button (click)="acumular( base )">+ {{base}}</button>

        <!-- Mostramos el valor de numero en nuestro span -->
        <span>{{ numero }}</span>

        <!-- Le pasamos nuestro metodo creado -->
        <button (click)="acumular( -base )">- {{base}}</button>
    `
})
export class ContadorComponent {
    // El public y el tipo de dato es opcional (recomendable por buenas practicas)
    public titulo: string = 'Contador App';

    // Creamos una variable de numero para nuestro contador
    public numero: number = 0;

    // Creamos nuestra base
    public base: number = 5

    // Creamos un metodo para nuestro contador que en este caso es acumular (sirve para sumar y restar)
    acumular( valor: number ){
        this.numero += valor;
    }
}