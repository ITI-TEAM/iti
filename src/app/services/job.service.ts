import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JOBService {

  constructor(private http :HttpClient){ }
  createPost(companyID:string,jobModel):Observable<any> {
    return this.http.post<any>('http://localhost:3000/allJob/add/'+companyID,jobModel);

  }
}
