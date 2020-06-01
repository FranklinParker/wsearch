import { Component } from '@angular/core';
import {WikipediaService} from './shared/servives/wikipedia.service';
import {Observable, of} from 'rxjs';
import {WikiResponse} from './shared/models/WikiResponse';
import {Search} from './shared/models/search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchResults$: Observable<Search[]> = of();
  constructor(private wikipediaService: WikipediaService) {
  }

  onSearchEvent(term: string) {
    this.searchResults$  = this.wikipediaService.search(term);
  }
}
