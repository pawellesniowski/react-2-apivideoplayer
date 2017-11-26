import React, {Component} from 'react';
import youtubeApiSearch from 'youtube-api-search';
import _ from "lodash";

import SearchBar from './components/search_bar';
import VideoDetail from "./components/video_detail";
import VideoList from './components/video_list';
import "./style/main.css";
const API_KEY = "AIzaSyAU1jy-s6Q_1hLqBCA0U_6VF99lgrxwT1o";

// calling youtube API:


// refaktoring "function based component" to "class based component" to keep track 
// of list of videos by recording them on its state.
class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            term: "react js",
            videos: [],
            selectedVideo: null
        }

        this.videoSearch(this.state.term);
    };

    videoSearch(term){

        youtubeApiSearch(
            {
            key: API_KEY,
            term
            },
            videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
            }
        );
    };

    render(){

        const videoSearch = _.debounce(term => {this.videoSearch(term)}, 600);

        return (

            <div className="container">
                    <SearchBar 
                        onSearchTermChange={videoSearch}
                    />
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList
                        videos={this.state.videos}
                        onVideoSelect={selectedVideo=>this.setState({selectedVideo})} 
                    />
                </div>
            </div>
        );
    }
}

export default App;