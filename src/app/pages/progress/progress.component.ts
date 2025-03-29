// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-progress',
// //   templateUrl: './progress.component.html',
// //   styleUrls: ['./progress.component.scss']
// // })
// // export class ProgressComponent {

// // }



// // import { Component, OnInit, OnDestroy } from '@angular/core';

// // @Component({
// //   selector: 'app-progress',
// //   templateUrl: './progress.component.html',
// //   styleUrls: ['./progress.component.scss']
// // })
// // export class ProgressComponent implements OnInit, OnDestroy {
// //   username: string = '';
// //   workout: string = '';
// //   duration: number = 0;
// //   startTime: Date | null = null;
// //   endTime: Date | null = null;
// //   progress: number = 0;
// //   message: string = '';
// //   private intervalId: any;

// //   ngOnInit() {
// //     this.username = localStorage.getItem('username') || 'User';
// //     this.workout = localStorage.getItem('workout') || 'Workout';
// //     this.duration = parseInt(localStorage.getItem('duration') || '0', 10);

// //     const start = localStorage.getItem('startTime');
// //     const end = localStorage.getItem('endTime');

// //     if (start && end) {
// //       this.startTime = new Date(start);
// //       this.endTime = new Date(end);
// //       this.calculateProgress();

// //       // Update progress every second
// //       this.intervalId = setInterval(() => {
// //         this.calculateProgress();
// //       }, 1000);
// //     }
// //   }

// //   ngOnDestroy() {
// //     if (this.intervalId) {
// //       clearInterval(this.intervalId);
// //     }
// //   }

// //   calculateProgress() {
// //     if (!this.startTime || !this.endTime) return;

// //     const currentTime = new Date().getTime();
// //     const start = this.startTime.getTime();
// //     const end = this.endTime.getTime();

// //     if (currentTime < start) {
// //       this.progress = 0;
// //       this.message = "Workout hasn't started yet.";
// //     } else if (currentTime > end) {
// //       this.progress = 100;
// //       this.message = "Workout completed!";
// //       clearInterval(this.intervalId); // Stop updating once completed
// //     } else {
// //       this.progress = ((currentTime - start) / (end - start)) * 100;

// //       if (this.progress < 25) {
// //         this.message = "Just getting started!";
// //       } else if (this.progress < 50) {
// //         this.message = "Making good progress!";
// //       } else if (this.progress < 75) {
// //         this.message = "More than halfway there!";
// //       } else {
// //         this.message = "Almost done!";
// //       }
// //     }
// //   }
// // }




// import { Component, OnInit, OnDestroy } from '@angular/core';

// @Component({
//   selector: 'app-progress',
//   templateUrl: './progress.component.html',
//   styleUrls: ['./progress.component.scss']
// })
// export class ProgressComponent implements OnInit, OnDestroy {
//   username: string = '';
//   selectedWorkout: string = '';
//   duration: number = 0; // Duration in minutes
//   startTime: Date | null = null;
//   endTime: Date | null = null;
//   progress: number = 0;
//   message: string = '';
//   workouts: { name: string; duration: number }[] = [
//     { name: 'Running', duration: 30 },
//     { name: 'Cycling', duration: 45 },
//     { name: 'Yoga', duration: 60 },
//     { name: 'Strength Training', duration: 40 }
//   ];
//   private intervalId: any;

//   ngOnInit() {
//     this.username = localStorage.getItem('username') || 'User';
//     this.loadPreviousWorkout();
//   }

//   ngOnDestroy() {
//     if (this.intervalId) {
//       clearInterval(this.intervalId);
//     }
//   }

//   selectWorkout(workout: { name: string; duration: number }) {
//     this.selectedWorkout = workout.name;
//     this.duration = workout.duration;
//     this.startTime = new Date();
//     this.endTime = new Date(this.startTime.getTime() + this.duration * 60000);

//     // Save to localStorage
//     localStorage.setItem('selectedWorkout', this.selectedWorkout);
//     localStorage.setItem('duration', this.duration.toString());
//     localStorage.setItem('startTime', this.startTime.toISOString());
//     localStorage.setItem('endTime', this.endTime.toISOString());

//     // Start progress calculation
//     this.calculateProgress();
//     this.intervalId = setInterval(() => this.calculateProgress(), 1000);
//   }

//   loadPreviousWorkout() {
//     const storedWorkout = localStorage.getItem('selectedWorkout');
//     const storedDuration = localStorage.getItem('duration');
//     const storedStartTime = localStorage.getItem('startTime');
//     const storedEndTime = localStorage.getItem('endTime');

//     if (storedWorkout && storedDuration && storedStartTime && storedEndTime) {
//       this.selectedWorkout = storedWorkout;
//       this.duration = parseInt(storedDuration, 10);
//       this.startTime = new Date(storedStartTime);
//       this.endTime = new Date(storedEndTime);
//       this.calculateProgress();
//       this.intervalId = setInterval(() => this.calculateProgress(), 1000);
//     }
//   }

//   calculateProgress() {
//     if (!this.startTime || !this.endTime) return;

//     const currentTime = new Date().getTime();
//     const start = this.startTime.getTime();
//     const end = this.endTime.getTime();

//     if (currentTime < start) {
//       this.progress = 0;
//       this.message = "Workout hasn't started yet.";
//     } else if (currentTime > end) {
//       this.progress = 100;
//       this.message = "Workout completed!";
//       clearInterval(this.intervalId);
//     } else {
//       this.progress = ((currentTime - start) / (end - start)) * 100;
//       this.message = this.getProgressMessage(this.progress);
//     }
//   }

//   getProgressMessage(progress: number): string {
//     if (progress < 25) return "Just getting started!";
//     if (progress < 50) return "Making good progress!";
//     if (progress < 75) return "More than halfway there!";
//     return "Almost done!";
//   }
// }
// export class TrackerComponent { }











import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  username: string = '';
  selectedWorkout: string = '';
  progress: number = 0;
  message: string = '';

  ngOnInit() {
    this.username = localStorage.getItem('username') || 'User';
    this.selectedWorkout = localStorage.getItem('selectedWorkout') || '';
    this.progress = parseFloat(localStorage.getItem('progress') || '0');
    this.message = this.progress >= 100 ? '🎉 Workout completed!' : 'Workout stopped early!';
  }
}
