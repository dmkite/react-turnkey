import React, {Component} from 'react'
import Warning from './Warning'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import {signup} from './actions/auth'

class Signup extends Component{
    constructor(props){
        super(props)
        this.state = {
            f_name: '',
            l_name: '',
            username: '',
            password: '',
            passwordMatch: '',
            errorState: false,
            errorMessage: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    checkVals(){
        if( this.state.f_name.length > 0 
            && this.state.l_name.length > 0
            && this.state.username.length > 0
            && this.state.password.length >= 8
            && this.state.passwordMatch === this.state.password) return true
            return false
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        const {f_name, l_name, username, password, passwordMatch} = this.state
        const body = { f_name, l_name, username, password, passwordMatch }
        this.props.signup(body)
    }

    render(){
        return (
            <div className="signup">
                <img className="icon" src="icon.png" alt="Turnkey icon" />
                <form id="signup" onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="f_name">first name:</label>
                    <input id="f_name" type="text" maxLength="50" required onChange={(e) => this.handleChange(e)}/>
                    <label htmlFor="l_name">last name:</label>
                    <input id="l_name" type="text" maxLength="50" required onChange={(e) => this.handleChange(e)}/>
                    <label htmlFor="username">username:</label>
                    <input id="username" type="text" required onChange={(e) => this.handleChange(e)}/>
                    <label htmlFor="password">password:</label>
                    <input id="password" type="password" minLength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required onChange={(e) => this.handleChange(e)}/>
                    <label htmlFor="passwordMatch">retype password:</label>
                    <input id="passwordMatch" type="password" minLength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        required onChange={(e) => this.handleChange(e)}/>
                    <button id="submit" type="submit" disabled={this.checkVals() ? false : true} >submit</button>
                    {this.state.password !== this.state.passwordMatch 
                        ? <span className="passwordWarning">Passwords do not match</span>
                        : ''
                    }

                </form>
                <p className="actions">Already a member? <a href="#" onClick={this.props.handleClick}>Login</a></p>
                {this.state.errorState ? <Warning warning={this.state.errorMessage}/> : ''}
            </div>
        )
    }
}

const mapStateToProps = state => ({auth:state.auth})
const mapDispatchToProps = dispatch => bindActionCreators({signup}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Signup)