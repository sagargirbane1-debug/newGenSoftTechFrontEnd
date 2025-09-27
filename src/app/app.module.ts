
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { EnquiryFormComponent } from './components/enquiry-form/enquiry-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { StudentsComponent } from './admincomponents/students/students.component';
import { FeesComponent } from './admincomponents/fees/fees.component';
import { CourseComponent } from './admincomponents/course/course.component';
import { EmailComponent } from './admincomponents/email/email.component';
import { VisualsComponent } from './admincomponents/visuals/visuals.component';
import { FacultiesComponent } from './admincomponents/faculties/faculties.component';
import { PlacementsComponent } from './admincomponents/placements/placements.component';
import { HomeComponent } from './admincomponents/home/home.component';
import { TestingComponent } from './testing/testing.component';

// Angular Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    EnquiryFormComponent,
    AdminComponent,
    DashboardComponent,
    CourseComponent,
    StudentsComponent,
    FeesComponent,
    EmailComponent,
    VisualsComponent,
    FacultiesComponent,
    PlacementsComponent,
    HomeComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
