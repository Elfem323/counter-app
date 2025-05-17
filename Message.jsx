import React from 'react'

const Message = (props) => {
   return (
    <div>
        <h2>Hi, {props.name}</h2>
        <p>{props.message}</p>
    </div>
   ); 
}

export default Message