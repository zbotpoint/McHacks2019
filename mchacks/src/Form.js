import React, {Component} from 'react'

class Form extends Component{
    componentDidUpdate() {
        this.props.inputElement.current.focus()
      }
    render(){
        return(
            <form onSubmit={this.props.addItem}>
            <input
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput} 
              placeholder="First Name">
            </input>
            <button type="submit">add</button>
            </form>
        )
    }
}

export default Form