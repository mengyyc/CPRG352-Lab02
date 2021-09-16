import React, { Component } from 'react'
import axios from 'axios'

export default class search extends Component {
    state = {
        searchValue: ''
    }

    onSearch = () => {
        const {updateAppState} = this.props
        const {searchValue} = this.state

        // Verify search value is not null
        if (searchValue.trim() === '') return

        const URL = `https://api.github.com/search/users?q=${searchValue}`
        // Update isLoading state to loading before send request
        updateAppState({
            users:[],
            isFirst:false,
            isLoading:true,
            error:''
        })

        // Use axios to send request
        axios.get(URL)
        .then ((value) => {
            // Update user list if succeed
            updateAppState({
                users: value.data.items,
                isFirst:false,
                isLoading:false,
                error:''
            })
        })
        .catch ((reason) => {
            updateAppState({
                users: [],
                isFirst: false,
                isLoading: false,
                error: reason
            })
        })
        this.setState({})
    }

    render() {
        return (
            <div>
               <input 
                type="text"
                onChange={(e) => {this.setState({searchValue:e.target.value})}}
                /> 
                <button
                    onClick={this.onSearch}
                >Search</button>
            </div>
        )
    }
}
