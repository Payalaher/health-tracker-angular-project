// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProgressService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private progress = [
    { date: '2025-03-01', weight: 70 },
    { date: '2025-03-15', weight: 69 },
    { date: '2025-03-29', weight: 68 }
  ];

  getProgress() {
    return this.progress;
  }
}
