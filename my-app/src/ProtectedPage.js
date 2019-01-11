import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logOut} from './actions/auth'
import {bindActionCreators} from 'redux'

class ProtectedPage extends Component{
    handleLogOut = () => {
        this.props.logOut()
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="protectedPage">
                <h1>We're in</h1>
                <div>Welcome, ${this.props.auth.user.f_name}. Your token is stored in local storage under the key 'token'</div>    
                <p className='logout' onClick={this.handleLogOut}>Log Out</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({auth:state.auth})
const mapDispatchToProps = dispatch => bindActionCreators({logOut}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedPage)
