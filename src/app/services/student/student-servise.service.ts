import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Student } from 'src/app/components/Classes/studentClass/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiseService {

  constructor(private http:HttpClient) { }


//  GEI ALL USER TYPE STUDENT 
  getAll():Observable<any>{
    return this.http.get<any>("http://localhost:3000/sprofile/list")
  }

  //  GEI ALL USER TYPE STUDENT 
  getAllCompany():Observable<any>{
    return this.http.get<any>("http://localhost:3000/cprofile/list")
  }




  //  GEI STUDENT DATA BY ID
  getStudent(_id):Observable<any>{
    return this.http.get("http://localhost:3000/sprofile/"+_id)
    
  }


  //update data by ID
  updateStudent(id , fd:FormData): Observable<any> {
    return this.http.post<any>('http://localhost:3000/sprofile/edit/' + id , fd)
   
  }


//cancel job

  cancelJob(jobID){
    return this.http.delete('http://localhost:3000/appliedstudent/canceljob/'+jobID);
  }




}
