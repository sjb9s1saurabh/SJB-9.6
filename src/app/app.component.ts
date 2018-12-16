import { Component,HostListener, ElementRef, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition, keyframes,query,stagger} from '@angular/animations';

declare const $:any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  
})
export class AppComponent implements OnInit {
  title = 'app';
  state = 'hide'
  constructor(public el: ElementRef){}
  ngOnInit(){
    let width = window.innerWidth;
    console.log(width);
    $(window).scroll(function() {
      $(".animated").each(function(){
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 600 && width > 992) {
          $(this).addClass("slideInUp");
        }
      });
    });
  }
  goToContact(){
   
  }

  
  
}
