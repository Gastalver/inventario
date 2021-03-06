import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component.model';


@Component({
  selector: 'app-product-image',
  host: {'class':'ui small image'},
  inputs: ['product'],
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  product:Product;

  ngOnInit() {
  }

}
