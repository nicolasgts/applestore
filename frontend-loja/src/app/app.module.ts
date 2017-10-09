import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ProductService} from './products/product.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import { UserComponent } from './user/user.component';
import {UserService} from "./user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ProductEditComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProductService, ShoppingListService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
