import { Component, OnInit } from '@angular/core';
import { State } from '../reducers/news.reducer';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {
  news$: Store<any>;
  isStatusOk: boolean;
  counter$: Observable<number>;
  host;

  constructor(private store$: Store<State>) {
    this.news$ = store$.select('news');
    this.news$.subscribe((val) => {
      // console.log(val);
    });
  }

  ngOnInit() {
    this.host = 'http://www.nytimes.com/';
  }

  public imageUrl(multimedias) {
    const filteredMultimedia = multimedias.filter((value) => {
      return value.subtype === 'largeHorizontal375';
    });
    return filteredMultimedia.length === 1 ? this.host + filteredMultimedia[0].url : undefined;
  }
}
