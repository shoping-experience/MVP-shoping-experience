import React from "react";
import ProductList from "./ProductList.jsx";
import SignIn from "./SignIn.jsx";
import App from "../App.jsx"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.check=this.check.bind(this)
  };  
  componentDidMount(){
    axios.get('http://localhost:5000/').then((res)=>{
      this.setState({
        users:res.data,
        name: "",
        password: "",
        check:""
      })
    })
  }
  check(e){
    e.preventDefault();
    const arrayNAME = this.state.users.map((element)=>
    element.name )
    
    const arrayPASSWORD = this.state.users.map((element)=>
    element.password )
    if(arrayName.indexOf(this.state.name) === -1){
      this.setState({check:"signin"})
    }else  if(arrayName.indexOf(this.state.name) !== -1 && arrayPassword[arrayName.indexOf(this.state.name)] !== this.state.password ){ 
    }else  if(arrayName.indexOf(this.state.name) !== -1 && arrayPassword[arrayName.indexOf(this.state.name)] === this.state.password ){
      this.setState({check:"acceuil"})
    } 
  }
  
  render() {
    if(this.state.check === ""){
      return (
        <div className=" SignInForm ">
          <form onSubmit={(e)=>this.check(e)}>
            <input
              type="text"
              name="name"
              placeholder="UserName "
              value={this.state.name}
              onChange={(e)=>{this.setState({name:e.target.value})}}
            /><br></br>
          
            <input
              type="password"
              name="password"
              placeholder="password "
              value={this.state.password}
              onChange={(e)=>{this.setState({password:e.target.value})}}
            /><br></br>
  
            <input type="submit" value="Sign In" /><br></br>
          </form>
        </div>
      )
    }else if(this.state.check === "signin"){
      return (
        <div>
          <SignIn/>
         
        </div>
      )
    }else if(this.state.check === "acceuil"){
    return (
      <div>
           <ProductList name={this.state.name}/> 
           <button onClick={this.props.onClick} name="ProductList" >LogIn </button>
          {console.log(this.state.name)} 
                   
      </div>
    )
    }
  }
}

export default Login;
