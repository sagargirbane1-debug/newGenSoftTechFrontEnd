import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnquiryFormComponent } from './components/enquiry-form/enquiry-form.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { StudentsComponent } from './admincomponents/students/students.component';
import { FeesComponent } from './admincomponents/fees/fees.component';
import { CourseComponent } from './admincomponents/course/course.component';

import { EnquiriesComponent } from './admincomponents/enquiries/enquiries.component';
import { VisualsComponent } from './admincomponents/visuals/visuals.component';
import { FacultiesComponent } from './admincomponents/faculties/faculties.component';
import { PlacementsComponent } from './admincomponents/placements/placements.component';
import { HomeComponent } from './admincomponents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EnquiryFormComponent,
    AdminComponent,
    DashboardComponent,
    CourseComponent,
    StudentsComponent,
    FeesComponent,
    EnquiriesComponent,
    VisualsComponent,
    FacultiesComponent,
    PlacementsComponent,
    HomeComponent
    
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
