import { Component,Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NewsServiceService } from 'src/app/service/news-service.service';

@Component({
  selector: 'app-home-msr',
  templateUrl: './home-msr.component.html',
  styleUrls: ['./home-msr.component.css']
})
export class HomeMSRComponent implements OnInit{
  visualizza:string|null|undefined="";
  articles:any;
  constructor(@Inject(DOCUMENT) private document: Document,private n:NewsServiceService){
    this.visualizza=this.document.defaultView?.sessionStorage.getItem('dato');
  }
  ngOnInit(): void {
    this.n.getNews().subscribe((data) => {
      this.articles=data;
    });
  }

  riceviComponent(value: string){
    this.document.defaultView?.sessionStorage.setItem('dato', value);
    console.log(value);
    this.visualizza=this.document.defaultView?.sessionStorage.getItem('dato');
    if(this.visualizza==""){
      this.articles=null;
      console.log("ciao");
      this.n.getNews().subscribe((data) => {
        this.articles=data;
      });
    }
  }
 
}
