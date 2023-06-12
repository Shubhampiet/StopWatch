import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {

  const [timer,setTimer]=useState(0)
  const [isRunning,setIsRunning]=useState(false)
  const [isReset,setIsReset]=useState(false)

  useEffect(()=>{
    let interval;

    if(isRunning){
      interval=setInterval(()=>{
        setTimer((prevTimer)=>(prevTimer+1))
      },1000
      )}
    
    
    return(()=>clearInterval(interval)
      
    )
  },[isRunning])

  const start=()=>{
    setIsRunning(true)
  }

  const stop=()=>{
    setIsRunning(false)
  }

  const reSet=()=>{
    setIsRunning(false)
    setTimer(0)

  }
  return (
    <div className='stopWatchContainer'>
    <h1>Stop Watch</h1>
<span className='stopWatchTimer'>{timer}</span>
{
  (!isRunning)&&(<button onClick={start}>Start</button>)}
  {
  (isRunning)&&(
    <div>
      <button onClick={stop}>Stop</button>
      <button onClick={reSet}>ReSet</button>
    </div>
  )
}
    </div>
  )
}

export default App