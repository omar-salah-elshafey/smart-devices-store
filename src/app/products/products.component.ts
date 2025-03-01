import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  isOutOfStock(product: Product): boolean {
    return product.stock === 0; // Check if a product is out of stock
  }

  selectProduct(product: Product) {
    this.productService.setSelectedProduct(product);
  }
}
