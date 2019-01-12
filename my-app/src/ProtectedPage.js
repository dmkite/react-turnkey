import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logOut} from './actions/auth'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import Queue from './Queue'

class ProtectedPage extends Component{
    handleLogOut = () => {
        this.props.logOut()
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="home">
                <header>
                    <div className='actions'>
                        <Link to='/edit-profile'>
                            <i className="fa fa-cog"></i>
                        </Link>
                        <p className='logout' onClick={this.handleLogOut}>Log Out</p>
                    </div>
                    <div className="greeting">
                        {this.props.auth.user.img ? <img src={this.props.auth.user.img} alt="user"/> : <div className="letter">{this.props.auth.user.f_name[0].toUpperCase()}</div>}
                        <p>Welcome, {this.props.auth.user.f_name}.</p>    
                    </div>
                </header>
                <div className="button">
                    <i className="fa fa-user"></i>
                </div>
                <div className="button">
                    <i className="fa fa-filter"></i>
                </div>
                <div className="button">
                    <i className="fa fa-plus"></i>
                </div>
                <Queue/>
            </div>
        )
    }
}

const mapStateToProps = state => ({auth:state.auth})
const mapDispatchToProps = dispatch => bindActionCreators({logOut}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedPage)
