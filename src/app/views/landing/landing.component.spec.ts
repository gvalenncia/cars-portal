import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import {LandingRoutingModule} from './landing-routing.module';
import {MatButtonModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {CarsTableComponent} from './components/cars-table/cars-table.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent, CarsTableComponent ],
      imports: [
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        LandingRoutingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
