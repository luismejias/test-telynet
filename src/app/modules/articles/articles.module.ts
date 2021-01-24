import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { RegisterArticleComponent } from './components/register-article/register-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ListArticleComponent } from './components/list-article/list-article.component';


@NgModule({
  declarations: [RegisterArticleComponent, EditArticleComponent, ListArticleComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
