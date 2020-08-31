import { Component, OnInit } from '@angular/core';

import {PersonsService} from '../../services/persons.service';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: any = [];

  constructor(private personsService: PersonsService) { }

  ngOnInit(): void {
    this.personsService.getPersons().subscribe(
      res => {
        this.persons = res;
      },
      err => console.error(err)
    );
  }

}
