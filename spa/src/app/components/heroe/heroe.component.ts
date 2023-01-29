import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe

  constructor(private activatedRouter: ActivatedRoute,
              private heroesService: HeroesService) {
    this.activatedRouter.params.subscribe( params => {
      console.log(`Este es el parámetro del heroe -> ${params['id']}`)
      let param: string = params['id']
      let convertirString: number = Number(param)
      console.log(typeof Number(param))
      this.heroe = this.heroesService.getHeroe(convertirString)
      console.log(this.heroe)
    })



   }

  ngOnInit(): void {
  }



}
