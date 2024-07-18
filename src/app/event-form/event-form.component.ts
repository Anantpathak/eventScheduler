import { Component } from '@angular/core';
import { EventService,Event } from '../event.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {
newEvent :Event= {id:0,title:'',date:'',time:'',description:''};
 
constructor(private eventService:EventService){}

addEvent():void{
  if(this.newEvent.title && this.newEvent.date && this.newEvent.time)
    {
      this.eventService.addEvent(this.newEvent);
      this.newEvent={id:0,title:'',date:'',time:'',description:''};
    }
}
}
