import { Component, AfterViewInit } from '@angular/core';
import  $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    ($('.carousel') as any).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true
    });
  }
}
