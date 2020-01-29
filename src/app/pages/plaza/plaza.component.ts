import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  price: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'A Tech', weight: "Samsung", symbol: 'A70', price: "Rs.45000" },
  {position: 2, name: 'Friends Mobiles', weight: "Apple", symbol: 'iPhone XS Max', price: "Rs.125000"},
  {position: 3, name: 'Eplison Techmart', weight: "Xiaomi", symbol: 'Note 8 Pro', price: "Rs.43000"},
  {position: 4, name: 'HP Mobiles', weight: "Huawei", symbol: 'P30 Lite', price: "Rs.90000"},
  {position: 5, name: 'Newsoft Mobiles', weight: "Vivo", symbol: 'V17 Pro', price: "Rs. 560000"},
  {position: 6, name: 'Oppo Store', weight: "Oppo", symbol: 'A2 Reno', price: "Rs. 65000"},
  {position: 7, name: 'K Telecommunications', weight: "One Plus", symbol: '7 Pro', price: "Rs 125000"},
  {position: 8, name: 'Wset Mobiles', weight: "ROG", symbol: 'ASUS 2', price: "Rs. 124000"},
  {position: 9, name: 'TS Tech', weight: "Google", symbol: 'Pixel 4', price: "Rs. 88000"},
  {position: 10, name: 'Only Com Mobiles', weight: "Leneovo", symbol: 'K7', price :"Rs. 41000"},
];

@Component({
  selector: 'app-plaza',
  templateUrl: './plaza.component.html',
  styleUrls: ['./plaza.component.scss']
})
export class PlazaComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'price', 'view'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }
  
}
