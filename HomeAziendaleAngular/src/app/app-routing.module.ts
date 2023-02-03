import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMNSComponent } from './Amministrazione/home-mns/home-mns.component';
import { HomeLGSComponent } from './Logistica/home-lgs/home-lgs.component';
import { HomeMSRComponent } from './Master/home-msr/home-msr.component';
import { HomeTSRComponent } from './Tesoreria/home-tsr/home-tsr.component';
import { ProfiloComponent } from './profilo/profilo.component';


const routes: Routes = [
  {path:'profilo',component:ProfiloComponent},
  {path:'mns',component:HomeMNSComponent},
  {path:'lgs',component:HomeLGSComponent},
  {path:'it',component:HomeMSRComponent},
  {path:'tsr',component:HomeTSRComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
