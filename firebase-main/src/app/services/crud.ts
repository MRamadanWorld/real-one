import { Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, Firestore, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Notes, UpdateNote } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class Crud {
  
  

   constructor(private fireStore: Firestore) {}


//Read/ get data 

   getNotes(): Observable<any[]> {
 const notesRef = collection(this.fireStore, 'Notes');
 return collectionData(notesRef, { idField: 'id' });
 }

//ghaiarna  method mn getnotes le  getname 34an mehsalsh Duplicate
 getname(): Observable<any[]> {
 const notesRef = collection(this.fireStore, 'name');
 return collectionData(notesRef, { idField: 'id' }); // hena 3ande Two choices momken aktab id aw la ====> { idField: 'id' })
 }


//Create/ add Data
createNote(note:Notes ){
console.log(note)
const noteRef = collection(this.fireStore, "Notes")
addDoc(noteRef, note)
.then(()=>{
  alert("created");
}

)
.catch( err => alert("error: "+ err) );
}
//Update
updateNote(note: UpdateNote) {
  const noteRef = doc(this.fireStore, "Notes", note.id); 
  updateDoc(noteRef, {
    name: note.name,
    content: note.content
  })
  .then(() => {
    alert("Note updated successfully!");
  })
  .catch(err => {
    alert("Error updating note: " + err);
  });
}

//Delete
deleteNote(id:string)
{
const noteRef = doc(this.fireStore, "Notes", id)
deleteDoc(noteRef)
.then( res=> alert("deletet: "+res) )
.catch( err => alert("error: "+ err) )
}



  
}
