import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddProductServiceService {

  constructor(private http:HttpClient) { }

  addProduct() {
    console.log("AddProductService");
    return this.http.get('http://localhost:3000/api/add/', httpOptions);
  }
}
