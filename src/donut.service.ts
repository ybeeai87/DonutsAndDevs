import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  apiUrlDonutId: string = "https://grandcircusco.github.io/demo-apis/donuts/"
  apiUrl: string = "https://grandcircusco.github.io/demo-apis/donuts.json";
  constructor(private http:HttpClient) { }

  getAllDonuts():any{
    return this.http.get(this.apiUrl);
    
  }

  getDonutById(id:number):any{
   return this.http.get(this.apiUrlDonutId + id + ".json");
  }
}
