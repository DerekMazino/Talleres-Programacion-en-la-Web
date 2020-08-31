import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Person} from '../models/Person'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) { }

  API_URI = 'http://localhost:3000/api';

  getPersons(){
    return this.http.get(`${this.API_URI}/persons`);
  }
  getCities(){
    return this.http.get(`${this.API_URI}/cities`);
  }
  getDocuments(){
    return this.http.get(`${this.API_URI}/tdocuments`);
  }
  getPerson(id: string){
    return this.http.get(`${this.API_URI}/persons/${id}`);
  }
  deletePerson(id: string){
    return this.http.delete(`${this.API_URI}/persons/${id}`);
  }
  savePerson(person: Person){
    return this.http.post(`${this.API_URI}/persons`, person);
  }
  updatePerson(id: string, updatedPerson: Person): Observable<Person>{
    return this.http.put(`${this.API_URI}/persons/${id}`, updatedPerson);
  }
}
