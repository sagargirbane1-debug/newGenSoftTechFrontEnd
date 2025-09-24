// src/app/admincomponents/email/email.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  email = {
    subject: '',
    body: '',
    group: '' // "female" | "male" | "students" | "faculties"
  };

  responseMessage = '';

  constructor() {}

  sendEmail() {
    if (!this.email.subject || !this.email.body || !this.email.group) {
      this.responseMessage = "⚠ Please fill all fields!";
      return;
    }

    // For now just log to console (backend will handle actual sending later)
    console.log("Email Data:", this.email);

    // Friendly response message
    let target = '';
    switch (this.email.group) {
      case 'female': target = 'All Girls'; break;
      case 'male': target = 'All Gents'; break;
      case 'students': target = 'All Students'; break;
      case 'faculties': target = 'All Faculty Members'; break;
    }

    this.responseMessage = `✅ Email prepared for ${target}!`;
  }
}
