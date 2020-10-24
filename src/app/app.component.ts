import { CompileStylesheetMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { Previsao } from '../app/model/previsao'
import { PrevisoesService } from './previsoes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  previsoes: Previsao[];
  //injeção de dependencia
  constructor (private PrevisoesService: PrevisoesService){
    PrevisoesService.obterPrevisoes().subscribe ((previsoes) => {
      this.previsoes = previsoes['list'];
      console.log(this.previsoes);
    });
  }
}


