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
    return this.http.post('http://localhost:3000/api/products', httpOptions);
  }

  deleteProduct(id){
    var body = {
      id: id
    }
    return this.http.post('http://localhost:3000/api/products_delete/', body, httpOptions);
  }

  searchProducts(search_text){
    var body = {
      search_text: search_text
    }
    return this.http.post('http://localhost:3000/api/search/', body, httpOptions);
  }
}