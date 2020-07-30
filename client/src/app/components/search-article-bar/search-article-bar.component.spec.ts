import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchArticleBarComponent } from './search-article-bar.component';

describe('SearchArticleBarComponent', () => {
  let component: SearchArticleBarComponent;
  let fixture: ComponentFixture<SearchArticleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchArticleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchArticleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
