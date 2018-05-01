import { Component, OnInit, OnChanges, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { BroadcastService } from '../../../services/broadcast.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit, OnChanges {
  @Input() source: Array<any> = [];
  original: Array<any> = [];
  // 009
  favorite: Number = 0;
  constructor( public bService: BroadcastService ) {
    console.log('ctor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 009
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log('changes', changes['source'].currentValue.length );
    // 009
    if ( changes['source'].currentValue.length ) {
      // Keeping the original data safe
      // this.original = this.source.copyWithin(0, this.source.length );
      this.original = Object.assign([], this.source);
      this.calculatedFavoriteHeros();
    }
  }

  ngOnInit() {
    console.log('Init', this.source );
  }

  // 009
  calculatedFavoriteHeros(): void {
    let favoriteCount = 0;
    this.source.forEach( hero => hero['favorite'] ? favoriteCount++ : null );
    this.favorite = favoriteCount;
  }

  // 009
  onSearch( $event ) {
    console.log('onSearch', $event);
    this.filterRecords( $event );
  }

  // 009
  filterRecords( terms ) {
    if ( !terms.length ) {
      this.source = this.original;
    } else {
      const source =  this.original.filter( hero => hero['name'].search(terms) > -1 ? true : false );
      this.source = source;
    }
  }

  selectHero( hero ) {
    this.bService.broadcast( hero );
  }
}
