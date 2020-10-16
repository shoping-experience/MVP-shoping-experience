import React, { Component } from 'react'
import axios from 'axios'

export default class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            size: '',
           
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
        const {name,size} = this.state
        axios.post('http://localhost:5000/newproducts',{name,size})
    }
    render() {
        const {name,size} = this.state
        return (
            <div>
                <div>
                <input type="text" placeholder="name of outfit" name='name' onChange={this.saveProduct}/><br></br>
                <input type="text" placeholder="size" name="size" onChange={this.saveProduct}/><br></br>
                <br></br>
                 <button class="butt1" onClick={this.sendNewProduct} >Add to your purchase</button>
                </div>
                <div>
                <input type="text" placeholder="name of outfit" name='name' onChange={this.saveProduct}/><br></br>
                <input type="text" placeholder="size" name="size" onChange={this.saveProduct}/><br></br>
                <br></br>
                 <button class="butt2"  onClick={this.sendNewProduct} >Add to your purchase</button>
                </div>
                <div>
                <input type="text" placeholder="name of outfit" name='name' onChange={this.saveProduct}/><br></br>
                <input type="text" placeholder="size" name="size" onChange={this.saveProduct}/><br></br>
                <br></br>
                 <button class="butt3"  onClick={this.sendNewProduct} >Add to your purchase</button>
                </div>
            </div>
        )
    }
}
