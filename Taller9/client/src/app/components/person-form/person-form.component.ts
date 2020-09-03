import { Component, OnInit, HostBinding } from '@angular/core';

import {PersonsService} from '../../services/persons.service'
import { City } from 'src/app/models/City';
import {Tdocument} from 'src/app/models/Tdocument'
@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  cities: any = [];
  tdocuments: any = [];
  constructor(private personService: PersonsService) { }

  ngOnInit(): void {
    /* Traigo las ciudades desde la API */
    this.personService.getCities().subscribe(
      res => {
        this.cities = res;
      },
      err => console.error(err)
    )
    /* Traigo los tipos de Documento desde la API */
    this.personService.getDocuments().subscribe(
      res => {
        this.tdocuments = res;
      },
      err => console.error(err)
    )
    /* this.personService.getCities().subscribe(
      res => console.log(res),
      err => console.error(err)
    ) */
  }

}
