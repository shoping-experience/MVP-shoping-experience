import React from 'react';
import AddProduct from './components/AddProduct.jsx';
import Compo from './components/Compo.jsx'
import Login from './components/Login.jsx'
import SignIn from './components/SignIn.jsx'
import ProductList from './components/ProductList.jsx'
//import axios from "axios"
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {view: "Wellcome",products:[]};
     this.handleOnClick = this.handleOnClick.bind(this);

  }
  handleOnClick (e){
    this.setState({view: e});
    console.log(this.state.view);
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
    const {view} = this.state;
        let changeForm;
        if(view==="Wellcome"){
            changeForm= <Wellcome onClick={()=>{this.handleOnClick('SignIn')}} />
        }
        else if(view === "SignIn"){
          changeForm =<SignIn onClickChange={()=>{this.handleOnClick('products')}} />
          // changeForm =< ProductList products={this.state.products} onClick={()=>this.handleOnClick('addproduct')} />

        }
      //   else if(view==="Login"){
      //     changeForm= < Login onClick={this.handleOnClick} />
        
      // } 
    //   else if(view==="Compo"){
    //     changeForm=< Compo onClick={this.handleOnClick} />
    // }
        else if(view==="products"){
          changeForm=<ProductList products={this.state.products} onClick={()=>this.handleOnClick('addproduct')} />
      }
      else if(view==="addproduct"){
        changeForm=<AddProduct  onClick={()=>this.handleOnClick('compo')} />
    }else if(view==="compo"){
          changeForm=<Compo   onClick={this.handleOnClick} />
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

         <h1><br></br>Wellcome to shopping experience</h1>
         <br></br>
         <br></br>
         <p>A new online shoping experience.Get everything you love to your house .Our shop offers you some interesting products, come, discover and buy good products.</p>
         <button onClick={props.onClick} name="SignIn" >Enter </button>  
         <br></br>
         <br></br><br></br>
         <br></br>
          <h4>By Issam && Mohamed Amine/RBK</h4>
         <p>To contact us, please send us an email to: shopping.experience.issam.med@gmail.com</p><br></br>
         
    </div>
  );


export default App;
