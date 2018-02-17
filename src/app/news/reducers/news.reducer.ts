import { SearchParameters } from '../actions/news.actions';

import * as NewsActions from '../actions/news.actions';

export interface State {
  loading: boolean;
  searchParameters: SearchParameters;
  news: any;
}

const initialState: State = {
  loading: false,
  searchParameters: null,
  news: null
};

export function newsReducer(
  state = initialState,
  action: NewsActions.Actions
): State {
  switch (action.type) {
    case NewsActions.FETCH_NEWS: {
      // console.table([action.type, action.payload]);
      return {
        ...state,
        loading: true,
        searchParameters: action.payload.query
      };
    }
    case NewsActions.FETCH_NEWS_DONE: {
      // console.table([action.type, action.payload]);
      return {
        ...state,
        loading: false,
        news: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
