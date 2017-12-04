import React, {Component} from "react";
import {Text, View} from "react-native";
import firebase from "firebase";

import Card from "./Card";
import CardSection from "./CardSection";
import Login from "./Login";

class Auth extends Component {
    constructor(props){
        super(props)
    }
    
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyAUyzNmW8UZ40aCAyCkLqMntRzQ9pDO2Kk",
            authDomain: "auth-f76a9.firebaseapp.com",
            databaseURL: "https://auth-f76a9.firebaseio.com",
            projectId: "auth-f76a9",
            storageBucket: "auth-f76a9.appspot.com",
            messagingSenderId: "1052176923438"
          });
    }

    render(){
        return (
            <Login />   
        );
    }
}

export {Auth};