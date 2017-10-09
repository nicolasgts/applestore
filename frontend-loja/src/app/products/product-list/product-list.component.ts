import {Component, OnInit, Output} from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = [];



  constructor(private productService: ProductService) { }

  ngOnInit() {
    // Load all products on init
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });

  }

}



