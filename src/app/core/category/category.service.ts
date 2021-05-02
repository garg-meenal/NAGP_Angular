import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly URL = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.URL);
  }

  getCategoryOfSubCategory(subCategory: string): string{
    const subCat = subCategory.toLowerCase();
    switch (subCat){
      case 'shirt':
      case 't-shirt':
        return 'topwear';
      case 'jeans':
      case 'shorts':
        return 'bottomwear';
      case 'shoes':
      case 'flip-flops':
        return 'footwear';
      case 'watch':
      case 'belt':
        return 'accessories';
    }
  }
}
