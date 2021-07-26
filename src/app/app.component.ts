import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mapas';
  position = {
    lat: -34.681,
    lng: -58.371
  }

  label = {
    color: 'red',
    text: 'Marcador'
  }
}
