import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private basket: Array<Product> = new Array<Product>();

  constructor() { }

  addProduct(product: Product): void {
    this.basket.push(product);
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
