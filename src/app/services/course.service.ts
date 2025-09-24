import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:9292/coursesData/addNewCourse';

  constructor(private http: HttpClient) {}

  addCourse(courseData: any): Observable<any> {
    return this.http.post(this.apiUrl, courseData);
  }



private baseUrl = 'http://localhost:9292/coursesData';



  getAllCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllCourses`);
  }


  
  deleteCourseById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteCourseById/${id}`);
  }
}
