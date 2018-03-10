import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import getListByUserId from '../../actions/getListByUserId'
import axios from 'axios'

class AddNewMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }
    onChange = (event) => {
        const newState = {}
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }
    onButtonClick = (event) => {
        this.setState({show: !this.state.show})
    }
    onSubmitClick = (event) => {
        event.preventDefault();

        const ROOT_URL = `https://movie-picker-ff027.firebaseio.com/`;
        const user = document.cookie.split(';').filter((e,i)=>{
            return e.indexOf('myAppUser') >= 0
        })[0].split('=')[1]

        const lastId = Math.max.apply(Math, Object.keys(this.props.listOfMovies)) + 1
        const data = {
            title: this.state.title,
            year: this.state.year,
            genre: this.state.genre
        }
        axios({
            method: 'post',
            url: `${ROOT_URL}/${user}/.json`,
            data: { ...data }
        }).then((response)=>{
            this.props.getListByUserId(user)
        })

    }
    render(){
        let toRender;
        if(this.state.show){
            toRender = (
                <form>
                    <input type="text" placeholder='title' onChange={this.onChange} name='title'></input>
                    <input type="text" placeholder='year' onChange={this.onChange} name='year'></input>
                    <input type="text" placeholder='genre' onChange={this.onChange} name='genre'></input>
                    <button type='submit' onClick={this.onSubmitClick}>Add</button>
                </form>
            )
        }
        return (
            <Fragment>
                <button onClick={this.onButtonClick}>Add Movie</button>
                {toRender}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listOfMovies: state.listByUserId
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getListByUserId: getListByUserId }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewMovie)