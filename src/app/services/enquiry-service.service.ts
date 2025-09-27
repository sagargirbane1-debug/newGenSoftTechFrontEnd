import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface Student {
  studentName: string;
  mobileNumber: string;
  email: string;
  qualification: string;
  passingYear: string;
  courses: string[];
  courseMode: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class EnquiryServiceService {

  private baseUrl = 'http://localhost:9292/enquiry';
  private registrationUrl = 'http://localhost:9292/resistration_form';

  constructor(private http: HttpClient) {}

  getEnquiryStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllEquiries`);
  }

  getRegisteredStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.registrationUrl}/getAll`);
  }

  submitEnquiry(enquiry: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/newEnquiry`, enquiry);
  }

  private baseUrl2 = 'http://localhost:9292/resistration_form';

  

  saveStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl2}/saveNewStudent`, student);
  }
}

