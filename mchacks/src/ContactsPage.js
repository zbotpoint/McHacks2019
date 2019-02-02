import React, {Component} from 'react';
import Form from './Form.js'


class ContactsPage extends Component{
    constructor() {
        super()
        this.state = {
          items: [],
          currentItem: {text:'', key:''},
        }
      }
      handleInput = e => {
        console.log('Hello Input')
      }
      addItem = (e) => {
        e.preventDefault()
        console.log('Hello Add Item')
      }

    render(){
        return(
            <div class="body">
                <p className="title" id="contactstitle">Add Contacts</p>
                <p>Add your friends contact info, so you can request money :)</p>
                <Form 
                    addItem={this.addItem}
                    inputElement={this.inputElement}
                    handleInput={this.handleInput}
                    currentItem={this.state.currentItem}
                />
                <button className="Button">Next Step</button>
            </div>
        )
    }
}

export default ContactsPage