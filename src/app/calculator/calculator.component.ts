import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState, Counter } from '../news/store/app.state';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  searchTimes$: Observable<Counter>;

  constructor(private store: Store<AppState>) {
    this.searchTimes$ = this.store.select('counter');
    // this.searchTimes$.subscribe((value) => console.log(value));
  }
}
