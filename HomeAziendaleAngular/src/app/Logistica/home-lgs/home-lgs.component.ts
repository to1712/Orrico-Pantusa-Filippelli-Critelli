import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,Inject, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DatabaseService } from 'src/app/service/database.service';
import { Magazzino } from 'src/app/Magazzino';
import { MatTableDataSource } from '@angular/material/table';
import Chart from 'chart.js/auto';
import { NewsServiceService } from 'src/app/service/news-service.service';


@Component({
  selector: 'app-home-lgs',
  templateUrl: './home-lgs.component.html',
  styleUrls: ['./home-lgs.component.css']
})
export class HomeLGSComponent implements OnInit{
  visualizza:string|null|undefined="";
  magazzino:Magazzino[]=[];
  prodotti:string[]=[];
  qta:number[]=[];
  grafico!: Chart;
  constructor(@Inject(DOCUMENT) private document: Document,private d:DatabaseService){
    this.visualizza=this.document.defaultView?.sessionStorage.getItem('dato');
  }
  ngOnInit(): void {
    this.d.getMagazzino().subscribe((ma)=>{this.magazzino=ma
      this.magazzino.forEach(f=>{
        this.prodotti.push(f.id_prodotto);
        this.qta.push(f.qta);
      })
    })
    setTimeout(()=>{
      this.grafic();},500);
  }
  
  grafic(){ 
    this.grafico = new Chart('grafico', {
    type: 'bar',
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
    data: {
      labels:this.prodotti,
      datasets: [
        {
          label:"Bilancio",
          data: this.qta,
          
          backgroundColor: [
            'rgb(255, 165, 0)',
            ' rgb(128, 0, 128)',
             ' rgb(0, 255, 255)',
              'rgb(144, 238, 144)',
               'rgb(139, 0, 0)',
               ' rgb(0, 0, 139)',
               'rgb(255, 215, 0)',
                'rgb(192, 192, 192)',
                 'rgb(205, 127, 50)',
          ],
          hoverBackgroundColor: [
            'rgb(255, 255, 153)',
            'rgb(204, 153, 255)',
            'rgb(153, 255, 255)',
            'rgb(194, 255, 194)',
            'rgb(255, 153, 153)',
            'rgb(153, 153, 255)',
            'rgb(255, 255, 153)',
            'rgb(224, 224, 224)',
            'rgb(255, 197, 140)',
          ]
        }
      ]
      
    }
    
  });}

  riceviComponent(value: string){
    this.document.defaultView?.sessionStorage.setItem('dato', value);
    console.log(value);
    this.visualizza=this.document.defaultView?.sessionStorage.getItem('dato');
    if(this.visualizza==""){
      this.prodotti=[];
      this.qta=[];
      this.d.getMagazzino().subscribe((ma)=>{this.magazzino=ma
        this.magazzino.forEach(f=>{
          this.prodotti.push(f.id_prodotto);
          this.qta.push(f.qta);
        })
      })
      setTimeout(()=>{
        this.grafic();},500);
      }
    }
  }

