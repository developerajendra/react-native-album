 //Import a library to help create a component
import React, {Component} from 'react';
import ReactNative, { View, Text, NavigatorIOS }  from 'react-native';
import firebase from "firebase";

//Import custom Components
import {Header, AlbumList, Auth, FlexboxPractice} from "./src/components";

import {Spinner} from "./src/components/common";

 //Create a component
 class App extends Component{
     constructor(props){
        super(props);
        this.state = {
            listViewType:'',
            isUserLoggedIn: null
        }
     }

     listViewType = (type)=>{
        this.setState({listViewType: type});
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

          firebase.auth().onAuthStateChanged((user)=>{
              user ? this.setState({isUserLoggedIn: true}) : this.setState({isuser: false});
          })
    }

 
     renderView(){
         console.log("user state",this.state)

         if(this.state.isUserLoggedIn){
            return this.routeToListing();
         }else{
            return <Auth style={{flex: 1}} />
         }       
 
     }
     
     routeToListing(){
        return (
            <NavigatorIOS 
            initialRoute={{
                component: AlbumList,
                title: "Album List!",
                // viewType: this.state.listViewType
            }} 
            style={{flex: 1}}
        /> 
        );
     }

     signOut = () =>{
         console.log("sign out");
         firebase.auth().signOut();
     }
      
     render(){
       

        return (
            <View style={{flex: 1}}>
                <Header signOut={this.signOut} viewType={this.listViewType.bind(this)} headerText={'Albums!'}  />
                {/* <FlexboxPractice /> */}
                
                {this.renderView()}

                {/* <NavigatorIOS 
                    initialRoute={{
                        component: currentView,
                        title: "Album List!",
                        passProps: { isUserLoggedIn: this.isUserLoggedIn },
                        // viewType: this.state.listViewType
                    }} 
                    style={{flex: 1}}
                /> */}
                
            </View>
        );
     }
 }

 //Render it to the device

 export default App;
