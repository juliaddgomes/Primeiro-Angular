import { Component } from "@angular/core";

@Component({
selector: 'app-meu-primeiro', // é a tag 
template:` <div> 
    <p> Sou um componente feito na unha </p>
    <app-segundo></app-segundo>
    <app-segundo></app-segundo>
    <app-segundo></app-segundo>
    <app-segundo></app-segundo>
    <p>Fim!</p></div>`,
}) // metadados

export class MeuPrimeiroComponent {}
    
