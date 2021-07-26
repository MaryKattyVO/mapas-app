import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() {
    if(localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores')!);
    }
  }

  ngOnInit(): void {
  }

  agregarMarcador(evento: any) {
    const coords: { lat:number, lng: number } = evento.coords;
    console.log(evento.coords.lat)
    const nuevoMarcador = new Marcador(coords.lat, coords.lng)
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
  }

  borrarMarcador(i: any){
    this.marcadores.splice(i, 1);
    this.guardarStorage();
  }
  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores))
  }
}
