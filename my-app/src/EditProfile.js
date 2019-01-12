import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class EditProfile extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount(){

    }

    render(){
        return (
            <div className="editProfile">
                <Link to='/home'><i className="fa fa-arrow-left"></i></Link>
                <div>Edit Profile Page</div>
                <form>
                    <input type="text" name="f_name" required />
                    <input type="text" name="l_name" required />
                    <input type="password" name="oldPassword" required />
                    <input type="password" name="newPassword" required />
                    <input type="password" name="passwordMatch" required />
                    <input type="file" name="img" required/>
                    
                </form>
            </div>
        )
    }
}

export default EditProfile