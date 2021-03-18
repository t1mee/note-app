import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

//передается пропс addNote (app.js) как addNoteProp
export const AddNote = ({addNoteProp}) => {

    //локальный стейт для формы ввода
    const [value, setValue] = useState('')

    //обработчик нажатия кнопки "добавить"
    const pressText = () => {
    //проверка на пустую строку
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