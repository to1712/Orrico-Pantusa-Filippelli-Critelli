import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Fornitore } from 'src/app/Fornitore';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-fornitori',
  templateUrl: './fornitori.component.html',
  styleUrls: ['./fornitori.component.css']
})
export class FornitoriComponent {
  fornitori:Fornitore[]=[];
  displayedColumns:string[] = ['nome', 'citta_provenienza'];
  dataSource:MatTableDataSource<Fornitore> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private d:DatabaseService){
    this.d.getFornitori().subscribe((fo)=>{this.fornitori=fo
      this.dataSource = new MatTableDataSource(this.fornitori)
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

}
