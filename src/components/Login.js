import React, {Component} from "react";
import { Text, TextInput } from "react-native";
import firebase from "firebase";

import CardSection from "./CardSection";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input"; 
import {Spinner} from  "./common";

class Login extends Component{
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress(){
        const {email, password, error} = this.state;
        this.setState({
            error:'',
            loading: true
        });
        
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => { 
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        }); 
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false
        })
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed.',
            loading: false
        });
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small" />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}> Log In </Button>
        )
    }

    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                     secureTextEntry={false}
                      placeholder="user@gmail.com" 
                      label="Email" value={this.state.email} 
                      onChangeText = {email => this.setState({email})}
                       />
                </CardSection>
                <CardSection>
                    <Input 
                    secureTextEntry={true}
                    placeholder="password" 
                    value={this.state.password} 
                    label="Password" 
                    onChangeText = {password => this.setState({password})}
                     />
                </CardSection>
                <Text style={style.errorText}>
                    {this.state.error}
                </Text>
                <CardSection style={{flex:1}}>
                   {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const style = {
    errorText: {
        fontSize: 20,
        alignSelf: "center",
        color: "red"
    }
}

export default Login;