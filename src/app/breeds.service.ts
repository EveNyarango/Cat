import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cat } from './model/cat';
// import { Cat } from './model/cat';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  

  constructor(private httpClient: HttpClient) { }
  
  getCats() : Observable<Cat[]>{
    const headers = new HttpHeaders().set('content-type', 'application/json')
    let url = environment.baseUrl + "breeds";
    return this.httpClient.get<Cat[]>(url,{headers});
  }

}
