import React from 'react'

export default function ContactCard(props) {
    return (
        <div>
            <img src={props.child[0].avatar} alt=""/>
            <h1>{props.child[0].name}</h1>
            <label for="">Location:</label>
            <h2>{props.child[0].location}</h2>
            <label for="">foodType:</label>
            <h2>{props.child[0].foodType}</h2>
            <label for="">age:</label>
            <h2>{props.child[0].age}</h2>
            <label for="">likes:</label>
            <h2>{props.child[0].likes}</h2>
            <label for="">twitterLink:</label>
            <h2>{props.child[0].twitterLink}</h2><br></br>
            
            <img src={props.child[1].avatar} alt=""/>
            <h1>{props.child[1].name}</h1>
            <label for="">Location:</label>
            <h2>{props.child[1].location}</h2>
            <label for="">foodType:</label>
            <h2>{props.child[1].foodType}</h2>
            <label for="">age:</label>
            <h2>{props.child[1].age}</h2>
            <label for="">likes:</label>
            <h2>{props.child[1].likes}</h2>
            <label for="">twitterLink:</label>
            <h2>{props.child[1].twitterLink}</h2>
        </div>
            
        
    )
}
