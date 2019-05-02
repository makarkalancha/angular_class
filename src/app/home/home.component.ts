import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CustomerService } from '../services/customer.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  total: number = 0;
  // productList: Array<Product>;
  productSubscrion: Subscription;
  products$: Observable<Product[]>;//convention for observable
  sortKey: keyof Product = 'title';
  sortOrder: String = 'asc';

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    @Inject('appTitle') private title: String) {

  }

  ngOnInit() {
    // this.productSubscrition = this.productService.getProducts().subscribe(products => this.productList = products);
    this.products$ = this.productService.getProducts();
    this.customerService.getBasket().subscribe();
  }

  ngOnDestroy() {
    // this.productSubscrition.unsubscribe();
  }

  changeBasket(product: Product) {
    this.total += this.customerService.getTotal();
    console.log(product.stock);
  }

  isAvailable(product: Product): boolean {
    return this.productService.isAvailable(product);
  }

  // isFieldSelected(field: String) : boolean{
  //   return sortKey.localeCompare(field);
  // }


  // isSortSelected(field: String): boolean {
  //   return this.sortOrder.localeCompare(field);
  // }
}
