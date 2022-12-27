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
    const numbers=[3,4,5,6];
    const newNumbers= numbers.map(function(numbers){
        return <li>{numbers}</li>
    })
    return (
      <React.Fragment>
        <button onClick={this.changeEvent}>Hit Me</button>
        {/* {this.state.course} */}
        {this.state.roll}
        <ul>{newNumbers}</ul>
        {numbers[0]}
      </React.Fragment>
      
    )
  }
}

export default CFunctionClick

{/* <a href="google.com" onClick=func() return false;> */}