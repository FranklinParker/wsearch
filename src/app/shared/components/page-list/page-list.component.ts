import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WikiResponse} from '../../models/WikiResponse';
import {Search} from '../../models/search';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit, OnChanges {
  @Input() searchResults: Search[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('results:' + JSON.stringify(this.searchResults, null,2) );
  }

}
