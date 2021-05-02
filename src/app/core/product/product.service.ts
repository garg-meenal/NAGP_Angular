import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly URL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.URL);
  }

  getProductsByGroup(group: string): Observable<Product[]>{
    console.log(this.URL + '?group=' + group);
    return this.http.get<Product[]>(this.URL + '?group=' + group);
  }

  getProductsByCategory(group: string, category: string): Observable<Product[]>{
    return this.http.get<Product[]>(this.URL + '?group=' + group + '&&category=' + category);
  }

  getProductsBySubCategory(group: string, category: string, subCategory: string): Observable<Product[]>{
    return this.http.get<Product[]>(this.URL + '?group=' + group + '&&category=' + category + '&&subCategory=' + subCategory);
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(this.URL + '?id=' + id);
  }
}
