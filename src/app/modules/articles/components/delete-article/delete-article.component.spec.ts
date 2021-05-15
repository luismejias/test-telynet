import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteArticleComponent } from './delete-article.component';

describe('DeleteArticleComponent', () => {
  let component: DeleteArticleComponent;
  let fixture: ComponentFixture<DeleteArticleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
