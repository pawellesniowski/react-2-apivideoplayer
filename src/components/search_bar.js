import React, { Component } from 'react';
import youtuna from './../img/youtuna.png';

class searchBar extends Component {

    // constructor is called only once,
    // we use it to initiale some things like state, variables

    constructor(props){
        super(props); // calling the parent method
        this.state = {
            term: ""
        }
    }

    onInputChange(event){
        this.setState({term: event.target.value})
        console.log(this.state);
    }

    render(){
        return (
                <div className="searchBar row">
                    <div className="col-2">
                        <img className="logo" src={youtuna} alt="youtuna logo" />
                    </div>
                    <div className="col-10">
                        <input 
                            className="input" 
                            type="text" 
                            name="search" 
                            placeholder="Search..."
                            onChange={event => this.onInputChange(event)}
                            value={this.state.term}
                        />
                    </div>
                </div>
        );
    }
}

export default searchBar;