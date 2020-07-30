import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleHotBarComponent } from './article-hot-bar.component';

describe('ArticleHotBarComponent', () => {
  let component: ArticleHotBarComponent;
  let fixture: ComponentFixture<ArticleHotBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleHotBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleHotBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
