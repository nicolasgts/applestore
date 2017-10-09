/**
 * Created by Nicolas on 09.10.2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { ShoppingList } from './shopping-list.model';

import 'rxjs/add/operator/map';
import {Product} from '../products/product';
import {UserService} from '../user/user.service';

@Injectable()
export class ShoppingListService {

  private productsBought: Product[] = [];
  private serverApi= 'http://localhost:3003/api/';
  private userId = this.userService.getIDauth();


  getProducts() {
    return this.productsBought;
  }

  constructor(private http: Http, private userService: UserService) { }


  addProduct (product: Product) {
    this.productsBought.push(product);
  }


  public geCurrentShoppingList(): Observable<ShoppingList> {
    return this.http.get(`${this.serverApi}/user/${this.userId}/purchases/false`)
      .map(res => res.json());
  }

  public newShoppingList(shop: ShoppingList) {
    const URI = `${this.serverApi}/purchase/`;
    const headers = new Headers;
    const body = JSON.stringify({totalValue : shop.totalValue});
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body , { headers: headers})
      .map(res => res.json());
  }
}



