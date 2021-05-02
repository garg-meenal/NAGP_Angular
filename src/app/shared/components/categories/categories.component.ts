import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/core/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  // @Input('show') showCategories: string;

  subscriptions: Subscription[] = [];
  menCategoryImages: string [];
  menCategoryMoreImages: string[];
  womenCategoryImages: string [];
  womenCategoryMoreImages: string [];
  kidsCategoryImages: string [];
  kidsCategoryMoreImages: string [];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(): boolean {
      return false;
    };
    this.subscriptions.push(this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    }));
   }
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
   this.loadCategory_kids();
   this.loadCategory_men();
   this.loadCategory_women();
  }

  loadCategory_men(): void{
    this.menCategoryImages = ['../../../../assets/images/cateogries/shirt_men.webp',
                              '../../../../assets/images/cateogries/tshirt_men.webp',
                              '../../../../assets/images/cateogries/jeans_men.webp',
                              '../../../../assets/images/cateogries/flip-flops_men.webp'];
  }

  loadCategory_women(): void{
    this.womenCategoryImages = ['../../../../assets/images/cateogries/jeans_women.webp',
    '../../../../assets/images/cateogries/watch_women.webp',
    '../../../../assets/images/cateogries/t-shirt_women.webp',
    '../../../../assets/images/cateogries/shoes_women.webp'];
  }

  loadCategory_kids(): void{
    this.kidsCategoryImages = ['../../../../assets/images/cateogries/watch_kids.webp',
                              '../../../../assets/images/cateogries/tshirt_kids.webp',
                              '../../../../assets/images/cateogries/shoes_kids.webp',
                              '../../../../assets/images/cateogries/jeans_kids.webp'];
  }

  getProducts(img: string): void{
    const imageName: string = img.split( '/')[img.split( '/').length - 1].split( '.')[0];
    const group: string = imageName.split('_')[1];
    const subCategory: string = imageName.split('_')[0];
    const category: string = this.categoryService.getCategoryOfSubCategory(subCategory);
    let URL: string = '/shop/' + group;
    if (category){
      URL = URL + '/' + category;
    }
    if (subCategory){
      URL = URL + '/' + subCategory;
    }
    this.router.navigateByUrl(URL);
  }
}
