import {Component} from "react";
import './App.css';
import {ClassComponent,FunctionComponent} from "./component/assignment";

class App extends Component{
  state={
    classComponent:false,
    functionComponent:false,
  }
  updatedetailsOfclass =()=>{
    if(this.state.classComponent){
      this.setState({classComponent:false})
    }else {
      this.setState({classComponent:true})
    }

  }
  updatedetailsOffunction = ()=>{
    if(this.state.functionComponent){
      this.setState({functionComponent:false})
    }else {
      this.setState({functionComponent:true})
    }
  }

  render(){
  return (
    <div className="App">
      <h1 className="heading">Styling using Functional and Class Component </h1>
      <button className="sm" onClick={this.updatedetailsOffunction}> this is functional Component</button>
      <button className="ms" onClick={this.updatedetailsOfclass}>this is class Component</button>
       <div>
         <div style={{visibility:this.state.functionComponent?"visible":"hidden"}}><FunctionComponent/></div>
         <div style={{visibility:this.state.classComponent?"visible":"hidden"}}><ClassComponent/></div>
       </div>
     
      
     
    </div> 
  );
  }
}

export default App;

