import React, { Component,createRef } from 'react'


export default class UseRef extends Component {
    constructor(){
        super();
        this.inputRef = createRef();
    }
    componentDidMount(){
        // console.log(this.inputRef.current.value=1234)
    }
    getVal(){
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color="pink"
        this.inputRef.current.style.backgroundColor="black"
    }
  render() {
    return (
      <div>
        <h1>Use ref component</h1>
        <input type = "text" ref={this.inputRef}/>
        <button onClick={()=>this.getVal()} >click</button>
      </div>
    )
  }
}



