import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../../../services/broadcast.service';

@Component({
  selector: 'app-view-hero',
  templateUrl: './view-hero.component.html',
  styleUrls: ['./view-hero.component.scss']
})

export class ViewHeroComponent implements OnInit {
  hero: Object = {};

  constructor( public bService: BroadcastService ) {
    console.log('In ViewHeroComponent ', this.bService.count );
    this.bService.eventHub.subscribe( hero => {
      this.hero = hero;
    });
  }

  ngOnInit() {
  }

}
