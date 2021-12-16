import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  businessActive: boolean = true;
  partyActive: boolean = false;
  title = 'angsprint2';
}
