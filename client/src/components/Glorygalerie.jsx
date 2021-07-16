import React, { Component } from 'react';
import axios from "axios"
export default class Glory extends Component {
  constructor(props){
    super(props)
    this.state ={
      gamersG:[]
    }
    // this.delete= this.delete.bind(this)
  }
  componentDidMount(){
    axios.get('/gamer').then((res,req)=>{
      console.log(res.data);
      this.setState({gamersG:res.data})
    })
  }
  

  render() {
  return(
    <div>
{
  this.state.gamersG.map((element,key)=>(
<ul  key={key}>
<li>{element.nickname}</li>;
<li>{element.games}</li>;
<li>{element.rankee}</li>;
<image src ={element.image}></image>
<li>{element.gamestrophies}</li>;
<li>{element.priceofhisglory}</li>;
</ul>
  )
  
  )
}
</div>
  )
    

    


}





}