import React, { Component } from 'react'

export class CFunctionClick extends Component {

  constructor(props){
    super(props);
    this.changeEvent=this.changeEvent.bind(this)

    this.state={
        course:"MCA",
        roll:this.props.roll
    }
  }  
  changeEvent=()=>{
    console.log("Hello yash",this.state.course)
    this.setState({
        course:"BCA"
    })

    console.log("hello Ajay",this.props.roll)
  }  
  render() {
    const numbers=this.props.numbers;
    // const newNumbers= numbers.map((numbers)=>{ return <li>{numbers}</li> })
    
    // console.log(numbers)
        
    // const newNumbers= numbers.map((numbers)=>{
    //     console.log(numbers)
    //     return <li>{numbers}</li>
    // })
    return (
      <React.Fragment>
        <button onClick={this.changeEvent}>Hit Me</button>
        {/* {this.state.course} */}
        {this.state.roll}
        <ul>
        {
           // numbers.map((numbers)=> <li>{numbers}</li> )
           numbers.length>0 &&
            numbers.map((numbers,ind)=>{ return <li key={numbers}>{numbers}</li> })
        }
        </ul>
        {numbers[0]}
      </React.Fragment>
      
    )
  }
}

export default CFunctionClick

{/* <a href="google.com" onClick=func() return false;> */}