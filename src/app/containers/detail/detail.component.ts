import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from 'src/app/services/open-weather-map.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private id: number = this.route.snapshot.params.id;
  private cityName: string = '';
  
  weather$: Observable<Weather>;
  listForecast$: Observable<Weather[]>;

  constructor(
    private openWeatherMapService: OpenWeatherMapService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.weather$ = this.openWeatherMapService.findCityById(this.id);
    this.listForecast$ = this.openWeatherMapService.forecast(this.id);
  }

}
