import React from 'react';
import AddProduct from './components/AddProduct.jsx';
import Compo from './components/Compo.jsx'
//import axios from "axios"
import $ from 'jquery';

import ProductList from './components/ProductList.jsx';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.handleOnClick = this.handleOnClick.bind(this);
      this.state = {view: "Wellcome",products:[]};
  }
  handleOnClick (e){
    this.setState({view: e.target.name});
  }

  componentDidMount(){
    var that = this
    $.get('/api/Product', (data)=>{
      this.setState({
        products: data
      })
    })
  }
  
  render(){
    console.log(this.state.products)
    const view = this.state.view;
        let changeForm;
        if(view==="Wellcome"){
             changeForm=<Wellcome onClick={this.handleOnClick} />
        }else if(view==="Compo"){
            changeForm=< Compo onClick={this.handleOnClick} />
        }
        else if(view==="products"){
          changeForm=< ProductList products={this.state.products} onClick={this.handleOnClick} />
      }
      else if(view==="addproduct"){
        changeForm=< AddProduct onClick={this.handleOnClick} />
    }
        return(
          <div>        
          {changeForm}      
          </div>
  )
      }    
  }


  const Wellcome = (props) => (
    <div className="App">

         <h1>Welcome to shoping experience</h1>
         <br></br>
         <br></br>
         <p>A new online shoping experience.Get everything you love to your house .Our shop offers you some interesting products, come, discover and buy good products.</p>
         <button onClick={props.onClick} name="Compo" >Enter </button>  
         <br></br>
         <br></br><br></br>
         <br></br>
          <h4>By Issam && Mohamed Amine/RBK</h4>
         
    </div>
  );


export default App;
