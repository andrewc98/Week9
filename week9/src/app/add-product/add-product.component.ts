import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductServiceService } from '../add-product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private _addService: AddProductServiceService) { }

  ngOnInit() {
  }
  
  addProduct(name, price, type, desc) {
    this._addService.addProduct(name, price, type, desc).subscribe(
      
    )
  }
}
