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
    courseName: '',
    courseMode: '',
    address: ''
  };
at: any = "@";

  constructor(private enquiryService: EnquiryServiceService) {}
isSubmitting = false;

onSubmit(form: NgForm) {
  this.isSubmitting = true; // disable button

  this.enquiryService.submitEnquiry(this.enquiry).subscribe({
    next: (response) => {
      alert('Enquiry submitted successfully!');
      console.log(response);
      this.resetForm();
              form.resetForm();

      


      this.isSubmitting = false; // enable button again
    },
    error: (error) => {
      alert('Error submitting enquiry');
      console.error(error);
      this.isSubmitting = false; // enable button again
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
      courseName: '',
      courseMode: '',
      address: ''
    };
  }
}
