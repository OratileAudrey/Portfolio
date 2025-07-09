import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: false
})
export class ContactComponent {
  onSubmit(form: NgForm) {
    const templateParams = {
      from_name: form.value.name,
      reply_to: form.value.email,
      message: form.value.message,
      user_date: new Date().toLocaleString(),
      user_email: form.value.email
    };

    emailjs.send('service_pyh4bwa', 'template_jz226gb', templateParams, 'FclW7WidYuOCI3_RV')
      .then(() => {
        alert('Message sent successfully!');
        form.resetForm();
      }, (error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  }
}
