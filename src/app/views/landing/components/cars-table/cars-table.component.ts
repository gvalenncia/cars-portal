import { Component, OnInit } from '@angular/core';

export interface CarsTableRow {
  id: number;
  type: string;
  plate: string;
  brand: string;
}

const ELEMENT_DATA: CarsTableRow[] = [
  {id: 1, type: 'truck', plate: 'AAA123', brand: 'Ford'},
  {id: 2, type: 'sedan', plate: 'BBB456', brand: 'Ford'},
  {id: 3, type: 'sedan', plate: 'CCC789', brand: 'Chevrolet'},
  {id: 4, type: 'sedan', plate: 'DDD012', brand: 'Chevrolet'}
];

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss']
})
export class CarsTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'type', 'plate', 'brand'];
  dataSource = ELEMENT_DATA;
  constructor() { }
  ngOnInit() {
  }

}
