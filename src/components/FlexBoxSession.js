import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import Items from "./itemsComponent";


const FlexboxPractice = () => {
    return (
        <View style={{flex:1, backgroundColor:'red', marginTop:20}}>
             <View style={{backgroundColor:"gray", height:50, flexDirection:'row', justifyContent:'space-between', paddingLeft:10, paddingRight:10}}>
               
               <View>
                    <View style={[styles.logo, styles.bgWhite]}>

                    </View>
               </View>
               
               <View style={{height:40, width:150, flexDirection:'row', alignItems:'center'}}>
                        <View style={[{flex:1,height:20, marginRight:10}, styles.bgWhite]}>
                            <Text>1</Text>
                        </View>
                        <View style={[{flex:1, height:20}, styles.bgWhite]}>
                            <Text>2</Text>
                        </View>
               </View> 
             </View>
            <View style={{margin:10, flex:1}}>
                <View style={{backgroundColor:'gray', flex:1}}>
                    <Image 
                        source={{uri:'https://www.zibtek.com/hs-fs/hubfs/RN_logo.png?t=1511376971817&width=360&height=140&name=RN_logo.png'}} 
                        style={{flex:1}}
                        resizeMode="contain"
                     />
                </View>
            </View>
            <Items imageUrl={require("../RN_logo.png")} />

            <View style={{flex:1, backgroundColor:'green', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignContent:'space-between'}}>
                <View style={{width:50, height:50, backgroundColor:'gray', marginLeft:10, marginRight:10, }}></View>
                <View style={{width:50, height:50, backgroundColor:'gray', marginLeft:10, marginRight:10,}}></View>
                <View style={{width:50, height:50, backgroundColor:'gray', marginLeft:10, marginRight:10, }}></View>
                <View style={{width:50, height:50, backgroundColor:'gray', marginLeft:10, marginRight:10, }}></View>
                <View style={{width:50, height:50, backgroundColor:'gray', marginLeft:10, marginRight:10, }}></View>
                <View style={{width:50, height:50, backgroundColor:'gray', marginLeft:10, marginRight:10, }}></View>
                <View style={{width:50, height:50, backgroundColor:'gray', marginLeft:10, marginRight:10, }}></View>
                <View style={{width:50, height:50, backgroundColor:'gray', marginLeft:10, marginRight:10, }}></View>
                <View style={{width:50, height:50, backgroundColor:'gray', marginLeft:10, marginRight:10, }}></View>
                <View style={{width:50, height:50, backgroundColor:'gray', marginLeft:10, marginRight:10, }}></View>
            </View>

            <View style={{width:300, height:100, flexDirection:'row', justifyContent:'space-between', alignSelf:'center', alignItems:'center'}}>
                <View style={{width:50, height:50, backgroundColor:'gray', marginLeft:10, marginRight:10, marginBottom:10, borderRadius:50}}></View>
                <View style={{width:50, height:50, backgroundColor:'gray', marginLeft:10, marginRight:10, marginBottom:10, borderRadius:50}}></View>
                <View style={{width:50, height:50, backgroundColor:'gray', marginLeft:10, marginRight:10, marginBottom:10, borderRadius:50}}></View>
            </View>

        </View>
    );
}
     
const styles = StyleSheet.create({
    logo:{
        width:50, height:50, borderRadius:50,
        backgroundColor:"red"  
    },
    bgWhite:{
        backgroundColor:'#fff'
    }
})


export { FlexboxPractice };