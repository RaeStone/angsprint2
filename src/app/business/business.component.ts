import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  datas: string[] = [
    "Expense Report", "1/13/2020", "1/14/2020", "1/15/2020", "1/16/2020", "1/17/2020", "1/18/2020", "1/19/2020",
    "Row 1", "$4.14","$58.81", "$51.29", "$5.00", "$42.57", "$72.94", "$63.17",
    "Row 2", "$41.10", "$40.98", "$59.21", "$38.28", "$35.33", "$1335.49", "$1131.76",
    "Row 3", "$17.90", "$953.10", "$969.54", "$647.21", "$1515.48", "1023.38", "$870.25",
    "Row 4", "$444.90", "$477.37", "$1120.76", "$58.81", "$51.29", "$5.00", "$42.57", 
    "Row 5", "$72.94", "$63.17", "$41.10", "$40.98", "$59.21", "$38.28", "$35.33",
    "Row 6", "$1335.49", "$1131.76", "$17.90", "$953.10", "$969.54", "$647.21", "$1515.48",
    "Row 7", "1023.38", "$870.25", "$444.90", "$477.37", "$1120.76", "$58.81", "$63.17",
    "Row 8", "$51.29", "$5.00", "$42.57", "$72.94", "$63.17", "$41.10", "$40.98",
    "Row 9", "$59.21", "$38.28", "$35.33", "$1335.49", "$1131.76", "$17.90", "$953.10",
    "Row 10", "$969.54", "$647.21", "$1515.48", "1023.38", "$870.25", "$444.90", "$477.37",
    "Row 11", "$1120.76", "$58.81", "$51.29", "$5.00", "$42.57", "$72.94", "$63.17",
    "Row 12", "$41.10", "$40.98", "$59.21", "$38.28", "$35.33", "$1335.49", "$1131.76",
    "Row 13", "$17.90", "$953.10", "$969.54", "$647.21", "$1515.48", "1023.38", "$870.25",
    "Row 14", "$444.90", "$477.37", "$1120.76", "$58.81", "$51.29", "$5.00", "$42.57",
    "Row 15", "$72.94", "$63.17", "$41.10", "$40.98", "$59.21", "$38.28", "$35.33",
    "Row 16", "$17.90", "$953.10", "$969.54", "$647.21", "$1515.48", "1023.38", "$870.25",
    "Row 17", "$444.90", "$477.37", "$1120.76", "$58.81", "$51.29", "$5.00", "$42.57",
    "Row 18", "$72.94", "$63.17", "$41.10", "$40.98", "$59.21", "$38.28", "$35.33",
    "Row 19", "$1335.49", "$1131.76", "$17.90", "$953.10", "$969.54", "$647.21", "$1515.48",
    "Row 20", "1023.38", "$870.25", "$444.90", "$477.37", "$1120.76", "$58.81", "$51.29",
    "Row 21", "$5.00", "$42.57", "$72.94", "$63.17", "$41.10", "$40.98", "$59.21",
  ];

  lightMode: boolean = true;
  darkMode: boolean = false;
  buttonText: string = "Dark Mode";

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.lightMode = !this.lightMode;
    if (this.lightMode) {
      this.buttonText = "Dark Mode";
    }
    else {
      this.buttonText = "Light Mode"
    }
    this.darkMode = !this.darkMode;
  }


}