import React,{useState} from 'react'
import SingleDigit from './SingleDigit'
import Lap from '../Lap/Lap'
import './Digit.css'
const Digits = () => {
    const [min, setMin] = useState(0)   
    const [hours, setHours] = useState(0)   
    const [sec, setSec] = useState(0)
	const [start,setStart] = useState(true)
	const [stop,setStop] = useState(false)
	const [lap,setLap] = useState(false)
	const [clear,setClear] = useState(false)
	const [interval, setIntervals] = useState()
	let minite = min
	let secend = sec
	let hour = hours
	const hendelStart = () =>{
		setStart(false)
		setStop(true)
		const intervalID = setInterval(()=>{
			secend +=1
			setSec(secend)
			setMin(minite)
			if (secend>9) {
				secend = 0
				minite +=1
			}
			if (minite>5) {
				minite = 0
				hour +=1
				setHours(hour)
			}
		},1000)
		setIntervals(intervalID)
		console.log(sec)
	}
	
	const hendelStop = () =>{
		setStop(false)
		setStart(true)
		setClear(true)
		setLap(false)
		clearInterval(interval)
	}
	const [showlap, setShowlap] = useState([])
	let singleLap = ''
	const hendelLap = () =>{
		setShowlap ([ ...showlap,{hours,min,sec}])
		console.log(showlap)
		
	}
	 singleLap = showlap.map((e,index)=>{
		return <Lap min={e.min} sec={e.sec} hour={e.hours} key={index}/>
	})
	const hendelClear = () =>{
		setStop(false)
		setStart(true)
		setClear(false)
		setMin(0)
		setSec(0)
		setHours(0)
		setShowlap([])
	}
	
	let content = ''
	if(start){
		content=<a className="btn-floating btn-large cyan pulse" onClick={hendelStart}><i className="material-icons">play_arrow</i></a>
	}
	if(stop){
		content=(<div className="button">
				<a className="btn-floating btn-large cyan pulse" onClick={hendelStop}><i className="material-icons">pause</i></a> 
				<a className="btn-floating btn-large cyan pulse" onClick={hendelLap}><i className="material-icons">add</i></a> 
			</div>)
	}if(!stop && clear){
		content=(<div className="button">
				<a className="btn-floating btn-large cyan pulse" onClick={hendelStart}><i className="material-icons">play_arrow</i></a> 
				<a className="btn-floating btn-large cyan pulse" onClick={hendelClear}><i className="material-icons">clear</i></a> 
			</div>)
	}
    return ( 
        <div className="container">
			<div className="flex">
            <SingleDigit value={hours}/>
            <SingleDigit value={min}/>
            <SingleDigit value={sec}/>
			</div>
			<div className="button-group">
			{content}
			</div>
			{singleLap}
        </div>
     );
}
 
export default Digits;