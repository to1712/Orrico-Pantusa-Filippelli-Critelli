import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  apiKey = '80253a6c283d4989b8deb7dfa8a057e5';
  url = `https://newsapi.org/v2/top-headlines?country=it&category=technology&apiKey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(this.url);
  }
}
