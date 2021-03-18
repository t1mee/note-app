import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Navbar} from './scr/Components/Navbar';
import {MainScreen} from './scr/Screens/MainScreen';
import {EditScreen} from './scr/Screens/EditScreen'

export default function App() {
  const [noteID, setNoteID] = useState(null)
  const [notes, setNote] = useState([])
  const getNote = async () => {
    const response = await fetch('https://note-app-32e16-default-rtdb.firebaseio.com/notes.json',{
      method: 'GET',
      headers: {'content-type': 'application/json'}
        
  })
  const data = await response.json()
  const notes = Object.keys(data).map(key => ({...data[key], id: key}))
  setNote(notes)
  console.log( notes)
}
  const addNote = async title =>{
        const response = await fetch('https://note-app-32e16-default-rtdb.firebaseio.com/notes.json',{
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({title})
      })
      const data = await response.json()
      
      setNote(prev=>[{
        id: data.name,
        title
      }, ...prev])
      console.log('notes', notes)
    }
  const deleteNote = async id => {
    await fetch(`https://note-app-32e16-default-rtdb.firebaseio.com/notes/${id}.json`,{
      method:"DELETE",
      headers: {'content-type': 'application/json'}
    })
    setNote(prev => prev.filter(note => note.id !== id))
  }
  let content = (<MainScreen getNote={getNote}  notes={notes} addNote={addNote} deleteNote={deleteNote} getEdit={setNoteID} />)
  const onSave = async (id, title) =>{
      await fetch(`https://note-app-32e16-default-rtdb.firebaseio.com/notes/${id}.json`,{
      method:"PATCH",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({title})
    })
        setNote(prev => prev.map(
          note => {
            if(note.id === id){
              note.title = title
            }
            return note
          }
        ))
  }


  if(noteID){
    const noteProp = notes.find(note => note.id === noteID)
    content = (<EditScreen 
                          getBack={()=>{setNoteID(null) }} 
                          noteProp={noteProp} 
                          onSave={onSave} 
                           />)
  }

  return (
    <View >
      <Navbar />
      <View style={styles.container}>
       {content}
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    paddingHorizontal: 20,
    paddingRight: 0
    
  },
  noteсontainer: {
    marginTop: 20
  },
  text: {

  }
});
