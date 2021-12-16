import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {
  showDogs: Boolean = true;
  showCats: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleChoice(){
    this.showDogs = !this.showDogs;
    this.showCats = !this.showCats;
  }
}
