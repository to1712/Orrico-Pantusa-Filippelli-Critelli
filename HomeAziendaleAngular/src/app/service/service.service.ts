import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Utente} from '../Utente';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService{
  private url : string = "http://localhost:8080";
  s:string | null="";

  constructor(private http: HttpClient) { }

  getUtente(JsessionId:string|null):Observable<Utente>{

    var utente:Observable<Utente>=this.http.post<Utente>(this.url + "/getUtente?Jsessionid=" + JsessionId,{});
    console.log(utente);
    return utente;
  }
  setSession(s :string|null){
    this.s=s;
  }
  getSession(){
    return this.s;
  }
}
