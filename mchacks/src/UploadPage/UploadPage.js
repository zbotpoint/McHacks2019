import React, {Component} from 'react';
import './UploadPage.css'
import Drop from './DropZone'

class UploadPage extends Component{
    render(){
        return(
            <div className="body">
                <p className="title">Upload Receipt</p>
                <Drop/>
                <br></br>
                <button className="Button">Next Step</button>
            </div>
        )
    }
}

export default UploadPage