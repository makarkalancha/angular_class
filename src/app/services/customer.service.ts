import { Injectable, Inject } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private basket: Array<Product> = new Array<Product>();
  private readonly BASKET_API_URL = this.API_BASE_URL + '/basket';

  constructor(
    @Inject('API_BASE_URL') private API_BASE_URL: String,
    private httpClient:HttpClient
    ) { }

  getBasket():Observable<Product[]>{
    return this.httpClient.get(this.BASKET_API_URL)
      .pipe(
        map((products:any[])=>
          products.map(
            product => new Product(product.title, product.description, product.photo, product.number, product.stock)
          )
        )
      );
  }

  addProduct(product: Product): Observable<any> {
    return this.httpClient.post(this.BASKET_API_URL, product)
      .pipe(
        tap(() =>
          this.basket.push(product)
          )
        );
  }

  getTotal(): number {
    return this.basket.reduce((total, nextProduct) => total + nextProduct.price, 0);
    // total = 0;
    // for(Product product in this.basket) {
    //   total += product.price;
    // }
    // return total;
  }
}
