import React from 'react'
import './App.css';
// import {Header} from './component/Header'
// import CHeader from './component/CHeader'
// import Channel from './component/Channel';
// import FunctionClick from './component/Function\Click';
// import CFunctionClick from './component/CFunctionClick';
// import Testing from './component/Testing';
import Stylesheet from './component/Stylesheet';
import Inline from './component/Inline';
import './appstyle.css'
import Style from './appstyle.module.css'
import Form from './component/Form'
import Routing from './component/Routing'
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
    const numbers=[3,4,5,6]
    return(
      <div className="App">
        {/* <h1 className={Style.success}>Green</h1>
        <h1 className='error'>Error</h1>
        <h1>Error</h1> */}
        {/* <Header name="Anuj" last="sharma"/>
        <p>Hello i am YASH</p>
        <Header name="Vivek" last="verma"/>
        <a href=''>Click here</a>
        <Header name="rahul"/>
        <CHeader name="Yash" last="Nigam"/>
        <Channel/>   
        <FunctionClick/>  
        <CFunctionClick roll="60" numbers={numbers}/> */}
        {/* <Stylesheet isvalue={false}></Stylesheet>
        <Inline></Inline> */}
        {/* <Form></Form> */}
        <Routing></Routing>
      </div>
    )
  }
}
export default App;
 