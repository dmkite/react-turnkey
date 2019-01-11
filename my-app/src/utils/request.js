// import React from 'react'
import axios from 'axios'

export const request = (url, method = 'get', body = null) => {
        console.log(body)
        return axios(url, {
            method,
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            data: body,
        })
        .then(response => response.data)
        .catch(err => err)
}