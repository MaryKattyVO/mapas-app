import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private snackBar: MatSnackBar,
              public dialog: MatDialog) {
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
    this.snackBar.open('Marcador agregado', 'Cerrar', {duration: 3000});
  }

  borrarMarcador(i: any){
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', {duration: 3000});
  }
  editarMarcador( marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc}
    });
  }
  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores))
    
  }
}
