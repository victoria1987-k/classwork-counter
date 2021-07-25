import React from 'react'

export default function Product(props) {
    return (
        <div>
            <p>{props.myCount}</p>
            
            <button onClick = {props.handleClick}>Click</button>
        </div>
    )
}
