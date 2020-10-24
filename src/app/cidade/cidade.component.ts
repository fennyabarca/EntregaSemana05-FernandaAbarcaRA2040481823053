import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Previsao } from '../model/previsao'
import { PrevisoesService } from '../previsoes.service'
import { Weather } from '../model/weather';
import { Main } from '../model/main';


@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
})

export class CidadeComponent implements OnInit {
  URI: string;
  constructor(private http:HttpClient) {
    this.URI = 'http://api.openweathermap.org/data/2.5/forecast?q=sao%paulo&appid=9ae5e8e4a93c23406a887bf3dee1f5f8&units=metric&lang=pt_br&cnt=9'
  }
  ngOnInit() {

  }
  getWeather(cityName: string){
    this.http.get(`${this.URI}${cityName}`);
    return cityName;
  }
}
