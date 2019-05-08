import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import RoomList from './components/RoomList'
import SendMessageForm from './components/SendMessageForm'
import NewRoomForm from './components/NewRoomForm'
import MessageList from './components/MessageList'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to CodeMeKathy</h1>
        </header>
        <SearchBar />
        <NavBar />
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
