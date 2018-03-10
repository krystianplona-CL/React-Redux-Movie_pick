import React, { Component } from 'react';

const ListItem = ( props ) => {
    const { element, removeMovie } = props
    return (
        <li>
            <span>Title: {props.listOfMovies[element].title}</span><br/>
            <span>year: {props.listOfMovies[element].year}</span><br/>
            <span>genre: {props.listOfMovies[element].genre}</span><br/>
            <button onClick={(event)=>{removeMovie(event, element)}}>REMOVE</button>
        </li>
    )
}

export default ListItem