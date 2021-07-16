import React, { Component } from 'react';
import axios from "axios"


export default class App extends Component {
  constructor(props){
    super(props)
this.state ={
            nickname :"",  
            games :"",
            rankee : "",
            image : "",
            gamestrophies : "", 
            priceofhisglory : ""
          }
}
handelChange(e){
    this.setState({[e.target.name]:e.target.value})
    }
create(){
    axios.post("/gamer",this.state).then((res)=>{
      alert("GG")
    })
    
  }
  delete(id){
    axios.delete("/gamer/:id"+id).then((res)=>{
      this.componentDidMount()
    })
  }

  
  render() {

    return (
        
            <div>
                <header>
              <h1>Welcome To Glory Store</h1>
              </header>
              <div>
                <h6>Your Nickname</h6>
              <input name ="nickname"type="text" onChange={this.handelChange.bind(this)}></input>
              
              </div>
              <div>
                <h6>Name of the game</h6>
              <input name ="games" type="text" onChange={this.handelChange.bind(this)}></input>
              
              </div>
              <div>
                <h6>Your Rank in the Game</h6>
              <input name ="rankee" type="text" onChange={this.handelChange.bind(this)}></input>
              
              </div>
              <div>
                <h6>Your image in the Game</h6>
              <input name ="image" type="text" onChange={this.handelChange.bind(this)}></input>
              
              </div>
              <div>
                <h6>Trophies You had in the Game</h6>
              <input name ="gamestrophies" type="text" onChange={this.handelChange.bind(this)}></input>
              
              </div>
              <div>
                <h6>The price Of your Glory</h6>
              <input name ="priceofhisglory" type="number" onChange={this.handelChange.bind(this)}></input>
              
              </div>
              <div>
              <button onClick={this.create.bind(this)}>t3adet</button>
              <button onClick={()=>{this.dzlztz(e.id)}}>tfasekh</button>
              </div>
            </div>
            )
          }
    
  



}