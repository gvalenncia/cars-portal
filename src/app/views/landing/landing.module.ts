import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import {
  MatButtonModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { CarsTableComponent } from './components/cars-table/cars-table.component';

@NgModule({
  declarations: [ LandingComponent, CarsTableComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    LandingRoutingModule
  ],
  exports: [
    LandingComponent,
    CarsTableComponent
  ]
})
export class LandingModule { }
