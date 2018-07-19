import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './style.css';
const API_KEY = 'AIzaSyBDjqcSttF9qdoitdiZqT3fKCFzKRmO1oI';



class App extends Component {
    constructor(props){
        super(props);

        this.state = {videos : []};

        this.onSearchVideo('dota2');
    }
    onSearchVideo(term){
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render(){
        const videoSearch = _.debounce((term) => { this.onSearchVideo(term)}, 300 );
        return (
        <div> 
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
            onSelectedVideo={selectedVideo => this.setState({selectedVideo})}
            // vverhy function(selectedVideo) {return this.setState({selectedVideo: selectedVideo})}
            videos={this.state.videos}/>
        </div>
    
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));