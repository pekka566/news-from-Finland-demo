import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsComponent } from './news.component';
import { NewslistComponent } from './newslist/newslist.component';
import { NewssearchComponent } from './newssearch/newssearch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './services/news.service';
import { CalculatorComponent } from '../calculator/calculator.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../news/reducers/counter';
import { newsReducer } from '../news/reducers/news.reducer';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BsDatepickerModule.forRoot(),
        HttpClientModule,
        StoreModule.forRoot({ counter: counterReducer, newsReducer }),
      ],
      declarations: [
        NewsComponent,
        NewslistComponent,
        NewssearchComponent,
        CalculatorComponent,
      ],
      providers: [NewsApiService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
