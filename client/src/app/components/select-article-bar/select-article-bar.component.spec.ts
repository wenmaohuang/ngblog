import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectArticleBarComponent } from './select-article-bar.component';

describe('SelectArticleBarComponent', () => {
  let component: SelectArticleBarComponent;
  let fixture: ComponentFixture<SelectArticleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectArticleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectArticleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
