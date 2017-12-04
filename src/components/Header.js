//Import libraries for making a component
import React from "react";
import ReactNative, { Text, View } from "react-native";

//make a component
const Header = (props) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
             <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = { 
    viewStyle: {
        backgroundColor: '#f8f8f8',
        display: 'flex',
        // flex:1,
         
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 20,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 30,
        // backgroundColor:'green',
        // paddingTop: 10,
        // paddingBottom: 10
        // textAlign: 'center'
    }
};

export  { Header };

//Make the component available to other parts of the app