import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit, OnDestroy {
  username: string = '';
  selectedWorkout: string = '';
  duration: number = 0;
  startTime: Date | null = null;
  endTime: Date | null = null;
  progress: number = 0;
  message: string = '';
  private intervalId: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.username = localStorage.getItem('username') || 'User';
    this.selectedWorkout = localStorage.getItem('selectedWorkout') || '';
    this.duration = parseInt(localStorage.getItem('duration') || '0', 10);
    const storedStartTime = localStorage.getItem('startTime');

    if (!this.selectedWorkout || !storedStartTime) {
      alert('⚠️ No workout selected. Redirecting to Workout List.');
      this.router.navigate(['/workouts']);
      return;
    }

    this.startTime = new Date(storedStartTime);
    this.endTime = new Date(this.startTime.getTime() + this.duration * 60000);
    this.trackProgress();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  trackProgress() {
    this.intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const start = this.startTime!.getTime();
      const end = this.endTime!.getTime();

      if (currentTime >= end) {
        this.progress = 100;
        this.message = `🎉 Well done, ${this.username}! Workout completed.`;
        clearInterval(this.intervalId);
      } else {
        this.progress = ((currentTime - start) / (end - start)) * 100;
        this.message = this.getProgressMessage(this.progress);
      }
    }, 1000);
  }

  stopWorkout() {
    clearInterval(this.intervalId);
    this.endTime = new Date();
    localStorage.setItem('endTime', this.endTime.toISOString());
    localStorage.setItem('progress', this.progress.toString());
    this.router.navigate(['/progress']);
  }

  getProgressMessage(progress: number): string {
    if (progress < 25) return "Just getting started!";
    if (progress < 50) return "Making good progress!";
    if (progress < 75) return "More than halfway there!";
    return "Almost done!";
  }
}
