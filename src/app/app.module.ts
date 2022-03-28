import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent} from './meuPrimeiro.component';
import { SegundoComponent } from './segundo/segundo.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    SegundoComponent
  ],
  imports: [ // bibiliotecas 
    BrowserModule
  ],
  providers: [],  // executar a logica
  bootstrap: [AppComponent]   
})
export class AppModule { }

//serve para bivliot