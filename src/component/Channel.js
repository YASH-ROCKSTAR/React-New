import React from 'react'

class Channel extends React.Component{
    //constructor are used to initalise the object
    constructor(){
        super();
        //states are managed within component
        //this is state object
        //in state we can change value
        this.state={
            msg:'I am a coder'
        }
    }
    subscribe(){
        this.setState({
            msg: 'Thanks for subscribing'
        })
    }
    render(){ 
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>{this.subscribe()}}>Subscribe</button>
            </div>
        )
    }
}
//we use exxport default so that we can use it in app.js
export default Channel
