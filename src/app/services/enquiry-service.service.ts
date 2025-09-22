import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnquiryServiceService {

  private baseUrl = 'http://localhost:9292/enquiry';
  private registrationUrl = 'http://localhost:9292/resistration_form';

  constructor(private http: HttpClient) {}

  // Get all enquiry students
  getEnquiryStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllEquiries`);
  }

  // Get all registered students
  getRegisteredStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.registrationUrl}/getAll`);
  }

  // Submit enquiry
  submitEnquiry(enquiry: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/newEnquiry`, enquiry);
  }
}
