import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  static isLogged: boolean;
  title = 'MovieMan.kz';

  constructor(public router: Router) {
    AppComponent.isLogged=false;
  }
}
