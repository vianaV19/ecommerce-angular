import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecommerce-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  author: string = "Matheus Viana"
  portfolio:string = "https://vianav19.github.io"
  websiteName:string = "E-book"

  constructor() { }

  ngOnInit(): void {
  }

}
