import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products;

  constructor(private productService: ProductsServiceService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      data => { this.products = data },
      err => console.error(err),
      () => console.log('Found Products')
    );
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(
      data => { this.products = data },
      err => console.error(err),
      () => console.log('Delete Product')
    );
  }

  searchProduct(search_text){
    this.productService.searchProducts(search_text).subscribe(
      data => { this.products = data },
      err => console.error(err),
      () => console.log('Searched Product')
    );
    console.log(search_text);
  }
}