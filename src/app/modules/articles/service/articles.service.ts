import { Injectable } from '@angular/core';
import articleData from '../components/utils/data-mocks/article.json';
import { of, Observable } from 'rxjs';
import { Article } from '../models/article';
import { delay } from 'rxjs/operators';
const articleMock = articleData;
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  getArticles(): Observable<Article[]> {
    return of(articleMock as Article[]).pipe(delay(2000));
  }

  addArticle(articleNew: Article) {
    articleMock.push(articleNew);
  }

  editArticle(articlerNew: Article) {
    let articleResult = articleMock.filter((article : Article) => {
      return article.code !== articlerNew.code;
    });
    articleMock.length = 0;
    articleMock.push(articlerNew, ...articleResult);
  }

  deleteArticle(code: string) {
    let articleResult = articleMock.filter((article : Article) => {
      return article.code !== code;
    });
    articleMock.length = 0;
    articleMock.push( ...articleResult);
  }

  filterArticles(searching: string = '') {
   return articleMock.filter((product) => {
      return (
        product.name
          .toLowerCase()
          .includes(searching.toLowerCase() || '')
      );
    });
  }

}

