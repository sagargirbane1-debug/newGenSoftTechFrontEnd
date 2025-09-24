import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EnquiryServiceService } from 'src/app/services/enquiry-service.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent {
  enquiry = {
    studentName: '',
    mobileNumber: '',
    email: '',
    qualification: '',
    passingYear: '',
    courses: [] as string[],
    courseMode: '',
    address: ''
  };

  availableCourses: string[] = [
    'Java', 'Core Java', 'Spring Boot', 'Python', 'NodeJS', 'Angular',
    'HTML', 'CSS', 'C++', 'Data Analyst', 'Data Science'
  ];

  isSubmitting = false;
  successMessage = '';
  at: string = "@";

  constructor(private enquiryService: EnquiryServiceService) {}

  onSubmit(form: NgForm) {
    // Validate form
    if (!form.valid || this.enquiry.courses.length === 0) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      this.successMessage = '';
      return;
    }

    this.isSubmitting = true;

    this.enquiryService.submitEnquiry(this.enquiry).subscribe({
      next: (res) => {
        this.successMessage = 'Enquiry submitted successfully!';
        form.resetForm();
        this.resetForm();
        this.isSubmitting = false;
      },
      error: (err) => {
        alert('Error submitting enquiry');
        console.error(err);
        this.isSubmitting = false;
      }
    });
  }

  resetForm() {
    this.enquiry = {
      studentName: '',
      mobileNumber: '',
      email: '',
      qualification: '',
      passingYear: '',
      courses: [],
      courseMode: '',
      address: ''
    };
  }
}
