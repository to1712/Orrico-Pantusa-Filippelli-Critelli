import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-master',
  templateUrl: './barra-master.component.html',
  styleUrls: ['./barra-master.component.css']
})
export class BarraMasterComponent {
  @Output() event=new EventEmitter<string>();
  visualizza:string="";
  constructor(){}
  componentView(value:string){
    this.visualizza=value;
    this.event.emit(this.visualizza);
  }
}
