import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.html',
  styleUrls: ['./template-demo.css']
})
export class TemplateDemo {
  title = 'Finals Lab Activity 1';
  isSubmitted = false; // Tracks if the form was submitted

  user = {
    username: '',
    email: '',
    password: '',
    role: '',
    gender: '',    // Task: Added Field 1
    status: '',    // Task: Added Field 2
    comments: ''   // Task: Added Field 3
  };

  submittedUser = { ...this.user };

  onSubmit(form: any) {
    if (form.valid) {
      this.isSubmitted = true;
      this.submittedUser = { ...this.user }; // Capture current data
      console.log('Form Data:', this.submittedUser);
    }
  }
}
