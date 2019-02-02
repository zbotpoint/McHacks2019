import React, {Component} from 'react';
import Form from './Form.js'


class ContactsPage extends Component{
    render(){
        return(
            <div class="body">
                <p class="title" id="contactstitle">Add Contacts</p>
                <p>Add your friends contact info, so you can request money :)</p>
                <Form/>
                <button className="Button">Next Step</button>
            </div>
        )
    }
}

export default ContactsPage