import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  term = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.searchEvent.emit(this.term);

  }
}
