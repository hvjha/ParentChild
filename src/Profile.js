// import React, { Component } from 'react'

// export default class Profile extends Component {
//   render() {
//     console.log("profile re-rendring")
//     return (
//       <div>
//          <h1>Profile component {this.props.count}</h1>

//       </div>
//     )
//   }
// }

// ================= use memo hook ===============

import React, { useState,useMemo } from "react";

export default function Profile() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(12);
  const multiCountMemo = useMemo(function multiCount(){
    console.log("multiCount")
    return count*5
  },[count])
  return (
    <div>
      <h1>{count}</h1>
      <h2>{item}</h2>
      <h3>{multiCountMemo}</h3>
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setItem(item * 9)}>Update item</button>
    </div>
  );
}
