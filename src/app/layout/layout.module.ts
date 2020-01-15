import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { ShelvesComponent } from './shelves/shelves.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [LayoutComponent, MainComponent, ProductsComponent, ShelvesComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
