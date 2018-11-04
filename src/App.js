import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state ={
    value: '',
    chars : [],
  }

  handleChangeInput =(event) =>{
    
    let value = event.target.value;

    let chars = value.split('').map((currentValue, index)=>{
      return {key:index, value:currentValue};
    }
    )

    this.setState({
      value: value,
      chars: chars
    });
  }

  handleClick = (index)=>{

    const chars = this.state.chars;
    chars.splice(index,1)
    let value = this.state.value.substring(0,index)  + this.state.value.substring(index+1, this.state.value.length)
    console.log(value)
    this.setState({
      chars: chars,
    value: value
    })
  }

  render() {

    return (
      <div className="App">
        <label htmlFor="user-input" >Input </label>
        <input id="user-input" type="text" onChange={this.handleChangeInput} value={this.state.value} />
        <Validation length = {this.state.value.length} />
        {this.state.chars.map((char, index)=>{
          return <Char enteredText = {char.value} key={char.key} handleClick={()=>this.handleClick(index)}/>
        })}
      </div>
    );
  }
}

export default App;
