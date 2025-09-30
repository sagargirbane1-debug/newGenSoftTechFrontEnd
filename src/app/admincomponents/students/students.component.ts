// import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { EnquiryServiceService } from 'src/app/services/enquiry-service.service';

// @Component({
//   selector: 'app-students',
//   templateUrl: './students.component.html',
//   styleUrls: ['./students.component.css']
// })
// export class StudentsComponent implements OnInit, AfterViewInit {

//   selectedTab: string = 'enquiry';
//   enquiryStudents: any[] = [];
//   registeredStudents: any[] = [];
//   filteredEnquiryStudents: any[] = [];
//   filteredRegisteredStudents: any[] = [];
//   searchText: string = '';

//   // Scroll behavior
//   tabsHidden: boolean = false;
//   lastScrollTop: number = 0;

//   constructor(private service: EnquiryServiceService) { }

//   ngOnInit(): void {
//     this.loadEnquiryStudents();
//     this.loadRegisteredStudents();
//   }

//   ngAfterViewInit(): void {
//     const contentDiv = document.querySelector('.content');
//     if (contentDiv) {
//       contentDiv.addEventListener('scroll', this.onScroll.bind(this));
//     }
//   }

//   // Detect scroll to hide/show tabs
//   onScroll(event: any) {
//     const scrollTop = event.target.scrollTop;

//     if (scrollTop > this.lastScrollTop && scrollTop > 50) {
//       this.tabsHidden = true; // scrolling down → hide
//     } else {
//       this.tabsHidden = false; // scrolling up → show
//     }

//     this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
//   }

//   // Tab switch
//   selectTab(tab: string) {
//     this.selectedTab = tab;
//     this.searchText = '';
//     this.resetFilter();
//   }

//   // Reset filter
//   resetFilter() {
//     this.filteredEnquiryStudents = [...this.enquiryStudents];
//     this.filteredRegisteredStudents = [...this.registeredStudents];
//   }

//   // Search functionality
//   searchStudent() {
//     const text = this.searchText.toLowerCase().trim();

//     if (!text) {
//       this.resetFilter();
//       return;
//     }

//     if (this.selectedTab === 'enquiry') {
//       this.filteredEnquiryStudents = this.enquiryStudents.filter(student =>
//         student.id?.toString().toLowerCase().includes(text) ||
//         (student.studentName || '').toLowerCase().includes(text) ||
//         (student.email || '').toLowerCase().includes(text)
//       );
//     } else {
//       this.filteredRegisteredStudents = this.registeredStudents.filter(student =>
//         student.id?.toString().toLowerCase().includes(text) ||
//         (student.student_Name || '').toLowerCase().includes(text) ||
//         (student.email || '').toLowerCase().includes(text)
//       );
//     }
//   }

//   // Placeholder buttons
//   addNewStudent() {
//     console.log('Add New Student clicked');
//   }

//   exportToExcel() {
//     console.log('Export to Excel clicked');
//   }

//   exportToPDF() {
//     console.log('Export to PDF clicked');
//   }

//   // Load data from service
//   loadEnquiryStudents() {
//     this.service.getEnquiryStudents().subscribe({
//       next: (data) => {
//         this.enquiryStudents = data;
//         this.filteredEnquiryStudents = [...data];
//       },
//       error: (err) => console.error('Error fetching enquiry students:', err)
//     });
//   }

//   loadRegisteredStudents() {
//     this.service.getRegisteredStudents().subscribe({
//       next: (data) => {
//         this.registeredStudents = data;
//         this.filteredRegisteredStudents = [...data];
//       },
//       error: (err) => console.error('Error fetching registered students:', err)
//     });
//   }
// }











import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EnquiryServiceService } from 'src/app/services/enquiry-service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, AfterViewInit {

  selectedTab: string = 'enquiry';
  enquiryStudents: any[] = [];
  registeredStudents: any[] = [];
  filteredEnquiryStudents: any[] = [];
  filteredRegisteredStudents: any[] = [];
  searchText: string = '';

  tabsHidden: boolean = false;
  lastScrollTop: number = 0;

  constructor(private service: EnquiryServiceService) {}

  ngOnInit(): void {
    this.loadEnquiryStudents();
    this.loadRegisteredStudents();
  }

  ngAfterViewInit(): void {
    const contentDiv = document.querySelector('.content');
    if (contentDiv) {
      contentDiv.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  onScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    this.tabsHidden = scrollTop > this.lastScrollTop && scrollTop > 50;
    this.lastScrollTop = Math.max(scrollTop, 0);
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.searchText = '';
    this.resetFilter();
  }

  resetFilter() {
    this.filteredEnquiryStudents = [...this.enquiryStudents];
    this.filteredRegisteredStudents = [...this.registeredStudents];
  }

  searchStudent() {
    const text = this.searchText.toLowerCase().trim();
    if (!text) {
      this.resetFilter();
      return;
    }

    if (this.selectedTab === 'enquiry') {
      this.filteredEnquiryStudents = this.enquiryStudents.filter(s =>
        s.id?.toString().includes(text) ||
        (s.studentName || '').toLowerCase().includes(text) ||
        (s.email || '').toLowerCase().includes(text)
      );
    } else {
      this.filteredRegisteredStudents = this.registeredStudents.filter(s =>
        s.id?.toString().includes(text) ||
        (s.student_Name || '').toLowerCase().includes(text) ||
        (s.email || '').toLowerCase().includes(text)
      );
    }
  }

  addNewStudent() {
    console.log('Add New Student clicked');
  }

  // ✅ Export Excel Functionality
  exportToExcel() {
    const fileName = this.selectedTab === 'enquiry' ? 'Enquiry_Students.xlsx' : 'Registered_Students.xlsx';
    const dataToExport = this.selectedTab === 'enquiry'
      ? this.filteredEnquiryStudents
      : this.filteredRegisteredStudents;

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    XLSX.writeFile(workbook, fileName);
  }

  exportToPDF() {
    console.log('Export to PDF clicked');
  }

  loadEnquiryStudents() {
    this.service.getEnquiryStudents().subscribe({
      next: (data) => {
        this.enquiryStudents = data;
        this.filteredEnquiryStudents = [...data];
      },
      error: (err) => console.error('Error fetching enquiry students:', err)
    });
  }

  loadRegisteredStudents() {
    this.service.getRegisteredStudents().subscribe({
      next: (data) => {
        this.registeredStudents = data;
        this.filteredRegisteredStudents = [...data];
      },
      error: (err) => console.error('Error fetching registered students:', err)
    });
  }
}
