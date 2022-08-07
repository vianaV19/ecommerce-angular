import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  base_url:string =  "https://sheet.best/api/sheets/b3d61418-b6b4-4ea2-b9a0-e1743191a831"

  constructor(private httpClient:HttpClient) {

   }
  
  retrieveAll(){
    return this.httpClient.get<Product[]>(this.base_url)
  }
}

//mock
// var PRODUCTS : Product[] = [
//   {
//     id: 1,
//     name: 'Sherlock Holmes',
//     description: 'Sherlock holmes books all volumes.',
//     price: 50.99,
//     imageUrl: "../../assets/sherlock.jpg"
//   },
//   {
//     id: 2,
//     name: 'Mindset',
//     description: 'Mindset, the success psychology',
//     price: 60.99,
//     imageUrl: "../../assets/mindset.jpg" 
//   },
//   {
//     id: 3,
//     name: 'Por que fazemos o que fazemos?',
//     description: 'Livro sobre o propósito daquilo que fazemos.',
//     price: 80.99,
//     imageUrl: "../../assets/oquefazemos.jpg" 
//   }
  
// ]

