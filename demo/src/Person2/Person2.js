import React from 'react';
const person2=(props)=>{
    return (
    <div>
        <p>Hello I'am {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
    </div>
    )
}
export default person2;