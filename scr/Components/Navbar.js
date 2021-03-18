import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const Navbar = (props) => {
    return (
    <View style={styles.navbar}>
        <Text style={styles.text}>Notes-App</Text>
    </View>)
}
    
    

const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 70,
        backgroundColor: "#FF4940",
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    }
    
})