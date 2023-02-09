import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit {
  slides = [
    { image: '/assets/Mclaren_Car.jpg', caption: 'Image 1' },
    { image: '/assets/Vanilla_Ice_Cream.jpg', caption: 'Image 2' },
    { image: '/assets/Car.jpg', caption: 'Image 3' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
