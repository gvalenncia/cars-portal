import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule
  ]
})
export class AppMaterialModule { }
