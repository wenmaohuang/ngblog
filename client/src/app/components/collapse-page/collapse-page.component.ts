import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-collapse-page',
  templateUrl: './collapse-page.component.html',
  styleUrls: ['./collapse-page.component.less']
})
export class CollapsePageComponent implements OnInit {


  panels: any = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false
    },
  ]

  constructor(private elementRef: ElementRef) { }

  handleOver(){
      this.elementRef.nativeElement.querySelector('.input').focus();
      
  }

  ngOnInit(): void {
  }

}
