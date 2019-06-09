import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from 'src/app/services/open-weather-map.service';
import { Observable, Subject } from 'rxjs';
import { Weather } from 'src/app/models/weather';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  	
  listWeather$: Observable<Weather[]>;

  constructor(
    private openWeatherMapService: OpenWeatherMapService
  ) { }

  ngOnInit() {
  }

  onSearch(cityName: string) {
    this.listWeather$ = this.openWeatherMapService.find(cityName);
  }

  onClick(weather) {
    console.log(weather);
  }

}
