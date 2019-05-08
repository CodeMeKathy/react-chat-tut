import React from 'react';
import './App.css';
import Chatkit from '@pusher/chatkit';


import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import RoomList from './components/RoomList'
import SendMessageForm from './components/SendMessageForm'
import NewRoomForm from './components/NewRoomForm'
import MessageList from './components/MessageList'

import {  tokenUrl, instanceLocator} from '../config'
class App extends React.Component {

  // Connect to Chatkit
  componentDidMount() {
    const chatManager = new Chatkit.chatManager({
      instanceLocator,
      userID: 'coderunner',
      tokenProvider: new Chatkit.TokenProvider({
        url: 'tokenUrl'
      })
    })
    chatManager.connect()
      .then(currentUser => {
        currentUser.subscribeToRoom({
          roomID: 19408607,
          hooks: {
            onNewMessage: message => {
              console.log('message.text: ', message.text);
            }
          }
        })
      })
  }



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
