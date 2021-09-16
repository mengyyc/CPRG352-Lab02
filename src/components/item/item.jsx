import React, { Component } from 'react'
import './item.css'

export default class item extends Component {
    render() {
        const {login, avatar_url, html_url} = this.props

        return (
           <div className="card">
            <a href={html_url}
            target="_blank"
            rel="noreferrer" 
           >
               <img src={avatar_url} style={{width:'100px'}} alt="" />
               </a> 
               <p className="card-text">{login}</p>
            </div>
        )
    }
}
