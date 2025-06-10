import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  //imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  standalone: false
})
export class ResumeComponent {

  currentYear = new Date().getFullYear();
}
