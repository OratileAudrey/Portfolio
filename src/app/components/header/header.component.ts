import { Component, HostListener  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  //imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false
})
export class HeaderComponent {
  constructor(private router: Router) {}

  scrolled = false;

  navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 20;
  }

  goToResume() {
  this.router.navigate(['/resume']);
}
}
