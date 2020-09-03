import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {PersonsService} from '../../services/persons.service'
import { City } from 'src/app/models/City';
import {Tdocument} from 'src/app/models/Tdocument'
import {Person} from 'src/app/models/Person'
@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  person: Person = {
    /* Se colcoa ? para que no sea requerido */
    id: '',
    nombres : '',
    apellidos : '',
    fk_tipodocumento : 0,
    documento : '',
    lugaresidencia : 0,
    email : '',
    telefono : 0,
    usuario : '',
    contrasena : ''
  }

  edit: boolean = false;


  cities: any = [];
  tdocuments: any = [];
  constructor(private personService: PersonsService, private router: Router, private activatedRoute: ActivatedRoute) { }

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
    const params = this.activatedRoute.snapshot.params;/* Obtener datos por navegador */
    console.log(params);
    if(params.id){
      this.personService.getPerson(params.id).subscribe(
        res => {
          console.log(res);
          this.person=res[0];
          console.log(this.person);
        },
        err => console.error(err)
      )
    }
  } 
  saveNewPerson(){
      /* console.log(this.person); */
      delete this.person.id;
      this.personService.savePerson(this.person)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/persons']);
          },
          err => console.error(err)
        )
  }
  updatePerson(){
    console.log(this.person.id);
    /* this.personService.updatePerson(this.person.id, this.person)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/persons']);
        },
        err => console.error(err)
      ) */
  }

}
