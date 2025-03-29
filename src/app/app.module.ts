// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './pages/home/home.component';
// import { TrackerComponent } from './pages/tracker/tracker.component';
// import { WorkoutListComponent } from './pages/workout-list/workout-list.component';
// import { ProgressComponent } from './pages/progress/progress.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     TrackerComponent,
//     WorkoutListComponent,
//     ProgressComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }









import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { TrackerComponent } from './pages/tracker/tracker.component';
import { WorkoutListComponent } from './pages/workout-list/workout-list.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackerComponent,
    WorkoutListComponent,
    ProgressComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
