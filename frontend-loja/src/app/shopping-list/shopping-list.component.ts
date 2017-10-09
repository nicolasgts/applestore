import {Component, Input, OnInit, Output} from '@angular/core';
import {ShoppingList} from './shopping-list.model';
import {Product} from '../products/product';
import {ShoppingListService} from './shopping-list.service';
import {isUndefined} from "util";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingList: ShoppingList;
  products: Product[];




  constructor(private slService: ShoppingListService) {
      console.log('jdjdjdj');
      this.products = new Array<Product>();
  }

  ngOnInit() {
    if (isUndefined(this.shoppingList)) {
      this.slService.geCurrentShoppingList().subscribe(shoppingList => {
        this.shoppingList = shoppingList;
        this.products = this.shoppingList.products;
        console.log(isUndefined(this.shoppingList));
      });
    }
  }

}
