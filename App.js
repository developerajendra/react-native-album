 //Import a library to help create a component
import React from 'react';
import ReactNative, { View, Text, NavigatorIOS }  from 'react-native';


//Import custom Components
import {Header, AlbumList, Auth, FlexboxPractice} from "./src/components";



 //Create a component
const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header headerText={'Albums!'} />
            {/* <AlbumList></AlbumList> */}
            
            <NavigatorIOS 
                initialRoute={{
                    component: AlbumList,
                    title: "Album List!"
                }} 
                style={{flex: 1}}
            />
            
        </View>
    );
};

 //Render it to the device
 export default App;
