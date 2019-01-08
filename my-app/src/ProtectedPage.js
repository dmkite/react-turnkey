import React from 'react'

export default function ProtectedPage(){
    return (
        <div className="protectedPage">
            <h1>We're In</h1>
            <p>Your token is stored in local storage under the key 'token'</p>
        </div>
    )
}