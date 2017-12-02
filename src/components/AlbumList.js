import React, { Component } from 'react';
import {ScrollView, Text, NavigatorIOS} from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    constructor(props){
        super(props)
        this.navigator = this.props.navigator;
    }
    state = {
        albums: []
    };

    componentWillMount() {
        // debugger;
        // console.log("component will mount ")    
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({albums: response.data}));
    }
    navigateToDetail (key, album) {
        this.props.navigator.push({
            component: AlbumDetail,
            key: key,
            album: album,
            title: 'Scene '
          });
    }

    renderAlbums(){
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}  whilePress={this.navigateToDetail}></AlbumDetail>)
    }

    render(){
        return (
            <ScrollView>
               {this.renderAlbums()}
            </ScrollView> 

        );
    }
}
export default AlbumList;