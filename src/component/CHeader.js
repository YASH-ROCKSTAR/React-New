import React from 'react'
import Testing from './Testing'
class CHeader extends React.Component{

    state={
        users:[
            {id:1,name:"brian",class:"A"},
            {id:2,name:"fernando",class:"B"},
        ]
    } 
    render(){
        // console.log(this.state.users[0].name)
        const newusers=this.state.users.map(function(user,ind){
            return (
                <React.Fragment>
                    <h1 key={ind}>
                        {user.id}
                        {user.name}
                        {user.class}
                    </h1>
                    <Testing key={user.id} value={user.id}></Testing>
                </React.Fragment>
            )
        })
        return (
            <div>
                <h1>Hello class {this.props.name}</h1>
                {this.state.users.map(function(user,ind){
                    return (
                        <h1 key={ind}>
                            {user.id}
                            {user.name}
                            
                            {console.log(ind)}
                        </h1>
                        
                    )

                })}
                {newusers}
            </div>
        )
    }
}
export default CHeader