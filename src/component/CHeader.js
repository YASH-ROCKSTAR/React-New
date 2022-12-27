import React from 'react'

class CHeader extends React.Component{
    render(){
        return <h1>Hello class {this.props.name}={this.props.last}</h1>
    }
}
export default CHeader