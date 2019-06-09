import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.scss']
})
export class CardWeatherComponent implements OnInit {

  @Input() weather: Weather;

  flag: string;
  icon: string;
  constructor() { }

  ngOnInit() {
    this.flag = `http://openweathermap.org/images/flags/${this.weather.sys.country.toLowerCase()}.png`
    this.icon = `https://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`;
  }

}
