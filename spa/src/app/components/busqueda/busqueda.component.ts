import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroesEncontrados!: Heroe[]
  palabraBuscada!: string
  constructor(private router: Router,
              private _heroesService: HeroesService,
              private activeRoute: ActivatedRoute) {
    this.obtenerResultados()
  }

  ngOnInit(): void {
  }

  obtenerResultados(){
    this.activeRoute.params.subscribe( params => {
      debugger
      console.log(params['termino'])
      let termino: string = params['termino']
      this.palabraBuscada = termino
      this.heroesEncontrados = this._heroesService.buscarHeroe(termino)
      debugger
    })
  }

}
