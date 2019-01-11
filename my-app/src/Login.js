import React, {Component} from 'react'
import Warning from './Warning'
import { logIn } from './actions/auth'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            errorState: false,
            errorMessage: '',
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const body ={
            username: this.state.username,
            password: this.state.password
        }

        return this.props.logIn(body)
        }

    render(){
        return(
            <div className="login">
                <img className="icon" src="icon.png" alt="Turnkey icon"/>
                <form id="login" onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="username">username:</label>
                    <input id="username" type="text" required onChange={(e) => this.handleChange(e)}/>
                    <label htmlFor="password">password:</label>
                    <input id="password" type="password" minLength="8" required onChange={(e) => this.handleChange(e)}/>
                    <button id="submit" type="submit" disabled={
                        (this.state.username.length > 1 && this.state.password.length >= 8) 
                        ? false 
                        : true}>submit</button>
                </form>
                <p className="actions">Not a member? <a href="#" onClick={this.props.handleClick}>Signup</a></p>
                {this.state.errorState ? <Warning warning={this.state.errorMessage}/> : ''}
            </div>
            
        )
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ logIn }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)