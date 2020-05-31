import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

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

  search(term: string) {
    return this.httpClient.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    });
  }

}
