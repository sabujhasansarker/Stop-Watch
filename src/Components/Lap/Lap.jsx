import React from 'react'
const Lap = ({min,sec,hour}) => {
    return ( 
        <div className="flex">
			<h4>{hour} hour</h4>
			<h4>{min} min</h4>
			<h4>{sec} sec</h4>
        </div>
     );
}
 
export default Lap;