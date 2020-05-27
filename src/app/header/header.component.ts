import { Component, OnInit } from '@angular/core';
declare const menuHover : any;
declare const  mobileMenuControl: any;
declare const  counterWayPoint: any;
declare const  contentWayPoint: any;
declare const  backToTop: any;
declare const  magnificPopupControl: any;
declare const  stellarInit: any;
declare const  progressBarControl: any;
declare const  nextScroll: any;
declare const  inlineSVG: any;
declare const   roomFadeHover: any;
declare const  hiResImg: any;
declare const  dateTimePicker: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
  menuHover();
  counterWayPoint();
  contentWayPoint();
  backToTop();
  magnificPopupControl();
  stellarInit();
  progressBarControl();
  mobileMenuControl();
  nextScroll();
  inlineSVG();
  roomFadeHover();
  hiResImg();
  dateTimePicker();
  }

}
