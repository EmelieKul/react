import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Movie(props) {
    console.log(props);
    const rating = parseInt(props.rating);
    
    return (
        <li className="list-group-item">
            { props.item.title } 
            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.deleteItem(props.item.id)}}>X</button>
            {[...Array(rating)].map((star) => {        
                return (         
                    <img src="./images/star.png" alt="Star" key={uuidv4()} witdh="20" height="20" style={{float: "right"}} className="star"/>        
                );
            })}
        </li>
    )
};