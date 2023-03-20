import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { TopnavComponent } from './components/topnav/topnav.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterSidebarComponent } from './components/filter-sidebar/filter-sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './pages/about/about.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsService } from './services/products.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    HomeComponent,
    FilterSidebarComponent,
    AboutComponent,
    ProductListComponent,
    ProductItemComponent,
    FooterComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
