import React, { useState } from 'react'

function Control() {
    const [state,setState]= useState("0000")
    const [item,setItem] = useState("999")
    const [print,setPrint]=useState(null)
    function handleForm(e){
        e.preventDefault();
        setPrint({state,item})
    }
  return (
    <div>
      <h1>Controlled component</h1>
      <form>
      <input type="text" value ={state} onChange={(e)=>setState(e.target.value)}/>
      <h3>valued {state}</h3>
      <input type="text" value ={item} onChange={(e)=>setItem(e.target.value)}/>
      <h3>valued {item}</h3>
      <button onClick={handleForm}>Submit</button>
      </form>
      {print && (
        <div>
            <p>{print.state}</p>
            <p>{print.item}</p>
        </div>
      )}
        
    </div>
  )
}

export default Control
