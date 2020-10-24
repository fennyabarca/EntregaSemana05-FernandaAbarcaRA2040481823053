import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PrevisaoComponent } from './previsao/previsao.component';
import { HttpClientModule } from '@angular/common/http'
import { CidadeComponent } from './cidade/cidade.component';

@NgModule({
  declarations: [	
    AppComponent,
    PrevisaoComponent,
      CidadeComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
