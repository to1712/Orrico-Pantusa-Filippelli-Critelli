import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Filiale } from 'src/app/Filiale';
import { DatabaseService } from 'src/app/service/database.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-incassi',
  templateUrl: './incassi.component.html',
  styleUrls: ['./incassi.component.css']
})
export class IncassiComponent {
  filiali:Filiale[]=[];
  displayedColumns:string[] = ['id', 'citta','incasso_gen','incasso_feb','incasso_mar','incasso_apr'
  ,'incasso_mag','incasso_giu','incasso_lug','incasso_ago'
  ,'incasso_set','incasso_ott','incasso_nov','incasso_dic'];
  dataSource:MatTableDataSource<Filiale> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private d:DatabaseService){
    this.d.getFiliali().subscribe((fi)=>{this.filiali=fi
      this.dataSource = new MatTableDataSource(this.filiali)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  exportEXCEL() {

    let filteredData = [];

      for (let filiale of this.filiali) {
        console.log(filiale);
        filteredData.push({
          'id': filiale.id,
          'citta': filiale.citta,
          'incasso_gen': filiale.incasso_gen,
          'incasso_feb': filiale.incasso_feb,
          'incasso_mar': filiale.incasso_mar,
          'incasso_apr': filiale.incasso_apr,
          'incasso_mag': filiale.incasso_mag,
          'incasso_giu': filiale.incasso_giu,
          'incasso_lug': filiale.incasso_lug,
          'incasso_ago': filiale.incasso_ago,
          'incasso_set': filiale.incasso_set,
          'incasso_ott': filiale.incasso_ott,
          'incasso_nov': filiale.incasso_nov,
          'incasso_dic': filiale.incasso_dic
        });
    }

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(filteredData);
    XLSX.utils.book_append_sheet(wb, ws, 'Filiali');
    XLSX.writeFile(wb, 'IncassiFiliali.xlsx');
  }
}
