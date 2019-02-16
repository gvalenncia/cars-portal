import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import {
  MatButtonModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [ LandingComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    LandingRoutingModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
