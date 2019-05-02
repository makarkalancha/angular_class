import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { NgModule, LOCALE_ID} from '@angular/core';
import {registerLocaleData, APP_BASE_HREF} from '@angular/common';
import localeEnCa from '@angular/common/locales/en-CA';
import { SortPipe } from './pipes/sort.pipe';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component'
import { RouterModule, Routes } from '@angular/router';

registerLocaleData(localeEnCa, 'en-CA');

const routes : Routes = [
  { path: '', component: HomeComponent},
  { path: 'basket', component: BasketComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    SortPipe,
    HomeComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    {
      provide:'appTitle',
      useValue: 'hello world'
    },
    {
      provide: 'LOCALE_ID',
      useValue: 'en-CA'
    },
    {
      provide: 'API_BASE_URL',
      useValue: 'http://localhost:8080/rest'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
https://github.com/makarkalancha/tp-angular-en/tree/labs/8-router/src/app