import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/core/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:8080/stock/products'
  productApi: any;
  constructor(
    private http: HttpClient
  ) { }

  public getAll() {
    return this.http.get(this.url);
  }

  public create(product: Product) {
    this.productApi.create(this.url)
  }

}
