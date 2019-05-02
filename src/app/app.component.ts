import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'My favorite Application';
  total:number = 0;
  productList: Array<Product> = new Array<Product>();

  constructor() {
    //this.productList = new Array<Product>();

    // this.productList.push(
    //   new Product(
    //     "Men Sweatshirt", 
    //     "C0D1NG_TH3_W0RLD BIO HOODIE - MEN",
    //     "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png",
    //     39
    //     )
    //   );
    // this.productList.push(
    //   new Product(
    //     "Men T-Shirt",
    //     "BIO T-SHIRT WITH CREWNECK - MEN.",
    //     "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png",
    //     19
    //   )
    // );
    // this.productList.push(
    //   new Product(
    //     "T-Shirt women",
    //     "BIO T-SHIRT WITH CREWNECK - WOMEN.",
    //     "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png",
    //     30
    //   )
    // );
    // this.productList.push(
    //   new Product(
    //     "Tote bag",
    //     "C0D1NG_TH3_W0RLD, BIO TOTE BAG.",
    //     "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png",
    //     12.5
    //   )
    // );

    this.productList = [
      { "title": "Men Sweatshirt", "description": "C0D1NG_TH3_W0RLD BIO HOODIE - MEN", "photo": "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png", "price": 39, "stock": 5 },
      { "title": "Men T-Shirt", "description": "BIO T-SHIRT WITH CREWNECK - MEN.", "photo": "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png", "price": 19, "stock": 3 },
      { "title": "T-Shirt women", "description": "BIO T-SHIRT WITH CREWNECK - WOMEN.", "photo": "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png", "price": 30, "stock": 2 },
      { "title": "Tote bag", "description": "C0D1NG_TH3_W0RLD, BIO TOTE BAG.", "photo": "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png", "price": 12.5, "stock": 1 }
    ];
  }

  changeTotal(product: Product){
    this.total += product.price;
    product.stock--;
    console.log(product.stock);
  }
}
