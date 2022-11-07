import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/interfaces/note.interface';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  /* Variable para el texto de cada nota que se haga*/
  note: string = '';
  /* Variable que será el ID incremental para cada tarea que se haga*/
  countNote: number = 0;

  /* Evento que se usa para envíar la nota al componente padre (AppComponent) */
  @Output() sendNote = new EventEmitter<Note>();

  constructor() { }

  ngOnInit(): void {

  }

  /* Método que se llama al dar clic en el botón Add */
  submit(){

    if(this.note != ''){
      let newNote : Note = {
        id: this.countNote,
        note: this.note,
        date: new Date(),
        complete: false,
        hover: false
      }
      this.countNote++;
      this.note = '';
      this.sendNote.emit(newNote);
    }

  }
}
