import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewslistComponent } from './news/newslist/newslist.component';
import { NewssearchComponent } from './news/newssearch/newssearch.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NewsApiService } from './news/services/news.service';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './news/reducers/counter';
import { newsReducer } from './news/reducers/news.reducer';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BsDatepickerModule.forRoot(),
        HttpClientModule,
        StoreModule.forRoot({ counter: counterReducer, newsReducer }),
      ],
      declarations: [
        AppComponent,
        NewsComponent,
        NewslistComponent,
        NewssearchComponent,
        CalculatorComponent,
      ],
      providers: [NewsApiService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
