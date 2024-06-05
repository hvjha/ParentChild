import React,{forwardRef} from 'react'

function Childref(props,ref) {
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
}

export default forwardRef(Childref);
