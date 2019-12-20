import React,{useState} from 'react'
const Contolar = (props) => {
	// const [controller,setController]=useState({
	// 	start:true,
	// 	stop:false,
	// 	lap:false,
	// 	clear:false
	// })
	const [start,setStart] = useState(true)
	const [stop,setStop] = useState(false)
	const [lap,setLap] = useState(false)
	const [clear,setClear] = useState(false)
	const [interval,setInterval] = useState('')
	const hendelStart = () =>{
		setStart(false)
		setStop(true)
		let mins = props.min
		let sec = props.sec
		if(mins>10){
        sec =sec + 1
        mins = 0 
      }
      if (sec>60) {
        props.min = props.min + 1
        sec = 0
      }
		props.setSec(10)
		console.log(sec)
	}
	
	const hendelStop = () =>{
		setStop(false)
		setStart(true)
		setClear(true)
		setLap(false)
	}
	const hendelLap = () =>{}
	const hendelClear = () =>{
		setStop(false)
		setStart(true)
		setClear(false)
	}
	let content = ''
	if(start){
		content=<button onClick={hendelStart}>start</button>
	}
	if(stop){
		content=<div><button onClick={hendelStop}>Stop</button> <button onClick={hendelLap}>lap</button></div>
	}if(!stop && clear){
		content=<div><button onClick={hendelStart}>start</button> <button onClick={hendelClear}>Clear</button></div>
	}
    return ( 
        <div className="container">
			{content}
        </div>
     );
}
 
export default Contolar;