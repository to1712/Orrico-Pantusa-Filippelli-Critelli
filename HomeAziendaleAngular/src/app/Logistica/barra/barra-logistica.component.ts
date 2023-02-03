import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-logistica',
  templateUrl: './barra-logistica.component.html',
  styleUrls: ['./barra-logistica.component.css']
})
export class BarraLogisticaComponent {
  @Output() event=new EventEmitter<string>();

  visualizza:string="";
  constructor(){}
  componentView(value:string){
    this.visualizza=value;
    this.event.emit(this.visualizza);
  }
 

}
