import React from 'react'
import {connect} from 'react-redux'

function ProtectedPage(props){
    return(
        <div className="protectedPage">
            <h1>We're in</h1>
            <div>Welcome, ${props.auth.user.f_name}. Your token is stored in local storage under the key 'token'</div>    
        </div>
    )
}

const mapStateToProps = state => ({auth:state.auth})

export default connect(mapStateToProps)(ProtectedPage)
