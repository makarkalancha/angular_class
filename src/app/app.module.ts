import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { NgModule, LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeEnCa from '@angular/common/locales/en-CA';
import { SortPipe } from './pipes/sort.pipe';

registerLocaleData(localeEnCa, 'en-CA');

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide:'appTitle',
      useValue: 'hello world'
    },
    {
      provide: 'LOCALE_ID',
      useValue: 'en-CA'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
