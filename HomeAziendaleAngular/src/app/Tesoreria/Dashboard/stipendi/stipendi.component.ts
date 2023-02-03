import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';
import { Utente } from 'src/app/Utente';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-stipendi',
  templateUrl: './stipendi.component.html',
  styleUrls: ['./stipendi.component.css']
})
export class StipendiComponent {
  utenti:Utente[]=[];
  displayedColumns: string[] = ['nome', 'cognome','stipendio'];
  dataSource: MatTableDataSource<Utente>=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  dipendenti:string[]=[];
  dipendente:string="";

  constructor(private s:DatabaseService){
    this.s.getUtenti().subscribe((ut)=>{this.utenti=ut
      this.dataSource = new MatTableDataSource(this.utenti)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      let j = 0;
      for(let i = 0;i < this.utenti.length;i++)
        if(this.utenti[i].stipendio == 0)
          this.dipendenti[j++] = this.utenti[i].email;
    })

  }

  calcolaStipendio()
  {
    let stipendio = 0;
    let email = "";
    for(let i = 0;i < this.utenti.length;i++)
    {
      if(this.utenti[i].email == this.dipendente)
      {
        email = this.utenti[i].email;
        if(this.utenti[i].ruolo == 'mns')
          stipendio = 2000;
        else if(this.utenti[i].ruolo == 'tsr')
          stipendio = 1800;
        else if(this.utenti[i].ruolo == 'lgs')
          stipendio = 1500;
      }
    }

    this.s.nuovoStipendio(stipendio,email);
    setTimeout(()=>{
      this.s.getUtenti().subscribe((ut)=>{this.utenti=ut
        this.dataSource = new MatTableDataSource(this.utenti)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      })
    },500);
    this.dipendente= "";

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
