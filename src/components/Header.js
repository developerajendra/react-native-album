//Import libraries for making a component
import React, {Component} from "react";
import ReactNative, { Text, View } from "react-native";

import Button from "./Button";

//make a component
class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            viewType: false
        }
    }
    
    //let gridType = false;

    showGrildView = () =>{
        this.props.viewType((this.state.viewType = !this.state.viewType) ? 'gridView' : 'listView');
    }

    signOut = () =>{
        this.props.signOut();
    }

    render(){
        const { viewStyle, textStyle ,buttonStyle} = styles;
        
        return (
            <View style={viewStyle}>
                 <Text style={textStyle}>{this.props.headerText}</Text>
                 <Button buttonText="Grid View" onPress={this.showGrildView} style={buttonStyle}>Filter Item</Button>
                 <Button buttonText="Sign Out" onPress={this.signOut} style={buttonStyle}>Filter Item</Button>
            </View>
        );
    }
}

const styles = { 
    viewStyle: {
        backgroundColor: '#f8f8f8',
        display: 'flex',
        // flex:1,
         
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
        paddingTop: 20,
        paddingHorizontal: 10,
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
        flex:2
    },
    buttonStyle : {
        
    }
};

export { Header };

//Make the component available to other parts of the app