import { Note } from './interfaces/note.interface';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes';
  /* Variable utilizada para mostrar la fecha de hoy */
  date =( ((new Date()).toISOString()).split('T'))[0];

  note: Note = {
    id: -1,
    note: '',
    date: new Date(),
    complete: false,
    hover: false
  };

  /* Método que se activa al recibir un evento del componente hijo (newNote) */
  getNote(event: Note){
    this.note = event;
  }
}
