import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { Filter } from '../filter-sidebar/Filter';

@Component({
  selector: 'ecommerce-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit, OnChanges {

  @Input() filterByName?: Filter;
  @Input() filterByPrice?: Filter

  productsList!: Product[];

  filteredList: Product[] = []

  constructor(private productsService: ProductsService) {
    this.productsList = productsService.retrieveAll();
    // productsService.retrieveAll().subscribe(data => {
    //   this.productsList = data
    // } , err => {
    //   console.error(err)
    // });
  }

  ngOnInit(): void {
    this.filteredList = this.productsList;
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.filterByPrice?.tipo == 'byPrice') {

      let min = this.filterByPrice.byPrice![0]
      let max = this.filterByPrice.byPrice![1]

      this.filteredList = this.productsList.filter((e) => e.price <= max && e.price >= min)
    } else {

      console.log(this.filterByName?.byName)

      //fln abreviation of "filter name"
      const fn = this.filterByName?.byName?.toLowerCase();

      if (fn?.trim() != "" && fn != null) {
        this.filteredList = this.productsList.filter((e) => e.name.toLowerCase().includes(fn))
      }
    }
  }
}
