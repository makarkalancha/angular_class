import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() data: Product;
  @Output() addToBasket = new EventEmitter<Product>();

  clickHandler(){this.addToBasket.emit(this.data);}

}
