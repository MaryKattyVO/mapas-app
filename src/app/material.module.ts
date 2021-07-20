import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
