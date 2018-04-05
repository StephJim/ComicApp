import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService ) { } /* _heroesService es un alias que tiene el servicio aqui en el archivo, q es de tipo HeroesService */

  // se ejecuta despues que el constructor
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes(); // la variable local 'heroes' obtiene el array de objetos del metodo getHeroes() del servicio
    console.log(this.heroes);
  }

}
