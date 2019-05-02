import { Component, Inject } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  total:number = 0;
  productList: Array<Product>;
  sortKey: keyof Product = 'title';
  sortOrder: String = 'asc';

  constructor(
    private productService: ProductService, 
    private customerService: CustomerService,
    @Inject('appTitle') private title: String) {
  
  }
  ngOnInit(){
    this.productList = this.productService.getProducts();
  }

  changeBasket(product: Product){
    this.customerService.addProduct(product);
    this.productService.decreaseStock(product);
    this.total += this.customerService.getTotal();
    console.log(product.stock);
  }

  isAvailable(product: Product): boolean {
    return this.productService.isAvailable(product);
  }
}
