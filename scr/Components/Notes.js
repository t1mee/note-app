import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';


                        
export const Notes = ({note, deleteNote, getEdit}) => {
    return(
    <TouchableOpacity
    activeOpacity={0.5}
    onPress={() => getEdit(note.id)}
    onLongPress={() => deleteNote(note.id)}
    >
    <View style={style.note}>
        <Text style={style.text}>{note.title}</Text>
    </View>
    </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    note:{
        marginRight: 20,
        marginVertical: 8,
        borderColor: "#1E6D74",
        borderBottomWidth: 2,
        backgroundColor: "#FF7A73",
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 5
    },
    text:{
        color: "white",
        fontSize: 20
    }
})
