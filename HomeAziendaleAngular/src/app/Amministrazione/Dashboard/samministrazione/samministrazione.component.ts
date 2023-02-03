import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from 'src/app/service/database.service';
import { Utente } from 'src/app/Utente';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
//declare let jsPDF: any;

@Component({
  selector: 'app-samministrazione',
  templateUrl: './samministrazione.component.html',
  styleUrls: ['./samministrazione.component.css']
})
export class SamministrazioneComponent implements OnInit {
  utenti:Utente[]=[];
  displayedColumns: any[] = ['nome', 'cognome','stipendio'];
  dataSource: MatTableDataSource<Utente>=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild('content', {static:false}) el!: ElementRef;
  data!:any;
  constructor(private s:DatabaseService){

  }

  ngOnInit(): void {
    this.s.getUtenti().subscribe((ut)=>{
      for(let i=0; i<ut.length; i++){
       if(ut[i].ruolo=="mns"){
         this.utenti.push(ut[i]);
       }
      }
       this.dataSource = new MatTableDataSource(this.utenti);
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
      pdf.text("STIPENDI TESORERIA",80,10);
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('StipendiTesoreria.pdf');
      });


}
}

