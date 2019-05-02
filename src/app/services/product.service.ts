import { Injectable, Inject } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { pipe, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API_URL = this.API_BASE_URL+'/products';

  constructor(@Inject('API_BASE_URL') private API_BASE_URL : String, private httpClient : HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get(this.API_URL)
      .pipe(
        map((products:any[]) => 
          products.map(
            product => new Product(product.title, product.description, product.photo, product.number, product.stock)
          )
        )
      )
    ;
  }

  isTheLast(product: Product): boolean {
    return product.stock === 1;
  }

  isAvailable(product: Product): boolean {
    return product.stock > 0;
  }

  decreaseStock(product: Product): void {
    product.stock--;
  }
}
