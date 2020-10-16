import React, { Component } from 'react'
import ProductItem from './ProductItem.jsx'

export default class ProductList extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
             <div>
                 {this.props.products.map(product=><ProductItem product={product}></ProductItem>)}
        <br>{console.log('here',this.props.products)}</br>
                 <button onClick={this.props.onClick} name="addproduct" align="left">add new product</button>
        </div>
        )
    }
}
