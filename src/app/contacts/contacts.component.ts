import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contactList = [
    {
      name: 'Nikhila',
      number: '9934122121',
      email: 'nikhila!gmail.com',
    },
    {
      name: 'Kripa',
      number: '9934122121',
      email: 'kripa!gmail.com',
    },
    {
      name: 'Riya',
      number: '9934122121',
      email: 'Riya!gmail.com',
    },
    {
      name: 'Manu',
      number: '9934122121',
      email: 'manu!gmail.com',
    },
  ];
  name: any = '';
  number;
  email: any = '';
  constructor() {}
  ngOnInit() {}
  addCOntact() {
    if (this.name != '' && this.number != '' && this.email != '') {
      this.contactList.push({
        name: this.name,
        number: this.number,
        email: this.email,
      });
      this.name = '';
      this.email = '';
      this.number = '';
    }
  }
}
