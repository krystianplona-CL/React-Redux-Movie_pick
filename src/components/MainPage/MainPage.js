import React, { Component, Fragment } from 'react'
import UserList from './../../containers/UserList/UserList'
import './style.css'

export default class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            validation: false,
            message: ''
        }
    }

    onInputChange = (event) => {
        const newState = {}
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const { firebase } = this.props;
        const auth = document.cookie.split('myAppAuth=')[1];
        auth !== "true" && firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then(data=>{
            document.cookie = 'myAppAuth=true'
            const user = data.email.split('@')[0]
            document.cookie = `myAppUser=${user}`
            this.setState({message: 'ok'})
        }).catch((error)=>{
            switch(error.code){
                case 'auth/invalid-email':
                    this.setState({message: 'Wrong email'})
                    break;
                case 'auth/wrong-password':
                    this.setState({message: 'Wrong password'})
                    break;
                default:
                    this.setState({message: 'Something went wrong! Try again leter!'})
            }
        })
    }
    
    render(){
        const auth = document.cookie.split(';').filter((e,i)=>{
            return e.indexOf('myAppAuth') >= 0
        })[0].split('=')[1]
        
        return (
        <div className='mainPage'>
            {
                auth === "true"
                ? <UserList/>
                : <Fragment>
                    <h1>Log In</h1>
                    <form>
                        usernane: <br/>
                        <input type='text' name='username' onChange={this.onInputChange}/><br/>
                        password: <br/>
                        <input type='password' name='password' onChange={this.onInputChange}/><br/>
                        <button type='submit' onClick={this.onFormSubmit}>Submit</button>
                    </form>
                    <p>{this.state.message}</p>
                </Fragment>
            }
            
        </div>
        )
    }
}
