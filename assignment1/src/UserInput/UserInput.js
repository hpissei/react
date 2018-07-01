import React from 'react';
import './UserInput.css';
const userinput=(props)=>{
    return (
        <label>User Input<input type="text" onChange={props.click}  placeholder="textbox" /></label>
    )
}
export default userinput;