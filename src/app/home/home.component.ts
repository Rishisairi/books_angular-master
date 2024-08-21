import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private route: Router) {}
  startread() {
    this.route.navigate(['/search']);
    console.log('Start Cooking button clicked!');
  }
  // constructor(private router: Router) {}
  // startCooking() {
  //   this.router.navigate(['/home']);
  //   console.log('Start Cooking button clicked!');
}
