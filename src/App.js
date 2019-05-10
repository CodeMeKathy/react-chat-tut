import React from 'react';
import './App.css';
import Chatkit from '@pusher/chatkit';


import SearchBar from './components/SearchBar';
import Header from "./components/Header";
import NavBar from './components/NavBar'
import RoomList from './components/RoomList';
import SendMessageForm from './components/SendMessageForm';
import NewRoomForm from './components/NewRoomForm';
import MessageList from './components/MessageList';

import {  tokenUrl, instanceLocator} from './config';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch)

class App extends React.Component {

  // Connect to Chatkit
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'coderunner',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
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
        <Header />
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
