import React,{useState} from 'react';
const Title = () => {
    const [Title, setTitle] = useState('Demo')  
    const [isInput, setIsInput] = useState(false)    
    const hendelClick = () =>{
        setIsInput(true)
    }
    const hendelChange = (e) =>{
        setTitle(e.target.value)
    }
    const hendelarPress = (e) =>{
        if (e.key == 'Enter') {
            setIsInput(false)
        }
    } 
    const hendelBlur = () =>{
        setIsInput(false)
    }
    const content = isInput ? <input type="text" onChange={hendelChange} value={Title} onKeyPress={hendelarPress} onBlur={hendelBlur}/> : Title
    return ( 
		<div className="container">
            <h1 onClick={hendelClick}>{content}</h1>
        </div>
     );
}
 
export default Title;