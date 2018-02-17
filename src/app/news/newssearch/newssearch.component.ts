import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { NewsApiService } from '../services/news.service';
import { AppState } from '../store/app.state';
import { INCREMENT, DECREMENT, RESET } from '../reducers/counter';
import * as fromRoot from '../reducers/news.reducer';
import * as Actions from '../actions/news.actions';
import { SearchParameters } from '../actions/news.actions';

const currentDate = new Date();

@Component({
  selector: 'app-newssearch',
  templateUrl: './newssearch.component.html'
})
export class NewssearchComponent {
  minDate = new Date(currentDate.getFullYear() - 1, 0, 1);
  maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 31);

  bsValue: Date = new Date();
  bsRangeValue: any = [
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - 7
    ),
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    )
  ];

  colorTheme = 'theme-blue';
  bsConfig: Partial<BsDatepickerConfig>;

  city = '';
  newsApiService: NewsApiService;
  errorMessage;

  constructor(
    private newsService: NewsApiService,
    private store$: Store<AppState>,
    private newsStore$: Store<fromRoot.State>
  ) {
    this.newsApiService = newsService;
    this.bsConfig = Object.assign(
      {},
      {
        containerClass: this.colorTheme,
        minDate: this.minDate,
        maxDate: this.maxDate
      }
    );
  }

  onSubmit() {
    const pCity = this.city === '' ? 'Finland' : this.city;
    const params = new SearchParameters(
      pCity,
      this.bsRangeValue[0],
      this.bsRangeValue[1]
    );
    this.increment();
    this.fetchNews(params);

    const loading = this.newsStore$.select(state => state.loading);
    // loading.subscribe((val) => console.log(val));
  }

  fetchNews(params) {
    this.newsStore$.dispatch({ type: Actions.FETCH_NEWS, payload: params });
  }

  increment() {
    this.store$.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store$.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store$.dispatch({ type: RESET });
  }
}
