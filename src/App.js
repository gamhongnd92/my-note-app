
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import notes from './notes';
import { useState } from 'react';

 console.log(notes);

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes =>{
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className='header'>
      <Header/>
      <CreateArea
        onAdd={addNote}
      />

      {notes.map((noteItem, index) => {
        return <Note
          key = {index} 
          id = {index}
          title = {noteItem.title}
          content = {noteItem.content}
          onDelete={deleteNote}
        />
      })}
       
      <Note
        key={1}
        title="Note Title"
        content="Note content - This one cannot be deleted"
      />
      <Footer/>
      
    </div>
  );
}

export default App;
