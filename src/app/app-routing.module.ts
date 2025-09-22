import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './admincomponents/home/home.component';
import { StudentsComponent } from './admincomponents/students/students.component';
import { FeesComponent } from './admincomponents/fees/fees.component';
import { CourseComponent } from './admincomponents/course/course.component';
import { VisualsComponent } from './admincomponents/visuals/visuals.component';
import { FacultiesComponent } from './admincomponents/faculties/faculties.component';
import { PlacementsComponent } from './admincomponents/placements/placements.component';
import { EnquiriesComponent } from './admincomponents/enquiries/enquiries.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'fees', component: FeesComponent },
  { path: 'Email', component: EnquiriesComponent },
  { path: 'courses', component: CourseComponent },  // ✅ Use CourseComponent here
  { path: 'visuals', component: VisualsComponent },
  { path: 'faculties', component: FacultiesComponent },
  { path: 'placements', component: PlacementsComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
