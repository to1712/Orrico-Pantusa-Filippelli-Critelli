import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-barra-amministratore',
  templateUrl: './barra-amministratore.component.html',
  styleUrls: ['./barra-amministratore.component.css']
})
export class BarraAmministratoreComponent {
  @Output() event=new EventEmitter<string>();
  visualizza:string="";
  constructor(){}
  componentView(value:string){
    this.visualizza=value;
    this.event.emit(this.visualizza);
  }
}
