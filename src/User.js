// parent to child
// import React from 'react'

// export default function User(props) {
//   return (
//     <div>
//       <h1>user Name :{props.name}</h1>
//       <button>Click Me</button>
//     </div>
//   )
// }

// child to parent
import React from 'react'

export default function User(props) {
    const data = "Harsh jha"
  return (
    <div>
      <h1>user Name</h1>
      <button onClick={()=>props.alert(data)}>Click Me</button>
    </div>
  )
}
