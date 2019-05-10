import React from 'react'
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class MessageList extends React.Component {

  render() {
    return (
      <div className='App-header'>

        <div>
          <header className="App-header">
            <h1>Welcome to CodeMeKathy</h1>
          </header>

          <form className="form-inline">
            <div className="input-group search-people-div">
              <button className="btn btn-default search-btn" type="submit"><FontAwesomeIcon icon="search" /></button>
              <input className="form-control search" type="search" placeholder="Search People" aria-label="Search"/>
            </div>
          </form>

        </div>
      

      </div>
    )
  }
}
