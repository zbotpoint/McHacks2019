import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import UploadPage from './UploadPage/UploadPage.js'
import ContactsPage from './ContactsPage.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContactsPage />
      </div>
    );
  }
}

export default App;
