import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import getListByUserId from '../../actions/getListByUserId'

import LogOut from './../../components/LogOut'
import AddNewMovie from './AddNewMovie'
import ListItem from './../../components/MainPage/ListItem/ListItem'
import './style.css'
import axios from 'axios'

class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        const user = document.cookie.split(';').filter((e,i)=>{
            return e.indexOf('myAppUser') >= 0
        })[0].split('=')[1]
        this.props.getListByUserId(user)
    }
    removeMovie = (event, itemToRemove) => {
        event.preventDefault();

        const ROOT_URL = `https://movie-picker-ff027.firebaseio.com/`;
        const user = document.cookie.split(';').filter((e,i)=>{
            return e.indexOf('myAppUser') >= 0
        })[0].split('=')[1]

        axios({
            method: 'delete',
            url: `${ROOT_URL}/${user}/${itemToRemove}.json`,
        }).then((response)=>{
            // this.props.getListByUserId(user)
            document.location.reload();
        })
    }

    renderList = () => {
        const objectKey = Object.keys(this.props.listOfMovies)[0]

        return Object.keys(this.props.listOfMovies).map((element, index)=>{
            return (
                <ListItem key={element} element={element} {...this.props} removeMovie={this.removeMovie}/>
            )
        })
    }

    render(){
        return (
            <div className='container'>
                <LogOut />
                <AddNewMovie show='true'/>
                <div>
                    <h2>LIST OF YOUR MOVIES</h2>
                    <ul className='list'>
                        {this.renderList()}
                    </ul>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserList)