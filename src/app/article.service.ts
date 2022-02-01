import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url:String = "https://api.marketaux.com/v1/news/sources";

  constructor(private Http: HttpClient) { }
}
