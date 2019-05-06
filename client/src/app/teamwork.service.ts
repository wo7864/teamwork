import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamworkService {

  constructor( private http: HttpClient,
    ) { }
    url = "http://localhost:5000";
    getUserList():Observable<any>{
      return this.http.get(this.url+'/users/');
    }
}
