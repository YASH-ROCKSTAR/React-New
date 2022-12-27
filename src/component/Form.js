import React,{Component} from 'react'

class Form extends Component{

    constructor(props){
        super(props)
        this.state={
            username:'',
            address:''
        }
    }
    handleusername=(event)=>{
        this.setState({
            username:event.target.value
            
        })
    }
    handleAddress=(event)=>{
        this.setState({
            address:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.address}`)
        event.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleusername}></input>
                </div>
                <div>
                    <label htmlFor="">Address</label>
                    <textarea value={this.state.address} onChange={this.handleAddress}></textarea>
                </div>
                <button>Submit</button>
            </form>
        )
    }
    
}
export default Form