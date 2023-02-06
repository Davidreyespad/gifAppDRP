import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'mMgHtLS7EKnnakz1qDhKwa6SsNXXjJNl'; //apiKey de la API de los gifs

  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';//URL de la llamada a API

  private _historial: string[] = [];//Guarda el historial de búsquedas, por convención se pone _ para indicar que es privada

  public resultados: Gif[] = []; //Interfaz para usar los gifs.

  get historial() {
    return [...this._historial];
  }


  constructor(private http: HttpClient) {

    const LocalStorage = localStorage.getItem('historial');

    if (typeof LocalStorage === "string") {
      this._historial = JSON.parse(LocalStorage);
    }

    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }

  buscarGifs(queryGif: string = '') {
    queryGif = queryGif.trim().toLocaleLowerCase();//Para quitar espacios y poner en minuscula

    if (!this._historial.includes(queryGif)) {//evitar repetidos
      this._historial.unshift(queryGif); //inserta al inicio
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem("historial", JSON.stringify(this._historial));
    }

    //Creamos un objeto para los parámetros de llamada a la API
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', queryGif);


    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });


  }
}
