import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import classNames from 'classnames'
import './DropZone.css'
import logo from './receiptlogo.png'

class Drop extends Component {
    render(){
        return(
            <div id="dropbox">
                 <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps, isDragActive}) => {
                    return (
                        <div
                        {...getRootProps()}
                        className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
                        >
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                            <div className="dragboxhover">
                            <img src={logo}></img>
                            <p>drag and drop folders and files from your desktop or use file browser</p>
                            </div>:
                            <div className="dragbox">
                            <img src={logo}></img>
                            <p>drag and drop folders and files from your desktop or use file browser</p>
                            </div>
                        }
                        </div>
                    )
                    }}
                </Dropzone>
            </div>
        )
    }
}

export default Drop
