import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingModule} from './landing/landing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LandingModule
  ],
  exports: [
    LandingModule
  ]
})
export class ViewsModule { }
