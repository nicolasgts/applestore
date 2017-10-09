import {Product} from '../products/product';
/**
 * Created by Nicolas on 09.10.2017.
 */
export class ShoppingList {
  public user: String;
  public totalValue: Number;
  public approved: Boolean;
  public products: Product[];
  public dateOfTransaction: Date;

  constructor() {
    this.products = [];
    this.totalValue = 0;
    this.approved = false;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(product: Product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  approvePurchase() {
    this.approved = true;
  }


}
