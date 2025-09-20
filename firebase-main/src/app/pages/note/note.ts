import { Component } from '@angular/core';
import { Crud } from '../../services/crud';
import { Notes, UpdateNote } from '../../models/note';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note',
  imports: [FormsModule],
  templateUrl: './note.html',
  styleUrl: './note.css'
})
export class Note {
  

  note: Notes = new Notes('', '');

  id: string = '';

updatenote:UpdateNote = new UpdateNote('','','');

  constructor(private crudservice: Crud) {}

  getdata() {
    this.crudservice.getNotes().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  Addnote() {
    this.crudservice.createNote(this.note);
  }

Updatenote() {
    this.crudservice.updateNote(this.updatenote);
  }

  deletenote() {
    this.crudservice.deleteNote(this.id);
  }

}
