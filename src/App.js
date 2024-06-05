// import logo from './logo.svg';
// import './App.css';
// import User from './User';

// function App() {
//   const data = "harsh"
//   return (
//     <div className="App">
//       <h1>Lifting Up State</h1>
//       <User name={data}/>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import User from './User';

// function App() {
//   function parentAlert(item){
//     alert(item)
//   }
//   return (
//     <div className="App">
//       <h1>Lifting Up State</h1>
//       <User alert={parentAlert}/>
//     </div>
//   );
// }

// export default App;

import './App.css';
// import Control from './Control';
import HOC from './HOC';
// import Ref from './Ref';
// import UseRef from './UseRef';
// import Pure from './Pure';


function App() {
  return (
    <div className="App">
      {/* <Pure/> */}
      {/* <UseRef/> */}
      {/* <Ref/> */}
      {/* <Control/> */}
      <HOC/>
    </div>
  );
}

export default App;

