import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from '../Utente';
import { Fornitore } from '../Fornitore';
import { Filiale } from '../Filiale';
import { Magazzino } from '../Magazzino';
import { Spedizione } from '../Spedizione';
import { Prodotto } from '../Prodotto';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http:HttpClient) {}

  private url : string = "http://localhost:8080";

  s:string | null="";

  getUtenti():Observable<Utente[]>{
    var utenti:Observable<Utente[]>=this.http.post<Utente[]>(this.url + "/getUtenti",{});
    console.log();
    return utenti;
  }

  getFornitori():Observable<Fornitore[]>{
    var fornitori:Observable<Fornitore[]> = this.http.post<Fornitore[]>(this.url + "/getFornitori",{});
    return fornitori;
  }

  getFiliali():Observable<Filiale[]>{
    var filiali:Observable<Filiale[]> = this.http.post<Filiale[]>(this.url + "/getFiliali",{});
    return filiali;
  }

  getMagazzino():Observable<Magazzino[]>{
    var magazzino:Observable<Magazzino[]> = this.http.post<Magazzino[]>(this.url + "/getMagazzino",{});
    return magazzino;
  }
  getSpedizioni():Observable<Spedizione[]>{
    var spedizioni:Observable<Spedizione[]> = this.http.post<Spedizione[]>(this.url + "/getSpedizioni",{});
    return spedizioni;
  }
  getProdotti():Observable<Prodotto[]>{
    var prodotti:Observable<Prodotto[]> = this.http.post<Prodotto[]>(this.url + "/getProdotti",{});
    return prodotti;
  }

  addProdotto(id_prodotto:string,id_fornitore:string,qta:number){
    this.http.post<any>(this.url + "/addProdotto", {id_prodotto,id_fornitore,qta}).subscribe(res => {
  });
  }

  addSpedizione(prodotto:string,fornitore:string,filiale:string,qta:number,data:string){
    console.log(prodotto);
    this.http.post<any>(this.url + "/addSpedizione", {prodotto,fornitore,filiale,qta,data}).subscribe(res => {
  });
  }
  addDipendente(nome:string,cognome:string,email:string,password:string,ruolo:string,sede:string){
    this.http.post<string>(this.url + "/addDipendente", {nome,cognome,email,password,ruolo,sede}).subscribe(res => {
    });
  }
  deleteDipendente(email:string){
    this.http.post<string>(this.url + "/deleteDipendente", email).subscribe(res => {
    });
  }
  updateTable():Observable<Utente[]>{
    var utenti:Observable<Utente[]>=this.http.post<Utente[]>(this.url + "/updateUtente",{});
    return utenti;
  }
  updateMagazzino():Observable<Magazzino[]>{
    var magazzino:Observable<Magazzino[]> = this.http.post<Magazzino[]>(this.url + "/updateMagazzino",{});
    return magazzino;
  }

  nuovoStipendio(stipendio:number,email:string){
    this.http.post<any>(this.url + "/nuovoStipendio", {stipendio,email}).subscribe(res => {
    });
  }

  addBilancio(id:string,bilancio:number){
    console.log("DIO CANE");
    this.http.post<any>(this.url + "/addBilancio", {id,bilancio}).subscribe(res => {
    });
  }

  addTelefono(email:string,telefono:string){
    this.http.post<string>(this.url + "/addTelefono", {email,telefono}).subscribe(res => {
  });
  }
}



