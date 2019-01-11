// import React from 'react'
import axios from 'axios'

export const request = (url, method = 'get', body = null) => {
        return axios( process.env.REACT_APP_BASE_URL + url, {
            method,
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            data: body,
        })
        .then(response => response.data)
        .catch(err => err)
}