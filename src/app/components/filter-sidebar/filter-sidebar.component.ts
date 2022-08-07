import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filter } from './Filter';

@Component({
  selector: 'ecommerce-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent implements OnInit {

  filterByNameTxt!:string;

  filter!:Filter;

  min!:number
  max!:number;

  @Output() filterByNameEvent = new EventEmitter();

  @Output() filterByPriceEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  filterByName(){

    this.filter = {
      tipo: 'byName',
      byName: this.filterByNameTxt
    }

    this.filterByNameEvent.emit(this.filter) 
  }

  filterByPrice(){
    this.filter = {
      tipo: 'byPrice',
      byPrice: [
        this.min, this.max
      ]
    }

    this.filterByPriceEvent.emit(this.filter)
  }



}
