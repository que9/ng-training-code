import { Component, OnInit } from '@angular/core';
// 009
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { BroadcastService } from '../../services/broadcast.service';
// Reactive Extension for JS
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
  providers: [ BroadcastService ]
})
export class TrainingComponent implements OnInit {
  // 009
  source: Array<any> = [];
  // 009
  constructor( private _http: Http, public bService: BroadcastService ) {
    console.log('In TrainingCom ', this.bService.count );
  }

  ngOnInit() {
    this.loadData().subscribe( data => {
      this.source =  data.json();
    });

    // 009
    // setTimeout(() => {
    //   this.source = this.source.splice(0, 3);
    // }, 4 * 1000);
  }

  loadData(): Observable<any> {
    return this._http.get('../../../../assets/data/heros.json');
  }

}
