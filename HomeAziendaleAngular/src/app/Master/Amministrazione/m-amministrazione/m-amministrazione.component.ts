import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-m-amministrazione',
  templateUrl: './m-amministrazione.component.html',
  styleUrls: ['./m-amministrazione.component.css']
})
export class MAmministrazioneComponent {
  @Output() event=new EventEmitter<string>();
  visualizza:string="";
  constructor(){}
  componentView(value:string){
    this.visualizza=value;
    this.event.emit(this.visualizza);
  }
}
