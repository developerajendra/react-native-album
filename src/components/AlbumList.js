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
    navigateToDetail = (album) => {
        this.navigator.push({
            component: AlbumDetail,
            passProps: { album: album, header: false },
            title: album.title,
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
export { AlbumList };