import { Component, OnInit } from '@angular/core';

interface Course {
  id: number;
  courseName: string;
  duration: string;
  fees: number;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[] = [];

  selectedCourse: Course = { id: 0, courseName: '', duration: '', fees: 0 };

  isEditing: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Initial dummy data
    this.courses = [
      { id: 1, courseName: 'Java Programming', duration: '3 Months', fees: 5000 },
      { id: 2, courseName: 'Angular Development', duration: '2 Months', fees: 4000 }
    ];
  }

  onSubmit(): void {
    if (this.isEditing) {
      const index = this.courses.findIndex(c => c.id === this.selectedCourse.id);
      if (index !== -1) {
        this.courses[index] = { ...this.selectedCourse };
      }
      this.isEditing = false;
    } else {
      const newId = this.courses.length > 0 ? Math.max(...this.courses.map(c => c.id)) + 1 : 1;
      this.courses.push({ ...this.selectedCourse, id: newId });
    }
    this.resetForm();
  }

  onEdit(course: Course): void {
    this.selectedCourse = { ...course };
    this.isEditing = true;
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courses = this.courses.filter(c => c.id !== id);
    }
  }

  resetForm(): void {
    this.selectedCourse = { id: 0, courseName: '', duration: '', fees: 0 };
    this.isEditing = false;
  }
}
