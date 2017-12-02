 //Import a library to help create a component
import React from 'react';
import ReactNative, { View, Text, NavigatorIOS }  from 'react-native';

//Import custom Components
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
 

 //Create a component
const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header headerText={'Albums!'} />
            {/* <AlbumList></AlbumList> */}
            
            <NavigatorIOS 
                initialRoute={{
                    component: AlbumList,
                    title: 'My Initial Scene'
                }} 
                style={{flex: 1}}
            />
            
        </View>
    );
};

 //Render it to the device
 export default App;
