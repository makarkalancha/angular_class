import { Component, Inject } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
