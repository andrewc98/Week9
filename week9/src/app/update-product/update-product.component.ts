import { Component, OnInit } from '@angular/core';
import { UpdateProductServiceService } from '../update-product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  public products;
  constructor(private productService: UpdateProductServiceService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      data => { this.products = data },
      err => console.error(err),
      () => console.log('Found Products')
    );
  }

  updateProduct(id, name, price, type, desc){
    let body = {
      id: id,
      name: name,
      price: price,
      type: type,
      desc: desc
    }
    this.productService.updateProduct(body).subscribe(
      data => { this.products = data },
      err => console.error(err),
      () => console.log('Updated Products')
    );
  }
}
