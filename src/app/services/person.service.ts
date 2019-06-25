import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable()
export class PersonService {
  constructor(private httpClient: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>('http://localhost:8180/api/persons');
  }
}
