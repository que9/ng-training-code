import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class BroadcastService {
  static _count = 0;

  public get count(): Number {
    return BroadcastService._count;
  }

  public eventHub: EventEmitter<Object> = new EventEmitter<Object>();
  constructor() {
    BroadcastService._count++;
  }

  broadcast( obj: Object ) {
    this.eventHub.emit( obj );
  }
}
