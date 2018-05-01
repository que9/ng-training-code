import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  @Output() doSearch: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }
  ngOnInit() {
  }

  onSearch( search ) {
      // 009
      // Emitting an event from its within
      this.doSearch.emit( search.value );
  }

}
