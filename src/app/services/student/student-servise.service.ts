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

// Http Options
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }

  // student data by ID
  getStudent(_id):Observable<any>{
    return this.http.get("http://localhost:3000/sprofile/"+_id)
    
  }


  //update data by ID
  updateStudent(id , student:Student): Observable<any> {
    return this.http.post<any>('http://localhost:3000/sprofile/edit/' + id , student)
   
  }

















  
  // updateStudent(id, employee): Observable<any> {
  //   return this.http.put<any>('http://localhost:3000/sprofile/edit/' + id, JSON.stringify(employee), this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }


  // Error handling 
  // handleError(error) {
  //   let errorMessage = '';
  //   if(error.error instanceof ErrorEvent) {
  //     // Get client-side error
    //   errorMessage = error.error.message;
    // } else {
      // Get server-side error
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     window.alert(errorMessage);
//     return throwError(errorMessage);
//  }


}