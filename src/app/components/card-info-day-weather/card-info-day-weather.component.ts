import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-card-info-day-weather',
  templateUrl: './card-info-day-weather.component.html',
  styleUrls: ['./card-info-day-weather.component.scss']
})
export class CardInfoDayWeatherComponent implements OnInit {

  @Input() weather: Weather

  icon: string;

  constructor() { }

  ngOnInit() {
    this.icon = `https://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`;
  }

}
