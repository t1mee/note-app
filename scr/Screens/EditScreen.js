import React, {useState} from 'react';
import { View, StyleSheet, Button, TextInput, Alert} from 'react-native';



export const EditScreen = ({getBack, noteProp, onSave}) => {
    const [editValue, setEditValue] = useState(noteProp.title);
    const getEdit = () => {
        if(!editValue.trim().length == 0){
            onSave(noteProp.id, editValue)
            getBack()
        }else{
            Alert.alert(
                "Пустая строка"
            )
        }
    }
    return (
    <View style={styles.general} >
        <View style={styles.container}>
                <TextInput 
                style={styles.textInput} 
                onChangeText={setEditValue}
                
                placeholder='Введите текст заметки'
                
                value={editValue} 
                autoCorrect={false} />
               
            </View>
        
    <View style={styles.groupButtons}>
        
        <Button
        onPress={getBack}
        title='Назад'
        />
        <Button
        onPress={getEdit}
        title='Ред.'
        />

    </View>
    </View>)
}

const styles = StyleSheet.create({
    general: {
        
        paddingRight: 20
    },
    container:{
        justifyContent: "center",
        alignItems: "center",
        
    },
    groupButtons: {
        
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems: "center"
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