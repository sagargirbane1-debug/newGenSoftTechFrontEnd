import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "src/app/app-routing.module";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'] // optional
  
  
  
})
export class AdminComponent implements OnInit {
students: any;

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

}
