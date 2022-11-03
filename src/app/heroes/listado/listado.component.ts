import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ['./listado.component.css']
})

export class ListadoComponent  {
  heroes:string [] = ['Spiderman','Ironman','Hulk', 'Thor', 'capitan America'];
  heroeBorrado:string = ''

  borrarHeroe(){
    const heroeBorrado = this.heroes.pop();
    this.heroeBorrado = heroeBorrado || ""
    //return heroeBorrado;
  }
 }



