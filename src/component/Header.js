import React from "react";

export const Header=(props)=>{
    console.log(props)
    //we cannot change value once assigned in props 
    // props.name="Yash"
    return (
        <div>
            <h1>Hello {props.name} = {props.last}</h1>
            {props.children}
        </div>
    )
}
// export default Header;