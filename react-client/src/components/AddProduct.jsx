import React, { Component } from 'react'

export default class AddProduct extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
            <div>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                 <button  >add new product</button>
                
            </div>
        )
    }
}
