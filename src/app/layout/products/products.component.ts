import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data/data.service';
import { ReplaySubject, Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products$: ReplaySubject<any[]>;

  private subProducts: Subscription;

  constructor(
    private data: DataService
  ) { 
    this.products$ = data.products$;
    this.subProducts = this.products$.subscribe((products) => console.log(products));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subProducts.unsubscribe();
  }

  public create() {
    let data = {
      id: 1,
      pvp: 10,
      iva: 23,
      discount: 0
    }
    let product = new Product(data);
    this.data.createProduct(product);
  }
}
