import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroesEncontrados!: Heroe[]

  constructor(private _heroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string){
    debugger
      this.router.navigate(['/busqueda', termino])
  }

}
