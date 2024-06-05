// import React,{useRef} from 'react'

// function Ref() {
//     const inputRef = useRef(null)
//     function handleInput(){
//         // inputRef.current.value = "1000"
//         // inputRef.current.focus();
//         // inputRef.current.style.color="red"
//         inputRef.current.style.display="none"
//     }
//   return (
//     <div>
//       <h1>Useref hooks in react</h1>
//       <input type = "text" ref = {inputRef}/>
//       <button onClick={handleInput}>Handle input</button>
//     </div>
//   )
// }

// export default Ref
import React, {useRef} from 'react'
import Childref from './Childref'

function Ref() {
    const inputRef = useRef(null)
    function handleButton(){
        inputRef.current.value = "1000"
    }
  return (
    <div>
      <h1>forward ref in react</h1>
      <Childref ref={inputRef}/>
      <button onClick={handleButton}>Update inputBox</button>
    </div>
  )
}

export default Ref

