import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:3000/api/products');
  }

  deleteProduct(id){
    var body = {
      id: id
    }
    return this.http.post('http://localhost:3000/api/products_delete/', body, httpOptions);
  }

}
