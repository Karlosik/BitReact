import React, { Component } from 'react';
// import logo from './logo.svg';
import { Header, Icon,List } from 'semantic-ui-react';
import './App.css';
import Axios from "axios";

class App extends Component {
  state={
    values:[]
  }

  componentDidMount(){
    Axios.get("http://localhost:5000/api/values")
    .then((Response)=>{
      console.log(Response);
      this.setState({
      values:Response.data
    })
    })

    
  }

  render(){

    return (
      <div>  
        <Header as="h2">
          <Icon  name='users' />
          <Header.Content>BitReact</Header.Content>
        </Header> 
        <List>
        {this.state.values.map((value:any)=>(
          <List.Item key={value.id}>{value.name}</List.Item>
        ))}
        </List>
  
       {/* <ul>
         {this.state.values.map((value:any)=>(
           <li key={value.id}>{value.name}</li>
         ))}
       </ul> */}
      </div>
    );
  }
  
}

export default App;
