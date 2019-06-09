
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';

/**
 * Service para buscar as informações da api openweathermap.
 */
@Injectable()
export class OpenWeatherMapService {
    constructor(private http: HttpClient) { }

    /**
     * Busca as informações pelo nome da cidade
     * 
     * @param cityName 
     */
    find(cityName: string): Observable<Weather[]> {
        return this.http.get(`${environment.openweathermap.api}/find?q=${cityName}&appId=${environment.openweathermap.appId}&units=metric`)
            .pipe(
                map((response: any) => {
                    return response.list;
                })
            )
    }

    findCityById(id: number): Observable<Weather> {
        return this.http.get(`${environment.openweathermap.api}/weather?id=${id}&appId=${environment.openweathermap.appId}&units=metric`)
            .pipe(
                map((response: any) => {
                    return response;
                })
            )

    }

    forecast(id: number): Observable<Weather[]> {
        return this.http.get(`${environment.openweathermap.api}/forecast?id=${id}&appId=${environment.openweathermap.appId}&units=metric`)
            .pipe(
                map((response: any) => {
                    return response.list;
                })
            )
    }



}