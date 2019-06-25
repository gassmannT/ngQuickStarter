import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {
  persons: Person[];
  selectedPerson: Person;

  constructor(private service: PersonService) {}

  ngOnInit() {
    this.service.getPersons().subscribe(list => {
      this.persons = list;
    });
  }

  setSelectedPerson(p: Person) {
    this.selectedPerson = p;
  }
}
