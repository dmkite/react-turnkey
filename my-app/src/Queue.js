import React, {Component} from 'react'
import QueueItem from './QueueItem'
import { connect } from 'react-redux';

class Queue extends Component{
    render(){
        return(
            <div className="queue">Queue</div>
        )
    }
}

const mapStateToProps = state => ({queue: state.queue})

export default connect(mapStateToProps)(Queue)