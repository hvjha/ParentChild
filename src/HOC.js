import React, { useState } from 'react'

export default function HOC() {
  return (
    <div>
      <h1>HOC</h1>
      {/* <Counter/> */}
      <HigherOrderComponentRed cmp={Counter}/>
      <HigherOrderComponentGreen cmp={Counter}/>
    </div>
  )
}
function HigherOrderComponentRed(props){
    return(
        <div>
            <h2 style={{backgroundColor:'red',width:100}}><props.cmp/></h2>
        </div>
    )
}
function HigherOrderComponentGreen(props){
    return(
        <div>
            <h2 style={{backgroundColor:'green',width:100}}><props.cmp/></h2>
        </div>
    )
}
function Counter(){
    const [count,setCount]=useState(0)
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
  }
