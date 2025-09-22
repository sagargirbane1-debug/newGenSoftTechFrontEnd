import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudendServiceService {

    private baseUrl = 'http://localhost:9292/enquiry'; // adjust to your backend



  constructor(private http: HttpClient) {}
  getEnquiryStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllEquiries`);
  }

  getRegisteredStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/registered`);
  }
}

