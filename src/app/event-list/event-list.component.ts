import { Component } from '@angular/core';
import { EventService, Event } from '../event.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  events: Event[] = [];
  editEvent: Event = { id: 0, title: '', date: '', time: '', description: '' };
  selectedEvent: Event | null = null;

  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }

  deleteEvent(id: number): void {
    this.eventService.deleteEvent(id);
    this.events = this.eventService.getEvents();
  }

  startEdit(event: Event): void {
    this.editEvent = { ...event };
  }

  saveEdit(): void {
    this.eventService.updateEvent(this.editEvent);
    this.events = this.eventService.getEvents();
    this.editEvent = { id: 0, title: '', date: '', time: '', description: '' };
  }

  cancelEdit(): void {
    this.editEvent = { id: 0, title: '', date: '', time: '', description: '' };
  }

  isEditing(event: Event): boolean {
    return this.editEvent.id === event.id;
  }

  showDetails(event: Event): void {
    this.selectedEvent = event;
  }

  closeDetails(): void {
    this.selectedEvent = null;
  }
}