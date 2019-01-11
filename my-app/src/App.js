import React, { Component } from 'react';
import './App.css';
import ProtectedPage from './ProtectedPage'
import Login from './Login'
import Signup from './Signup'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      signup: false,
      auth: {
        pending: false,
        user: null
      }
    }
  }
  handleClick = () => {
    this.setState({
      signup: !this.state.signup
    })
  }

  handleLogin = () => {

  }

  render() {
    return (
      <div className="wrapper">
        {this.state.signup 
          ? <Signup handleSignup={this.handleSignup} handleClick={this.handleClick}/>
          : <div>
            {this.state.isLoggedIn ? <ProtectedPage /> : <Login handleClick={this.handleClick} handleLogin={this.handleLogin}/>}
             
          </div>}
      </div>

    )
  }
}


export default App;
