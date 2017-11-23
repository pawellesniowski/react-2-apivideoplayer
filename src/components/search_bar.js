import React, { Component } from 'react';
import youtuna from './../img/youtuna.png';

class searchBar extends Component {
    render(){
        return <div className="searchBar row">
            <div className="col-2">
                <img className="logo" src={youtuna} alt="youtuna logo" />
            </div>
            <div className="col-10">
                <input className="input"type="text" name="search" placeholder="Search..." />
            </div>
            
          </div>;
    }
}

export default searchBar;