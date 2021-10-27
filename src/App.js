//import logo from './logo.svg';
import './App.css';
import {Component} from "react";
export class ClassComponent extends Component{
  render(){
    return(
      <div className="pq">
        <h1>This is created using Functional Based Components</h1>
        <p>This is done using external css</p>
        <p style={{color:"blue"}}>This is done using inline css </p>
      </div>
    );
  }

}
 export function FunctionComponent() {
   return(
    <div className="qp">
      <h1>This is created using Functional Based Components</h1>
      <p>This is done using external css</p>
      <p style={{color:"blue"}}>This is done using inline css</p>
    </div>
   );
 }
 




function App() {
  return (
    <div className="App">
      <h1 className="heading" >Styling using Functional and Class Component </h1>
      <button className="sm"> this is functional Component</button>
      <button className="ms">this is class Component</button>
     
    </div> 
  );
}

export default App;

