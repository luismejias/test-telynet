import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListArticleComponent } from './list-article.component';

describe('ListArticleComponent', () => {
  let component: ListArticleComponent;
  let fixture: ComponentFixture<ListArticleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
