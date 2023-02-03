import { Component, EventEmitter, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from 'src/app/service/database.service';
import { Utente } from 'src/app/Utente';

@Component({
  selector: 'app-dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.css']
})
export class DipendentiComponent implements OnChanges{
  utenti:Utente[]=[];
  ruoli: string[] = ['tsr', 'lgs','mns'];
  sedi: string[] = ['Techno Vision Rende', 'TechnoVision Milano','TechnoVision Roma','TechnoVision Napoli','TechnoVision Torino','TechnoVision Lussemburgo','TechnoVision Cork','TechnoVision Amsterdam','TechnoVision Stoccolma'];
  displayedColumns: string[] = ['nome','cognome','email','password','ruolo','stipendio','sede','delete'];
  dataSource: MatTableDataSource<Utente>=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  nome:string="";
  cognome:string="";
  email:string="";
  password:string="";
  ruolo:string="";
  sede:string="";

  constructor(private s:DatabaseService){
    this.s.getUtenti().subscribe((ut)=>{this.utenti=ut
      this.dataSource = new MatTableDataSource(this.utenti)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  generateEmail(firstName: string, lastName: string): string {
    const fn = firstName.trim().replace(/\s+/g, '');
    const ln = lastName.trim().replace(/\s+/g, '');
    const randomNumber = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    return `${fn}.${ln}-${randomNumber}@technovision.it`;
  }
  createPassword(firstName: string, lastName: string): string {
    const initials = firstName[0] + lastName[0];
    const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return initials + randomNumber;
  }
  delete(e:string){
    console.log(e);
    this.s.deleteDipendente(e);
    setTimeout(()=>{
      this.s.updateTable().subscribe((ut)=>{this.utenti=ut
        this.dataSource = new MatTableDataSource(this.utenti)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    },500);
  }
  onSubmit(){
    this.email=this.generateEmail(this.nome,this.cognome);
    this.password=this.createPassword(this.nome,this.cognome);
    console.log(this.email);
    console.log(this.password);
    this.s.addDipendente(this.nome,this.cognome,this.email,this.password,this.ruolo,this.sede);
    setTimeout(()=>{
      this.s.updateTable().subscribe((ut)=>{this.utenti=ut
        this.dataSource = new MatTableDataSource(this.utenti)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    },500);
    this.nome ="";
    this.cognome ="";
    this.email ="";
    this.password ="";
    this.ruolo ="";
    this.sede = "";
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
