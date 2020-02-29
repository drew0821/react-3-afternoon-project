import React, { Component } from 'react'
import "./Button.css"

class Button extends Component {
    constructor(){
        super()
        this.state = ({

        })
    }
    render(){
        return(
        <div className='blue-btn'>{this.props.name}</div>
        )
    }
}

export default Button