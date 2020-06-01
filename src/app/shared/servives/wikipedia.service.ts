import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';

import {WikiResponse} from '../models/WikiResponse';
import {Search} from '../models/search';

/*
https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=space&utf8=&format=json
https://en.wikipedia.org/w/api.php?
action=query&
list=search&
srsearch=Nelson%20Mandela&
 utf8=1&
 format=json
 */
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private httpClient: HttpClient) {
  }

  search(term: string): Observable<Search[]> {
    return this.httpClient.get<WikiResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    })
      .pipe(
        pluck('query', 'search')
      );
  }

}
