import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import {MatCardModule} from '@angular/material/card';

// google maps
import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';


@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBE8golTHxt78wsseuu4VaDo2ZUI0tU2Io'
    })
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
