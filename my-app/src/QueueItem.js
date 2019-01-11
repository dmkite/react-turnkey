import React from 'react'

export default function QueueItem(props){
    return (
        <div className={`queueItem ${props.type}`}>

            <img className="cardImg" src={props.img_url} alt="card image"/>
            <div className="cartText">
                <a href={props.url} target="_blank"><h3>{props.title}</h3></a>
                <p>{props.desc}</p>
                <p>Recommended by: <span>props.</span></p>
            </div>
        </div>
    )
}

// read starred url_img referral_id 