import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

export const AddNote = ({addNoteProp}) => {

    const [value, setValue] = useState('')

    const pressText = () => {
    if (value.trim()){
           
                
                addNoteProp(value),
                setValue('')  
               
        } else {
            Alert.alert('Название не может быть пустым')
        }
    }
        
        

    return (
            <View style={styles.container}>
                <TextInput 
                
                style={styles.textInput} 
                placeholder='Введите текст заметки'
                onChangeText={setValue}
                value={value}
                autoCorrect={false} />
                <Button title='Add Note' color='#1E6D74' onPress={pressText} />
            </View>
        )
}

const styles = StyleSheet.create({ 
  
    container: {
        marginRight: 20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center"
    },
    button:{
        
    },
    textInput: {
        width: "70%",
        paddingVertical: 10,
        paddingHorizontal: 1,
        color: "#1E6D74",
        borderStyle: "solid",
        borderBottomColor:"#1E6D74",
        borderBottomWidth: 2
    }
})
