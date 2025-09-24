import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('pieCanvas') pieCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>;

  totalFees = 0;
  totalPaid = 0;
  totalPending = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadFeeSummary();
  }

  loadFeeSummary() {
    this.http.get<any>('http://localhost:9292/resistration_form/summary')
      .subscribe(data => {
        this.totalFees = data.totalFees;
        this.totalPaid = data.totalPaid;
        this.totalPending = data.totalPending;

        // Wait for canvas elements to be ready
        setTimeout(() => {
          this.createPieChart();
          this.createBarChart();
        }, 0);
      });
  }

  createPieChart() {
    new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Paid', 'Pending'],
        datasets: [{
          data: [this.totalPaid, this.totalPending],
          backgroundColor: ['#4caf50', '#f44336']
        }]
      },
      options: { responsive: true }
    });
  }

  createBarChart() {
    new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Fees'],
        datasets: [
          { label: 'Total Fees', data: [this.totalFees], backgroundColor: '#007bff' },
          { label: 'Paid Fees', data: [this.totalPaid], backgroundColor: '#4caf50' },
          { label: 'Pending Fees', data: [this.totalPending], backgroundColor: '#f44336' }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'top' } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }

}
