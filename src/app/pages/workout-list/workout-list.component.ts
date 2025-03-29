import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent {
  workouts = ['Running', 'Cycling', 'Yoga', 'Strength Training'];
  selectedWorkout: string = '';
  duration: number | null = null;

  constructor(private router: Router) {}

  selectWorkout(workout: string) {
    this.selectedWorkout = workout;
  }

  startWorkout() {
    if (!this.selectedWorkout) {
      alert('⚠️ Please select a workout!');
      return;
    }

    if (!this.duration || this.duration <= 0) {
      alert('⚠️ Please enter a valid duration (minutes)!');
      return;
    }

    localStorage.setItem('selectedWorkout', this.selectedWorkout);
    localStorage.setItem('duration', this.duration.toString());
    localStorage.setItem('startTime', new Date().toISOString());

    this.router.navigate(['/tracker']);
  }
}
