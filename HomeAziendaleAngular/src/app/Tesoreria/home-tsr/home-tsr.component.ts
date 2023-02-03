import { Component,Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import Chart from 'chart.js/auto';
import { Filiale } from 'src/app/Filiale';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-home-tsr',
  templateUrl: './home-tsr.component.html',
  styleUrls: ['./home-tsr.component.css']
})
export class HomeTSRComponent implements OnInit {
  visualizza:string|null|undefined="";
  filiali:Filiale[]=[];
  filialii:string[]=[];
  bilanci:number[]=[];
  grafico!: Chart;
  constructor(@Inject(DOCUMENT) private document: Document,private s:DatabaseService){
    this.visualizza=this.document.defaultView?.sessionStorage.getItem('dato');
  }
  ngOnInit(): void {
    this.s.getFiliali().subscribe((fi)=>{
      this.filiali=fi;
      this.filiali.forEach(f=>{
        this.filialii.push(f.id);
        this.bilanci.push(f.bilancio);
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
      labels:this.filialii,
      datasets: [
        {
          label:"Quantità",
          data: this.bilanci,
          
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
      this.filialii=[];
      this.bilanci=[];
      this.s.getFiliali().subscribe((f)=>{this.filiali=f
        this.filiali.forEach(f=>{
          this.filialii.push(f.id);
          this.bilanci.push(f.bilancio);
        })
      })
      setTimeout(()=>{
        this.grafic();},500);
      }
  }
}
