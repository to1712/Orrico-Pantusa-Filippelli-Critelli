import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-m-tesoreria',
  templateUrl: './m-tesoreria.component.html',
  styleUrls: ['./m-tesoreria.component.css']
})
export class MTesoreriaComponent {
  @Output() event=new EventEmitter<string>();
  visualizza:string="";
  constructor(){}
  componentView(value:string){
    this.visualizza=value;
    this.event.emit(this.visualizza);
  }
}
