import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  item = 'Nom Item';
  suppression = '';
  products = ['Product 1', 'Product 2', 'Product 3'];

  constructor() {}

  ngOnInit() {}

  onDelete(productName: string) {
    this.products = this.products.filter((product) => product !== productName);
  }
}
