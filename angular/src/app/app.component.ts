import { IPeople } from './interfaces/people.interface';
import { Result } from './interfaces/result.interface';
import { IPerson } from './interfaces/person.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { StarWarsService } from './starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people: Result[];
  searchField: FormControl = new FormControl();

  constructor(private swService: StarWarsService) {
    this.searchField.valueChanges
      .pipe(debounceTime(300))
      .pipe(distinctUntilChanged())
      .subscribe(data => {
        this.swService.
          searchCharacters(data)
          .subscribe(response => this.people = response.results);
      });
  }

  ngOnInit() {
    this.swService
      .getPeople()
      .subscribe(data => {
        console.log(data)
        this.people = (data as any).results;
      });
  }
}
