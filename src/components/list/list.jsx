import React, { Component } from 'react'
import Item from '../item/item'

export default class list extends Component {
    render() {
        const {users, isLoading, isFirst, error} = this.props
        return (
            isFirst ? <h3>Enter a username to search</h3> 
            : isLoading ? <h3>Loading ...</h3>
            : error ? <h3>{error}</h3>
            :
            <div className="row">
                {
                    users.map((item) => {
                        return <Item key={item.id} {...item}/> 
                    })
                }
            </div>
        )
    }
}
