import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouselImages = ['../../assets/images/carousel/carouselSlide1.webp',
            '../../assets/images/carousel/carouselSlide2.webp',
            '../../assets/images/carousel/carouselSlide3.webp'];

  constructor() { }

  ngOnInit(): void {
  }

}
