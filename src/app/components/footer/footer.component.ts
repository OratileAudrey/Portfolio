import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  //imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: false
})
export class FooterComponent {

  currentYear = new Date().getFullYear();
}
