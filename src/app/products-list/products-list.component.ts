import {Component, EventEmitter, OnInit} from '@angular/core';
import {Product} from '../app.component.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  inputs: ['productList'],
  outputs: ['onProductSelected']
})
export class ProductsListComponent implements OnInit {

  /*Input - productList - recibe el array con los
  * Productos del componente app                */

  productList: Product[];

  /*Output OnProductSelected - outputs the current
  * Product whenever a new Product is selected  */

  onProductSelected: EventEmitter<Product>;

  /*propiedad currentProduct - local state containing
  * the currently selected Product              */

  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product:Product):void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product:Product):boolean{
    if(!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {
  }

}
