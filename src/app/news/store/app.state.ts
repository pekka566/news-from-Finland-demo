export interface AppState {
  counter: Counter;
  loading: boolean;
}

export class Counter {
  count: number;

  constructor(count) {
    this.count = count;
  }
}

export function uiInitialState(): AppState {
  return {
    counter: new Counter(0),
    loading: false
  };
}
