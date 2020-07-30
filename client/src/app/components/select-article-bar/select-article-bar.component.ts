import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-article-bar',
  templateUrl: './select-article-bar.component.html',
  styleUrls: ['./select-article-bar.component.less']
})
export class SelectArticleBarComponent implements OnInit {
  articleTags:any = [
    'html','css','javascript','vue','react'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
