import React, {Component} from "react";
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
 
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
 


class AlbumDetail extends Component {
    constructor(props){
        super(props)
    }
     
    render() {
        if(!this.props.album)
        return <Text>Loading...</Text>;

        const {
            title,
            artist,
            thumbnail_image,
            image,
            url
        } = this.props.album;    

        const {
            thumbnailStyle,
            headerContentStyle,
            thubnailContainerStyle,
            headerTextStyle,
            imageStyle
        } = styles;

        return(
            <Card>
                <TouchableOpacity onPress={()=>{this.props.whilePress(this.props.album)}}>
                     <CardSection>
                         <View style={thubnailContainerStyle} >
                             <Image style={thumbnailStyle} Image source={{ uri: thumbnail_image }} />
                         </View>
                         <View style={headerContentStyle}>
                             <Text style={headerTextStyle}>{title}</Text>
                             <Text>{artist}</Text>
                         </View>
                     </CardSection>
                     <CardSection>
                         <Image style={imageStyle} source={{uri: image}} />
                     </CardSection>
                 </TouchableOpacity>
                 <CardSection>
                    <Button onPress={() => Linking.openURL(url) } />
                 </CardSection>
            </Card>
         );
    };

}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thubnailContainerStyle: {
        justifyContent: 'center',
        
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

}

export default AlbumDetail;