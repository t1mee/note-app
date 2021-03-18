import React, {useEffect, useCallback} from 'react';
import { View, FlatList, StyleSheet, Text} from 'react-native';

import {AddNote} from '../Components/AddNote';
import {Notes} from '../Components/Notes';


export const MainScreen = ({notes, addNote, deleteNote, getEdit, getNote}) => {
  const loadNotes = useCallback( async ()=> await getNote(), [getNote])
  useEffect(()=>{
    loadNotes()
  }, [])
    return (
        <View>
        <AddNote 
         
        addNoteProp={addNote}
        />
        <FlatList
          keyExtractor={item => item.id}
          data={notes}
          renderItem={({item}) => <Notes note={item}
          deleteNote={deleteNote} 
          getEdit={getEdit}
          /> } 
        />
        </View>
    )

}