import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/components/filter-sidebar/Filter';

@Component({
  selector: 'ecommerce-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  nameFilter!:Filter;

  priceFilter!:Filter
  
  constructor() { }

  ngOnInit(): void {

  }

  filterByName(filter:Filter = { byName: '' , tipo: 'byName' }){
    this.nameFilter = filter;
  }

  filterByPrice(filter:Filter = { byPrice: [0, 0], tipo: 'byPrice' }){
    this.priceFilter = filter
  }
}
