import React,{useState,useContext} from 'react'
import Digits from '../Components/Digits/Digits'
const ThemeContext = React.createContext(min.hours);
const Context = () => {
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
			if (secend>59) {
				secend = 0
				minite +=1
			}
			if (minite>59) {
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
		content=<button onClick={hendelStart}>start</button>
	}
	if(stop){
		content=<div><button onClick={hendelStop}>Stop</button> <button onClick={hendelLap}>lap</button></div>
	}if(!stop && clear){
		content=<div><button onClick={hendelStart}>start</button> <button onClick={hendelClear}>Clear</button></div>
	}
    return ( 
        <ThemeContext.Provider >
      		<Digits />
    	</ThemeContext.Provider>
     );
}
 
export default Context;