// // import { Component } from '@angular/core';
// // import { NgForm } from '@angular/forms';
// // import { EnquiryServiceService } from 'src/app/services/enquiry-service.service';

// // @Component({
// //   selector: 'app-enquiry-form',
// //   templateUrl: './enquiry-form.component.html',
// //   styleUrls: ['./enquiry-form.component.css']
// // })
// // export class EnquiryFormComponent {
// //   enquiry = {
// //     studentName: '',
// //     mobileNumber: '',
// //     email: '',
// //     qualification: '',
// //     passingYear: '',
// //     courses: [] as string[],
// //     courseMode: '',
// //     address: ''
// //   };

// //   availableCourses: string[] = [
// //     'Java', 'Core Java', 'Spring Boot', 'Python', 'NodeJS', 'Angular',
// //     'HTML', 'CSS', 'C++', 'Data Analyst', 'Data Science'
// //   ];

// //   isSubmitting = false;
// //   successMessage = '';
// //   at: string = "@";
// // courses: any;

// //   constructor(private enquiryService: EnquiryServiceService) {}

// //   onSubmit(form: NgForm) {
// //     // Validate form
// //     if (!form.valid || this.enquiry.courses.length === 0) {
// //       Object.values(form.controls).forEach(control => {
// //         control.markAsTouched();
// //       });
// //       this.successMessage = '';
// //       return;
// //     }

// //     this.isSubmitting = true;

// //     this.enquiryService.submitEnquiry(this.enquiry).subscribe({
// //       next: (res) => {
// //         this.successMessage = 'Enquiry submitted successfully!';
// //         form.resetForm();
// //         this.resetForm();
// //         this.isSubmitting = false;
// //       },
// //       error: (err) => {
// //         alert('Error submitting enquiry');
// //         console.error(err);
// //         this.isSubmitting = false;
// //       }
// //     });
// //   }

// //   resetForm() {
// //     this.enquiry = {
// //       studentName: '',
// //       mobileNumber: '',
// //       email: '',
// //       qualification: '',
// //       passingYear: '',
// //       courses: [],
// //       courseMode: '',
// //       address: ''
// //     };
// //   }
// // }





// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { EnquiryServiceService } from 'src/app/services/enquiry-service.service';

// @Component({
//   selector: 'app-enquiry-form',
//   templateUrl: './enquiry-form.component.html',
//   styleUrls: ['./enquiry-form.component.css']
// })
// export class EnquiryFormComponent {

//   enquiry = {
//     studentName: '',
//     mobileNumber: '',
//     email: '',
//     qualification: '',
//     passingYear: '',
//     courses: [] as string[],
//     courseMode: '',
//     address: ''
//   };

//   availableCourses: string[] = [
//     'Java', 'Core Java', 'Spring Boot', 'Python', 'Microservices', 'Angular',
//     'HTML & CSS', 'C++', 'Data Analyst', 'Data Science'
//   ];

//   /** Specific tables for each course */
//   courseDetails: { course: string, batches: { startDate: string, timing: string }[], description: string }[] = [
//     { course: 'Java', batches: [ { startDate: '1 Oct 2025', timing: '6 PM - 8 PM' } ], description: 'Java full stack course' },
//     { course: 'Core Java', batches: [ { startDate: '5 Oct 2025', timing: '7 PM - 9 PM' } ], description: 'Core Java fundamentals' },
//     { course: 'Spring Boot', batches: [ { startDate: '10 Oct 2025', timing: '6 PM - 8 PM' } ], description: 'Spring Boot backend development' },
//     { course: 'Python', batches: [ { startDate: '12 Oct 2025', timing: '6 PM - 8 PM' } ], description: 'Python programming and data analysis' },
//     { course: 'Microservices', batches: [ { startDate: '15 Oct 2025', timing: '7 PM - 9 PM' } ], description: 'Microservices architecture' },
//     { course: 'Angular', batches: [ { startDate: '18 Oct 2025', timing: '6 PM - 8 PM' } ], description: 'Angular frontend framework' },
//     { course: 'HTML & CSS', batches: [ { startDate: '20 Oct 2025', timing: '5 PM - 7 PM' } ], description: 'Web development basics' }
//   ];

//   selectedCourse: any = null;

//   isSubmitting = false;
//   successMessage = '';

//   constructor(private enquiryService: EnquiryServiceService) {}

//   onSubmit(form: NgForm) {
//     if (!form.valid || this.enquiry.courses.length === 0) {
//       Object.values(form.controls).forEach(control => control.markAsTouched());
//       this.successMessage = '';
//       return;
//     }

//     this.isSubmitting = true;

//     this.enquiryService.submitEnquiry(this.enquiry).subscribe({
//       next: () => {
//         this.successMessage = '✅ Enquiry submitted successfully!';
//         form.resetForm();
//         this.resetForm();
//         this.isSubmitting = false;
//       },
//       error: (err) => {
//         alert('❌ Error submitting enquiry');
//         console.error(err);
//         this.isSubmitting = false;
//       }
//     });
//   }

//   resetForm() {
//     this.enquiry = {
//       studentName: '',
//       mobileNumber: '',
//       email: '',
//       qualification: '',
//       passingYear: '',
//       courses: [],
//       courseMode: '',
//       address: ''
//     };
//   }

//   selectCourse(course: any) {
//     this.selectedCourse = course;
//   }
// }























import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EnquiryServiceService } from 'src/app/services/enquiry-service.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})export class EnquiryFormComponent {
  showCityState = false;  // <-- toggle when address is focused

  enquiry = {
    studentName: '',
    mobileNumber: '',
    email: '',
    qualification: '',
    passingYear: '',
    courses: [] as string[],
    courseMode: '',
    address: '',
    city: '',
    state: '',
    country: ''
  };

  availableCourses: string[] = [
    'Java', 'Core Java', 'Spring Boot', 'Python', 'Microservices', 'Angular',
    'HTML & CSS', 'C++', 'Data Analyst', 'Data Science'
  ];

  isSubmitting = false;
  successMessage = '';

  constructor(private enquiryService: EnquiryServiceService) {}

  onSubmit(form: NgForm) {
    if (!form.valid || this.enquiry.courses.length === 0) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      this.successMessage = '';
      return;
    }

    this.isSubmitting = true;

    this.enquiryService.submitEnquiry(this.enquiry).subscribe({
      next: () => {
        this.successMessage = '✅ Enquiry submitted successfully!';
        form.resetForm();
        this.resetForm();
        this.showCityState = false;  // reset after submit
        this.isSubmitting = false;
      },
      error: (err) => {
        alert('❌ Error submitting enquiry');
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
      address: '',
      city: '',
      state: '',
      country: ''
    };
  }
}
