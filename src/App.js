import React from 'react'
import './App.css';
import {Header} from './component/Header'
import CHeader from './component/CHeader'
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
      <Header/>
      <CHeader/>
    </div>
    )
  }
}
export default App;
 