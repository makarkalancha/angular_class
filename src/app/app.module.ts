import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { NgModule, LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeEnCa from '@angular/common/locales/en-CA';
import { SortPipe } from './pipes/sort.pipe';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'

registerLocaleData(localeEnCa, 'en-CA');

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    SortPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
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
