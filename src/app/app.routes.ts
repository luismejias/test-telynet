import { Routes } from '@angular/router';
export const appRoutes: Routes = [
	{
		path: 'articles',
		loadChildren: () =>
			import('./modules/articles/articles.module').then((m) => m.ArticlesModule),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'articles',
	},
];
