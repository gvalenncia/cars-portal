import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsTableComponent } from './cars-table.component';
import {MatTableModule} from '@angular/material';

describe('CarsTableComponent', () => {
  let component: CarsTableComponent;
  let fixture: ComponentFixture<CarsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsTableComponent ],
      imports: [
        MatTableModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
