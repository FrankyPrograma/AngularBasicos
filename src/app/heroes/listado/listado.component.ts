import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  // Creamos un arreglo de heroes el cual recorreremos con un for para creare una lista
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan america'];
  public heroeBorrado: string = '';

  // Creamos un metodo para borrar heroes
  borrarHeroe(): void {
    // Borramos un heroe a partir del indice 0 y encima el shift lo retorna por lo que lo podemos usar
    const heroeBorrado = this.heroes.shift() || ''; // Si devuelve undefined en vez de eso devolvemos ''
    this.heroeBorrado = heroeBorrado;
  }

  
}

