import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-list-day-weather-forecast',
  templateUrl: './list-day-weather-forecast.component.html',
  styleUrls: ['./list-day-weather-forecast.component.scss']
})
export class ListDayWeatherForecastComponent implements OnInit {

  @Input() listForecast: Weather[];

  constructor() { }

  ngOnInit() {
  }

}
