import React, { Component } from 'react'
import '../App.css';

// Dummy Data
let dummyData = [
  {
    senderID: 'janedoe',
    text: 'Running late.... Be there soon.'
  },
  {
    senderID: 'rainforest2020',
    text: 'How was your day?'
  },
  {
    senderID: 'coderunner',
    text: 'Coding fire... Hit you back later.'
  }
]
export default class MessageList extends React.Component {
  render() {
    return (
      <div className-='message-list'>
          {dummyData.map((message, index) => {
             return (
               <div key={index} className='message'>
                <div className='message-username'>{message.senderID}</div>
                <div className='message-text'>{message.text}</div>
              </div>
             )
          })}
      </div>
    )
  }
}

