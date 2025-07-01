import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: false
})
export class ContactComponent {
onSubmit(form: any) {
    const templateParams = {
      from_name: form.name,
      reply_to: form.email,
      message: form.message,
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
