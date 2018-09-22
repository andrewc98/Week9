import { Component, OnInit } from '@angular/core';
import { AddProductServiceService } from '../add-product-service.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private _addService: AddProductServiceService) { }

  ngOnInit() {
    console.log("AddProductComp");
    this._addService.addProduct().subscribe(
      data => { },
      err => console.error(err),
      () => console.log('Found Groups')
    );
  }
}
