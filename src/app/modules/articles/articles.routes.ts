import { Routes } from '@angular/router';
import { ListArticleComponent } from './components/list-article/list-article.component';

export const articlesRoutes: Routes = [
	{
		path: '',
		component: ListArticleComponent,
	}
];
