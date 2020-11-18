import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://newsapi.org/v2/everything?q=Apple&from=2020-10-03&sortBy=popularity&pageSize=100&apiKey=dfc25aed42b5471997bbbbbeaecf1781');
  }

  getHeadlines() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=dfc25aed42b5471997bbbbbeaecf1781');
  }

  getSpecificHeadlines(country:any) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=dfc25aed42b5471997bbbbbeaecf1781`);
  }

  getSources() {
    return this.http.get('https://newsapi.org/v2/sources?apiKey=dfc25aed42b5471997bbbbbeaecf1781');
  }

}
