import React, {Component} from "react";
import {Text, View} from "react-native";


import Card from "./Card";
import CardSection from "./CardSection";
import Login from "./Login";

class Auth extends Component {
    constructor(props){
        super(props)
    }
    

    render(){
        return (
            <Login />   
        );
    }
}

export {Auth};