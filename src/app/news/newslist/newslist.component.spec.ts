import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistComponent } from './newslist.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../reducers/counter';
import { newsReducer } from '../reducers/news.reducer';

describe('NewslistComponent', () => {
  let component: NewslistComponent;
  let fixture: ComponentFixture<NewslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ counter: counterReducer, newsReducer }),
      ],
      declarations: [ NewslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
