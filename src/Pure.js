// import React, { PureComponent,Component } from 'react'
// export default class Pure extends PureComponent {
//     constructor(){
//         super();
//         this.state={
//             count:1
//         }
//     }
//   render() {
//     console.log("check re-rendring")
//     return (
//       <div>
//         <h1>Pure component {this.state.count}</h1>
//         <button onClick={()=>this.setState({count:this.state.count})}>update count</button>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import Profile from './Profile'
// export default class Pure extends Component {
//     constructor(){
//         super();
//         this.state={
//             count:1
//         }
//     }
//   render() {
//     return (
//       <div>
//         <Profile count={this.state.count}/>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>update count</button>
//       </div>
//     )
//   }
// }
import React from 'react'
import Profile from './Profile'
export default function Pure() {
  return (
    <div>
      <Profile/>
    </div>
  )
}


