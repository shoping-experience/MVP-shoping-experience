import React, { Component } from 'react'
import axios from 'axios'

export default class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            size: '',
            price: 0
        };
        this.saveProduct = this.saveProduct.bind(this);
        this.sendNewProduct = this.sendNewProduct.bind(this)  
    }
    saveProduct(e){
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state)
    }
    sendNewProduct(){
        const {name,size,price} = this.state
        axios.post('http://localhost:5000/newproducts',{name,size,price})
    }
    render() {
        const {name,size,price} = this.state
        return (
            <div>
                <input type="text" placeholder="name of outfit" name='name' onChange={this.saveProduct}/>
                <input type="text" placeholder="size" name="size" onChange={this.saveProduct}/>
                <input type="text" placeholder="suggested price" name="price" onChange={this.saveProduct}/>
                 <button onClick={this.sendNewProduct} >add new product</button>
                
            </div>
        )
    }
}
