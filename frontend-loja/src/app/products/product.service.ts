/**
 * Created by Nicolas on 06.10.2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Product } from './product';

import 'rxjs/add/operator/map';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class ProductService {

  constructor(private http: Http , private slService: ShoppingListService) { }

  private serverApi= 'http://localhost:3003/api';


  public getAllProducts(): Observable<Product[]> {

    const URI = `${this.serverApi}/product/`;
    return this.http.get(URI)
      .map(res => res.json());
  }

  addProductToShoppingList(product: Product) {
      this.slService.addProduct(product);
  }

}
