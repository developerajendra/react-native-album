 //Import a library to help create a component
import React, {Component} from 'react';
import ReactNative, { View, Text, NavigatorIOS }  from 'react-native';


//Import custom Components
import {Header, AlbumList, Auth, FlexboxPractice} from "./src/components";



 //Create a component
 class App extends Component{
     constructor(props){
        super(props);
        this.state = {
            listViewType:''
        }
     }

     listViewType = (type)=>{
        
        this.setState({listViewType: type});
        console.log("view type...",this.state); 
     }
      
     render(){
        return (
            <View style={{flex: 1}}>
                <Header viewType={this.listViewType.bind(this)} headerText={'Albums!'}  />
                {/* <FlexboxPractice /> */}
                <NavigatorIOS 
                    initialRoute={{
                        component: Auth,
                        title: "Album List!",
                        // viewType: this.state.listViewType
                    }} 
                    style={{flex: 1}}
                />
                
            </View>
        );
     }
 }

 //Render it to the device

 export default App;
