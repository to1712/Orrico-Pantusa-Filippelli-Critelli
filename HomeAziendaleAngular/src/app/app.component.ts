import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

    res:string|null = "";
    private timer!:any;
    private sessionTimeout: number = 1800 * 1000;

    constructor(private service: ServiceService){}

    ngOnInit(): void {
      const urlParams = new URLSearchParams(window.location.search);
      var sessionId = urlParams.get("Jsessionid");
      this.res = sessionId;
      this.service.getUtente(sessionId);
      this.service.setSession(sessionId);
      this.startSession();
      document.addEventListener('mousemove', this.refreshSession.bind(this));
    }

    ngOnDestroy() {
      document.removeEventListener('mousemove', this.refreshSession.bind(this));
    }

    startSession(): void {
      this.timer = setTimeout(() => {
        alert("Sessione scaduta. Sarai reindirizzato nella pagina di login");
        window.location.replace("http://localhost:8080/views/doLogout");
      }, this.sessionTimeout);
    }

    refreshSession() {
      clearTimeout(this.timer);
      this.startSession();
    }
}
