import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorBarComponent } from './visitor-bar.component';

describe('VisitorBarComponent', () => {
  let component: VisitorBarComponent;
  let fixture: ComponentFixture<VisitorBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
