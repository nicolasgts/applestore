import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../product';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;



  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.productService.addProductToShoppingList(this.product);
  }


}
