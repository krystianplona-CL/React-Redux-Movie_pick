import React, { Component } from 'react'

export default class LogOut extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    onButtonClick = (event) => {
        event.preventDefault();
        document.cookie = "myAppAuth=false"
        window.location.reload();
    }
    render(){
        return ( 
            <button onClick={this.onButtonClick}>LogOut</button>
        )
    }
}