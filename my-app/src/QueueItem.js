import React from 'react'

export default function QueueItem(props){
    return (
        <div className={`queueItem ${props.type}`}>
            <div className="cardWrapper">
                <i className={`fa ${props.starred ? 'fa-star' : 'fa-star-o'}`}></i>
                <div className="cardImg" style={{backgroundImage:props.img_url }} ></div>
                <div className="cardText">
                    <a href={props.url} target="_blank"><h3>{props.title || 'Example Card'} </h3></a>
                    <p>{props.desc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum dolor, lacinia sed sagittis pellentesque, volutpat et purus.'}</p>
                </div>
            </div>
            <p className="rec">Recommended by: {props.referral_id || 'Example person'}</p>
        </div>
    )
}
