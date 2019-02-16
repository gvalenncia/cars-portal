import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import {MatDividerModule, MatFormFieldControl, MatFormFieldModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {LandingRoutingModule} from './landing-routing.module';
import {LoginComponent} from './components/login/login.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent, LoginComponent ],
      imports: [
        MatDividerModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
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
