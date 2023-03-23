import { coerceStringArray } from '@angular/cdk/coercion';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'ecommerce-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit, OnDestroy {

  @Input() product!:Product;

  constructor() { }

  ngOnInit(): void {
    console.log("Initialized!")
  }

  ngOnDestroy(): void {
    console.log("destroyed!")
  }
}
