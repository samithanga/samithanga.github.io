import { Component,ElementRef,Renderer2,AfterViewInit,HostListener,ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
  './app.component.css']
})

export class AppComponent implements AfterViewInit{
  projectCount:number = 0;
  clientCount:number = 0;
  supportCount:number = 0;
  jsCount:number = 0;
  mobNav:boolean = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

    
  @ViewChild("backtop") backEl!: ElementRef;
  @HostListener("window:scroll", ['$event']) onScroll(e:any){
    if (window.scrollY > 5000) {
      this.renderer.addClass(this.backEl.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.backEl.nativeElement, 'active');
    }
  }
  
  @ViewChild('html') htmlEl!: ElementRef;
  @ViewChild('angular') angularEl!: ElementRef;
  @ViewChild('css') cssEl!: ElementRef;
  @ViewChild('api') apiEl!: ElementRef;
  @ViewChild('javascript') javascriptEl!: ElementRef;
  @ViewChild('sql') sqlEl!: ElementRef;
  
  ngAfterViewInit(){
  this.renderer.setStyle(this.htmlEl.nativeElement, 'width', '90%');
  this.renderer.setStyle(this.angularEl.nativeElement, 'width', '70%');
  this.renderer.setStyle(this.cssEl.nativeElement, 'width', '90%');
  this.renderer.setStyle(this.apiEl.nativeElement, 'width', '90%');
  this.renderer.setStyle(this.javascriptEl.nativeElement, 'width', '85%');
  this.renderer.setStyle(this.sqlEl.nativeElement, 'width', '50%');
  }

  @ViewChild('mobilenav') navEl!: ElementRef;
  menuClick:any = (() => {
    const bodyEl = this.navEl.nativeElement.closest('body');
    if(!this.mobNav){
      this.renderer.addClass(bodyEl,'mobile-nav-active');
      this.renderer.removeClass(this.navEl.nativeElement,'bi-list');
      this.renderer.addClass(this.navEl.nativeElement,'bi-x');
      this.mobNav = true;
    }
    else{
      this.renderer.removeClass(bodyEl,'mobile-nav-active');
      this.renderer.addClass(this.navEl.nativeElement,'bi-list');
      this.renderer.removeClass(this.navEl.nativeElement,'bi-x');
      this.mobNav = false;
    }
  });

  navItemClick:any = (() => {
      const bodyEl = this.navEl.nativeElement.closest('body');
      this.renderer.removeClass(bodyEl,'mobile-nav-active');
      this.renderer.addClass(this.navEl.nativeElement,'bi-list');
      this.renderer.removeClass(this.navEl.nativeElement,'bi-x');
      this.mobNav = false;
  });

  projectCountStop:any =  setInterval(() => {
    this.projectCount++;
    if(this.projectCount == 60){
      clearInterval(this.projectCountStop);
    }
  },10);

  clienCountStop:any =  setInterval(() => {
    this.clientCount++;
    if(this.clientCount == 42){
      clearInterval(this.clienCountStop);
    }
  },10);

  supportCountStop:any =  setInterval(() => {
    this.supportCount++;
    if(this.supportCount == 1453){
      clearInterval(this.supportCountStop);
    }
  },10);

  jsCountStop:any =  setInterval(() => {
    this.jsCount++;
    if(this.jsCount == 15){
      clearInterval(this.jsCountStop);
    }
  },10);

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      1200: {
        items: 3
      }
    },
    nav: true
  }

}
