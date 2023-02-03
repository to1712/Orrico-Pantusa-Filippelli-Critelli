import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-tesoreria',
  templateUrl: './barra-tesoreria.component.html',
  styleUrls: ['./barra-tesoreria.component.css']
})
export class BarraTesoreriaComponent {
  @Output() event=new EventEmitter<string>();
  visualizza:string="";
  constructor(){}
  componentView(value:string){
    this.visualizza=value;
    this.event.emit(this.visualizza);
  }
}
