import React from 'react'
const SingleDigit = (props) => {
    return ( 
        <div className="round">
            <h1 className="display-2">{props.value<10 ? `0${props.value}` : props.value}</h1>
        </div>
     );
}
 
export default SingleDigit;