import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = []

  constructor(private _heroesService: HeroesService,
              private router: Router) {
    this.heroes = this._heroesService.getHeroes()
    console.log(this.heroes)
  }

  ngOnInit(): void {
    console.log("ngOninit")
  }

  verHeroe(index: number){
    debugger
    this.router.navigate(['/heroe', index])
  }



}
