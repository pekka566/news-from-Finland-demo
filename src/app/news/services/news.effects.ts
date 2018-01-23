import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as NewsActions from '../actions/news.actions';
import { NewsApiService } from './news.service';

@Injectable()

export class NewsEffects {

  constructor(private actions$: Actions,
              private newsApiService: NewsApiService) {}

  @Effect()
  fetchNews$: Observable<Action> = this.actions$
  .ofType(NewsActions.FETCH_NEWS)
  .map(toPayload)
  .switchMap(query => {
      return this.newsApiService.fetchArticles(query)
      .map(news => new NewsActions.FetchNewsDone(news));
  });

}
