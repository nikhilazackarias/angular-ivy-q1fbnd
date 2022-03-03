import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name = 'nikhila';
  constructor() {}

  ngOnInit() {
    if (this.name  != '' && this.email != '') {
      this.contactList.push({
        name: this.name,
        email: this.email,
      });
      this.name = '';
      this.email = '';

  }
}
}