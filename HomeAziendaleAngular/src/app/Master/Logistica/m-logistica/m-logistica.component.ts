import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-m-logistica',
  templateUrl: './m-logistica.component.html',
  styleUrls: ['./m-logistica.component.css']
})
export class MLogisticaComponent {
  @Output() event=new EventEmitter<string>();
  visualizza:string="";
  constructor(){}
  componentView(value:string){
    this.visualizza=value;
    this.event.emit(this.visualizza);
  }
}
