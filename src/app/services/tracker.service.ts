// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TrackerService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  logHealthData(weight: number, steps: number, calories: number) {
    console.log(`Logged: Weight=${weight}kg, Steps=${steps}, Calories=${calories}`);
  }
}
