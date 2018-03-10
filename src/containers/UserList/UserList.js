import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import getListByUserId from '../../actions/getListByUserId'
class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    renderList = () => {
        return this.props.listOfMovies.map((movie, index)=>{
            return <li key={index}>{movie}</li>
        })
    }

    render(){
        return (
            <div>
                <h2>list</h2>
                <ul>
                    {/* {this.renderList()} */}
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

export default connect(mapStateToProps)(UserList)