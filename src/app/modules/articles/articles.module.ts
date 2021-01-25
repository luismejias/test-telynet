import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { articlesRoutes } from './articles.routes';
import { RegisterArticleComponent } from './components/register-article/register-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ArticlesService } from './service/articles.service';
import { DeleteArticleComponent } from './components/delete-article/delete-article.component';


@NgModule({
  declarations: [RegisterArticleComponent, EditArticleComponent, ListArticleComponent, DeleteArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(articlesRoutes),
    SharedModule
  ],
  providers: [ArticlesService]
})
export class ArticlesModule { }
