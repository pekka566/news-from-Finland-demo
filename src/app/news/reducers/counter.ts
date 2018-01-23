// counter.ts
import { Action } from '@ngrx/store';
import { AppState, uiInitialState, Counter } from '../store/app.state';


export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(
  state: AppState = uiInitialState(),
  action: Action): AppState {
  switch (action.type) {
    case INCREMENT: {
      const addOne = new Counter(state.counter.count + 1);
      return  {
        ...state,
        counter: addOne,
      };
    }

    case DECREMENT: {
      const minusOne = new Counter(state.counter.count - 1);
      return  {
        ...state,
        counter: minusOne,
      };
    }

    case RESET: {
      return  {
        ...state,
        counter: new Counter(0),
      };
    }

    default:
      return state;
  }
}
