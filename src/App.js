import React, { Component } from 'react';
import './App.css';
import ListItems from './Components/ListItems'
import Button from './Components/Button'
import dataFile from './data'
import './reset.css'

class App extends Component {
  constructor(){
   super()
    this.state = {
      data: dataFile,
      index: 0
    }
  }
  handlePaging = (num) => {
    if(this.state.index === 0 && num === -1) {
      this.setState({
        index: 24
      })
    } else if (this.state.index === 24 && num === 1) {
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: this.state.index + num
      })
    }
  }
  render(){
    // const {id} = this.props

  return (
    
    <div className="App">
      <div className='home'>HOME</div>
      <div className='info'>
      <ListItems person={this.state.data[this.state.index]}/>
      </div>
      <div className='buttons'>
      <a onClick={() => {this.handlePaging(-1)}}><b>{'<- previous'}</b></a>
       <div className='mid-btn'><Button name={'Edit'}/>
        <Button name={'Delete'}/>
        <Button name={'New'}/></div>
      <a onClick={() => {this.handlePaging(1)}}><b>{'next ->'}</b></a>
        </div>
    </div>
  );
}
}
export default App;
