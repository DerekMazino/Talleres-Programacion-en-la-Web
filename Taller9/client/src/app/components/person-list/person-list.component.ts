import { Component, OnInit, HostBinding } from '@angular/core';

import {PersonsService} from '../../services/persons.service';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  persons: any = [];

  constructor(private personsService: PersonsService) { }

  ngOnInit(): void {
    this.getPersons();
  }
  getPersons(){
    this.personsService.getPersons().subscribe(
      res => {
        this.persons = res;
        console.log(res)
      },
      err => console.error(err)
    );
  }
  deletePerson(id: string){
    /* console.log(id); */
    this.personsService.deletePerson(id).subscribe(
      res => {
        console.log(res);
        this.getPersons();
      },
      err => {
        console.error(err);
        this.getPersons();
      }
      
    )
  }

}
