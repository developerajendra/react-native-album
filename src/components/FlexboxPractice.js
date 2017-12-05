import React from "react";
import {View, Text} from "react-native";

const FlexboxPractice = () => {
    return (
        <View style={style.container}>
             <View style={style.row1}>
                <View style={style.circle}></View>
                <View style={style.rightBox}>
                    <View style={style.rightBoxContent}></View>
                    <View style={style.rightBoxContent}></View>
                </View> 
             </View>
             <View style={style.contentContainer}>
                <View style={style.row2}>
                </View>
                <View style={style.row3}>
                    <View style={style.row3Content}></View>
                    <View style={style.row3Content}></View>
                    <View style={style.row3Content}></View>
                </View>
                <View style={style.row4}>
                    <View style={style.row4Content}></View>
                    <View style={style.row4Content}></View>
                    <View style={style.row4Content}></View>
                    <View style={style.row4Content}></View>
                    <View style={style.row4Content}></View>
                    <View style={style.row4Content}></View>
                    <View style={style.row4Content}></View>
                </View>
                <View style={style.row5}>
                    <View style={style.row5Content}></View>
                    <View style={style.row5Content}></View>
                    <View style={style.row5Content}></View>          
                </View>
             </View>
        </View>
    );
}

const common = {
    flexDirection: "row",
    height: 90,
    marginTop: 10,
    backgroundColor:'#ccc'
};

const style = {
    container:{
        marginTop:50,
        justifyContent: "center",
        flex: 1
    },

    contentContainer: {
        padding:10
    },
  
    row1: {
         ...common,
         justifyContent: "space-between",
         alignItems: 'center',
         padding:10,        
    },
    circle:{
        backgroundColor: "#fff",
        width:50,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
    },
    rightBox :{
        flexDirection: "row",
        justifyContent: "space-between",
        width: 220,
        
      
    },
    rightBoxContent: {
        flex:1,
        height: 20,
        backgroundColor: '#fff',
        marginLeft: 10
    }, 
    row2: {
        ...common
    },
    row3: {
        ...common,
        padding: 10,
        height:133  
    },
    row3Content : {
        flex: 1,
        backgroundColor: '#fff',
        margin:10
    },
    row4: {
        ...common,
        padding: 10,
        flexWrap: 'wrap' ,
        justifyContent: 'center',
        height: 'auto'
    },
    row4Content : {
        height: 50,
        width: 50,
        backgroundColor: '#fff',
        margin: 5,
        borderColor: 'black'
    },
    row5: {
        ...common,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    row5Content: {
        width:50,
        height: 50,
        backgroundColor:'#fff',
        margin: 10,
        borderRadius:100,
         
    }
}
export { FlexboxPractice };