import React from "react";
import axios from "axios";
import App from "../App.jsx"
import Login from "./Login.jsx"
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      email: "",
      name: "",
      password: "",
      phoneNumber: "",
      check:""
    };
    this.addUser=this.addUser.bind(this);
  }
  addUser(e){
    e.preventDefault()
    this.props.onClickChange('Login')
    const newUser = {
      email:this.state.email,
      name: this.state.name,
      password:this.state.password,
      phoneNumber: this.state.phoneNumber,
    }
  axios.post('http://localhost:5000/',newUser)
  .then(res => console.log(res.data));
      this.setState({
        email: "",
        name: "",
        password: "",
        phoneNumber: "",
        check:"Login"
      })
  }

  render() {
   if(this.state.check === ""){
    return (
      <div className=" SignInForm ">
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="user"
            placeholder="UserName "
            value={this.state.name}
            onChange={(e)=>{this.setState({name:e.target.value})}}
          /><br></br>
        
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={(e)=>{this.setState({email:e.target.value})}}
          /><br></br>
          
          <input
            type="password"
            name="password"
            placeholder="password "
            value={this.state.password}
            onChange={(e)=>{this.setState({password:e.target.value})}}
          /><br></br>
          
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone number"
            value={this.state.phoneNumber}
            onChange={(e)=>{this.setState({phoneNumber:e.target.value})}}
          /><br></br>

             {/* <input type="submit" name="Next" /><br></br>   */}
           <button type="submit"  name="Login" >SignIn </button>
        </form>
      </div>
    );
   }else {
     return (
       <div>
         <button onClick={props.onClick} name="Wellcome" >Enter </button>
       </div>
     )
   }
   
  }
}

export default SignIn;
