import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  gameTitle: string;

  constructor() {
  this.gameTitle = 'JAKIŚ TYTUŁ ELO ELO';
  }
}
