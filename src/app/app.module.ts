import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewslistComponent } from './news/newslist/newslist.component';
import { NewssearchComponent } from './news/newssearch/newssearch.component';

import { NewsApiService } from './news/services/news.service';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './news/reducers/counter';
import { newsReducer } from './news/reducers/news.reducer';
import { CalculatorComponent } from './calculator/calculator.component';

import { EffectsModule } from '@ngrx/effects';
import { NewsEffects } from './news/services/news.effects';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewslistComponent,
    NewssearchComponent,
    CalculatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ counter: counterReducer, news: newsReducer }),  // key must equals the key in the state interface!
    EffectsModule.forRoot([NewsEffects]),
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
