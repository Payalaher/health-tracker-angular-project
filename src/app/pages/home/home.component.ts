import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  username: string = '';

  constructor(private router: Router) {}

  startTracking() {
    if (!this.username.trim()) {
      alert('⚠️ Please enter your name before starting!');
      return;
    }
    localStorage.setItem('username', this.username);
    this.router.navigate(['/workouts']);
  }
}
