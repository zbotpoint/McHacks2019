import React, {Component} from 'react'

class Form extends Component{
    contructor(props){
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this)
    }
    render(){
        return(
            <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="First Name"></input>
            <button type="submit">add</button>
            </form>
        )
    }
}

export default Form