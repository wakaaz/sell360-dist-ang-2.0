import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-all-report',
  templateUrl: './all-report.component.html',
  styleUrls: ['./all-report.component.css'],
  standalone: false


})
export class AllReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onQuickFilterChanged(event: any): void {
    // Implement search functionality here
    const searchValue = event.target.value;
    // Add your search logic here
  }

}
