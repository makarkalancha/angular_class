import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CustomerService } from '../services/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket$: Observable<Product[]>;
  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.basket$ = this.customerService.getBasket()
  }



}
