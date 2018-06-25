import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  date = new Date();
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  currentmonth = this.months[this.date.getMonth()];
  prevmonth = this.months[this.date.getMonth() - 1];
  prev = this.months[this.date.getMonth() - 2];
  list = [this.currentmonth + " " + this.date.getFullYear(), this.prevmonth + " " + this.date.getFullYear(), this.prev + " " + this.date.getFullYear()];
  constructor() { }

  ngOnInit() {
  }

}
