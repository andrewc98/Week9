import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddProductServiceService {

  constructor(private http:HttpClient) { }

  addProduct(name, price, type, desc) {
    let body = {
      name: name,
      price: price,
      type: type,
      desc: desc
    }
    console.log("AddProductService");
    return this.http.post('http://localhost:3000/api/add/', body, httpOptions);
  }
}
