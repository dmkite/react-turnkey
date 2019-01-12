import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class EditProfile extends Component{
    render(){
        return (
            <div className="editProfile">
                <Link to='/home'>Back</Link>
                <div>Edit Profile Page</div>
            </div>
        )
    }
}

export default EditProfile