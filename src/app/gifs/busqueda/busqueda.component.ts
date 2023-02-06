import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  valor = "";

  constructor(private gifsService: GifsService){  }

  buscar(){
    console.log(this.valor);
    if(this.valor.trim().length === 0){
      return;
    }
    this.gifsService.buscarGifs(this.valor);
  }
}
