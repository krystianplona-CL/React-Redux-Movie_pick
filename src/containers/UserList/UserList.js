import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import getListByUserId from '../../actions/getListByUserId'

class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        const user = document.cookie.split('myAppUser=')[1]
        this.props.getListByUserId(user)
    }

    renderList = () => {
        return Object.keys(this.props.listOfMovies).map((element, index)=>{
            console.log(this.props.listOfMovies[element])
            return (
                <li key={element}>
                    <span>Title: {this.props.listOfMovies[element].title}</span><br/>
                    <span>year: {this.props.listOfMovies[element].year}</span>
                </li>
            )
        })
    }

    render(){
        return (
            <div>
                <h2>list</h2>
                <ul>
                    {this.renderList()}
                </ul>
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