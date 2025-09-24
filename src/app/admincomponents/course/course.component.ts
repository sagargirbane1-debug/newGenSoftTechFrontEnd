import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {course = {
    courseName: '',
    discription: '',
    fees: '',
    duration: ''
  };


  selectTab(tab: string) {
    this.selectedTab = tab;
    
  }


  selectedTab: string = 'addCourse';

  message: string = '';

  constructor(private courseService: CourseService) {}

  onSubmit() {
    this.courseService.addCourse(this.course).subscribe({
      next: (response) => {
        this.message = 'Course added successfully!';
        console.log(response);
        this.course = { courseName: '', discription: '', fees: '', duration: '' }; // reset form
      },
      error: (err) => {
        this.message = 'Error adding course!';
        console.error(err);
      }
    });
  }



    courses: any[] = [];


  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getAllCourses().subscribe({
      next: (res) => this.courses = res,
      error: (err) => console.error('Error fetching courses', err)
    });
  }

  deleteCourse(id: number) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourseById(id).subscribe({
        next: () => {
          this.courses = this.courses.filter(c => c.course_id !== id);
        },
        error: (err) => console.error('Error deleting course', err)
      });
    }
  }


}
