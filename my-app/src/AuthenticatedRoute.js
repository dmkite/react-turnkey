import React  from 'react'
import {Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';

function AuthenticatedRoute(props){ 
    const {auth:{user, pending}, path, component} = props
    console.log(props, pending, !user)
    if(pending && !user) return <div className="loading"></div>
    else if (user) return <Route path={path} component={component} />
    else return <Redirect to='/'/>
}

const mapStateToProps = state => ({auth: state.auth})
export default connect(mapStateToProps)(AuthenticatedRoute)