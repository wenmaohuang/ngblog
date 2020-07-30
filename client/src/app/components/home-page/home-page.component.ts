import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  bgheight:any = window.innerHeight
  
  constructor() { 
    // this.bgheight = window.innerHeight
    console.log(this,'a/');
  }



  ngOnInit(): void {
    console.log(this,'a,');
    console.log(window,'a.');
    

  }

}
