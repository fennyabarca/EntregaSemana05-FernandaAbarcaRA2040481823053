import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Previsao } from './model/previsao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {

  constructor (private httpClient: HttpClient){

  }

  public obterPrevisoes (): Observable<Previsao[]>{
    return this.httpClient.get<Previsao[]> ('http://api.openweathermap.org/data/2.5/forecast?q=sao paulo&appid=9ae5e8e4a93c23406a887bf3dee1f5f8&units=metric&lang=pt_br&cnt=9');
  }
}

