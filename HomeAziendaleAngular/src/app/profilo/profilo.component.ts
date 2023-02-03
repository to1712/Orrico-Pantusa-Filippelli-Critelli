import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { ServiceService } from '../service/service.service';
import { Utente } from '../Utente';
import { DOCUMENT } from '@angular/common';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit{
  @Input()utente?:Utente;
  @Input()sessionId:string|null="";
  numero:string="";
  email:string="";
  modificabile:boolean=false;
  visualizza:string|null|undefined="";
  telefono:string="";
  constructor(@Inject(DOCUMENT) private document: Document,private route: ActivatedRoute,private service: ServiceService,private s: DatabaseService){
    this.visualizza=this.document.defaultView?.sessionStorage.getItem('dato');
  }
  ngOnInit(): void {

    var sessionId = this.route.queryParams.subscribe(
        params => {
      var sessionId = this.service.getSession();
      if (sessionId != null){
        console.log(sessionId);
        this.sessionId = sessionId;
        var obs: Observable<Utente> = this.service.getUtente(sessionId);
        obs.subscribe(ut => {this.utente = ut
          this.email=this.utente.email;
        });
      }
      } );


  }
  salvaNumero(){
    this.modificabile=false;
    if(this.numero.length > 10 || this.numero.length < 10)
    {
        alert("Il numero inserito non è valido");
        this.numero = "";
        return;
    }
    this.s.addTelefono(this.email,this.numero);
    var sessionId = this.route.queryParams.subscribe(
      params => {
    var sessionId = this.service.getSession();
    if (sessionId != null){
      console.log(sessionId);
      this.sessionId = sessionId;
      var obs: Observable<Utente> = this.service.getUtente(sessionId);
      obs.subscribe(ut => {this.utente = ut});
    }
    });
  }
  cambiaNumero(){
    this.modificabile=true;
    this.numero = "";
  }

  riceviComponent(value: string){
    this.document.defaultView?.sessionStorage.setItem('dato', value);
    console.log(value);
    this.visualizza=this.document.defaultView?.sessionStorage.getItem('dato');
  }

}
