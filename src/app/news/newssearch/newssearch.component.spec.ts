import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from '../services/news.service';
import { NewssearchComponent } from './newssearch.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../reducers/counter';
import { newsReducer } from '../reducers/news.reducer';

describe('NewssearchComponent', () => {
  let component: NewssearchComponent;
  let fixture: ComponentFixture<NewssearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BsDatepickerModule.forRoot(),
        HttpClientModule,
        StoreModule.forRoot({ counter: counterReducer, newsReducer }),
      ],
      declarations: [
        NewssearchComponent,
      ],
      providers: [NewsApiService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewssearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
