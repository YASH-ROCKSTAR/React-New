import React from 'react'
import './App.css';
import {Header} from './component/Header'
import CHeader from './component/CHeader'
import Channel from './component/Channel';
import FunctionClick from './component/Function\Click';
import CFunctionClick from './component/CFunctionClick';
// const name=<span>Hello React</span>

// const newElement=React.createElement('h2',{className:'newElement'},'hello h2 tag')
// const test=()=>{
//   alert("Hello Ajay");
// }
// const add=function(a){
//   if(a>18){
//     return <span>You are eligible</span>
//   }else{
//     return <span>You are not eligible</span> 
//   }
// }
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello yash nigam , {name}</h1>
//       {newElement}
//       <button onClick={test}></button>
//       {add(19)}
//     </div>
//   );
// }
class App extends React.Component{
  render(){
    return(
    <div className="App">
      <Header name="Anuj" last="sharma"/>
      <p>Hello i am YASH</p>
      <Header name="Vivek" last="verma"/>
      <a href=''>Click here</a>
      <Header name="rahul"/>
      <CHeader name="Yash" last="Nigam"/>
      <Channel/>   
      <FunctionClick/>  
      <CFunctionClick roll="60"/>
    </div>
    )
  }
}
export default App;
 