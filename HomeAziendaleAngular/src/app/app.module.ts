import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { BarraAmministratoreComponent } from './Amministrazione/barra/barra-amministratore.component';
import { BarraTesoreriaComponent } from './Tesoreria/barra/barra-tesoreria.component';
import { BarraMasterComponent } from './Master/barra/barra-master.component';
import { BarraLogisticaComponent } from './Logistica/barra/barra-logistica.component';
import { HomeTSRComponent } from './Tesoreria/home-tsr/home-tsr.component';
import { HomeMSRComponent } from './Master/home-msr/home-msr.component';
import { HomeLGSComponent } from './Logistica/home-lgs/home-lgs.component';
import { HomeMNSComponent } from './Amministrazione/home-mns/home-mns.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { HttpClientModule } from '@angular/common/http';
import { IncassiComponent } from './Amministrazione/Dashboard/incassi/incassi.component';
import { SpeseComponent } from './Amministrazione/Dashboard/spese/spese.component';
import { SlogisticaComponent } from './Amministrazione/Dashboard/slogistica/slogistica.component';
import { SamministrazioneComponent } from './Amministrazione/Dashboard/samministrazione/samministrazione.component';
import { StesoreriaComponent } from './Amministrazione/Dashboard/stesoreria/stesoreria.component';
import { FornitoriComponent } from './Logistica/Dashboard/fornitori/fornitori.component';
import { MagazzinoComponent } from './Logistica/Dashboard/magazzino/magazzino.component';
import { SpedizioniComponent } from './Logistica/Dashboard/spedizioni/spedizioni.component';
import { StipendiComponent } from './Tesoreria/Dashboard/stipendi/stipendi.component';
import { BilancioComponent } from './Tesoreria/Dashboard/bilancio/bilancio.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MTesoreriaComponent } from './Master/Tesoreria/m-tesoreria/m-tesoreria.component';
import { MLogisticaComponent } from './Master/Logistica/m-logistica/m-logistica.component';
import { MAmministrazioneComponent } from './Master/Amministrazione/m-amministrazione/m-amministrazione.component';
import { DipendentiComponent } from './Master/Dipendenti/dipendenti/dipendenti.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    BarraAmministratoreComponent,
    BarraTesoreriaComponent,
    BarraMasterComponent,
    BarraLogisticaComponent,
    HomeTSRComponent,
    HomeMSRComponent,
    HomeLGSComponent,
    HomeMNSComponent,
    ProfiloComponent,
    IncassiComponent,
    SpeseComponent,
    SlogisticaComponent,
    SamministrazioneComponent,
    StesoreriaComponent,
    FornitoriComponent,
    MagazzinoComponent,
    SpedizioniComponent,
    StipendiComponent,
    BilancioComponent,
    MTesoreriaComponent,
    MLogisticaComponent,
    MAmministrazioneComponent,
    DipendentiComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FontAwesomeModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    ScrollingModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
