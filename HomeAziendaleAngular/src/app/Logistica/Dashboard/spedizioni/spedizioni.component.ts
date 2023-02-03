import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Filiale } from 'src/app/Filiale';
import { Fornitore } from 'src/app/Fornitore';
import { Magazzino } from 'src/app/Magazzino';
import { DatabaseService } from 'src/app/service/database.service';
import { Spedizione } from 'src/app/Spedizione';



@Component({
  selector: 'app-spedizioni',
  templateUrl: './spedizioni.component.html',
  styleUrls: ['./spedizioni.component.css']
})
export class SpedizioniComponent{
  spedizioni:Spedizione[]=[];
  magazzino:Magazzino[]=[];
  fornitore:Fornitore[]=[];
  filiale:Filiale[]=[];
  fornitoriProdotto:string[]=[];
  v:string="";
  
  
  prod!:string;
  forn!:string;
  fil!:string;
  qta!:any;

  currentDate!: string;

  displayedColumns:string[] = ['prodotto','fornitore','filiale','qta','data'];
  dataSource:MatTableDataSource<Spedizione> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private d:DatabaseService){
    this.d.getSpedizioni().subscribe((sp)=>{this.spedizioni=sp
      this.dataSource = new MatTableDataSource(this.spedizioni)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    this.d.getMagazzino().subscribe((ma)=>{
      this.magazzino=ma
    })
    this.d.getFornitori().subscribe((fo)=>{
      this.fornitore=fo
    })
    this.d.getFiliali().subscribe((fi)=>{
      this.filiale=fi
    })
    
  }
  
 


  prodottoSelezionato(event:MatSelectChange){
    this.v=event.value;
    let uniqueArray = [];
    let map = new Map();
    for(let i=0; i<this.magazzino.length; i++){
        if(this.magazzino[i].id_prodotto==this.v){
          if (!map.has(this.magazzino[i].id_fornitore)) {
            map.set(this.magazzino[i].id_fornitore, true);
            uniqueArray.push(this.magazzino[i].id_fornitore);
          }
        }
    }
    this.fornitoriProdotto = uniqueArray;
  }


  onSubmit(){
    for(let i=0; i<this.magazzino.length; i++){
      if(this.magazzino[i].id_prodotto==this.prod){
        if(this.qta>this.magazzino[i].qta){
          alert("La quatità non è disponibile in magazzino");
          return;
        }
      }
    }

    console.log("PRODOTTO: " + this.prod);
    console.log("FORNITORE: " + this.forn);
    console.log("FILIALE: " + this.fil);
    console.log("QUANTITA': " + this.qta);
    const data = new Date();
    const formattedDate = data.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const formattedTime = data.toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const result = `${formattedDate} ${formattedTime}`;

    
    this.d.addSpedizione(this.prod,this.forn,this.fil,this.qta,result);
    setTimeout(()=>{
    this.d.getSpedizioni().subscribe((sp)=>{this.spedizioni=sp
      this.dataSource = new MatTableDataSource(this.spedizioni)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  },500);

  this.prod = "";
  this.forn = "";
  this.fil = "";
  this.qta = null;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

  
}

