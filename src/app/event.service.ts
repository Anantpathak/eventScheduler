import { Injectable } from '@angular/core';

export interface Event {
  id:number;
  title:string;
  date:string;
  time:string;
  description:string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events:Event[]=[];
  private nextID=1;

  getEvents():Event[]{
    return this.events;
  }

  addEvent(event:Event):void
  {
    event.id=this.nextID++;
    this.events.push(event);
  }

  deleteEvent(id:number):void
  {
    this.events=this.events.filter(event=>event.id!==id);
  }
  updateEvent(updateEvent:Event):void{
    const index=this.events.findIndex(event=>event.id===updateEvent.id);
    if(index!==-1)
      {
        this.events[index]=updateEvent;
      }
  }
}
