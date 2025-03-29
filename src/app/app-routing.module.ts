// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './pages/login/login.component';
// import { WorkoutListComponent } from './pages/workout-list/workout-list.component';
// import { TrackerComponent } from './pages/tracker/tracker.component';
// import { ProgressComponent } from './pages/progress/progress.component';

// const routes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: 'workouts', component: WorkoutListComponent },
//   { path: 'tracker', component: TrackerComponent },
//   { path: 'progress', component: ProgressComponent },
//   { path: '**', redirectTo: '' } // Redirect unknown routes to login
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { TrackerComponent } from './pages/tracker/tracker.component';
// import { WorkoutListComponent } from './pages/workout-list/workout-list.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { LoginComponent } from './pages/login/login.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'tracker', component: TrackerComponent },
//   { path: 'workouts', component: WorkoutListComponent },
//   { path: 'progress', component: ProgressComponent },
//   { path: 'login', component: LoginComponent },
//   { path: '**', redirectTo: '' } // Redirect unknown paths to home
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }










import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TrackerComponent } from './pages/tracker/tracker.component';
import { WorkoutListComponent } from './pages/workout-list/workout-list.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workouts', component: WorkoutListComponent },
  { path: 'tracker', component: TrackerComponent },
  { path: 'progress', component: ProgressComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
