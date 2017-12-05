import React from "react";
import { TextInput, Text, View } from "react-native";

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    return(
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
             secureTextEntry={secureTextEntry}
             placeholder={placeholder} 
             autoCorrect={false}
             value={value}
             onChangeText={onChangeText}
            style={styles.input} />
        </View>
    );
}
let styles = {
    inputContainer:{
        flex: 1,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    label: {
        flex: 1
    },
    input: {
        height: 40,
        flex: 2,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,

    }
}
export default Input;