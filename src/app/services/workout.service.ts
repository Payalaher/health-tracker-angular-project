// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class WorkoutService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: string[] = [];

  getWorkouts() {
    return this.workouts;
  }

  addWorkout(workout: string) {
    if (!this.workouts.includes(workout)) {
      this.workouts.push(workout);
    }
  }

  removeWorkout(index: number) {
    this.workouts.splice(index, 1);
  }
}
