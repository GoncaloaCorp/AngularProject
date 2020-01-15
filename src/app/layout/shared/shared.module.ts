import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data/data.service';
import { ProductService } from './services/product/product.service';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    ProductService,
    DataService
  ]
})
export class SharedModule { }
