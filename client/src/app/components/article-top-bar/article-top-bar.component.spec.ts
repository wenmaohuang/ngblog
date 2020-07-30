import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTopBarComponent } from './article-top-bar.component';

describe('ArticleTopBarComponent', () => {
  let component: ArticleTopBarComponent;
  let fixture: ComponentFixture<ArticleTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
