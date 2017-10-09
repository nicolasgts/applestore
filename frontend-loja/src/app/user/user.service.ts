import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
@Injectable()
export class UserService {

  constructor(private http: Http) { }

  private serverApi= 'http://localhost:3003/api';

  public getIDauth() {
    return '59d3d46bf47991074cd2caaf';
  }

}


