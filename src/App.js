import React from 'react'
import SearchBar from './components/search_bar';
import "./style/main.css";

const API_KEY = "AIzaSyAU1jy-s6Q_1hLqBCA0U_6VF99lgrxwT1o";

const App = () =>{
    return (
        <div className="container">
            <SearchBar />
        </div>
    );
}

export default App;