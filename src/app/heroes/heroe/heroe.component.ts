// Importaciones necesarias
import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    public nombre: string = 'Ironman';
    public edad: number = 45;

    // Un getter es una funcion principalmente que se usa para mostrar algo
    // Funcionan como propiedades
    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    // Esto es un metodo que retorna un string
    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    // Creamos un metodo para cambiar nombre
    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    // Creamos un metodo para cambiar edad
    cambiarEdad():void {
        this.edad = 30;
    }
}