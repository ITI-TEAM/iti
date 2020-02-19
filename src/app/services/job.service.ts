import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JOBService {
  constructor(private http :HttpClient){ }

  allJobs():Observable<any>{
    return this.http.get<any>('http://localhost:3000/allJob');
  }
  createPost(companyID:string,jobModel):Observable<any> {
    return this.http.post<any>('http://localhost:3000/allJob/add/'+companyID,jobModel);

  }

  getCompanyPosts(companyID:string):Observable<any>{
    return this.http.get('http://localhost:3000/allJob/companyjobs/'+companyID);
  }
}
