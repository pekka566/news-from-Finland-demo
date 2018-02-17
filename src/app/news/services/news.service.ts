import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SearchParameters } from '../actions/news.actions';
import { format } from 'date-fns';

@Injectable()
export class NewsApiService {
  baseUrl: string;
  apiKey: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://news-from-finland-api.herokuapp.com/news';
  }

  public fetchArticles(searchParameters: SearchParameters): Observable<any> {
    const beginDateStr = format(searchParameters.startDate, 'YYYYMMDD');
    const endDateStr = format(searchParameters.endDate, 'YYYYMMDD');
    const params: string = [
      `?q=${searchParameters.question}`,
      `begin_date=${beginDateStr}`,
      `end_date=${endDateStr}`
    ].join('&');
    const queryUrl = `${this.baseUrl}${params}`;
    // console.log(queryUrl);
    return this.http.get<any>(queryUrl).catch(this.handleError);
  }

  private handleError(error: Response | any) {
    const errMsg = error.message
      ? error.message
      : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
