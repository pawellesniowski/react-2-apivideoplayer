import React, {Component} from 'react';
import youtubeApiSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
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
            videos: [
                {
                    etag: '1',
                    snippet: {
                        thumbnails: {
                            default: {
                                url: ''
                            },
                            high: {
                                url: ''
                            }
                        },
                    title: ''
                    }
                }
               
            ]
        }

        youtubeApiSearch({
            key: API_KEY,
            term: 'grumpy cat'
        }, videos=>{
            this.setState({
                videos
            });
        });
    };

    render(){
        return (
            <div className="container">
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;