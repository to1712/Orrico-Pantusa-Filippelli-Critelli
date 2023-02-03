import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Filiale } from 'src/app/Filiale';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-bilancio',
  templateUrl: './bilancio.component.html',
  styleUrls: ['./bilancio.component.css']
})
export class BilancioComponent {
  filiali:Filiale[]=[];
  filiale!:Filiale;
  displayedColumns: string[] = ['id', 'citta','bilancio'];
  dataSource: MatTableDataSource<Filiale>=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  sum!:number;
  constructor(private s:DatabaseService){
    this.s.getFiliali().subscribe((fi)=>{
      this.filiali=fi
      this.dataSource = new MatTableDataSource(this.filiali);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  ngOnInit(): void {}

  calcolaBilancio()
  {
    let incassi=0;
    let spese=0;
    let totale=0;
    for(let i = 0;i < this.filiali.length;i++)
    {
      if(this.filiali[i].id == this.filiale.id)
      {

          incassi = this.filiali[i].incasso_gen+
                this.filiali[i].incasso_feb+
                this.filiali[i].incasso_mar+
                this.filiali[i].incasso_apr+
                this.filiali[i].incasso_mag+
                this.filiali[i].incasso_giu+
                this.filiali[i].incasso_lug+
                this.filiali[i].incasso_ago+
                this.filiali[i].incasso_set+
                this.filiali[i].incasso_ott+
                this.filiali[i].incasso_nov+
                this.filiali[i].incasso_dic;
          spese = this.filiali[i].spese_gen+
                this.filiali[i].spese_feb+
                this.filiali[i].spese_mar+
                this.filiali[i].spese_apr+
                this.filiali[i].spese_mag+
                this.filiali[i].spese_giu+
                this.filiali[i].spese_lug+
                this.filiali[i].spese_ago+
                this.filiali[i].spese_set+
                this.filiali[i].spese_ott+
                this.filiali[i].spese_nov+
                this.filiali[i].spese_dic;

      }

    }

    totale = incassi - spese;
    console.log(this.filiale.id);
    this.s.addBilancio(this.filiale.id,totale);
    setTimeout(()=>{
      this.s.getFiliali().subscribe((fi)=>{
        this.filiali=fi
        this.dataSource = new MatTableDataSource(this.filiali);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    },500);
    this.filiale.id = "";
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

