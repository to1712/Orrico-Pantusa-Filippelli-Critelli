import { AfterContentInit, AfterViewChecked, AfterViewInit, Component,Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import Chart from 'chart.js/auto';
import { Filiale } from 'src/app/Filiale';
import { DatabaseService } from 'src/app/service/database.service';


@Component({
  selector: 'app-home-mns',
  templateUrl: './home-mns.component.html',
  styleUrls: ['./home-mns.component.css']
})
export class HomeMNSComponent implements OnInit{
  visualizza:string|null|undefined="";
  grafico: any;
  graficoS:any;
  filiali:Filiale[]=[];
  data:string[]=[];
  incassoTotale:number[]=[];
  speseTotali:number[]=[];
  constructor(@Inject(DOCUMENT) private document: Document,private d:DatabaseService){
    this.visualizza=this.document.defaultView?.sessionStorage.getItem('dato');
  }

  ngOnInit(): void {
    this.d.getFiliali().subscribe((fi)=>{this.filiali=fi
      this.filiali.forEach(f => {
      let incassoTotale = f.incasso_gen + f.incasso_feb + f.incasso_mar + f.incasso_apr +
                          f.incasso_mag + f.incasso_giu + f.incasso_lug + f.incasso_ago +
                          f.incasso_set + f.incasso_ott + f.incasso_nov + f.incasso_dic;
      let speseTotale=f.spese_gen + f.spese_feb + f.spese_mar + f.spese_apr +
      f.spese_mag + f.spese_giu + f.spese_lug + f.spese_ago +
      f.spese_set + f.spese_ott + f.spese_nov + f.spese_dic;
      this.incassoTotale.push(incassoTotale);
      this.speseTotali.push(speseTotale);
    });
    })
    setTimeout(()=>{
        this.graficIncassi();
      this.graficSpese();
    },500);
  }
  
  
  graficIncassi(){ 
    this.grafico = new Chart('grafico', {
    type: 'bar',
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
    data: {
      labels:['Techno Vision Rende',
        'TechnoVision Milano',
        'TechnoVision Roma',
        'TechnoVision Napoli',
        'TechnoVision Torino',
        'TechnoVision Lussemburgo',
        'TechnoVision Cork',
        'TechnoVision Amsterdam',
        'TechnoVision Stoccolma'],
      datasets: [
        {
          label:"Incassi",
          data: this.incassoTotale,
          
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
            
            // aggiungere altri colori se necessario
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


           
            // aggiungere altri colori se necessario
          ]
        }
      ]
      
    }
    
  });}
  graficSpese(){ 
    this.graficoS = new Chart('graficoS', {
    type: 'line',
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
    data: {
      labels:['Techno Vision Rende',
        'TechnoVision Milano',
        'TechnoVision Roma',
        'TechnoVision Napoli',
        'TechnoVision Torino',
        'TechnoVision Lussemburgo',
        'TechnoVision Cork',
        'TechnoVision Amsterdam',
        'TechnoVision Stoccolma'],
      datasets: [
        {
          label:"Spese",
          data: this.speseTotali,
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
            // aggiungere altri colori se necessario
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
            
            
            // aggiungere altri colori se necessario
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
      this.incassoTotale=[];
      this.speseTotali=[];
      this.d.getFiliali().subscribe((fi)=>{this.filiali=fi
        this.filiali.forEach(f => {
        let incassoTotale = f.incasso_gen + f.incasso_feb + f.incasso_mar + f.incasso_apr +
                            f.incasso_mag + f.incasso_giu + f.incasso_lug + f.incasso_ago +
                            f.incasso_set + f.incasso_ott + f.incasso_nov + f.incasso_dic;
        let speseTotale=f.spese_gen + f.spese_feb + f.spese_mar + f.spese_apr +
        f.spese_mag + f.spese_giu + f.spese_lug + f.spese_ago +
        f.spese_set + f.spese_ott + f.spese_nov + f.spese_dic;
        this.incassoTotale.push(incassoTotale);
        this.speseTotali.push(speseTotale);
      });
      })
      setTimeout(()=>{
        this.graficIncassi();
      this.graficSpese();
    },500);
    }
  }
   
    
  
}






