import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-heroe',
  templateUrl: './tarjeta-heroe.component.html',
  styles: [
  ]
})
export class TarjetaHeroeComponent implements OnInit {

  @Input() heroe!: Heroe;
  @Input() index!: any
  @Input() nombre!: string
  @Output() heroeSeleccionado: EventEmitter<number> = new EventEmitter<number>();
  constructor(private router: Router, private _heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  verHeroe(){
    debugger
    // this.heroeSeleccionado.emit(this.index)
    // if(this.nombre){
    //   let index: number = this._heroesService.obtenerIndice(this.nombre)
    //   this.router.navigate(['/heroe', index])
    // } else {
    //   this.router.navigate(['/heroe', this.index])
    //   console.log(this.index)
    // }
      this.router.navigate(['/heroe', this.index])


  }

}
