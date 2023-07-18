import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: ['Welcome to EGXPRESS ,'],
      typeSpeed: 90
    };

    var typed = new Typed ('.element', options);
  }

}
