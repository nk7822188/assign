import {Component} from "react";
import '../App.css';
export class ClassComponent extends Component{
  render(){
    return(
      <div className="pq">
        <h1 className="h">This is created using Functional Based Components</h1>
        <p className="p">This is done using external css</p>
        <p className="p" style={{color:"blue"}}>This is done using inline css </p>
      </div>
    );
  }

}
 export function FunctionComponent() {
   return(
    <div className="qp">
      <h1 className="h">This is created using Functional Based Components</h1>
      <p className="p">This is done using external css</p>
      <p style={{color:"blue"}} className="p" >This is done using inline css</p>
    </div>
   );
 }