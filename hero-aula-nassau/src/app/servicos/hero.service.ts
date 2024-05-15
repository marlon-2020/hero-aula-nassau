import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) { }

  apiLink = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  
  getLista(){
    return this.http.get(this.apiLink)
  }

}
