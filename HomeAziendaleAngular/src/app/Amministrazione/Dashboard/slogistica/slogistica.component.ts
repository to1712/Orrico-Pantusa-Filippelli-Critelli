import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from 'src/app/service/database.service';
import { Utente } from 'src/app/Utente';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-slogistica',
  templateUrl: './slogistica.component.html',
  styleUrls: ['./slogistica.component.css']
})
export class SlogisticaComponent {
  utenti:Utente[]=[];
  displayedColumns: string[] = ['nome', 'cognome','stipendio'];
  dataSource: MatTableDataSource<Utente>=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  data!:any;

  constructor(private s:DatabaseService){

  }
  ngOnInit(): void {
    this.s.getUtenti().subscribe((ut)=>{
      for(let i=0; i<ut.length; i++){
       if(ut[i].ruolo=="lgs"){
         this.utenti.push(ut[i]);
         //console.log( this.utenti);
       }
      }
      //console.log(ut);
       console.log(this.utenti);
       this.dataSource = new MatTableDataSource(this.utenti);
       console.log(this.dataSource);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
       this.data = document.getElementById('t');
     })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  exportPDF() {

    html2canvas((this.data),{scrollY: -window.scrollY}).then(canvas => {
    const imgWidth = 208;
    const pageHeight = 295;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    const heightLeft = imgHeight;

    const contentDataURL = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const position = 15;
    pdf.text("STIPENDI LOGISTICA",80,10);
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
    pdf.save('StipendiLogistica.pdf');
    });


}
}

