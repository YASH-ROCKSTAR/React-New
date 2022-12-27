import React,{Fragment}from 'react'

function Functionclick() {

  function ChangeEvent(e){
    e.preventDefault();
    console.log("Hello Event Handdling...",this)
  }
  //event handling should be function not function call
  return (
    //we use fucntion only not fucntion call like() in event handling
    <Fragment> 
        <a href='https://www.google.com/' onClick={ChangeEvent}>Google it</a>
        <h1>Yash Nigam</h1>
    </Fragment>
  )
}

export default Functionclick