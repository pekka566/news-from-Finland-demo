import { Action } from '@ngrx/store';

// Fetching News via News API
export const FETCH_NEWS = 'Fetch News';
export const FETCH_NEWS_DONE = 'Fetch News Done';

export class FetchNews implements Action {
  readonly type = FETCH_NEWS;
  constructor(public payload: { query: SearchParameters}) {}
}

export class FetchNewsDone implements Action {
  readonly type = FETCH_NEWS_DONE;
  constructor(public payload: any) {}
}

export type Actions =  FetchNews | FetchNewsDone;

export class SearchParameters {
  public question: string;
  public startDate: Date;
  public endDate: Date;

  constructor(question: string, startDate: Date, endDate: Date) {
    this.question = question;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
