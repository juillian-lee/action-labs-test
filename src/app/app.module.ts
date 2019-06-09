import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CardWeatherComponent } from './components/card-weather/card-weather.component';
import { HomeComponent } from './containers/home/home.component';
import { CardInfoDayWeatherComponent } from './components/card-info-day-weather/card-info-day-weather.component';
import { ListDayWeatherForecastComponent } from './components/list-day-weather-forecast/list-day-weather-forecast.component';
import { DetailComponent } from './containers/detail/detail.component';
import { OpenWeatherMapService } from './services/open-weather-map.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    CardWeatherComponent,
    HomeComponent,
    CardInfoDayWeatherComponent,
    ListDayWeatherForecastComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    OpenWeatherMapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
