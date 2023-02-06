import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { GifsService } from './services/gifs.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BusquedaComponent,
    GifsPageComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    GifsService
  ],
  exports: [
    BusquedaComponent,
    ResultadosComponent,
    GifsPageComponent
  ]
})
export class GifsModule { }
