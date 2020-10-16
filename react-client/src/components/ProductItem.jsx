import React, { Component } from 'react'

export default class ProductItem extends Component {
    constructor(props){
        super(props) 
    }

    render() {
        return (
            <div>
        <h1>{this.props.product.name} </h1>
        <img src={this.props.product.img} />
        <h1>Size:{this.props.product.size}</h1>
        <h1>Price:{this.props.product.price}</h1>
        <br></br>
        </div>
        )
    }
}
