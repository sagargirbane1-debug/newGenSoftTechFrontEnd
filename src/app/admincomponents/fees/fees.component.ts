import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent {
  studentId!: number;
  paidAmount!: number;
  message: string = '';

  constructor(private http: HttpClient) {}

  updateFees(form: NgForm) {
    if (form.invalid) return;

    const url = `http://localhost:9292/resistration_form/addFees/${this.studentId}/${this.paidAmount}`;

    this.http.put(url, null, { responseType: 'text' }).subscribe({
      next: (res: string) => {
        this.message = res; // "fees deposited"
        form.resetForm();
      },
      error: (err) => {
        console.error(err);
        this.message = 'Error updating fees. Please try again.';
      }
    });
  }

}
